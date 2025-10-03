import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { outils } from "@/lib/site-structure"

export const metadata = createPageMetadata({
  title: "Outils",
  path: "/ressources/outils",
  description: "Contenu à venir.",
})

export default function OutilsPage() {
  return (
    <SimplePageLayout
      title="Outils"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Outils" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {outils.map((outil) => (
          <Link
            key={outil.slug}
            href={`/ressources/outils/${outil.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {outil.title}
          </Link>
        ))}
      </div>
    </SimplePageLayout>
  )
}

