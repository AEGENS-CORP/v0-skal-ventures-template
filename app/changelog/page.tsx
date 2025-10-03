import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Changelog",
  path: "/changelog",
  description: "Contenu à venir.",
})

export default function ChangelogPage() {
  return (
    <SimplePageLayout
      title="Changelog"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Changelog" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Suivre l'état de nos services sur la page <Link className="underline" href="/status">status</Link>.
      </p>
    </SimplePageLayout>
  )
}
