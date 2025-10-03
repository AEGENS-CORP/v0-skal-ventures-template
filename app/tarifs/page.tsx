import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { offerCatalog, servicesSections, solutionsSections } from "@/lib/ae-content"

const serviceMap = new Map(servicesSections.map((section) => [section.id, section.title]))
const solutionMap = new Map(solutionsSections.map((section) => [section.id, section.title]))

export const metadata = createPageMetadata({
  title: "Tarifs — Catalogue provisoire",
  path: "/tarifs",
  description: "Page en construction.",
})

export default function TarifsPage() {
  return (
    <SimplePageLayout
      title="Tarifs — Catalogue provisoire"
      description="Présentation temporaire de trois offres type avant publication des conditions complètes."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Tarifs" },
      ]}
    >
      {offerCatalog.map((offer) => (
        <section key={offer.id} id={offer.id} className="ae-section">
          <h2>{offer.title}</h2>
          <p>{offer.description}</p>
          <p className="ae-section-summary">Budget indicatif : {offer.price}</p>
          <div className="ae-section-links">
            {offer.serviceLinks.map((serviceId) => (
              <Link key={serviceId} href={`/services#${serviceId}`}>
                {serviceMap.get(serviceId) ?? "Service associé"}
              </Link>
            ))}
            {offer.solutionLinks.map((solutionId) => (
              <Link key={solutionId} href={`/solutions#${solutionId}`}>
                {solutionMap.get(solutionId) ?? "Solution associée"}
              </Link>
            ))}
            <Link href="/faq">Questions fréquentes</Link>
            <Link href="/contact">Demander un devis</Link>
          </div>
        </section>
      ))}
    </SimplePageLayout>
  )
}
