import Link from "next/link"
import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
  description: "Page de contact placeholder avec points d'entrée vers les services et ressources.",
})

export default function ContactPage() {
  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/contact" />
      <header className="ae-page-header">
        <h1>Contact — Échanger avec l'équipe Aegens</h1>
        <p className="ae-muted">
          Formulaire et informations à compléter. Cette structure garantit la navigation vers les pages prioritaires.
        </p>
      </header>

      <section className="ae-section" data-entity="contact">
        <h2>Coordonnées principales</h2>
        <div className="ae-contact-grid">
          <div className="ae-card">
            <h3>Adresse e-mail</h3>
            <p>Adresse générique à confirmer.</p>
            <Link href="mailto:contact@aegens.com">contact@aegens.com</Link>
          </div>
          <div className="ae-card">
            <h3>Téléphone</h3>
            <p>Numéro placeholder en attendant la validation officielle.</p>
            <Link href="tel:+33123456789">+33 1 23 45 67 89</Link>
          </div>
        </div>
      </section>

      <section className="ae-section" data-entity="contact">
        <h2>Orientations rapides</h2>
        <p>Ces liens permettent de préparer l'échange et de consulter les informations clés.</p>
        <div className="ae-section-links">
          <Link href="/services#audit">Services</Link>
          <Link href="/solutions#commercial">Solutions</Link>
          <Link href="/tarifs">Tarifs</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </section>

      <section className="ae-section" data-entity="contact">
        <h2>Formulaire placeholder</h2>
        <p>
          Un formulaire détaillé sera intégré ici. En attendant, utilisez les liens ci-dessus ou écrivez-nous directement.
        </p>
      </section>
    </main>
  )
}
