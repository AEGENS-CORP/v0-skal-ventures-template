import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { comparatifs } from "@/lib/site-structure"

const categories = Array.from(new Set(comparatifs.map((item) => item.category)))

export const metadata = createPageMetadata({
  title: "Comparatifs",
  path: "/ressources/comparatifs",
  description: "Contenu à venir.",
})

export default function ComparatifsPage() {
  return (
    <SimplePageLayout
      title="Comparatifs"
      description="Contenu à venir."
      path="/ressources/comparatifs"
      dataEntity="resource-overview"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Comparatifs" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/ressources/comparatifs/${category}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30 uppercase"
          >
            {category.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}

