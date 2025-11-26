import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, company, message } = await req.json()

    // Validation des champs obligatoires
    if (!fullName || typeof fullName !== "string" || fullName.trim() === "") {
      return NextResponse.json({ error: "Missing field" }, { status: 400 })
    }
    if (!email || typeof email !== "string" || email.trim() === "") {
      return NextResponse.json({ error: "Missing field" }, { status: 400 })
    }
    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json({ error: "Missing field" }, { status: 400 })
    }

    // Récupération de l'URL du webhook n8n
    const n8nUrl = process.env.N8N_WEBHOOK_URL
    if (!n8nUrl) {
      console.error("[v0] N8N_WEBHOOK_URL is not configured")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Envoi vers n8n
    const res = await fetch(n8nUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        phone: phone ?? "",
        company: company ?? "",
        message,
      }),
    })

    if (!res.ok) {
      console.error("[v0] n8n webhook failed:", res.status, res.statusText)
      return NextResponse.json({ error: "Failed to send" }, { status: 502 })
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
