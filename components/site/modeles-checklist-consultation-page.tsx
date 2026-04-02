import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"
const checklistCardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

type ChecklistBlock = {
  title: string
  points: string[]
}

type ChecklistItem = {
  title: string
  intro: string[]
  blocks: ChecklistBlock[]
  takeaway: string
}

const checklistItems: ChecklistItem[] = [
  {
    title: "1. Le besoin est-il réellement clarifié avant consultation ?",
    intro: [
      "Avant de consulter, il faut pouvoir expliquer clairement ce que l’on cherche à traiter.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Peut-on décrire en quelques phrases le besoin réel ?",
          "Le problème traité est-il distinct de la solution imaginée ?",
          "Les acteurs internes formulent-ils le sujet de manière cohérente ?",
          "Le besoin a-t-il été reformulé à partir du fonctionnement réel et non d’une intuition générale ?",
          "Ce besoin est-il suffisamment mûr pour être exposé à des prestataires ?",
        ],
      },
      {
        title: "Signaux faibles d’un besoin encore insuffisamment préparé",
        points: [
          "le sujet est présenté surtout à travers un outil ou une solution déjà choisie",
          "les objectifs changent selon l’interlocuteur",
          "on veut voir ce que proposent les prestataires pour clarifier le besoin à leur place",
          "il existe encore trop d’implicite sur le problème réel",
        ],
      },
    ],
    takeaway:
      "Une consultation ne doit pas servir à découvrir le besoin. Elle doit servir à comparer des réponses à un besoin déjà clarifié.",
  },
  {
    title: "2. Le périmètre de la consultation est-il défini ?",
    intro: ["Une consultation devient vite peu exploitable quand le périmètre reste mouvant."],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Sait-on ce qui entre dans la consultation ?",
          "Sait-on ce qui n’y entre pas ?",
          "Le périmètre fonctionnel est-il posé ?",
          "Les sites, équipes, flux ou processus concernés sont-ils identifiés ?",
          "Les limites entre phase actuelle et phases ultérieures sont-elles explicites ?",
        ],
      },
      {
        title: "Signaux faibles d’un périmètre mal posé",
        points: [
          "la même consultation mélange besoin immédiat et vision cible très large",
          "les interlocuteurs n’ont pas la même lecture de ce qui est inclus",
          "certaines demandes annexes risquent de se greffer en cours de comparaison",
          "les prestataires pourraient répondre à des objets différents tout en semblant parler du même sujet",
        ],
      },
    ],
    takeaway:
      "Un périmètre mal défini produit des réponses hétérogènes et rend la comparaison plus fragile.",
  },
  {
    title: "3. Le niveau de maturité du sujet est-il suffisant ?",
    intro: ["Toutes les consultations ne doivent pas être lancées au même stade."],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Le sujet est-il encore en exploration ou déjà prêt à être comparé ?",
          "Les arbitrages majeurs ont-ils été posés ?",
          "Le besoin est-il assez stable pour qu’une consultation ait du sens ?",
          "Cherche-t-on à consulter pour décider, ou à consulter pour comprendre le sujet ?",
        ],
      },
      {
        title: "Signaux faibles d’une consultation trop précoce",
        points: [
          "plusieurs décisions structurantes ne sont pas encore prises",
          "les scénarios restent trop ouverts",
          "le besoin dépend encore d’un diagnostic plus approfondi",
          "l’entreprise attend de la consultation qu’elle remplace un vrai travail de cadrage",
        ],
      },
    ],
    takeaway:
      "Consulter trop tôt dégrade la qualité des réponses et de la comparaison.",
  },
  {
    title: "4. Le document de consultation est-il exploitable ?",
    intro: [
      "Il ne suffit pas d’avoir un document. Il faut qu’il permette de répondre correctement.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Le cahier des charges ou document équivalent est-il clair ?",
          "Le contexte est-il expliqué ?",
          "Les objectifs sont-ils formulés ?",
          "Les contraintes sont-elles explicitées ?",
          "Les livrables attendus sont-ils identifiés ?",
          "Le niveau de détail est-il suffisant pour comprendre le besoin sans le surcharger inutilement ?",
        ],
      },
      {
        title: "Signaux faibles d’un document insuffisant",
        points: [
          "trop de généralités",
          "trop de détails techniques sans clarification fonctionnelle",
          "informations essentielles connues seulement à l’oral",
          "ambiguïtés sur le besoin, les usages, les contraintes ou les attendus",
        ],
      },
    ],
    takeaway:
      "Un bon document de consultation ne sert pas à impressionner, mais à rendre le besoin lisible et exploitable.",
  },
  {
    title: "5. Les contraintes sont-elles visibles pour les prestataires ?",
    intro: [
      "Une offre peut sembler excellente tout en étant inutilisable si les contraintes réelles n’ont pas été rendues visibles.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Les contraintes de calendrier sont-elles connues ?",
          "Les contraintes de charge interne sont-elles explicitées ?",
          "Les contraintes d’intégration ou de coexistence avec l’existant sont-elles décrites ?",
          "Les contraintes de déploiement, de disponibilité ou de coordination sont-elles posées ?",
          "Les limites budgétaires ou d’enveloppe sont-elles traitées au bon niveau ?",
        ],
      },
      {
        title: "Familles de contraintes à vérifier",
        points: [
          "calendrier",
          "ressources internes",
          "environnement existant",
          "dépendances avec d’autres projets",
          "contraintes opérationnelles",
          "contraintes réglementaires ou de conformité si nécessaire",
          "niveau d’accompagnement attendu",
        ],
      },
    ],
    takeaway:
      "Des contraintes non exprimées réapparaissent ensuite sous forme d’écarts, de renégociations ou de déception sur la réponse.",
  },
  {
    title: "6. Les attendus de réponse sont-ils définis ?",
    intro: [
      "Si chaque prestataire répond dans un format totalement libre, comparer le fond devient plus difficile.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Le format de réponse demandé est-il clair ?",
          "Demande-t-on aux prestataires d’expliquer leur compréhension du besoin ?",
          "Les éléments attendus dans la proposition sont-ils listés ?",
          "Les livrables, la méthode, l’équipe, le planning et les hypothèses doivent-ils être présentés ?",
          "Les limites de prestation doivent-elles être explicitées ?",
        ],
      },
      {
        title: "Ce qu’il est utile de demander",
        points: [
          "compréhension du besoin",
          "périmètre de la réponse",
          "méthode d’intervention",
          "équipe mobilisée",
          "livrables",
          "planning ou séquencement",
          "hypothèses",
          "points de vigilance",
          "coût global et hypothèses de prix",
        ],
      },
    ],
    takeaway:
      "Une consultation bien préparée rend les réponses comparables en amont, pas seulement après coup.",
  },
  {
    title: "7. Les critères de choix sont-ils posés avant réception des offres ?",
    intro: ["C’est l’un des points les plus critiques."],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Les critères d’évaluation existent-ils déjà ?",
          "Leur hiérarchie est-elle connue ?",
          "Les critères majeurs sont-ils distingués des critères secondaires ?",
          "Les critères sont-ils liés au besoin réel ?",
          "Le prix est-il remis à sa juste place dans l’ensemble ?",
        ],
      },
      {
        title: "Critères fréquents à considérer",
        points: [
          "compréhension du besoin",
          "qualité de la réponse au périmètre",
          "méthode proposée",
          "expérience pertinente",
          "qualité de l’équipe",
          "faisabilité du dispositif",
          "simplicité de mise en œuvre",
          "charge transférée au client",
          "coût global",
          "calendrier",
        ],
      },
    ],
    takeaway:
      "Les critères doivent être objectifs, précis, liés à l’objet de la consultation, et définis en amont.",
  },
  {
    title: "8. Le prix est-il traité correctement ?",
    intro: ["Le prix compte, mais il ne peut pas être lu seul."],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Compare-t-on le prix à périmètre comparable ?",
          "Le coût total est-il lisible ?",
          "Les hypothèses de prix sont-elles explicitées ?",
          "Les éventuels coûts cachés ou reports de charge sur l’interne sont-ils identifiés ?",
          "Le prix est-il comparé avec la méthode, les livrables et le niveau d’accompagnement ?",
        ],
      },
      {
        title: "Signaux faibles d’une mauvaise lecture du prix",
        points: [
          "offres peu comparables dans leur contenu",
          "prix bas mais périmètre réduit",
          "prix attractif mais forte dépendance à l’interne",
          "prix complet mais hypothèses insuffisamment explicitées",
        ],
      },
    ],
    takeaway:
      "Le prix ne vaut qu’en lien avec le besoin, le périmètre et les conditions d’exécution.",
  },
  {
    title: "9. L’équipe proposée sera-t-elle réellement celle qui interviendra ?",
    intro: [
      "Une offre est souvent portée par une structure, mais la mission est exécutée par des personnes.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Les profils réellement mobilisés sont-ils identifiés ?",
          "Le niveau d’expérience de l’équipe est-il cohérent avec le sujet ?",
          "Le rôle de chaque intervenant est-il lisible ?",
          "Les compétences critiques sont-elles bien couvertes ?",
          "Le dispositif proposé est-il stable ou très dépendant d’une seule personne ?",
        ],
      },
    ],
    takeaway:
      "La qualité d’une proposition ne suffit pas ; il faut savoir qui la portera réellement dans l’exécution.",
  },
  {
    title: "10. Les hypothèses et limites sont-elles visibles ?",
    intro: [
      "Une bonne réponse n’est pas celle qui prétend tout couvrir sans réserve. C’est celle qui rend visibles ses hypothèses et ses limites.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Les hypothèses de départ sont-elles explicitées ?",
          "Le prestataire indique-t-il ce qu’il suppose vrai pour construire sa réponse ?",
          "Les limites de son intervention sont-elles clairement formulées ?",
          "Les dépendances vis-à-vis du client sont-elles visibles ?",
          "Les zones qui demandent encore arbitrage sont-elles nommées ?",
        ],
      },
    ],
    takeaway:
      "Une réponse trop lisse peut masquer des zones d’incertitude qui réapparaîtront ensuite.",
  },
  {
    title: "11. La méthode de comparaison des offres est-elle prête ?",
    intro: ["Comparer des offres ne s’improvise pas."],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Une grille de comparaison existe-t-elle ?",
          "Les notes ou appréciations seront-elles justifiées ?",
          "Les points éliminatoires sont-ils connus ?",
          "Les écarts seront-ils analysés sur le fond, et pas seulement sur la forme ?",
          "Les décisions seront-elles prises de manière cohérente avec les critères posés ?",
        ],
      },
    ],
    takeaway:
      "Une consultation solide demande non seulement des critères, mais aussi une vraie méthode d’examen des offres.",
  },
  {
    title: "12. La gouvernance interne de la consultation est-elle claire ?",
    intro: [
      "Une consultation peut être bien préparée sur le papier et se fragiliser côté client si la gouvernance interne est floue.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Sait-on qui pilote la consultation ?",
          "Sait-on qui lit les offres ?",
          "Sait-on qui arbitre ?",
          "Les métiers, utilisateurs et décideurs sont-ils associés au bon niveau ?",
          "Le processus de décision est-il explicite ?",
        ],
      },
    ],
    takeaway:
      "Une mauvaise gouvernance interne produit souvent des comparaisons incomplètes, des lectures divergentes ou des arbitrages tardifs.",
  },
  {
    title: "13. Les échanges avec les prestataires sont-ils cadrés ?",
    intro: [
      "Selon le type de consultation, des échanges peuvent être utiles. Mais ils doivent rester utiles et maîtrisés.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Les questions / réponses seront-elles partagées proprement ?",
          "Les clarifications seront-elles tracées ?",
          "Le niveau d’information transmis sera-t-il cohérent entre prestataires ?",
          "Les échanges servent-ils à clarifier, et non à refaire le cadrage de fond ?",
        ],
      },
    ],
    takeaway:
      "Les échanges avec les prestataires doivent améliorer la compréhension du besoin, pas réparer une préparation insuffisante.",
  },
  {
    title: "14. La consultation est-elle proportionnée au sujet ?",
    intro: [
      "Une consultation trop légère fragilise la décision. Une consultation trop lourde épuise le marché et les équipes.",
    ],
    blocks: [
      {
        title: "Questions à se poser",
        points: [
          "Le nombre de prestataires consultés est-il adapté ?",
          "Le niveau de détail demandé est-il proportionné ?",
          "La charge de réponse demandée est-elle justifiée ?",
          "Les délais de réponse sont-ils réalistes ?",
          "La profondeur d’analyse correspond-elle à l’importance réelle du projet ?",
        ],
      },
    ],
    takeaway:
      "La consultation doit rester proportionnée : ni trop légère, ni inutilement lourde.",
  },
  {
    title: "15. La consultation est-elle vraiment prête à partir ?",
    intro: ["C’est la question finale."],
    blocks: [
      {
        title: "Avant lancement, doit-on pouvoir répondre oui à ceci ?",
        points: [
          "le besoin est clair",
          "le périmètre est posé",
          "les contraintes sont visibles",
          "les attendus de réponse sont définis",
          "les critères de choix sont prêts",
          "la méthode de comparaison existe",
          "la gouvernance interne est claire",
          "la consultation est proportionnée",
          "les offres pourront être comparées sur une base homogène",
        ],
      },
    ],
    takeaway:
      "Si plusieurs de ces réponses restent incertaines, le vrai sujet est encore un sujet de cadrage, pas une consultation prête.",
  },
]

