import { NextResponse } from "next/server"
import { BASE_URL } from "@/lib/site-structure"
import { optionAPages } from "@/lib/ae-content"

export function GET() {
  const now = new Date().toISOString()

  const urlEntries = optionAPages
    .filter((page) => page.indexable !== false)
    .map((page) => {
      // Determine priority based on page importance
      let priority = "0.5"
      let changefreq = "monthly"

      if (page.path === "/") {
        priority = "1.0"
        changefreq = "weekly"
      } else if (page.path.startsWith("/services")) {
        priority = "0.9"
        changefreq = "weekly"
      } else if (page.path === "/contact" || page.path === "/etudes-de-cas") {
        priority = "0.8"
        changefreq = "weekly"
      } else if (page.path.startsWith("/ville")) {
        priority = "0.7"
        changefreq = "monthly"
      }

      return `
  <url>
    <loc>${new URL(page.path, BASE_URL).toString()}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join("")

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
