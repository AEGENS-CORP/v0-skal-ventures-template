import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import {
  casUsageMap,
  sectorsMap,
  services,
  servicesMap,
} from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesMap.get(params.slug)
  if (!service) {
    return {}
  }

  return createPageMetadata({
    title: service.title,
    path: `/services/${service.slug}`,
    description: "Contenu à venir.",
  })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesMap.get(params.slug)

  if (!service) {
    notFound()
  }

  const casLinks = service.relatedCasUsage
    .map((slug) => {
      const item = casUsageMap.get(slug)
      return item ? { href: `/cas-usage/${slug}`, label: item.title } : null
    })
    .filter(Boolean) as { href: string; label: string }[]

  const sectorLinks = service.relatedSectors
    .map((slug) => {
      const item = sectorsMap.get(slug)
      return item ? { href: `/secteurs/${slug}`, label: item.title } : null
    })
    .filter(Boolean) as { href: string; label: string }[]

  return (
    <SimplePageLayout
      title={service.title}
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.title },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection
        title="Informations clés"
        links={[
          { href: "/methode", label: "Découvrir la méthode" },
          { href: "/tarifs", label: "Consulter les tarifs" },
          { href: "/faq", label: "Voir la FAQ" },
        ]}
      />
      <LinkSection title="Cas d'usage associés" links={casLinks} />
      <LinkSection title="Secteurs concernés" links={sectorLinks} />
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p>
          Besoin d'échanger ? <Link className="underline" href="/contact">Contactez-nous</Link>.
        </p>
      </section>
    </SimplePageLayout>
  )
}

