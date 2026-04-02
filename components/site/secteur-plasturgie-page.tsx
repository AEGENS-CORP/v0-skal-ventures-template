import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const SecteurPlasturgieMeta = {
  title: "Conseil et pilotage de projets en plasturgie | AEGENS",
  description:
    "AEGENS accompagne les entreprises de la plasturgie sur des sujets de diagnostic, cadrage et pilotage de projets liés au fonctionnement opérationnel, aux flux, aux méthodes et à la mise en œuvre.",
}

export function SecteurPlasturgiePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Secteurs", href: "/secteurs/" },
              { label: "Plasturgie" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Plasturgie
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La plasturgie est un secteur où les écarts d’organisation, de méthode ou de cadrage se paient vite
                dans le réel.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La filière française pèse lourd, avec près de 4 000 établissements et un peu moins de 203 000
                salariés en 2024 selon Polyvia, et elle reste fortement composée de PME et de petites structures.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais ce poids industriel ne doit pas masquer une réalité plus opérationnelle : dans la plasturgie, un
                sujet mal tenu se voit rapidement dans les changements de série, les flux d’information entre ateliers
                et support, la qualité de transmission des paramètres, la coordination entre production, qualité,
                maintenance, méthodes, supply, ADV ou logistique, et la capacité à faire tenir ensemble cadence,
                qualité, matière, coûts et délais.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est précisément pour cela que ce secteur demande une lecture du réel très rigoureuse, puis un
                cadrage et un pilotage capables de tenir dans l’exécution.
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
                  Pourquoi la plasturgie demande une approche spécifique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La plasturgie n’est pas seulement une activité de transformation. C’est un environnement où la
                  qualité d’exécution dépend d’un ensemble d’équilibres fins : qualité matière, réglages,
                  répétabilité, contraintes client, sous-traitance, supply, gestion des séries, parfois multi-sites,
                  et de plus en plus enjeux de recyclage, de décarbonation et de souveraineté matière.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type d’environnement, les problèmes d’organisation ne restent pas longtemps abstraits. Une
                  mauvaise interface entre services produit vite des reprises, des ressaisies, des pertes de temps, des
                  validations tardives, des données de suivi peu fiables, ou une charge croissante portée par quelques
                  personnes capables de faire tenir le fonctionnement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, en plasturgie, le sujet n’est pas seulement d’avoir un projet ou une méthode. Le
                  sujet est de savoir si cela tient réellement dans l’exécution, avec les contraintes de terrain, de
                  cadence et de coordination propres au secteur.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-subjects-title">
                <h2 id="common-subjects-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les types de sujets que nous rencontrons le plus souvent en plasturgie
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les sujets arrivent rarement formulés comme un besoin de diagnostic, de cadrage ou de pilotage.
                  Ils arrivent sous une forme beaucoup plus concrète :
                </p>
                <ul className={bulletListClass}>
                  <li>pertes de temps entre atelier, qualité, maintenance et support</li>
                  <li>reprises d’information ou ressaisies entre outils, fichiers et mails</li>
                  <li>manque de visibilité sur l’état réel d’un flux ou d’un ordre</li>
                  <li>méthodes de travail non harmonisées entre équipes, sites ou ateliers</li>
                  <li>besoin encore trop flou avant consultation d’un prestataire ou d’une solution</li>
                  <li>projet industriel identifié, mais pas encore assez cadré pour être lancé proprement</li>
                  <li>mise en œuvre déjà engagée, mais plus difficile à coordonner dans la durée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces sujets ont en commun de se situer rarement dans un seul service. Ils apparaissent surtout dans
                  les interfaces : entre production et qualité, entre atelier et méthodes, entre site et fonctions
                  support, entre flux physiques et flux d’information, entre décision de principe et réalité de mise en
                  œuvre.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="what-we-look-title">
                <h2 id="what-we-look-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous regardons d’abord dans une entreprise de plasturgie
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’une solution prédéfinie. Nous partons du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la plasturgie, cela veut dire regarder très concrètement :
                </p>
                <ul className={bulletListClass}>
                  <li>comment une information circule</li>
                  <li>qui valide quoi</li>
                  <li>où une reprise apparaît</li>
                  <li>où la méthode officielle ne décrit plus le réel</li>
                  <li>où les équipes compensent</li>
                  <li>
                    à quel moment un sujet devient dépendant d’habitudes locales plutôt que d’un cadre suffisamment
                    clair
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une ressaisie peut par exemple traduire un défaut de confiance dans la donnée amont, un besoin de
                  contrôle mal organisé, une méthode de travail non harmonisée ou un point de passage mal tenu.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un retard peut relever d’un goulot d’étranglement, d’une validation trop tardive, d’un projet mal
                  cadré ou d’une coordination devenue trop dépendante de quelques personnes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La valeur ne vient donc pas d’une réponse rapide, mais d’une lecture juste du niveau réel du sujet.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostic-title">
                <h2 id="diagnostic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Diagnostic : quand le fonctionnement réel doit être relu
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En plasturgie, beaucoup de difficultés sont connues avant d’être réellement objectivées. Les équipes
                  savent qu’il existe des pertes de temps, des écarts de méthode, des reprises, des suivis parallèles
                  ou des points de friction entre services, mais tant que la production tient, ces sujets restent
                  souvent dans une zone intermédiaire : déjà coûteux, mais pas encore traités comme un vrai sujet de
                  fond.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic prend alors de la valeur. Il permet de relire le fonctionnement réel, d’objectiver les
                  points de blocage, de distinguer les irritants locaux des sujets structurants, de clarifier les
                  interfaces entre équipes et de déterminer si le problème relève d’un ajustement, d’une
                  harmonisation, d’un cadrage ou d’un projet plus large.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un secteur soumis à une pression économique et industrielle forte, cette phase évite de partir
                  trop vite vers une solution mal calibrée.
                </p>
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
                  Autre cas fréquent en plasturgie : le besoin existe, mais il n’est pas encore assez formulé pour être
                  consulté, comparé ou lancé proprement.
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
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage sert alors à reformuler le besoin réel, préciser l’objectif, poser le bon périmètre,
                  rendre visibles les contraintes de terrain, de charge, de coordination, de qualité ou de
                  déploiement, et préparer une base sérieuse pour la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une filière où les ressources sont comptées, un mauvais cadrage coûte vite en charge interne et
                  en temps perdu.
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
                  En plasturgie, un projet ne vaut que s’il tient dans l’exécution. Cela est vrai dans des
                  environnements où les rythmes de production, les contraintes qualité, les changements de série, les
                  exigences client et la disponibilité des équipes ne laissent pas beaucoup de place à l’approximation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage devient alors central, non pas comme couche administrative supplémentaire, mais comme
                  fonction de continuité entre besoin, décisions, actions et mise en œuvre réelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un pilotage utile permet de clarifier l’avancement, structurer la coordination, faire remonter les
                  arbitrages, tenir les points sensibles et maintenir une lecture lisible du projet dans le temps.
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
                  Un sujet en plasturgie ne peut pas être lu comme un simple projet tertiaire. Plusieurs réalités
                  doivent être intégrées dès le départ.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La continuité industrielle</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le changement doit tenir dans une organisation qui ne peut pas se permettre de dégrader durablement
                  sa stabilité opérationnelle.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La matière et sa transformation</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La filière est directement touchée par les enjeux de matière, de recyclage, de décarbonation et de
                  compétitivité, ce qui a des effets sur les choix d’organisation, les process et la capacité
                  d’investissement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La structure PME de la filière</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avec une très forte proportion de petites structures, les décalages de méthode, de responsabilité ou
                  de pilotage sont rarement absorbés sans effet.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La diversité des marchés servis</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Emballage, automobile, bâtiment, médical, composites, sous-traitance : cette diversité crée des
                  contextes différents, mais avec un besoin commun de robustesse dans l’exécution.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="not-bringing-title">
                <h2 id="not-bringing-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous n’apportons pas dans ce secteur
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous n’arrivons pas avec une solution sectorielle générique. Nous ne venons pas plaquer un discours
                  standard sur l’optimisation ou réduire trop vite un problème à un sujet d’outil.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne proposons pas non plus une transformation large alors que le besoin réel n’a pas encore été
                  clarifié.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre rôle est différent : comprendre, clarifier, structurer et faire tenir la suite au bon niveau.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="signals-title">
                <h2 id="signals-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quelques signaux que le sujet mérite une intervention structurée
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une entreprise de plasturgie, il devient généralement utile d’intervenir quand plusieurs signaux
                  apparaissent ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>les mêmes pertes de temps reviennent entre ateliers, support et qualité</li>
                  <li>les validations ou reprises deviennent normales</li>
                  <li>les méthodes diffèrent trop selon les équipes, sites ou lignes</li>
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
                  La plasturgie est un secteur où les écarts de fonctionnement, de méthode ou de cadrage se paient
                  vite dans le réel.
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
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est à ce niveau que nous intervenons. Si votre entreprise de plasturgie fait face à des pertes de
                  temps, un manque de visibilité, des méthodes non harmonisées, un besoin encore mal défini ou un
                  projet difficile à structurer ou à tenir, alors cette page décrit précisément le type de réalité pour
                  lequel notre approche a été construite.
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
                  Besoin de clarifier un sujet en plasturgie ?
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
