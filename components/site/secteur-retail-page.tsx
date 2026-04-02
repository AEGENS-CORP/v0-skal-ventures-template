import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const SecteurRetailMeta = {
  title: "Conseil et pilotage de projets en retail | AEGENS",
  description:
    "AEGENS accompagne les entreprises du retail sur des sujets de diagnostic, cadrage et pilotage de projets liés aux flux, aux méthodes, à la coordination et à la mise en œuvre.",
}

export function SecteurRetailPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Secteurs", href: "/secteurs/" },
              { label: "Retail" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Retail
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le retail est un secteur où les écarts d’organisation se voient très vite dans le réel.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le commerce de détail pèse lourd dans l’économie, mais ce poids ne dit pas l’essentiel du quotidien
                opérationnel.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans le retail, un sujet mal cadré ou un fonctionnement mal tenu se traduit rapidement par une perte de
                visibilité sur le flux réel, des écarts entre siège, réseau et terrain, des reprises d’information, des
                validations peu lisibles et une difficulté à faire tenir ensemble exécution, service, disponibilité,
                coordination et rentabilité.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, le sujet n’est pas seulement de décider. Le sujet est de savoir si l’organisation tient
                réellement dans l’exécution.
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
                  Pourquoi le retail demande une approche spécifique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le retail n’est pas seulement un univers de vente. C’est une organisation de flux, de coordination et
                  de mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une enseigne doit faire tenir ensemble des décisions centrales, des réalités locales, des rythmes de
                  terrain, des équipes support, des outils, des procédures et des niveaux de pilotage différents.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand cette articulation se fragilise, les problèmes ne restent pas théoriques. Ils apparaissent vite
                  dans :
                </p>
                <ul className={bulletListClass}>
                  <li>les décalages entre ce qui est décidé et ce qui est réellement appliqué</li>
                  <li>les difficultés de transmission</li>
                  <li>les reprises manuelles</li>
                  <li>les écarts de méthode</li>
                  <li>les suivis parallèles</li>
                  <li>les tensions entre pilotage central et exécution locale</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type d’environnement, une mauvaise interface entre fonctions ne crée pas seulement du flou.
                  Elle crée très vite du temps perdu, une moindre lisibilité, des corrections tardives, une dépendance
                  à certaines personnes et une capacité plus faible à piloter proprement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-subjects-title">
                <h2 id="common-subjects-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les types de sujets que nous rencontrons le plus souvent en retail
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le retail, les sujets arrivent rarement formulés comme un besoin de diagnostic, de cadrage ou de
                  pilotage. Ils arrivent sous une forme beaucoup plus concrète :
                </p>
                <ul className={bulletListClass}>
                  <li>pertes de temps entre siège, réseau, points de vente et fonctions support</li>
                  <li>ressaisies entre outils, Excel, mails et suivis locaux</li>
                  <li>manque de visibilité sur l’état réel d’un flux, d’une opération ou d’un avancement</li>
                  <li>méthodes de travail non harmonisées entre magasins, régions ou équipes</li>
                  <li>besoin encore trop flou avant consultation d’une solution ou d’un prestataire</li>
                  <li>projet identifié, mais pas encore assez cadré pour être lancé proprement</li>
                  <li>mise en œuvre engagée, mais plus difficile à coordonner dans la durée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces sujets ont un point commun : ils apparaissent rarement dans une seule équipe. Ils se situent
                  surtout dans les interfaces :
                </p>
                <ul className={bulletListClass}>
                  <li>entre siège et terrain</li>
                  <li>entre commerce, exploitation et support</li>
                  <li>entre décision centrale et mise en œuvre locale</li>
                  <li>entre outil et pratique réelle</li>
                  <li>entre visibilité attendue et visibilité réellement disponible</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="what-we-look-title">
                <h2 id="what-we-look-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous regardons d’abord dans une organisation retail
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’une solution à vendre. Nous partons du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le retail, cela veut dire regarder très concrètement :
                </p>
                <ul className={bulletListClass}>
                  <li>comment l’information circule</li>
                  <li>qui met à jour quoi</li>
                  <li>où un flux change de main</li>
                  <li>où une validation devient floue</li>
                  <li>où une reprise apparaît</li>
                  <li>où la méthode officielle ne décrit plus complètement la pratique réelle</li>
                  <li>où les équipes compensent</li>
                  <li>
                    à quel moment le sujet devient plus dépendant des personnes que d’un cadre suffisamment clair
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une ressaisie peut révéler :</p>
                <ul className={bulletListClass}>
                  <li>un défaut de confiance dans la donnée amont</li>
                  <li>un besoin de suivi mal couvert</li>
                  <li>une méthode non harmonisée</li>
                  <li>une validation mal placée</li>
                  <li>un écart entre fonctionnement théorique et fonctionnement terrain</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un retard ou une mise en œuvre inégale peut relever :</p>
                <ul className={bulletListClass}>
                  <li>d’un manque de lisibilité sur le flux</li>
                  <li>d’un arbitrage trop tardif</li>
                  <li>d’un projet mal cadré</li>
                  <li>d’une mauvaise articulation entre central et local</li>
                  <li>d’une organisation devenue trop dépendante de contournements</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que cette lecture n’est pas posée, les réponses restent souvent trop rapides.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostic-title">
                <h2 id="diagnostic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Diagnostic : quand le fonctionnement réel doit être relu
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’organisations retail, les difficultés sont connues avant d’être réellement objectivées.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les équipes savent qu’il existe :</p>
                <ul className={bulletListClass}>
                  <li>des pertes de temps</li>
                  <li>des écarts entre magasins ou régions</li>
                  <li>des reprises</li>
                  <li>des validations lourdes</li>
                  <li>des suivis parallèles</li>
                  <li>un manque de visibilité sur ce qui se passe réellement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais tant que le réseau continue à fonctionner, le sujet reste souvent dans une zone intermédiaire :
                  déjà coûteux, mais pas encore traité comme un vrai sujet de fond.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est là que le diagnostic prend de la valeur. Il permet de :</p>
                <ul className={bulletListClass}>
                  <li>relire le fonctionnement réel</li>
                  <li>objectiver les points de blocage</li>
                  <li>distinguer les irritants locaux des sujets structurants</li>
                  <li>clarifier les interfaces entre siège, support et terrain</li>
                  <li>
                    déterminer si le problème relève d’un ajustement, d’une harmonisation, d’un cadrage ou d’un projet
                    plus large
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
                    rendre visibles les contraintes de terrain, de charge, de déploiement, d’adhésion ou de
                    coordination
                  </li>
                  <li>clarifier les parties prenantes</li>
                  <li>préparer une base sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le retail, cette étape est décisive parce qu’un projet mal cadré fragilise immédiatement la
                  comparaison des réponses, la lecture du prix, la charge transférée au réseau ou aux équipes, et la
                  capacité de mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour aller plus loin :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
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
                  Dans le retail, un projet n’a de valeur que s’il tient dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est particulièrement vrai dans des environnements où :
                </p>
                <ul className={bulletListClass}>
                  <li>les points de vente ou équipes terrain portent déjà une forte charge</li>
                  <li>les déploiements doivent être lisibles et tenables</li>
                  <li>les délais sont serrés</li>
                  <li>la qualité d’application compte autant que la décision</li>
                  <li>
                    les arbitrages doivent être pris au bon moment pour éviter les reprises ou les décalages entre siège
                    et terrain
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le pilotage devient alors central.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il ne sert pas seulement à suivre un planning. Il sert à :</p>
                <ul className={bulletListClass}>
                  <li>maintenir la continuité entre besoin, décisions et mise en œuvre</li>
                  <li>coordonner plusieurs acteurs</li>
                  <li>faire remonter les arbitrages utiles</li>
                  <li>garder une lecture lisible de l’avancement réel</li>
                  <li>éviter que le projet ne se fragilise par empilement de corrections tardives</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un secteur de réseau, cette tenue de l’exécution fait une différence directe. Quand elle manque,
                  l’organisation compense davantage qu’elle ne pilote.
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
                  Un sujet retail ne peut pas être lu comme un simple projet tertiaire générique. Plusieurs réalités
                  doivent être intégrées dès le départ.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le poids du réseau</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le retail implique souvent plusieurs niveaux : siège, régions, magasins, équipes support, terrain.
                  Chaque décalage entre ces niveaux produit rapidement des effets visibles.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La tension entre central et local</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La décision centrale doit tenir dans la réalité locale. Si cette articulation est mal pensée, la mise
                  en œuvre se fragilise.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La multiplicité des interfaces</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Commerce, exploitation, achats, supply, support, informatique, réseau : la performance repose sur les
                  passages entre fonctions autant que sur chaque fonction prise isolément.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La sensibilité au contexte économique</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un environnement peu homogène selon les segments, les erreurs de cadrage ou de mise en œuvre
                  deviennent plus coûteuses.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le volume d’activité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un secteur représente un tel volume d’emplois, de points de vente et de clients quotidiens, les
                  écarts de fonctionnement peuvent se diffuser très vite à grande échelle.
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
                  siège et terrain.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le retail, les tensions visibles sont très souvent le produit :
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
                  Dans une organisation retail, il devient généralement utile d’intervenir quand plusieurs signaux
                  apparaissent ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>les mêmes pertes de temps reviennent entre siège, support et terrain</li>
                  <li>les validations ou reprises deviennent normales</li>
                  <li>les méthodes diffèrent trop selon les magasins, régions ou équipes</li>
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
                  Le retail est un environnement où les écarts de fonctionnement, de méthode ou de cadrage se paient vite
                  dans le réel.
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
                  Si votre organisation retail fait face à des pertes de temps, un manque de visibilité, des méthodes
                  non harmonisées, un besoin encore mal défini, ou un projet difficile à structurer ou à tenir, alors
                  cette page décrit précisément le type de réalité pour lequel notre approche a été construite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/problematiques/organisation-entre-services-inefficace/"
                    className={inlineSeoLinkClass}
                  >
                    organisation entre services inefficace
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
                  Besoin de clarifier un sujet retail ?
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
