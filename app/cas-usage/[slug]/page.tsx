import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import {
  casUsage,
  casUsageMap,
  casUsageTasks,
  sectorsMap,
  servicesMap,
} from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  return casUsage.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const casItem = casUsageMap.get(params.slug)
  if (!casItem) {
    return {}
  }

  return createPageMetadata({
    title: casItem.title,
    path: `/cas-usage/${casItem.slug}`,
    description: "Contenu à venir.",
  })
}

export default function CasUsagePage({ params }: { params: { slug: string } }) {
  const casItem = casUsageMap.get(params.slug)

  if (!casItem) {
    notFound()
  }

  const serviceLinks = casItem.relatedServices
    .map((slug) => {
      const item = servicesMap.get(slug)
      return item ? { href: `/services/${slug}`, label: item.title } : null
    })
    .filter(Boolean) as { href: string; label: string }[]

  const sector = sectorsMap.get(casItem.relatedSector)

  const taskLinks = casUsageTasks.map((task) => ({
    href: `/cas-usage/${casItem.slug}/${task.slug}`,
    label: task.title,
  }))

  const canonicalPath = `/cas-usage/${casItem.slug}`

  return (
    <SimplePageLayout
      title={casItem.title}
      description="Contenu à venir."
      path={canonicalPath}
      dataEntity="use-case"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Cas d'usage", href: "/cas-usage" },
        { label: casItem.title },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection title="Services associés" links={serviceLinks} />
      <LinkSection
        title="Secteur recommandé"
        links={sector ? [{ href: `/secteurs/${sector.slug}`, label: sector.title }] : []}
      />
      <LinkSection title="Parcours et tâches" links={taskLinks} />
      <LinkSection
        title="Ressources"
        links={[
          { href: "/ressources/guides", label: "Guides" },
          { href: "/ressources/calculateur-roi", label: "Calculateur ROI" },
        ]}
      />
      <p>
        Questions fréquentes ? Consultez la <Link className="underline" href="/faq">FAQ</Link> ou <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}

