import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Méthode",
  path: "/methode",
  description: "Contenu à venir.",
})

export default function MethodePage() {
  return (
    <SimplePageLayout
      title="Méthode"
      description="Contenu à venir."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Méthode" },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection
        title="Étapes suivantes"
        links={[
          { href: "/services", label: "Découvrir les services" },
          { href: "/contact", label: "Prendre contact" },
        ]}
      />
      <p>
        Questions ? Consultez la <Link className="underline" href="/faq">FAQ</Link>.
      </p>
    </SimplePageLayout>
  )
}
