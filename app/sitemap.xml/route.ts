import { NextResponse } from "next/server"
import { BASE_URL } from "@/lib/site-structure"
import { htmlSitemapEntries } from "@/lib/ae-content"

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${htmlSitemapEntries
    .map((route) => `\n  <url><loc>${new URL(route, BASE_URL).toString()}</loc></url>`)
    .join("")}\n</urlset>`

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
