import { notFound } from "next/navigation"
import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import {
  casUsage,
  casUsageMap,
  casUsageTasksMap,
  servicesMap,
} from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  const params: { slug: string; task: string }[] = []
  casUsage.forEach((item) => {
    casUsageTasksMap.forEach((_task, taskSlug) => {
      params.push({ slug: item.slug, task: taskSlug })
    })
  })
  return params
}

export function generateMetadata({ params }: { params: { slug: string; task: string } }) {
  const casItem = casUsageMap.get(params.slug)
  const task = casUsageTasksMap.get(params.task)

  if (!casItem || !task) {
    return {}
  }

  return createPageMetadata({
    title: `${task.title} - ${casItem.title}`,
    path: `/cas-usage/${casItem.slug}/${task.slug}`,
    description: "Contenu à venir.",
  })
}

export default function CasUsageTaskPage({ params }: { params: { slug: string; task: string } }) {
  const casItem = casUsageMap.get(params.slug)
  const task = casUsageTasksMap.get(params.task)

  if (!casItem || !task) {
    notFound()
  }

  const serviceLinks = casItem.relatedServices
    .map((slug) => {
      const item = servicesMap.get(slug)
      return item ? { href: `/services/${slug}`, label: item.title } : null
    })
    .filter(Boolean) as { href: string; label: string }[]

  return (
    <SimplePageLayout
      title={`${task.title}`}
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Cas d'usage", href: "/cas-usage" },
        { label: casItem.title, href: `/cas-usage/${casItem.slug}` },
        { label: task.title },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection title="Services associés" links={serviceLinks} />
      <LinkSection
        title="Aller plus loin"
        links={[
          { href: `/cas-usage/${casItem.slug}`, label: `Retour : ${casItem.title}` },
          { href: "/faq", label: "Consulter la FAQ" },
          { href: "/ressources/calculateur-roi", label: "Calculateur ROI" },
        ]}
      />
      <p>
        Besoin d'accompagnement ? <Link className="underline" href="/contact">Contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}
