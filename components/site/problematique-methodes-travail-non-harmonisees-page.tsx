import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ProblematiqueMethodesNonHarmoniseesMeta = {
  title: "Méthodes de travail non harmonisées | AEGENS",
  description:
    "Quand les méthodes de travail ne sont pas harmonisées, les écarts entre équipes produisent reprises, pertes de temps et faible lisibilité. Comprendre les vraies causes.",
}

export function ProblematiqueMethodesNonHarmoniseesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Problématiques", href: "/problematiques" },
              { label: "Méthodes de travail non harmonisées" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Méthodes de travail non harmonisées
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Des méthodes de travail non harmonisées ne créent pas seulement un inconfort d’organisation.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elles créent un fonctionnement instable.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Au début, ce n’est pas toujours visible.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Chaque équipe trouve sa manière de faire. Chaque site adapte. Chaque service ajuste ses étapes, ses
                validations, ses supports et ses habitudes pour continuer à produire.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Localement, cela peut sembler efficace.</p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Globalement, cela produit autre chose :
              </p>
              <ul className={bulletListClass}>
                <li>des écarts de traitement</li>
                <li>des reprises</li>
                <li>des validations redondantes</li>
                <li>des temps de passage variables</li>
                <li>une dépendance accrue aux personnes</li>
                <li>une difficulté croissante à savoir quelle est la bonne manière de faire</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ce point n’est pas anodin. La standardisation des méthodes est régulièrement associée à une meilleure
                lisibilité des règles, à une information plus fiable et à une coordination plus claire, tout en
                rappelant qu’elle ne suffit pas à elle seule si les données sources ou les processus de remontée
                restent faibles.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Autrement dit :</p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                quand les méthodes de travail divergent trop, l’organisation ne devient pas plus souple.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle devient plus coûteuse à tenir.
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
              <section className={sectionClass} aria-labelledby="recouvre-title">
                <h2 id="recouvre-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ce problème recouvre réellement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dire que les méthodes de travail ne sont pas harmonisées est encore trop vague.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la réalité, cela peut vouloir dire plusieurs choses très différentes :
                </p>
                <ul className={bulletListClass}>
                  <li>deux équipes réalisent la même étape de manière différente</li>
                  <li>une même information est saisie, vérifiée ou transmise selon des logiques variables</li>
                  <li>les règles de validation changent selon les personnes</li>
                  <li>les supports utilisés ne sont pas les mêmes</li>
                  <li>l’ordre réel des étapes diffère d’un service à l’autre</li>
                  <li>un site applique une pratique que l’autre ne suit pas</li>
                  <li>la méthode officielle existe, mais le réel a dérivé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce qui pose problème n’est pas la variation en soi.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Toute organisation a besoin d’un certain degré d’adaptation locale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème commence quand la variation n’est plus pilotée, plus assumée, plus lisible, ni même
                  parfois consciente.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">À ce stade, l’entreprise ne dispose plus d’une méthode avec quelques adaptations.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle dispose d’un empilement de pratiques qui coexistent, parfois sans cadre commun.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les approches de process mapping et de BPM rappellent justement qu’un workflow standardisé sert
                  d’abord à assurer cohérence, lisibilité des rôles et reproductibilité du travail, ce qui devient
                  beaucoup plus difficile quand chaque équipe reconstruit sa propre manière de faire.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostique-title">
                <h2 id="diagnostique-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce sujet est souvent mal diagnostiqué
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand les méthodes divergent, le diagnostic spontané est souvent mauvais.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">On dit :</p>
                <ul className={bulletListClass}>
                  <li>les équipes ne se parlent pas assez</li>
                  <li>il manque de rigueur</li>
                  <li>chacun fait à sa sauce</li>
                  <li>il faudrait une procédure</li>
                  <li>il faut un meilleur outil</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces réactions contiennent parfois une part de vérité. Mais elles restent souvent trop courtes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet n’est pas seulement qu’il existe plusieurs façons de faire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet est de comprendre :</p>
                <ul className={bulletListClass}>
                  <li>pourquoi ces variations sont apparues</li>
                  <li>ce qu’elles compensent</li>
                  <li>ce qu’elles dégradent</li>
                  <li>
                    à partir de quel moment elles cessent d’être des adaptations utiles pour devenir une source
                    structurelle d’inefficacité
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une différence majeure.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce qu’une méthode non harmonisée n’est pas toujours le signe d’un manque de discipline.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle est souvent le produit d’un fonctionnement qui a évolué par couches successives :
                </p>
                <ul className={bulletListClass}>
                  <li>une règle initiale</li>
                  <li>une exception</li>
                  <li>un contournement</li>
                  <li>une adaptation locale</li>
                  <li>un support parallèle</li>
                  <li>puis une nouvelle habitude devenue normale</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À la fin, l’entreprise pense avoir une méthode.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En réalité, elle a souvent plusieurs versions du travail réel.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="coute-title">
                <h2 id="coute-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi les écarts de méthode finissent par coûter cher
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les méthodes de travail non harmonisées génèrent des coûts qui sont rarement visibles d’un seul coup.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils apparaissent par accumulation.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Un coût de coordination</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand deux équipes ne traitent pas une même étape selon la même logique, elles doivent compenser à
                  chaque interface :
                </p>
                <ul className={bulletListClass}>
                  <li>reformuler</li>
                  <li>vérifier</li>
                  <li>adapter</li>
                  <li>reclasser</li>
                  <li>valider autrement</li>
                  <li>reconstituer le contexte</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Un coût de fiabilité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand les règles de traitement varient, les résultats deviennent moins homogènes :
                </p>
                <ul className={bulletListClass}>
                  <li>données plus difficiles à comparer</li>
                  <li>qualité plus variable</li>
                  <li>lecture moins stable des dossiers ou des flux</li>
                  <li>décisions prises sur des bases moins propres</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les workflows standardisés améliorent la cohérence, la conformité et le suivi de la performance,
                  précisément parce qu’ils limitent ces variations non maîtrisées.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Un coût de charge interne</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque variation locale oblige quelqu’un à absorber l’écart :
                </p>
                <ul className={bulletListClass}>
                  <li>le service suivant</li>
                  <li>le responsable</li>
                  <li>le support</li>
                  <li>la personne qui sait comment ça marche vraiment</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Un coût de dépendance humaine</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand les méthodes ne sont pas assez harmonisées, l’organisation devient plus dépendante de ceux qui
                  savent :
                </p>
                <ul className={bulletListClass}>
                  <li>comment tel service procède réellement</li>
                  <li>quelle version utiliser</li>
                  <li>quelle exception tolérer</li>
                  <li>comment passer d’une logique à l’autre</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Un coût d’évolution</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une organisation qui fonctionne déjà avec plusieurs méthodes parallèles a beaucoup plus de mal à :
                </p>
                <ul className={bulletListClass}>
                  <li>cadrer un projet</li>
                  <li>déployer un changement</li>
                  <li>comparer une solution</li>
                  <li>fiabiliser un processus</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque évolution vient alors s’ajouter à un terrain déjà hétérogène.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="forme-title">
                <h2 id="forme-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment ce problème se forme dans la réalité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la plupart des cas, les méthodes ne deviennent pas non harmonisées parce qu’une entreprise a
                  volontairement organisé le désordre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles divergent parce que l’organisation s’adapte.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>une équipe ajoute une étape de contrôle pour se sécuriser</li>
                  <li>un site modifie l’ordre d’une séquence pour tenir ses contraintes</li>
                  <li>
                    un service utilise un fichier intermédiaire pour retrouver une visibilité manquante
                  </li>
                  <li>
                    une validation se déplace dans la pratique parce que le circuit officiel n’est pas assez fluide
                  </li>
                  <li>une méthode orale remplace peu à peu la méthode écrite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque ajustement peut sembler légitime localement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème est que ces ajustements s’additionnent sans toujours être relus à l’échelle du flux
                  global.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est ainsi que naît l’hétérogénéité :</p>
                <ul className={bulletListClass}>
                  <li>non pas d’un grand choix stratégique</li>
                  <li>
                    mais d’une succession d’adaptations qui n’ont jamais été remises à plat ensemble
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans cadre partagé, les équipes tendent à reconstruire leur propre version du workflow, ce qui réduit
                  la cohérence et la scalabilité du fonctionnement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="signes-title">
                <h2 id="signes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signes qu’il ne s’agit plus d’un simple écart local
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Certaines différences de méthode sont normales.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet devient structurel quand plusieurs signaux apparaissent en même temps.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les mêmes étapes sont traitées différemment selon les équipes
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Même objet, même objectif, mais pas la même séquence, pas le même support, pas la même validation,
                  pas le même niveau d’exigence.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les reprises deviennent normales</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le service suivant reformate, complète, vérifie ou reclasse systématiquement ce qui lui arrive.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les règles changent selon les personnes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une méthode n’est plus vraiment portée par l’organisation, mais par ceux qui l’appliquent.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les nouveaux arrivants apprennent surtout comment ça se fait ici
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Et non pas une logique commune de fonctionnement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le suivi dépend plus des habitudes que du processus
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand il faut connaître les usages implicites de chaque équipe pour faire avancer correctement un
                  sujet, l’harmonisation est déjà insuffisante.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les projets de simplification ou d’outillage patinent
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce qu’avant même de parler solution, il faudrait d’abord stabiliser la manière de travailler.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À ce stade, le sujet n’est plus un irritant mineur. Il devient un sujet d’organisation.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="procedure-title">
                <h2 id="procedure-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi plus de procédure ne suffit pas toujours
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est un point important.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une entreprise identifie une hétérogénéité de méthodes, la première réaction est souvent : il
                  faut formaliser davantage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Parfois, c’est nécessaire. Mais ce n’est pas suffisant.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pourquoi ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce qu’une procédure supplémentaire ne corrige pas automatiquement :
                </p>
                <ul className={bulletListClass}>
                  <li>une pratique réelle qui a divergé</li>
                  <li>une étape qui ne tient pas dans le temps</li>
                  <li>une responsabilité mal placée</li>
                  <li>une contrainte de charge mal intégrée</li>
                  <li>un besoin de coordination insuffisamment pensé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un document peut décrire une méthode. Il ne garantit pas que cette méthode corresponde au réel, ni
                  qu’elle soit tenable dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les approches de BPM insistent justement sur la différence entre documentation théorique et
                  amélioration réelle du processus : la standardisation utile suppose que le workflow documenté soit
                  effectivement suivi, mesurable et améliorable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Autrement dit :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  le vrai sujet n’est pas seulement de documenter.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est de réaligner la méthode officielle et la méthode réelle.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="regarder-title">
                <h2 id="regarder-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut regarder sérieusement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour traiter correctement des méthodes de travail non harmonisées, il faut revenir au fonctionnement
                  concret.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les étapes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quelles sont les étapes réellement suivies ? Dans quel ordre ? Avec quelles variantes ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les règles de passage</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À quel moment un dossier, une donnée, une décision ou une validation change-t-il de main ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les critères de passage sont-ils les mêmes partout ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les supports utilisés</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un même travail passe-t-il par les mêmes supports selon les équipes, ou chacun a-t-il recréé son
                  propre environnement de sécurisation ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les validations</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sont-elles positionnées au même endroit ? Avec la même exigence ? Avec la même lisibilité ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les exceptions</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Combien de variations locales sont devenues de fait la méthode normale ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les effets</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quelles conséquences produisent réellement ces écarts :
                </p>
                <ul className={bulletListClass}>
                  <li>ressaisies</li>
                  <li>pertes de temps</li>
                  <li>différences de qualité</li>
                  <li>retards</li>
                  <li>dépendance à certaines personnes</li>
                  <li>difficulté à piloter</li>
                  <li>difficulté à former</li>
                  <li>difficulté à faire évoluer l’organisation</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est ce travail d’objectivation qui permet de distinguer :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qui relève d’une variation utile</li>
                  <li>de ce qui relève d’une divergence devenue coûteuse</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="eviter-title">
                <h2 id="eviter-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il ne faut pas faire trop vite
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plusieurs réponses peuvent sembler logiques, mais elles sont souvent incomplètes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Imposer une méthode unique sans relire le réel
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On risque de produire une harmonisation théorique, vite contournée ensuite.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Chercher un outil comme réponse principale
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un outil peut aider à stabiliser des pratiques, mais il ne corrige pas à lui seul un désalignement
                  profond des méthodes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Multiplier les contrôles</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand les méthodes divergent, ajouter du contrôle augmente parfois la charge sans corriger la cause.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Réduire le sujet à un problème humain
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les méthodes non harmonisées sont souvent le produit d’une organisation qui a dérivé, pas seulement
                  d’un défaut individuel d’application.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Vouloir tout homogénéiser au même niveau
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Toutes les variations ne sont pas mauvaises.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon enjeu n’est pas l’uniformité absolue.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est la cohérence là où elle est nécessaire.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une intervention utile permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une intervention sérieuse sur ce sujet doit produire autre chose qu’un constat général du type les
                  équipes ne travaillent pas pareil.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle doit permettre de :</p>
                <ul className={bulletListClass}>
                  <li>rendre visibles les écarts réels de méthode</li>
                  <li>comprendre pourquoi ils existent</li>
                  <li>identifier ce qu’ils compensent</li>
                  <li>distinguer les variations utiles des divergences coûteuses</li>
                  <li>clarifier les points de passage et validations</li>
                  <li>hiérarchiser les sujets à réaligner</li>
                  <li>préparer, si nécessaire, une harmonisation ou un cadrage plus structuré</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif n’est pas de normaliser pour normaliser.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’objectif est de redonner :</p>
                <ul className={bulletListClass}>
                  <li>de la cohérence</li>
                  <li>de la lisibilité</li>
                  <li>de la fiabilité</li>
                  <li>une base commune de fonctionnement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand ce travail est bien mené, il améliore à la fois :
                </p>
                <ul className={bulletListClass}>
                  <li>la coordination</li>
                  <li>la qualité</li>
                  <li>la capacité de pilotage</li>
                  <li>la possibilité d’évoluer ensuite sans repartir d’un terrain trop hétérogène</li>
                </ul>
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
                  <li>les équipes traitent les mêmes sujets de manière différente</li>
                  <li>les reprises ou vérifications sont devenues normales</li>
                  <li>les validations changent selon les personnes ou les sites</li>
                  <li>les nouveaux arrivants apprennent surtout des usages locaux</li>
                  <li>les règles officielles ne suffisent plus à décrire le réel</li>
                  <li>le fonctionnement dépend trop de ceux qui savent comment ça se fait</li>
                  <li>les projets d’amélioration butent sur l’hétérogénéité de départ</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si c’est le cas, le problème n’est probablement pas seulement un manque de formalisation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est un problème d’harmonisation réelle des méthodes.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Des méthodes de travail non harmonisées ne créent pas seulement de la variété.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles créent :</p>
                <ul className={bulletListClass}>
                  <li>des reprises</li>
                  <li>des incohérences</li>
                  <li>de la dépendance</li>
                  <li>des pertes de temps</li>
                  <li>une baisse de lisibilité</li>
                  <li>une plus faible capacité à faire évoluer l’organisation proprement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les travaux sur la standardisation et l’amélioration de processus convergent sur ce point : un
                  workflow cohérent améliore la fiabilité, la productivité, la coordination et la visibilité, à
                  condition d’être fondé sur le réel et pas seulement sur une procédure théorique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe n’est donc pas toujours d’ajouter une règle de plus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est souvent de relire comment le travail se fait réellement, où les méthodes divergent,
                  et à partir de quel moment ces écarts cessent d’aider pour commencer à dégrader le fonctionnement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre organisation sent que chacun a sa manière de faire au point que cela crée reprises, flou ou
                  dépendance, c’est souvent qu’un travail de clarification et d’harmonisation devient nécessaire.
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
                    href="/problematiques/organisation-entre-services-inefficace/"
                    className={inlineSeoLinkClass}
                  >
                    organisation entre services inefficace
                  </Link>
                  ,{" "}
                  <Link
                    href="/problematiques/ressaisies-excel-mails-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    ressaisies Excel et mails en PME industrielle
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

          <section
            className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10"
            aria-labelledby="cta-title"
          >
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin d’harmoniser vos méthodes sans rigidifier le terrain ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à objectiver les écarts, réaligner les pratiques et reconstruire un cadre de
                  fonctionnement lisible.
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
