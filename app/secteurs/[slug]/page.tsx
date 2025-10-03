import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import {
  casUsageMap,
  sectorSubpages,
  sectors,
  sectorsMap,
  servicesMap,
} from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const sector = sectorsMap.get(params.slug)
  if (!sector) {
    return {}
  }

  return createPageMetadata({
    title: sector.title,
    path: `/secteurs/${sector.slug}`,
    description: "Contenu à venir.",
  })
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = sectorsMap.get(params.slug)

  if (!sector) {
    notFound()
  }

  const casLinks = sector.relatedCasUsage
    .map((slug) => {
      const item = casUsageMap.get(slug)
      return item ? { href: `/cas-usage/${slug}`, label: item.title } : null
    })
    .filter(Boolean) as { href: string; label: string }[]

  const serviceLinks = sector.relatedServices
    .map((slug) => {
      const item = servicesMap.get(slug)
      return item ? { href: `/services/${slug}`, label: item.title } : null
    })
    .filter(Boolean) as { href: string; label: string }[]

  const subpageLinks = sectorSubpages.map((sub) => ({
    href: `/secteurs/${sector.slug}/${sub.slug}`,
    label: sub.title,
  }))

  const extendedServiceLinks = [
    ...serviceLinks,
    { href: "/services/audit-diagnostic", label: "Audit et diagnostic automation" },
  ]

  const canonicalPath = `/secteurs/${sector.slug}`

  return (
    <SimplePageLayout
      title={sector.title}
      description="Contenu à venir."
      path={canonicalPath}
      dataEntity="sector"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Secteurs", href: "/secteurs" },
        { label: sector.title },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection title="Cas d'usage associés" links={casLinks} />
      <LinkSection title="Services recommandés" links={extendedServiceLinks} />
      <LinkSection title="Pages du secteur" links={subpageLinks} />
      <LinkSection
        title="Ressources"
        links={[
          { href: "/ressources/calculateur-roi", label: "Calculateur ROI" },
          { href: "/faq", label: "Consulter la FAQ" },
        ]}
      />
      <p>
        Pour plus d'informations, <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}

