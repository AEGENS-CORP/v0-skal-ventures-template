import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"
const roadmapCardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

export const ModeleExempleRoadmapMeta = {
  title: "Exemple de roadmap projet | AEGENS",
  description:
    "Exemple de roadmap projet pour structurer les étapes, les priorités, les jalons, les dépendances et la logique de mise en œuvre de manière claire et exploitable.",
}

export function ModeleExempleRoadmapPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Modèles & checklists", href: "/modeles-checklists" },
              { label: "Exemple de roadmap projet" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Exemple de roadmap projet
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Une roadmap projet utile ne sert pas à produire un planning propre sur le papier. Elle sert à rendre
                une suite lisible.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Une bonne roadmap ne répond pas seulement à quand va-t-on faire quoi. Elle répond aussi à des questions
                plus structurantes :
              </p>
              <ul className={bulletListClass}>
                <li>dans quel ordre faut-il avancer ?</li>
                <li>quelles sont les vraies priorités ?</li>
                <li>de quoi dépend chaque étape ?</li>
                <li>qu’est-ce qui doit être arbitré avant d’aller plus loin ?</li>
                <li>qu’est-ce qui relève du cadrage, de l’exécution ou de la stabilisation ?</li>
                <li>comment rendre la mise en œuvre réellement tenable ?</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cette page propose une structure claire pour construire une roadmap exploitable, avec un exemple concret
                adapté à des sujets opérationnels, industriels, logistiques ou retail.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">
                    Voir notre offre pilotage
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="role-title">
                <h2 id="role-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  À quoi sert réellement une roadmap projet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le mot roadmap est souvent utilisé de manière floue.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En pratique, une roadmap utile a une fonction précise : elle sert à organiser une trajectoire.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle ne décrit pas seulement des tâches. Elle structure :</p>
                <ul className={bulletListClass}>
                  <li>les étapes</li>
                  <li>les priorités</li>
                  <li>les points de passage</li>
                  <li>les dépendances</li>
                  <li>les arbitrages</li>
                  <li>le rythme logique de mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est ce qui la distingue d’un simple tableau de suivi.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="when-title">
                <h2 id="when-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand une roadmap devient nécessaire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une roadmap devient utile quand un sujet ne peut plus être piloté proprement par une simple to-do
                  list.
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs étapes doivent s’enchaîner dans un ordre cohérent</li>
                  <li>plusieurs équipes sont concernées</li>
                  <li>certaines décisions conditionnent la suite</li>
                  <li>des dépendances existent entre les actions</li>
                  <li>la mise en œuvre doit être structurée dans le temps</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Concrètement, elle est particulièrement utile :</p>
                <ul className={bulletListClass}>
                  <li>après un cadrage</li>
                  <li>après un diagnostic qui débouche sur un projet</li>
                  <li>avant un déploiement</li>
                  <li>quand un projet identifié doit devenir exécutable</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="must-have-title">
                <h2 id="must-have-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une bonne roadmap doit permettre
                </h2>
                <div className="space-y-4">
                  <article className={roadmapCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Donner une lecture simple de la trajectoire</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le projet doit être lisible pour les décideurs comme pour les acteurs opérationnels.</p>
                  </article>
                  <article className={roadmapCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Hiérarchiser les étapes</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Tout ne peut pas être lancé en même temps.</p>
                  </article>
                  <article className={roadmapCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Faire apparaître les dépendances</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Certaines actions restent impossibles tant qu’un arbitrage ou un prérequis n’a pas été traité.</p>
                  </article>
                  <article className={roadmapCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Rendre visibles les jalons</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Un projet a besoin de vrais points de passage : validation, lancement, pilote, déploiement, stabilisation.</p>
                  </article>
                  <article className={roadmapCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Préparer le pilotage</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">La roadmap ne remplace pas le pilotage, elle lui donne un cadre.</p>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="not-title">
                <h2 id="not-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une roadmap ne doit pas être
                </h2>
                <ul className={bulletListClass}>
                  <li>un planning décoratif</li>
                  <li>une liste d’actions sans logique</li>
                  <li>un document trop détaillé pour rester lisible</li>
                  <li>une projection irréaliste de tout ce que l’on aimerait faire</li>
                  <li>un outil de communication qui masque un projet encore non structuré</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une mauvaise roadmap donne une illusion d’avancement. Une bonne roadmap donne une structure crédible à
                  l’avancement réel.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="minimal-structure-title">
                <h2 id="minimal-structure-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La structure minimale d’une roadmap projet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une roadmap exploitable fait apparaître au minimum :</p>
                <ul className={bulletListClass}>
                  <li>les grandes phases</li>
                  <li>les objectifs de chaque phase</li>
                  <li>les jalons clés</li>
                  <li>les actions principales</li>
                  <li>les dépendances</li>
                  <li>les responsables ou contributeurs principaux</li>
                  <li>les points d’arbitrage</li>
                  <li>une temporalité indicative</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon les cas, on peut ajouter : risques, livrables, critères de passage, prérequis de déploiement.</p>
              </section>

              <section className={sectionClass} aria-labelledby="example-title">
                <h2 id="example-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Exemple de roadmap projet
                </h2>

                <article className={roadmapCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Intitulé du projet</h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">Roadmap projet – [Nom du projet]</p>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple : Roadmap projet – Structuration et mise en œuvre d’un nouveau fonctionnement de suivi et de validation.</p>
                </article>

                <article className={roadmapCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Objectif général du projet</h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    L’objectif du projet est de structurer un fonctionnement plus lisible, plus fiable et plus fluide sur
                    le périmètre concerné, en clarifiant les étapes, les responsabilités, les validations et les
                    modalités de suivi.
                  </p>
                </article>

                <article className={roadmapCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Périmètre de la roadmap</h3>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">La roadmap couvre :</p>
                  <ul className={bulletListClass}>
                    <li>la finalisation du cadrage</li>
                    <li>la préparation de la mise en œuvre</li>
                    <li>le déploiement sur le périmètre validé</li>
                    <li>la stabilisation post-déploiement</li>
                  </ul>
                  <p className="ae-text text-base sm:text-lg leading-relaxed">Elle ne couvre pas les extensions non arbitrées ou les sujets périphériques hors phase actuelle.</p>
                </article>

                <article className={roadmapCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Les grandes phases</h3>
                  <ol className="list-decimal pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed marker:text-[#07bc7d]">
                    <li>Finalisation du cadrage</li>
                    <li>Préparation de la mise en œuvre</li>
                    <li>Déploiement pilote</li>
                    <li>Ajustements et stabilisation</li>
                    <li>Déploiement élargi si validé</li>
                  </ol>
                </article>

                <article className={roadmapCardClass}>
                  <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Exemple détaillé de roadmap</h3>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
                      <h4 className="ae-heading text-lg sm:text-xl font-semibold">Phase 1 — Finalisation du cadrage</h4>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Objectif :</strong> valider les éléments structurants avant lancement.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Actions :</strong> confirmer périmètre, objectifs, rôles, contraintes et arbitrer les points ouverts.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Livrables :</strong> cadrage validé, périmètre stabilisé, gouvernance clarifiée.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Jalon :</strong> Cadrage validé.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Vigilance :</strong> ne pas lancer la suite avec des arbitrages structurants ouverts.</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
                      <h4 className="ae-heading text-lg sm:text-xl font-semibold">Phase 2 — Préparation de la mise en œuvre</h4>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Objectif :</strong> créer les conditions concrètes du lancement.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Actions :</strong> préparer supports, séquencement, organisation, dispositif de suivi et prérequis terrain.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Livrables :</strong> plan de mise en œuvre, planning de lancement, dispositif de suivi prêt.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Jalon :</strong> Prêt pour lancement.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Vigilance :</strong> sécuriser les dépendances avant lancement.</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
                      <h4 className="ae-heading text-lg sm:text-xl font-semibold">Phase 3 — Déploiement pilote</h4>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Objectif :</strong> tester le fonctionnement cible dans un cadre maîtrisé.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Actions :</strong> lancer sur périmètre pilote, suivre l’exécution, remonter blocages, documenter écarts et ajustements.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Livrables :</strong> retours structurés, écarts observés, ajustements priorisés.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Jalon :</strong> Pilote réalisé et analysé.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Vigilance :</strong> ne pas confondre pilote et déploiement complet.</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
                      <h4 className="ae-heading text-lg sm:text-xl font-semibold">Phase 4 — Ajustements et stabilisation</h4>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Objectif :</strong> corriger ce que le pilote a révélé et robustifier le fonctionnement.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Actions :</strong> traiter écarts, ajuster méthodes, clarifier points de passage, confirmer conditions de généralisation.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Livrables :</strong> méthode consolidée, points critiques levés, décision sur la suite.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Jalon :</strong> Fonctionnement stabilisé sur périmètre pilote.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Vigilance :</strong> ne pas généraliser trop tôt un dispositif instable.</p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/20 p-4 space-y-2">
                      <h4 className="ae-heading text-lg sm:text-xl font-semibold">Phase 5 — Déploiement élargi</h4>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Objectif :</strong> étendre la mise en œuvre sur le périmètre validé.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Actions :</strong> planifier extension, organiser relais, accompagner équipes, suivre jalons et arbitrages.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Livrables :</strong> déploiement réalisé, suivi consolidé, gouvernance stabilisée.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Jalon :</strong> Déploiement finalisé.</p>
                      <p className="ae-text text-base sm:text-lg leading-relaxed"><strong>Vigilance :</strong> maintenir un pilotage actif jusqu’à stabilisation réelle.</p>
                    </div>
                  </div>
                </article>
              </section>

              <section className={sectionClass} aria-labelledby="table-title">
                <h2 id="table-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Version tableau d’une roadmap
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-white/12 bg-black/20">
                  <table className="min-w-[960px] w-full text-left border-collapse">
                    <thead className="bg-black/35">
                      <tr>
                        <th className="px-4 py-3 ae-heading text-sm">Phase</th>
                        <th className="px-4 py-3 ae-heading text-sm">Objectif</th>
                        <th className="px-4 py-3 ae-heading text-sm">Actions principales</th>
                        <th className="px-4 py-3 ae-heading text-sm">Jalon</th>
                        <th className="px-4 py-3 ae-heading text-sm">Responsable principal</th>
                        <th className="px-4 py-3 ae-heading text-sm">Dépendances</th>
                        <th className="px-4 py-3 ae-heading text-sm">Points de vigilance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 ae-text">Finalisation du cadrage</td>
                        <td className="px-4 py-3 ae-text">Stabiliser le sujet</td>
                        <td className="px-4 py-3 ae-text">Valider périmètre, rôles, contraintes, arbitrages</td>
                        <td className="px-4 py-3 ae-text">Cadrage validé</td>
                        <td className="px-4 py-3 ae-text">Sponsor / pilote projet</td>
                        <td className="px-4 py-3 ae-text">Décisions de fond</td>
                        <td className="px-4 py-3 ae-text">Périmètre encore mouvant</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 ae-text">Préparation</td>
                        <td className="px-4 py-3 ae-text">Créer les conditions du lancement</td>
                        <td className="px-4 py-3 ae-text">Préparer supports, organisation, plan de mise en œuvre</td>
                        <td className="px-4 py-3 ae-text">Prêt pour lancement</td>
                        <td className="px-4 py-3 ae-text">Pilote projet</td>
                        <td className="px-4 py-3 ae-text">Cadrage validé</td>
                        <td className="px-4 py-3 ae-text">Charge interne</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 ae-text">Pilote</td>
                        <td className="px-4 py-3 ae-text">Tester le dispositif</td>
                        <td className="px-4 py-3 ae-text">Lancer, suivre, observer, ajuster</td>
                        <td className="px-4 py-3 ae-text">Pilote réalisé</td>
                        <td className="px-4 py-3 ae-text">Pilote + terrain</td>
                        <td className="px-4 py-3 ae-text">Préparation terminée</td>
                        <td className="px-4 py-3 ae-text">Écarts réel / prévu</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 ae-text">Stabilisation</td>
                        <td className="px-4 py-3 ae-text">Corriger et consolider</td>
                        <td className="px-4 py-3 ae-text">Ajuster méthode, clarifier passages, lever points critiques</td>
                        <td className="px-4 py-3 ae-text">Fonctionnement stabilisé</td>
                        <td className="px-4 py-3 ae-text">Pilote + responsables métiers</td>
                        <td className="px-4 py-3 ae-text">Retours pilote</td>
                        <td className="px-4 py-3 ae-text">Généralisation trop rapide</td>
                      </tr>
                      <tr className="border-t border-white/10">
                        <td className="px-4 py-3 ae-text">Déploiement élargi</td>
                        <td className="px-4 py-3 ae-text">Étendre proprement</td>
                        <td className="px-4 py-3 ae-text">Organiser extension, suivre jalons, arbitrer</td>
                        <td className="px-4 py-3 ae-text">Déploiement finalisé</td>
                        <td className="px-4 py-3 ae-text">Pilote + management</td>
                        <td className="px-4 py-3 ae-text">Stabilisation validée</td>
                        <td className="px-4 py-3 ae-text">Perte de lisibilité</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="always-title">
                <h2 id="always-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les éléments à toujours faire apparaître
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <strong>Les dépendances :</strong> ce qui ne peut pas démarrer avant validation ou préparation d’un
                    autre point.
                  </li>
                  <li>
                    <strong>Les points d’arbitrage :</strong> les moments où la décision de poursuivre dépend d’un choix
                    explicite.
                  </li>
                  <li>
                    <strong>Les jalons :</strong> les vrais passages de phase, pas seulement des dates arbitraires.
                  </li>
                  <li>
                    <strong>Les responsabilités :</strong> même en macro, il faut savoir qui porte quoi.
                  </li>
                  <li>
                    <strong>Les conditions de réussite :</strong> ce qui rend la suite possible.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="quality-title">
                <h2 id="quality-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si votre roadmap est bonne
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une bonne roadmap permet de répondre clairement à ces questions :</p>
                <ul className={bulletListClass}>
                  <li>comprend-on l’ordre logique du projet ?</li>
                  <li>voit-on les grandes étapes sans être noyé dans le détail ?</li>
                  <li>distingue-t-on ce qui est prêt de ce qui dépend encore d’un arbitrage ?</li>
                  <li>les dépendances apparaissent-elles clairement ?</li>
                  <li>le passage entre phases est-il compréhensible ?</li>
                  <li>aide-t-elle réellement au pilotage, et pas seulement à la présentation ?</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="errors-title">
                <h2 id="errors-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  <li>Confondre roadmap et liste d’actions</li>
                  <li>Vouloir détailler trop tôt</li>
                  <li>Masquer les points encore ouverts</li>
                  <li>Mélanger vision globale et périmètre immédiat</li>
                  <li>Oublier la phase de stabilisation</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un exemple de roadmap projet utile doit montrer :</p>
                <ul className={bulletListClass}>
                  <li>les grandes phases</li>
                  <li>les objectifs de chaque phase</li>
                  <li>les actions principales</li>
                  <li>les jalons</li>
                  <li>les dépendances</li>
                  <li>les responsabilités</li>
                  <li>les points de vigilance</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La bonne roadmap n’est pas celle qui fait planning. C’est celle qui rend le projet plus lisible, plus
                  ordonné et plus tenable dans la mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Liens utiles :</p>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/modeles-checklists/trame-diagnostic-operationnel/" className={inlineSeoLinkClass}>
                      Trame de diagnostic opérationnel
                    </Link>
                  </li>
                  <li>
                    <Link href="/modeles-checklists/checklist-cadrage-projet-industriel/" className={inlineSeoLinkClass}>
                      Checklist de cadrage de projet industriel
                    </Link>
                  </li>
                  <li>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                      Offre cadrage projet industriel
                    </Link>
                  </li>
                  <li>
                    <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                      Offre pilotage de mise en œuvre
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources/comment-piloter-un-projet-industriel-en-pme/" className={inlineSeoLinkClass}>
                      Comment piloter un projet industriel en PME
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/" className={inlineSeoLinkClass}>
                      Contact
                    </Link>
                  </li>
                </ul>
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
                  Besoin de structurer votre trajectoire projet ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à transformer un sujet cadré en roadmap réellement exploitable.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={primaryButtonClass}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={darkButtonClass}>
                    <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">
                      Voir notre offre pilotage
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
