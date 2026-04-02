import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const SecteurIndustrieProcessMeta = {
  title: "Conseil et pilotage de projets en industrie de process | AEGENS",
  description:
    "AEGENS accompagne les entreprises de l’industrie de process sur des sujets de diagnostic, cadrage et pilotage de projets liés au fonctionnement opérationnel, aux flux, aux méthodes et à la mise en œuvre.",
}

export function SecteurIndustrieProcessPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Secteurs", href: "/secteurs/" },
              { label: "Industrie de process" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Industrie de process
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L’industrie de process est un environnement où les écarts d’organisation, de méthode ou de pilotage
                se paient vite dans le réel.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                On regroupe généralement sous cette logique des activités où la production repose sur des flux
                continus ou semi-continus, des enchaînements fortement dépendants, une transformation de matière et
                des exigences élevées de stabilité, de qualité, de sécurité et de traçabilité.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais l’essentiel n’est pas dans la catégorie statistique. L’essentiel est dans la réalité
                opérationnelle.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans une industrie de process, un sujet mal cadré ou un fonctionnement mal tenu ne reste pas longtemps
                abstrait. Il se traduit rapidement par :
              </p>
              <ul className={bulletListClass}>
                <li>une perte de stabilité</li>
                <li>une attente de validation</li>
                <li>une reprise d’information</li>
                <li>un écart entre le process théorique et le process réel</li>
                <li>une surcharge de coordination</li>
                <li>une baisse de lisibilité sur le flux</li>
                <li>
                  une difficulté croissante à faire tenir ensemble cadence, qualité, sécurité, conformité,
                  maintenance, supply et contraintes client
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans les secteurs de process, la performance ne dépend pas seulement du choix de solution, mais aussi
                de la manière dont l’organisation tient la transformation jusqu’au terrain.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/secteurs/">Voir tous nos secteurs</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="specific-approach-title">
                <h2 id="specific-approach-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi l’industrie de process demande une approche spécifique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’industrie de process n’est pas seulement une industrie avec des machines. C’est un environnement
                  où la robustesse du fonctionnement dépend de plusieurs équilibres simultanés :
                </p>
                <ul className={bulletListClass}>
                  <li>continuité ou quasi-continuité du flux</li>
                  <li>qualité et conformité</li>
                  <li>sécurité</li>
                  <li>maintenance et disponibilité</li>
                  <li>circulation de l’information</li>
                  <li>coordination entre exploitation, support et pilotage</li>
                  <li>
                    capacité à absorber les écarts sans dégrader l’ensemble du système
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type d’environnement, les problèmes d’organisation ne restent pas locaux très longtemps. Une
                  mauvaise interface entre services ou une méthode mal tenue produit vite :
                </p>
                <ul className={bulletListClass}>
                  <li>une perte de visibilité sur l’état réel du process</li>
                  <li>une validation trop tardive</li>
                  <li>une ressaisie ou un suivi parallèle</li>
                  <li>une difficulté de coordination entre terrain et support</li>
                  <li>une baisse de qualité de décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, dans une industrie de process, le sujet n’est pas seulement de faire tourner. Le
                  sujet est de savoir si le fonctionnement reste lisible, robuste et tenable quand les contraintes se
                  cumulent.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-subjects-title">
                <h2 id="common-subjects-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les types de sujets que nous rencontrons le plus souvent en industrie de process
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ces environnements, les sujets arrivent rarement formulés comme un besoin de diagnostic, de
                  cadrage ou de pilotage. Ils arrivent sous une forme beaucoup plus concrète :
                </p>
                <ul className={bulletListClass}>
                  <li>pertes de temps entre exploitation, qualité, maintenance, supply ou support</li>
                  <li>reprises d’information entre outils, fichiers, mails et suivis locaux</li>
                  <li>manque de visibilité sur l’état réel d’un flux, d’un process ou d’un dossier</li>
                  <li>méthodes de travail non harmonisées entre équipes, quarts, unités ou sites</li>
                  <li>besoin encore trop flou avant consultation d’une solution ou d’un prestataire</li>
                  <li>projet identifié, mais pas encore assez cadré pour être lancé proprement</li>
                  <li>mise en œuvre engagée, mais plus difficile à coordonner dans la durée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces sujets ont un point commun : ils apparaissent rarement dans un seul service. Ils se situent
                  surtout dans les interfaces :
                </p>
                <ul className={bulletListClass}>
                  <li>entre production et qualité</li>
                  <li>entre exploitation et maintenance</li>
                  <li>entre terrain et méthodes</li>
                  <li>entre site et fonctions support</li>
                  <li>entre données de suivi et décisions</li>
                  <li>entre besoin perçu et projet réellement formulé</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="what-we-look-title">
                <h2 id="what-we-look-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous regardons d’abord dans une entreprise de process
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’une solution à vendre. Nous partons du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une industrie de process, cela veut dire regarder très concrètement :
                </p>
                <ul className={bulletListClass}>
                  <li>comment l’information circule</li>
                  <li>qui valide quoi</li>
                  <li>où le process réel s’écarte du process supposé</li>
                  <li>où une reprise apparaît</li>
                  <li>où la méthode officielle ne décrit plus complètement la pratique réelle</li>
                  <li>où les équipes compensent</li>
                  <li>
                    à quel moment le sujet devient plus dépendant des personnes que d’un cadre suffisamment clair
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une ressaisie peut révéler un défaut de confiance dans la donnée amont, une validation mal placée,
                  un besoin de traçabilité mal organisé, une méthode non harmonisée, ou un passage mal tenu entre deux
                  fonctions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un retard ou un écart peut relever d’un goulet d’étranglement, d’un arbitrage trop tardif, d’une
                  faible lisibilité sur le flux, d’un projet mal cadré, ou d’une organisation devenue trop dépendante
                  de contournements locaux.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que cette lecture n’est pas posée, les réponses sont souvent trop rapides.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostic-title">
                <h2 id="diagnostic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Diagnostic : quand le fonctionnement réel doit être relu
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’industries de process, les difficultés sont connues avant d’être réellement
                  objectivées.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les équipes savent qu’il existe :
                </p>
                <ul className={bulletListClass}>
                  <li>des pertes de temps</li>
                  <li>des reprises</li>
                  <li>des validations lourdes</li>
                  <li>des écarts de méthode</li>
                  <li>des suivis parallèles</li>
                  <li>un manque de visibilité sur l’état réel d’un flux</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais tant que l’exploitation tient, ces sujets restent souvent dans une zone intermédiaire : déjà
                  coûteux, mais pas encore traités comme un vrai sujet de fond.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est là que le diagnostic prend de la valeur.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il permet de :</p>
                <ul className={bulletListClass}>
                  <li>relire le fonctionnement réel</li>
                  <li>objectiver les points de blocage</li>
                  <li>distinguer les irritants locaux des sujets structurants</li>
                  <li>clarifier les interfaces entre équipes</li>
                  <li>
                    déterminer si le problème relève d’un ajustement, d’une harmonisation, d’un cadrage ou d’un
                    projet plus large
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour aller plus loin :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic du fonctionnement opérationnel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="cadrage-title">
                <h2 id="cadrage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Cadrage : quand le besoin doit devenir projet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autre cas fréquent : le besoin existe, mais il n’est pas encore assez formulé pour être consulté,
                  comparé ou lancé proprement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela arrive quand l’entreprise sait qu’un sujet doit être traité, mais hésite encore entre plusieurs
                  niveaux de réponse :
                </p>
                <ul className={bulletListClass}>
                  <li>ajustement de méthode</li>
                  <li>évolution d’organisation</li>
                  <li>besoin d’outil</li>
                  <li>appui externe</li>
                  <li>projet transverse</li>
                  <li>combinaison de plusieurs de ces dimensions</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage sert alors à :</p>
                <ul className={bulletListClass}>
                  <li>reformuler le besoin réel</li>
                  <li>préciser l’objectif</li>
                  <li>poser le bon périmètre</li>
                  <li>
                    rendre visibles les contraintes de terrain, de qualité, de sécurité, de disponibilité, de
                    coordination ou de déploiement
                  </li>
                  <li>clarifier les parties prenantes</li>
                  <li>préparer une base sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une industrie de process, cette étape est essentielle parce qu’un projet mal cadré fragilise
                  immédiatement la comparaison des réponses, la lecture du prix, la charge transférée à l’entreprise et
                  la capacité de mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour aller plus loin :{" "}
                  <Link
                    href="/offres/cadrage-projet-industriel-cahier-des-charges/"
                    className={inlineSeoLinkClass}
                  >
                    cadrage de projet industriel et cahier des charges
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="pilotage-title">
                <h2 id="pilotage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pilotage : quand la mise en œuvre doit tenir dans le réel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une industrie de process, un projet n’a de valeur que s’il tient dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est particulièrement vrai dans des environnements où :
                </p>
                <ul className={bulletListClass}>
                  <li>la continuité de fonctionnement compte</li>
                  <li>la qualité et la conformité laissent peu de place à l’approximation</li>
                  <li>les équipes d’exploitation et de support portent déjà une forte charge</li>
                  <li>
                    les arbitrages doivent être pris au bon moment pour éviter les reprises ou les effets en chaîne
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le pilotage devient alors central.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il ne sert pas seulement à suivre un planning. Il sert à :</p>
                <ul className={bulletListClass}>
                  <li>maintenir la continuité entre besoin, décisions et mise en œuvre</li>
                  <li>coordonner plusieurs acteurs</li>
                  <li>faire remonter les arbitrages utiles</li>
                  <li>garder une lecture lisible de l’avancement réel</li>
                  <li>
                    éviter que le projet ne se fragilise par empilement de corrections tardives
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans les secteurs de process, cette tenue de l’exécution est un facteur direct de robustesse.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour aller plus loin :{" "}
                  <Link
                    href="/offres/pilotage-mise-en-oeuvre-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    pilotage de mise en œuvre de projet industriel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="sector-realities-title">
                <h2 id="sector-realities-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les réalités sectorielles qu’il faut respecter
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un sujet en industrie de process ne peut pas être lu comme un simple projet tertiaire. Plusieurs
                  réalités doivent être intégrées dès le départ.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La continuité ou la stabilité du process
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le changement doit tenir dans une organisation qui ne peut pas dégrader durablement son
                  fonctionnement sans effet opérationnel direct.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La qualité, la conformité et parfois la sécurité
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans plusieurs secteurs de process, ces dimensions ne sont pas accessoires. Elles structurent
                  fortement les validations, les méthodes et les responsabilités.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le poids des interfaces</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le process n’est pas seulement un enchaînement technique. C’est aussi un enchaînement
                  organisationnel. La performance dépend autant des passages entre fonctions que des paramètres de
                  procédé eux-mêmes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La pression économique et industrielle
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les secteurs de process sont exposés à des contraintes de compétitivité, d’énergie, de matières,
                  d’investissement et de transformation industrielle. Cela rend les erreurs de cadrage ou de mise en
                  œuvre plus coûteuses.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="not-bringing-title">
                <h2 id="not-bringing-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous n’apportons pas dans ce secteur
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous n’arrivons pas avec une solution sectorielle générique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous ne venons pas :</p>
                <ul className={bulletListClass}>
                  <li>plaquer un discours standard sur l’optimisation</li>
                  <li>réduire trop vite un problème à un sujet d’outil</li>
                  <li>proposer une transformation large alors que le besoin réel n’a pas encore été clarifié</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne traitons pas non plus les difficultés visibles comme un simple problème de communication
                  entre services.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une industrie de process, les tensions visibles sont très souvent le produit :
                </p>
                <ul className={bulletListClass}>
                  <li>d’un passage mal tenu</li>
                  <li>d’une validation mal placée</li>
                  <li>d’une méthode de travail divergente</li>
                  <li>d’un besoin mal défini</li>
                  <li>d’une organisation devenue trop dépendante des personnes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Notre rôle est différent :</p>
                <ul className={bulletListClass}>
                  <li>comprendre</li>
                  <li>clarifier</li>
                  <li>structurer</li>
                  <li>faire tenir la suite au bon niveau</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="signals-title">
                <h2 id="signals-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quelques signaux que le sujet mérite une intervention structurée
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une entreprise de process, il devient généralement utile d’intervenir quand plusieurs signaux
                  apparaissent ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    les mêmes pertes de temps reviennent entre exploitation, qualité, maintenance et support
                  </li>
                  <li>les validations ou reprises deviennent normales</li>
                  <li>les méthodes diffèrent trop selon les équipes, unités, quarts ou sites</li>
                  <li>des suivis parallèles compensent un manque de visibilité</li>
                  <li>un projet existe déjà, mais reste difficile à stabiliser</li>
                  <li>une consultation est envisagée, mais le besoin n’est pas encore assez propre</li>
                  <li>la mise en œuvre avance, mais avec une coordination trop fragile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand ces éléments se cumulent, le sujet n’est probablement plus un simple irritant du quotidien.
                  Il devient un sujet de fonctionnement, de cadrage ou de pilotage.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’industrie de process est un environnement où les écarts de fonctionnement, de méthode ou de
                  cadrage se paient vite dans le réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet n’est pas seulement d’améliorer. Le sujet est de comprendre :
                </p>
                <ul className={bulletListClass}>
                  <li>où le fonctionnement se déforme</li>
                  <li>pourquoi il se déforme</li>
                  <li>ce qui relève d’un diagnostic</li>
                  <li>ce qui relève d’un cadrage</li>
                  <li>ce qui relève d’un pilotage de mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est à ce niveau que nous intervenons.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre entreprise de process fait face à des pertes de temps, un manque de visibilité, des
                  méthodes non harmonisées, un besoin encore mal défini, ou un projet difficile à structurer ou à
                  tenir, alors cette page décrit précisément le type de réalité pour lequel notre approche a été
                  construite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/problematiques/pertes-de-temps-entre-services-industrie/"
                    className={inlineSeoLinkClass}
                  >
                    pertes de temps entre services
                  </Link>
                  ,{" "}
                  <Link
                    href="/problematiques/manque-de-visibilite-sur-les-processus/"
                    className={inlineSeoLinkClass}
                  >
                    manque de visibilité sur les processus
                  </Link>
                  ,{" "}
                  <Link
                    href="/problematiques/methodes-de-travail-non-harmonisees/"
                    className={inlineSeoLinkClass}
                  >
                    méthodes de travail non harmonisées
                  </Link>{" "}
                  et{" "}
                  <Link
                    href="/cas-clients/diagnostic-et-cadrage-dun-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    cas client diagnostic et cadrage
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
                  Besoin de clarifier un sujet en industrie de process ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à qualifier le bon niveau entre diagnostic, cadrage et pilotage.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/secteurs/">Voir les autres secteurs</Link>
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
