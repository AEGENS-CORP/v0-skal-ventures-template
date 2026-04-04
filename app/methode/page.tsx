import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { createPageMetadata } from "@/lib/metadata"

const paragraphClass = "ae-text text-base sm:text-lg leading-relaxed"
const bulletClass = "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

export const metadata = createPageMetadata({
  title: "Notre méthode | AEGENS",
  path: "/methode",
  description:
    "Découvrez la méthode AEGENS : audit, cadrage, cahier des charges, gestion de projet, pilotage de prestataires et mise en œuvre pour faire avancer les sujets complexes.",
})

const stepCards = [
  {
    title: "1. Comprendre le réel",
    text: "Nous commençons par le terrain : contexte, fonctionnement réel, acteurs, contraintes, points de friction, dépendances et écarts entre théorie et pratique.",
    bullets: [
      "Audit de fonctionnement",
      "Lecture des flux et interfaces",
      "Analyse des outils, rôles et données",
      "Audit d’un projet déjà engagé",
    ],
  },
  {
    title: "2. Clarifier le besoin",
    text: "Nous transformons un ressenti diffus en besoin formulé au bon niveau, pour distinguer irritants locaux et sujets structurants.",
    bullets: [
      "Quel est le vrai sujet ?",
      "Que faut-il améliorer exactement ?",
      "Quel niveau de réponse est nécessaire ?",
      "Quelles priorités traiter en premier ?",
    ],
  },
  {
    title: "3. Cadrer et structurer",
    text: "Nous construisons une base de travail solide : besoin, objectifs, périmètre, contraintes, priorités, parties prenantes, attendus et critères.",
    bullets: [
      "Note de cadrage",
      "Expression de besoin",
      "Cahier des charges",
      "Feuille de route / base de consultation",
    ],
  },
  {
    title: "4. Piloter jusqu’au réel",
    text: "Quand c’est nécessaire, nous accompagnons la gestion de projet, la coordination des acteurs, le pilotage des prestataires et la mise en œuvre.",
    bullets: [
      "Tenir le cap et les arbitrages",
      "Traiter les dépendances",
      "Maintenir la lisibilité de l’avancement",
      "Sécuriser l’exécution",
    ],
  },
]

