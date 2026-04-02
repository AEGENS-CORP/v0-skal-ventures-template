import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Gauge, Layers3, Radar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Diagnostic, cadrage et pilotage de projets pour l’industrie, la logistique et le retail",
  path: "/",
  description:
    "AEGENS aide les entreprises à clarifier leurs besoins, structurer les bons projets et sécuriser leur mise en œuvre.",
})

const inlineSeoLinkClass =
  "font-semibold text-[#07bc7d] underline decoration-[#07bc7d]/70 underline-offset-4 transition-colors hover:text-[#34e0a0] hover:decoration-[#34e0a0]"

const decisionCards = [
  {
    title: "Clarifier",
    text: "Un besoin mieux défini avant de décider.",
  },
  {
    title: "Structurer",
    text: "Un cadre de travail solide avant de lancer.",
  },
  {
    title: "Mettre en œuvre",
    text: "Un pilotage clair jusqu'à l'exécution.",
  },
]

const marketRepereCards = [
  {
    value: "1 PME sur 2",
    text: "n'a pas de stratégie numérique formalisée.",
  },
  {
    value: "37 %",
    text: "des TPE-PME ont des difficultés à trouver un prestataire adapté.",
  },
  {
    value: "1 projet sur 4",
    text: "n'atteint pas ses objectifs business.",
  },
]

const offers = [
  {
    title: "Diagnostic du fonctionnement opérationnel",
    text: "Comprendre la situation, objectiver les points de blocage, identifier les priorités.",
    cta: "Découvrir le diagnostic",
    href: "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/",
    icon: Gauge,
  },
  {
    title: "Roadmap et cahier des charges",
    text: "Structurer le besoin, formaliser le cadre du projet et préparer une mise en œuvre solide.",
    cta: "Découvrir le cadrage",
    href: "/offres/cadrage-projet-industriel-cahier-des-charges/",
    icon: Layers3,
  },
  {
    title: "Pilotage de mise en œuvre",
    text: "Déployer le projet avec méthode, coordination et suivi.",
    cta: "Découvrir le pilotage",
    href: "/offres/pilotage-mise-en-oeuvre-projet-industriel/",
    icon: Radar,
  },
]

const valueCards = [
  {
    title: "Expérience",
    text: "Lecture rapide des situations et des leviers d'action.",
  },
  {
    title: "Méthode",
    text: "Approche structurée de diagnostic, cadrage et mise en œuvre.",
  },
  {
    title: "Maîtrise opérationnelle",
    text: "Compréhension concrète du terrain et des contraintes réelles.",
  },
  {
    title: "Résultat",
    text: "Un besoin transformé en actions structurées et résultats concrets.",
  },
]

const perimeterItems = [
  "les méthodes de travail",
  "l'organisation opérationnelle",
  "les points de blocage",
  "les pertes de temps",
  "les besoins à formaliser",
  "les projets à structurer et à déployer",
]

const caseCards = [
  {
    id: "Cas 01",
    title: "Diagnostic et cadrage d'un projet opérationnel",
    text: "Clarifier le besoin, poser les priorités, structurer la suite.",
    href: "/cas-clients/diagnostic-et-cadrage-dun-projet-industriel/",
  },
  {
    id: "Cas 02",
    title: "Pilotage de mise en œuvre",
    text: "Faire avancer le projet avec méthode, coordination et suivi.",
    href: "/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel/",
  },
]

const sectorCards = [
  {
    title: "Industrie",
    text: "Organisation opérationnelle, structuration de projet et mise en œuvre.",
    image: "/images-site/sector-industrie.webp",
    alt: "Environnement industriel",
    href: "/secteurs/",
    objectPosition: "center 42%",
  },
  {
    title: "Logistique",
    text: "Coordination des flux, méthodes de travail et exécution terrain.",
    image: "/images-site/cas-pilotage.webp",
    alt: "Environnement logistique",
    href: "/secteurs/",
    objectPosition: "center 52%",
  },
  {
    title: "Retail",
    text: "Organisation opérationnelle des points de vente et déploiement.",
    image: "/images-site/sector-logistique.webp",
    alt: "Environnement retail",
    href: "/secteurs/",
    objectPosition: "center 50%",
  },
]

