import Link from "next/link"
import {
  guides,
  homeRequiredLinks,
  servicesMap,
  casUsageMap,
  sectorsMap,
} from "@/lib/site-structure"

const featuredGuides = guides.slice(0, 3)

export const HomeLinks = () => {
  return (
    <section className="bg-black/60 border-t border-white/10 py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-8 text-white">
        <div>
          <h2 className="text-3xl font-semibold">Parcours rapides</h2>
          <p className="text-white/70">Contenu à venir.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services clés</h3>
            <ul className="space-y-2 text-white/80">
              {homeRequiredLinks.services.map((href) => {
                const slug = href.split("/").pop() ?? ""
                const label = servicesMap.get(slug)?.title ?? href
                return (
                  <li key={href}>
                    <Link className="underline" href={href}>
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cas d'usage</h3>
            <ul className="space-y-2 text-white/80">
              {homeRequiredLinks.casUsage.map((href) => {
                const slug = href.split("/").pop() ?? ""
                const label = casUsageMap.get(slug)?.title ?? href
                return (
                  <li key={href}>
                    <Link className="underline" href={href}>
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Secteurs</h3>
          <ul className="space-y-2 text-white/80">
            {homeRequiredLinks.sectors.map((href) => {
              const slug = href.split("/").pop() ?? ""
              const label = sectorsMap.get(slug)?.title ?? href
              return (
                <li key={href}>
                  <Link className="underline" href={href}>
                    {label}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link className="underline" href="/secteurs">
                Tous les secteurs
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Guides à consulter</h3>
            <ul className="space-y-2 text-white/80">
              {featuredGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link className="underline" href={`/ressources/guides/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Raccourcis</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link className="underline" href="/methode">
                  /methode
                </Link>
              </li>
              <li>
                <Link className="underline" href="/tarifs">
                  /tarifs
                </Link>
              </li>
              <li>
                <Link className="underline" href="/ressources/calculateur-roi">
                  /ressources/calculateur-roi
                </Link>
              </li>
              <li>
                <Link className="underline" href="/ressources/question-hub-ia">
                  /ressources/question-hub-ia
                </Link>
              </li>
              <li>
                <Link className="underline" href="/contact">
                  /contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
