import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { glossaire } from "@/lib/site-structure"

export const metadata = createPageMetadata({
  title: "Glossaire",
  path: "/ressources/glossaire",
  description: "Contenu à venir.",
})

export default function GlossairePage() {
  return (
    <SimplePageLayout
      title="Glossaire"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Glossaire" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {glossaire.map((item) => (
          <Link
            key={item.slug}
            href={`/ressources/glossaire/${item.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}
