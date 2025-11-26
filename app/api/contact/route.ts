import { NextResponse } from "next/server"

const requiredFields = ["fullName", "email", "message"] as const

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Record<string, unknown>

    // Validation des champs obligatoires
    for (const field of requiredFields) {
      const value = body[field]
      if (!value || typeof value !== "string" || !value.trim()) {
        return NextResponse.json(
          { error: `Missing field: ${field}` },
          { status: 400 },
        )
      }
    }

    const n8nUrl = process.env.N8N_WEBHOOK_URL
    if (!n8nUrl) {
      console.error("N8N_WEBHOOK_URL not set")
      return NextResponse.json(
        { error: "Server misconfigured" },
        { status: 500 },
      )
    }

    const payload = {
      fullName: String(body.fullName),
      email: String(body.email),
      phone: body.phone ? String(body.phone) : "",
      company: body.company ? String(body.company) : "",
      message: String(body.message),
    }

    const res = await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

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
    console.error("API /api/contact error:", error)
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 },
    )
  }
}
