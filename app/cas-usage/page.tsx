import Link from "next/link"
import { createPageMetadata } from "@/lib/metadata"
import { casUsage, casUsageTasks } from "@/lib/site-structure"
import { SimplePageLayout } from "@/components/simple-page-layout"

export const metadata = createPageMetadata({
  title: "Cas d'usage",
  path: "/cas-usage",
  description: "Contenu à venir.",
})

export default function CasUsageIndex() {
  return (
    <SimplePageLayout
      title="Cas d'usage"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Cas d'usage" },
      ]}
    >
      <p>Contenu à venir.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {casUsage.map((item) => (
          <Link
            key={item.slug}
            href={`/cas-usage/${item.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:text-white hover:border-white/30"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <p className="text-sm text-white/60">Sous-pages disponibles : {casUsageTasks.length} tâches.</p>
    </SimplePageLayout>
  )
}
