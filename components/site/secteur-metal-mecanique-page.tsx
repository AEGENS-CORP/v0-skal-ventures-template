import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const SecteurMetalMecaniqueMeta = {
  title: "Conseil et pilotage de projets en métal et mécanique | AEGENS",
  description:
    "AEGENS accompagne les entreprises du métal et de la mécanique sur des sujets de diagnostic, cadrage et pilotage de projets liés au fonctionnement opérationnel, aux flux, aux méthodes et à la mise en œuvre.",
}

export function SecteurMetalMecaniquePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Secteurs", href: "/secteurs/" },
              { label: "Métal et mécanique" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Métal et mécanique
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le métal et la mécanique sont des environnements où les écarts d’organisation se voient vite dans le
                réel.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                En France, la métallurgie au sens large représente un tissu massif d’entreprises et d’emplois, avec
                une forte dominante de TPE et PME. La filière des biens d’équipement, qui inclut notamment les
                machines et équipements mécaniques, pèse elle aussi lourd et reste fortement exposée à la concurrence
                et à l’export.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais ces chiffres de poids sectoriel ne disent pas l’essentiel du quotidien opérationnel. Dans le
                métal et la mécanique, un sujet mal cadré ou un fonctionnement mal tenu se voit rapidement dans les
                passages entre bureau d’études, méthodes, production, qualité, maintenance, achats, supply, ADV et
                logistique.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il se traduit par des reprises, des validations peu lisibles, des écarts entre gamme théorique et
                exécution réelle, des pertes de temps dans les interfaces, ou une difficulté croissante à faire tenir
                ensemble délai, qualité, capacité, coûts et exigences client.
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
                  Pourquoi le métal et la mécanique demandent une approche spécifique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le métal et la mécanique ne sont pas seulement des univers de fabrication. Ce sont des
                  environnements où la robustesse du fonctionnement dépend fortement :
                </p>
                <ul className={bulletListClass}>
                  <li>de la qualité des interfaces</li>
                  <li>de la clarté des responsabilités</li>
                  <li>de la maîtrise des enchaînements</li>
                  <li>de la fiabilité des informations transmises</li>
                  <li>de la capacité à faire tenir ensemble préparation, exécution, contrôle et ajustement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type de contexte, les problèmes d’organisation ne restent pas abstraits. Une mauvaise
                  interface entre services produit vite :
                </p>
                <ul className={bulletListClass}>
                  <li>une attente</li>
                  <li>une reprise</li>
                  <li>une correction tardive</li>
                  <li>une ressaisie</li>
                  <li>un décalage d’information</li>
                  <li>une perte de rythme</li>
                  <li>une surcharge portée par quelques personnes qui compensent les écarts</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une filière composée en grande partie de PME, ces écarts sont rarement absorbés sans effet réel
                  sur le quotidien.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet n’est donc pas seulement d’améliorer les process. Le sujet est de savoir si le
                  fonctionnement tient réellement dans l’exécution.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-subjects-title">
                <h2 id="common-subjects-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les types de sujets que nous rencontrons le plus souvent en métal et mécanique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce secteur, les sujets arrivent rarement formulés comme un besoin de diagnostic, de cadrage ou
                  de pilotage. Ils arrivent sous une forme beaucoup plus concrète :
                </p>
                <ul className={bulletListClass}>
                  <li>pertes de temps entre méthodes, atelier, qualité et supply</li>
                  <li>reprises d’information entre ERP, fichiers, mails et suivis locaux</li>
                  <li>manque de visibilité sur l’état réel d’un ordre, d’un flux ou d’un avancement</li>
                  <li>méthodes de travail non harmonisées entre équipes, ateliers ou sites</li>
                  <li>besoin encore trop flou avant consultation d’un prestataire ou d’une solution</li>
                  <li>projet industriel identifié, mais pas encore assez cadré pour être lancé proprement</li>
                  <li>mise en œuvre engagée, mais plus difficile à coordonner dans la durée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces sujets ont un point commun : ils apparaissent rarement dans un seul service. Ils se situent
                  surtout dans les interfaces :
                </p>
                <ul className={bulletListClass}>
                  <li>entre études et production</li>
                  <li>entre méthodes et atelier</li>
                  <li>entre qualité et exploitation</li>
                  <li>entre planification et exécution</li>
                  <li>entre site et fonctions support</li>
                  <li>entre décision de principe et réalité du terrain</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="what-we-look-title">
                <h2 id="what-we-look-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous regardons d’abord dans une entreprise du métal et de la mécanique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’une solution prédéfinie. Nous partons du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce secteur, cela veut dire regarder très concrètement :
                </p>
                <ul className={bulletListClass}>
                  <li>comment une information circule</li>
                  <li>qui transmet quoi</li>
                  <li>qui valide</li>
                  <li>où une reprise apparaît</li>
                  <li>où la méthode officielle ne décrit plus exactement la pratique réelle</li>
                  <li>où les équipes compensent</li>
                  <li>
                    à quel moment le sujet devient plus dépendant des personnes que d’un cadre suffisamment lisible
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une ressaisie peut révéler un défaut de confiance dans la donnée amont, une validation mal placée,
                  une méthode non harmonisée ou un point de passage mal tenu.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un retard peut venir d’un goulot d’étranglement, d’un arbitrage trop tardif, d’une mauvaise lecture
                  de capacité, d’un projet mal cadré ou d’une coordination devenue trop implicite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pour cela qu’il faut d’abord qualifier le bon niveau du sujet avant de vouloir le transformer.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostic-title">
                <h2 id="diagnostic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Diagnostic : quand le fonctionnement réel doit être relu
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le métal et la mécanique, beaucoup de difficultés sont connues avant d’être vraiment
                  objectivées. Les équipes savent qu’il existe des pertes de temps, des reprises, des écarts de
                  méthode, des suivis parallèles, des points de friction entre services, ou une faible lisibilité sur
                  certains flux.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais tant que l’activité tient, ces sujets restent souvent dans une zone intermédiaire : déjà
                  coûteux, mais pas encore traités comme un vrai sujet de fond.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic prend alors de la valeur. Il permet de :
                </p>
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
                  <li>combinaison de plusieurs dimensions</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage sert alors à :</p>
                <ul className={bulletListClass}>
                  <li>reformuler le besoin réel</li>
                  <li>préciser l’objectif</li>
                  <li>poser le bon périmètre</li>
                  <li>
                    rendre visibles les contraintes de terrain, de charge, de qualité, de capacité ou de déploiement
                  </li>
                  <li>clarifier les parties prenantes</li>
                  <li>préparer une base sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le métal et la mécanique, cette étape est essentielle parce que les projets touchent souvent
                  plusieurs maillons de la chaîne de valeur à la fois.
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
                  Dans ce secteur, un projet ne vaut que s’il tient dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est particulièrement vrai dans des environnements où :
                </p>
                <ul className={bulletListClass}>
                  <li>les rythmes de production comptent</li>
                  <li>la qualité et la conformité ne laissent pas beaucoup de place à l’approximation</li>
                  <li>les capacités atelier, maintenance et méthodes sont déjà fortement sollicitées</li>
                  <li>
                    les arbitrages doivent être pris au bon moment pour éviter les reprises ou les décalages en chaîne
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage devient alors central. Il ne sert pas seulement à suivre un planning. Il sert à :
                </p>
                <ul className={bulletListClass}>
                  <li>maintenir la continuité entre besoin, décisions et mise en œuvre</li>
                  <li>coordonner plusieurs acteurs</li>
                  <li>faire remonter les arbitrages utiles</li>
                  <li>tenir les points sensibles</li>
                  <li>garder une lecture lisible de l’avancement réel</li>
                </ul>
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
                  Un sujet en métal et mécanique ne peut pas être lu comme un simple projet tertiaire. Plusieurs
                  réalités doivent être intégrées dès le départ.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La continuité industrielle</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le changement doit tenir dans une organisation qui ne peut pas dégrader durablement sa stabilité
                  opérationnelle sans effet sur le délai, la charge ou la qualité.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La structure PME du tissu industriel
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avec une très forte part de petites entreprises dans la métallurgie, les écarts de méthode, de
                  responsabilité ou de pilotage sont rarement absorbés sans effet réel.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le poids de l’export et de la compétitivité
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une grande partie de la filière biens d’équipement est tournée vers l’export, ce qui renforce
                  l’exigence de tenue, de qualité et de compétitivité.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La diversité des activités</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Conception, usinage, tôlerie, assemblage, sous-ensembles, maintenance, intégration, équipements
                  mécaniques : les contextes varient, mais le besoin de robustesse dans les interfaces reste le même.
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
                <p className="ae-text text-base sm:text-lg leading-relaxed">Notre rôle est différent :</p>
                <ul className={bulletListClass}>
                  <li>comprendre</li>
                  <li>clarifier</li>
                  <li>structurer</li>
                  <li>faire tenir la suite au bon niveau</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela peut vouloir dire diagnostic, cadrage ou pilotage, selon le niveau réel du sujet.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="signals-title">
                <h2 id="signals-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quelques signaux que le sujet mérite une intervention structurée
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une entreprise du métal et de la mécanique, il devient généralement utile d’intervenir quand
                  plusieurs signaux apparaissent ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    les mêmes pertes de temps reviennent entre études, méthodes, atelier, qualité et support
                  </li>
                  <li>les validations ou reprises deviennent normales</li>
                  <li>les méthodes diffèrent trop selon les équipes, sites ou ateliers</li>
                  <li>des suivis parallèles compensent un manque de visibilité</li>
                  <li>un projet existe déjà, mais reste difficile à stabiliser</li>
                  <li>une consultation est envisagée, mais le besoin n’est pas encore assez propre</li>
                  <li>la mise en œuvre avance, mais avec une coordination trop fragile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand ces éléments se cumulent, le sujet n’est probablement plus un simple irritant. Il devient un
                  sujet de fonctionnement, de cadrage ou de pilotage.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le métal et la mécanique sont des secteurs où les écarts de fonctionnement, de méthode ou de cadrage
                  se paient vite dans le réel.
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
                  Si votre entreprise du métal ou de la mécanique fait face à des pertes de temps, un manque de
                  visibilité, des méthodes non harmonisées, un besoin encore mal défini, ou un projet difficile à
                  structurer ou à tenir, alors cette page décrit précisément le type de réalité pour lequel notre
                  approche a été construite.
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
                  Besoin de clarifier un sujet en métal ou mécanique ?
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
