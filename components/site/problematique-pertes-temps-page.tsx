import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ProblematiquePertesTempsMeta = {
  title: "Pertes de temps entre services en industrie | AEGENS",
  description:
    "Comprendre les pertes de temps entre services en industrie : causes réelles, signaux faibles, impacts opérationnels et leviers de structuration.",
}

export function ProblematiquePertesTempsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Problématiques", href: "/problematiques" },
              { label: "Pertes de temps entre services en industrie" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Pertes de temps entre services en industrie
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans beaucoup d’entreprises industrielles, les pertes de temps ne viennent pas d’un seul grand
                dysfonctionnement visible.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elles viennent d’une accumulation de décalages plus discrets :
              </p>
              <ul className={bulletListClass}>
                <li>une information qui n’arrive pas au bon moment</li>
                <li>une validation qui reste en attente</li>
                <li>une reprise manuelle devenue habituelle</li>
                <li>une consigne reformulée plusieurs fois</li>
                <li>un passage de relais qui dépend trop des personnes</li>
                <li>
                  une étape qui fonctionne à peu près, mais pas assez proprement pour tenir dans la durée
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Pris séparément, chacun de ces écarts peut sembler supportable.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Pris ensemble, ils finissent par peser lourd :
              </p>
              <ul className={bulletListClass}>
                <li>sur le rythme</li>
                <li>sur la qualité de coordination</li>
                <li>sur la charge des équipes</li>
                <li>sur la lisibilité du fonctionnement</li>
                <li>au fond, sur la capacité de l’entreprise à exécuter proprement</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">C’est ce qui rend le sujet difficile.</p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Les pertes de temps entre services ne se présentent pas toujours comme un problème projet clairement
                nommé. Elles s’installent souvent dans le quotidien. Elles deviennent normales. Elles sont compensées
                localement. Elles sont parfois connues de tous, mais rarement objectivées de manière suffisamment
                structurée pour être réellement traitées.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est généralement à ce moment-là qu’un regard extérieur devient utile.
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
              <section className={sectionClass} aria-labelledby="profondeur-title">
                <h2 id="profondeur-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce sujet est plus profond qu’il n’en a l’air
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une entreprise parle de pertes de temps entre services, elle décrit souvent un effet avant de
                  décrire une cause.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ce qu’elle voit, ce sont par exemple :</p>
                <ul className={bulletListClass}>
                  <li>des délais inutiles</li>
                  <li>des relances répétées</li>
                  <li>des validations qui se croisent mal</li>
                  <li>des ressaisies</li>
                  <li>des échanges incomplets</li>
                  <li>des allers-retours évitables</li>
                  <li>des zones de flou sur qui doit faire quoi</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais derrière ces effets, le sujet réel est souvent plus structurant.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les pertes de temps apparaissent rarement par hasard.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles révèlent le plus souvent une combinaison de plusieurs facteurs :
                </p>
                <ul className={bulletListClass}>
                  <li>méthodes de travail non alignées</li>
                  <li>responsabilités insuffisamment explicites</li>
                  <li>circulation de l’information peu stabilisée</li>
                  <li>interfaces mal tenues entre fonctions</li>
                  <li>pratiques locales devenues la norme</li>
                  <li>logique d’ensemble devenue moins lisible avec le temps</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, la perte de temps n’est souvent pas le problème principal.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle est le symptôme visible d’un fonctionnement qui demande à être relu plus sérieusement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="realite-title">
                <h2 id="realite-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment ces pertes de temps apparaissent dans la réalité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans l’industrie, les pertes de temps entre services prennent rarement une seule forme.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles apparaissent souvent dans les moments de passage :
                </p>
                <ul className={bulletListClass}>
                  <li>entre production et logistique</li>
                  <li>entre atelier et administratif</li>
                  <li>entre qualité et opérationnel</li>
                  <li>entre commerce, approvisionnement et exécution</li>
                  <li>entre terrain et encadrement</li>
                  <li>
                    entre équipes qui dépendent les unes des autres sans toujours partager la même lecture du travail
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles se traduisent alors par des situations très concrètes :
                </p>
                <ul className={bulletListClass}>
                  <li>une donnée demandée plusieurs fois</li>
                  <li>une instruction reformulée à chaque étape</li>
                  <li>une décision qui attend parce qu’elle ne sait pas à qui remonter</li>
                  <li>une validation faite trop tard</li>
                  <li>un fichier repris parce qu’on ne fait pas confiance à l’information précédente</li>
                  <li>un suivi parallèle créé localement pour sécuriser le travail</li>
                  <li>une équipe qui compense les faiblesses d’une autre sans que cela soit réellement visible</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème, c’est que ces situations deviennent vite structurelles.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles ne sont plus vécues comme des anomalies.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles deviennent la manière normale de faire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Et c’est précisément là que l’entreprise commence à payer un coût caché :
                </p>
                <ul className={bulletListClass}>
                  <li>plus de temps passé</li>
                  <li>plus de charge mentale</li>
                  <li>moins de fluidité</li>
                  <li>plus de dépendance à certaines personnes</li>
                  <li>moins de lisibilité globale sur le fonctionnement réel</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="signes-title">
                <h2 id="signes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signes qu’il ne s’agit plus d’un simple irritant
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Toutes les pertes de temps ne justifient pas une intervention spécifique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais certains signes montrent que le sujet a dépassé le niveau de l’irritant local.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le premier signe</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les mêmes difficultés reviennent, quel que soit le moment ou les personnes présentes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une perte de temps se répète de manière stable, elle relève rarement d’un accident ponctuel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle signale généralement un problème de fonctionnement plus profond.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le deuxième signe</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les équipes ont développé leurs propres contournements.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela peut prendre plusieurs formes :
                </p>
                <ul className={bulletListClass}>
                  <li>fichiers parallèles</li>
                  <li>suivis personnels</li>
                  <li>validations informelles</li>
                  <li>relances manuelles</li>
                  <li>double saisie au cas où</li>
                  <li>règles locales non formalisées</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand ces contournements se multiplient, cela signifie souvent que l’organisation officielle ne
                  suffit plus à sécuriser le travail réel.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le troisième signe</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Personne ne sait vraiment où se situe la cause principale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Tout le monde voit les effets.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Mais les explications divergent :</p>
                <ul className={bulletListClass}>
                  <li>pour les uns, c’est un problème d’outil</li>
                  <li>pour les autres, un problème de méthode</li>
                  <li>pour d’autres encore, un problème de coordination ou de responsabilité</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand les lectures divergent ainsi, un travail d’objectivation devient souvent nécessaire.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le quatrième signe</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet pèse sur plusieurs services à la fois.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant qu’un problème reste très local, il peut parfois être traité localement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais lorsqu’il traverse plusieurs équipes, il faut généralement revenir à la logique d’ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>où l’information circule-t-elle mal ?</li>
                  <li>où les responsabilités deviennent-elles floues ?</li>
                  <li>où les validations ralentissent-elles ?</li>
                  <li>où les reprises apparaissent-elles ?</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le cinquième signe</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le coût devient diffus mais réel.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il n’est pas toujours mesuré en euros directement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Mais il se voit dans :</p>
                <ul className={bulletListClass}>
                  <li>le temps perdu</li>
                  <li>la fatigue organisationnelle</li>
                  <li>les relances</li>
                  <li>la difficulté à prioriser</li>
                  <li>la saturation de certaines personnes</li>
                  <li>la faiblesse de la traçabilité</li>
                  <li>le manque de confiance dans les informations transmises</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À ce stade, le sujet mérite rarement une simple correction locale.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="inside-title">
                <h2 id="inside-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ces pertes de temps sont difficiles à traiter de l’intérieur
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est un point important.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Lorsqu’un fonctionnement dégradé dure, les équipes développent naturellement des solutions de
                  continuité. Elles s’adaptent. Elles compensent. Elles trouvent des raccourcis. Elles recréent de la
                  fiabilité là où le système en manque.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ce comportement est rationnel.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il permet au travail de continuer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais il a un effet secondaire : il rend le problème plus difficile à lire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pourquoi ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce que l’organisation visible n’est plus exactement l’organisation réelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce qui est prévu et ce qui se passe effectivement commencent à s’éloigner :
                </p>
                <ul className={bulletListClass}>
                  <li>les étapes formelles ne décrivent plus complètement le travail</li>
                  <li>les responsabilités théoriques ne suffisent plus à expliquer qui fait quoi</li>
                  <li>les outils en place ne disent pas toujours où se trouvent les vraies reprises</li>
                  <li>
                    les difficultés se répartissent dans le quotidien, sans toujours remonter comme un sujet unique
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type de situation, l’entreprise ne manque pas d’informations.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle manque souvent d’une lecture structurée de ce qu’elles veulent dire ensemble.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est précisément là qu’une remise à plat devient utile.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="look-title">
                <h2 id="look-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut regarder pour traiter le sujet correctement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand des pertes de temps apparaissent entre services, la tentation est souvent de chercher une cause
                  unique :
                </p>
                <ul className={bulletListClass}>
                  <li>l’outil</li>
                  <li>une équipe</li>
                  <li>un défaut de rigueur</li>
                  <li>un manque de communication</li>
                  <li>une procédure</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En réalité, il faut regarder plusieurs dimensions en même temps.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les méthodes de travail</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les équipes travaillent-elles réellement selon la même logique ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les étapes sont-elles comprises de la même manière ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les pratiques ont-elles divergé ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les points de passage</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À quels moments le travail change-t-il de main ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces passages sont-ils suffisamment préparés, documentés et visibles ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La circulation de l’information</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quelle information circule ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Sous quelle forme ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Avec quel niveau de fiabilité ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Qui la transforme ? Qui la valide ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Qui la reprend ?</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les responsabilités</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À quel moment sait-on clairement qui porte la suite ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Y a-t-il des zones où plusieurs acteurs se sentent partiellement responsables sans qu’aucun ne le
                  soit réellement ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les contournements</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quelles pratiques parallèles ont été créées pour compenser le fonctionnement existant ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces contournements sont-ils devenus indispensables ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Que révèlent-ils ?</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le niveau réel du sujet</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">S’agit-il :</p>
                <ul className={bulletListClass}>
                  <li>d’un ajustement local</li>
                  <li>d’un besoin d’harmonisation</li>
                  <li>d’un problème de coordination plus large</li>
                  <li>d’un sujet qui demande un vrai travail de diagnostic et de cadrage</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que ces questions ne sont pas posées sérieusement, les pertes de temps risquent d’être traitées
                  de manière trop superficielle.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="avoid-title">
                <h2 id="avoid-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il ne faut pas faire trop vite
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plusieurs réactions reviennent souvent, mais elles ne sont pas toujours les bonnes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Chercher immédiatement un outil</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une réaction fréquente.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Or un outil peut améliorer certaines choses, mais il ne corrige pas automatiquement :
                </p>
                <ul className={bulletListClass}>
                  <li>une méthode floue</li>
                  <li>un passage de relais mal défini</li>
                  <li>une responsabilité mal posée</li>
                  <li>un besoin encore mal compris</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Désigner un service comme cause du problème
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les pertes de temps entre services sont rarement le produit d’un seul service défaillant.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles apparaissent plus souvent dans les interfaces, donc dans des zones partagées.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Corriger uniquement les symptômes visibles
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Supprimer une double saisie ou raccourcir une validation peut être utile, mais si le fonctionnement
                  d’ensemble reste inchangé, le problème réapparaîtra souvent ailleurs.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Lancer un projet trop large trop tôt
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À l’inverse, transformer trop vite le sujet en grande initiative de transformation peut être une
                  erreur si la base n’est pas encore assez claire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon niveau de réponse dépend toujours de la qualité de lecture du sujet.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="reveal-title">
                <h2 id="reveal-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ce problème révèle souvent
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Lorsqu’il est bien analysé, ce type de sujet révèle généralement l’un ou plusieurs des points
                  suivants :
                </p>
                <ul className={bulletListClass}>
                  <li>un besoin de clarification des méthodes</li>
                  <li>un besoin d’harmonisation entre équipes</li>
                  <li>une insuffisance de lisibilité sur les étapes et validations</li>
                  <li>une circulation d’information devenue trop dépendante d’habitudes locales</li>
                  <li>une organisation trop compensée par l’humain</li>
                  <li>un besoin de structuration avant toute décision plus lourde</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pour cela qu’il faut traiter les pertes de temps non comme un irritant isolé, mais comme un
                  indicateur du fonctionnement réel.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-utile-title">
                <h2 id="intervention-utile-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une intervention utile permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une intervention sérieuse sur ce sujet ne consiste pas à produire une liste de dysfonctionnements.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle doit permettre plusieurs choses :
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Objectiver</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Faire apparaître clairement où les pertes de temps se produisent, à quel moment et dans quelles
                  logiques.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Requalifier</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Distinguer ce qui relève :</p>
                <ul className={bulletListClass}>
                  <li>d’une méthode</li>
                  <li>d’une interface</li>
                  <li>d’une responsabilité</li>
                  <li>d’une validation</li>
                  <li>d’un besoin de simplification</li>
                  <li>d’un besoin de structuration plus large</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Hiérarchiser</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Toutes les pertes de temps n’ont pas le même poids.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il faut faire ressortir celles qui justifient réellement une action.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Préparer la suite</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon le niveau du sujet, la suite peut prendre plusieurs formes :
                </p>
                <ul className={bulletListClass}>
                  <li>clarification de méthodes</li>
                  <li>harmonisation</li>
                  <li>cadrage plus poussé</li>
                  <li>cahier des charges</li>
                  <li>projet de mise en œuvre plus structuré</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une bonne intervention ne traite donc pas seulement le présent.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle prépare une suite adaptée au bon niveau du problème.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="concerned-title">
                <h2 id="concerned-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous êtes concerné
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet mérite généralement un vrai travail de fond quand plusieurs réponses à ces questions sont
                  oui :
                </p>
                <ul className={bulletListClass}>
                  <li>les mêmes pertes de temps reviennent régulièrement</li>
                  <li>plusieurs équipes sont concernées</li>
                  <li>chacun compense localement pour faire avancer le travail</li>
                  <li>des ressaisies ou validations inutiles se sont installées</li>
                  <li>les responsabilités ou points de passage manquent de lisibilité</li>
                  <li>le sujet pèse sur la charge, le rythme ou la fluidité</li>
                  <li>mais il n’a pas encore été objectivé proprement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si c’est le cas, le problème n’est probablement plus un simple irritant quotidien.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il devient un sujet d’organisation et de fonctionnement.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les pertes de temps entre services en industrie ne relèvent pas seulement d’un manque de rapidité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles révèlent souvent :</p>
                <ul className={bulletListClass}>
                  <li>un fonctionnement trop compensé</li>
                  <li>des méthodes insuffisamment alignées</li>
                  <li>des passages mal tenus</li>
                  <li>une circulation d’information peu stabilisée</li>
                  <li>une organisation qui a perdu une partie de sa lisibilité</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe n’est donc pas toujours d’aller tout de suite vers une solution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est souvent de revenir au réel :
                </p>
                <ul className={bulletListClass}>
                  <li>comprendre où le temps se perd</li>
                  <li>pourquoi il se perd</li>
                  <li>ce que cela révèle</li>
                  <li>quel niveau de réponse est réellement nécessaire</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si ce sujet devient récurrent dans votre organisation, c’est souvent qu’il ne doit plus être traité
                  comme un irritant isolé, mais comme un vrai sujet de diagnostic et de structuration.
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
                    href="/problematiques/organisation-entre-services-inefficace/"
                    className={inlineSeoLinkClass}
                  >
                    organisation entre services inefficace
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
                  Besoin d’objectiver les pertes de temps entre services ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier les causes, hiérarchiser les leviers et structurer une suite utile.
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
