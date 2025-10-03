"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="pt-24">
      <Header />
      <Hero />
      <main className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-16">
          <section className="ae-highlight-card">
            <h2 className="text-3xl font-semibold mb-4">Préparez les parcours services</h2>
            <p className="ae-muted">
              Sélection temporaire de sections en construction pour orienter la future offre de services.
            </p>
            <div className="ae-section-links">
              <Link href="/services#audit">Service — Audit</Link>
              <Link href="/services#automatisation-ia">Service — Automatisation IA</Link>
              <Link href="/services#erp-crm-dev">Service — ERP &amp; CRM</Link>
            </div>
          </section>

          <section className="ae-highlight-card">
            <h2 className="text-3xl font-semibold mb-4">Parcours solutions prioritaires</h2>
            <p className="ae-muted">
              Aperçu fictif des secteurs à relier prochainement aux offres détaillées.
            </p>
            <div className="ae-section-links">
              <Link href="/solutions#commercial">Solution — Commercial</Link>
              <Link href="/solutions#production">Solution — Production</Link>
              <Link href="/solutions#logistique">Solution — Logistique</Link>
              <Link href="/solutions#finance">Solution — Finance</Link>
            </div>
          </section>

          <section className="ae-highlight-card">
            <h2 className="text-3xl font-semibold mb-4">Étapes suivantes</h2>
            <p className="ae-muted">
              Naviguez vers les pages en cours de structuration pour compléter l'exploration.
            </p>
            <div className="ae-section-links">
              <Link href="/methode">Découvrir la méthode</Link>
              <Link href="/tarifs">Consulter les tarifs</Link>
              <Link href="/ressources">Accéder aux ressources</Link>
              <Link href="/contact">Écrire à l'équipe</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
