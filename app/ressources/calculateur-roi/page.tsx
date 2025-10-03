import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Calculateur ROI",
  path: "/ressources/calculateur-roi",
  description: "Contenu à venir.",
})

export default function CalculateurROIPage() {
  return (
    <SimplePageLayout
      title="Calculateur ROI"
      description="Contenu à venir."
      path="/ressources/calculateur-roi"
      dataEntity="resource-tool"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Ressources", href: "/ressources" },
        { label: "Calculateur ROI" },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection
        title="Actions rapides"
        links={[
          { href: "/tarifs", label: "Consulter les tarifs" },
          { href: "/contact", label: "Contacter l'équipe" },
        ]}
      />
      <p>
        Besoin d'aide ? Consultez la <Link className="underline" href="/faq">FAQ</Link>.
      </p>
    </SimplePageLayout>
  )
}

