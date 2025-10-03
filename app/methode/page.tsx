import Link from "next/link"
import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"
import { aeServicesSections } from "@/lib/ae-site-structure"

export const metadata = createPageMetadata({
  title: "Méthode",
  path: "/methode",
  description: "Parcours méthodologique placeholder pour décrire l'accompagnement IA.",
})

const phases = [
  {
    title: "Découverte",
    description:
      "Étape introductive générique dédiée à la qualification des enjeux et à la collecte des attentes.",
  },
  {
    title: "Design collaboratif",
    description:
      "Phase de cadrage placeholder mettant en avant la co-construction et la préparation des expérimentations.",
  },
  {
    title: "Déploiement itératif",
    description:
      "Bloc neutre illustrant le pilotage des lots de production et la montée en compétences des équipes.",
  },
]

export default function MethodePage() {
  const serviceLinks = aeServicesSections.map((section) => ({
    href: `/services#${section.id}`,
    label: section.title,
  }))

  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/methode" />
      <header className="ae-page-header">
        <h1>Méthode — Cadre d'accompagnement IA</h1>
        <p className="ae-muted">
          Ce gabarit présente les grandes étapes de collaboration. Il sert de base avant l'intégration des contenus
          définitifs.
        </p>
      </header>

      <section className="ae-section" data-entity="method">
        <h2>Phases structurantes</h2>
        <div className="ae-grid ae-grid-columns-2">
          {phases.map((phase) => (
            <div key={phase.title} className="ae-card">
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
              <div className="ae-section-links">
                <Link href="/tarifs">Tarification indicative</Link>
                <Link href="/faq">FAQ</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ae-section" data-entity="method">
        <h2>Passerelles vers les services</h2>
        <p>
          Liste provisoire des services associés pour assurer le maillage interne. Chaque lien renvoie vers les ancres de la
          page Services.
        </p>
        <ul className="space-y-2">
          {serviceLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="ae-section" data-entity="method">
        <h2>Prochaines étapes</h2>
        <p>
          Ce bloc placeholder suggère les actions à engager à l'issue du cadrage. Les contenus finaux viendront préciser les
          livrables.
        </p>
        <div className="ae-section-links">
          <Link href="/tarifs">Consulter les tarifs</Link>
          <Link href="/faq">Consulter la FAQ</Link>
          <Link href="/contact">Planifier un échange</Link>
        </div>
      </section>
    </main>
  )
}
