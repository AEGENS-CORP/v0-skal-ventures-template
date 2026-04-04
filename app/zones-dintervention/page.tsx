import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { createPageMetadata } from "@/lib/metadata"

const paragraphClass = "ae-text text-base sm:text-lg leading-relaxed"
const bulletClass = "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

export const metadata = createPageMetadata({
  title:
    "Zone d’intervention | Vendée, Charente, Charente-Maritime, Deux-Sèvres, Vienne, Loire-Atlantique, Maine-et-Loire | AEGENS",
  path: "/zones-dintervention",
  description:
    "AEGENS intervient en Vendée, Charente, Charente-Maritime, Deux-Sèvres, Vienne, Loire-Atlantique et Maine-et-Loire pour l’audit, le cadrage et le pilotage de projets.",
})

const departments = [
  {
    title: "Vendée",
    cities: "La Roche-sur-Yon, Les Sables-d’Olonne, Challans, Fontenay-le-Comte, Luçon, Montaigu-Vendée",
  },
  {
    title: "Charente",
    cities: "Angoulême, Cognac, Soyaux, Champniers, Jarnac, Barbezieux-Saint-Hilaire",
  },
  {
    title: "Charente-Maritime",
    cities: "La Rochelle, Rochefort, Saintes, Royan, Surgères, Périgny, Aytré",
  },
  {
    title: "Deux-Sèvres",
    cities: "Niort, Bressuire, Parthenay, Thouars, Mauléon",
  },
  {
    title: "Vienne",
    cities: "Poitiers, Châtellerault, Loudun, Montmorillon",
  },
  {
    title: "Loire-Atlantique",
    cities: "Nantes, Saint-Nazaire, Carquefou, Ancenis-Saint-Géréon, Orvault, Rezé, Vertou, Couëron",
  },
  {
    title: "Maine-et-Loire",
    cities: "Angers, Cholet, Saumur, Segré-en-Anjou Bleu, Beaupréau-en-Mauges",
  },
]

const faq = [
  {
    q: "Intervenez-vous uniquement sur site ?",
    a: "Non. Nous intervenons sur site, à distance ou en mode hybride selon le sujet. Les phases d’audit et d’ateliers gagnent souvent à être menées sur place.",
  },
  {
    q: "Intervenez-vous uniquement dans les grandes villes ?",
    a: "Non. Nous intervenons aussi sur des zones industrielles et logistiques plus diffuses dès lors que le sujet entre dans notre périmètre d’expertise.",
  },
  {
    q: "Pouvez-vous intervenir sur plusieurs sites ?",
    a: "Oui. Notre approche est adaptée aux sujets multi-sites et multi-équipes.",
  },
  {
    q: "Travaillez-vous hors de cette zone ?",
    a: "Oui, ponctuellement. Mais cette zone constitue notre cœur d’intervention de proximité.",
  },
]

