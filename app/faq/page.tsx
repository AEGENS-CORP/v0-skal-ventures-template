import Link from "next/link"
import { AeBreadcrumbs } from "@/components/ae-breadcrumbs"
import { createPageMetadata } from "@/lib/metadata"
import { aeFaqItems } from "@/lib/ae-site-structure"

export const metadata = createPageMetadata({
  title: "FAQ",
  path: "/faq",
  description: "Foire aux questions placeholder structurée pour accueillir les réponses officielles.",
})

export default function FaqPage() {
  return (
    <main className="ae-page">
      <AeBreadcrumbs pathname="/faq" />
      <header className="ae-page-header">
        <h1>FAQ — Questions fréquentes sur l'accompagnement IA</h1>
        <p className="ae-muted">
          Les éléments ci-dessous sont temporaires. Ils seront remplacés par les réponses validées par l'équipe.
        </p>
      </header>

      <div className="ae-faq">
        {aeFaqItems.map((item) => (
          <section key={item.question} className="ae-faq-item" data-entity="faq">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
            <div className="ae-section-links">
              <Link href="/services#audit">Voir les services</Link>
              <Link href="/contact">Prendre contact</Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
