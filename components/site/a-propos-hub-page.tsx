import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { HubQuickSommaire } from "@/components/site/hub-quick-sommaire"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const aProposQuickItems = [
  {
    href: "/a-propos/qui-nous-sommes/",
    title: "Qui nous sommes",
    summary: "Positionnement, périmètre et type de valeur que nous apportons aux entreprises.",
  },
  {
    href: "/a-propos/notre-approche/",
    title: "Notre approche",
    summary: "La logique de travail: partir du réel, clarifier, structurer, faire avancer.",
  },
  {
    href: "/a-propos/notre-experience/",
    title: "Notre expérience",
    summary: "Les contextes opérationnels qui ont façonné notre méthode d’intervention.",
  },
]

const aProposSeeAlsoItems = [
  {
    href: "/zones-dintervention/",
    title: "Zones d’intervention",
    summary: "Formats d’accompagnement: sur site, à distance ou hybride selon le sujet.",
  },
  {
    href: "/offres/",
    title: "Offres",
    summary: "Diagnostic, cadrage et pilotage selon le niveau réel de votre besoin.",
  },
  {
    href: "/methode/",
    title: "Méthode",
    summary: "Voir la séquence d’intervention pour passer du flou à l’exécution tenue.",
  },
  {
    href: "/cas-clients/",
    title: "Cas clients",
    summary: "Des exemples concrets de sujets clarifiés, cadrés ou pilotés.",
  },
]

export const AProposHubMeta = {
  title: "À propos | AEGENS",
  description:
    "AEGENS accompagne l’industrie, la logistique et le retail en diagnostic, cadrage et pilotage de projets pour clarifier, structurer et faire aboutir les sujets opérationnels.",
}

