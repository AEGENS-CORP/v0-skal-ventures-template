import Link from "next/link"
import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"
import { aeResourcesSections } from "@/lib/ae-site-structure"

export const metadata = createPageMetadata({
  title: "Ressources",
  path: "/ressources",
  description: "Bibliothèque placeholder pour guider la navigation entre les contenus clés.",
})

export default function RessourcesPage() {
  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/ressources" />
      <header className="ae-page-header">
        <h1>Ressources — Blog, Guides, Question Hub, Glossaire</h1>
        <p className="ae-muted">
          Chaque bloc indique la future structure éditoriale et assure le maillage vers les pages thématiques.
        </p>
      </header>

      <div className="ae-grid ae-grid-columns-2">
        {aeResourcesSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="ae-card"
            data-entity={section.entity}
          >
            <h2>{section.title}</h2>
            <p>{section.summary}</p>
            <div className="ae-section-links">
              {section.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
