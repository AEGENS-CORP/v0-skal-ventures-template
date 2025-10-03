import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { servicesSections, solutionsSections } from "@/lib/ae-content"
import { AeToc } from "@/components/ae-toc"

const serviceLabelMap = new Map(servicesSections.map((section) => [section.id, section.title]))

export const metadata = createPageMetadata({
  title: "Solutions sectorielles",
  path: "/solutions",
  description: "Page en construction.",
})

export default function SolutionsPage() {
  return (
    <SimplePageLayout
      title="Solutions sectorielles"
      description="Cartographie temporaire des verticales adressées avant publication des cas détaillés."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Solutions" },
      ]}
    >
      <div className="ae-page-grid">
        <AeToc items={solutionsSections.map((section) => ({ id: section.id, label: section.title }))} />

        <div className="ae-stack">
          {solutionsSections.map((section) => (
            <section key={section.id} id={section.id} className="ae-section">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <p className="ae-section-summary">{section.summary}</p>
              <div className="ae-section-links">
                {section.relatedServices.map((serviceId) => (
                  <Link key={serviceId} href={`/services#${serviceId}`}>
                    {serviceLabelMap.get(serviceId) ?? "Service associé"}
                  </Link>
                ))}
                <Link href="/tarifs">Explorer les tarifs</Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </SimplePageLayout>
  )
}
