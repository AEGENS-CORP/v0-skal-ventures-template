import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Pilotage de la performance industrielle | AEGENS",
  path: "/",
  description:
    "AEGENS aide les PME et ETI industrielles à analyser leur fonctionnement réel pour réduire les coûts opérationnels, structurer les bons projets et piloter leur mise en œuvre.",
})

const inlineSeoLinkClass =
  "font-semibold text-[#07bc7d] underline decoration-[#07bc7d]/70 underline-offset-4 transition-colors hover:text-[#34e0a0] hover:decoration-[#34e0a0]"

const interventionSteps = [
  {
    title: "Diagnostic d’opportunités opérationnelles",
    lead: "Nous analysons le fonctionnement réel pour faire apparaître les pertes d’efficacité, les surcoûts, les incohérences d’organisation et les dépenses à faible valeur.",
    detail:
      "Cette étape cartographie les processus, lit les flux organisationnels et d’information, puis met en évidence les actions rapides et les projets à fort retour sur investissement.",
    outcome: "Faire ressortir les vrais sujets, hiérarchiser les priorités et éviter les faux problèmes.",
  },
  {
    title: "Cadrage d’un enjeu opérationnel prioritaire",
    lead: "Une fois le sujet identifié, nous le transformons en projet clair, utile et exploitable à partir du besoin réel et des usages terrain.",
    detail:
      "Nous intégrons les contraintes opérationnelles, les utilisateurs finaux et les arbitrages nécessaires pour éviter les projets mal définis et les décisions fragiles.",
    outcome: "Obtenir une formalisation précise du besoin et un cahier des charges directement exploitable.",
  },
  {
    title: "Mise en œuvre de projets à fort retour sur investissement",
    lead: "Nous intervenons comme chef de projet côté client pour coordonner les parties prenantes, piloter les prestataires et sécuriser les décisions.",
    detail:
      "Cette phase garantit la tenue du rythme, le traitement des dépendances et l’alignement entre besoin initial, terrain et exécution en production.",
    outcome: "Transformer l’intention en résultat concret, mesurable et durable.",
  },
]

const gainsExamples = [
  {
    title: "Réduction des coûts outils / prestataires",
    focusLabel: "1 · Réduction des coûts",
    exemple:
      "Des outils, abonnements et prestataires accumulés, avec doublons, usages partiels et coûts jamais remis à plat.",
    solution:
      "Remise à plat de l’existant, analyse de l’usage réel, comparaison coût/valeur, puis rationalisation.",
    gain:
      "10 à 25 % d’économies sur le périmètre revu ; 20 000 à 80 000 € par an selon le volume d’outils, contrats et prestataires.",
    kpi: "Coût annuel total, coût par outil, taux d’usage réel, doublons fonctionnels, temps perdu, incidents.",
  },
  {
    title: "Performance process et solutions",
    focusLabel: "2 · Performance",
    exemple: "Ressaisies, validations inutiles, étapes manuelles et ralentissements au quotidien.",
    solution:
      "Revoir le processus réel, supprimer les étapes sans valeur et réaligner organisation et solution sur le besoin terrain.",
    gain:
      "15 à 30 % de réduction de certains temps de traitement ; 30 à 80 heures récupérées par mois ; 5 à 15 % de capacité supplémentaire.",
    kpi: "Temps de traitement, ressaisies, taux d’erreurs, reprises, délais, charge équipe.",
  },
  {
    title: "Pilotage par la donnée de production",
    focusLabel: "3 · Pilotage",
    exemple:
      "Indicateurs reconstruits à la main, fichiers contradictoires et décisions prises avec une vision partielle ou tardive.",
    solution:
      "Structurer les données utiles, fiabiliser les sources et déployer un pilotage exploitable.",
    gain:
      "5 à 10 heures récupérées par semaine ; détection des écarts 2 à 5 fois plus rapide ; réduction nette du temps perdu à vérifier l’information.",
    kpi: "Temps de consolidation, fiabilité des données, fréquence de mise à jour, délai d’accès, réactivité sur les écarts.",
  },
]

const values = [
  {
    title: "L’intérêt du client avant tout",
    text: "Recommandations, arbitrages et pilotage servent d’abord ce qui est utile au client, pas ce qui arrange un prestataire ou un vendeur de solution.",
  },
  {
    title: "Le réel avant le discours",
    text: "Nous confrontons les décisions au terrain, aux usages et aux contraintes pour éviter les projets théoriques et les diagnostics hors-sol.",
  },
  {
    title: "L’indépendance dans les choix et l’exécution",
    text: "Aucune rémunération des prestataires impliqués : l’objectivité est préservée du cadrage jusqu’à la mise en œuvre.",
  },
]

