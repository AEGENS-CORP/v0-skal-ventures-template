import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { HubQuickSommaire } from "@/components/site/hub-quick-sommaire"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const modelesQuickItems = [
  {
    href: "/modeles-checklists/trame-diagnostic-operationnel/",
    title: "Trame de diagnostic opérationnel",
    summary: "Structurer l’analyse terrain pour objectiver les blocages et qualifier la suite.",
  },
  {
    href: "/modeles-checklists/checklist-cadrage-projet-industriel/",
    title: "Checklist cadrage projet industriel",
    summary: "Vérifier que le besoin, le périmètre et les arbitrages sont prêts avant lancement.",
  },
  {
    href: "/modeles-checklists/exemple-cahier-des-charges-fonctionnel/",
    title: "Exemple cahier des charges fonctionnel",
    summary: "Une base de formalisation claire pour consulter et comparer proprement.",
  },
  {
    href: "/modeles-checklists/exemple-roadmap-projet/",
    title: "Exemple de roadmap projet",
    summary: "Construire une trajectoire lisible avec phases, jalons et dépendances.",
  },
  {
    href: "/modeles-checklists/checklist-consultation-prestataires/",
    title: "Checklist consultation prestataires",
    summary: "Préparer une consultation robuste et éviter les offres incomparables.",
  },
  {
    href: "/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/",
    title: "Matrice critères de choix",
    summary: "Aider la décision avec des critères explicites, hiérarchisés et partageables.",
  },
]

export const ModelesChecklistsHubMeta = {
  title: "Modèles et checklists | Cadrage, consultation et pilotage | AEGENS",
  description:
    "Modèles et checklists pour cadrer un projet, préparer une consultation, comparer des offres et structurer un besoin avant mise en œuvre.",
}

