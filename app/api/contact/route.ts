import { NextResponse } from "next/server"

export const runtime = "edge"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 10

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const normalizeString = (value: unknown, maxLength: number) => {
  if (typeof value !== "string") {
    return ""
  }

  return value.trim().slice(0, maxLength)
}

const getClientIdentifier = (req: Request) => {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }

  const realIp = req.headers.get("x-real-ip")
  if (realIp) {
    return realIp
  }

  return "unknown"
}

const isRateLimited = (clientId: string) => {
  const now = Date.now()
  const entry = rateLimitStore.get(clientId)

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(clientId, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  rateLimitStore.set(clientId, {
    ...entry,
    count: entry.count + 1,
  })
  return false
}

export async function POST(req: Request) {
  const clientId = getClientIdentifier(req)
  if (isRateLimited(clientId)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    )
  }

  try {
    const body = (await req.json()) as Record<string, unknown>

    const fullName = normalizeString(body.fullName, 120)
    const email = normalizeString(body.email, 160).toLowerCase()
    const message = normalizeString(body.message, 3000)
    const phone = normalizeString(body.phone, 40)
    const company = normalizeString(body.company, 120)

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      )
    }

    const n8nUrl = process.env.N8N_WEBHOOK_URL
    if (!n8nUrl) {
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 },
      )
    }

    try {
      // Validate URL format early to avoid fetch throwing on every request.
      new URL(n8nUrl)
    } catch {
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 },
      )
    }

    const payload = {
      fullName,
      email,
      phone,
      company,
      message,
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)

    let res: Response
    try {
      res = await fetch(n8nUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
        cache: "no-store",
      })
    } finally {
      clearTimeout(timeoutId)
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "")
      console.error("n8n error", res.status, text)
      return NextResponse.json(
        { error: "Failed to send to n8n" },
        { status: 502 },
      )
    }

    // Réponse OK pour le front
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return NextResponse.json(
        { error: "Request timed out" },
        { status: 504 },
      )
    }

    console.error("API /api/contact error:", error)
    return NextResponse.json(
      { error: "Invalid or malformed request" },
      { status: 400 },
    )
  }
}
