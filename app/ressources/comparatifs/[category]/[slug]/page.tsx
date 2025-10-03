import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import { comparatifs } from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  return comparatifs.map((entry) => ({ category: entry.category, slug: entry.slug }))
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const entry = comparatifs.find((item) => item.category === params.category && item.slug === params.slug)

  if (!entry) {
    return {}
  }

  return createPageMetadata({
    title: entry.title,
    path: `/ressources/comparatifs/${entry.category}/${entry.slug}`,
    description: "Contenu à venir.",
  })
}

export default function ComparatifEntryPage({ params }: { params: { category: string; slug: string } }) {
  const entry = comparatifs.find((item) => item.category === params.category && item.slug === params.slug)

  if (!entry) {
    notFound()
  }

  const categoryLabel = entry.category.replace(/-/g, " ")
  const categoryHref = `/ressources/comparatifs/${entry.category}`

  return (
    <SimplePageLayout
      title={entry.title}
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Comparatifs", href: "/ressources/comparatifs" },
        { label: categoryLabel, href: categoryHref },
        { label: entry.title },
      ]}
    >
      <p>
        Voir toutes les comparaisons : <Link className="underline" href={categoryHref}>{categoryLabel}</Link>.
      </p>
      <p>Contenu à venir.</p>
      <LinkSection
        title="Ressources connexes"
        links={[
          { href: "/tarifs", label: "Consulter les tarifs" },
          { href: "/faq", label: "Consulter la FAQ" },
        ]}
      />
      <p>
        Fin du comparatif. Retour à <Link className="underline" href={categoryHref}>{categoryLabel}</Link> ou <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}
