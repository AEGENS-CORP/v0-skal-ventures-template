import Link from "next/link"
import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"
import { aeSitemapEntries } from "@/lib/ae-site-structure"

const sortedEntries = [...aeSitemapEntries].sort((a, b) => a.localeCompare(b))

export const metadata = createPageMetadata({
  title: "Plan du site",
  path: "/sitemap",
  description: "Plan du site placeholder listant les pages Option A.",
})

export default function SitemapPage() {
  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/sitemap" />
      <header className="ae-page-header">
        <h1>Plan du site</h1>
        <p className="ae-muted">Liste alphabétique des pages actuellement disponibles.</p>
      </header>

      <ul className="ae-grid ae-grid-columns-2">
        {sortedEntries.map((entry) => (
          <li key={entry}>
            <Link href={entry}>{entry}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