export default function MethodePage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 border-b border-white/10 px-4 pb-4 pt-20 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Notre méthode" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 py-10 sm:px-6 sm:py-12 md:py-14">
        <div className="mx-auto max-w-[1240px] space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8 space-y-6">
              <h1 className="ae-hero-title text-balance text-[clamp(2rem,4.2vw,3.8rem)] font-extrabold leading-[1.03]">
                Une méthode claire pour faire avancer les sujets complexes
              </h1>
              <p className={paragraphClass}>
                Un sujet important ne bloque pas toujours parce qu’il manque une solution. Il bloque souvent parce qu’il
                manque une lecture claire de la situation, un besoin bien formulé, un cadre solide ou une exécution
                correctement tenue.
              </p>
              <p className={paragraphClass}>
                Chez AEGENS, nous ne travaillons ni à l’intuition, ni au discours, ni à la promesse floue. Nous
                travaillons avec une méthode simple, rigoureuse et orientée résultat.
              </p>
              <p className={paragraphClass}>
                Notre approche consiste à faire passer un sujet de la confusion vers la clarté, puis vers le cadrage,
                et enfin vers l’exécution.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="objectif-method-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="objectif-method-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ce que notre méthode doit produire
              </h2>
              <p className={paragraphClass}>
                Notre méthode n’a pas été conçue pour “faire sérieux”. Elle a été conçue pour un résultat très concret :
                qu’un sujet devienne compréhensible, structuré, pilotable et exécutable.
              </p>
              <ul className={bulletClass}>
                <li>Comprendre ce qui se passe réellement.</li>
                <li>Remettre de l’ordre dans un besoin encore flou.</li>
                <li>Construire un cadre de travail solide.</li>
                <li>Formaliser ce qu’il faut formaliser, au bon niveau.</li>
                <li>Coordonner les bons acteurs et piloter les bons prestataires.</li>
                <li>Faire tenir la suite dans le réel.</li>
              </ul>
              <p className={paragraphClass}>
                Autrement dit, notre méthode sert à éviter deux erreurs fréquentes : aller trop vite sur un sujet mal
                clarifié, ou rester trop longtemps dans l’analyse sans construire une vraie suite.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="quatre-temps-title">
            <article className="mx-auto max-w-[1080px] space-y-6">
              <h2 id="quatre-temps-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Notre méthode en 4 temps
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {stepCards.map((card) => (
                  <article key={card.title} className="rounded-2xl border border-white/12 bg-black/28 p-5 sm:p-6 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">{card.title}</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">{card.text}</p>
                    <ul className="space-y-2 text-sm sm:text-base ae-text-soft">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 text-[#07bc7d]">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <p className={paragraphClass}>
                Cette logique est ce qui permet de passer d’un sujet “présentable” à un sujet réellement tenable.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="couvre-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="couvre-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Ce que notre méthode couvre concrètement
              </h2>
              <ul className={bulletClass}>
                <li>Audit de fonctionnement</li>
                <li>Audit data et performance</li>
                <li>Cadrage de besoin</li>
                <li>Cahier des charges</li>
                <li>Gestion de projet</li>
                <li>Pilotage de prestataires</li>
                <li>Automatisation de processus</li>
                <li>Assistants IA métier, workflows LLM, systèmes RAG</li>
                <li>Optimisation de flux et structuration du pilotage</li>
              </ul>
              <p className={paragraphClass}>
                Ces sujets ne sont pas des briques séparées : dans la réalité, ils sont liés. Notre méthode sert
                précisément à les remettre dans le bon ordre.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="credible-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="credible-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Ce qui rend notre méthode crédible
              </h2>
              <ul className={bulletClass}>
                <li>Elle part du terrain, pas d’une version idéalisée du sujet.</li>
                <li>Elle clarifie avant de produire des documents.</li>
                <li>Elle structure sans alourdir.</li>
                <li>Elle relie réflexion et exécution.</li>
                <li>Elle est orientée résultat, pas “livrable pour livrable”.</li>
              </ul>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="evite-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="evite-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Ce que notre méthode évite
              </h2>
              <ul className={bulletClass}>
                <li>Le faux départ : projet lancé avant clarification suffisante.</li>
                <li>Le mauvais cahier des charges : document présent mais trop faible.</li>
                <li>La mauvaise consultation : offres non comparables.</li>
                <li>Le pilotage décoratif : suivi apparent, tenue insuffisante.</li>
                <li>L’innovation hors-sol : outil ou IA sans lecture sérieuse du terrain.</li>
              </ul>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="confiance-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="confiance-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Pourquoi cette méthode donne confiance
              </h2>
              <p className={paragraphClass}>
                Parce qu’elle répond aux vraies questions d’un projet important : compréhension rapide, bonnes
                questions, audit sérieux, cadrage solide, cahier des charges exploitable, pilotage réel et exécution
                tenue jusqu’au résultat.
              </p>
              <p className={paragraphClass}>
                Notre méthode ne repose pas sur un effet de style. Elle repose sur une capacité réelle à comprendre,
                structurer et faire avancer.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="resume-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                En résumé
              </h2>
              <p className={paragraphClass}>Notre méthode repose sur une séquence claire :</p>
              <ul className={bulletClass}>
                <li>Comprendre (audit du réel, flux, outils, pratiques, contraintes)</li>
                <li>Clarifier (transformer un sujet flou en besoin net)</li>
                <li>Cadrer (construire une base solide et exploitable)</li>
                <li>Piloter (faire tenir acteurs, prestataires et exécution)</li>
              </ul>
              <p className={paragraphClass}>
                En une phrase : notre méthode consiste à remettre de la clarté, du cadre et de la tenue là où un sujet
                ne peut plus avancer sérieusement sans cela.
              </p>
              <p className={paragraphClass}>
                Voir aussi :{" "}
                <Link href="/offres/" className={inlineSeoLinkClass}>
                  nos offres
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
                <Link href="/a-propos/qui-nous-sommes/" className={inlineSeoLinkClass}>
                  qui nous sommes
                </Link>
                ,{" "}
                <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                  cas clients
                </Link>
                ,{" "}
                <Link href="/modeles-checklists/" className={inlineSeoLinkClass}>
                  modèles-checklists
                </Link>
                ,{" "}
                <Link href="/ressources/" className={inlineSeoLinkClass}>
                  ressources
                </Link>
                .
              </p>

              <div className="pt-2">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  )
}
