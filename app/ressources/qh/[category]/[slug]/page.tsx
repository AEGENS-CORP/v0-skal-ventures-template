import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import { questionHubEntries } from "@/lib/site-structure"

export const dynamicParams = false

export function generateStaticParams() {
  return questionHubEntries.map((entry) => ({ category: entry.category, slug: entry.slug }))
}

export function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const entry = questionHubEntries.find((item) => item.category === params.category && item.slug === params.slug)

  if (!entry) {
    return {}
  }

  return createPageMetadata({
    title: entry.title,
    path: `/ressources/qh/${entry.category}/${entry.slug}`,
    description: "Contenu à venir.",
  })
}

export default function QuestionHubEntryPage({ params }: { params: { category: string; slug: string } }) {
  const entry = questionHubEntries.find((item) => item.category === params.category && item.slug === params.slug)

  if (!entry) {
    notFound()
  }

  const categoryLabel = entry.category.replace(/-/g, " ")
  const categoryHref = `/ressources/qh/${entry.category}`

  return (
    <SimplePageLayout
      title={entry.title}
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Question-Hub IA", href: "/ressources/question-hub-ia" },
        { label: categoryLabel, href: categoryHref },
        { label: entry.title },
      ]}
    >
      <p>
        Retour aux questions : <Link className="underline" href={categoryHref}>{categoryLabel}</Link>.
      </p>
      <p>Contenu à venir.</p>
      <LinkSection
        title="Pour aller plus loin"
        links={[
          { href: "/faq", label: "Consulter la FAQ" },
          { href: "/ressources/guides", label: "Voir les guides" },
        ]}
      />
      <p>
        Fin de l'article. Retour à la page <Link className="underline" href={categoryHref}>{categoryLabel}</Link> ou <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}

