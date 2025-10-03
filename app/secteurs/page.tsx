import Link from "next/link"
import { createPageMetadata } from "@/lib/metadata"
import { sectors, sectorSubpages } from "@/lib/site-structure"
import { SimplePageLayout } from "@/components/simple-page-layout"

export const metadata = createPageMetadata({
  title: "Secteurs",
  path: "/secteurs",
  description: "Contenu à venir.",
})

export default function SectorsPage() {
  return (
    <SimplePageLayout
      title="Secteurs"
      description="Contenu à venir."
      path="/secteurs"
      dataEntity="sector-overview"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Secteurs" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {sectors.map((sector) => (
          <Link
            key={sector.slug}
            href={`/secteurs/${sector.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {sector.title}
          </Link>
        ))}
      </div>
      <p className="text-sm text-white/60">Chaque secteur dispose de {sectorSubpages.length} sous-pages.</p>
    </SimplePageLayout>
  )
}

