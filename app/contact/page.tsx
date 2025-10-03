import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
  description: "Contenu à venir.",
})

export default function ContactPage() {
  return (
    <SimplePageLayout
      title="Contact"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Contact" },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection
        title="Ressources utiles"
        links={[
          { href: "/faq", label: "Consulter la FAQ" },
          { href: "/ressources/calculateur-roi", label: "Calculateur ROI" },
        ]}
      />
      <p>
        Après envoi du formulaire, accédez à la page <Link className="underline" href="/contact/merci">merci</Link>.
      </p>
    </SimplePageLayout>
  )
}

