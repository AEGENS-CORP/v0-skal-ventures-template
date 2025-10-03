import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Merci",
  path: "/contact/merci",
  description: "Contenu à venir.",
})

export default function ContactMerciPage() {
  return (
    <SimplePageLayout
      title="Merci"
      description="Contenu à venir."
      path="/contact/merci"
      dataEntity="contact-confirmation"
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Contact", href: "/contact" },
        { label: "Merci" },
      ]}
    >
      <p>Contenu à venir.</p>
      <p>
        Retourner à la page <Link className="underline" href="/contact">Contact</Link> ou découvrir nos <Link className="underline" href="/services">services</Link>.
      </p>
    </SimplePageLayout>
  )
}

