import { NextResponse } from "next/server"
import { BASE_URL } from "@/lib/site-structure"

export function GET() {
  const sitemapUrl = new URL("/sitemap.xml", BASE_URL).toString()
  const llmsUrl = new URL("/llms.txt", BASE_URL).toString()
  const host = new URL(BASE_URL).host

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "",
    `Sitemap: ${sitemapUrl}`,
    `Host: ${host}`,
    `# LLM index: ${llmsUrl}`,
    "",
  ].join("\n")

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
