import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { HubQuickSommaire } from "@/components/site/hub-quick-sommaire"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const casClientsQuickItems = [
  {
    href: "/cas-clients/diagnostic-et-cadrage-dun-projet-industriel/",
    title: "Diagnostic et cadrage d’un projet industriel",
    summary: "Passer d’un sujet diffus à un cadre de décision exploitable et partagé.",
  },
  {
    href: "/cas-clients/structuration-dun-besoin-avant-consultation/",
    title: "Structuration d’un besoin avant consultation",
    summary: "Clarifier le besoin pour obtenir des réponses comparables et choisissables.",
  },
  {
    href: "/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel/",
    title: "Pilotage de mise en œuvre d’un projet opérationnel",
    summary: "Coordonner les acteurs et maintenir la cohérence d’exécution dans la durée.",
  },
  {
    href: "/cas-clients/reduction-des-ressaisies-et-clarification-des-methodes/",
    title: "Réduction des ressaisies et clarification des méthodes",
    summary: "Relire le fonctionnement réel pour supprimer les frictions récurrentes.",
  },
]

export const CasClientsHubMeta = {
  title: "Cas clients | AEGENS",
  description:
    "Découvrez des cas clients AEGENS autour du diagnostic, du cadrage et du pilotage de mise en œuvre dans l’industrie, la logistique et le retail.",
}

