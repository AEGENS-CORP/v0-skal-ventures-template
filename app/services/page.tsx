import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { servicesSections } from "@/lib/ae-content"
import { AeToc } from "@/components/ae-toc"

export const metadata = createPageMetadata({
  title: "Services — Audit, Automatisation IA, ERP/CRM",
  path: "/services",
  description: "Page en construction.",
})

export default function ServicesPage() {
  return (
    <SimplePageLayout
      title="Services — Audit, Automatisation IA, ERP/CRM"
      description="Panorama temporaire des services clés avant publication des contenus détaillés."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Services" },
      ]}
    >
      <div className="ae-page-grid">
        <AeToc
          items={servicesSections.map((section) => ({ id: section.id, label: section.title }))}
        />

        <div className="ae-stack">
          {servicesSections.map((section) => (
            <section key={section.id} id={section.id} className="ae-section">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <p className="ae-section-summary">{section.summary}</p>
              <div className="ae-section-links">
                <Link href={section.solutionLink.href}>{section.solutionLink.label}</Link>
                <Link href="/contact">Planifier un échange</Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </SimplePageLayout>
  )
}
