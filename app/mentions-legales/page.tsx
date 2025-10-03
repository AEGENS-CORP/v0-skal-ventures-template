import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Mentions légales",
  path: "/mentions-legales",
  description: "Mentions légales placeholder en attente de validation.",
})

export default function MentionsLegalesPage() {
  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/mentions-legales" />
      <header className="ae-page-header">
        <h1>Mentions légales</h1>
        <p className="ae-muted">Contenu juridique à renseigner ultérieurement.</p>
      </header>

      <section className="ae-section" data-entity="legal">
        <h2>Éditeur du site</h2>
        <p>Informations administratives placeholder. Les coordonnées officielles seront ajoutées ici.</p>
      </section>

      <section className="ae-section" data-entity="legal">
        <h2>Responsabilité</h2>
        <p>Texte de substitution décrivant les responsabilités et limites d'usage du site.</p>
      </section>

      <section className="ae-section" data-entity="legal">
        <h2>Hébergement</h2>
        <p>Bloc placeholder pour préciser le prestataire d'hébergement et les coordonnées.</p>
      </section>
    </main>
  )
}
