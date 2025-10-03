import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"
import { faqAnchors, faqItems } from "@/lib/ae-content"

export const metadata = createPageMetadata({
  title: "FAQ — Questions en préparation",
  path: "/faq",
  description: "Page en construction.",
})

export default function FAQPage() {
  return (
    <SimplePageLayout
      title="FAQ — Questions en préparation"
      description="Cette foire aux questions est actuellement un gabarit destiné à accueillir les réponses finales."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "FAQ" },
      ]}
    >
      {faqItems.map((item, index) => (
        <section key={item.question} id={faqAnchors[index]?.id ?? `question-${index + 1}`} className="ae-section">
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
          <div className="ae-section-links">
            <Link href="/services#audit">Voir le service Audit</Link>
            <Link href="/tarifs">Consulter les tarifs</Link>
          </div>
        </section>
      ))}
    </SimplePageLayout>
  )
}