export function AProposHubPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "À propos" }]} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                À propos
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                AEGENS accompagne les entreprises qui ont besoin de clarifier un sujet, de structurer un projet et de
                faire avancer sa mise en œuvre dans de bonnes conditions.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Nous intervenons là où beaucoup de situations deviennent difficiles à traiter seules :
              </p>
              <ul className={bulletListClass}>
                <li>quand un fonctionnement ralentit sans qu’on sache encore clairement pourquoi</li>
                <li>
                  quand un besoin est réel mais reste encore trop flou pour être consulté ou lancé proprement
                </li>
                <li>
                  quand un projet existe, mais demande un cadre plus solide pour tenir dans l’exécution
                </li>
                <li>
                  ou quand plusieurs équipes avancent, sans que le sujet soit encore suffisamment lisible à l’échelle
                  de l’ensemble
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Notre positionnement est simple : diagnostic, cadrage et pilotage de projets pour l’industrie, la
                logistique et le retail.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais derrière cette formulation, il y a une logique plus profonde.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Nous ne nous définissons pas par une solution à vendre. Nous nous définissons par le type de valeur
                que nous cherchons à apporter :
              </p>
              <ul className={bulletListClass}>
                <li>un regard extérieur utile</li>
                <li>une lecture plus claire du réel</li>
                <li>une capacité à structurer les priorités</li>
                <li>une continuité plus solide entre l’amont du sujet et sa mise en œuvre</li>
              </ul>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/">Découvrir nos offres</Link>
                </Button>
              </div>
            </div>
          </section>

          <HubQuickSommaire
            title="Sommaire de la section"
            subtitle="Les pages essentielles pour comprendre le positionnement AEGENS en un coup d’œil."
            items={aProposQuickItems}
            seeAlsoItems={aProposSeeAlsoItems}
          />

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="why-aegens-title">
                <h2 id="why-aegens-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi AEGENS existe
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, les sujets importants ne manquent ni d’énergie, ni d’intention, ni de
                  compétence.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce qui manque le plus souvent, c’est autre chose :
                </p>
                <ul className={bulletListClass}>
                  <li>une lecture suffisamment claire de la situation</li>
                  <li>une reformulation juste du besoin</li>
                  <li>un périmètre stable</li>
                  <li>une hiérarchie entre ce qui est structurant et ce qui est secondaire</li>
                  <li>
                    ou une capacité à faire tenir le projet une fois entré dans l’exécution
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, beaucoup de difficultés viennent moins d’un manque d’action que d’un manque de
                  clarté avant l’action, ou d’un manque de continuité entre la décision et la mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est précisément à cet endroit que nous intervenons.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  AEGENS a été construit autour de cette conviction simple : un sujet bien traité passe généralement
                  par trois temps.
                </p>
                <ul className={bulletListClass}>
                  <li>comprendre</li>
                  <li>structurer</li>
                  <li>faire avancer</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est ce que nous traduisons dans nos trois niveaux d’intervention :
                </p>
                <ul className={bulletListClass}>
                  <li>diagnostic</li>
                  <li>cadrage</li>
                  <li>pilotage</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="what-we-do-title">
                <h2 id="what-we-do-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous faisons
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises sur des sujets qui demandent à la fois :
                </p>
                <ul className={bulletListClass}>
                  <li>lecture du terrain</li>
                  <li>compréhension du fonctionnement réel</li>
                  <li>structuration des priorités</li>
                  <li>formalisation du besoin</li>
                  <li>capacité à faire avancer la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Concrètement, nous intervenons notamment quand il faut :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    relire un fonctionnement qui produit trop de pertes de temps, de ressaisies ou de contournements
                  </li>
                  <li>clarifier un besoin avant consultation ou avant lancement</li>
                  <li>transformer un sujet encore diffus en projet plus structuré</li>
                  <li>construire une roadmap ou un cahier des charges exploitable</li>
                  <li>piloter une mise en œuvre qui implique plusieurs acteurs</li>
                  <li>redonner de la cohérence à un projet déjà engagé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne cherchons pas à ajouter de la complexité autour de ces sujets. Nous cherchons au contraire à
                  produire plus de lisibilité, plus de structure et plus de continuité.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="what-distinguishes-title">
                <h2 id="what-distinguishes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui nous distingue
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Beaucoup d’acteurs parlent d’organisation, de transformation ou de pilotage. La différence ne se
                  joue pas dans les mots. Elle se joue dans la manière d’aborder le sujet.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Nous partons du réel</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’un modèle idéal. Nous partons du fonctionnement tel qu’il existe réellement :
                </p>
                <ul className={bulletListClass}>
                  <li>les étapes vécues</li>
                  <li>les interfaces entre équipes</li>
                  <li>les points de blocage</li>
                  <li>les contournements</li>
                  <li>les validations</li>
                  <li>les méthodes de travail</li>
                  <li>les écarts entre ce qui est prévu et ce qui se passe effectivement</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Nous cherchons d’abord à clarifier</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne croyons pas aux réponses rapides sur des sujets encore mal qualifiés.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de vouloir choisir, consulter, déployer ou transformer, il faut souvent :
                </p>
                <ul className={bulletListClass}>
                  <li>mieux nommer le problème</li>
                  <li>distinguer le symptôme du sujet de fond</li>
                  <li>hiérarchiser les priorités</li>
                  <li>poser le bon niveau de réponse</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Nous restons orientés mise en œuvre</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Même lorsqu’un sujet est encore en phase amont, nous le lisons toujours avec une logique de suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un diagnostic utile doit préparer une décision. Un cadrage utile doit préparer une mise en œuvre. Un
                  pilotage utile doit garder le lien avec le besoin réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette continuité est au cœur de notre approche.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Nous parlons peu, mais nous structurons beaucoup
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne cherchons pas à impressionner par le vocabulaire. Nous cherchons à produire un travail qui
                  permette de mieux lire, mieux arbitrer, mieux décider et mieux faire avancer.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="environments-title">
                <h2 id="environments-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les environnements dans lesquels nous intervenons
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons principalement dans des contextes où le fonctionnement réel compte autant que la
                  décision :
                </p>
                <ul className={bulletListClass}>
                  <li>industrie</li>
                  <li>logistique</li>
                  <li>retail</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces environnements ont des caractéristiques communes :
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs équipes doivent avancer ensemble</li>
                  <li>les interfaces comptent autant que les tâches elles-mêmes</li>
                  <li>les écarts de méthode ou de visibilité coûtent vite</li>
                  <li>les contournements deviennent facilement structurels</li>
                  <li>les projets ne valent que s’ils tiennent dans l’exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est ce type de contexte qui a façonné notre manière de travailler.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne traitons pas les sujets comme des exercices théoriques. Nous les traitons comme des
                  situations qui doivent tenir dans la réalité du terrain, des contraintes, des rythmes et des
                  arbitrages.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-logic-title">
                <h2 id="intervention-logic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre logique d’intervention
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre manière d’intervenir peut se résumer simplement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Comprendre</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand la situation manque encore de lisibilité, nous commençons par objectiver le réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela peut porter sur :</p>
                <ul className={bulletListClass}>
                  <li>le fonctionnement</li>
                  <li>les méthodes</li>
                  <li>les pertes de temps</li>
                  <li>les interfaces</li>
                  <li>les validations</li>
                  <li>les écarts entre services</li>
                  <li>les points de blocage</li>
                  <li>un besoin encore mal formulé</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Structurer</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le sujet doit être transformé en projet exploitable, nous travaillons le cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous clarifions :</p>
                <ul className={bulletListClass}>
                  <li>le besoin</li>
                  <li>l’objectif</li>
                  <li>le périmètre</li>
                  <li>les contraintes</li>
                  <li>les parties prenantes</li>
                  <li>les critères utiles à la suite</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Faire avancer</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le projet existe déjà, nous intervenons pour structurer l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous aidons à :</p>
                <ul className={bulletListClass}>
                  <li>clarifier l’avancement</li>
                  <li>coordonner les acteurs</li>
                  <li>faire remonter les arbitrages</li>
                  <li>tenir les points sensibles</li>
                  <li>garder une continuité entre décisions et mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette logique n’a rien de théorique. Elle correspond à la manière dont les sujets se structurent
                  réellement quand ils sont bien traités.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="not-doing-title">
                <h2 id="not-doing-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous ne faisons pas
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il est aussi utile de dire clairement ce que nous ne cherchons pas à faire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous ne venons pas :</p>
                <ul className={bulletListClass}>
                  <li>vendre une solution prédéfinie</li>
                  <li>pousser un outil sans avoir relu le besoin</li>
                  <li>produire un diagnostic décoratif</li>
                  <li>
                    ajouter du pilotage là où le vrai sujet est encore un problème d’amont
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous n’avons pas non plus vocation à prendre la place de l’entreprise sur ses arbitrages de fond.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Notre rôle est différent :</p>
                <ul className={bulletListClass}>
                  <li>apporter du recul</li>
                  <li>structurer la lecture</li>
                  <li>clarifier le sujet</li>
                  <li>sécuriser la décision</li>
                  <li>tenir la continuité de mise en œuvre si nécessaire</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, nous ne remplaçons pas la maîtrise du sujet côté client. Nous aidons à la rendre plus
                  solide.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="situations-title">
                <h2 id="situations-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pour quels types de situations
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les sujets sur lesquels nous intervenons peuvent prendre des formes très différentes en apparence,
                  mais ils relèvent souvent des mêmes logiques de fond.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>des pertes de temps entre services</li>
                  <li>des ressaisies Excel ou mails devenues structurelles</li>
                  <li>un manque de visibilité sur les processus</li>
                  <li>des méthodes de travail non harmonisées</li>
                  <li>un projet industriel mal cadré</li>
                  <li>un besoin encore trop flou avant consultation</li>
                  <li>une sélection de prestataire difficile à sécuriser</li>
                  <li>une mise en œuvre qui devient plus difficile à tenir</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans tous ces cas, la vraie question n’est pas toujours : quelle solution choisir ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle est souvent : de quoi le sujet a-t-il réellement besoin maintenant ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  D’un diagnostic ? D’un cadrage ? D’un pilotage ? Ou d’une remise à plat avant d’engager la suite ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est cette lecture que nous cherchons d’abord à apporter.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="value-title">
                <h2 id="value-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette approche crée de la valeur
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La valeur d’AEGENS ne repose pas sur une promesse vague d’amélioration. Elle repose sur des effets
                  concrets.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quand un sujet est mieux lu :</p>
                <ul className={bulletListClass}>
                  <li>les arbitrages deviennent plus justes</li>
                  <li>les priorités ressortent mieux</li>
                  <li>le besoin se formule plus proprement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quand un projet est mieux cadré :</p>
                <ul className={bulletListClass}>
                  <li>la consultation devient plus sérieuse</li>
                  <li>le périmètre devient plus tenable</li>
                  <li>la comparaison des réponses devient plus fiable</li>
                  <li>la suite repose sur une base plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand la mise en œuvre est mieux pilotée :
                </p>
                <ul className={bulletListClass}>
                  <li>l’avancement devient plus lisible</li>
                  <li>les arbitrages remontent mieux</li>
                  <li>les acteurs se coordonnent plus proprement</li>
                  <li>le projet garde plus de cohérence dans le temps</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, la valeur se voit moins dans un effet d’annonce que dans la qualité de tenue du
                  sujet.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="discover-pages-title">
                <h2 id="discover-pages-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les pages à découvrir dans cette section
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous voulez approfondir notre positionnement, cette section se prolonge naturellement par
                  plusieurs pages.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/a-propos/qui-nous-sommes/" className={inlineSeoLinkClass}>
                    Qui nous sommes
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour comprendre notre positionnement, notre périmètre d’intervention et notre logique de travail.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/a-propos/notre-approche/" className={inlineSeoLinkClass}>
                    Notre approche
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour voir plus précisément comment nous lisons les sujets, et pourquoi nous insistons autant sur la
                  clarté amont et la continuité d’exécution.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/a-propos/notre-experience/" className={inlineSeoLinkClass}>
                    Notre expérience
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour comprendre d’où vient notre manière de travailler, et dans quels types de réalités
                  opérationnelles elle s’est construite.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/zones-dintervention/" className={inlineSeoLinkClass}>
                    Zones d’intervention
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour savoir dans quels formats et dans quels contextes nous intervenons : sur site, à distance, ou
                  en hybride selon les besoins du sujet.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  AEGENS accompagne les entreprises qui ont besoin de mieux comprendre une situation, mieux structurer
                  un projet, ou mieux tenir une mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons principalement dans l’industrie, la logistique et le retail, avec une logique
                  simple :
                </p>
                <ul className={bulletListClass}>
                  <li>partir du réel</li>
                  <li>clarifier avant d’accélérer</li>
                  <li>structurer ce qui compte</li>
                  <li>faire en sorte que la suite tienne dans l’exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet existe déjà mais reste encore trop diffus, trop instable ou trop difficile à faire
                  avancer proprement, cette section est le bon point d’entrée pour comprendre comment nous travaillons.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/" className={inlineSeoLinkClass}>
                    offres
                  </Link>
                  ,{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    méthode
                  </Link>{" "}
                  et{" "}
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    cas clients
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
                  Besoin de clarifier votre sujet avant de lancer la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à qualifier le bon niveau entre diagnostic, cadrage et pilotage.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/">Voir nos offres</Link>
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
