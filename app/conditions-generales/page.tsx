import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Conditions générales — Aperçu",
  path: "/conditions-generales",
  description: "Page en construction.",
})

export default function ConditionsGeneralesPage() {
  return (
    <SimplePageLayout
      title="Conditions générales — Aperçu"
      description="Gabarit temporaire avant publication des conditions de service complètes."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Conditions générales" },
      ]}
    >
      <section className="ae-section">
        <h2>Objet et définitions</h2>
        <p>
          Les clauses contractuelles définitives seront décrites ici. Ce texte agit comme substitut provisoire.
        </p>
        <div className="ae-section-links">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
        </div>
      </section>

      <section className="ae-section">
        <h2>Engagements et support</h2>
        <p>
          Cette section présentera la structure de support, les obligations et les processus de résiliation lorsque le contenu
          final sera prêt.
        </p>
        <div className="ae-section-links">
          <Link href="/services#support">Service — Support</Link>
          <Link href="/contact">Contacter l'équipe</Link>
        </div>
      </section>
    </SimplePageLayout>
  )
}
