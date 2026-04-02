import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ProblematiqueManqueVisibiliteProcessusMeta = {
  title: "Manque de visibilité sur les processus | AEGENS",
  description:
    "Quand le manque de visibilité sur les processus empêche de piloter correctement, le problème vient souvent du fonctionnement réel, des interfaces et des données de suivi.",
}

export function ProblematiqueManqueVisibiliteProcessusPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Problématiques", href: "/problematiques" },
              { label: "Manque de visibilité sur les processus" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Manque de visibilité sur les processus
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le manque de visibilité sur les processus ne veut pas simplement dire que l’entreprise manque de
                tableaux de bord.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans la plupart des cas, le problème est plus profond.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il ne vient pas seulement d’un défaut d’affichage.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il vient du fait que l’entreprise ne voit pas suffisamment clairement :
              </p>
              <ul className={bulletListClass}>
                <li>comment le travail se déroule réellement</li>
                <li>où les étapes ralentissent</li>
                <li>où les validations se bloquent</li>
                <li>où les reprises apparaissent</li>
                <li>où l’information change de main</li>
                <li>à quel moment le processus réel s’écarte du processus supposé</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est ce qui rend ce sujet si important.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Les contenus de référence sur le process mapping et le BPM convergent sur ce point : rendre un
                processus visible sert d’abord à montrer les étapes, les décisions, les handoffs et les goulets
                d’étranglement, afin de clarifier les rôles et d’améliorer le fonctionnement.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La visibilité utile n’est donc pas un simple reporting ; c’est une lecture structurée de la manière
                dont le travail s’exécute réellement.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Quand une entreprise manque de visibilité sur ses processus, elle n’a pas seulement moins
                d’information.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle pilote moins bien, arbitre plus difficilement et corrige souvent trop tard.
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
              <section className={sectionClass} aria-labelledby="signifie-title">
                <h2 id="signifie-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que signifie réellement manquer de visibilité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, le manque de visibilité est formulé de manière vague :
                </p>
                <ul className={bulletListClass}>
                  <li>on ne sait pas où ça bloque</li>
                  <li>on manque de suivi</li>
                  <li>on n’a pas assez de visibilité</li>
                  <li>les processus ne sont pas lisibles</li>
                  <li>on ne sait pas où on en est</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces formulations sont justes, mais incomplètes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En pratique, le manque de visibilité sur les processus recouvre généralement au moins une des
                  situations suivantes :
                </p>
                <ul className={bulletListClass}>
                  <li>le processus théorique existe, mais le processus réel est différent</li>
                  <li>les étapes sont connues, mais leur enchaînement concret n’est pas bien maîtrisé</li>
                  <li>les points de passage entre équipes manquent de lisibilité</li>
                  <li>les validations existent, mais on ne sait pas toujours où elles attendent</li>
                  <li>les données de suivi sont dispersées, partielles ou peu fiables</li>
                  <li>les équipes voient leur partie du flux, mais pas l’ensemble</li>
                  <li>
                    l’organisation réagit à des symptômes, sans voir clairement la logique du processus complet
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit : le manque de visibilité n’est pas d’abord un manque de présentation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est un manque de compréhension fiable du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les approches de process mapping et de process mining insistent justement sur cette différence entre
                  le processus dessiné et le processus réellement exécuté.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La visibilité utile consiste à comprendre l’exécution réelle, à identifier les goulots
                  d’étranglement et à mesurer la performance du flux, pas seulement à documenter une procédure idéale.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="grave-title">
                <h2 id="grave-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce problème est plus grave qu’il n’en a l’air
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une entreprise peut vivre longtemps avec une visibilité partielle sur ses processus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle compense :</p>
                <ul className={bulletListClass}>
                  <li>par les habitudes</li>
                  <li>par l’expérience des équipes</li>
                  <li>par des échanges directs</li>
                  <li>par des relances</li>
                  <li>par des fichiers de suivi</li>
                  <li>par des validations informelles</li>
                  <li>par la connaissance implicite de certaines personnes-clés</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème est que cette compensation a ses limites.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand la visibilité est insuffisante, plusieurs effets apparaissent :
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les décisions se prennent sur une lecture partielle
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On traite ce qui est visible, pas forcément ce qui est structurant.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les goulots d’étranglement sont mal qualifiés
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils sont ressentis, mais pas toujours localisés correctement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les équipes recréent leur propre visibilité
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Fichiers Excel, mails, suivis parallèles, listes locales : ces supports existent souvent parce que la
                  visibilité centrale ne suffit pas.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les écarts deviennent difficiles à objectiver
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On sait qu’un sujet prend du retard, revient souvent ou coince, mais on ne sait pas toujours à quel
                  endroit exact du processus cela se produit.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les projets d’amélioration partent sur une base fragile
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si l’on ne voit pas correctement le processus réel, on risque de corriger au mauvais endroit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est précisément ce que montrent les approches de BPM et de process mapping : la visibilité permet
                  d’identifier les handoffs, de repérer les tâches qui s’accumulent ou se cassent, et de clarifier qui
                  est responsable de quoi.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans cela, l’amélioration continue repose sur des intuitions plus que sur une lecture solide.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="origine-title">
                <h2 id="origine-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  D’où vient réellement ce manque de visibilité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le manque de visibilité sur les processus n’a pas une cause unique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il apparaît généralement à l’intersection de plusieurs réalités.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  1. Le processus réel s’est éloigné du processus officiel
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une situation fréquente.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La procédure existe. Le schéma existe parfois aussi.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Mais dans la pratique :</p>
                <ul className={bulletListClass}>
                  <li>certaines étapes sont contournées</li>
                  <li>des validations se font autrement</li>
                  <li>des informations passent par des canaux parallèles</li>
                  <li>des raccourcis ont été créés</li>
                  <li>
                    certains acteurs jouent un rôle plus important que celui prévu sur le papier
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le résultat, c’est que le document officiel ne suffit plus à décrire le fonctionnement réel.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Les données de suivi sont dispersées</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La visibilité utile suppose de disposer d’informations cohérentes sur le déroulement du processus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Or, dans de nombreuses organisations, les données sont :
                </p>
                <ul className={bulletListClass}>
                  <li>éclatées entre plusieurs outils</li>
                  <li>retraitées localement</li>
                  <li>partiellement ressaisies</li>
                  <li>non synchronisées</li>
                  <li>trop incomplètes pour donner une lecture fiable du flux</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une visibilité utile suppose l’accès à la fois aux données métier et aux données de processus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans cette articulation, la lecture du fonctionnement reste partielle.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  3. Les interfaces entre services sont mal tenues
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un processus ne se dégrade pas toujours dans une étape isolée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il se dégrade souvent dans les passages :</p>
                <ul className={bulletListClass}>
                  <li>entre deux équipes</li>
                  <li>entre opérationnel et support</li>
                  <li>entre terrain et pilotage</li>
                  <li>entre validation et exécution</li>
                  <li>entre saisie et utilisation de l’information</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand ces interfaces sont mal tenues, la visibilité se fragmente.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque équipe voit son segment, mais le flux global devient plus difficile à lire.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  4. Les rôles et responsabilités sont insuffisamment explicites
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Si l’on ne sait pas clairement :</p>
                <ul className={bulletListClass}>
                  <li>qui produit</li>
                  <li>qui valide</li>
                  <li>qui relance</li>
                  <li>qui arbitre</li>
                  <li>qui tient le suivi</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  alors la visibilité du processus dépend de personnes plus que de l’organisation.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  5. Le suivi s’est construit par couches successives
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, la visibilité n’a pas été pensée comme un tout.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle s’est construite au fil du temps :</p>
                <ul className={bulletListClass}>
                  <li>un fichier ajouté</li>
                  <li>un mail en copie</li>
                  <li>une validation supplémentaire</li>
                  <li>un tableau local</li>
                  <li>une extraction retraitée</li>
                  <li>un point d’avancement manuel</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque ajout peut sembler utile localement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais l’ensemble finit par rendre le processus moins lisible globalement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="observe-title">
                <h2 id="observe-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que l’on observe concrètement quand la visibilité manque
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le manque de visibilité sur les processus produit des symptômes très reconnaissables.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les équipes passent du temps à reconstituer l’information
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles ne lisent pas simplement le processus.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles le reconstruisent :</p>
                <ul className={bulletListClass}>
                  <li>à partir d’un outil</li>
                  <li>d’un fichier</li>
                  <li>d’un mail</li>
                  <li>d’une confirmation orale</li>
                  <li>de la mémoire de certaines personnes</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les retards sont vus tard</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème n’est pas toujours qu’il y ait un retard.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème est qu’on le voit quand il est déjà installé.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les goulots d’étranglement ne sont pas objectivés
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tout le monde sent qu’il y a un point de ralentissement, mais pas toujours au même endroit ni pour
                  la même raison.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les responsabilités deviennent floues</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand on ne voit pas bien le processus, il devient plus difficile de dire :
                </p>
                <ul className={bulletListClass}>
                  <li>qui détient réellement la main à un instant donné</li>
                  <li>qui aurait dû agir</li>
                  <li>qui devait valider</li>
                  <li>où le flux est effectivement resté en attente</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les équipes recréent des tableaux de bord locaux
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est souvent un signal fort.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand chacun construit son propre suivi, cela signifie généralement que la visibilité commune ne
                  suffit plus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les bonnes pratiques de documentation et de cartographie des processus cherchent précisément à
                  clarifier les étapes, préciser les rôles, visualiser les handoffs, identifier les inefficacités et
                  réduire les malentendus sur qui fait quoi.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="reporting-title">
                <h2 id="reporting-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi plus de reporting n’est pas forcément la bonne réponse
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une erreur fréquente.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand la visibilité manque, la réaction spontanée consiste souvent à demander :
                </p>
                <ul className={bulletListClass}>
                  <li>plus de reporting</li>
                  <li>plus de tableaux de bord</li>
                  <li>plus de points d’avancement</li>
                  <li>plus de comptes rendus</li>
                  <li>plus de validation documentaire</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais une visibilité insuffisante ne se corrige pas toujours par plus d’informations.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle se corrige d’abord par une meilleure structuration de ce qu’il faut voir.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Sinon, on produit un effet inverse :</p>
                <ul className={bulletListClass}>
                  <li>plus de données</li>
                  <li>plus de temps passé à les consolider</li>
                  <li>plus de confusion entre activité et visibilité</li>
                  <li>encore moins de lecture utile du processus</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit : le vrai sujet n’est pas la quantité d’information.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est la capacité à voir le processus au bon niveau.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La visibilité utile ne consiste pas à accumuler des informations, mais à modéliser, analyser,
                  mesurer et améliorer les processus sur la base de données exploitables.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="regarder-title">
                <h2 id="regarder-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut regarder sérieusement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une entreprise manque de visibilité sur ses processus, plusieurs dimensions doivent être
                  examinées avec rigueur.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le processus réel</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Comment le travail se déroule-t-il effectivement, du début à la fin ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pas en théorie. Dans la pratique.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les points de passage</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Où le travail change-t-il de main ? Quels sont les handoffs critiques ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Qu’est-ce qui se perd, se transforme ou ralentit à ces moments-là ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les informations utiles</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quelles données permettent réellement de savoir :
                </p>
                <ul className={bulletListClass}>
                  <li>où en est le flux</li>
                  <li>ce qui est en attente</li>
                  <li>ce qui est validé</li>
                  <li>ce qui est en anomalie</li>
                  <li>ce qui doit être arbitré</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les écarts entre prévu et réel</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À quel moment l’exécution s’écarte-t-elle du schéma attendu ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces écarts sont-ils ponctuels ou devenus structurels ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les responsabilités</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Qui tient la visibilité du processus ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Qui voit quoi ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Qui a une lecture d’ensemble ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Qui ne voit qu’un fragment ?</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les supports de suivi</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le processus est-il visible dans un dispositif commun, ou faut-il additionner plusieurs supports pour
                  comprendre ce qui se passe réellement ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’enjeu est d’analyser l’exécution réelle, de visualiser le flux et d’identifier les goulets
                  d’étranglement pour prioriser les actions.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="eviter-title">
                <h2 id="eviter-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il ne faut pas faire trop vite
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand ce problème apparaît, plusieurs mauvaises réponses sont fréquentes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Ajouter un outil sans avoir relu le fonctionnement réel
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On risque alors de digitaliser un processus déjà mal compris.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Produire une cartographie purement théorique
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une carte du processus est utile si elle décrit le réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sinon, elle produit une illusion de maîtrise.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Multiplier les points de suivi</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans clarification du processus, cela augmente souvent la charge sans améliorer la lecture.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Traiter le sujet comme un simple manque de discipline
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les problèmes de visibilité viennent plus souvent de la structure du fonctionnement que d’un défaut
                  individuel de rigueur.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Confondre manque de visibilité et manque de données
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème n’est pas toujours l’absence de données.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent l’absence de données utiles, fiables et reliées au déroulement réel du processus.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une intervention utile permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une intervention utile sur ce sujet ne vise pas à faire plus de reporting.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle vise à rendre le processus lisible.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela suppose généralement de :</p>
                <ul className={bulletListClass}>
                  <li>remettre à plat le processus réel</li>
                  <li>identifier les étapes et handoffs critiques</li>
                  <li>objectiver les goulots d’étranglement</li>
                  <li>clarifier les rôles</li>
                  <li>distinguer les données utiles des données accessoires</li>
                  <li>faire apparaître les écarts entre le prévu et le réel</li>
                  <li>hiérarchiser les leviers d’amélioration</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon le niveau du sujet, cela peut conduire à :
                </p>
                <ul className={bulletListClass}>
                  <li>une cartographie plus fiable du processus</li>
                  <li>une clarification des responsabilités</li>
                  <li>une remise à plat des méthodes</li>
                  <li>un cadrage plus large</li>
                  <li>un projet de structuration plus ambitieux</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le point décisif est le suivant :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  la visibilité utile ne consiste pas à voir plus. Elle consiste à voir juste.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="concerne-title">
                <h2 id="concerne-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous êtes concerné
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet mérite généralement un vrai travail de fond quand plusieurs réponses à ces questions sont
                  oui :
                </p>
                <ul className={bulletListClass}>
                  <li>vous avez du mal à savoir où un flux se bloque réellement</li>
                  <li>les équipes reconstituent l’état d’avancement à partir de plusieurs sources</li>
                  <li>il existe des suivis parallèles pour pallier un manque de lisibilité</li>
                  <li>les goulots d’étranglement sont ressentis, mais rarement objectivés</li>
                  <li>les responsabilités de passage entre étapes restent floues</li>
                  <li>le reporting existe, mais ne permet pas vraiment de piloter le réel</li>
                  <li>les écarts entre processus théorique et processus vécu deviennent importants</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si c’est le cas, le sujet n’est probablement pas seulement un problème de tableau de bord.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est un problème de visibilité opérationnelle sur le fonctionnement réel.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le manque de visibilité sur les processus ne signifie pas simplement qu’il manque des indicateurs.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il signifie souvent que l’entreprise ne voit pas encore clairement :
                </p>
                <ul className={bulletListClass}>
                  <li>son processus réel</li>
                  <li>ses handoffs</li>
                  <li>ses points de blocage</li>
                  <li>ses responsabilités</li>
                  <li>les données vraiment utiles pour piloter</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe n’est donc pas toujours d’ajouter du reporting.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est souvent de revenir au fonctionnement réel, pour reconstruire une lecture fiable de
                  ce qui se passe réellement entre les étapes, les équipes et les décisions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre organisation a le sentiment de subir ses processus plus que de les voir clairement, c’est
                  souvent qu’un travail de diagnostic et de clarification devient nécessaire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les approches de process mapping, BPM et process mining convergent toutes sur cette idée : la
                  visibilité utile sert à comprendre le flux réel, à clarifier les rôles, à identifier les goulets
                  d’étranglement et à améliorer la performance du processus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    offre diagnostic fonctionnement opérationnel
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
                    href="/problematiques/organisation-entre-services-inefficace/"
                    className={inlineSeoLinkClass}
                  >
                    organisation entre services inefficace
                  </Link>
                  ,{" "}
                  <Link href="/ressources/quand-faire-appel-a-un-regard-exterieur/" className={inlineSeoLinkClass}>
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
                  Besoin de rendre vos processus réellement lisibles ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à objectiver les points de blocage, clarifier les handoffs et structurer un pilotage
                  utile.
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
