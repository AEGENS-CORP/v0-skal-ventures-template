import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ProblematiqueChoisirSolutionMeta = {
  title: "Choisir une solution ou un prestataire industriel | AEGENS",
  description:
    "Choisir une solution ou un prestataire industriel demande d’abord un besoin clair, des critères explicites et une comparaison rigoureuse. Comprendre les vrais risques.",
}

export function ProblematiqueChoisirSolutionPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Problématiques", href: "/problematiques" },
              { label: "Choisir une solution ou un prestataire industriel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Choisir une solution ou un prestataire industriel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Choisir une solution ou un prestataire industriel n’est pas d’abord un problème de marché.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est d’abord un problème de définition du besoin.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Tant que le besoin reste flou, la question quel prestataire choisir ? est mal posée.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit : on ne choisit pas bien parce qu’on a reçu plusieurs offres.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                On choisit bien quand on sait exactement ce que l’on compare, pourquoi on le compare, et sur quels
                critères on décide.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans l’industrie, ce sujet est encore plus sensible, parce que les décisions portent rarement sur un
                objet simple.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il ne s’agit pas seulement de comparer un prix ou une fonctionnalité. Il faut souvent arbitrer entre :
              </p>
              <ul className={bulletListClass}>
                <li>compréhension du besoin</li>
                <li>couverture réelle du périmètre</li>
                <li>méthode</li>
                <li>capacité de mise en œuvre</li>
                <li>charge transférée aux équipes</li>
                <li>robustesse</li>
                <li>calendrier</li>
                <li>coût global</li>
                <li>niveau de risque</li>
              </ul>

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
              <section className={sectionClass} aria-labelledby="difficile-title">
                <h2 id="difficile-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce sujet est plus difficile qu’il n’en a l’air
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Vu de loin, le problème paraît simple : plusieurs solutions ou plusieurs prestataires existent, il
                  suffit de comparer et de choisir.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En pratique, cette vision est trompeuse.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Deux réponses peuvent paraître concurrentes tout en ne couvrant pas le même objet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’une peut inclure du cadrage, l’autre supposer que tout est déjà défini. L’une peut intégrer du
                  pilotage, l’autre laisser cette charge au client. L’une peut répondre à un périmètre serré, l’autre
                  à une vision plus large.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est là que beaucoup d’entreprises se trompent.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles pensent comparer des offres.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En réalité, elles comparent parfois :</p>
                <ul className={bulletListClass}>
                  <li>des lectures différentes du sujet</li>
                  <li>des hypothèses différentes</li>
                  <li>des périmètres différents</li>
                  <li>des niveaux d’engagement différents</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce cas, la difficulté n’est pas de choisir.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La difficulté est que la comparaison elle-même est déjà fragilisée.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="base-title">
                <h2 id="base-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le vrai problème n’est souvent pas le choix, mais la base du choix
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une entreprise dit : nous devons choisir une solution ou un prestataire, elle formule souvent
                  la question trop tard dans la chaîne de raisonnement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La vraie question, avant cela, est généralement :
                </p>
                <ul className={bulletListClass}>
                  <li>le besoin a-t-il été clarifié ?</li>
                  <li>le périmètre est-il posé ?</li>
                  <li>les contraintes sont-elles visibles ?</li>
                  <li>les attendus sont-ils explicites ?</li>
                  <li>les critères de décision sont-ils déjà définis ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si la réponse est non à plusieurs de ces questions, alors le sujet n’est pas encore un sujet de
                  choix.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est encore un sujet de cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette distinction est essentielle, parce qu’une consultation ou une comparaison lancée trop tôt donne
                  souvent une illusion de maîtrise :
                </p>
                <ul className={bulletListClass}>
                  <li>il y a des documents</li>
                  <li>des rendez-vous</li>
                  <li>des démonstrations</li>
                  <li>des prix</li>
                  <li>des recommandations</li>
                  <li>des discussions sur les options</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais si la base de comparaison n’est pas stabilisée, toute cette activité peut simplement déplacer le
                  flou au lieu de le réduire.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="prix-title">
                <h2 id="prix-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi le prix ne suffit jamais
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est probablement l’erreur la plus fréquente.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le prix compte. Mais il ne peut pas être lu seul.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En pratique, un prix plus bas peut correspondre à :
                </p>
                <ul className={bulletListClass}>
                  <li>un périmètre plus réduit</li>
                  <li>une hypothèse de départ plus simplificatrice</li>
                  <li>un transfert plus fort de charge vers l’entreprise</li>
                  <li>une méthode plus légère</li>
                  <li>un accompagnement plus limité</li>
                  <li>des risques moins bien couverts</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À l’inverse, un prix plus élevé peut intégrer :
                </p>
                <ul className={bulletListClass}>
                  <li>une meilleure compréhension du besoin</li>
                  <li>un cadrage plus solide</li>
                  <li>une équipe plus expérimentée</li>
                  <li>une capacité de pilotage plus forte</li>
                  <li>une réduction du risque de dérive plus tard</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon raisonnement n’est donc pas : qui est le moins cher ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon raisonnement est : que couvre réellement ce prix, à quel niveau de risque, avec quelle charge
                  interne, et pour quelle qualité de mise en œuvre ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="comparer-title">
                <h2 id="comparer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut réellement comparer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une comparaison sérieuse ne porte pas seulement sur une offre commerciale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle doit porter sur la capacité réelle de la réponse à traiter le sujet dans votre contexte.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les dimensions les plus importantes sont généralement les suivantes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. La compréhension du besoin</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent le critère le plus décisif et le plus sous-estimé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon prestataire ou une bonne solution se reconnaît à sa capacité à comprendre :
                </p>
                <ul className={bulletListClass}>
                  <li>le problème réel</li>
                  <li>votre environnement</li>
                  <li>le bon niveau de réponse</li>
                  <li>les contraintes</li>
                  <li>les points de vigilance du projet</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. La couverture réelle du périmètre</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut regarder ce qui est réellement couvert :</p>
                <ul className={bulletListClass}>
                  <li>ce qui est inclus</li>
                  <li>ce qui ne l’est pas</li>
                  <li>ce qui suppose des options ou travaux complémentaires</li>
                  <li>ce qui reste à la charge de l’entreprise</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. La méthode proposée</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Comment la réponse sera-t-elle mise en œuvre ?
                </p>
                <ul className={bulletListClass}>
                  <li>avec quelles étapes ?</li>
                  <li>avec quelle logique ?</li>
                  <li>avec quel niveau de structuration ?</li>
                  <li>avec quels livrables ?</li>
                  <li>avec quel niveau d’autonomie demandé au client ?</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. La faisabilité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le dispositif est-il réaliste dans votre contexte ?
                </p>
                <ul className={bulletListClass}>
                  <li>calendrier</li>
                  <li>disponibilité des équipes</li>
                  <li>complexité de déploiement</li>
                  <li>dépendances</li>
                  <li>niveau de maturité interne</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. La charge transférée au client</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est un angle mort très fréquent.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certaines réponses paraissent attractives parce qu’elles transfèrent au client une partie importante
                  du travail réel :
                </p>
                <ul className={bulletListClass}>
                  <li>collecte et nettoyage de données</li>
                  <li>coordination</li>
                  <li>arbitrages fréquents</li>
                  <li>recette</li>
                  <li>conduite du changement</li>
                  <li>suivi quotidien</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">6. La qualité de l’équipe</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  S’il s’agit d’un prestataire, la qualité de la structure ne suffit pas.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut savoir :</p>
                <ul className={bulletListClass}>
                  <li>qui interviendra réellement</li>
                  <li>avec quel niveau d’expérience</li>
                  <li>sur quels sujets comparables</li>
                  <li>avec quel degré de stabilité</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">7. Le coût global</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pas seulement le prix facial :</p>
                <ul className={bulletListClass}>
                  <li>coût de prestation</li>
                  <li>coût de déploiement</li>
                  <li>charge interne</li>
                  <li>coûts récurrents</li>
                  <li>coûts indirects</li>
                  <li>coût du risque si la solution est mal calibrée</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">8. Le risque</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le choix doit aussi être lu sous l’angle du risque :
                </p>
                <ul className={bulletListClass}>
                  <li>risque de calendrier</li>
                  <li>risque d’intégration</li>
                  <li>risque de surcharge interne</li>
                  <li>risque de faible adoption</li>
                  <li>risque de dépendance</li>
                  <li>risque de solution trop lourde ou trop étroite</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="incomparable-title">
                <h2 id="incomparable-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi les réponses deviennent souvent incomparables
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une entreprise pense parfois consulter plusieurs acteurs pour objectiver le choix.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais si le besoin est encore trop ouvert, chaque prestataire recompose le sujet selon sa logique
                  propre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’un répond sur un périmètre large. L’autre sur un périmètre resserré. L’un intègre un travail de
                  diagnostic amont. L’autre considère que ce travail relève déjà du client. L’un propose une méthode
                  détaillée. L’autre répond surtout par sa solution. L’un met l’accent sur le déploiement. L’autre sur
                  la couverture fonctionnelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le résultat est classique :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  les réponses ont l’air comparables, mais elles ne parlent pas du même objet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand cela arrive, l’entreprise croit avoir plus de choix.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En réalité, elle a surtout plus d’incertitude.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="erreurs-title">
                <h2 id="erreurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plusieurs erreurs reviennent systématiquement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Chercher une solution avant d’avoir relu le problème
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est la plus fréquente.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le besoin n’est pas suffisamment structuré, la solution arrive trop tôt dans la réflexion.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Consulter pour clarifier le besoin à la place du cadrage
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La consultation peut enrichir la réflexion, mais elle ne remplace pas le travail amont de
                  clarification.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Définir les critères après réception des offres
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est l’une des faiblesses les plus graves.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Lire le prix sans reconstituer le périmètre réel
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une erreur classique et coûteuse.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Confondre aisance commerciale et pertinence réelle
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une réponse bien présentée n’est pas nécessairement une réponse plus juste.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Sous-estimer la charge interne
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La solution ou le prestataire ne doivent pas être évalués seulement sur ce qu’ils font, mais aussi
                  sur ce qu’ils vous demandent de porter.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="mure-title">
                <h2 id="mure-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si le sujet est mûr pour un choix
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de choisir une solution ou un prestataire, il faut pouvoir répondre clairement à quelques
                  questions.
                </p>
                <ul className={bulletListClass}>
                  <li>le besoin est-il formulé de manière stable ?</li>
                  <li>l’objectif principal est-il clair ?</li>
                  <li>le périmètre est-il posé ?</li>
                  <li>les contraintes sont-elles visibles ?</li>
                  <li>les attendus sont-ils explicites ?</li>
                  <li>les critères de comparaison sont-ils prêts ?</li>
                  <li>les réponses peuvent-elles être lues sur une base commune ?</li>
                  <li>la charge côté client est-elle intégrée dans l’analyse ?</li>
                  <li>le prix peut-il être comparé à périmètre réellement comparable ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si plusieurs de ces réponses restent floues, alors le sujet n’est probablement pas encore un sujet
                  de sélection.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est encore un sujet de structuration du besoin.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une intervention utile permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une entreprise doit choisir une solution ou un prestataire industriel, la vraie valeur ne
                  consiste pas seulement à faire une short-list.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle consiste à rendre le choix plus solide.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela suppose généralement de :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin</li>
                  <li>stabiliser le périmètre</li>
                  <li>expliciter les contraintes</li>
                  <li>formuler les attendus</li>
                  <li>poser les critères</li>
                  <li>lire les réponses sur une base homogène</li>
                  <li>faire apparaître les écarts réels entre les options</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, le travail utile ne commence pas à la fin, au moment de la décision.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il commence avant, au moment où l’on construit la qualité de la comparaison.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Choisir une solution ou un prestataire industriel n’est pas d’abord une question de marché.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est d’abord une question de rigueur dans la définition du besoin et dans la construction des
                  critères de choix.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une décision solide suppose de comparer :
                </p>
                <ul className={bulletListClass}>
                  <li>la compréhension du besoin</li>
                  <li>la couverture réelle du périmètre</li>
                  <li>la méthode</li>
                  <li>la faisabilité</li>
                  <li>la charge interne</li>
                  <li>la qualité de l’équipe</li>
                  <li>le coût global</li>
                  <li>le niveau de risque</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon choix n’est donc pas seulement celui qui paraît le plus convaincant.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est celui qui répond le mieux au vrai sujet, dans le bon périmètre, avec le bon niveau de tenue
                  pour la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous devez choisir prochainement une solution ou un prestataire, la première question n’est
                  souvent pas encore qui retenir ?.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La première question est : sur quelle base allons-nous comparer proprement ?
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
                    comment choisir un prestataire industriel
                  </Link>
                  ,{" "}
                  <Link
                    href="/modeles-checklists/checklist-consultation-prestataires/"
                    className={inlineSeoLinkClass}
                  >
                    checklist consultation prestataires
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
                    cas client structuration du besoin
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
                  Besoin de comparer des options sur une base solide ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le besoin, poser les critères et sécuriser la décision.
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
