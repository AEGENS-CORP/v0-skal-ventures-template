import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Politique de confidentialité — Aperçu",
  path: "/politique-de-confidentialite",
  description: "Page en construction.",
})

export default function PolitiqueDeConfidentialitePage() {
  return (
    <SimplePageLayout
      title="Politique de confidentialité — Aperçu"
      description="Document provisoire présentant la structure attendue de la politique de confidentialité."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Politique de confidentialité" },
      ]}
    >
      <section className="ae-section">
        <h2>Collecte et utilisation</h2>
        <p>
          Les informations détaillées relatives aux traitements seront ajoutées prochainement. Ce texte agit comme placeholder.
        </p>
        <div className="ae-section-links">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/conditions-generales">Conditions générales</Link>
        </div>
      </section>

      <section className="ae-section" id="cookies">
        <h2>Gestion des cookies</h2>
        <p>
          Cette section accueillera la politique cookies complète, incluant les modalités de consentement et de retrait.
        </p>
        <div className="ae-section-links">
          <Link href="/contact">Demander une précision</Link>
          <Link href="/sitemap">Plan du site</Link>
        </div>
      </section>
    </SimplePageLayout>
  )
}
