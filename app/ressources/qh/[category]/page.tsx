import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { questionHubEntries } from "@/lib/site-structure"

const categories = Array.from(new Set(questionHubEntries.map((entry) => entry.category)))

export const dynamicParams = false

export function generateStaticParams() {
  return categories.map((category) => ({ category }))
}

export function generateMetadata({ params }: { params: { category: string } }) {
  if (!categories.includes(params.category)) {
    return {}
  }

  const title = `Question-Hub IA - ${params.category.replace(/-/g, " ")}`

  return createPageMetadata({
    title,
    path: `/ressources/qh/${params.category}`,
    description: "Contenu à venir.",
  })
}

export default function QuestionHubCategoryPage({ params }: { params: { category: string } }) {
  if (!categories.includes(params.category)) {
    notFound()
  }

  const items = questionHubEntries.filter((entry) => entry.category === params.category)

  return (
    <SimplePageLayout
      title={`Question-Hub IA - ${params.category.replace(/-/g, " ")}`}
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Question-Hub IA", href: "/ressources/question-hub-ia" },
        { label: params.category.replace(/-/g, " ") },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/ressources/qh/${item.category}/${item.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}
