import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const SecteurSousTraitanceIndustrielleMeta = {
  title: "Conseil et pilotage de projets en sous-traitance industrielle | AEGENS",
  description:
    "AEGENS accompagne les entreprises de sous-traitance industrielle sur des sujets de diagnostic, cadrage et pilotage de projets liés au fonctionnement opérationnel, aux flux, aux méthodes et à la mise en œuvre.",
}

export function SecteurSousTraitanceIndustriellePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Secteurs", href: "/secteurs/" },
              { label: "Sous-traitance industrielle" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Sous-traitance industrielle
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La sous-traitance industrielle est un environnement où les écarts d’organisation coûtent vite, parce
                qu’ils se répercutent immédiatement sur la tenue des délais, la qualité perçue, la capacité de
                réponse et la relation client.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                En France, le tissu industriel reste très largement composé de PME et de petites structures. Dans ce
                type d’environnement, le sujet n’est pas seulement de produire.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il faut aussi absorber la variabilité de charge, sécuriser les échanges avec les donneurs d’ordre,
                tenir des engagements parfois serrés, articuler méthodes, qualité, achats, supply, atelier, contrôle,
                maintenance et administratif, tout en gardant une organisation suffisamment lisible pour ne pas
                dépendre uniquement des personnes qui compensent.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, en sous-traitance industrielle, un fonctionnement mal cadré ne reste pas longtemps
                abstrait. Il se voit vite dans :
              </p>
              <ul className={bulletListClass}>
                <li>les reprises</li>
                <li>les pertes de temps entre services</li>
                <li>les validations tardives</li>
                <li>les ressaisies</li>
                <li>les écarts de méthode</li>
                <li>le manque de visibilité sur les flux</li>
                <li>
                  la difficulté à faire tenir ensemble exécution, exigence client et rentabilité
                </li>
              </ul>

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
                  Pourquoi la sous-traitance industrielle demande une approche spécifique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La sous-traitance industrielle a une particularité forte : elle vit dans l’interface permanente.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Interface avec le client ou donneur d’ordre, d’abord. Interface entre chiffrage, méthodes,
                  approvisionnement, qualité, production, expédition et administratif, ensuite. Interface enfin entre
                  le cadre prévu et le réel, parce que les ajustements de charge, les urgences, les modifications, les
                  écarts de qualité ou les contraintes de planning obligent souvent à faire tenir des situations
                  mouvantes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est ce qui rend le sujet particulier.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans d’autres environnements, un défaut d’organisation produit surtout du flou. En sous-traitance
                  industrielle, il produit très vite :
                </p>
                <ul className={bulletListClass}>
                  <li>une promesse tenue avec difficulté</li>
                  <li>une surcharge locale</li>
                  <li>une perte de marge invisible au départ</li>
                  <li>une dépendance à des relances permanentes</li>
                  <li>une information qui change de main sans cadre clair</li>
                  <li>un projet de structuration qui se lance trop vite sur une base encore fragile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le poids des PME dans le tissu industriel français renforce cette réalité : quand la structure est
                  plus resserrée, les écarts de méthode, de visibilité ou de coordination se diffusent plus vite dans
                  tout le fonctionnement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-subjects-title">
                <h2 id="common-subjects-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les types de sujets que nous rencontrons le plus souvent en sous-traitance industrielle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la sous-traitance industrielle, les sujets arrivent rarement formulés comme un besoin de
                  diagnostic, de cadrage ou de pilotage. Ils arrivent sous une forme beaucoup plus concrète :
                </p>
                <ul className={bulletListClass}>
                  <li>pertes de temps entre atelier, qualité, méthodes, ADV, achats ou supply</li>
                  <li>ressaisies entre ERP, Excel, mails et suivis locaux</li>
                  <li>difficulté à savoir où en est réellement un dossier, un ordre ou une demande client</li>
                  <li>méthodes de travail différentes selon les équipes, les affaires, les clients ou les sites</li>
                  <li>besoin encore trop flou avant consultation d’une solution ou d’un prestataire</li>
                  <li>projet identifié, mais pas encore assez cadré pour être lancé proprement</li>
                  <li>mise en œuvre engagée, mais plus difficile à tenir dans la durée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces sujets ont un point commun : ils ne se situent presque jamais dans un seul service. Ils
                  apparaissent dans les passages :
                </p>
                <ul className={bulletListClass}>
                  <li>entre la demande client et sa traduction opérationnelle</li>
                  <li>entre chiffrage et exécution</li>
                  <li>entre méthodes et atelier</li>
                  <li>entre qualité et production</li>
                  <li>entre ordonnancement et terrain</li>
                  <li>entre promesse faite et capacité réelle à tenir</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pour cela qu’ils demandent une lecture structurelle, pas seulement une correction locale.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="what-we-look-title">
                <h2 id="what-we-look-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous regardons d’abord dans une entreprise de sous-traitance industrielle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’une solution à vendre. Nous partons du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la sous-traitance industrielle, cela veut dire regarder très concrètement :
                </p>
                <ul className={bulletListClass}>
                  <li>comment une demande entre</li>
                  <li>comment elle est traduite</li>
                  <li>où elle change de main</li>
                  <li>qui valide quoi</li>
                  <li>où une reprise apparaît</li>
                  <li>où la méthode officielle ne décrit plus complètement la pratique réelle</li>
                  <li>où les équipes compensent</li>
                  <li>
                    à quel moment l’organisation repose plus sur des habitudes individuelles que sur un cadre clair
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une ressaisie peut révéler un défaut de confiance dans l’information amont, un besoin de contrôle
                  mal organisé, une interface mal tenue ou une méthode non harmonisée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un retard peut relever d’un arbitrage trop tardif, d’un goulot d’étranglement, d’une mauvaise lecture
                  de capacité, d’une validation floue ou d’un projet lancé trop vite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que ce niveau de lecture n’est pas posé, les réponses restent souvent trop rapides et trop
                  approximatives.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostic-title">
                <h2 id="diagnostic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Diagnostic : quand le fonctionnement réel doit être relu
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises de sous-traitance industrielle, les difficultés sont connues avant
                  d’être réellement objectivées.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tout le monde sait plus ou moins qu’il existe :
                </p>
                <ul className={bulletListClass}>
                  <li>des pertes de temps</li>
                  <li>des reprises</li>
                  <li>des relances</li>
                  <li>des validations peu lisibles</li>
                  <li>des écarts entre affaires ou entre équipes</li>
                  <li>des fichiers parallèles</li>
                  <li>un manque de visibilité sur ce qui est réellement en attente</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais tant que l’activité continue à sortir, le sujet reste souvent dans une zone intermédiaire :
                  déjà coûteux, mais pas encore traité comme un sujet structurant.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est là que le diagnostic prend de la valeur.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il permet de :</p>
                <ul className={bulletListClass}>
                  <li>relire le fonctionnement réel</li>
                  <li>objectiver les points de blocage</li>
                  <li>distinguer les irritants locaux des sujets de fond</li>
                  <li>clarifier les interfaces entre services</li>
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
                  Autre cas fréquent : l’entreprise sait qu’un sujet doit être traité, mais ne l’a pas encore
                  transformé en projet réellement structuré.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela arrive quand plusieurs questions restent trop ouvertes :
                </p>
                <ul className={bulletListClass}>
                  <li>faut-il ajuster une méthode ou lancer un vrai projet</li>
                  <li>faut-il d’abord clarifier le besoin avant de consulter</li>
                  <li>
                    faut-il traiter le sujet par organisation, par outil, par cadrage plus large, ou par une
                    combinaison de plusieurs niveaux
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage sert précisément à éviter de partir trop vite vers une solution ou une consultation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il permet de :</p>
                <ul className={bulletListClass}>
                  <li>reformuler le besoin réel</li>
                  <li>préciser l’objectif</li>
                  <li>poser le bon périmètre</li>
                  <li>
                    rendre visibles les contraintes de terrain, de charge, de délai, de qualité ou de déploiement
                  </li>
                  <li>clarifier les parties prenantes</li>
                  <li>préparer une base sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la sous-traitance industrielle, cette étape est décisive parce qu’un projet mal cadré fragilise
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
                  En sous-traitance industrielle, un projet n’a de valeur que s’il tient dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est particulièrement vrai dans des environnements où :
                </p>
                <ul className={bulletListClass}>
                  <li>les délais sont serrés</li>
                  <li>les aléas sont nombreux</li>
                  <li>les ressources sont comptées</li>
                  <li>les équipes portent déjà une forte charge d’exploitation</li>
                  <li>
                    les arbitrages doivent être pris au bon moment pour éviter les reprises ou les décalages en chaîne
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le pilotage devient alors central.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il ne sert pas seulement à suivre un planning. Il sert à :</p>
                <ul className={bulletListClass}>
                  <li>maintenir la continuité entre besoin, décisions et mise en œuvre</li>
                  <li>coordonner les acteurs</li>
                  <li>faire remonter les arbitrages utiles</li>
                  <li>garder une lecture lisible de l’avancement réel</li>
                  <li>
                    éviter que le projet ne se fragilise par empilement de décisions locales ou de corrections tardives
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une logique de sous-traitance, ce point est encore plus important parce que la qualité de tenue
                  du projet joue directement sur la capacité de l’entreprise à tenir ses engagements dans la durée.
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
                  Un sujet en sous-traitance industrielle ne peut pas être lu comme un simple projet tertiaire.
                  Plusieurs réalités doivent être intégrées dès le départ.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La contrainte client</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le fonctionnement est très souvent tiré par la commande, le délai, la variation de charge et la
                  nécessité de tenir un engagement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La pression sur la coordination interne
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque défaut d’interface entre services se paie plus vite, parce qu’il affecte directement
                  l’exécution.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La structure PME du tissu industriel
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup de cas, il n’existe pas de couches intermédiaires suffisantes pour absorber longtemps
                  des écarts de fonctionnement sans effet concret.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La nécessité de lisibilité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand les marges de manœuvre sont réduites, l’entreprise a besoin de voir clairement où le sujet se
                  bloque, qui porte quoi, ce qui relève du flux normal, et ce qui relève déjà d’une compensation.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La pression industrielle générale
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’environnement industriel français reste exigeant et la robustesse du fonctionnement redevient un
                  sujet central.
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
                  <li>plaquer un discours abstrait sur l’optimisation</li>
                  <li>réduire trop vite un problème à un sujet d’outil</li>
                  <li>proposer une transformation lourde alors que le besoin réel n’a pas encore été clarifié</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne traitons pas non plus un problème d’interface comme un simple défaut de communication entre
                  services.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la sous-traitance industrielle, les tensions visibles sont très souvent le produit :
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
                  Dans une entreprise de sous-traitance industrielle, il devient généralement utile d’intervenir quand
                  plusieurs signaux apparaissent ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>les mêmes pertes de temps reviennent entre services</li>
                  <li>les relances deviennent normales</li>
                  <li>les validations ou reprises s’accumulent</li>
                  <li>les méthodes diffèrent selon les affaires, les équipes ou les sites</li>
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
                  La sous-traitance industrielle est un environnement où les écarts de fonctionnement, de méthode ou
                  de cadrage se paient vite dans le réel.
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
                  Si votre entreprise de sous-traitance industrielle fait face à des pertes de temps, un manque de
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
                  Besoin de clarifier un sujet de sous-traitance industrielle ?
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
