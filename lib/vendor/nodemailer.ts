import net from "node:net"
import tls from "node:tls"
import { randomBytes } from "node:crypto"

type AuthOptions = {
  user?: string
  pass?: string
}

type TransportOptions = {
  host: string
  port?: number
  secure?: boolean
  auth?: AuthOptions
  clientName?: string
  rejectUnauthorized?: boolean
}

type Envelope = {
  from: string
  to: string[]
}

type MailOptions = {
  from: string
  to: string | string[]
  replyTo?: string
  subject?: string
  text?: string
  html?: string
}

type SMTPStatus = {
  code: number
  message: string
}

type PendingResolver = {
  resolve: (line: string) => void
  reject: (error: Error) => void
}

export type SentMessageInfo = {
  messageId: string
  accepted: string[]
  rejected: string[]
  envelope: Envelope
}

class SMTPConnection {
  private readonly options: Required<Pick<TransportOptions, "host" | "port" | "secure" | "rejectUnauthorized">> &
    Pick<TransportOptions, "auth" | "clientName">
  private socket: net.Socket | tls.TLSSocket | null = null
  private buffer = ""
  private readonly lines: string[] = []
  private pending: PendingResolver | null = null
  private settledError: Error | null = null

  constructor(options: TransportOptions) {
    if (!options.host) {
      throw new Error("SMTP host must be provided.")
    }

    const secure = options.secure !== false
    const port = options.port ?? (secure ? 465 : 587)

    this.options = {
      host: options.host,
      port,
      secure,
      rejectUnauthorized: options.rejectUnauthorized ?? false,
      auth: options.auth,
      clientName: options.clientName,
    }
  }

  async connect(): Promise<void> {
    const { host, port, secure, rejectUnauthorized } = this.options

    return await new Promise((resolve, reject) => {
      let settled = false

      const settle = (error?: Error) => {
        if (settled) return
        settled = true
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      }

      const handleError = (error: Error) => {
        this.settledError = error
        if (this.pending) {
          this.pending.reject(error)
          this.pending = null
        }
        settle(error)
      }

      const handleClose = () => {
        if (this.pending && !this.settledError) {
          const error = new Error("SMTP connection closed unexpectedly.")
          this.pending.reject(error)
          this.pending = null
        }
      }

      const handleData = (chunk: Buffer | string) => {
        this.buffer += chunk.toString()

        let newlineIndex = this.buffer.indexOf("\r\n")
        while (newlineIndex !== -1) {
          const line = this.buffer.slice(0, newlineIndex)
          this.buffer = this.buffer.slice(newlineIndex + 2)
          this.lines.push(line)
          if (this.pending) {
            const current = this.pending
            this.pending = null
            current.resolve(line)
          }
          newlineIndex = this.buffer.indexOf("\r\n")
        }
      }

      const finalize = async () => {
        try {
          await this.readStatus(220)
          await this.sendCommand(`EHLO ${this.options.clientName ?? "aegens.local"}`, 250)

          const { auth } = this.options
          if (auth?.user && auth?.pass) {
            await this.sendCommand("AUTH LOGIN", 334)
            await this.sendCommand(Buffer.from(auth.user, "utf8").toString("base64"), 334)
            await this.sendCommand(Buffer.from(auth.pass, "utf8").toString("base64"), 235)
          }
          settle()
        } catch (error) {
          settle(error as Error)
        }
      }

      if (secure) {
        const socket = tls.connect({ host, port, rejectUnauthorized }, () => {
          void finalize()
        })
        this.socket = socket
        socket.setEncoding("utf8")
        socket.setKeepAlive(true, 120000)
        socket.on("data", handleData)
        socket.on("error", handleError)
        socket.on("close", handleClose)
      } else {
        const socket = net.createConnection({ host, port }, () => {
          void finalize()
        })
        this.socket = socket
        socket.setEncoding("utf8")
        socket.setKeepAlive(true, 120000)
        socket.on("data", handleData)
        socket.on("error", handleError)
        socket.on("close", handleClose)
      }
    })
  }

  async sendMail(envelope: Envelope, data: string): Promise<{ accepted: string[]; rejected: string[] }> {
    const accepted: string[] = []
    const rejected: string[] = []

    try {
      await this.sendCommand(`MAIL FROM:<${envelope.from}>`, [250, 251, 252])

      for (const recipient of envelope.to) {
        try {
          await this.sendCommand(`RCPT TO:<${recipient}>`, [250, 251, 252])
          accepted.push(recipient)
        } catch (error) {
          rejected.push(recipient)
        }
      }

      if (accepted.length === 0) {
        throw new Error("Aucun destinataire accepté par le serveur SMTP.")
      }

      await this.sendCommand("DATA", 354)
      await this.sendData(data)
      await this.sendCommand("QUIT", 221).catch(() => undefined)
      return { accepted, rejected }
    } finally {
      this.close()
    }
  }

