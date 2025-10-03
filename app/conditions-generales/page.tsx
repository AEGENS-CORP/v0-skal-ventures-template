import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Conditions générales",
  path: "/conditions-generales",
  description: "Conditions générales placeholder en attente de validation contractuelle.",
})

export default function ConditionsGeneralesPage() {
  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/conditions-generales" />
      <header className="ae-page-header">
        <h1>Conditions générales</h1>
        <p className="ae-muted">Document contractuel à compléter et valider.</p>
      </header>

      <section className="ae-section" data-entity="legal">
        <h2>Objet</h2>
        <p>Résumé générique décrivant le périmètre des prestations couvertes.</p>
      </section>

      <section className="ae-section" data-entity="legal">
        <h2>Engagements réciproques</h2>
        <p>Texte placeholder détaillant les obligations des parties.</p>
      </section>

      <section className="ae-section" data-entity="legal">
        <h2>Modalités financières</h2>
        <p>Bloc provisoire évoquant les conditions tarifaires et de facturation.</p>
      </section>
    </main>
  )
}
