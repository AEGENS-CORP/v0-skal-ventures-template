import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ProblematiqueProjetMalCadreMeta = {
  title: "Projet industriel mal cadré | AEGENS",
  description:
    "Un projet industriel mal cadré produit flou, dérives, arbitrages tardifs et mise en œuvre fragile. Comprendre les signes et ce que cela révèle vraiment.",
}

export function ProblematiqueProjetMalCadrePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Problématiques", href: "/problematiques" },
              { label: "Projet industriel mal cadré" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Projet industriel mal cadré
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un projet industriel mal cadré n’est pas forcément un projet mal intentionné.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ce n’est pas non plus forcément un projet mal piloté au départ.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est, beaucoup plus souvent, un projet qui a été engagé alors que plusieurs fondations essentielles
                restaient encore insuffisamment posées :
              </p>
              <ul className={bulletListClass}>
                <li>le besoin réel</li>
                <li>l’objectif principal</li>
                <li>le périmètre</li>
                <li>les contraintes</li>
                <li>les parties prenantes</li>
                <li>les critères de décision</li>
                <li>la logique de mise en œuvre</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le problème est que cette faiblesse de départ ne se voit pas toujours immédiatement.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Au début, le projet peut sembler avancer :
              </p>
              <ul className={bulletListClass}>
                <li>des réunions ont lieu</li>
                <li>des idées circulent</li>
                <li>des pistes se dessinent</li>
                <li>des interlocuteurs sont mobilisés</li>
                <li>parfois même des prestataires sont déjà sollicités</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais au fil du temps, plusieurs symptômes apparaissent :
              </p>
              <ul className={bulletListClass}>
                <li>les discussions reviennent sans cesse sur des points censés être déjà posés</li>
                <li>les attentes diffèrent selon les interlocuteurs</li>
                <li>le périmètre bouge</li>
                <li>les arbitrages se multiplient</li>
                <li>la solution est discutée avant que le besoin soit stabilisé</li>
                <li>la mise en œuvre devient de plus en plus dépendante de corrections en cours de route</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est cela, en pratique, un projet mal cadré.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ce n’est pas seulement un projet un peu flou.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est un projet dont l’amont n’a pas donné à la suite une base suffisamment solide.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">
                    Découvrir notre offre cadrage
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="mauvais-cadrage-title">
                <h2 id="mauvais-cadrage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’on appelle réellement un mauvais cadrage
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le mot cadrage est souvent utilisé de manière trop vague.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans les faits, cadrer un projet veut dire plusieurs choses très concrètes :
                </p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin</li>
                  <li>définir l’objectif</li>
                  <li>poser le bon périmètre</li>
                  <li>identifier les contraintes</li>
                  <li>faire apparaître les parties prenantes</li>
                  <li>structurer les priorités</li>
                  <li>préparer une base de travail exploitable pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet est donc mal cadré lorsque l’une ou plusieurs de ces dimensions restent trop incertaines
                  au moment où le projet entre déjà dans une logique de décision, de consultation ou de mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème n’est pas qu’il manque un document.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème est qu’il manque une lecture suffisamment claire du sujet pour permettre à la suite
                  d’être tenue proprement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, le mauvais cadrage n’est pas un défaut administratif.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est un défaut de fondation.</p>
              </section>

              <section className={sectionClass} aria-labelledby="pourquoi-title">
                <h2 id="pourquoi-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi un projet industriel se cadre mal
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans l’industrie, un projet se cadre mal pour plusieurs raisons récurrentes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  La première est que le sujet paraît évident à ceux qui le vivent depuis longtemps.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une difficulté existe depuis des mois ou des années, elle finit par être connue de tous.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais le fait qu’elle soit connue ne signifie pas qu’elle soit formulée correctement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tout le monde pense parler du même sujet, alors que chacun en porte une lecture partielle.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  La deuxième raison est la pression à avancer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un besoin est jugé important, il existe une tentation naturelle à passer à l’étape suivante :
                </p>
                <ul className={bulletListClass}>
                  <li>consulter</li>
                  <li>chercher une solution</li>
                  <li>lancer un chantier</li>
                  <li>demander un devis</li>
                  <li>mobiliser un prestataire</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette accélération donne l’impression d’être dans l’action.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais si le besoin reste encore trop flou, elle déplace simplement le problème.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  La troisième raison est la confusion entre sujet, solution et projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>une difficulté de fonctionnement devient trop vite un projet d’outil</li>
                  <li>un manque de fluidité devient trop vite une refonte de process</li>
                  <li>un besoin de visibilité devient trop vite une demande de reporting</li>
                  <li>
                    un problème d’interface entre équipes devient trop vite une question d’organisation cible
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ces cas-là, la réponse commence à se dessiner avant que le sujet ait été correctement relu.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  La quatrième raison est la sous-estimation des interfaces.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un projet industriel, les difficultés viennent rarement d’un seul objet isolé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles naissent souvent :
                </p>
                <ul className={bulletListClass}>
                  <li>entre services</li>
                  <li>entre étapes</li>
                  <li>entre responsabilités</li>
                  <li>entre décisions</li>
                  <li>entre réel opérationnel et lecture projet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand ces interfaces ne sont pas assez travaillées au départ, le projet se structure sur une vision
                  incomplète.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="signes-title">
                <h2 id="signes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signes qu’un projet est mal cadré
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet mal cadré ne se repère pas seulement parce qu’il déraille.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il se repère souvent plus tôt, dans la manière même dont il avance.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le besoin change selon l’interlocuteur
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand on demande à plusieurs personnes d’expliquer le projet, on obtient plusieurs versions du sujet :
                </p>
                <ul className={bulletListClass}>
                  <li>pour l’un, il s’agit d’un problème de délai</li>
                  <li>pour un autre, d’un problème de méthode</li>
                  <li>pour un autre encore, d’un problème d’outil</li>
                  <li>pour un autre enfin, d’un besoin d’organisation plus large</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette divergence n’est pas forcément anormale au départ.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle devient problématique lorsqu’elle n’est pas traitée avant engagement réel du projet.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  L’objectif principal n’est pas assez net
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le projet vise à améliorer, fluidifier, structurer, mieux piloter, gagner du temps…
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais si personne ne peut dire précisément ce que cela signifie, le projet manque déjà d’un point
                  fixe.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le périmètre glisse en permanence
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le projet commence sur un sujet A, puis absorbe B, puis C, puis une série de demandes connexes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce glissement n’est pas toujours un problème de discipline.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il est souvent le signe que le périmètre n’a jamais été réellement posé.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les arbitrages structurants arrivent trop tard
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le projet avance alors que les vraies décisions de fond n’ont pas encore été prises, on demande
                  à l’exécution de porter ce que le cadrage n’a pas encore tranché.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les discussions portent très tôt sur la solution
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand l’amont n’est pas assez solide, la discussion dérive rapidement vers :
                </p>
                <ul className={bulletListClass}>
                  <li>le choix d’un outil</li>
                  <li>le nom d’un prestataire</li>
                  <li>une architecture cible</li>
                  <li>un mode de déploiement</li>
                  <li>un budget estimatif</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais si le besoin n’est pas encore stabilisé, ces discussions arrivent trop tôt.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La consultation devient difficile à lire
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les offres ou propositions reçues semblent toutes parler du sujet, mais ne répondent pas au même
                  objet :
                </p>
                <ul className={bulletListClass}>
                  <li>pas le même périmètre</li>
                  <li>pas les mêmes hypothèses</li>
                  <li>pas le même niveau d’accompagnement</li>
                  <li>pas les mêmes attentes implicites</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent l’un des effets les plus visibles d’un cadrage faible.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le projet consomme de l’énergie sans gagner en clarté
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est un signe majeur.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le nombre d’échanges augmente. Les acteurs sont mobilisés. Des documents circulent.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais la compréhension du sujet progresse peu.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand l’énergie augmente plus vite que la clarté, le cadrage est souvent en cause.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="concret-title">
                <h2 id="concret-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’un mauvais cadrage produit concrètement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un mauvais cadrage ne crée pas seulement du flou.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il produit des effets très concrets sur la suite du projet.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des attentes divergentes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le besoin n’a pas été suffisamment clarifié, chacun projette dans le projet ses propres
                  attentes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le projet devient alors un point de convergence apparent, mais pas un objet réellement partagé.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Un périmètre instable</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La suite devient plus difficile à tenir parce que l’on ne sait pas exactement :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qui est dedans</li>
                  <li>ce qui ne l’est pas</li>
                  <li>ce qui relève d’une phase 1</li>
                  <li>ce qui relève d’une vision plus large</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Une consultation fragile</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si le projet passe par une consultation, le manque de cadrage dégrade la qualité de comparaison :
                </p>
                <ul className={bulletListClass}>
                  <li>les offres sont plus hétérogènes</li>
                  <li>les prix deviennent difficiles à lire</li>
                  <li>les écarts de périmètre sont mal interprétés</li>
                  <li>la décision perd en solidité</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Une surcharge côté projet</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le chef de projet, la direction ou les équipes de coordination finissent par traiter en aval :
                </p>
                <ul className={bulletListClass}>
                  <li>des clarifications de besoin</li>
                  <li>des arbitrages de périmètre</li>
                  <li>des reformulations d’objectif</li>
                  <li>des tensions entre attentes incompatibles</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, la gestion de projet absorbe ce que le cadrage n’a pas sécurisé.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Une mise en œuvre plus fragile</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet mal cadré peut parfaitement entrer en exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais il le fait sur une base plus instable :
                </p>
                <ul className={bulletListClass}>
                  <li>corrections plus fréquentes</li>
                  <li>décisions tardives</li>
                  <li>réinterprétations</li>
                  <li>perte de rythme</li>
                  <li>parfois remise en cause partielle du projet lui-même</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="mal-traite-title">
                <h2 id="mal-traite-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce problème est souvent mal traité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, quand un projet devient difficile, la réponse spontanée consiste à
                  renforcer :
                </p>
                <ul className={bulletListClass}>
                  <li>le pilotage</li>
                  <li>les réunions</li>
                  <li>le suivi</li>
                  <li>le reporting</li>
                  <li>la pression sur les délais</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Parfois c’est nécessaire.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Mais parfois le vrai sujet est ailleurs.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le projet est mal cadré, le pilotage seul ne suffit pas.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il peut donner plus de forme à l’avancement, mais il ne reconstruit pas automatiquement :
                </p>
                <ul className={bulletListClass}>
                  <li>un besoin clair</li>
                  <li>un périmètre juste</li>
                  <li>un objectif partagé</li>
                  <li>des critères de décision solides</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pour cela qu’il faut parfois accepter de revenir en amont.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Non pas pour repartir de zéro, mais pour remettre à plat ce qui n’a pas été suffisamment consolidé.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="regarder-title">
                <h2 id="regarder-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut regarder sérieusement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un projet industriel semble mal cadré, il faut revenir à quelques questions simples.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le besoin est-il formulé clairement ?</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pas seulement nommé. Formulé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Peut-on dire précisément :</p>
                <ul className={bulletListClass}>
                  <li>quel problème est traité</li>
                  <li>quels effets observables il produit</li>
                  <li>ce que le projet cherche réellement à améliorer</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">L’objectif principal est-il net ?</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Peut-on expliquer en une phrase ce que le projet doit permettre, sans se réfugier dans des formules
                  trop générales ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le périmètre est-il posé ?</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sait-on ce qui entre dans le projet ? Ce qui n’y entre pas ? Ce qui sera traité plus tard ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les contraintes sont-elles visibles ?</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Temps, ressources, dépendances, charge, environnement existant, déploiement : ont-elles été
                  intégrées ou seulement découvertes au fur et à mesure ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les parties prenantes lisent-elles globalement le sujet de la même manière ?
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si les lectures restent trop divergentes, le projet ne peut pas vraiment tenir.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les critères de décision existent-ils ?
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sait-on sur quelle base une solution, un prestataire ou une orientation seront jugés pertinents ?
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si plusieurs de ces réponses restent floues, le sujet est souvent moins un problème de pilotage qu’un
                  problème de cadrage insuffisant.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="utile-title">
                <h2 id="utile-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une intervention utile permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un projet est mal cadré, l’objectif n’est pas de produire un vocabulaire plus sophistiqué
                  autour du problème.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’objectif est de le rendre plus lisible.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une intervention utile doit permettre de :
                </p>
                <ul className={bulletListClass}>
                  <li>reformuler le besoin réel</li>
                  <li>distinguer le sujet principal des symptômes périphériques</li>
                  <li>stabiliser l’objectif du projet</li>
                  <li>poser un périmètre plus juste</li>
                  <li>rendre visibles les contraintes</li>
                  <li>clarifier les attentes des parties prenantes</li>
                  <li>produire une base plus exploitable pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon le niveau du sujet, cela peut conduire à :
                </p>
                <ul className={bulletListClass}>
                  <li>un diagnostic plus approfondi</li>
                  <li>une note de cadrage</li>
                  <li>une expression de besoin</li>
                  <li>un cahier des charges</li>
                  <li>une roadmap</li>
                  <li>un recentrage du projet avant toute autre étape</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La vraie valeur n’est donc pas seulement de faire un cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La vraie valeur est de donner au projet des fondations qu’il n’a pas encore.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="concerned-title">
                <h2 id="concerned-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous êtes concerné
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet mérite généralement une vraie remise à plat si plusieurs réponses à ces questions sont oui :
                </p>
                <ul className={bulletListClass}>
                  <li>le projet existe, mais chacun le raconte encore différemment</li>
                  <li>les discussions reviennent souvent sur le besoin de départ</li>
                  <li>le périmètre bouge régulièrement</li>
                  <li>la solution est déjà discutée alors que le besoin reste imparfaitement formulé</li>
                  <li>des arbitrages importants sont repoussés</li>
                  <li>la consultation ou la mise en œuvre semblent proches, mais la base reste fragile</li>
                  <li>le projet consomme déjà du temps sans avoir encore gagné assez de clarté</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si c’est le cas, il est probable que le projet ne manque pas seulement d’avancement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il manque surtout d’un cadrage suffisamment solide.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet industriel mal cadré n’est pas seulement un projet flou.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est un projet dont les fondations :</p>
                <ul className={bulletListClass}>
                  <li>besoin</li>
                  <li>objectif</li>
                  <li>périmètre</li>
                  <li>contraintes</li>
                  <li>acteurs</li>
                  <li>critères de décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  n’ont pas été assez consolidées avant que la suite ne s’engage réellement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le risque n’est pas seulement théorique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il se traduit ensuite par :
                </p>
                <ul className={bulletListClass}>
                  <li>des attentes divergentes</li>
                  <li>des arbitrages tardifs</li>
                  <li>une consultation fragile</li>
                  <li>une mise en œuvre plus coûteuse en corrections</li>
                  <li>une exécution moins lisible</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe n’est donc pas toujours d’accélérer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est souvent de revenir au cadrage, pour remettre au clair ce que le projet demande
                  réellement avant d’exiger de l’exécution qu’elle compense.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre projet avance mais reste difficile à lire, difficile à stabiliser ou difficile à comparer,
                  c’est souvent qu’il ne faut pas seulement mieux le piloter.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut d’abord mieux le cadrer.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage de projet industriel
                  </Link>
                  ,{" "}
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    comment cadrer un projet industriel
                  </Link>
                  ,{" "}
                  <Link href="/ressources/cadrage-vs-gestion-de-projet/" className={inlineSeoLinkClass}>
                    cadrage vs gestion de projet
                  </Link>
                  ,{" "}
                  <Link
                    href="/cas-clients/diagnostic-et-cadrage-dun-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    cas client diagnostic et cadrage
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

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de remettre un projet sur des fondations plus solides ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le besoin, stabiliser le périmètre et préparer une suite plus tenable.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">
                      Voir notre offre cadrage
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
