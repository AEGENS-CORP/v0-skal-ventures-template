import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { guides } from "@/lib/site-structure"

export const metadata = createPageMetadata({
  title: "Guides",
  path: "/ressources/guides",
  description: "Contenu à venir.",
})

export default function GuidesPage() {
  return (
    <SimplePageLayout
      title="Guides"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Guides" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/ressources/guides/${guide.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {guide.title}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}

