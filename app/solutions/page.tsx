import Link from "next/link"
import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { AeStickyToc } from "@/components/ae-sticky-toc"
import { createPageMetadata } from "@/lib/metadata"
import { aeSolutionsSections } from "@/lib/ae-site-structure"

export const metadata = createPageMetadata({
  title: "Solutions",
  path: "/solutions",
  description: "Panorama placeholder des solutions adressées par secteur et fonction.",
})

export default function SolutionsPage() {
  const tocItems = aeSolutionsSections.map((section) => ({
    id: section.id,
    label: section.title,
  }))

  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/solutions" />
      <header className="ae-page-header">
        <h1>Solutions — Parcours métiers prioritaires</h1>
        <p className="ae-muted">
          Cette page récapitule les domaines couverts. Les textes sont indicatifs et seront remplacés par les contenus
          définitifs.
        </p>
      </header>

      <div className="ae-sections-layout">
        <AeStickyToc title="Sommaire des solutions" items={tocItems} />
        <div className="space-y-6">
          {aeSolutionsSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="ae-section"
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
      </div>
    </main>
  )
}