const founders = [
  {
    name: "Adrien Retourne, cofondateur",
    image: "/images/adrien-retourne-2026.png",
    alt: "Adrien Retourne",
    intro:
      "Ancien DSI en milieu industriel et ingénieur IT, Adrien apporte une vision structurée des systèmes, des flux et de l’exécution dans des environnements liés à la production, à la supply chain, à la qualité, à la finance et au commerce.",
    expertises:
      "Cadrage de projets transverses, pilotage de prestataires, cahiers des charges, architecture SI, automatisation et gouvernance des données.",
    apport: "Lecture rapide des points de blocage, arbitrages clairs et tenue dans l’exécution.",
  },
  {
    name: "Simon Leclair, cofondateur",
    image: "/images/simon-leclair-2026.png",
    alt: "Simon Leclair",
    intro:
      "Ingénieur IT, avec une expérience en analyse et fiabilisation de données à la MAIF ainsi qu’un parcours en e-commerce et acquisition digitale, Simon apporte une vision orientée performance, donnée et résultat.",
    expertises:
      "Pilotage par les indicateurs, structuration des besoins, fiabilisation de la donnée, coordination de prestataires, cadrage de solutions et automatisations.",
    apport: "Lisibilité sur les sujets complexes, logique de pilotage claire et forte orientation résultat.",
  },
]

const interventionZones = [
  "Vendée",
  "Charente",
  "Charente-Maritime",
  "Deux-Sèvres",
  "Vienne",
  "Loire-Atlantique",
  "Maine-et-Loire",
]

