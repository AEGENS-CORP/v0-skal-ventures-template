import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const SecteurLogistiqueMeta = {
  title: "Conseil et pilotage de projets en logistique | AEGENS",
  description:
    "AEGENS accompagne les entreprises de la logistique sur des sujets de diagnostic, cadrage et pilotage de projets liés aux flux, aux méthodes, à la coordination et à la mise en œuvre.",
}

export function SecteurLogistiquePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Secteurs", href: "/secteurs/" },
              { label: "Logistique" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Logistique
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La logistique est un secteur où les écarts d’organisation se voient immédiatement dans le réel.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le secteur est massif en emploi et en chiffre d’affaires, mais le vrai sujet n’est pas sa taille. Le
                vrai sujet, c’est la manière dont un fonctionnement logistique se dégrade quand les interfaces, les
                méthodes ou la visibilité ne tiennent plus correctement.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans la logistique, un sujet mal cadré se traduit vite par des attentes, des relances, des informations
                incomplètes, des statuts peu fiables, des reprises manuelles, des écarts entre exploitation et
                pilotage, ou une difficulté croissante à tenir ensemble flux, délais, charge, qualité de service et
                contraintes terrain.
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
                  Pourquoi la logistique demande une approche spécifique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La logistique n’est pas seulement une question de mouvement physique. C’est une organisation de flux
                  où la qualité de service dépend autant de la circulation de l’information que de la circulation des
                  marchandises.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand cette articulation se fragilise, le problème n’est pas seulement opérationnel : il devient très
                  vite un problème de lisibilité, de pilotage et de capacité à arbitrer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type d’environnement, une mauvaise interface entre services ou entre étapes produit
                  rapidement :
                </p>
                <ul className={bulletListClass}>
                  <li>une attente de validation</li>
                  <li>un ordre mal transmis</li>
                  <li>une ressaisie</li>
                  <li>un statut peu fiable</li>
                  <li>un suivi parallèle</li>
                  <li>une charge croissante portée par quelques personnes</li>
                  <li>une difficulté à savoir où le flux se bloque réellement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, dans la logistique, le problème n’est pas seulement de faire partir ou de faire
                  arriver. Le problème est de savoir si le fonctionnement reste lisible, coordonné et tenable quand les
                  contraintes de terrain, de planning, de ressources et de client s’additionnent.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-subjects-title">
                <h2 id="common-subjects-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les types de sujets que nous rencontrons le plus souvent en logistique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la logistique, les sujets arrivent rarement formulés comme un besoin de diagnostic, de cadrage
                  ou de pilotage. Ils arrivent sous une forme beaucoup plus concrète :
                </p>
                <ul className={bulletListClass}>
                  <li>pertes de temps entre exploitation, entrepôt, ADV, transport, approvisionnement ou support</li>
                  <li>ressaisies entre WMS, ERP, Excel, mails et suivis locaux</li>
                  <li>manque de visibilité sur l’état réel d’un flux, d’une commande, d’un statut ou d’un incident</li>
                  <li>méthodes de travail non harmonisées entre équipes, sites, équipes jour/nuit ou fonctions</li>
                  <li>besoin encore trop flou avant consultation d’une solution ou d’un prestataire</li>
                  <li>projet identifié, mais pas encore assez cadré pour être lancé proprement</li>
                  <li>mise en œuvre engagée, mais plus difficile à coordonner dans la durée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces sujets ont un point commun : ils apparaissent rarement dans une seule équipe. Ils se situent
                  surtout dans les interfaces :
                </p>
                <ul className={bulletListClass}>
                  <li>entre terrain et support</li>
                  <li>entre réception, préparation, expédition et transport</li>
                  <li>entre exploitation et pilotage</li>
                  <li>entre client, ADV et opération</li>
                  <li>entre site et siège</li>
                  <li>entre système d’information et fonctionnement réel</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="what-we-look-title">
                <h2 id="what-we-look-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous regardons d’abord dans une organisation logistique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’une solution à vendre. Nous partons du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la logistique, cela veut dire regarder très concrètement :
                </p>
                <ul className={bulletListClass}>
                  <li>comment une information circule</li>
                  <li>qui met à jour quoi</li>
                  <li>où un flux change de main</li>
                  <li>où un statut devient peu fiable</li>
                  <li>où une reprise apparaît</li>
                  <li>où la méthode officielle ne décrit plus complètement la pratique réelle</li>
                  <li>où les équipes compensent</li>
                  <li>
                    à quel moment le sujet devient plus dépendant des personnes que d’un cadre suffisamment clair
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une ressaisie peut révéler un défaut de confiance dans la donnée amont, une étape de validation mal
                  placée, une méthode non harmonisée ou un passage mal tenu entre deux fonctions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un retard peut relever d’un goulet d’étranglement, d’une mauvaise lecture de capacité, d’une
                  visibilité insuffisante sur le flux, d’un besoin mal cadré ou d’une organisation devenue trop
                  dépendante de contournements locaux.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un secteur où le suivi de flux est central, la différence entre symptôme et cause compte
                  immédiatement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostic-title">
                <h2 id="diagnostic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Diagnostic : quand le fonctionnement réel doit être relu
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’organisations logistiques, les difficultés sont connues avant d’être réellement
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
                    rendre visibles les contraintes de terrain, de charge, de délai, de coordination ou de déploiement
                  </li>
                  <li>clarifier les parties prenantes</li>
                  <li>préparer une base sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la logistique, cette étape est décisive parce qu’un projet mal cadré fragilise immédiatement la
                  comparaison des réponses, la lecture du prix, la charge transférée à l’entreprise et la capacité de
                  mise en œuvre.
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
                  Dans la logistique, un projet n’a de valeur que s’il tient dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est particulièrement vrai dans des environnements où :
                </p>
                <ul className={bulletListClass}>
                  <li>les délais sont serrés</li>
                  <li>les flux sont continus</li>
                  <li>les équipes portent déjà une forte charge d’exploitation</li>
                  <li>les incidents doivent être traités vite</li>
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
                  Dans un secteur de flux, cette tenue de l’exécution est un facteur direct de robustesse. Quand elle
                  manque, l’organisation compense davantage qu’elle ne pilote.
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
                  Un sujet logistique ne peut pas être lu comme un simple projet tertiaire. Plusieurs réalités doivent
                  être intégrées dès le départ.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La pression du flux</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le changement doit tenir dans une organisation où chaque décalage se répercute rapidement sur le
                  reste du système.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le poids de l’information de suivi</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la logistique, voir juste est souvent aussi important qu’agir vite. Une donnée de statut, de
                  disponibilité ou d’avancement mal tenue dégrade vite la qualité de décision.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La multiplicité des interfaces</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Réception, stockage, préparation, expédition, transport, client, ADV, approvisionnement, support : la
                  performance repose sur les passages entre fonctions autant que sur chaque fonction prise isolément.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La sensibilité au climat économique
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le climat des affaires reste dégradé, les erreurs de cadrage ou de mise en œuvre deviennent
                  plus coûteuses, parce qu’elles consomment immédiatement de la capacité et de la marge de manœuvre.
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
                  Nous ne traitons pas non plus les tensions visibles comme un simple problème de communication entre
                  services.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la logistique, les tensions visibles sont très souvent le produit :
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
                  Dans une organisation logistique, il devient généralement utile d’intervenir quand plusieurs signaux
                  apparaissent ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    les mêmes pertes de temps reviennent entre exploitation, entrepôt, transport, ADV et support
                  </li>
                  <li>les validations ou reprises deviennent normales</li>
                  <li>les méthodes diffèrent trop selon les équipes, sites ou plages horaires</li>
                  <li>des suivis parallèles compensent un manque de visibilité</li>
                  <li>un projet existe déjà, mais reste difficile à stabiliser</li>
                  <li>une consultation est envisagée, mais le besoin n’est pas encore assez propre</li>
                  <li>la mise en œuvre avance, mais avec une coordination trop fragile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand ces éléments se cumulent, le sujet n’est probablement plus un simple irritant du quotidien. Il
                  devient un sujet de fonctionnement, de cadrage ou de pilotage.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La logistique est un environnement où les écarts de fonctionnement, de méthode ou de cadrage se
                  paient vite dans le réel.
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
                  Si votre organisation logistique fait face à des pertes de temps, un manque de visibilité, des
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
                    href="/problematiques/organisation-entre-services-inefficace/"
                    className={inlineSeoLinkClass}
                  >
                    organisation entre services inefficace
                  </Link>{" "}
                  et{" "}
                  <Link
                    href="/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel/"
                    className={inlineSeoLinkClass}
                  >
                    cas client pilotage de mise en œuvre
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
                  Besoin de clarifier un sujet logistique ?
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