export default function ZonesDInterventionPage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 border-b border-white/10 px-4 pb-4 pt-20 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Zones d’intervention" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 md:py-14">
        <div className="mx-auto max-w-[1240px] space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center">
              <div className="mx-auto w-full max-w-[280px] rounded-2xl border border-[#34e0a0]/30 bg-black/30 p-3">
                <div className="relative aspect-square overflow-hidden rounded-xl border border-white/15 bg-black/55">
                  <Image
                    src="/images-site/carte-france-zones.png"
                    alt="Carte des zones d’intervention AEGENS"
                    fill
                    className="object-contain p-2"
                    sizes="(min-width: 1024px) 280px, 220px"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,3.8rem)] leading-[1.03] font-extrabold text-balance">
                  Nos zones d’intervention
                </h1>
                <p className={paragraphClass}>
                  AEGENS intervient auprès des entreprises situées en Vendée, Charente, Charente-Maritime,
                  Deux-Sèvres, Vienne, Loire-Atlantique et Maine-et-Loire.
                </p>
                <p className={paragraphClass}>
                  Nous accompagnons principalement des entreprises de l’industrie, de la logistique et du retail sur des
                  sujets de diagnostic, cadrage, cahier des charges, pilotage et mise en œuvre.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Button asChild size="lg" className={primaryButtonClass}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="presence-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="presence-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Une présence de proximité sur un territoire cohérent
              </h2>
              <p className={paragraphClass}>
                Nous intervenons sur un territoire où les réalités économiques, industrielles et opérationnelles se
                recoupent fortement. Ce maillage nous permet d’être réactifs, de travailler sur site quand c’est utile,
                et d’accompagner des entreprises qui cherchent un cadre clair et tenable.
              </p>
              <ul className={bulletClass}>
                <li>Sur site pour les phases d’audit, d’ateliers, de cadrage et de pilotage.</li>
                <li>À distance pour le suivi, la production, la coordination et la formalisation.</li>
                <li>En mode hybride quand le sujet demande proximité terrain et efficacité d’exécution.</li>
              </ul>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="zones-title">
            <article className="mx-auto max-w-[1080px] space-y-6">
              <h2 id="zones-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Là où nous intervenons
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {departments.map((item) => (
                  <article key={item.title} className="rounded-2xl border border-white/12 bg-black/28 p-5 sm:p-6 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">{item.title}</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">{item.cities}</p>
                  </article>
                ))}
              </div>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="types-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="types-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Pour quels types d’entreprises
              </h2>
              <p className={paragraphClass}>
                Nous accompagnons des entreprises qui ont besoin de faire avancer un sujet devenu trop important pour
                rester géré de manière informelle : PME industrielles, entreprises multi-sites, acteurs logistiques,
                organisations en croissance et structures à flux opérationnels importants.
              </p>
              <ul className={bulletClass}>
                <li>Clarifier un sujet encore flou.</li>
                <li>Remettre à plat un fonctionnement.</li>
                <li>Cadrer un besoin avant consultation.</li>
                <li>Construire un cahier des charges sérieux.</li>
                <li>Piloter une mise en œuvre et gérer des prestataires.</li>
              </ul>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="terrain-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="terrain-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Ce que nous faisons sur le terrain
              </h2>
              <p className={paragraphClass}>
                Quand nous intervenons localement, ce n’est pas pour “faire présence”. C’est parce que certains sujets
                se lisent mieux sur place : audits de fonctionnement, diagnostics de flux, écarts entre services,
                ateliers de cadrage et phases sensibles de mise en œuvre.
              </p>
              <p className={paragraphClass}>
                Le terrain permet de voir plus vite où le fonctionnement se déforme, où les validations ralentissent,
                où les reprises apparaissent et ce qu’il faut structurer pour que la suite tienne.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="maniere-title">
            <article className="mx-auto max-w-[1080px] space-y-6">
              <h2 id="maniere-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Notre manière d’intervenir localement
              </h2>

              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-white/12 bg-black/28 p-5 sm:p-6 space-y-2">
                  <h3 className="ae-heading text-xl font-semibold">Quand le sujet est flou</h3>
                  <p className="ae-text text-sm sm:text-base leading-relaxed">
                    Nous intervenons d’abord en audit ou diagnostic pour objectiver la situation et distinguer le
                    symptôme du problème de fond.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/12 bg-black/28 p-5 sm:p-6 space-y-2">
                  <h3 className="ae-heading text-xl font-semibold">Quand le besoin existe déjà</h3>
                  <p className="ae-text text-sm sm:text-base leading-relaxed">
                    Nous cadrons le besoin, stabilisons le périmètre, construisons le cahier des charges et préparons
                    une consultation sérieuse.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/12 bg-black/28 p-5 sm:p-6 space-y-2">
                  <h3 className="ae-heading text-xl font-semibold">Quand le projet est lancé</h3>
                  <p className="ae-text text-sm sm:text-base leading-relaxed">
                    Nous structurons le pilotage, coordonnons les acteurs, traitons les dépendances et sécurisons la
                    mise en œuvre.
                  </p>
                </article>
              </div>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="faq-title">
            <article className="mx-auto max-w-[1080px] space-y-6">
              <h2 id="faq-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Questions fréquentes
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {faq.map((item) => (
                  <article key={item.q} className="rounded-2xl border border-white/12 bg-black/28 p-5 sm:p-6 space-y-2">
                    <h3 className="ae-heading text-lg sm:text-xl font-semibold">{item.q}</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">{item.a}</p>
                  </article>
                ))}
              </div>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="liens-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="liens-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Voir aussi
              </h2>
              <p className={paragraphClass}>
                Pages liées :{" "}
                <Link href="/offres/" className={inlineSeoLinkClass}>
                  offres
                </Link>
                ,{" "}
                <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                  diagnostic
                </Link>
                ,{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  cadrage
                </Link>
                ,{" "}
                <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                  pilotage
                </Link>
                ,{" "}
                <Link href="/secteurs/" className={inlineSeoLinkClass}>
                  secteurs
                </Link>
                ,{" "}
                <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                  cas clients
                </Link>
                ,{" "}
                <Link href="/contact/" className={inlineSeoLinkClass}>
                  contact
                </Link>
                .
              </p>
            </article>
          </section>
        </div>
      </main>
    </div>
  )
}
