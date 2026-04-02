import { NextResponse } from "next/server"
import { BASE_URL } from "@/lib/site-structure"
import { optionAPages } from "@/lib/ae-content"

export const dynamic = "force-static"
export const revalidate = 86400

const absolute = (path: string) => new URL(path, BASE_URL).toString()

export function GET() {
  const pages = Array.from(
    new Map(
      optionAPages
        .filter((page) => page.indexable !== false)
        .map((page) => [page.path, page]),
    ).values(),
  ).sort((a, b) => a.path.localeCompare(b.path))

  const lines: string[] = [
    "# AEGENS - llms-full",
    "",
    `- URL racine: ${BASE_URL}`,
    `- Sitemap: ${absolute("/sitemap.xml")}`,
    `- llms.txt: ${absolute("/llms.txt")}`,
    "",
    "## Index complet des pages indexables",
  ]

  for (const page of pages) {
    lines.push(`- [${page.label}](${absolute(page.path)}) - ${page.path}`)
  }

  lines.push("")

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
