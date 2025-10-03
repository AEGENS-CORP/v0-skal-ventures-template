import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import {
  sectorSubpages,
  sectorSubpagesMap,
  sectors,
  sectorsMap,
  servicesMap,
} from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  const params: { slug: string; topic: string }[] = []
  sectors.forEach((sector) => {
    sectorSubpages.forEach((sub) => {
      params.push({ slug: sector.slug, topic: sub.slug })
    })
  })
  return params
}

export function generateMetadata({ params }: { params: { slug: string; topic: string } }) {
  const sector = sectorsMap.get(params.slug)
  const topic = sectorSubpagesMap.get(params.topic)

  if (!sector || !topic) {
    return {}
  }

  return createPageMetadata({
    title: `${topic.title} - ${sector.title}`,
    path: `/secteurs/${sector.slug}/${topic.slug}`,
    description: "Contenu à venir.",
  })
}

export default function SectorSubPage({ params }: { params: { slug: string; topic: string } }) {
  const sector = sectorsMap.get(params.slug)
  const topic = sectorSubpagesMap.get(params.topic)

  if (!sector || !topic) {
    notFound()
  }

  const serviceLinks = sector.relatedServices
    .map((slug) => {
      const item = servicesMap.get(slug)
      return item ? { href: `/services/${slug}`, label: item.title } : null
    })
    .filter(Boolean) as { href: string; label: string }[]

  const extendedLinks = [
    ...serviceLinks,
    { href: "/services/audit-diagnostic", label: "Audit et diagnostic automation" },
  ]

  return (
    <SimplePageLayout
      title={topic.title}
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Secteurs", href: "/secteurs" },
        { label: sector.title, href: `/secteurs/${sector.slug}` },
        { label: topic.title },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection title="Retour au secteur" links={[{ href: `/secteurs/${sector.slug}`, label: sector.title }]} />
      <LinkSection title="Services recommandés" links={extendedLinks} />
      <LinkSection
        title="Ressources"
        links={[
          { href: "/faq", label: "Consulter la FAQ" },
          { href: "/ressources/calculateur-roi", label: "Calculateur ROI" },
        ]}
      />
      <p>
        Besoin d'aide ? <Link className="underline" href="/contact">Contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}