const shortChecklist = [
  "le besoin est-il clarifié ?",
  "le périmètre est-il défini ?",
  "le niveau de maturité du sujet est-il suffisant ?",
  "le document de consultation est-il exploitable ?",
  "les contraintes sont-elles visibles ?",
  "les attendus de réponse sont-ils définis ?",
  "les critères de choix sont-ils posés ?",
  "le prix sera-t-il lu correctement ?",
  "l’équipe réellement mobilisée est-elle identifiable ?",
  "les hypothèses et limites sont-elles visibles ?",
  "la méthode de comparaison est-elle prête ?",
  "la gouvernance interne est-elle claire ?",
  "les échanges seront-ils cadrés ?",
  "la consultation est-elle proportionnée ?",
  "la consultation est-elle réellement prête à partir ?",
]

export const ModeleChecklistConsultationMeta = {
  title: "Checklist consultation prestataires | AEGENS",
  description:
    "Checklist complète pour préparer une consultation de prestataires : besoin, périmètre, critères, attendus, comparaison des offres et erreurs à éviter.",
}

export function ModeleChecklistConsultationPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Modèles & checklists", href: "/modeles-checklists" },
              { label: "Checklist consultation prestataires" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Checklist consultation prestataires
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Une consultation de prestataires bien menée ne commence pas quand le dossier est envoyé. Elle commence
                quand le besoin est suffisamment clair pour que les réponses puissent être comprises, comparées et
                décidées sur une base sérieuse.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, une consultation est fragile bien avant la réception des offres si :
              </p>
              <ul className={bulletListClass}>
                <li>le besoin reste trop flou</li>
                <li>le périmètre n’est pas stabilisé</li>
                <li>les attendus ne sont pas assez précis</li>
                <li>les critères de comparaison ne sont pas définis en amont</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cette checklist a donc un objectif simple : vérifier si votre consultation est réellement prête, ou si
                elle risque encore de produire des réponses difficilement comparables, partiellement hors sujet, ou
                trompeuses dans leur apparente précision.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/">
                    Voir la méthode de choix prestataire
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="usage-title">
                <h2 id="usage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment utiliser cette checklist
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette checklist ne sert pas à cocher vite pour lancer plus tôt. Elle sert à tester la solidité du
                  travail amont.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En pratique :</p>
                <ul className={bulletListClass}>
                  <li>
                    si la majorité des réponses est claire et documentée, la consultation est probablement prête
                  </li>
                  <li>
                    si plusieurs réponses restent imprécises, le besoin doit encore être structuré
                  </li>
                  <li>
                    si les réponses divergent fortement selon les interlocuteurs internes, la consultation ferait
                    ressortir le même problème côté prestataires
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour consolider l&apos;amont, appuyez-vous sur{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    l’offre de cadrage de projet industriel
                  </Link>{" "}
                  et sur{" "}
                  <Link
                    href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    la ressource dédiée au choix de prestataire
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="checklist-title">
                <h2 id="checklist-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Checklist complète
                </h2>
                <div className="space-y-4">
                  {checklistItems.map((item) => (
                    <article key={item.title} className={checklistCardClass}>
                      <h3 className="ae-heading text-xl sm:text-2xl font-semibold">{item.title}</h3>
                      {item.intro.map((paragraph) => (
                        <p key={paragraph} className="ae-text text-base sm:text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                      {item.blocks.map((block) => (
                        <div key={`${item.title}-${block.title}`} className="space-y-2">
                          <p className="ae-text text-base sm:text-lg leading-relaxed">{block.title}</p>
                          <ul className={bulletListClass}>
                            {block.points.map((point) => (
                              <li key={`${item.title}-${block.title}-${point}`}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                        À retenir : {item.takeaway}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="short-title">
                <h2 id="short-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Version courte de la checklist
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Checklist consultation prestataires
                </p>
                <ul className={bulletListClass}>
                  {shortChecklist.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une consultation de prestataires sérieuse ne commence pas par l’envoi d’un dossier. Elle commence
                  par un besoin suffisamment structuré pour rendre la comparaison utile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette checklist sert à vérifier si la consultation repose sur :
                </p>
                <ul className={bulletListClass}>
                  <li>un besoin clair</li>
                  <li>un périmètre stable</li>
                  <li>des contraintes explicites</li>
                  <li>des critères de choix définis</li>
                  <li>une méthode de comparaison</li>
                  <li>une gouvernance interne suffisamment lisible</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si ce n’est pas encore le cas, le bon réflexe n’est pas de consulter plus vite. Le bon réflexe est
                  souvent de mieux préparer la consultation avant de la lancer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage de projet industriel
                  </Link>
                  ,{" "}
                  <Link
                    href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    comment choisir un prestataire pour un projet industriel
                  </Link>
                  ,{" "}
                  <Link
                    href="/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/"
                    className={inlineSeoLinkClass}
                  >
                    matrice de critères de choix
                  </Link>
                  ,{" "}
                  <Link
                    href="/cas-clients/structuration-dun-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    cas client de structuration avant consultation
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
                  Besoin de sécuriser une consultation avant envoi ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le besoin, structurer les critères et comparer les réponses sur une
                  base utile.
                </p>
              </div>
              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/">
                      Voir la matrice de critères
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
