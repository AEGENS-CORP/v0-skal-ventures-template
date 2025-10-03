import Link from "next/link"
import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"
import { aeTariffPlans } from "@/lib/ae-site-structure"

export const metadata = createPageMetadata({
  title: "Tarifs",
  path: "/tarifs",
  description: "Offre tarifaire placeholder reliant services, solutions et FAQ.",
})

export default function TarifsPage() {
  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/tarifs" />
      <header className="ae-page-header">
        <h1>Tarifs — Packs Exploration, Accélération, Continuité</h1>
        <p className="ae-muted">
          Les montants sont volontairement laissés ouverts. Chaque pack référence les liens nécessaires vers les pages
          prioritaires.
        </p>
      </header>

      <div className="ae-grid ae-grid-columns-2">
        {aeTariffPlans.map((plan) => (
          <section key={plan.id} className="ae-card" id={plan.id} data-entity="pricing">
            <h2>{plan.name}</h2>
            <p>{plan.summary}</p>
            <p className="ae-muted">{plan.price}</p>
            <div className="ae-section-links">
              {plan.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="ae-section" data-entity="pricing">
        <h2>Besoin d'un devis personnalisé ?</h2>
        <p>Texte de substitution invitant à prendre contact pour ajuster les modalités contractuelles.</p>
        <div className="ae-section-links">
          <Link href="/contact">Contacter l'équipe</Link>
          <Link href="/faq">Consulter la FAQ</Link>
          <Link href="/services#audit">Relire les services</Link>
        </div>
      </section>
    </main>
  )
}
