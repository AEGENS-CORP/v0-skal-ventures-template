import type { Metadata } from "next"
import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"

export const metadata: Metadata = {
  title: "Plan du site - Skal Ventures",
  description: "Plan du site de Skal Ventures. Accédez rapidement à toutes les pages de notre site.",
}

export default function SitemapPage() {
  return (
    <SimplePageLayout title="Plan du site" description="Accédez rapidement à toutes les pages de notre site">
      <div className="space-y-12">
        {/* Pages principales */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Pages principales</h2>
          <div className="space-y-2">
            <Link
              href="/"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Accueil
            </Link>
            <Link
              href="/a-propos"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              À propos
            </Link>
            <Link
              href="/etudes-de-cas"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Sécurité & conformité
            </Link>
            <Link
              href="/contact"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Contact
            </Link>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Nos Services</h2>
          <div className="space-y-2">
            <Link
              href="/services"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Tous les services
            </Link>
            <div className="pl-4 space-y-2">
              <Link
                href="/services/automatisation"
                className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Automatisation
              </Link>
              <Link
                href="/services/assistant-ia-metier"
                className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Assistants métier IA & RAG
              </Link>
              <Link
                href="/services/analyse-reporting"
                className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Tableaux de bord & KPIs
              </Link>
              <Link
                href="/services/audit"
                className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Audit, cartographie & diagnostic
              </Link>
              <Link
                href="/services/vente-gestion"
                className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
              >
                Croissance commerciale & présence digitale
              </Link>
            </div>
          </div>
        </section>

        {/* Pages par ville */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Nos Services par Ville</h2>
          <div className="space-y-2">
            <Link
              href="/ville/angouleme"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Angoulême
            </Link>
            <Link
              href="/ville/nantes"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Nantes
            </Link>
            <Link
              href="/ville/la-rochelle"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              La Rochelle
            </Link>
            <Link
              href="/ville/la-roche-sur-yon"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              La Roche-sur-Yon
            </Link>
            <Link
              href="/ville/niort"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Niort
            </Link>
            <Link
              href="/ville/poitiers"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Poitiers
            </Link>
          </div>
        </section>

        {/* Pages légales */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Informations légales</h2>
          <div className="space-y-2">
            <Link
              href="/mentions-legales"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
            >
              Politique de confidentialité
            </Link>
          </div>
        </section>
      </div>
    </SimplePageLayout>
  )
}