function SectionTitle({
  id,
  title,
  intro,
  kicker,
}: {
  id: string
  title: string
  intro?: string
  kicker?: string
}) {
  return (
    <header className="space-y-3">
      {kicker ? (
        <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.12em] font-semibold text-[#8ef0ca]/90">{kicker}</p>
      ) : null}
      <h2 id={id} className="ae-heading scroll-mt-28 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h2>
      {intro ? <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">{intro}</p> : null}
    </header>
  )
}

function highlightImportantNumbers(text: string) {
  const regex = /(\d[\d\s]*(?:\s?à\s?\d[\d\s]*)?\s?(?:%|€|h|heures?)?)/giu
  const parts: ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(regex)) {
    const matched = match[0]
    const index = match.index ?? 0
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index))
    }
    parts.push(
      <span key={`${matched}-${index}`} className="font-semibold text-[#8ef0ca]">
        {matched}
      </span>,
    )
    lastIndex = index + matched.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pt-32 px-4 sm:px-6">
        <div className="mx-auto max-w-[1220px] space-y-8 sm:space-y-10 md:space-y-12">
          <section
            className="ae-hero-shell ae-industrial-block rounded-[30px] px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14"
            aria-labelledby="home-hero-title"
          >
            <div className="mx-auto max-w-5xl text-center space-y-5 sm:space-y-6">
              <h1
                id="home-hero-title"
                className="ae-hero-title mx-auto max-w-5xl text-[clamp(2.35rem,5.15vw,4.45rem)] leading-[1.03] font-extrabold tracking-[-0.03em]"
              >
                Pilotage de la performance industrielle
              </h1>

              <p className="ae-heading text-[clamp(1.4rem,2.55vw,2.24rem)] leading-[1.14] font-bold text-[#50f0b4]">
                Réduisez vos coûts opérationnels.
              </p>

              <p className="ae-hero-intro mx-auto max-w-4xl text-[clamp(1.04rem,1.22vw,1.2rem)] leading-[1.6] text-white/90">
                AEGENS aide les PME et ETI industrielles à analyser leur fonctionnement réel pour repérer les surcoûts,
                les pertes d’efficacité, les solutions ou prestataires inadaptés, puis structurer et piloter les
                projets qui améliorent concrètement la performance.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="h-14 rounded-[14px] px-8 text-base sm:text-lg font-semibold tracking-[-0.02em]">
                  <Link href="/contact/">Parler de votre situation</Link>
                </Button>
                <Link
                  href="/offres/"
                  className="inline-flex h-14 items-center rounded-[14px] border border-white/20 bg-black/25 px-7 text-base sm:text-lg font-semibold text-white/88 hover:text-white"
                >
                  Découvrir nos offres
                </Link>
              </div>

              <div className="relative mx-auto w-full max-w-[920px] overflow-hidden rounded-2xl border border-white/14">
                <Image
                  src="/images-site/usine-grand.webp"
                  alt="Environnement industriel"
                  width={1888}
                  height={1072}
                  className="h-[190px] w-full object-cover sm:h-[240px] lg:h-[285px]"
                  style={{ objectPosition: "center 42%" }}
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,5,0.2)_0%,rgba(2,4,5,0.62)_100%)]" />
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-5 sm:p-6 md:p-7" aria-labelledby="intervention-title">
            <div className="space-y-4">
              <SectionTitle id="intervention-title" kicker="Intervention en 3 temps" title="Une suite logique, du constat à la mise en place" />

              <div className="space-y-3">
                {interventionSteps.map((step, index) => (
                  <article key={step.title} className="rounded-2xl border border-white/12 bg-black/30 p-4 sm:p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-[#34e0a0]/45 bg-[#0a1814] text-base font-extrabold text-[#50f0b4]">
                        {index + 1}
                      </span>
                      <div className="space-y-2.5 min-w-0">
                        <h3 className="ae-heading text-xl sm:text-2xl font-bold leading-tight">{step.title}</h3>
                        <p className="ae-text text-base leading-relaxed">{step.lead}</p>
                        <p className="ae-text text-base leading-relaxed">{step.detail}</p>
                        <p className="rounded-lg border border-[#34e0a0]/26 bg-[#06120f]/80 px-3 py-2 text-base text-[#c2f3df]">
                          <span className="font-semibold text-[#34e0a0]">Résultat visé :</span> {step.outcome}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="gains-title">
            <div className="space-y-6">
              <SectionTitle id="gains-title" kicker="Résultats opérationnels" title="Exemples concrets de sujets traités" />

              <p className="ae-text text-sm sm:text-base leading-relaxed max-w-4xl">
                Trois cas typiques où AEGENS structure le besoin, sécurise les arbitrages et transforme l’amélioration
                visée en gains réellement suivis.
              </p>

              <div className="grid gap-5 xl:grid-cols-3">
                {gainsExamples.map((item, index) => (
                  <article
                    key={item.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.35))] p-5 sm:p-6"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#34e0a0] to-transparent opacity-95" />

                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full border border-[#34e0a0]/65 bg-[#092017] px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#78efbd]">
                        Cas 0{index + 1}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-[#34e0a0]/65 bg-[#0b2a20] px-3 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#b5ffe2] shadow-[0_0_0_1px_rgba(52,224,160,0.14)_inset]">
                        {item.focusLabel}
                      </span>
                    </div>

                    <h3 className="ae-heading mt-4 min-h-[3.2rem] text-lg sm:text-xl font-bold leading-tight text-[#9ef7d5]">
                      {item.title}
                    </h3>

                    <div className="mt-4 space-y-3.5">
                      <div className="rounded-xl border border-[#34e0a0]/22 bg-black/22 p-3.5">
                        <p className="text-xs uppercase tracking-[0.08em] text-[#5eeeb0] font-semibold">Exemple</p>
                        <p className="mt-1.5 ae-text text-sm leading-relaxed">{highlightImportantNumbers(item.exemple)}</p>
                      </div>

                      <div className="rounded-xl border border-[#34e0a0]/22 bg-black/22 p-3.5">
                        <p className="text-xs uppercase tracking-[0.08em] text-[#5eeeb0] font-semibold">Intervention</p>
                        <p className="mt-1.5 ae-text text-sm leading-relaxed">{highlightImportantNumbers(item.solution)}</p>
                      </div>

                      <div className="rounded-xl border border-[#34e0a0]/35 bg-[#07130f]/86 p-3.5">
                        <p className="text-xs uppercase tracking-[0.08em] text-[#7ef2c4] font-semibold">Gain visé</p>
                        <p className="mt-1.5 ae-text text-sm leading-relaxed text-[#dcfff0]">{highlightImportantNumbers(item.gain)}</p>
                      </div>

                      <div className="border-t border-[#34e0a0]/18 pt-3.5 space-y-2">
                        <p className="text-xs uppercase tracking-[0.08em] text-[#7ef2c4] font-semibold">KPI suivis</p>
                        <ul className="flex flex-wrap gap-2">
                          {item.kpi.split(",").map((kpi) => (
                            <li
                              key={`${item.title}-${kpi}`}
                              className="rounded-full border border-[#34e0a0]/28 bg-[#0a1713]/82 px-2.5 py-1 text-xs sm:text-[0.8rem] text-[#d7ffef]"
                            >
                              {kpi.trim()}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="valeurs-title">
            <div className="space-y-6">
              <SectionTitle id="valeurs-title" kicker="Positionnement" title="Nos valeurs" />

              <div className="grid gap-4 md:grid-cols-3">
                {values.map((value, index) => (
                  <article key={value.title} className="rounded-2xl border border-white/12 bg-black/30 p-5 sm:p-6">
                    <div className="space-y-3">
                      <h3 className="ae-heading text-lg sm:text-xl font-bold leading-tight">{value.title}</h3>
                      <p className="ae-text text-sm sm:text-base leading-relaxed">{value.text}</p>
                    </div>
                    <span className="mt-4 block text-5xl sm:text-6xl font-extrabold leading-none text-[#34e0a0]/26">
                      0{index + 1}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="fondateurs-title">
            <div className="space-y-6">
              <SectionTitle
                id="fondateurs-title"
                kicker="Équipe"
                title="Les cofondateurs"
                intro="Deux profils complémentaires pour analyser les sujets, structurer les décisions et piloter la mise en œuvre."
              />

              <div className="grid gap-4 xl:grid-cols-2">
                {founders.map((founder) => (
                  <article key={founder.name} className="rounded-2xl border border-white/12 bg-black/30 p-5 sm:p-6">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-start">
                      <div className="relative h-36 w-36 sm:h-40 sm:w-40 overflow-hidden rounded-2xl border border-white/15 bg-[#0a1110]">
                        <Image src={founder.image} alt={founder.alt} fill className="object-cover" sizes="160px" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="ae-heading text-xl sm:text-2xl font-bold leading-tight">{founder.name}</h3>
                        <p className="ae-text text-sm sm:text-base leading-relaxed">{founder.intro}</p>
                        <p className="ae-text text-sm sm:text-base leading-relaxed">
                          <span className="text-[#34e0a0] font-semibold">Expertises clés :</span> {founder.expertises}
                        </p>
                        <p className="ae-text text-sm sm:text-base leading-relaxed">
                          <span className="text-[#34e0a0] font-semibold">Ce qu’il apporte :</span> {founder.apport}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Pour en savoir plus sur notre positionnement :{" "}
                <Link href="/a-propos/qui-nous-sommes/" className={inlineSeoLinkClass}>
                  qui nous sommes
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-4 sm:p-5 md:p-6 max-w-[1120px] mx-auto" aria-labelledby="zones-title">
            <div className="space-y-4">
              <SectionTitle
                id="zones-title"
                kicker="Proximité terrain"
                title="Zone d’intervention"
                intro="AEGENS intervient sur site et à distance selon les sujets, avec une logique de proximité lorsque la compréhension du terrain est nécessaire."
              />

              <div className="grid gap-4 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-center">
                <div className="mx-auto w-full max-w-[300px] rounded-2xl border border-[#34e0a0]/35 bg-black/25 p-2.5">
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-white/15 bg-black/45">
                    <Image
                      src="/images-site/carte-france-zones.png"
                      alt="Carte des zones d’intervention AEGENS"
                      fill
                      className="object-contain p-1"
                      sizes="330px"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-white/12 bg-black/25 p-3 sm:p-4">
                    <p className="text-xs uppercase tracking-[0.12em] font-semibold text-[#8ef0ca]/90">Intervention locale</p>
                    <h3 className="ae-heading mt-2 text-xl sm:text-2xl font-bold">Zones principales</h3>
                  </div>
                  <ul className="grid gap-1.5 sm:grid-cols-2">
                    {interventionZones.map((zone) => (
                      <li key={zone} className="flex items-center gap-2 rounded-lg border border-white/12 bg-black/28 px-3 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#07bc7d]" />
                        <span className="ae-text text-sm sm:text-base">{zone}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="ae-text text-sm sm:text-base">
                    Présence locale sur site, avec accompagnement hybride ou à distance selon le sujet.
                  </p>
                  <div>
                    <Link href="/zones-dintervention/" className={inlineSeoLinkClass}>
                      Voir le détail des zones d’intervention
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="rounded-2xl border border-[#34e0a0]/35 bg-[linear-gradient(120deg,rgba(7,188,125,0.2)_0%,rgba(0,0,0,0.22)_40%,rgba(0,0,0,0.3)_100%)] p-6 sm:p-7 md:p-8"
            aria-labelledby="cta-final-title"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 id="cta-final-title" className="ae-heading text-[clamp(1.5rem,2.4vw,2.45rem)] font-bold leading-tight lg:whitespace-nowrap">
                  Obtenez une lecture claire de vos surcoûts et de vos priorités
                </h2>
                <p className="ae-text text-sm sm:text-base leading-relaxed max-w-3xl">
                  AEGENS analyse votre fonctionnement réel pour faire ressortir les coûts mal maîtrisés, les pertes
                  d’efficacité et les sujets à traiter en priorité.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className="h-12 rounded-[12px] px-6 text-sm sm:text-base font-semibold tracking-[-0.02em]">
                  <Link href="/contact/">Parler de votre situation</Link>
                </Button>
                <Link
                  href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                  className="inline-flex h-12 items-center rounded-[12px] border border-white/18 px-5 text-sm sm:text-base font-semibold text-white/88 hover:text-white"
                >
                  Demander un premier diagnostic
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
