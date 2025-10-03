import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Mentions légales — Version provisoire",
  path: "/mentions-legales",
  description: "Page en construction.",
})

export default function MentionsLegalesPage() {
  return (
    <SimplePageLayout
      title="Mentions légales — Version provisoire"
      description="Cette page servira de support légal, les mentions complètes seront publiées à la mise en production."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Mentions légales" },
      ]}
    >
      <section className="ae-section">
        <h2>Identité de l'éditeur</h2>
        <p>
          Les informations juridiques détaillées de l'entité seront intégrées après validation. Les données actuelles sont
          temporaires.
        </p>
        <div className="ae-section-links">
          <Link href="/contact">Contacter l'équipe</Link>
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
        </div>
      </section>

      <section className="ae-section">
        <h2>Hébergement et responsabilité</h2>
        <p>
          Cette section présentera prochainement les informations relatives à l'hébergeur et aux limitations de responsabilité.
        </p>
        <div className="ae-section-links">
          <Link href="/conditions-generales">Conditions générales</Link>
          <Link href="/sitemap">Plan du site</Link>
        </div>
      </section>
    </SimplePageLayout>
  )
}
