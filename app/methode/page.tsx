import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { servicesSections } from "@/lib/ae-content"

export const metadata = createPageMetadata({
  title: "Méthode — Cadre expérimental",
  path: "/methode",
  description: "Page en construction.",
})

export default function MethodePage() {
  return (
    <SimplePageLayout
      title="Méthode — Cadre expérimental"
      description="Itinéraire temporaire présentant l'articulation de la méthode à détailler."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Méthode" },
      ]}
    >
      <section className="ae-section">
        <h2>Architecture de parcours</h2>
        <p>
          Ce contenu provisoire illustre la structure d'un cadrage IA, conçu pour accueillir les futures informations
          méthodologiques.
        </p>
        <p className="ae-section-summary">
          Chaque étape renverra bientôt vers des ressources dédiées et des livrables détaillés.
        </p>
        <div className="ae-section-links">
          {servicesSections.map((section) => (
            <Link key={section.id} href={`/services#${section.id}`}>
              {section.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="ae-section">
        <h2>Alignement et prochaines actions</h2>
        <p>
          Les compléments éditoriaux seront ajoutés pour documenter le pilotage, la gouvernance et le transfert de
          compétences.
        </p>
        <div className="ae-section-links">
          <Link href="/tarifs">Consulter les options tarifaires</Link>
          <Link href="/faq">Lire la FAQ</Link>
          <Link href="/contact">Contacter l'équipe projet</Link>
        </div>
        <small>
          Le guide détaillé sera publié après validation interne. Les pages services liées restent accessibles pour un aperçu
          des futures offres.
        </small>
      </section>
    </SimplePageLayout>
  )
}
