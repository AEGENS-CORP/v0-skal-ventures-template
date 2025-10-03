import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Politique cookies",
  path: "/cookies",
  description: "Contenu à venir.",
})

export default function CookiesPage() {
  return (
    <SimplePageLayout
      title="Politique cookies"
      description="Contenu à venir."
      path="/cookies"
      dataEntity="legal"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Politique cookies" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Gérez vos préférences via le bandeau cookies ou <Link className="underline" href="/contact">contactez-nous</Link>.
      </p>
    </SimplePageLayout>
  )
}

