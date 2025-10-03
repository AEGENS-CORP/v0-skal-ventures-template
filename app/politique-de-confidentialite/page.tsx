import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Politique de confidentialité",
  path: "/politique-de-confidentialite",
  description: "Politique de confidentialité placeholder incluant une section cookies.",
})

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/politique-de-confidentialite" />
      <header className="ae-page-header">
        <h1>Politique de confidentialité</h1>
        <p className="ae-muted">Texte de conformité à compléter selon la réglementation applicable.</p>
      </header>

      <section className="ae-section" data-entity="legal">
        <h2>Traitement des données</h2>
        <p>Description provisoire des principes de traitement et des garanties apportées.</p>
      </section>

      <section id="cookies" className="ae-section" data-entity="legal">
        <h2>Gestion des cookies</h2>
        <p>Bloc placeholder listant les familles de cookies utilisés. Détails et durées à préciser.</p>
      </section>

      <section className="ae-section" data-entity="legal">
        <h2>Droits des utilisateurs</h2>
        <p>Texte générique rappelant les droits d'accès, de rectification et d'opposition.</p>
      </section>
    </main>
  )
}
