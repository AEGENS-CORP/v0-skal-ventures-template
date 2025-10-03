import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { questionHubEntries } from "@/lib/site-structure"

const categories = Array.from(
  questionHubEntries.reduce((acc, entry) => {
    acc.add(entry.category)
    return acc
  }, new Set<string>())
)

export const metadata = createPageMetadata({
  title: "Question-Hub IA",
  path: "/ressources/question-hub-ia",
  description: "Contenu à venir.",
})

export default function QuestionHubPage() {
  return (
    <SimplePageLayout
      title="Question-Hub IA"
      description="Contenu à venir."
      path="/ressources/question-hub-ia"
      dataEntity="resource-overview"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Question-Hub IA" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/ressources/qh/${category}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30 capitalize"
          >
            {category.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}

