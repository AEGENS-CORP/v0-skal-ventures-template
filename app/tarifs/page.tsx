import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Tarifs",
  path: "/tarifs",
  description: "Contenu à venir.",
})

export default function TarifsPage() {
  return (
    <SimplePageLayout
      title="Tarifs"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Tarifs" },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection
        title="Outils utiles"
        links={[
          { href: "/ressources/calculateur-roi", label: "Calculateur ROI" },
          { href: "/contact", label: "Obtenir une estimation" },
        ]}
      />
      <p>
        Explorez aussi nos <Link className="underline" href="/services">services</Link>.
      </p>
    </SimplePageLayout>
  )
}

