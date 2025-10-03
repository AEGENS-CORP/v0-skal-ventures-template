import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { resourcesSections } from "@/lib/ae-content"

export const metadata = createPageMetadata({
  title: "Ressources — Blog, Guides, Question Hub, Glossaire",
  path: "/ressources",
  description: "Page en construction.",
})

export default function RessourcesPage() {
  return (
    <SimplePageLayout
      title="Ressources — Blog, Guides, Question Hub, Glossaire"
      description="Aperçu provisoire des contenus éditoriaux en cours de production."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources" },
      ]}
    >
      {resourcesSections.map((section) => (
        <section key={section.id} id={section.id} className="ae-section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <p className="ae-section-summary">{section.summary}</p>
          <div className="ae-section-links">
            {section.links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            {section.showFaqLink && <Link href="/faq">Consulter la FAQ</Link>}
          </div>
        </section>
      ))}
    </SimplePageLayout>
  )
}
