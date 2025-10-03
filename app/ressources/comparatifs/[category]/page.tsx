import Link from "next/link"
import { notFound } from "next/navigation"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { comparatifs } from "@/lib/site-structure"

const categories = Array.from(new Set(comparatifs.map((entry) => entry.category)))

export const dynamicParams = false

export function generateStaticParams() {
  return categories.map((category) => ({ category }))
}

export function generateMetadata({ params }: { params: { category: string } }) {
  if (!categories.includes(params.category)) {
    return {}
  }

  const title = `Comparatifs - ${params.category.replace(/-/g, " ")}`

  return createPageMetadata({
    title,
    path: `/ressources/comparatifs/${params.category}`,
    description: "Contenu à venir.",
  })
}

export default function ComparatifCategoryPage({ params }: { params: { category: string } }) {
  if (!categories.includes(params.category)) {
    notFound()
  }

  const items = comparatifs.filter((entry) => entry.category === params.category)

  return (
    <SimplePageLayout
      title={`Comparatifs - ${params.category.replace(/-/g, " ")}`}
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Comparatifs", href: "/ressources/comparatifs" },
        { label: params.category.replace(/-/g, " ") },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/ressources/comparatifs/${item.category}/${item.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}
