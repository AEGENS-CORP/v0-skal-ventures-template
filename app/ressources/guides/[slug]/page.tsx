import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import { guides, guidesMap } from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = guidesMap.get(params.slug)
  if (!guide) {
    return {}
  }

  return createPageMetadata({
    title: guide.title,
    path: `/ressources/guides/${guide.slug}`,
    description: "Contenu à venir.",
  })
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guidesMap.get(params.slug)

  if (!guide) {
    notFound()
  }

  const canonicalPath = `/ressources/guides/${guide.slug}`

  return (
    <SimplePageLayout
      title={guide.title}
      description="Contenu à venir."
      path={canonicalPath}
      dataEntity="resource-guide"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Guides", href: "/ressources/guides" },
        { label: guide.title },
      ]}
    >
      <p>
        Retrouvez la liste complète des guides sur la page <Link className="underline" href="/ressources/guides">Guides</Link>.
      </p>
      <p>Contenu à venir.</p>
      <LinkSection
        title="Ressources associées"
        links={[
          { href: "/faq", label: "Consulter la FAQ" },
          { href: "/ressources/calculateur-roi", label: "Calculateur ROI" },
        ]}
      />
      <p>
        Retour aux <Link className="underline" href="/ressources/guides">Guides</Link> ou <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}

