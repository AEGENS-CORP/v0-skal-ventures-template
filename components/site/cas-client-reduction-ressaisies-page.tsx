import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"
const blockCardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

export const CasClientReductionRessaisiesMeta = {
  title: "Réduction des ressaisies et clarification des méthodes | Cas client AEGENS",
  description:
    "Comment AEGENS a aidé à réduire les ressaisies, clarifier les méthodes de travail et structurer un fonctionnement plus lisible entre plusieurs équipes.",
}

export function CasClientReductionRessaisiesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Cas clients", href: "/cas-clients" },
              { label: "Réduction des ressaisies et clarification des méthodes" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Réduction des ressaisies et clarification des méthodes
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Certaines difficultés ne se voient pas immédiatement comme un projet.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elles s’installent progressivement dans le quotidien :
              </p>
              <ul className={bulletListClass}>
                <li>les mêmes informations sont ressaisies plusieurs fois</li>
                <li>des fichiers ou supports se doublonnent</li>
                <li>les validations se font de manière hétérogène</li>
                <li>chacun compense localement pour faire avancer son travail</li>
                <li>
                  au final, l’organisation continue à fonctionner, mais au prix d’une charge inutile, d’un manque de
                  lisibilité et d’une dépendance croissante à des habitudes devenues fragiles
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est dans ce type de situation que nous sommes intervenus.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le sujet n’était pas un grand projet de transformation affiché comme tel au départ.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’était un problème de fonctionnement concret, devenu suffisamment récurrent pour justifier une remise
                à plat sérieuse.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L’enjeu n’était pas seulement de gagner du temps.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L’enjeu était de comprendre pourquoi les ressaisies existaient, ce qu’elles révélaient dans
                l’organisation du travail, et comment clarifier les méthodes pour réduire la charge inutile sans
                déplacer le problème ailleurs.
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
              <section className={sectionClass} aria-labelledby="contexte-title">
                <h2 id="contexte-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le contexte de départ
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’entreprise faisait face à une situation fréquente dans les environnements opérationnels : le
                  fonctionnement tenait, mais il tenait au prix de nombreuses compensations.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Plusieurs signes étaient visibles :</p>
                <ul className={bulletListClass}>
                  <li>des informations reprises plusieurs fois dans des supports différents</li>
                  <li>des échanges qui dépendaient beaucoup d’habitudes locales</li>
                  <li>des étapes de travail peu homogènes selon les équipes</li>
                  <li>des validations ou points de passage manquant de lisibilité</li>
                  <li>
                    une impression générale de perte de temps, sans lecture encore suffisamment structurée des causes
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Comme souvent, le problème n’était pas seulement la ressaisie elle-même.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La ressaisie n’était qu’un symptôme.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Derrière elle apparaissaient plusieurs sujets plus profonds :
                </p>
                <ul className={bulletListClass}>
                  <li>une circulation de l’information peu stabilisée</li>
                  <li>des méthodes de travail hétérogènes</li>
                  <li>des responsabilités pas toujours assez explicites</li>
                  <li>des points de passage entre équipes insuffisamment clarifiés</li>
                  <li>
                    plus largement, un fonctionnement qui reposait trop sur des ajustements implicites
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type de situation, l’erreur classique consiste à chercher tout de suite une réponse outillée,
                  alors que le sujet demande d’abord une lecture plus précise de l’organisation réelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’enjeu de la mission était donc d’éviter une réponse trop rapide, et de repartir du fonctionnement
                  concret.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="besoin-title">
                <h2 id="besoin-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le besoin réel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Au départ, la demande pouvait être formulée de manière simple : réduire les ressaisies et fluidifier
                  le fonctionnement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais cette formulation restait trop large pour être réellement opérante.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Réduire des ressaisies n’est jamais seulement une question de suppression d’étapes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il faut d’abord comprendre :
                </p>
                <ul className={bulletListClass}>
                  <li>pourquoi elles existent</li>
                  <li>à quel moment elles apparaissent</li>
                  <li>quelles équipes les produisent ou les subissent</li>
                  <li>quelles informations sont reprises</li>
                  <li>ce que ces reprises compensent</li>
                  <li>
                    ce qui, dans l’organisation, rend ces pratiques nécessaires aux yeux des équipes
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le besoin réel n’était donc pas uniquement de faire disparaître des doubles saisies.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le besoin réel était de :</p>
                <ul className={bulletListClass}>
                  <li>relire le fonctionnement réel</li>
                  <li>clarifier les méthodes de travail</li>
                  <li>identifier les points de passage mal tenus</li>
                  <li>remettre de la cohérence là où le quotidien avait peu à peu produit des habitudes inefficaces</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, il ne s’agissait pas seulement d’un sujet de productivité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il s’agissait d’un sujet de lisibilité du fonctionnement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="objectif-title">
                <h2 id="objectif-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  L’objectif de la mission
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La mission poursuivait un objectif clair : comprendre les causes réelles des ressaisies et clarifier
                  les méthodes pour rétablir un fonctionnement plus simple, plus homogène et plus lisible.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pour cela, il fallait :</p>
                <ul className={bulletListClass}>
                  <li>objectiver les pratiques réelles</li>
                  <li>faire apparaître les zones de doublon ou de reprise</li>
                  <li>distinguer les ressaisies utiles des ressaisies subies</li>
                  <li>comprendre les logiques de contournement</li>
                  <li>clarifier les étapes et responsabilités</li>
                  <li>identifier ce qui devait être simplifié, harmonisé ou mieux structuré</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif n’était pas de produire un discours général sur l’efficacité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif était de traiter un sujet concret, visible dans le travail quotidien, et dont les effets
                  pesaient directement sur l’exécution.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre intervention
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention a d’abord consisté à sortir d’une lecture superficielle du problème.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Lorsqu’une entreprise dit nous ressaisissons trop, elle désigne un effet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais pour traiter correctement cet effet, il faut revenir à ce qui le produit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous avons donc repris le fonctionnement à partir des situations concrètes :
                </p>
                <ul className={bulletListClass}>
                  <li>quelles données étaient reprises</li>
                  <li>à quel moment</li>
                  <li>dans quels supports</li>
                  <li>par qui</li>
                  <li>avec quel but</li>
                  <li>avec quelles conséquences sur la fluidité du travail</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce travail a permis de faire apparaître plusieurs réalités.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  D’abord, toutes les ressaisies n’avaient pas la même nature.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Certaines relevaient :</p>
                <ul className={bulletListClass}>
                  <li>d’une absence de point d’entrée unique</li>
                  <li>d’un besoin de contrôle ou de validation</li>
                  <li>d’un manque de confiance dans l’information déjà produite</li>
                  <li>d’une mauvaise circulation de l’information</li>
                  <li>d’une méthode de travail qui variait selon les équipes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ensuite, les méthodes de travail n’étaient pas toujours assez homogènes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ce point est central.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand plusieurs équipes ou plusieurs personnes traitent une même information selon des logiques
                  différentes, les ressaisies apparaissent souvent comme une manière de sécuriser localement le
                  travail.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles deviennent alors une compensation, pas simplement une erreur.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Enfin, certaines étapes de passage entre acteurs étaient insuffisamment clarifiées.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, le problème ne venait pas uniquement d’un support ou d’une habitude isolée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il venait aussi de la manière dont le fonctionnement était organisé entre les étapes.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="clear-title">
                <h2 id="clear-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui a été mis au clair
                </h2>
                <div className="space-y-4">
                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      1. Les ressaisies ont été requalifiées
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Avant l’intervention, elles étaient surtout vues comme une perte de temps diffuse.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Après analyse, elles sont devenues lisibles :</p>
                    <ul className={bulletListClass}>
                      <li>certaines relevaient d’un défaut de méthode</li>
                      <li>certaines relevaient d’un manque de standardisation</li>
                      <li>
                        certaines relevaient d’un besoin de validation ou de traçabilité mal organisé
                      </li>
                      <li>certaines relevaient d’un problème de passage d’information entre équipes</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette requalification a été essentielle, parce qu’elle a permis de sortir d’une lecture uniforme
                      du sujet.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      2. Les méthodes ont été comparées au réel
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Plutôt que de s’en tenir à ce qui était prévu, le travail a permis d’observer ce qui se faisait
                      effectivement.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Cela a mis en évidence :</p>
                    <ul className={bulletListClass}>
                      <li>des écarts entre équipes</li>
                      <li>des interprétations différentes d’une même étape</li>
                      <li>des habitudes devenues locales</li>
                      <li>
                        des ajustements qui fonctionnaient individuellement, mais dégradaient la cohérence d’ensemble
                      </li>
                    </ul>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      3. Les responsabilités et points de passage ont gagné en lisibilité
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Une partie du problème venait du fait que certaines informations changeaient de main sans cadre
                      assez explicite.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le travail a permis de mieux distinguer :
                    </p>
                    <ul className={bulletListClass}>
                      <li>qui produit</li>
                      <li>qui vérifie</li>
                      <li>qui transmet</li>
                      <li>qui valide</li>
                      <li>à quel moment la reprise d’information devient inutile ou redondante</li>
                    </ul>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      4. Les leviers d’action ont été hiérarchisés
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      L’intérêt de la mission n’était pas de lister tout ce qui pourrait être amélioré.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Il était de faire ressortir :</p>
                    <ul className={bulletListClass}>
                      <li>ce qui relevait d’une clarification de méthode</li>
                      <li>ce qui relevait d’une harmonisation</li>
                      <li>ce qui relevait d’une simplification</li>
                      <li>
                        ce qui pourrait, dans un second temps, demander une structuration plus large ou une évolution
                        d’outillage
                      </li>
                    </ul>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="changed-title">
                <h2 id="changed-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que cela a changé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le changement principal n’a pas été une suppression immédiate de toutes les ressaisies.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le changement principal a été une meilleure compréhension du fonctionnement réel, et donc une
                  capacité beaucoup plus forte à agir utilement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Avant la mission :</p>
                <ul className={bulletListClass}>
                  <li>les ressaisies étaient visibles, mais leurs causes restaient largement mélangées</li>
                  <li>les méthodes variaient, mais cela n’était pas encore suffisamment objectivé</li>
                  <li>le besoin de clarification existait, mais n’était pas encore structuré</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Après la mission :</p>
                <ul className={bulletListClass}>
                  <li>le problème était mieux qualifié</li>
                  <li>les causes principales étaient plus lisibles</li>
                  <li>les méthodes pouvaient être comparées et clarifiées</li>
                  <li>les priorités d’action ressortaient plus nettement</li>
                  <li>l’entreprise disposait d’une base beaucoup plus sérieuse pour décider de la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela a produit plusieurs effets concrets :</p>
                <ul className={bulletListClass}>
                  <li>une lecture plus claire des pertes de temps réellement utiles à traiter</li>
                  <li>une meilleure distinction entre les irritants secondaires et les points structurants</li>
                  <li>une capacité accrue à harmoniser certaines pratiques</li>
                  <li>
                    une réduction du risque de traiter le problème par une réponse trop rapide ou mal ciblée
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="importance-title">
                <h2 id="importance-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette mission était importante
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce type de mission paraît parfois moins spectaculaire qu’un projet de déploiement ou de
                  transformation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En réalité, il est souvent plus fondamental qu’il n’y paraît.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les ressaisies et les méthodes mal clarifiées ont plusieurs effets cumulatifs :
                </p>
                <ul className={bulletListClass}>
                  <li>elles consomment du temps</li>
                  <li>elles dégradent la lisibilité du travail</li>
                  <li>elles augmentent la dépendance aux habitudes individuelles</li>
                  <li>elles rendent plus difficile la transmission</li>
                  <li>elles créent un terrain propice aux erreurs, aux oublis ou aux reprises inutiles</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand elles deviennent structurelles, elles ne peuvent plus être traitées comme de simples irritants.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il faut alors revenir à la logique du fonctionnement :
                </p>
                <ul className={bulletListClass}>
                  <li>où l’information naît</li>
                  <li>comment elle circule</li>
                  <li>qui la transforme</li>
                  <li>qui la contrôle</li>
                  <li>pourquoi elle est reprise</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est ce retour au réel qui a permis ici de produire un travail utile.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="cas-title">
                <h2 id="cas-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ce cas montre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce cas montre d’abord qu’un sujet de ressaisie n’est presque jamais un sujet de ressaisie seulement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il révèle souvent :</p>
                <ul className={bulletListClass}>
                  <li>un problème de méthode</li>
                  <li>un manque d’harmonisation</li>
                  <li>une circulation de l’information insuffisamment stabilisée</li>
                  <li>
                    une organisation des étapes qui crée de la reprise au lieu de créer de la fluidité
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il montre aussi qu’avant de chercher une réponse technique ou une transformation plus large, il est
                  souvent nécessaire de clarifier :
                </p>
                <ul className={bulletListClass}>
                  <li>le fonctionnement réel</li>
                  <li>les pratiques</li>
                  <li>les responsabilités</li>
                  <li>les points de passage entre équipes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Enfin, il montre qu’une intervention utile ne consiste pas seulement à identifier ce qui ne va pas.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle consiste à transformer un irritant diffus en sujet lisible, hiérarchisé, et donc réellement
                  traitable.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans cette mission, l’enjeu n’était pas seulement de réduire des ressaisies.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’enjeu était de comprendre ce qu’elles révélaient du fonctionnement, puis de clarifier les méthodes
                  pour rétablir une organisation plus cohérente.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le travail a permis de :
                </p>
                <ul className={bulletListClass}>
                  <li>qualifier les causes réelles</li>
                  <li>comparer les méthodes existantes</li>
                  <li>clarifier les points de passage</li>
                  <li>hiérarchiser les leviers d’action</li>
                  <li>rendre la suite beaucoup plus lisible</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre entreprise constate des ressaisies récurrentes, des doublons ou des méthodes de travail
                  devenues trop hétérogènes, c’est souvent qu’un travail de clarification du fonctionnement est
                  nécessaire avant toute autre réponse.
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
                  <Link
                    href="/problematiques/ressaisies-excel-mails-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    ressaisies Excel et mails en PME industrielle
                  </Link>
                  ,{" "}
                  <Link
                    href="/problematiques/methodes-de-travail-non-harmonisees/"
                    className={inlineSeoLinkClass}
                  >
                    méthodes de travail non harmonisées
                  </Link>
                  ,{" "}
                  <Link
                    href="/ressources/quand-faire-appel-a-un-regard-exterieur/"
                    className={inlineSeoLinkClass}
                  >
                    quand faire appel à un regard extérieur
                  </Link>{" "}
                  et{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    nous contacter
                  </Link>
                  .
                </p>
              </section>
            </article>
          </section>

          <section
            className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10"
            aria-labelledby="cta-title"
          >
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de clarifier votre fonctionnement avant d’aller plus loin ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à objectiver les causes, harmoniser les méthodes et structurer une suite utile.
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
