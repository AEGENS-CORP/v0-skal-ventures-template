import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Conditions générales",
  path: "/conditions-generales",
  description: "Contenu à venir.",
})

export default function ConditionsGeneralesPage() {
  return (
    <SimplePageLayout
      title="Conditions générales"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Conditions générales" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Voir également nos <Link className="underline" href="/mentions-legales">mentions légales</Link>.
      </p>
    </SimplePageLayout>
  )
}
