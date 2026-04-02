import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"
const cardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

type FamilyCard = {
  title: string
  paragraphs?: string[]
  points?: string[]
}

const criteriaFamilies: FamilyCard[] = [
  {
    title: "1. Compréhension du besoin",
    paragraphs: [
      "C’est souvent le critère le plus sous-estimé alors qu’il est central.",
      "Une solution techniquement séduisante mais construite sur une mauvaise lecture du besoin reste une mauvaise réponse.",
    ],
    points: [
      "le prestataire ou la solution répond-il réellement au besoin ?",
      "la reformulation du sujet est-elle juste ?",
      "les enjeux et contraintes sont-ils compris ?",
    ],
  },
  {
    title: "2. Couverture fonctionnelle ou couverture du périmètre",
    paragraphs: ["C’est un critère majeur dans les comparaisons de solutions et de prestataires."],
    points: [
      "ce qui est couvert",
      "ce qui ne l’est pas",
      "ce qui suppose des adaptations",
      "ce qui reste à la charge du client",
    ],
  },
  {
    title: "3. Méthode d’intervention ou logique de mise en œuvre",
    points: [
      "la méthode",
      "le séquencement",
      "la logique d’intervention",
      "la qualité de la trajectoire proposée",
      "la lisibilité des étapes",
    ],
  },
  {
    title: "4. Faisabilité",
    points: [
      "la capacité réelle à mettre en œuvre",
      "la compatibilité avec vos ressources",
      "le réalisme du calendrier",
      "la charge de déploiement",
      "les dépendances éventuelles",
    ],
  },
  {
    title: "5. Charge côté client",
    paragraphs: ["Critère souvent négligé."],
    points: [
      "récupération de données",
      "coordination",
      "recette",
      "documentation",
      "conduite du changement",
      "pilotage quotidien",
    ],
  },
  {
    title: "6. Qualité de l’équipe",
    paragraphs: ["Dans le cas d’un prestataire, il faut distinguer la marque de l’équipe réellement mobilisée."],
    points: [
      "expérience pertinente",
      "niveau de séniorité",
      "stabilité de l’équipe",
      "qualité des profils affectés",
    ],
  },
  {
    title: "7. Robustesse / pérennité",
    points: [
      "fiabilité",
      "maintenabilité",
      "capacité d’évolution",
      "solidité du dispositif",
      "qualité du support ou du suivi",
    ],
  },
  {
    title: "8. Coût global",
    paragraphs: ["Il ne faut pas regarder seulement le prix facial."],
    points: [
      "coût de la prestation",
      "coût de déploiement",
      "coût d’intégration",
      "charge interne",
      "coûts récurrents éventuels",
      "coûts indirects",
    ],
  },
  {
    title: "9. Risque",
    points: [
      "risque de calendrier",
      "risque d’intégration",
      "risque de dépendance",
      "risque de surcharge",
      "risque d’appropriation faible",
    ],
  },
  {
    title: "10. Adéquation au contexte",
    paragraphs: ["Très important dans les projets industriels ou organisationnels."],
    points: [
      "la connaissance du contexte",
      "la compréhension des contraintes métier",
      "la capacité à travailler dans un environnement proche du vôtre",
      "la pertinence sectorielle ou opérationnelle",
    ],
  },
]

const commonErrors = [
  "Construire la matrice après lecture des offres : on rationalise a posteriori une préférence déjà formée.",
  "Mettre trop de critères : une matrice de 18 critères donne une illusion de finesse mais nuit à la lisibilité.",
  "Sous-définir les critères : un critère intitulé qualité sans description claire ne sert pas vraiment.",
  "Surpondérer le prix : l’offre économiquement la plus avantageuse n’est pas nécessairement la moins chère.",
  "Oublier la charge interne : c’est l’un des angles morts les plus fréquents.",
  "Noter sans justifier : une note sans commentaire devient vite inutile si la décision est re-questionnée.",
  "Mélanger critères de fond et éléments de forme : la présentation ne doit pas peser autant que la couverture réelle du besoin.",
]

const readyToUseSteps = [
  "Étape 1 — Lister les offres comparées : Offre A, Offre B, Offre C.",
  "Étape 2 — Définir les critères : Compréhension du besoin, Couverture du périmètre, Méthode, Faisabilité, Charge interne, Équipe, Robustesse, Coût global.",
  "Étape 3 — Définir les poids : exemple 20 / 20 / 15 / 10 / 10 / 10 / 5 / 10.",
  "Étape 4 — Définir l’échelle : 0 à 5 ou 0 à 10.",
  "Étape 5 — Noter avec justification : note, commentaire, point de vigilance éventuel pour chaque critère.",
  "Étape 6 — Calculer le score pondéré : score = note × poids.",
  "Étape 7 — Relire le résultat : réserves, critères majeurs, écarts non compensables, hypothèses.",
]