export function CasClientsHubPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Cas clients" }]} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Cas clients
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un cas client utile ne sert pas à raconter une success story simplifiée.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il sert à rendre visible un type de sujet, une logique d’intervention, et la manière dont une
                situation concrète a été clarifiée, structurée ou mieux tenue dans l’exécution.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est la raison pour laquelle nous présentons nos cas clients de manière sobre.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Nous ne cherchons pas à produire des récits artificiellement spectaculaires.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Nous cherchons à montrer, de manière lisible, sur quels types de situations nous intervenons réellement :
              </p>
              <ul className={bulletListClass}>
                <li>un besoin encore trop flou avant consultation</li>
                <li>un projet industriel qui doit être diagnostiqué puis cadré</li>
                <li>une mise en œuvre qui doit être pilotée plus solidement</li>
                <li>
                  un fonctionnement quotidien ralenti par des ressaisies, des écarts de méthode ou des interfaces mal
                  tenues
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, ces cas clients ne sont pas là pour habiller une offre.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ils sont là pour montrer à quoi ressemble, dans le réel, un travail de diagnostic, de cadrage ou de
                pilotage quand il est appliqué à un sujet concret.
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

          <HubQuickSommaire
            title="Sommaire des cas clients"
            subtitle="Accéder directement à chaque cas et au type d’intervention associé."
            items={casClientsQuickItems}
          />

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="importance-title">
                <h2 id="importance-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette section est importante
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans les métiers de cadrage, d’analyse et de pilotage, la difficulté est souvent la même : beaucoup
                  de choses sont décisives, mais peu de choses sont visibles immédiatement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un diagnostic sérieux ne produit pas forcément une image impressionnante. Un cadrage bien fait ne se
                  voit pas toujours de l’extérieur. Un pilotage utile ne crée pas toujours un effet spectaculaire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Et pourtant, c’est très souvent là que se joue la qualité de la suite :
                </p>
                <ul className={bulletListClass}>
                  <li>dans la façon de clarifier un besoin</li>
                  <li>dans la capacité à relire un fonctionnement réel</li>
                  <li>dans la justesse du périmètre posé</li>
                  <li>dans la qualité des arbitrages préparés</li>
                  <li>dans la tenue de l’exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les cas clients servent précisément à rendre cette valeur plus concrète.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils permettent de montrer :</p>
                <ul className={bulletListClass}>
                  <li>d’où l’on part</li>
                  <li>ce qui posait problème</li>
                  <li>comment le sujet a été relu</li>
                  <li>ce qui a été structuré</li>
                  <li>ce que cette intervention a réellement changé dans la qualité de décision ou d’exécution</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="doit-title">
                <h2 id="doit-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’un cas client doit réellement montrer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un bon cas client ne doit pas seulement dire :</p>
                <ul className={bulletListClass}>
                  <li>le projet a réussi</li>
                  <li>le client était satisfait</li>
                  <li>la mission a été menée à bien</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ce type de formule ne dit presque rien.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un cas client utile doit permettre de comprendre :</p>
                <ul className={bulletListClass}>
                  <li>quel était le sujet de départ</li>
                  <li>pourquoi il était difficile à traiter tel quel</li>
                  <li>à quel niveau se situait le vrai problème</li>
                  <li>quelle a été la logique d’intervention</li>
                  <li>ce qui a été rendu plus clair, plus structuré ou plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est cette exigence qui guide la manière dont nous écrivons nos cas clients.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne cherchons pas à simplifier à l’excès.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous cherchons à rendre intelligible le passage :
                </p>
                <ul className={bulletListClass}>
                  <li>d’une situation souvent diffuse</li>
                  <li>vers une lecture plus claire</li>
                  <li>puis vers une base de travail plus exploitable</li>
                  <li>ou vers une exécution mieux tenue</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="situations-title">
                <h2 id="situations-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les types de situations que l’on retrouve le plus souvent
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Des besoins encore trop flous pour être consultés proprement
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet existe. L’entreprise veut avancer.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais la base de consultation reste encore trop fragile :
                </p>
                <ul className={bulletListClass}>
                  <li>besoin trop large</li>
                  <li>périmètre instable</li>
                  <li>attentes insuffisamment formulées</li>
                  <li>critères de comparaison absents ou trop implicites</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type de cas, l’intervention consiste d’abord à structurer le besoin avant toute comparaison
                  de solutions ou de prestataires.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Des projets industriels qui existent déjà dans les têtes, mais pas encore comme projets bien cadrés
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une difficulté est connue. Des effets visibles existent dans le fonctionnement. Un projet semble
                  nécessaire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais entre la perception d’un besoin et un projet réellement structuré, il manque souvent :
                </p>
                <ul className={bulletListClass}>
                  <li>un diagnostic</li>
                  <li>une reformulation du besoin</li>
                  <li>un cadrage sérieux</li>
                  <li>un périmètre tenable</li>
                  <li>une base de travail exploitable pour la suite</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des mises en œuvre qui ont besoin d’être tenues</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le besoin est identifié. Le projet est validé. La décision est prise.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais la mise en œuvre devient plus difficile à lire :
                </p>
                <ul className={bulletListClass}>
                  <li>les arbitrages remontent mal</li>
                  <li>les dépendances se multiplient</li>
                  <li>l’avancement réel perd en lisibilité</li>
                  <li>la coordination devient plus exigeante</li>
                  <li>le projet risque de progresser sans vraie cohérence d’ensemble</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Dans ce cas, la valeur se situe dans le pilotage.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Des fonctionnements quotidiens dégradés par des écarts installés
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet n’est pas toujours présenté comme un projet.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il peut se manifester par :</p>
                <ul className={bulletListClass}>
                  <li>des ressaisies</li>
                  <li>des doublons</li>
                  <li>des pertes de temps entre services</li>
                  <li>des méthodes non harmonisées</li>
                  <li>des suivis parallèles</li>
                  <li>une dépendance croissante aux personnes qui compensent</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type de mission, le travail consiste souvent à relire le fonctionnement réel avant d’envisager
                  toute réponse plus structurée.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="maniere-title">
                <h2 id="maniere-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre manière de présenter les cas
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous avons choisi une logique de présentation simple.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque cas est construit pour répondre à quelques questions fondamentales :
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Quel était le point de départ ?</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet était-il mal formulé, trop large, trop diffus, déjà engagé, ou simplement mal tenu ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Où se situait réellement le problème ?</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le besoin ? Dans le périmètre ? Dans les interfaces ? Dans les méthodes ? Dans la comparaison
                  des réponses ? Dans la coordination de la mise en œuvre ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Quel a été le niveau d’intervention utile ?
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Diagnostic ? Cadrage ? Pilotage ? Ou une combinaison de ces trois niveaux ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Qu’est-ce qui a été rendu plus solide ?</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le besoin ? La lecture de la situation ? La qualité de la décision ? La consultation ? L’exécution ?
                  La coordination ? La méthode ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette structure permet de lire les cas non pas comme des récits figés, mais comme des exemples
                  concrets de problématiques traitées à leur bon niveau.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="reel-title">
                <h2 id="reel-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ces cas montrent en réalité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pris ensemble, les cas clients présentés ici montrent une chose simple :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  la plupart des difficultés ne viennent pas d’un manque d’action.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles viennent d’un manque de clarté, de structuration ou de continuité entre l’amont et l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certains sujets ont d’abord besoin d’être relus. D’autres ont besoin d’être cadrés. D’autres encore
                  ont besoin d’être tenus dans la mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Mais dans tous les cas, le point commun est le suivant :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  la qualité de la suite dépend fortement de la qualité :
                </p>
                <ul className={bulletListClass}>
                  <li>du diagnostic initial</li>
                  <li>de la structuration du besoin</li>
                  <li>du périmètre posé</li>
                  <li>de la capacité à garder le fil entre décision et exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les cas clients permettent précisément de rendre ce point tangible.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="decouvrir-title">
                <h2 id="decouvrir-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les cas à découvrir
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/cas-clients/structuration-dun-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    Structuration d’un besoin avant consultation
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce cas montre comment un sujet suffisamment sérieux pour justifier une consultation peut rester encore
                  trop flou pour produire des réponses réellement comparables.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’intervention a consisté à :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin réel</li>
                  <li>poser le bon périmètre</li>
                  <li>formaliser les attentes</li>
                  <li>préparer une base de consultation plus solide</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/cas-clients/diagnostic-et-cadrage-dun-projet-industriel/" className={inlineSeoLinkClass}>
                    Diagnostic et cadrage d’un projet industriel
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce cas montre comment un sujet déjà perçu comme un projet peut avoir besoin, en réalité, d’un travail
                  plus amont de diagnostic et de cadrage avant d’être correctement engagé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’intervention a consisté à :</p>
                <ul className={bulletListClass}>
                  <li>objectiver les points de blocage</li>
                  <li>reformuler le besoin</li>
                  <li>recentrer le périmètre</li>
                  <li>transformer une situation diffuse en base de projet exploitable</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel/"
                    className={inlineSeoLinkClass}
                  >
                    Pilotage de mise en œuvre d’un projet opérationnel
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce cas montre comment un projet validé peut perdre en qualité au moment de l’exécution s’il n’est pas
                  suffisamment tenu.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’intervention a consisté à :</p>
                <ul className={bulletListClass}>
                  <li>clarifier l’avancement réel</li>
                  <li>structurer la coordination</li>
                  <li>rendre visibles les arbitrages</li>
                  <li>sécuriser la continuité du projet dans la mise en œuvre</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/cas-clients/reduction-des-ressaisies-et-clarification-des-methodes/"
                    className={inlineSeoLinkClass}
                  >
                    Réduction des ressaisies et clarification des méthodes
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce cas montre comment un problème apparemment quotidien, doublons, ressaisies, méthodes divergentes,
                  peut révéler un besoin plus profond de clarification du fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’intervention a consisté à :</p>
                <ul className={bulletListClass}>
                  <li>relire les pratiques effectives</li>
                  <li>comprendre ce que les ressaisies compensaient</li>
                  <li>clarifier les points de passage</li>
                  <li>hiérarchiser les leviers d’action</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="lire-title">
                <h2 id="lire-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi lire ces cas avant de lancer la suite
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ces cas sont utiles si vous êtes dans l’une des situations suivantes :</p>
                <ul className={bulletListClass}>
                  <li>
                    vous avez identifié un sujet, mais ne savez pas encore s’il relève d’un diagnostic, d’un cadrage
                    ou d’un pilotage
                  </li>
                  <li>vous devez consulter, mais le besoin reste encore partiellement flou</li>
                  <li>un projet existe déjà, mais sa base vous semble encore fragile</li>
                  <li>la mise en œuvre avance, mais devient plus difficile à tenir</li>
                  <li>
                    le fonctionnement quotidien révèle des pertes de temps, des ressaisies ou des écarts de méthode qui
                    ne sont plus de simples irritants
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Lire ces cas permet souvent de mieux qualifier votre propre situation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Non pas parce qu’un cas serait identique au vôtre.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Mais parce qu’il aide à reconnaître :</p>
                <ul className={bulletListClass}>
                  <li>le niveau réel du sujet</li>
                  <li>le type de problème en jeu</li>
                  <li>le niveau d’intervention utile</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les cas clients ne servent pas à raconter des missions réussies au sens vague.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils servent à montrer comment une situation réelle peut être :
                </p>
                <ul className={bulletListClass}>
                  <li>mieux lue</li>
                  <li>mieux cadrée</li>
                  <li>mieux structurée</li>
                  <li>ou mieux tenue dans sa mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est ce déplacement qui nous intéresse :</p>
                <ul className={bulletListClass}>
                  <li>du symptôme vers le sujet réel</li>
                  <li>du sujet réel vers un cadre plus solide</li>
                  <li>de ce cadre vers une suite plus juste</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous cherchez à comprendre à quoi ressemble concrètement ce type de travail, ces cas clients sont
                  le meilleur point d’entrée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic du fonctionnement opérationnel
                  </Link>
                  ,{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    cadrage de projet industriel et cahier des charges
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
                  Besoin de clarifier votre situation ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à choisir le bon niveau d’intervention : diagnostic, cadrage ou pilotage.
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
