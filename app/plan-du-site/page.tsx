import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { hubPages, detailPagesByHub, modelesChecklistsPages } from "@/lib/ae-content"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Plan du site",
  path: "/plan-du-site",
  description: "Plan du site AEGENS : accès rapide aux offres, problématiques, expertises, ressources et pages de référence.",
})

export default function SitemapPage() {
  const hubs = Object.values(hubPages)

  return (
    <SimplePageLayout
      title="Plan du site"
      description="Accédez rapidement à l'ensemble des pages Diagnostic, Cadrage et Pilotage."
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Plan du site" }]}
    >
      <div className="space-y-10">
        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Pages principales</h2>
          <div className="space-y-2">
            <Link href="/" className="block text-white/70 hover:text-white">
              Accueil
            </Link>
            <Link href="/contact" className="block text-white/70 hover:text-white">
              Contact
            </Link>
            <Link href="/faq" className="block text-white/70 hover:text-white">
              FAQ
            </Link>
          </div>
        </section>

        {hubs.map((hub) => {
          const pages = detailPagesByHub[hub.key]
          return (
            <section key={hub.path} className="space-y-3">
              <h2 className="text-2xl font-bold text-white">{hub.label}</h2>
              <div className="space-y-2">
                <Link href={hub.path} className="block text-white/70 hover:text-white">
                  {hub.title}
                </Link>
                <div className="pl-4 space-y-2">
                  {pages.map((page) => (
                    <Link key={page.slug} href={`${hub.path}/${page.slug}`} className="block text-white/70 hover:text-white">
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Modèles et checklists</h2>
          <div className="space-y-2">
            <Link href="/modeles-checklists" className="block text-white/70 hover:text-white">
              Modèles et checklists
            </Link>
            <div className="pl-4 space-y-2">
              {modelesChecklistsPages.map((page) => (
                <Link key={page.path} href={page.path} className="block text-white/70 hover:text-white">
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Informations légales</h2>
          <div className="space-y-2">
            <Link href="/mentions-legales" className="block text-white/70 hover:text-white">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="block text-white/70 hover:text-white">
              Politique de confidentialité
            </Link>
          </div>
        </section>
      </div>
    </SimplePageLayout>
  )
}
