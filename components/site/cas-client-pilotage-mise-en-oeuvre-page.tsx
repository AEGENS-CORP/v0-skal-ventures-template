import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"
const blockCardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

export const CasClientPilotageMiseEnOeuvreMeta = {
  title: "Pilotage de mise en œuvre d’un projet opérationnel | Cas client AEGENS",
  description:
    "Comment AEGENS a accompagné le pilotage de mise en œuvre d’un projet opérationnel pour structurer l’avancement, coordonner les acteurs et sécuriser l’exécution.",
}

export function CasClientPilotageMiseEnOeuvrePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Cas clients", href: "/cas-clients" },
              { label: "Pilotage de mise en œuvre d’un projet opérationnel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Pilotage de mise en œuvre d’un projet opérationnel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un projet ne devient pas solide parce qu’il a été bien pensé.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il devient solide quand il continue à tenir une fois entré dans l’exécution.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est souvent à ce moment-là que les difficultés apparaissent.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le besoin a été identifié. Le sujet a été validé. Une direction a été prise. Des acteurs sont
                mobilisés. Parfois même, un prestataire ou une solution ont déjà été choisis.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Sur le papier, le projet existe donc déjà.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais entre cette existence sur le papier et une mise en œuvre réellement tenue, il y a un écart que
                beaucoup d’entreprises sous-estiment :
              </p>
              <ul className={bulletListClass}>
                <li>les arbitrages ne remontent pas toujours au bon moment</li>
                <li>les responsabilités sont moins claires qu’elles ne devraient</li>
                <li>certaines actions avancent, d’autres restent en attente</li>
                <li>les dépendances deviennent plus visibles</li>
                <li>le rythme se déforme</li>
                <li>le projet commence à vivre par fragments, au lieu de suivre une trajectoire lisible</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est dans ce type de situation que nous sommes intervenus.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le projet n’avait pas besoin d’être redéfini à la base. Il avait besoin d’être tenu.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L’enjeu n’était donc pas d’ajouter une couche de pilotage abstraite. L’enjeu était de donner à la
                mise en œuvre :
              </p>
              <ul className={bulletListClass}>
                <li>une continuité</li>
                <li>une coordination</li>
                <li>une lecture plus claire</li>
                <li>une capacité d’arbitrage plus propre</li>
              </ul>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">Voir notre approche pilotage</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="context-title">
                <h2 id="context-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le contexte de départ
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’entreprise entrait dans une phase où le projet devait cesser d’être seulement un sujet validé pour
                  devenir un sujet réellement mis en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le besoin existait. Les grandes orientations avaient été posées. Le projet n’était plus au stade de
                  l’idée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais plusieurs facteurs rendaient la suite plus délicate :
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs acteurs devaient intervenir</li>
                  <li>certaines décisions restaient dépendantes les unes des autres</li>
                  <li>l’avancement réel n’était pas toujours lisible au même niveau pour tous</li>
                  <li>la coordination entre les parties prenantes demandait plus de structure</li>
                  <li>le risque existait de voir le projet progresser sans cohérence d’ensemble</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une situation fréquente.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet peut être légitime, correctement lancé et malgré tout perdre en qualité au moment de
                  l’exécution. Non pas parce que les équipes manquent de compétence ou d’engagement, mais parce que la
                  phase de mise en œuvre demande une discipline différente :
                </p>
                <ul className={bulletListClass}>
                  <li>tenir le rythme</li>
                  <li>clarifier les responsabilités</li>
                  <li>rendre visibles les dépendances</li>
                  <li>faire remonter les points de vigilance</li>
                  <li>ne pas laisser les arbitrages critiques se diluer dans le quotidien</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ici, la question n’était plus : faut-il faire ce projet ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La question était devenue : comment faire en sorte qu’il avance dans de bonnes conditions ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="situation-title">
                <h2 id="situation-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La situation à traiter
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le projet se trouvait dans une zone sensible : celle où les intentions sont claires, mais où
                  l’exécution commence à produire ses propres contraintes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plusieurs besoins apparaissaient simultanément.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  D’abord, un besoin de lecture.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le projet avançait, mais tout le monde n’en avait pas exactement la même vision :
                </p>
                <ul className={bulletListClass}>
                  <li>certains voyaient surtout les actions déjà engagées</li>
                  <li>d’autres voyaient surtout les points en attente</li>
                  <li>d’autres encore étaient mobilisés localement, sans lecture globale suffisamment consolidée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Ensuite, un besoin de coordination.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le projet n’était pas porté par une seule action isolée. Il impliquait :
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs interlocuteurs</li>
                  <li>plusieurs étapes</li>
                  <li>plusieurs dépendances</li>
                  <li>des décisions à articuler dans le bon ordre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Enfin, un besoin de tenue.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup de projets, le risque n’est pas l’arrêt brutal. Le risque est plus discret : le projet
                  continue, mais de manière trop irrégulière, trop partielle ou trop dépendante de relances
                  informelles. Il reste vivant, mais sa cohérence s’affaiblit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est précisément cette zone que la mission devait traiter.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="goal-title">
                <h2 id="goal-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  L’objectif de la mission
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif n’était pas de reprendre le projet au sens d’une refonte complète.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif était de structurer son pilotage pour que la mise en œuvre puisse :
                </p>
                <ul className={bulletListClass}>
                  <li>rester lisible</li>
                  <li>garder un rythme</li>
                  <li>faire remonter les bons sujets</li>
                  <li>produire une exécution mieux tenue</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plus concrètement, la mission visait à :
                </p>
                <ul className={bulletListClass}>
                  <li>clarifier l’état réel d’avancement</li>
                  <li>organiser un mode de pilotage plus lisible</li>
                  <li>mieux coordonner les acteurs impliqués</li>
                  <li>rendre visibles les sujets en attente d’arbitrage</li>
                  <li>suivre les points de vigilance</li>
                  <li>maintenir une continuité entre décisions, actions et exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, il ne s’agissait pas de gérer plus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il s’agissait de mieux tenir ce qui devait déjà avancer.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre intervention
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention a porté sur la phase la plus concrète du projet : celle où il faut faire tenir
                  ensemble l’ensemble des éléments qui conditionnent la mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela a reposé sur plusieurs axes.
                </p>

                <article className={blockCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                    Clarifier la lecture de l’avancement
                  </h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Le premier travail a consisté à remettre à plat l’avancement réel du projet.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">Ce point est essentiel.</p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Un projet n’avance pas parce qu’un planning existe. Il avance quand il est possible de dire
                    clairement :
                  </p>
                  <ul className={bulletListClass}>
                    <li>ce qui est fait</li>
                    <li>ce qui est en cours</li>
                    <li>ce qui est en attente</li>
                    <li>ce qui dépend d’un arbitrage</li>
                    <li>ce qui bloque</li>
                    <li>ce qui doit être engagé ensuite</li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Nous avons donc travaillé à produire une lecture plus structurée de la situation :
                  </p>
                  <ul className={bulletListClass}>
                    <li>jalons réels</li>
                    <li>actions engagées</li>
                    <li>points ouverts</li>
                    <li>sujets sensibles</li>
                    <li>articulation entre étapes</li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    L’objectif n’était pas de créer un tableau supplémentaire.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    L’objectif était de rendre l’avancement lisible pour permettre les bonnes décisions.
                  </p>
                </article>

                <article className={blockCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Structurer la coordination</h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Le deuxième axe a porté sur la coordination entre acteurs.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Dans les projets opérationnels, le besoin de coordination est souvent sous-estimé au départ.
                    Chacun sait globalement ce qu’il doit faire, mais la difficulté vient de ce qui se passe entre les
                    actions :
                  </p>
                  <ul className={bulletListClass}>
                    <li>les passages de relais</li>
                    <li>les validations</li>
                    <li>les interfaces</li>
                    <li>les dépendances</li>
                    <li>les retours attendus</li>
                    <li>les délais implicites</li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Une partie importante du pilotage consiste justement à traiter cette matière intermédiaire.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Dans cette mission, il a donc fallu :
                  </p>
                  <ul className={bulletListClass}>
                    <li>clarifier qui intervenait à quel moment</li>
                    <li>organiser des points utiles plutôt que simplement fréquents</li>
                    <li>rendre explicites les dépendances</li>
                    <li>faire apparaître les sujets qui nécessitaient réellement une décision</li>
                  </ul>
                </article>

                <article className={blockCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Rendre visibles les arbitrages</h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Un projet se fragilise vite quand les arbitrages arrivent trop tard ou de manière trop diffuse.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Nous avons donc travaillé à faire ressortir :
                  </p>
                  <ul className={bulletListClass}>
                    <li>les décisions qui devaient être prises</li>
                    <li>leur niveau d’importance</li>
                    <li>leur impact sur la suite</li>
                    <li>le bon moment pour les traiter</li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Cela a permis d’éviter deux dérives classiques :
                  </p>
                  <ul className={bulletListClass}>
                    <li>laisser des sujets importants en suspens trop longtemps</li>
                    <li>surcharger les échanges avec des questions qui ne relevaient pas encore d’un vrai arbitrage</li>
                  </ul>
                </article>

                <article className={blockCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                    Maintenir la continuité du projet
                  </h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Enfin, la mission a consisté à tenir la continuité globale.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    C’est souvent le rôle le moins visible, mais l’un des plus importants.
                  </p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Dans les projets de mise en œuvre, il ne suffit pas que des actions existent. Il faut aussi
                    qu’elles gardent une cohérence d’ensemble :
                  </p>
                  <ul className={bulletListClass}>
                    <li>avec le besoin initial</li>
                    <li>avec les décisions prises</li>
                    <li>avec les contraintes du terrain</li>
                    <li>avec la logique d’avancement</li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    C’est cette continuité qui permet au projet de ne pas se transformer en juxtaposition de tâches ou
                    de réunions, mais de rester un véritable projet.
                  </p>
                </article>
              </section>

              <section className={sectionClass} aria-labelledby="apports-title">
                <h2 id="apports-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui a été apporté
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La valeur de la mission ne s’est pas située dans une méthode de pilotage abstraite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle s’est située dans des effets très concrets sur la qualité de mise en œuvre.
                </p>
                <div className="space-y-4">
                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Une lecture plus fiable du projet</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le projet a gagné en lisibilité.</p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Il devenait plus facile de dire :</p>
                    <ul className={bulletListClass}>
                      <li>où il en était réellement</li>
                      <li>ce qui avançait</li>
                      <li>ce qui devait encore être traité</li>
                      <li>ce qui appelait une vigilance particulière</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette qualité de lecture change beaucoup de choses :
                    </p>
                    <ul className={bulletListClass}>
                      <li>les décisions deviennent plus justes</li>
                      <li>les acteurs se coordonnent mieux</li>
                      <li>les écarts sont vus plus tôt</li>
                      <li>le projet cesse de dépendre uniquement de perceptions partielles</li>
                    </ul>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Une coordination plus structurée</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      La mission a permis de mieux articuler les acteurs impliqués.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Cela a eu plusieurs effets :</p>
                    <ul className={bulletListClass}>
                      <li>moins de flottement entre étapes</li>
                      <li>meilleure visibilité sur les dépendances</li>
                      <li>plus de clarté sur les attentes</li>
                      <li>des échanges plus directement utiles à l’avancement</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le projet n’était plus seulement suivi. Il était davantage orchestré.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Des arbitrages mieux préparés</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      En rendant visibles les décisions à prendre, la mission a permis de réduire une partie de
                      l’incertitude.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le sujet devenait moins dépendant de relances ponctuelles ou d’interprétations locales.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il gagnait en capacité à faire émerger les bons arbitrages au bon moment.
                    </p>
                  </article>

                  <article className={blockCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Une mise en œuvre plus tenue</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le bénéfice principal est souvent là.</p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un projet bien piloté n’avance pas seulement plus vite. Il avance avec plus de continuité.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      C’est cette continuité qui donne ensuite une impression de solidité :
                    </p>
                    <ul className={bulletListClass}>
                      <li>les sujets sont portés</li>
                      <li>les écarts sont vus</li>
                      <li>les prochaines étapes sont préparées</li>
                      <li>la coordination ne repose pas uniquement sur la bonne volonté</li>
                      <li>l’exécution reste connectée à la logique du projet</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="changes-title">
                <h2 id="changes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que cela a changé pour l’entreprise
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Avant la mission :</p>
                <ul className={bulletListClass}>
                  <li>le projet existait</li>
                  <li>la mise en œuvre était engagée</li>
                  <li>le besoin de pilotage structuré devenait plus visible</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Après intervention :</p>
                <ul className={bulletListClass}>
                  <li>l’avancement était mieux lu</li>
                  <li>la coordination était plus lisible</li>
                  <li>les arbitrages remontaient mieux</li>
                  <li>les points sensibles étaient plus clairement identifiés</li>
                  <li>la mise en œuvre pouvait se poursuivre dans un cadre plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’entreprise n’a pas seulement gagné un suivi de projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle a gagné :</p>
                <ul className={bulletListClass}>
                  <li>une meilleure tenue</li>
                  <li>une meilleure lecture</li>
                  <li>une meilleure capacité à faire avancer un sujet déjà engagé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une différence importante.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage utile ne crée pas artificiellement du mouvement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il donne au mouvement existant la structure nécessaire pour rester cohérent.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="decisive-title">
                <h2 id="decisive-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette phase était décisive
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La phase de mise en œuvre est souvent celle où les projets perdent une partie de leur qualité
                  initiale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ce n’est pas parce qu’ils sont mal pensés.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est parce qu’ils ne sont pas assez tenus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Beaucoup de sujets se fragilisent à cet endroit précis :
                </p>
                <ul className={bulletListClass}>
                  <li>le besoin avait été correctement identifié</li>
                  <li>les décisions principales existaient</li>
                  <li>les équipes étaient mobilisées</li>
                  <li>la continuité entre les étapes n’était pas suffisamment structurée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi cette mission a été décisive.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle a permis de traiter le vrai sujet du moment : non plus que faut-il faire, mais comment faire en
                  sorte que ce qui doit être fait avance réellement, au bon rythme, avec la bonne coordination et dans
                  un cadre lisible ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="shows-title">
                <h2 id="shows-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ce cas montre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce cas montre plusieurs choses importantes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">Premièrement</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le passage à la mise en œuvre ne se pilote pas tout seul.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le fait qu’un projet ait été validé ne suffit pas à garantir qu’il avancera correctement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">Deuxièmement</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage n’est pas une couche administrative.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est une fonction de continuité, de coordination et de tenue.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">Troisièmement</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une mission de pilotage utile n’a pas besoin de prendre toute la place pour créer de la valeur.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle crée de la valeur quand elle rend le projet :
                </p>
                <ul className={bulletListClass}>
                  <li>plus lisible</li>
                  <li>plus cohérent</li>
                  <li>plus arbitrable</li>
                  <li>plus exécutable</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Autrement dit :
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  le projet n’a pas été redéfini ; il a été mieux tenu.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans cette mission, l’enjeu n’était pas de relancer un projet en difficulté majeure.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’enjeu était d’éviter qu’un projet engagé perde en qualité au moment de sa mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’intervention a permis de :
                </p>
                <ul className={bulletListClass}>
                  <li>clarifier l’avancement réel</li>
                  <li>structurer la coordination</li>
                  <li>faire remonter les arbitrages utiles</li>
                  <li>suivre les points de vigilance</li>
                  <li>maintenir une continuité plus forte entre décisions, actions et exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre entreprise a déjà lancé un projet mais sent que sa mise en œuvre devient plus difficile à
                  tenir, plus diffuse ou moins lisible, c’est souvent qu’un vrai travail de pilotage devient
                  nécessaire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                    offre pilotage de mise en œuvre
                  </Link>
                  ,{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    notre méthode
                  </Link>
                  ,{" "}
                  <Link href="/ressources/comment-piloter-un-projet-industriel-en-pme/" className={inlineSeoLinkClass}>
                    comment piloter un projet industriel en PME
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
                  Besoin de mieux tenir la mise en œuvre de votre projet ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à structurer l’avancement, coordonner les acteurs et sécuriser l’exécution.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">
                      Découvrir notre offre pilotage
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
