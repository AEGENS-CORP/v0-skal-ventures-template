import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Mentions légales",
  path: "/mentions-legales",
  description: "Contenu à venir.",
})

export default function MentionsLegalesPage() {
  return (
    <SimplePageLayout
      title="Mentions légales"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Mentions légales" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Pour toute demande, <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}
