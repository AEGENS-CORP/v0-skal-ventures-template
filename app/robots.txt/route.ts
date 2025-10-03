import { NextResponse } from "next/server"
import { BASE_URL } from "@/lib/site-structure"

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap.xml", BASE_URL).toString()}`

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
