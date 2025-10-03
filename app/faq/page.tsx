import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "FAQ",
  path: "/faq",
  description: "Contenu à venir.",
})

export default function FAQPage() {
  return (
    <SimplePageLayout
      title="FAQ"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "FAQ" },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection
        title="Ressources utiles"
        links={[
          { href: "/services", label: "Découvrir les services" },
          { href: "/contact", label: "Nous contacter" },
        ]}
      />
      <p>
        Explorez aussi le <Link className="underline" href="/ressources/question-hub-ia">Question-Hub IA</Link>.
      </p>
    </SimplePageLayout>
  )
}