function BlockTitle({ id, title, intro }: { id?: string; title: string; intro?: string }) {
  return (
    <header className="space-y-3">
      <h2 id={id} className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h2>
      {intro ? <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">{intro}</p> : null}
    </header>
  )
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
                className="ae-hero-title mx-auto max-w-4xl text-[clamp(1.4rem,6vw,4.45rem)] leading-[1.1] font-extrabold"
              >
                <span className="block">Diagnostic, cadrage</span>
                <span className="block">et pilotage de projets</span>
                <span className="block md:whitespace-nowrap">
                  Industrie{" "}
                  <span
                    className="inline-block -translate-y-[0.12em]"
                    style={{ color: "#07bc7d", WebkitTextFillColor: "#07bc7d" }}
                    aria-hidden="true"
                  >
                    .
                  </span>{" "}
                  Logistique{" "}
                  <span
                    className="inline-block -translate-y-[0.12em]"
                    style={{ color: "#07bc7d", WebkitTextFillColor: "#07bc7d" }}
                    aria-hidden="true"
                  >
                    .
                  </span>{" "}
                  Retail
                </span>
              </h1>

              <p className="ae-hero-intro mx-auto max-w-3xl text-[clamp(1rem,1.25vw,1.2rem)] leading-[1.6] text-white/90">
                <span className="text-[#34e0a0]">Clarifier les priorités.</span> Structurer les projets.
                <span className="text-[#34e0a0]"> Sécuriser l'exécution.</span>
              </p>

              <Button
                asChild
                size="lg"
                className="h-14 rounded-[14px] px-8 text-base sm:text-lg font-semibold tracking-[-0.02em]"
              >
                <Link href="/contact/">Parler de votre projet</Link>
              </Button>

              <div className="relative mx-auto w-full max-w-[920px] overflow-hidden rounded-2xl border border-white/14">
                <Image
                  src="/images-site/usine-grand.webp"
                  alt="Environnement opérationnel industriel et logistique"
                  width={1888}
                  height={1072}
                  className="h-[190px] w-full object-cover sm:h-[240px] lg:h-[285px]"
                  style={{ objectPosition: "center 42%" }}
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,5,0.28)_0%,rgba(2,4,5,0.62)_100%)]" />
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="regard-title">
            <div className="space-y-6">
              <BlockTitle
                id="regard-title"
                title="Un regard extérieur pour structurer les décisions importantes"
                intro="Lorsqu'un besoin doit être clarifié, qu'un projet doit être cadré ou qu'une mise en œuvre doit être sécurisée, nous apportons méthode, recul et capacité d'exécution."
              />
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                Notre rôle : poser un constat clair, structurer les priorités et faire avancer les projets dans de bonnes conditions.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                Pour entrer directement dans le concret :{" "}
                <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                  diagnostic du fonctionnement opérationnel
                </Link>
                ,{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  cadrage de projet industriel
                </Link>{" "}
                et{" "}
                <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                  pilotage de mise en œuvre
                </Link>
                .
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {decisionCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-white/12 bg-black/32 p-5 sm:p-6"
                  >
                    <h3 className="ae-heading mb-2 text-xl sm:text-2xl font-bold">{card.title}</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">
                      <span className="text-[#34e0a0]">Point clé :</span> {card.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            className="ae-surface ae-industrial-block rounded-3xl border border-white/16 bg-[linear-gradient(180deg,rgba(7,9,11,0.94)_0%,rgba(4,6,7,0.98)_100%)] p-6 sm:p-8 md:p-10"
            aria-labelledby="chiffres-title"
          >
            <div className="space-y-7">
              <div className="space-y-4">
                <h2 id="chiffres-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Pourquoi cadrer avant de lancer
                </h2>
                <p className="ae-text max-w-4xl text-base sm:text-lg leading-relaxed">
                  Certaines difficultés reviennent souvent : besoin encore flou, choix du bon prestataire, cadrage
                  insuffisant ou projet mal tenu dans la durée.
                </p>
              </div>

              <div className="mx-auto grid max-w-6xl gap-2.5 md:grid-cols-3">
                {marketRepereCards.map((item) => (
                  <article
                    key={item.value}
                    className="rounded-[18px] border border-white/12 bg-[linear-gradient(180deg,rgba(6,8,10,0.98)_0%,rgba(3,5,6,0.98)_100%)] px-4 py-3 sm:px-4 sm:py-3.5"
                  >
                    <div className="text-[clamp(1.05rem,1.9vw,1.45rem)] leading-[1.04] font-black tracking-[-0.01em] !text-[#07bc7d]">
                      {item.value}
                    </div>
                    <p className="mt-2.5 max-w-[36ch] text-[0.89rem] sm:text-[0.96rem] font-medium leading-[1.4] text-white">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>

              <p className="ae-text max-w-4xl text-base sm:text-lg leading-relaxed">
                Ces repères confirment l&apos;intérêt d&apos;un{" "}
                <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                  diagnostic structuré
                </Link>{" "}
                puis d&apos;un{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  cadrage solide
                </Link>{" "}
                avant de lancer.
              </p>
            </div>
          </section>

          <section className="overflow-hidden rounded-3xl border border-white/12">
            <div className="relative">
              <Image
                src="/images-site/hero-realiste.webp"
                alt="Image de séparation"
                width={1888}
                height={1072}
                className="h-[170px] w-full object-cover sm:h-[205px] md:h-[230px]"
                style={{ objectPosition: "center 22%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,5,0.12)_0%,rgba(2,4,5,0.5)_100%)]" />
            </div>
          </section>

          <section className="space-y-5" aria-labelledby="offres-title">
            <div className="space-y-3">
              <BlockTitle id="offres-title" title="Une intervention en 3 étapes" />
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {offers.map((offer, index) => {
                const Icon = offer.icon
                return (
                  <article
                    key={offer.title}
                    className={`ae-offer-card relative flex min-h-[268px] flex-col rounded-2xl border p-6 ${
                      index === 1 ? "border-[#34e0a0]/52 bg-[#07bc7d]/14" : "border-white/14 bg-black/32"
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#34e0a0]/35 bg-[#07bc7d]/12">
                        <Icon className="h-5 w-5 text-[#8beec8]" />
                      </span>
                    </div>
                    <h3 className="ae-heading mb-2 text-2xl font-bold">{offer.title}</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">{offer.text}</p>
                    <Link href={offer.href} className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-[#8beec8] hover:text-white">
                      {offer.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                )
              })}
            </div>

            <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
              Chaque offre est reliée à une logique d&apos;exécution. Vous pouvez aussi consulter{" "}
              <Link href="/methode/" className={inlineSeoLinkClass}>
                notre méthode
              </Link>{" "}
              et{" "}
              <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                nos cas clients
              </Link>{" "}
              pour voir les suites possibles.
            </p>
          </section>

          <section className="grid gap-4 xl:grid-cols-2" aria-labelledby="valeur-title">
            <article className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10 space-y-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/12">
                <Image
                  src="/images-site/industrie-realiste.webp"
                  alt="Site industriel structuré"
                  width={1888}
                  height={1072}
                  className="h-40 w-full object-cover sm:h-44"
                  style={{ objectPosition: "center 44%" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,5,0.25)_0%,rgba(2,4,5,0.58)_100%)]" />
              </div>
              <BlockTitle
                id="valeur-title"
                title="Ce qui fait notre valeur"
                intro="Compréhension du terrain, structuration du besoin et capacité à faire avancer l'exécution."
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {valueCards.map((card) => (
                  <article key={card.title} className="rounded-2xl border border-white/12 bg-black/34 p-4 sm:p-5">
                    <h3 className="ae-heading mb-2 text-lg sm:text-xl font-bold">{card.title}</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">{card.text}</p>
                  </article>
                ))}
              </div>
            </article>

            <aside className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10 space-y-5" aria-labelledby="perimetre-title">
              <div className="relative overflow-hidden rounded-2xl border border-white/12">
                <Image
                  src="/images-site/usine-realiste.webp"
                  alt="Organisation opérationnelle industrielle"
                  width={1888}
                  height={1072}
                  className="h-40 w-full object-cover sm:h-44"
                  style={{ objectPosition: "center 48%" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,5,0.2)_0%,rgba(2,4,5,0.55)_100%)]" />
              </div>
              <h2 id="perimetre-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Le fonctionnement concret de l'entreprise
              </h2>

              <ul className="grid gap-3">
                {perimeterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-white/12 bg-black/34 px-4 py-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#07bc7d]" />
                    <span className="ae-text text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link href="/methode/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8beec8] hover:text-white">
                  Voir notre méthode
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/secteurs/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/82 hover:text-white">
                  Voir les secteurs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </section>

          <section className="overflow-hidden rounded-3xl border border-white/12">
            <div className="relative mx-auto w-[84%]">
              <Image
                src="/images-site/replaite.webp"
                alt="Image de séparation métal"
                width={1888}
                height={1072}
                className="h-[118px] w-full object-cover sm:h-[138px] md:h-[156px]"
                style={{ objectPosition: "center 60%" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,5,0.18)_0%,rgba(2,4,5,0.52)_100%)]" />
              <div className="absolute inset-y-0 left-0 w-[28%] bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]" />
              <div className="absolute inset-y-0 right-0 w-[28%] bg-[linear-gradient(270deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0)_100%)]" />
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="secteurs-title">
            <div className="space-y-5">
              <div className="space-y-3">
                <BlockTitle
                  id="secteurs-title"
                  title="Industrie, logistique et retail"
                  intro="Nous intervenons dans des environnements où la clarté d'organisation et l'exécution font la différence."
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sectorCards.map((sector) => (
                  <article key={sector.title} className="overflow-hidden rounded-2xl border border-white/12 bg-black/28">
                    <Link href={sector.href} className="block">
                      <div className="relative aspect-square">
                        <Image
                          src={sector.image}
                          alt={sector.alt}
                          fill
                          className="object-cover"
                          style={{ objectPosition: sector.objectPosition }}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,5,0.08)_0%,rgba(2,4,5,0.6)_100%)]" />
                      </div>
                      <div className="space-y-2 p-4 sm:p-5">
                        <h3 className="ae-heading text-xl font-bold">{sector.title}</h3>
                        <p className="ae-text text-sm sm:text-base leading-relaxed">{sector.text}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                Voir le détail des environnements :{" "}
                <Link href="/secteurs/" className={inlineSeoLinkClass}>
                  secteurs d&apos;intervention
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cas-title">
            <div className="space-y-6">
              <div className="space-y-3">
                <BlockTitle
                  id="cas-title"
                  title="Des interventions concrètes"
                  intro="Des cas clients orientés décisions claires et exécution maîtrisée."
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {caseCards.map((card) => (
                  <article key={card.title} className="rounded-2xl border border-white/12 bg-black/28 p-5 sm:p-6">
                    <p className="text-[11px] uppercase tracking-[0.1em] text-[#8beec8] font-semibold mb-2">{card.id}</p>
                    <h3 className="ae-heading mb-3 text-xl sm:text-2xl font-bold">{card.title}</h3>
                    <p className="ae-text mb-5 text-sm sm:text-base leading-relaxed">{card.text}</p>
                    <Link href={card.href} className="inline-flex items-center gap-2 font-semibold text-[#8beec8] hover:text-white">
                      Voir le cas
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>

              <div className="rounded-2xl border border-[#34e0a0]/35 bg-[linear-gradient(120deg,rgba(7,188,125,0.2)_0%,rgba(0,0,0,0.22)_40%,rgba(0,0,0,0.3)_100%)] p-6 sm:p-7 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h2 id="cta-final-title" className="ae-heading text-2xl sm:text-3xl font-bold">
                      Un besoin à clarifier ou un projet à structurer ?
                    </h2>
                    <p className="ae-text text-sm sm:text-base leading-relaxed max-w-2xl">
                      Nous accompagnons les entreprises qui doivent poser un constat clair, cadrer les décisions et
                      sécuriser la mise en œuvre.
                    </p>
                    <p className="ae-text text-sm sm:text-base leading-relaxed max-w-2xl">
                      Pour avancer dès maintenant :{" "}
                      <Link href="/contact/" className={inlineSeoLinkClass}>
                        parler de votre situation
                      </Link>{" "}
                      ou{" "}
                      <Link href="/methode/" className={inlineSeoLinkClass}>
                        découvrir notre approche
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 rounded-[12px] px-6 text-sm sm:text-base font-semibold tracking-[-0.02em]"
                    >
                      <Link href="/contact/">Échanger sur votre situation</Link>
                    </Button>
                    <Link
                      href="/cas-clients/"
                      className="inline-flex h-12 items-center rounded-[12px] border border-white/18 px-5 text-sm sm:text-base font-semibold text-white/88 hover:text-white"
                    >
                      Voir nos cas clients
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
