import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const FALLBACK_FROM = "Aegens Contact <contact@aegens.com>"
const DESTINATION_EMAIL = "contact@aegens.com"

const SUBJECT_LABELS: Record<string, string> = {
  Web: "Web",
  Cloud: "Cloud",
  Data: "Data",
  IA: "IA",
  Autre: "Autre",
}

type ContactPayload = {
  nameCompany?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") {
    return ""
  }
  return value.replace(/[\r\n]+/g, " ").trim()
}

function sanitizeMultiline(value: unknown): string {
  if (typeof value !== "string") {
    return ""
  }
  return value.replace(/\r/g, "").trim()
}

function resolveTransportOptions() {
  const host = process.env.SMTP_HOST
  if (!host) {
    throw new Error("Le serveur SMTP n'est pas configuré. Définissez SMTP_HOST.")
  }

  const portValue = Number.parseInt(process.env.SMTP_PORT ?? "", 10)
  const secureFlag = process.env.SMTP_SECURE
  const secure = secureFlag ? secureFlag !== "false" && secureFlag !== "0" : undefined

  const rejectUnauthorizedFlag = process.env.SMTP_REJECT_UNAUTHORIZED
  const rejectUnauthorized = rejectUnauthorizedFlag ? rejectUnauthorizedFlag === "true" : undefined

  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  return {
    host,
    port: Number.isNaN(portValue) ? undefined : portValue,
    secure,
    auth: user ? { user, pass: pass ?? "" } : undefined,
    clientName: process.env.SMTP_CLIENT_NAME ?? "aegens.com",
    rejectUnauthorized,
  }
}

function buildEmailBody({
  name,
  email,
  subject,
  message,
  request,
}: {
  name: string
  email: string
  subject: string
  message: string
  request: Request
}) {
  const lines: string[] = []

  if (name) {
    lines.push(`Nom / Entreprise: ${name}`)
  }
  if (email) {
    lines.push(`Email: ${email}`)
  }
  if (subject) {
    lines.push(`Sujet sélectionné: ${subject}`)
  }

  if (message) {
    if (lines.length > 0) {
      lines.push("")
    }
    lines.push("Message:")
    lines.push(message)
  }

  const origin = request.headers.get("origin") ?? request.headers.get("referer") ?? "Non communiqué"
  const userAgent = request.headers.get("user-agent") ?? "Non communiqué"

  lines.push("", "--", `Origine: ${origin}`, `User-Agent: ${userAgent}`, `Horodatage: ${new Date().toISOString()}`)

  return lines.join("\n")
}

export async function POST(request: Request) {
  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch (error) {
    console.error("Impossible de parser la requête /api/contact", error)
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 })
  }

  const nameCompany = sanitize(payload.nameCompany)
  const email = sanitize(payload.email)
  const selectedSubjectRaw = sanitize(payload.subject)
  const selectedSubject = SUBJECT_LABELS[selectedSubjectRaw] ?? ""
  const message = sanitizeMultiline(payload.message)

  try {
    const transportOptions = resolveTransportOptions()
    const transporter = nodemailer.createTransport(transportOptions)

    const emailSubject = selectedSubject
      ? `[Contact Aegens] ${selectedSubject}`
      : "Nouveau message — Formulaire de contact Aegens"

    const textBody = buildEmailBody({
      name: nameCompany,
      email,
      subject: selectedSubject,
      message,
      request,
    })

    const replyTo = email || undefined

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM ?? FALLBACK_FROM,
      to: DESTINATION_EMAIL,
      replyTo,
      subject: emailSubject,
      text: textBody,
    })

    return NextResponse.json({ success: true, messageId: info.messageId })
  } catch (error) {
    console.error("Erreur lors de l'envoi du message de contact", error)
    return NextResponse.json(
      {
        error: "Le service de messagerie est indisponible pour le moment. Merci de réessayer plus tard.",
      },
      { status: 502 },
    )
  }
}
