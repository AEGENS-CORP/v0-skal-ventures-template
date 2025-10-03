import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Status",
  path: "/status",
  description: "Contenu à venir.",
})

export default function StatusPage() {
  return (
    <SimplePageLayout
      title="Status"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Status" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Retrouvez aussi le <Link className="underline" href="/changelog">changelog</Link>.
      </p>
    </SimplePageLayout>
  )
}

