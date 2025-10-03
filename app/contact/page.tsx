import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Contact — Prise de rendez-vous",
  path: "/contact",
  description: "Page en construction.",
})

export default function ContactPage() {
  return (
    <SimplePageLayout
      title="Contact — Prise de rendez-vous"
      description="Espace temporaire pour centraliser les demandes avant la mise en ligne du formulaire définitif."
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Contact" },
      ]}
    >
      <section className="ae-section">
        <h2>Coordonnées provisoires</h2>
        <p>
          Les informations de contact finales seront publiées prochainement. D'ici là, utilisez ces liens pour explorer les
          pages associées.
        </p>
        <div className="ae-section-links">
          <Link href="/services#support">Service — Support &amp; Pilotage</Link>
          <Link href="/solutions#services-b2b">Solution — Services B2B</Link>
          <Link href="/faq">Consulter la FAQ</Link>
        </div>
      </section>

      <section className="ae-section">
        <h2>Planifier un échange</h2>
        <p>
          L'équipe prépare un agenda partagé. En attendant, suivez les liens ci-dessous pour cadrer votre demande.
        </p>
        <div className="ae-section-links">
          <Link href="/methode">Voir la méthode</Link>
          <Link href="/tarifs">Consulter les tarifs</Link>
          <Link href="/ressources">Accéder aux ressources</Link>
        </div>
      </section>
    </SimplePageLayout>
  )
}
