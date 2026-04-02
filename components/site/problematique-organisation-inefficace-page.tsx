import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ProblematiqueOrganisationInefficaceMeta = {
  title: "Organisation entre services inefficace | AEGENS",
  description:
    "Quand l’organisation entre services devient inefficace, le problème ne vient pas seulement des équipes mais des interfaces, des méthodes et des responsabilités. Comprendre les vrais causes.",
}

export function ProblematiqueOrganisationInefficacePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Problématiques", href: "/problematiques" },
              { label: "Organisation entre services inefficace" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Organisation entre services inefficace
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Une organisation entre services devient inefficace rarement parce que les équipes travaillent mal.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le plus souvent, le problème se situe ailleurs :
              </p>
              <ul className={bulletListClass}>
                <li>dans les interfaces</li>
                <li>dans les zones de passage</li>
                <li>dans les validations</li>
                <li>dans la circulation de l’information</li>
                <li>dans les responsabilités insuffisamment explicites</li>
                <li>dans des méthodes de travail qui ont évolué sans être réellement réalignées</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est ce qui rend ce sujet difficile à traiter.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Quand un service regarde la situation depuis son propre point de vue, il voit surtout :
              </p>
              <ul className={bulletListClass}>
                <li>ce qu’il attend des autres</li>
                <li>ce qu’il reçoit trop tard</li>
                <li>ce qu’il doit reprendre</li>
                <li>ce qu’il doit compenser</li>
                <li>ce qui ralentit son propre travail</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais une organisation entre services ne se comprend pas depuis un seul point de vue.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle se comprend dans les écarts entre les services :
              </p>
              <ul className={bulletListClass}>
                <li>ce que l’un croit transmettre</li>
                <li>ce que l’autre pense recevoir</li>
                <li>ce qui est censé être validé</li>
                <li>ce qui ne l’est pas vraiment</li>
                <li>ce qui change de main sans changer de cadre</li>
                <li>ce qui dépend trop d’habitudes locales</li>
                <li>
                  ce qui repose, au fond, davantage sur les personnes que sur un fonctionnement réellement structuré
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est généralement à cet endroit précis que l’inefficacité s’installe.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">
                    Découvrir notre offre diagnostic
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="communication-title">
                <h2 id="communication-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le vrai sujet n’est presque jamais la communication
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une organisation entre services fonctionne mal, le diagnostic spontané est souvent le même :
                  il y a un problème de communication.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est parfois vrai, mais cette formule est trop large pour être utile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dire qu’il y a un problème de communication revient souvent à décrire un effet sans qualifier ce qui
                  le produit réellement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la pratique, ce que l’on appelle mauvaise communication peut recouvrir des réalités très
                  différentes :
                </p>
                <ul className={bulletListClass}>
                  <li>une information attendue trop tard</li>
                  <li>une donnée transmise dans un format inutilisable</li>
                  <li>une validation qui n’a pas de point d’entrée clair</li>
                  <li>une consigne interprétée différemment selon les équipes</li>
                  <li>une responsabilité de passage mal définie</li>
                  <li>un arbitrage qui ne sait pas à quel niveau remonter</li>
                  <li>un processus théorique qui ne correspond plus au fonctionnement réel</li>
                  <li>
                    un fonctionnement qui dépend trop de personnes-clés capables de reconstituer le fil du sujet
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, le problème est rarement simplement relationnel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il est plus souvent structurel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une différence importante.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce que si l’on traite un sujet structurel comme un simple sujet de communication, on produit
                  généralement :
                </p>
                <ul className={bulletListClass}>
                  <li>plus de réunions</li>
                  <li>plus de relances</li>
                  <li>plus de points de coordination</li>
                  <li>plus de tableaux de suivi</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  sans pour autant corriger ce qui crée l’inefficacité.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="apparait-title">
                <h2 id="apparait-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment l’inefficacité apparaît réellement entre services
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une organisation entre services devient inefficace de manière progressive.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle ne se dégrade pas toujours parce qu’un grand changement a été mal géré.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle se dégrade souvent parce qu’une série de petits décalages finit par former un système.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une équipe produit une information qu’elle juge exploitable. L’équipe suivante la trouve incomplète
                  et la complète localement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une validation est censée être automatique à une étape donnée. En pratique, elle dépend d’une
                  relance informelle ou d’une personne identifiée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un service pense avoir terminé son rôle. Le service suivant considère que le travail est encore
                  partiel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une règle existe. Mais dans le réel, plusieurs versions de cette règle coexistent selon les équipes,
                  les sites, les personnes ou les moments de charge.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un outil central existe. Mais les échanges réels se poursuivent en parallèle par mail, fichier ou
                  message direct parce que le passage officiel ne suffit pas à sécuriser le travail.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce type de décalage a deux caractéristiques.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La première, c’est qu’il paraît souvent raisonnable à l’échelle locale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque équipe s’adapte intelligemment pour faire tenir son travail.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La seconde, c’est que ces adaptations dégradent la cohérence d’ensemble.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce qui est rationnel localement devient coûteux globalement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est exactement comme cela qu’une organisation devient inefficace sans que personne ne puisse
                  facilement désigner la cause.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="cout-title">
                <h2 id="cout-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ce problème coûte réellement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le coût d’une mauvaise organisation entre services ne se limite pas au temps perdu.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il produit au moins six effets majeurs.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Une perte de fluidité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le travail n’avance plus dans un enchaînement propre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il avance par reprises, attentes, validations décalées, relances et compensations.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Une perte de lisibilité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il devient plus difficile de savoir :
                </p>
                <ul className={bulletListClass}>
                  <li>où en est réellement un sujet</li>
                  <li>qui doit agir</li>
                  <li>ce qui est validé</li>
                  <li>ce qui reste ouvert</li>
                  <li>ce qui bloque</li>
                  <li>à quel moment le problème a commencé</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Une surcharge diffuse</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Chaque équipe compense localement :</p>
                <ul className={bulletListClass}>
                  <li>vérifications supplémentaires</li>
                  <li>reformulations</li>
                  <li>relances</li>
                  <li>ressaisies</li>
                  <li>suivis parallèles</li>
                  <li>explications répétées</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette charge est rarement visible dans un indicateur unique, mais elle use fortement l’organisation.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  4. Une dépendance accrue aux personnes
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand l’organisation ne tient plus assez par elle-même, elle repose de plus en plus sur :
                </p>
                <ul className={bulletListClass}>
                  <li>ceux qui connaissent les écarts</li>
                  <li>ceux qui savent qui appeler</li>
                  <li>ceux qui savent comment reformuler</li>
                  <li>ceux qui savent où trouver la bonne version</li>
                  <li>ceux qui savent comment faire passer un sujet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème n’est alors plus seulement un problème de méthode.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il devient un problème de robustesse du fonctionnement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Des tensions entre équipes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand les interfaces sont mal tenues, chaque service finit par voir surtout ce que les autres ne
                  font pas, ce qu’ils font trop tard, ou ce qu’ils transmettent mal.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet devient alors plus sensible humainement, alors qu’il relève d’abord d’un problème de
                  structuration.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  6. Une plus faible capacité à faire évoluer l’organisation
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le fonctionnement réel repose déjà sur trop de compensations, tout projet d’amélioration
                  devient plus difficile à lancer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On ne part plus d’une base lisible.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On part d’un empilement de pratiques réelles, implicites, parfois contradictoires.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="pme-title">
                <h2 id="pme-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce problème est fréquent dans les PME industrielles
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une PME industrielle, plusieurs facteurs renforcent ce type de difficulté.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  D’abord, les équipes sont proches du réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est une force, mais cela signifie aussi que les ajustements locaux se construisent vite, parce
                  qu’il faut faire avancer la production, le support, la logistique, la qualité ou l’administratif
                  sans bloquer l’activité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ensuite, les rôles sont souvent plus imbriqués que dans de grandes structures.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certaines personnes occupent plusieurs fonctions de fait :
                </p>
                <ul className={bulletListClass}>
                  <li>relais d’information</li>
                  <li>valideur implicite</li>
                  <li>coordinateur officieux</li>
                  <li>traducteur entre deux mondes</li>
                  <li>gardien d’une méthode qui n’est plus vraiment formalisée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Enfin, les projets et l’activité courante se superposent.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il est donc fréquent que les interfaces entre services aient évolué par strates successives :
                </p>
                <ul className={bulletListClass}>
                  <li>une méthode ancienne</li>
                  <li>un contournement récent</li>
                  <li>un outil partiellement utilisé</li>
                  <li>une habitude locale devenue générale</li>
                  <li>un suivi parallèle créé pour sécuriser un point</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À force, le fonctionnement tient, mais il tient sans être réellement clarifié.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="signes-title">
                <h2 id="signes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signes qu’il ne s’agit plus d’un simple irritant
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certaines frictions entre services existent dans toute entreprise.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet devient plus sérieux quand plusieurs des signaux suivants apparaissent.
                </p>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les mêmes points de friction reviennent toujours
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pas de manière exceptionnelle. De manière récurrente.
                </p>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les relances font partie du fonctionnement normal
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans relance, le passage ne se fait pas correctement.
                </p>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les étapes ne sont pas comprises de la même manière selon les équipes
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce qui est terminé pour l’une ne l’est pas pour l’autre.
                </p>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les validations n’ont pas de logique claire
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles existent, mais leur position réelle dans le fonctionnement reste floue.
                </p>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le suivi officiel ne suffit pas</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Des suivis parallèles apparaissent pour reconstituer le vrai état d’avancement.
                </p>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le fonctionnement dépend trop de certaines personnes
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand elles sont là, tout tient.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand elles ne sont pas là, les écarts deviennent plus visibles.
                </p>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les tensions montent alors que le problème reste mal qualifié
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On parle beaucoup des relations entre services, mais peu du fonctionnement concret qui les produit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À ce stade, le sujet n’est plus un simple problème d’ajustement quotidien.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il devient un sujet de diagnostic organisationnel.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="regarder-title">
                <h2 id="regarder-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut regarder sérieusement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour traiter correctement une organisation inefficace entre services, il ne suffit pas d’écouter ce
                  que chaque équipe reproche à l’autre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il faut revenir au fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il faut regarder, en détail, plusieurs dimensions.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les points de passage</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Où le travail change-t-il de main ? À quel moment ? Dans quel format ? Avec quel niveau de
                  validation ? Avec quel niveau de clarté sur l’attendu ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les responsabilités</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Qui produit ? Qui transmet ? Qui valide ? Qui décide que l’étape est terminée ? Qui doit relancer ?
                  Qui est responsable quand le sujet reste entre deux ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les méthodes de travail</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les équipes travaillent-elles réellement selon les mêmes règles ? Ou bien utilisent-elles des logiques
                  différentes sans que cela soit explicitement posé ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les supports d’information</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Qu’est-ce qui circule ? Par quel canal ? Sous quelle forme ? Avec quel niveau de confiance ? Combien
                  de fois cette information est-elle reprise, reformulée ou confirmée ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les zones de compensation</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quelles pratiques parallèles ont été créées pour faire tenir le fonctionnement ? Que compensent-elles
                  ? Pourquoi ont-elles été rendues nécessaires ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le niveau réel du problème</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet relève-t-il :</p>
                <ul className={bulletListClass}>
                  <li>d’une clarification simple</li>
                  <li>d’une harmonisation de méthode</li>
                  <li>d’une meilleure définition des rôles</li>
                  <li>d’une remise à plat plus large</li>
                  <li>d’un projet structurant à cadrer</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans ce travail de lecture, les réponses sont souvent trop générales.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="vite-title">
                <h2 id="vite-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il ne faut pas faire trop vite
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une organisation entre services est inefficace, plusieurs réactions peuvent sembler naturelles,
                  mais elles sont souvent incomplètes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Multiplier les réunions</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les réunions peuvent fluidifier ponctuellement, mais elles ne remplacent pas une organisation claire.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Réécrire une procédure sans relire le réel
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une procédure nouvelle ne corrige pas automatiquement des interfaces mal tenues si elle ne part pas
                  du fonctionnement effectivement observé.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Chercher immédiatement un outil</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un outil peut aider, mais il ne traite pas à lui seul :
                </p>
                <ul className={bulletListClass}>
                  <li>des responsabilités floues</li>
                  <li>des validations mal placées</li>
                  <li>des méthodes divergentes</li>
                  <li>un besoin encore mal qualifié</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Personnaliser le problème</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le sujet est structurel, il ne peut pas être traité uniquement comme un problème de bonne
                  volonté, de rigueur individuelle ou de relation entre services.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Vouloir tout transformer d’un coup
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’organisation entre services peut nécessiter un vrai projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais encore faut-il savoir à quel niveau se situe réellement le besoin.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le mauvais réflexe n’est pas seulement d’aller trop lentement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est aussi d’aller trop vite au mauvais niveau.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une intervention utile permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une intervention sérieuse sur ce type de sujet doit produire plus qu’un constat général sur les
                  difficultés de coordination.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle doit permettre de :</p>
                <ul className={bulletListClass}>
                  <li>rendre visibles les points de passage</li>
                  <li>objectiver les zones de friction réelles</li>
                  <li>distinguer les symptômes des causes de fond</li>
                  <li>clarifier les méthodes de travail</li>
                  <li>faire apparaître les responsabilités implicites</li>
                  <li>
                    hiérarchiser ce qui relève d’un ajustement, d’une harmonisation ou d’un projet plus structurant
                  </li>
                  <li>redonner à l’organisation une lecture plus stable de son propre fonctionnement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, l’objectif n’est pas seulement de mieux collaborer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif est de rendre la collaboration moins dépendante de compensations permanentes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une différence majeure.</p>
              </section>

              <section className={sectionClass} aria-labelledby="concerne-title">
                <h2 id="concerne-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous êtes concerné
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet mérite généralement une vraie remise à plat quand plusieurs réponses à ces questions sont
                  oui :
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs services se renvoient régulièrement les mêmes sujets</li>
                  <li>les relances font partie du fonctionnement normal</li>
                  <li>les validations restent floues</li>
                  <li>les responsabilités de passage ne sont pas toujours claires</li>
                  <li>les équipes compensent par des fichiers, des mails ou des suivis parallèles</li>
                  <li>
                    chacun a le sentiment de perdre du temps, mais le problème n’a jamais été objectivé proprement
                  </li>
                  <li>le sujet crée des tensions récurrentes sans qu’une lecture d’ensemble existe vraiment</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si c’est le cas, le problème n’est probablement pas seulement relationnel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il est organisationnel.</p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une organisation entre services inefficace ne vient pas d’abord d’un défaut de bonne volonté.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle vient le plus souvent :
                </p>
                <ul className={bulletListClass}>
                  <li>d’interfaces mal tenues</li>
                  <li>de méthodes hétérogènes</li>
                  <li>de responsabilités implicites</li>
                  <li>de validations mal positionnées</li>
                  <li>d’une circulation de l’information qui dépend trop des personnes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe n’est donc pas seulement de demander plus de coordination.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est de comprendre :
                </p>
                <ul className={bulletListClass}>
                  <li>où le fonctionnement se déforme</li>
                  <li>pourquoi il se déforme</li>
                  <li>ce qui est compensé</li>
                  <li>à quel niveau il faut intervenir pour rétablir une organisation plus lisible</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si plusieurs services ont le sentiment de perdre du temps sans pouvoir nommer clairement où le
                  problème commence, c’est souvent qu’un travail de diagnostic et de clarification devient nécessaire.
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
                    href="/problematiques/pertes-de-temps-entre-services-industrie/"
                    className={inlineSeoLinkClass}
                  >
                    pertes de temps entre services
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
                    href="/cas-clients/reduction-des-ressaisies-et-clarification-des-methodes/"
                    className={inlineSeoLinkClass}
                  >
                    cas client réduction des ressaisies
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
                  Besoin de remettre les interfaces entre services sous contrôle ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à objectiver les frictions, clarifier les rôles et structurer un fonctionnement plus
                  lisible.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">
                      Voir notre offre diagnostic
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
