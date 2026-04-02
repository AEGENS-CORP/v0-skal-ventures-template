import { NextResponse } from "next/server"
import { BASE_URL } from "@/lib/site-structure"
import { NAP, hubPages, detailPagesByHub, modelesChecklistsPages } from "@/lib/ae-content"

export const dynamic = "force-static"
export const revalidate = 86400

const absolute = (path: string) => new URL(path, BASE_URL).toString()

export function GET() {
  const hubs = Object.values(hubPages)

  const lines: string[] = [
    "# AEGENS",
    "",
    "> AEGENS accompagne l'industrie, la logistique et le retail sur des sujets de diagnostic, cadrage et pilotage de projets opérationnels.",
    "",
    "## Site",
    `- URL: ${BASE_URL}`,
    `- Langue principale: fr-FR`,
    `- Contact: ${NAP.email}`,
    `- Téléphone: ${NAP.phone}`,
    `- Sitemap: ${absolute("/sitemap.xml")}`,
    `- Fichier complet: ${absolute("/llms-full.txt")}`,
    "",
    "## Hubs éditoriaux",
  ]

  for (const hub of hubs) {
    lines.push(`- [${hub.label}](${absolute(hub.path)}) - ${hub.intro}`)
  }

  for (const hub of hubs) {
    const pages = detailPagesByHub[hub.key]
    if (!pages?.length) continue

    lines.push("")
    lines.push(`### ${hub.label} - pages`)

    for (const page of pages) {
      lines.push(`- [${page.title}](${absolute(`${hub.path}/${page.slug}`)}) - ${page.intro}`)
    }
  }

  lines.push("")
  lines.push("### Modèles et checklists - pages")
  lines.push(`- [Hub modèles et checklists](${absolute("/modeles-checklists")})`)
  for (const page of modelesChecklistsPages) {
    lines.push(`- [${page.label}](${absolute(page.path)})`)
  }

  lines.push("")
  lines.push("## Utilisation recommandée")
  lines.push("- Commencer par les pages hub pour le contexte.")
  lines.push("- Utiliser les pages de détail pour les cas d'usage, méthodes et FAQ.")
  lines.push("- Utiliser le fichier llms-full.txt pour l'index complet de toutes les pages indexables.")
  lines.push("")

  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
