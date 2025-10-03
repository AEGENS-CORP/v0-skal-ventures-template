import Link from "next/link"
import Script from "next/script"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { LinkSection } from "@/components/link-section"
import { createPageMetadata } from "@/lib/metadata"
import { buildFaqJsonLd } from "@/lib/seo-utils"

export const metadata = createPageMetadata({
  title: "FAQ",
  path: "/faq",
  description: "Contenu à venir.",
})

export default function FAQPage() {
  const faqStructuredData = buildFaqJsonLd([
    { question: "Quand le contenu sera-t-il disponible ?", answer: "Contenu à venir." },
    { question: "Comment contacter l'équipe ?", answer: "Utilisez la page de contact pour soumettre votre demande." },
  ])

  return (
    <SimplePageLayout
      title="FAQ"
      description="Contenu à venir."
      path="/faq"
      dataEntity="faq"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "FAQ" },
      ]}
    >
      <p>Contenu à venir.</p>
      <LinkSection
        title="Ressources utiles"
        links={[
          { href: "/services", label: "Découvrir les services" },
          { href: "/contact", label: "Nous contacter" },
        ]}
      />
      <p>
        Explorez aussi le <Link className="underline" href="/ressources/question-hub-ia">Question-Hub IA</Link>.
      </p>
      <Script id="faq-structured-data" type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </Script>
    </SimplePageLayout>
  )
}

