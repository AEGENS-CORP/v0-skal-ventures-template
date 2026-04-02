import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"
const blockCardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

export const CasClientDiagnosticCadrageMeta = {
  title: "Diagnostic et cadrage d’un projet industriel | Cas client AEGENS",
  description:
    "Comment AEGENS a accompagné un diagnostic et un cadrage de projet industriel pour clarifier le besoin, poser le bon périmètre et préparer une suite plus solide.",
}

export function CasClientDiagnosticCadragePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Cas clients", href: "/cas-clients" },
              { label: "Diagnostic et cadrage d’un projet industriel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Diagnostic et cadrage d’un projet industriel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Tous les projets industriels ne commencent pas par un besoin clairement formulé.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans beaucoup d’entreprises, le sujet existe bien avant d’être réellement cadré.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Une difficulté est identifiée. Des tensions apparaissent dans le fonctionnement. Des pertes de temps
                deviennent visibles. Une évolution semble nécessaire.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais au moment de transformer cela en projet, plusieurs zones restent encore trop floues :
              </p>
              <ul className={bulletListClass}>
                <li>le problème exact à traiter</li>
                <li>le bon niveau de réponse</li>
                <li>le périmètre utile</li>
                <li>les acteurs réellement concernés</li>
                <li>les contraintes</li>
                <li>la forme que doit prendre la suite</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est dans ce type de configuration que nous sommes intervenus.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L’entreprise faisait face à un sujet industriel suffisamment important pour justifier une action
                structurée, mais pas encore assez clarifié pour être lancé correctement.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, il existait bien un projet potentiel, mais ce projet n’avait pas encore sa base de
                travail.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L’enjeu n’était donc pas de faire avancer coûte que coûte.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L’enjeu était de comprendre d’abord ce qui devait réellement être traité, puis de structurer le sujet
                pour permettre une suite solide.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">
                    Voir notre approche diagnostic
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="context-title">
                <h2 id="context-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le contexte de départ
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le point de départ était une situation devenue difficile à lire de manière simple.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Plusieurs signes étaient présents :</p>
                <ul className={bulletListClass}>
                  <li>une perception de manque de fluidité</li>
                  <li>des points de blocage récurrents</li>
                  <li>des interfaces entre équipes qui produisaient des décalages</li>
                  <li>un besoin de structuration plus fort</li>
                  <li>
                    en arrière-plan, l’idée qu’un projet plus large devait probablement être engagé
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais à ce stade, le sujet restait encore décrit de manière trop générale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Comme souvent dans les projets industriels, le problème se manifestait à travers plusieurs symptômes :
                </p>
                <ul className={bulletListClass}>
                  <li>pertes de temps</li>
                  <li>étapes mal enchaînées</li>
                  <li>manque de visibilité sur certains flux ou décisions</li>
                  <li>responsabilités peu lisibles</li>
                  <li>difficulté à faire converger les lectures entre acteurs</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le risque était clair : lancer trop vite un projet sur une base encore trop imprécise.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type de situation, deux erreurs sont fréquentes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La première consiste à réduire le sujet trop vite à une question d’outil, alors qu’il touche en
                  réalité :
                </p>
                <ul className={bulletListClass}>
                  <li>à l’organisation</li>
                  <li>aux méthodes</li>
                  <li>aux interfaces</li>
                  <li>au besoin de clarification lui-même</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La seconde consiste à engager directement une réponse lourde — consultation, choix de solution, mise
                  en œuvre — alors que la lecture du sujet n’est pas encore assez stabilisée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La mission visait précisément à éviter ces deux erreurs.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="real-need-title">
                <h2 id="real-need-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le besoin réel derrière la demande initiale
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La demande initiale formulait un besoin de projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais derrière ce besoin de projet, il existait d’abord un besoin de diagnostic.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est un point essentiel.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup de cas, l’entreprise pense avoir besoin :
                </p>
                <ul className={bulletListClass}>
                  <li>d’un outil</li>
                  <li>d’un prestataire</li>
                  <li>d’un déploiement</li>
                  <li>d’une transformation de fonctionnement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En réalité, elle a d’abord besoin :</p>
                <ul className={bulletListClass}>
                  <li>d’objectiver la situation</li>
                  <li>de reformuler correctement le sujet</li>
                  <li>de distinguer l’important du secondaire</li>
                  <li>de qualifier le bon niveau de réponse</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ici, le travail a consisté à revenir au réel :
                </p>
                <ul className={bulletListClass}>
                  <li>quels étaient les points de blocage observables ?</li>
                  <li>quels effets produisaient-ils ?</li>
                  <li>quelles étapes étaient concernées ?</li>
                  <li>quelles équipes étaient directement impliquées ?</li>
                  <li>quelles difficultés relevaient d’un irritant local ?</li>
                  <li>lesquelles relevaient d’un besoin plus structurant ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette remise à plat a permis de déplacer le sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Au départ, l’entreprise avait une intuition juste : quelque chose devait être structuré.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais cette intuition restait encore trop large pour devenir un projet propre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Après analyse, le sujet est devenu plus précis :</p>
                <ul className={bulletListClass}>
                  <li>le besoin réel était mieux nommé</li>
                  <li>les zones de friction étaient mieux localisées</li>
                  <li>les attentes devenaient plus lisibles</li>
                  <li>la logique de suite pouvait commencer à émerger</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="mission-goal-title">
                <h2 id="mission-goal-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  L’objectif de la mission
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La mission n’avait pas pour objet de faire un audit au sens abstrait du terme.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle visait un résultat très concret : transformer une situation encore trop diffuse en base de
                  projet exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour y parvenir, il fallait atteindre plusieurs objectifs successifs :
                </p>
                <ul className={bulletListClass}>
                  <li>comprendre le fonctionnement réel lié au sujet</li>
                  <li>identifier les points de blocage qui comptaient vraiment</li>
                  <li>distinguer le symptôme du sujet de fond</li>
                  <li>clarifier le besoin à traiter</li>
                  <li>poser un premier niveau de périmètre</li>
                  <li>préparer un cadrage suffisamment solide pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, le diagnostic ne devait pas produire un constat isolé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il devait déboucher sur une structuration.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est ce point qui fait la différence entre une analyse simplement intéressante et une intervention
                  réellement utile.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre intervention : lire avant de structurer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention s’est organisée en deux temps étroitement liés :
                </p>
                <ul className={bulletListClass}>
                  <li>un temps de diagnostic</li>
                  <li>puis un temps de cadrage</li>
                </ul>

                <article className={blockCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le temps du diagnostic</h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Le premier travail a consisté à lire la situation avec suffisamment de précision.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Cela a supposé de regarder le fonctionnement tel qu’il se vit réellement, et non tel qu’il est
                    seulement décrit :
                  </p>
                  <ul className={bulletListClass}>
                    <li>enchaînement des étapes</li>
                    <li>interactions entre équipes</li>
                    <li>zones d’attente ou de reprise</li>
                    <li>circuits de validation</li>
                    <li>points de friction</li>
                    <li>responsabilités implicites</li>
                    <li>pratiques de contournement</li>
                    <li>effets visibles sur l’avancement ou la qualité d’exécution</li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    L’objectif n’était pas d’accumuler des constats. L’objectif était de faire apparaître une lecture
                    plus juste du sujet.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Dans cette phase, plusieurs choses sont devenues plus nettes :
                  </p>
                  <ul className={bulletListClass}>
                    <li>certains problèmes perçus n’étaient pas au niveau central du sujet</li>
                    <li>certains irritants secondaires occupaient beaucoup d’attention, mais peu de poids réel</li>
                    <li>
                      certains points plus structurels apparaissaient comme déterminants pour la suite
                    </li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Ce travail de distinction est toujours décisif.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Sans lui, l’entreprise risque d’investir sur ce qui est le plus visible, pas forcément sur ce qui
                    est le plus structurant.
                  </p>
                </article>

                <article className={blockCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le temps du cadrage</h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Une fois la situation mieux objectivée, le travail a basculé vers le cadrage.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    C’est à ce moment-là que le sujet a cessé d’être seulement un problème à comprendre pour devenir
                    un projet à structurer.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Le cadrage a porté sur plusieurs dimensions :
                  </p>
                  <ul className={bulletListClass}>
                    <li>l’objectif réel du projet</li>
                    <li>le problème traité</li>
                    <li>le périmètre utile</li>
                    <li>les acteurs concernés</li>
                    <li>les contraintes à intégrer</li>
                    <li>les premières hypothèses de suite</li>
                    <li>les points à arbitrer avant de poursuivre</li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Cette étape a permis de transformer un sujet encore diffus en base de travail plus lisible.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Le projet commençait alors à exister non plus seulement comme intention, mais comme objet
                    structuré :
                  </p>
                  <ul className={bulletListClass}>
                    <li>plus clair</li>
                    <li>plus partageable</li>
                    <li>plus arbitrable</li>
                    <li>plus facilement transmissible à d’autres acteurs si nécessaire</li>
                  </ul>
                </article>
              </section>

              <section className={sectionClass} aria-labelledby="clarified-title">
                <h2 id="clarified-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui a été clarifié
                </h2>
                <div className="space-y-4">
                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      1. Le problème principal a été mieux défini
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      La difficulté initiale ne tenait pas à un seul élément isolé. Elle relevait d’un ensemble
                      d’interactions et de points de friction qui demandaient une lecture plus large.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le travail a permis de nommer plus précisément le cœur du sujet, ses effets et le niveau de
                      réponse qu’il appelait.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Le projet a été recentré</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Avant intervention, le risque existait de faire porter au projet trop de sujets à la fois.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le cadrage a permis de distinguer :
                    </p>
                    <ul className={bulletListClass}>
                      <li>ce qui devait être traité en priorité</li>
                      <li>ce qui relevait d’un second temps</li>
                      <li>ce qui ne devait pas être intégré immédiatement au périmètre</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Ce recentrage a été un gain majeur. Un projet industriel devient plus tenable quand son
                      périmètre est juste, pas quand il est maximal.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      3. Les attentes sont devenues plus lisibles
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le travail a permis de reformuler les attentes non pas en termes vagues d’amélioration, mais en
                      termes plus concrets :
                    </p>
                    <ul className={bulletListClass}>
                      <li>ce qui devait gagner en lisibilité</li>
                      <li>ce qui devait être fluidifié</li>
                      <li>ce qui devait être clarifié</li>
                      <li>ce qui devait être mieux structuré</li>
                    </ul>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      4. Les contraintes ont été rendues visibles
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le projet n’évoluait pas dans un vide théorique.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Il fallait tenir compte :</p>
                    <ul className={bulletListClass}>
                      <li>de contraintes opérationnelles</li>
                      <li>de disponibilité</li>
                      <li>de charge</li>
                      <li>de coordination</li>
                      <li>de conditions réelles de mise en œuvre</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le cadrage a permis de les intégrer assez tôt pour qu’elles deviennent un élément du projet, et
                      non un obstacle découvert trop tard.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      5. La logique de suite a été préparée
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le travail n’a pas seulement permis de comprendre et de cadrer. Il a aussi permis d’ouvrir
                      correctement la suite :
                    </p>
                    <ul className={bulletListClass}>
                      <li>consultation éventuelle</li>
                      <li>travail de formalisation complémentaire</li>
                      <li>feuille de route</li>
                      <li>mise en œuvre plus structurée</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le sujet n’était plus simplement quelque chose qu’il faudrait traiter. Il devenait un projet dont
                      la suite pouvait être engagée plus proprement.
                    </p>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="impact-title">
                <h2 id="impact-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que cela a changé pour l’entreprise
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bénéfice principal n’a pas été un effet spectaculaire. Il a été plus fondamental : le projet est
                  devenu lisible.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Avant la mission :</p>
                <ul className={bulletListClass}>
                  <li>le sujet existait, mais restait en partie diffus</li>
                  <li>plusieurs lectures coexistaient</li>
                  <li>la tentation d’aller vite était réelle</li>
                  <li>la base de décision était encore trop fragile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Après la mission :</p>
                <ul className={bulletListClass}>
                  <li>le besoin était mieux nommé</li>
                  <li>le problème principal était plus clair</li>
                  <li>le périmètre était plus juste</li>
                  <li>les contraintes étaient plus visibles</li>
                  <li>les attentes étaient plus structurées</li>
                  <li>la suite pouvait être discutée sur une base beaucoup plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En pratique, cela a permis à l’entreprise :
                </p>
                <ul className={bulletListClass}>
                  <li>de mieux aligner les acteurs concernés</li>
                  <li>de réduire une partie de l’implicite</li>
                  <li>de sortir d’une lecture trop générale du sujet</li>
                  <li>de préparer la suite sans se précipiter sur une réponse mal calibrée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est un point essentiel dans les projets industriels.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce qui fragilise la suite n’est pas seulement un mauvais choix technique. C’est très souvent un
                  mauvais niveau de formulation au départ.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="together-title">
                <h2 id="together-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi le diagnostic et le cadrage ont été traités ensemble
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce cas, il était important que le diagnostic ne reste pas séparé du cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pourquoi ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce que le sujet n’avait pas seulement besoin d’être compris.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il avait besoin d’être transformé en projet exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un diagnostic seul aurait pu produire :
                </p>
                <ul className={bulletListClass}>
                  <li>une lecture plus claire</li>
                  <li>une liste de constats</li>
                  <li>quelques recommandations</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais cela n’aurait pas suffi à préparer correctement la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À l’inverse, un cadrage sans diagnostic sérieux aurait pu formaliser un projet sur une base encore
                  imprécise.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le travail utile devait donc tenir ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>la compréhension</li>
                  <li>puis la structuration</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est cette continuité qui a permis de produire un vrai déplacement :
                </p>
                <ul className={bulletListClass}>
                  <li>du ressenti vers le constat</li>
                  <li>du constat vers le projet</li>
                  <li>du projet vers une suite plus solide</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="shows-title">
                <h2 id="shows-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ce cas montre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">Premièrement</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet industriel peut être légitime sans être encore prêt à être lancé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le fait qu’un sujet soit important ne signifie pas qu’il soit déjà assez clair pour entrer en
                  consultation ou en mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">Deuxièmement</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic n’est pas seulement un travail d’analyse.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Lorsqu’il est bien mené, il sert à qualifier le niveau réel du sujet et à préparer le bon type de
                  réponse.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">Troisièmement</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage ne doit pas être vu comme une formalité documentaire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type de mission, il joue un rôle décisif : transformer une lecture améliorée de la situation
                  en base de travail réellement partageable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Autrement dit :
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  le diagnostic a permis de mieux comprendre ; le cadrage a permis de mieux engager la suite.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans cette mission, l’enjeu n’était pas de produire un projet plus vite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’enjeu était de produire un projet mieux fondé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’intervention a permis de :
                </p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin réel</li>
                  <li>objectiver les points de blocage</li>
                  <li>distinguer le sujet principal des symptômes périphériques</li>
                  <li>recentrer le périmètre</li>
                  <li>expliciter les contraintes</li>
                  <li>structurer une base de travail plus solide pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce type de mission est souvent déterminant, parce qu’il évite de demander à la mise en œuvre de
                  corriger ce que l’amont n’a pas suffisamment clarifié.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre entreprise a identifié un sujet important mais que le projet reste encore trop large, trop
                  flou ou trop difficile à formuler, c’est souvent qu’un travail de diagnostic et de cadrage doit venir
                  avant la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    offre diagnostic du fonctionnement opérationnel
                  </Link>
                  ,{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage de projet industriel
                  </Link>
                  ,{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    notre méthode
                  </Link>{" "}
                  ,{" "}
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    comment cadrer un projet industriel
                  </Link>
                  {" "}et{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    nous contacter
                  </Link>
                  .
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de clarifier un projet avant de lancer la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à objectiver la situation, cadrer le besoin et engager une suite plus solide.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">
                      Découvrir notre offre diagnostic
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
