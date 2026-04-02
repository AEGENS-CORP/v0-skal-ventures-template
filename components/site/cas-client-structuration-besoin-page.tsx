import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"
const blockCardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

export const CasClientStructurationBesoinMeta = {
  title: "Structuration d’un besoin avant consultation | Cas client AEGENS",
  description:
    "Comment AEGENS a aidé à structurer un besoin avant consultation : clarification du sujet, cadrage, formalisation des attentes et sécurisation de la suite.",
}

export function CasClientStructurationBesoinPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Cas clients", href: "/cas-clients" },
              { label: "Structuration d’un besoin avant consultation" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Structuration d’un besoin avant consultation
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans beaucoup d’entreprises, la consultation arrive trop tôt.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le besoin existe. Le sujet est jugé important. Plusieurs options sont déjà évoquées. La volonté
                d’avancer est réelle.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais au moment de consulter, plusieurs questions restent encore insuffisamment clarifiées :
              </p>
              <ul className={bulletListClass}>
                <li>le besoin exact</li>
                <li>le périmètre</li>
                <li>les attentes réelles</li>
                <li>les contraintes</li>
                <li>les critères de comparaison</li>
                <li>le niveau réel du sujet</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est précisément dans ce type de situation que nous intervenons.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ce cas illustre une situation fréquente : un projet suffisamment sérieux pour justifier une
                consultation, mais pas encore assez structuré pour que cette consultation produise des réponses
                réellement comparables et utiles.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Voir notre approche cadrage</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="contexte-title">
                <h2 id="contexte-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le contexte
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’entreprise faisait face à un sujet devenu trop important pour rester géré de manière informelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plusieurs difficultés se combinaient :
                </p>
                <ul className={bulletListClass}>
                  <li>un fonctionnement devenu moins lisible</li>
                  <li>des irritants récurrents</li>
                  <li>des échanges et validations peu homogènes</li>
                  <li>un besoin de structuration plus fort</li>
                  <li>l’idée croissante qu’un appui externe ou une solution devait être envisagé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet était réel. Il n’était pas artificiellement créé par un effet de mode ou par une envie de
                  changer pour changer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais il restait encore formulé de manière trop large pour être consulté dans de bonnes conditions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, l’entreprise n’avait pas besoin de plus d’offres à ce stade. Elle avait besoin d’une
                  base de travail plus claire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent là que se joue la qualité de la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une consultation lancée sur un besoin encore flou ne produit pas seulement des réponses imparfaites.
                  Elle produit surtout des réponses difficilement comparables, qui obligent ensuite l’entreprise à
                  refaire en aval le travail qui aurait dû être fait en amont :
                </p>
                <ul className={bulletListClass}>
                  <li>clarifier le sujet</li>
                  <li>reformuler les attentes</li>
                  <li>réinterpréter les offres</li>
                  <li>distinguer les écarts de périmètre</li>
                  <li>réintroduire des arbitrages non posés au départ</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’enjeu de la mission était donc simple : structurer le besoin avant toute consultation.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="depart-title">
                <h2 id="depart-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La situation de départ
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Au départ, plusieurs symptômes étaient visibles, mais leur lecture restait encore partielle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet était décrit à travers :</p>
                <ul className={bulletListClass}>
                  <li>des pertes de temps</li>
                  <li>un manque de fluidité</li>
                  <li>des besoins de suivi plus clairs</li>
                  <li>des difficultés de coordination</li>
                  <li>un besoin de structuration plus large</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Comme souvent, ces formulations désignaient bien un problème, mais ne suffisaient pas à définir
                  correctement le projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Plusieurs zones restaient encore floues :</p>
                <ul className={bulletListClass}>
                  <li>le problème exact à traiter</li>
                  <li>les priorités réelles</li>
                  <li>les contours du périmètre</li>
                  <li>les usages concernés</li>
                  <li>les contraintes à intégrer</li>
                  <li>la forme même de la réponse attendue</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le même temps, la tentation de consulter existait déjà.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est un cas classique. Quand un sujet dure, les équipes veulent naturellement avancer. La
                  consultation apparaît alors comme un moyen de passer à l’étape suivante.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais si la base n’est pas assez claire, cette étape suivante fragilise au lieu de sécuriser.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La vraie question n’était donc pas : quel prestataire choisir ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La vraie question était d’abord : sur quelle base comparer utilement des réponses ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="objectif-title">
                <h2 id="objectif-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  L’objectif de la mission
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif n’était pas de sélectionner directement une solution ou un prestataire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif était de rendre cette sélection possible dans de bonnes conditions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plus précisément, la mission visait à :
                </p>
                <ul className={bulletListClass}>
                  <li>reformuler le besoin réel</li>
                  <li>distinguer le sujet de fond des symptômes</li>
                  <li>clarifier les attentes</li>
                  <li>poser le bon périmètre</li>
                  <li>faire apparaître les contraintes</li>
                  <li>structurer les points à arbitrer</li>
                  <li>préparer une base de consultation plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, il ne s’agissait pas encore de trancher entre plusieurs réponses.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il s’agissait d’abord de rendre le besoin :
                </p>
                <ul className={bulletListClass}>
                  <li>compréhensible</li>
                  <li>partageable</li>
                  <li>arbitrable</li>
                  <li>exploitable</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est une nuance importante.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Trop de consultations sont en réalité lancées pour compenser un cadrage insuffisant. Ici, l’enjeu
                  était au contraire de faire le travail dans le bon ordre.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre intervention
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention a consisté à remettre le sujet à plat, sans le tirer trop vite vers une solution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela a demandé plusieurs choses.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  D’abord, reprendre le besoin à la base.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un sujet existe depuis un certain temps, il est souvent recouvert par des formulations
                  successives, des interprétations différentes, des habitudes de langage et parfois des réponses déjà
                  imaginées.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une partie du travail consiste alors à revenir au réel :
                </p>
                <ul className={bulletListClass}>
                  <li>qu’observe-t-on exactement ?</li>
                  <li>où le fonctionnement se dégrade-t-il ?</li>
                  <li>quels sont les effets visibles ?</li>
                  <li>quelles équipes sont réellement concernées ?</li>
                  <li>qu’est-ce qui relève d’un irritant local ?</li>
                  <li>qu’est-ce qui relève d’un besoin plus structurant ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Ensuite, clarifier le niveau du sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tous les problèmes ne demandent pas une solution lourde. Toutes les difficultés ne justifient pas
                  une consultation large. Toutes les envies de structuration ne relèvent pas du même niveau de projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il fallait donc distinguer :</p>
                <ul className={bulletListClass}>
                  <li>ce qui relevait d’un ajustement</li>
                  <li>ce qui relevait d’un besoin plus structurant</li>
                  <li>ce qui devait être clarifié avant toute décision</li>
                  <li>ce qui pourrait plus tard faire l’objet d’une consultation</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Puis, formaliser les attendus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une entreprise peut très bien savoir qu’elle veut améliorer un sujet, sans encore savoir décrire
                  précisément :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qu’elle attend</li>
                  <li>ce qu’elle veut éviter</li>
                  <li>ce qui est indispensable</li>
                  <li>ce qui est souhaitable</li>
                  <li>sur quels critères elle jugera qu’une réponse est pertinente</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est là que le travail de structuration crée de la valeur.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Enfin, préparer la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La mission ne devait pas produire un document de plus. Elle devait produire une base de décision.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette base devait permettre à l’entreprise de savoir :
                </p>
                <ul className={bulletListClass}>
                  <li>si une consultation était désormais pertinente</li>
                  <li>ce qu’elle devait contenir</li>
                  <li>sur quel périmètre elle devait porter</li>
                  <li>selon quels critères elle pourrait être lue</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="structure-title">
                <h2 id="structure-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui a été structuré
                </h2>
                <div className="space-y-4">
                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le besoin réel</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le sujet a été reformulé de manière plus précise.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cela a permis de passer d’un ressenti général à un besoin plus clairement identifiable, et donc
                      à un objet de travail plus exploitable.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le périmètre utile</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le projet a été recentré sur ce qui devait réellement être traité dans un premier temps.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Sans cela, la consultation aurait risqué de mêler trop de sujets différents dans une même
                      demande.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les attentes fonctionnelles</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Les attentes ont été reformulées non pas en termes de solution, mais en termes de résultats
                      attendus, d’usages, de fonctionnement cible et de besoins réels.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les contraintes</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Les contraintes opérationnelles, organisationnelles et de mise en œuvre ont été rendues visibles.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      C’est une étape souvent négligée, alors qu’elle conditionne directement la pertinence des
                      réponses futures.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      Les critères de lecture de la suite
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      L’un des gains les plus importants a été de faire apparaître sur quoi la future consultation
                      devrait permettre de comparer :
                    </p>
                    <ul className={bulletListClass}>
                      <li>compréhension du besoin</li>
                      <li>couverture du périmètre</li>
                      <li>méthode</li>
                      <li>charge côté client</li>
                      <li>faisabilité</li>
                      <li>conditions de mise en œuvre</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="change-title">
                <h2 id="change-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que cela a changé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La différence ne s’est pas jouée dans un livrable impressionnant. Elle s’est jouée dans la qualité
                  de lecture du sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Avant la mission :</p>
                <ul className={bulletListClass}>
                  <li>le besoin existait, mais restait diffus</li>
                  <li>la consultation semblait proche, mais sa base était fragile</li>
                  <li>plusieurs lectures coexistaient encore</li>
                  <li>les critères de comparaison n’étaient pas réellement stabilisés</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Après la mission :</p>
                <ul className={bulletListClass}>
                  <li>le besoin était plus clairement formulé</li>
                  <li>le périmètre était plus lisible</li>
                  <li>les attentes étaient structurées</li>
                  <li>les contraintes étaient explicitées</li>
                  <li>la logique de consultation était clarifiée</li>
                  <li>la suite pouvait être engagée sur une base beaucoup plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, la mission n’a pas simplement préparé un document.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle a transformé un sujet encore trop flou en base de travail réellement exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent ce déplacement qui change la qualité d’un projet :
                </p>
                <ul className={bulletListClass}>
                  <li>moins d’implicite</li>
                  <li>moins de réponses hors sujet</li>
                  <li>moins de fausses comparaisons</li>
                  <li>plus de lisibilité</li>
                  <li>plus de cohérence dans la décision</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="decisive-title">
                <h2 id="decisive-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette étape était décisive
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce type de mission est souvent sous-estimé, parce qu’il ne produit pas immédiatement une mise en
                  œuvre visible.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pourtant, c’est très souvent là que se joue la qualité de la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une consultation part trop tôt :
                </p>
                <ul className={bulletListClass}>
                  <li>les offres sont difficiles à comparer</li>
                  <li>les prix sont mal interprétés</li>
                  <li>les écarts de périmètre sont découverts trop tard</li>
                  <li>les attentes côté client se reformulent en cours d’échange</li>
                  <li>le choix final repose plus sur une impression générale que sur une base structurée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En travaillant le besoin avant consultation, l’entreprise améliore non seulement la qualité de ses
                  futurs échanges avec les prestataires, mais aussi la qualité de ses propres arbitrages.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette étape est décisive parce qu’elle redonne à l’entreprise la maîtrise de son sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle ne subit plus la lecture que d’autres en feront. Elle pose sa propre base de travail.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="shows-title">
                <h2 id="shows-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ce cas montre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce cas montre quelque chose de très simple : le bon moment pour structurer un besoin n’est pas après
                  réception des offres. C’est avant la consultation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il montre aussi qu’un projet peut être légitime sans être encore assez mûr pour être consulté.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Enfin, il montre qu’une intervention utile n’a pas toujours pour objet de choisir une solution ou de
                  piloter l’exécution. Elle peut consister à rendre cette suite possible dans de meilleures conditions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent une étape moins visible, mais plus décisive qu’elle n’en a l’air.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans cette mission, l’enjeu n’était pas de lancer plus vite. L’enjeu était de lancer plus juste.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le travail a permis de :
                </p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin réel</li>
                  <li>structurer les attentes</li>
                  <li>poser le bon périmètre</li>
                  <li>expliciter les contraintes</li>
                  <li>préparer les critères de comparaison</li>
                  <li>sécuriser la future consultation</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, il a permis de transformer un sujet encore trop diffus en base de travail sérieuse
                  pour la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre entreprise doit consulter sur un sujet important mais que le besoin reste encore
                  partiellement flou, c’est souvent qu’un travail de structuration doit venir avant la consultation
                  elle-même.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage de projet industriel
                  </Link>
                  ,{" "}
                  <Link
                    href="/ressources/comment-structurer-un-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    comment structurer un besoin avant consultation
                  </Link>
                  ,{" "}
                  <Link
                    href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    comment choisir un prestataire
                  </Link>
                  ,{" "}
                  <Link
                    href="/modeles-checklists/checklist-consultation-prestataires/"
                    className={inlineSeoLinkClass}
                  >
                    checklist consultation prestataires
                  </Link>{" "}
                  et{" "}
                  <Link
                    href="/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/"
                    className={inlineSeoLinkClass}
                  >
                    matrice de critères
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
                  Besoin de structurer un besoin avant consultation ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le sujet, poser le cadre et sécuriser la suite sur une base exploitable.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">
                      Découvrir notre approche de cadrage
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