export function ModelesChecklistsHubPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Modèles et checklists" }]} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Modèles et checklists
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un bon modèle ne remplace pas le raisonnement.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Une bonne checklist ne remplace pas le cadrage.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais dans un projet, une consultation ou une phase de structuration, ces outils ont une vraie valeur
                quand ils sont utilisés au bon moment, pour la bonne raison et au bon niveau.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ils servent à éviter deux dérives très fréquentes :
              </p>
              <ul className={bulletListClass}>
                <li>croire qu’un sujet est clair alors qu’il est encore largement implicite</li>
                <li>croire qu’un projet est prêt alors qu’il lui manque encore plusieurs fondations essentielles</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est la raison d’être de cette section.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ici, les modèles et checklists ne sont pas pensés comme des documents à remplir pour la forme.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ils sont conçus comme des supports de clarification, de structuration et de décision.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Autrement dit :</p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                ils ne servent pas à produire plus de papier.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ils servent à rendre un sujet plus lisible, plus partageable et plus exploitable.
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

          <HubQuickSommaire
            title="Sommaire des modèles et checklists"
            subtitle="Tous les supports pratiques accessibles rapidement, avec un repère d’usage."
            items={modelesQuickItems}
          />

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="utile-title">
                <h2 id="utile-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette section est utile
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, les sujets importants avancent avant d’être réellement structurés.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le besoin est connu. Le projet est pressenti.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une consultation est envisagée. Des options existent déjà. Des discussions ont commencé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais quand il faut formaliser, comparer, arbitrer ou lancer, plusieurs difficultés apparaissent en même
                  temps :
                </p>
                <ul className={bulletListClass}>
                  <li>certaines questions qui semblaient réglées ne le sont pas</li>
                  <li>le périmètre reste mouvant</li>
                  <li>les attentes ne sont pas hiérarchisées</li>
                  <li>les critères de choix arrivent trop tard</li>
                  <li>les documents existent, mais ne permettent pas encore de décider proprement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est précisément dans cette zone que les modèles et checklists sont utiles.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils ne donnent pas la réponse à votre place.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils forcent surtout à poser les bonnes questions au bon moment.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="permettent-title">
                <h2 id="permettent-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ces outils permettent réellement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un modèle ou une checklist bien construit doit permettre au moins une de ces quatre choses.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Clarifier</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Faire apparaître ce qui est encore flou :</p>
                <ul className={bulletListClass}>
                  <li>le besoin</li>
                  <li>l’objectif</li>
                  <li>le périmètre</li>
                  <li>les contraintes</li>
                  <li>les livrables</li>
                  <li>les critères</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Structurer</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Donner une logique de travail à un sujet qui existe déjà, mais reste encore trop diffus pour être
                  comparé, transmis ou décidé proprement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Sécuriser</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Réduire le risque d’oublier un point essentiel :</p>
                <ul className={bulletListClass}>
                  <li>une partie prenante</li>
                  <li>une contrainte</li>
                  <li>un point de vigilance</li>
                  <li>une dépendance</li>
                  <li>un critère de décision</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Accélérer proprement</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Non pas accélérer artificiellement, mais éviter de perdre du temps plus tard sur ce qui aurait pu être
                  clarifié plus tôt.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est un point important.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les bons outils n’ajoutent pas de lourdeur.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils évitent la lourdeur future créée par un amont insuffisamment structuré.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="trouver-title">
                <h2 id="trouver-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que vous trouverez dans cette section
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des modèles de formalisation</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces contenus servent quand il faut transformer un besoin ou un projet en document exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">On y retrouve par exemple :</p>
                <ul className={bulletListClass}>
                  <li>un exemple de cahier des charges fonctionnel</li>
                  <li>des trames de cadrage</li>
                  <li>des exemples de formalisation utilisables pour consulter, comparer ou structurer la suite</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des checklists de vérification</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces contenus servent à tester la solidité d’un sujet avant d’aller plus loin.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>une checklist de cadrage de projet industriel</li>
                  <li>une checklist de consultation prestataires</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Leur rôle n’est pas de produire un document final.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Leur rôle est de faire apparaître ce qui manque encore avant la suite.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des outils d’aide à la décision</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certains supports servent plus spécifiquement au moment où il faut comparer, arbitrer et choisir.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>une matrice de critères pour choisir une solution ou un prestataire</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce type d’outil est particulièrement utile quand la décision devient sensible :
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs offres</li>
                  <li>plusieurs options</li>
                  <li>plusieurs lectures du sujet</li>
                  <li>plusieurs critères à tenir ensemble</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="aqui-title">
                <h2 id="aqui-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  À qui s’adressent ces modèles et checklists
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces contenus sont particulièrement utiles si vous êtes dans l’une des situations suivantes :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    vous devez cadrer un projet, mais vous sentez que plusieurs points restent trop implicites
                  </li>
                  <li>
                    vous devez consulter des prestataires et vous voulez éviter une comparaison fragile
                  </li>
                  <li>vous devez rédiger un cahier des charges ou une base de consultation</li>
                  <li>vous avez besoin de comparer plusieurs réponses sur des critères plus propres</li>
                  <li>vous voulez tester si un sujet est réellement mûr pour la suite</li>
                  <li>vous cherchez un support de travail pour structurer une réflexion en interne</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils sont pensés pour des contextes réels :</p>
                <ul className={bulletListClass}>
                  <li>industrie</li>
                  <li>logistique</li>
                  <li>retail</li>
                  <li>PME</li>
                  <li>projets transverses</li>
                  <li>sujets impliquant plusieurs équipes ou plusieurs niveaux de décision</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="bien-title">
                <h2 id="bien-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment bien utiliser un modèle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est probablement le point le plus important de cette page.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un modèle devient inutile, voire nuisible, s’il est utilisé comme une simple formalité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>remplir une trame de cadrage sans avoir réellement clarifié le besoin</li>
                  <li>produire un cahier des charges parce qu’il faut un document</li>
                  <li>construire une matrice de critères après avoir déjà choisi</li>
                  <li>
                    cocher une checklist pour se rassurer, sans traiter les zones floues qu’elle révèle
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Dans tous ces cas, l’outil existe, mais il n’apporte presque rien.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un bon usage est exactement inverse.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Il faut utiliser un modèle pour penser
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le document doit aider à reformuler, trancher, hiérarchiser, rendre visibles les écarts.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Il faut utiliser une checklist pour tester
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pas pour se convaincre que tout est prêt, mais pour identifier ce qui ne l’est pas encore.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Il faut utiliser une matrice pour comparer proprement
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pas pour habiller une préférence déjà décidée.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Autrement dit :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  ces outils n’ont de valeur que s’ils améliorent la qualité de lecture du sujet.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="attendre-title">
                <h2 id="attendre-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il ne faut pas attendre de ces outils
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut être clair sur leurs limites.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un modèle ne corrigera pas :</p>
                <ul className={bulletListClass}>
                  <li>un besoin mal compris</li>
                  <li>un projet mal relu</li>
                  <li>une divergence forte entre parties prenantes</li>
                  <li>une décision de fond qui n’a pas encore été prise</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une checklist ne remplacera pas :</p>
                <ul className={bulletListClass}>
                  <li>un diagnostic sérieux</li>
                  <li>un vrai cadrage</li>
                  <li>une remise à plat du fonctionnement réel</li>
                  <li>une discussion de fond sur le périmètre ou les contraintes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une matrice de critères ne compensera pas :</p>
                <ul className={bulletListClass}>
                  <li>une consultation mal préparée</li>
                  <li>des offres non comparables</li>
                  <li>un besoin encore instable</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ces outils ne remplacent donc pas le travail.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils l’aident, quand le travail est engagé dans le bon ordre.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="moments-title">
                <h2 id="moments-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Dans quels moments ils sont les plus utiles
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Avant une consultation</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est l’un des moments les plus utiles.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une entreprise doit consulter des prestataires, elle a souvent besoin de :
                </p>
                <ul className={bulletListClass}>
                  <li>tester si le besoin est assez clair</li>
                  <li>structurer le cahier des charges</li>
                  <li>préparer les critères de comparaison</li>
                  <li>éviter de comparer des réponses qui ne parlent pas du même sujet</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Avant un lancement de projet</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une checklist de cadrage ou une trame de structuration permet alors de vérifier si :
                </p>
                <ul className={bulletListClass}>
                  <li>l’objectif est clair</li>
                  <li>le périmètre est posé</li>
                  <li>les parties prenantes sont identifiées</li>
                  <li>les contraintes sont visibles</li>
                  <li>la suite est réellement tenable</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Avant un arbitrage entre plusieurs options
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À ce moment-là, la matrice de critères devient utile pour rendre la décision plus lisible et moins
                  dépendante d’une impression générale.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Quand le sujet existe, mais reste encore difficile à formuler
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent le cas dans les environnements opérationnels.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le modèle ou la checklist ne donne pas la réponse, mais il aide à faire émerger :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qui est réellement en jeu</li>
                  <li>ce qui manque encore</li>
                  <li>le niveau de structuration nécessaire avant d’aller plus loin</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="principaux-title">
                <h2 id="principaux-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les principaux contenus de cette section
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/"
                    className={inlineSeoLinkClass}
                  >
                    Exemple de cahier des charges fonctionnel
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour formaliser un besoin de manière exploitable, sans tomber dans le document vague ni dans le
                  document technique trop tôt.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/modeles-checklists/checklist-cadrage-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    Checklist de cadrage de projet industriel
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour tester si un projet est réellement prêt à être lancé, consulté ou structuré.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/modeles-checklists/checklist-consultation-prestataires/"
                    className={inlineSeoLinkClass}
                  >
                    Checklist consultation prestataires
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour vérifier si la consultation repose sur une base assez claire pour produire des réponses
                  comparables.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/"
                    className={inlineSeoLinkClass}
                  >
                    Matrice de critères de choix solution ou prestataire
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour comparer des options sur une base plus rigoureuse :
                </p>
                <ul className={bulletListClass}>
                  <li>compréhension du besoin</li>
                  <li>couverture du périmètre</li>
                  <li>méthode</li>
                  <li>faisabilité</li>
                  <li>charge côté client</li>
                  <li>coût global</li>
                  <li>niveau de risque</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/modeles-checklists/trame-diagnostic-operationnel/" className={inlineSeoLinkClass}>
                    Trame de diagnostic opérationnel
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour structurer une lecture du fonctionnement réel avant de passer à une phase de cadrage ou de
                  projet.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/modeles-checklists/exemple-roadmap-projet/" className={inlineSeoLinkClass}>
                    Exemple de roadmap projet
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour traduire une logique de suite en étapes lisibles, hiérarchisées et exploitables.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="lien-title">
                <h2 id="lien-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le lien entre cette section et nos offres
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ces modèles et checklists ne vivent pas seuls.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils s’inscrivent dans une logique d’intervention plus large.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un sujet manque encore de lisibilité sur le fonctionnement réel, on est souvent dans un besoin
                  de diagnostic.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un sujet doit être structuré avant décision, consultation ou lancement, on est souvent dans un
                  besoin de cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un sujet existe déjà, mais doit être tenu dans sa coordination et sa mise en œuvre, on est
                  davantage du côté du pilotage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette section permet donc aussi de comprendre à quel moment un outil de structuration suffit, et à
                  quel moment un travail plus poussé devient nécessaire.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="choisir-title">
                <h2 id="choisir-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment choisir le bon support
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Si votre sujet est encore très amont, commencez par :</p>
                <ul className={bulletListClass}>
                  <li>une checklist de cadrage</li>
                  <li>ou une trame de diagnostic</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Si votre sujet va vers une consultation, commencez par :</p>
                <ul className={bulletListClass}>
                  <li>une checklist consultation prestataires</li>
                  <li>puis un exemple de cahier des charges fonctionnel</li>
                  <li>puis une matrice de critères</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet est déjà lancé, mais que vous avez besoin de structurer la suite, un support de type :
                </p>
                <ul className={bulletListClass}>
                  <li>roadmap</li>
                  <li>ou trame de pilotage</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">sera souvent plus utile.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’idée n’est pas de tout utiliser.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’idée est d’utiliser le bon support au bon moment.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les modèles et checklists ne sont pas des accessoires.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Bien utilisés, ils permettent de :</p>
                <ul className={bulletListClass}>
                  <li>clarifier un besoin</li>
                  <li>structurer un projet</li>
                  <li>sécuriser une consultation</li>
                  <li>comparer des options</li>
                  <li>éviter qu’un sujet important avance sur une base encore trop implicite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils n’ont pas vocation à remplacer l’analyse, le cadrage ou la décision.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils ont vocation à les rendre plus propres.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous avez besoin de transformer un sujet encore diffus en base de travail plus solide, cette
                  section est le bon point d’entrée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    cadrage de projet industriel et cahier des charges
                  </Link>
                  ,{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic du fonctionnement opérationnel
                  </Link>
                  ,{" "}
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                    pilotage de mise en œuvre de projet
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
                  Besoin de structurer un sujet avant de lancer ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à choisir le bon support, clarifier le besoin et sécuriser la suite.
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
