import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const SecteurAgroalimentaireMeta = {
  title: "Conseil et pilotage de projets en agroalimentaire | AEGENS",
  description:
    "AEGENS accompagne les entreprises de l’agroalimentaire sur des sujets de diagnostic, cadrage et pilotage de projets liés au fonctionnement opérationnel, aux flux et à la mise en œuvre.",
}

export function SecteurAgroalimentairePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Secteurs", href: "/secteurs/" },
              { label: "Agroalimentaire" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Agroalimentaire
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L’agroalimentaire est un secteur où les écarts d’organisation coûtent vite.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                En France, la filière reste un poids lourd économique et industriel : elle représente le premier
                secteur industriel en chiffre d’affaires, avec un tissu très large d’entreprises réparties sur le
                territoire, transformant une part majeure de la production agricole française.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais ce poids économique ne change rien à une réalité plus opérationnelle : dans l’agroalimentaire, un
                sujet mal cadré ou un fonctionnement mal tenu ne reste pas longtemps abstrait. Il se voit vite dans :
              </p>
              <ul className={bulletListClass}>
                <li>les enchaînements de production</li>
                <li>les validations qualité</li>
                <li>les flux d’information</li>
                <li>les reprises</li>
                <li>les retards</li>
                <li>les changements de série</li>
                <li>
                  les interfaces entre production, qualité, maintenance, supply, planification, achats, ADV ou
                  logistique
                </li>
                <li>
                  la difficulté à faire tenir ensemble exigence de cadence, traçabilité, conformité et service
                </li>
              </ul>
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
                  Pourquoi l’agroalimentaire demande une approche spécifique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’agroalimentaire n’est pas seulement une industrie de transformation. C’est un environnement dans
                  lequel plusieurs contraintes s’additionnent en permanence :
                </p>
                <ul className={bulletListClass}>
                  <li>contraintes de sécurité sanitaire</li>
                  <li>exigences de traçabilité</li>
                  <li>impératifs de continuité de production</li>
                  <li>contraintes de qualité</li>
                  <li>pression sur les délais</li>
                  <li>coordination entre métiers très différents</li>
                  <li>marges souvent plus serrées que dans d’autres industries manufacturières</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela change la nature des sujets.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans d’autres environnements, une mauvaise interface entre services produit surtout du flou. Dans
                  l’agroalimentaire, elle produit rapidement :
                </p>
                <ul className={bulletListClass}>
                  <li>une attente de validation</li>
                  <li>une reprise de saisie</li>
                  <li>un écart de lot ou de version d’information</li>
                  <li>un ralentissement de flux</li>
                  <li>une désorganisation de planning</li>
                  <li>une baisse de lisibilité sur le réel</li>
                  <li>une surcharge diffuse qui s’installe dans le quotidien</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, les problèmes d’organisation y sont très rarement seulement organisationnels. Ils
                  deviennent vite opérationnels.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-subjects-title">
                <h2 id="common-subjects-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les types de sujets que nous rencontrons le plus souvent en agroalimentaire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce secteur, les sujets arrivent rarement formulés d’emblée comme un besoin de diagnostic, de
                  cadrage ou de pilotage. Ils arrivent généralement sous une forme beaucoup plus concrète.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>trop de pertes de temps entre production, qualité et supply</li>
                  <li>trop de validations ou contrôles peu lisibles</li>
                  <li>trop de ressaisies entre outils, fichiers et mails</li>
                  <li>manque de visibilité sur l’état réel d’un flux ou d’un processus</li>
                  <li>méthodes de travail qui diffèrent selon les équipes, les sites ou les ateliers</li>
                  <li>besoin de structurer un projet avant consultation</li>
                  <li>déploiement ou évolution d’organisation à tenir dans un cadre plus lisible</li>
                  <li>projet déjà lancé, mais plus difficile à coordonner dans la durée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces sujets ont un point commun : ils se situent rarement dans une seule équipe. Ils apparaissent
                  surtout dans les interfaces :
                </p>
                <ul className={bulletListClass}>
                  <li>entre production et qualité</li>
                  <li>entre ordonnancement et terrain</li>
                  <li>entre atelier et administratif</li>
                  <li>entre site et fonctions support</li>
                  <li>entre exploitation et pilotage</li>
                  <li>entre réel opérationnel et cadre projet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi les traiter correctement demande d’aller au-delà du symptôme visible.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="reading-title">
                <h2 id="reading-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous lisons d’abord dans une entreprise agroalimentaire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’une solution à placer. Nous partons du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans l’agroalimentaire, cela veut dire regarder très concrètement :
                </p>
                <ul className={bulletListClass}>
                  <li>comment une information circule</li>
                  <li>à quel moment elle change de main</li>
                  <li>qui valide quoi</li>
                  <li>où une reprise apparaît</li>
                  <li>où la méthode officielle ne décrit plus tout à fait la pratique réelle</li>
                  <li>où les équipes compensent</li>
                  <li>où les contrôles sécurisent réellement le flux, et où ils le surchargent</li>
                  <li>où la visibilité sur les étapes, les statuts ou les responsabilités devient insuffisante</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette lecture du réel est décisive, parce qu’un même symptôme peut avoir des causes très
                  différentes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une ressaisie peut venir :</p>
                <ul className={bulletListClass}>
                  <li>d’un défaut de confiance dans la donnée amont</li>
                  <li>d’une exigence de traçabilité mal organisée</li>
                  <li>d’une méthode non harmonisée</li>
                  <li>d’un point de passage mal tenu</li>
                  <li>d’un support qui ne couvre pas correctement le besoin réel</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un retard peut venir :</p>
                <ul className={bulletListClass}>
                  <li>d’un goulot d’étranglement</li>
                  <li>d’une validation trop tardive</li>
                  <li>d’une interface mal cadrée</li>
                  <li>d’un projet mal structuré</li>
                  <li>d’une méthode de travail devenue trop dépendante des habitudes locales</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi il faut d’abord qualifier le bon niveau du sujet avant de vouloir le transformer.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostic-title">
                <h2 id="diagnostic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Diagnostic : quand le fonctionnement réel doit être relu
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En agroalimentaire, beaucoup de difficultés sont connues avant d’être réellement objectivées.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tout le monde sait plus ou moins qu’il existe :
                </p>
                <ul className={bulletListClass}>
                  <li>des écarts entre services</li>
                  <li>des pertes de temps</li>
                  <li>des reprises</li>
                  <li>des validations lourdes</li>
                  <li>des suivis parallèles</li>
                  <li>des différences de méthode</li>
                  <li>un manque de visibilité sur certains flux</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais tant que l’activité tient, le sujet reste souvent dans une zone intermédiaire : pas assez
                  spectaculaire pour être traité comme un projet à part entière, mais déjà assez coûteux pour peser
                  quotidiennement sur l’organisation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est dans cette zone qu’un diagnostic prend de la valeur.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il permet de :</p>
                <ul className={bulletListClass}>
                  <li>relire le fonctionnement réel</li>
                  <li>objectiver les points de blocage</li>
                  <li>distinguer les irritants locaux des sujets plus structurants</li>
                  <li>clarifier les interfaces entre équipes</li>
                  <li>
                    faire apparaître ce qui relève d’un ajustement, d’une harmonisation, d’un cadrage ou d’un projet
                    plus large
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un environnement agroalimentaire, cette phase est particulièrement utile quand le sujet est
                  encore trop diffus pour être transformé directement en solution ou en cahier des charges.
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
                  Un autre cas fréquent dans l’agroalimentaire est le suivant : le besoin est bien réel, mais il n’est
                  pas encore assez formulé pour être consulté, comparé ou lancé proprement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela arrive souvent quand l’entreprise sait qu’un sujet doit être traité, mais qu’elle hésite encore
                  entre plusieurs niveaux de réponse :
                </p>
                <ul className={bulletListClass}>
                  <li>ajustement de méthode</li>
                  <li>évolution d’organisation</li>
                  <li>besoin d’outil</li>
                  <li>appui externe</li>
                  <li>projet transverse</li>
                  <li>combinaison de plusieurs de ces éléments</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le risque est alors de consulter trop tôt, ou de parler trop vite de solution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage permet précisément d’éviter cela.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il sert à :</p>
                <ul className={bulletListClass}>
                  <li>reformuler le besoin réel</li>
                  <li>préciser l’objectif</li>
                  <li>poser le bon périmètre</li>
                  <li>
                    rendre visibles les contraintes de terrain, de qualité, de disponibilité, de coordination ou de
                    déploiement
                  </li>
                  <li>clarifier les parties prenantes</li>
                  <li>préparer une base sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans l’agroalimentaire, cette étape est essentielle parce que les projets touchent souvent plusieurs
                  zones du fonctionnement en même temps. Sans cadrage rigoureux, la comparaison des réponses devient
                  rapidement fragile et la mise en œuvre beaucoup plus exposée.
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
                  Dans ce secteur, le projet ne vaut que s’il tient dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est particulièrement vrai dans des environnements où :
                </p>
                <ul className={bulletListClass}>
                  <li>les rythmes de production comptent</li>
                  <li>
                    les exigences qualité ou traçabilité ne laissent pas beaucoup de place à l’approximation
                  </li>
                  <li>les équipes sont déjà fortement mobilisées par l’activité courante</li>
                  <li>les interfaces doivent rester lisibles malgré la pression opérationnelle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le pilotage devient alors central.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il ne sert pas seulement à suivre un planning. Il sert à :
                </p>
                <ul className={bulletListClass}>
                  <li>maintenir la continuité entre le besoin, les décisions et la mise en œuvre</li>
                  <li>coordonner plusieurs acteurs</li>
                  <li>faire remonter les arbitrages utiles</li>
                  <li>garder de la lisibilité sur l’avancement réel</li>
                  <li>
                    éviter que le projet ne se fragilise par empilement de décisions locales ou de corrections tardives
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un environnement agroalimentaire, un pilotage utile est un pilotage qui reste connecté au
                  terrain, pas un pilotage décoratif.
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
                  Un projet ou un fonctionnement en agroalimentaire ne peut pas être lu comme un simple sujet
                  tertiaire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plusieurs réalités doivent être intégrées dès le départ.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La continuité de production</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le changement doit tenir dans une organisation qui ne peut pas se permettre de perdre en stabilité
                  opérationnelle sans impact.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La qualité et la sécurité sanitaire
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les validations, contrôles et exigences documentaires ne sont pas des accessoires.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La traçabilité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le besoin de visibilité n’est pas simplement un besoin de confort de pilotage ; il est souvent lié à
                  la capacité à reconstituer, justifier et sécuriser le flux.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La diversité des métiers</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Production, qualité, maintenance, supply, conditionnement, planification, ADV, achats, logistique :
                  les logiques de travail ne sont pas identiques. Les interfaces sont donc décisives.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La pression économique</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le secteur reste majeur, mais la pression sur les marges et la capacité d’investissement rend les
                  erreurs de cadrage ou de mise en œuvre plus coûteuses.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi une approche utile doit être à la fois sobre, rigoureuse, ancrée dans le réel, et
                  capable de distinguer ce qui doit être traité maintenant de ce qui peut venir ensuite.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="not-bringing-title">
                <h2 id="not-bringing-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous n’apportons pas dans ce secteur
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous n’arrivons pas avec une solution sectorielle toute faite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous ne venons pas :</p>
                <ul className={bulletListClass}>
                  <li>plaquer un discours générique sur l’optimisation</li>
                  <li>réduire trop vite un problème à un sujet d’outil</li>
                  <li>proposer une transformation large alors que le besoin réel n’a pas encore été clarifié</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne traitons pas non plus les tensions entre services comme un simple problème de communication.
                  Dans l’agroalimentaire, ces tensions sont très souvent le produit d’interfaces, de méthodes, de
                  validations ou de responsabilités qui demandent d’abord une lecture structurelle.
                </p>
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
                  Dans une entreprise agroalimentaire, il devient généralement utile d’intervenir quand plusieurs
                  signaux apparaissent ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>les mêmes pertes de temps reviennent entre équipes</li>
                  <li>les validations ou reprises deviennent normales</li>
                  <li>les méthodes diffèrent trop selon les ateliers, services ou sites</li>
                  <li>des fichiers ou suivis parallèles compensent le manque de visibilité</li>
                  <li>le projet existe déjà, mais reste difficile à stabiliser</li>
                  <li>une consultation est envisagée, mais le besoin n’est pas encore assez propre</li>
                  <li>la mise en œuvre avance, mais avec une coordination trop fragile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si plusieurs de ces situations se cumulent, le sujet n’est probablement plus un simple irritant du
                  quotidien. Il devient un sujet de fonctionnement, de cadrage ou de pilotage.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="sub-sectors-title">
                <h2 id="sub-sectors-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les sous-secteurs que nous couvrons
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’agroalimentaire n’est pas un bloc homogène. Les contraintes diffèrent selon les produits, les
                  rythmes, les organisations et les circuits.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi cette page s’inscrit dans un ensemble plus large. Selon les cas, la lecture peut
                  ensuite être affinée par environnement ou logique de production.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette page agroalimentaire sert donc de porte d’entrée sectorielle, en cohérence avec notre approche
                  générale : partir du réel, qualifier le bon niveau de sujet, puis structurer la suite.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’agroalimentaire est un secteur où les écarts de fonctionnement, de méthode ou de cadrage se paient
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
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est à ce niveau que nous intervenons.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre entreprise agroalimentaire fait face à des pertes de temps, un manque de visibilité, des
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
                    méthodes non harmonisées
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
                  Besoin de clarifier votre sujet agroalimentaire ?
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