  private async sendCommand(command: string, expected?: number | number[]): Promise<SMTPStatus> {
    await this.write(`${command}\r\n`)
    const response = await this.readStatus()
    if (expected) {
      const codes = Array.isArray(expected) ? expected : [expected]
      if (!codes.includes(response.code)) {
        throw new Error(`SMTP error ${response.code}: ${response.message}`)
      }
    }
    return response
  }

  private async sendData(payload: string): Promise<void> {
    let data = payload
    if (!data.endsWith("\r\n")) {
      data += "\r\n"
    }
    await this.write(data)
    await this.write(".\r\n")
    await this.readStatus([250, 251])
  }

  private async readStatus(expected?: number | number[]): Promise<SMTPStatus> {
    const lines: string[] = []

    while (true) {
      const line = await this.readLine()
      lines.push(line)

      if (/^\d{3} /.test(line)) {
        break
      }
      if (!/^\d{3}-/.test(line)) {
        break
      }
    }

    const lastLine = lines[lines.length - 1]
    const code = Number.parseInt(lastLine.slice(0, 3), 10)
    const message = lines.map((entry) => entry.replace(/^\d{3}[- ]?/, "")).join("\n")

    if (Number.isNaN(code)) {
      throw new Error(`Réponse SMTP inattendue: ${lastLine}`)
    }

    if (expected) {
      const codes = Array.isArray(expected) ? expected : [expected]
      if (!codes.includes(code)) {
        throw new Error(`SMTP error ${code}: ${message}`)
      }
    }

    return { code, message }
  }

  private async readLine(): Promise<string> {
    if (this.lines.length > 0) {
      return this.lines.shift() as string
    }

    return await new Promise<string>((resolve, reject) => {
      this.pending = {
        resolve,
        reject,
      }
    })
  }

  private async write(data: string): Promise<void> {
    const socket = this.socket
    if (!socket) {
      throw new Error("SMTP socket is not connected.")
    }

    await new Promise<void>((resolve, reject) => {
      socket.write(data, (error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }

  private close() {
    if (this.socket) {
      this.socket.end()
      this.socket.destroy()
      this.socket = null
    }
    if (this.pending) {
      this.pending.reject(new Error("Connexion SMTP terminée."))
      this.pending = null
    }
  }
}

class SimpleTransporter {
  constructor(private readonly options: TransportOptions) {}

  async sendMail(mail: MailOptions): Promise<SentMessageInfo> {
    const recipients = ensureRecipientList(mail.to)
    if (recipients.length === 0) {
      throw new Error("Au moins un destinataire est requis pour envoyer un email.")
    }

    const messageId = `${randomBytes(10).toString("hex")}@aegens.local`
    const subject = mail.subject?.trim().length ? mail.subject.trim() : "Message Aegens"
    const textContent = buildTextContent(mail)
    const headerLines = [
      `Message-ID: <${messageId}>`,
      `Date: ${new Date().toUTCString()}`,
      `From: ${mail.from}`,
      `To: ${recipients.join(", ")}`,
    ]

    if (mail.replyTo) {
      headerLines.push(`Reply-To: ${mail.replyTo}`)
    }

    headerLines.push(
      `Subject: ${subject}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=utf-8",
      "Content-Transfer-Encoding: 8bit",
      "",
      textContent,
    )

    const message = dotStuff(headerLines.join("\r\n"))
    const connection = new SMTPConnection(this.options)
    await connection.connect()

    const envelopeFrom = extractAddress(mail.from)
    const envelopeTo = recipients.map(extractAddress)
    const { accepted, rejected } = await connection.sendMail({ from: envelopeFrom, to: envelopeTo }, message)

    return {
      messageId: `<${messageId}>`,
      accepted,
      rejected,
      envelope: {
        from: envelopeFrom,
        to: envelopeTo,
      },
    }
  }
}

function ensureRecipientList(value: string | string[]): string[] {
  if (Array.isArray(value)) {
    return value.filter(Boolean)
  }

  return value
    .split(/[,;]/)
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0)
}

function buildTextContent(mail: MailOptions): string {
  if (mail.text && mail.text.trim().length > 0) {
    return mail.text.trim()
  }

  if (mail.html && mail.html.trim().length > 0) {
    return mail.html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
  }

  return "(Message soumis sans contenu explicite.)"
}

function extractAddress(value: string): string {
  const match = value.match(/<([^>]+)>/)
  return (match ? match[1] : value).trim()
}

function dotStuff(input: string): string {
  return input.replace(/^\./gm, "..")
}

export function createTransport(options: TransportOptions) {
  return new SimpleTransporter(options)
}

const nodemailer = {
  createTransport,
}

export default nodemailer
