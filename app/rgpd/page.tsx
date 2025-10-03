import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Politique de confidentialité",
  path: "/rgpd",
  description: "Contenu à venir.",
})

export default function RgpdPage() {
  return (
    <SimplePageLayout
      title="Politique de confidentialité"
      description="Contenu à venir."
      path="/rgpd"
      dataEntity="legal"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Politique de confidentialité" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Consultez aussi notre <Link className="underline" href="/cookies">politique cookies</Link>.
      </p>
    </SimplePageLayout>
  )
}