export const ModeleMatriceCriteresMeta = {
  title: "Matrice de critères pour choisir une solution ou un prestataire | AEGENS",
  description:
    "Modèle complet de matrice de critères pour comparer une solution ou un prestataire : pondération, critères, méthode de scoring, erreurs à éviter et exemple d’utilisation.",
}

export function ModeleMatriceCriteresPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Modèles & checklists", href: "/modeles-checklists" },
              { label: "Matrice de critères pour choisir une solution ou un prestataire" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Matrice de critères pour choisir une solution ou un prestataire
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Comparer plusieurs solutions ou plusieurs prestataires sans matrice de critères revient souvent à
                déplacer le problème au lieu de le résoudre.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                En apparence, tout est sous contrôle :
              </p>
              <ul className={bulletListClass}>
                <li>le besoin est formulé</li>
                <li>plusieurs offres sont reçues</li>
                <li>les échanges avancent</li>
                <li>des arguments circulent</li>
                <li>un prix ressort</li>
                <li>une préférence se dessine</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais en l’absence d’une grille claire, la décision repose souvent sur un mélange instable de :
              </p>
              <ul className={bulletListClass}>
                <li>perception</li>
                <li>aisance commerciale</li>
                <li>réputation</li>
                <li>préférence implicite</li>
                <li>intuition technique</li>
                <li>pression du calendrier</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Une matrice de critères sert précisément à éviter cela.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle ne décide pas à la place de l’entreprise. Elle ne remplace ni le jugement, ni l’expérience, ni
                les arbitrages. En revanche, elle permet de rendre ces arbitrages :
              </p>
              <ul className={bulletListClass}>
                <li>plus lisibles</li>
                <li>plus cohérents</li>
                <li>plus défendables</li>
                <li>plus reliés au besoin réel</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, une matrice de critères est utile quand on veut répondre sérieusement à cette question :
                sur quelle base allons-nous comparer, hiérarchiser et décider ?
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/modeles-checklists/checklist-consultation-prestataires/">
                    Voir la checklist consultation
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="why-title">
                <h2 id="why-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi une matrice est nécessaire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans matrice, plusieurs dérives apparaissent très vite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La première est la comparaison inégale : deux offres peuvent sembler parler du même sujet alors
                  qu’elles ne répondent pas au même périmètre et ne transfèrent pas la même charge côté client.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La deuxième est l’illusion du prix comme critère principal : l’offre économiquement la plus
                  avantageuse n’est pas automatiquement la moins chère.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La troisième est la dérive des critères après réception des offres : on invente a posteriori les
                  critères qui justifieront le choix pressenti, au lieu de les fixer avant.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La quatrième est la confusion entre besoin et préférence : une matrice bien construite force à
                  revenir à la question de fond, ce qui compte vraiment pour ce projet.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="good-matrix-title">
                <h2 id="good-matrix-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’est une bonne matrice de critères
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une bonne matrice n’est pas un tableau compliqué. C’est un outil de décision sobre, rigoureux et
                  exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle doit permettre de :</p>
                <ul className={bulletListClass}>
                  <li>lister les critères réellement importants</li>
                  <li>distinguer leur niveau d’importance</li>
                  <li>noter chaque solution ou prestataire sur une base cohérente</li>
                  <li>expliciter les écarts</li>
                  <li>rendre visible le raisonnement qui conduit à la décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En pratique, une matrice sérieuse comporte généralement des critères, une pondération, une échelle de
                  notation, une méthode d’interprétation et une trace des justifications.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="dont-title">
                <h2 id="dont-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une matrice ne doit pas faire
                </h2>
                <ul className={bulletListClass}>
                  <li>créer une illusion de précision</li>
                  <li>masquer un besoin mal formulé</li>
                  <li>compenser une consultation mal préparée</li>
                  <li>transformer un choix de fond en automatisme mathématique</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle ne sert pas à faire scientifique. Elle sert à rendre les arbitrages plus propres.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si le besoin reste flou, la meilleure matrice du monde ne corrigera pas ce problème.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La condition préalable reste donc la même : besoin clarifié, périmètre posé, contraintes visibles et
                  attendus suffisamment formalisés.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="when-title">
                <h2 id="when-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand utiliser une matrice de critères
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une matrice devient particulièrement utile quand :
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs solutions semblent recevables</li>
                  <li>plusieurs prestataires répondent à un même besoin</li>
                  <li>le projet engage plusieurs parties prenantes</li>
                  <li>le prix ne peut pas être lu seul</li>
                  <li>la décision doit être justifiée</li>
                  <li>le besoin est important, structurant ou engageant</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle est particulièrement pertinente dans les projets industriels, logistiques, retail,
                  organisationnels ou à forte dimension transverse.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="rules-title">
                <h2 id="rules-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les 5 règles avant de construire la matrice
                </h2>
                <div className="space-y-4">
                  <article className={cardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Le besoin doit être clair</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Une matrice compare des réponses à un besoin. Elle ne clarifie pas le besoin à la place du
                      cadrage.
                    </p>
                  </article>
                  <article className={cardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      2. Les critères doivent être liés au projet réel
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il ne faut pas partir d’une liste générique. Il faut partir de ce qui compte vraiment pour le
                      sujet.
                    </p>
                  </article>
                  <article className={cardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      3. Les critères doivent être définis avant lecture finale des offres
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Sinon, la matrice devient un habillage a posteriori.
                    </p>
                  </article>
                  <article className={cardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      4. Le prix doit être traité comme un critère parmi d’autres
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le prix doit être converti en note dans une logique cohérente avec la pondération globale.
                    </p>
                  </article>
                  <article className={cardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      5. Les justifications doivent être gardées
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Une note sans commentaire devient vite contestable ou inutilisable quelques semaines plus tard.
                    </p>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="minimal-title">
                <h2 id="minimal-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La structure minimale d’une matrice sérieuse
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une matrice exploitable comporte au minimum les colonnes suivantes :
                </p>
                <ul className={bulletListClass}>
                  <li>Critère</li>
                  <li>Description du critère</li>
                  <li>Poids</li>
                  <li>Solution / prestataire A</li>
                  <li>Note A</li>
                  <li>Justification A</li>
                  <li>Solution / prestataire B</li>
                  <li>Note B</li>
                  <li>Justification B</li>
                  <li>Solution / prestataire C</li>
                  <li>Note C</li>
                  <li>Justification C</li>
                  <li>Score pondéré</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon le contexte, on peut ajouter :
                </p>
                <ul className={bulletListClass}>
                  <li>un critère éliminatoire</li>
                  <li>une colonne points de vigilance</li>
                  <li>une colonne hypothèses</li>
                  <li>une colonne charge interne requise</li>
                  <li>une colonne conditions de réussite</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="families-title">
                <h2 id="families-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les familles de critères à considérer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les critères pertinents dépendent du projet. Mais on retrouve très souvent les familles suivantes.
                </p>
                <div className="space-y-4">
                  {criteriaFamilies.map((family) => (
                    <article key={family.title} className={cardClass}>
                      <h3 className="ae-heading text-xl sm:text-2xl font-semibold">{family.title}</h3>
                      {family.paragraphs?.map((paragraph) => (
                        <p key={`${family.title}-${paragraph}`} className="ae-text text-base sm:text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      {family.points ? (
                        <ul className={bulletListClass}>
                          {family.points.map((point) => (
                            <li key={`${family.title}-${point}`}>{point}</li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="example-title">
                <h2 id="example-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Exemple de matrice de critères
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Voici un exemple simple de structure.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Critères proposés
                </p>
                <ul className={bulletListClass}>
                  <li>Compréhension du besoin</li>
                  <li>Couverture du périmètre</li>
                  <li>Méthode / logique de mise en œuvre</li>
                  <li>Faisabilité / réalisme</li>
                  <li>Charge côté client</li>
                  <li>Qualité de l’équipe</li>
                  <li>Robustesse / pérennité</li>
                  <li>Coût global</li>
                </ul>

                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Exemple de pondération
                </p>
                <ul className={bulletListClass}>
                  <li>Compréhension du besoin : 20 %</li>
                  <li>Couverture du périmètre : 20 %</li>
                  <li>Méthode / logique de mise en œuvre : 15 %</li>
                  <li>Faisabilité / réalisme : 10 %</li>
                  <li>Charge côté client : 10 %</li>
                  <li>Qualité de l’équipe : 10 %</li>
                  <li>Robustesse / pérennité : 5 %</li>
                  <li>Coût global : 10 %</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce n’est qu’un exemple. La pondération doit toujours refléter le projet réel.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="weight-title">
                <h2 id="weight-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment pondérer correctement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La pondération est souvent plus importante que la note elle-même. Elle oblige à hiérarchiser ce qui
                  compte vraiment.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une bonne pondération suppose de répondre à cette question : si deux offres se valent globalement,
                  sur quels points accepterions-nous le moins de compromis ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">Bonnes pratiques</p>
                <ul className={bulletListClass}>
                  <li>limiter le nombre de critères</li>
                  <li>éviter de donner le même poids à tout</li>
                  <li>distinguer les critères majeurs des critères secondaires</li>
                  <li>tester si la pondération correspond réellement à la décision à défendre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Mauvaises pratiques
                </p>
                <ul className={bulletListClass}>
                  <li>12 critères tous entre 8 % et 10 %</li>
                  <li>prix dominant alors que le risque principal n’est pas là</li>
                  <li>critère très pondéré mais mal défini</li>
                  <li>pondération inventée après lecture des offres</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="scale-title">
                <h2 id="scale-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quelle échelle de notation utiliser
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le plus simple est souvent le mieux.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une échelle de 0 à 5 ou 0 à 10 est généralement suffisante.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Exemple d’échelle de 0 à 5
                </p>
                <ul className={bulletListClass}>
                  <li>0 : ne répond pas</li>
                  <li>1 : réponse très insuffisante</li>
                  <li>2 : réponse partielle</li>
                  <li>3 : réponse correcte</li>
                  <li>4 : réponse solide</li>
                  <li>5 : réponse très forte</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’important est que les personnes qui évaluent partagent la même interprétation.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="price-title">
                <h2 id="price-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment noter le prix avec rigueur
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le prix est souvent le critère le plus mal traité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un usage privé ou B2B, on peut retenir une logique simple :
                </p>
                <ul className={bulletListClass}>
                  <li>meilleure note au prix le plus bas</li>
                  <li>puis notation relative des autres offres</li>
                  <li>à condition que le périmètre soit comparable</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais il faut rester prudent :
                </p>
                <ul className={bulletListClass}>
                  <li>si les périmètres diffèrent, la comparaison brute du prix devient trompeuse</li>
                  <li>
                    si une offre inclut plus d’accompagnement ou transfère moins de charge au client, le prix doit
                    être lu en coût global
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  On ne note correctement le prix qu’après avoir sécurisé la comparabilité du périmètre.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="gaps-title">
                <h2 id="gaps-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment lire les écarts
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une matrice n’est utile que si elle permet de lire les écarts intelligemment.
                </p>
                <ul className={bulletListClass}>
                  <li>écart faible sur un critère secondaire</li>
                  <li>écart significatif sur un critère majeur</li>
                  <li>faiblesse rédhibitoire</li>
                  <li>faiblesse compensable</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi il est utile d’ajouter des commentaires, des points de vigilance et parfois une
                  colonne réserve majeure / point bloquant.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="elimination-title">
                <h2 id="elimination-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les critères éliminatoires
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tous les critères ne doivent pas forcément être traités par simple pondération. Certains peuvent
                  être éliminatoires.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Exemples :</p>
                <ul className={bulletListClass}>
                  <li>absence de compréhension du besoin</li>
                  <li>non-couverture d’un périmètre indispensable</li>
                  <li>calendrier irréaliste</li>
                  <li>équipe non identifiable</li>
                  <li>non-compatibilité avec une contrainte critique</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il faut le dire explicitement dans la logique d’analyse, sinon un bon score global peut masquer un
                  point inacceptable.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="errors-title">
                <h2 id="errors-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  {commonErrors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="ready-title">
                <h2 id="ready-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Exemple de matrice prête à l’emploi
                </h2>
                <ul className={bulletListClass}>
                  {readyToUseSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="quality-title">
                <h2 id="quality-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si la matrice est bonne
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une bonne matrice permet de répondre clairement à ces questions :
                </p>
                <ul className={bulletListClass}>
                  <li>reflète-t-elle vraiment les priorités du projet ?</li>
                  <li>aide-t-elle à comparer sur le fond ?</li>
                  <li>rend-elle visibles les écarts importants ?</li>
                  <li>évite-t-elle que le prix écrase tout ?</li>
                  <li>
                    permet-elle d’expliquer la décision à froid, dans deux semaines, ou devant un comité de décision ?
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si oui, elle joue bien son rôle. Si elle est trop compliquée, trop générique ou trop peu reliée au
                  besoin réel, elle devient une formalité de plus.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une matrice de critères utile sert à comparer une solution ou un prestataire sur une base claire,
                  pondérée, justifiée et directement liée au besoin réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle doit permettre de :</p>
                <ul className={bulletListClass}>
                  <li>hiérarchiser les critères</li>
                  <li>
                    évaluer la compréhension, la couverture, la méthode, la faisabilité, la charge interne, l’équipe,
                    la robustesse et le coût global
                  </li>
                  <li>rendre visibles les écarts</li>
                  <li>sécuriser la décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle ne remplace pas le jugement. Mais elle rend le jugement plus propre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/modeles-checklists/checklist-consultation-prestataires/"
                    className={inlineSeoLinkClass}
                  >
                    checklist consultation prestataires
                  </Link>
                  ,{" "}
                  <Link
                    href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    comment choisir un prestataire
                  </Link>
                  ,{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage de projet industriel
                  </Link>
                  ,{" "}
                  <Link
                    href="/cas-clients/structuration-dun-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    cas client structuration avant consultation
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
                  Besoin de comparer plusieurs options sur une base solide ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à structurer la matrice, pondérer les critères et sécuriser la décision.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/modeles-checklists/checklist-consultation-prestataires/">
                      Vérifier la checklist consultation
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
