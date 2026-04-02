import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { HubQuickSommaire } from "@/components/site/hub-quick-sommaire"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const offresQuickItems = [
  {
    href: "/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/",
    title: "Diagnostic du fonctionnement opérationnel",
    summary: "Relire le réel pour objectiver les causes, prioriser et décider sur une base solide.",
  },
  {
    href: "/offres/cadrage-projet-industriel-cahier-des-charges/",
    title: "Cadrage de projet et cahier des charges",
    summary: "Transformer un besoin diffus en projet structuré et consultable proprement.",
  },
  {
    href: "/offres/pilotage-mise-en-oeuvre-projet-industriel/",
    title: "Pilotage de mise en œuvre",
    summary: "Tenir la coordination, les arbitrages et le rythme jusqu’à l’exécution réelle.",
  },
  {
    href: "/methode/",
    title: "Méthode",
    summary: "Comprendre la logique d’intervention : diagnostic, cadrage, pilotage.",
  },
  {
    href: "/problematiques/",
    title: "Problématiques",
    summary: "Identifier rapidement le type de sujet que vous devez traiter en premier.",
  },
  {
    href: "/cas-clients/",
    title: "Cas clients",
    summary: "Voir comment ces offres s’appliquent à des contextes opérationnels concrets.",
  },
  {
    href: "/ressources/",
    title: "Ressources",
    summary: "Accéder aux guides pratiques pour structurer la suite de votre projet.",
  },
]

export const OffresHubMeta = {
  title: "Offres | Diagnostic, cadrage et pilotage de projets | AEGENS",
  description:
    "AEGENS accompagne l’industrie, la logistique et le retail en diagnostic, cadrage et pilotage de projets pour clarifier, structurer et faire aboutir les sujets opérationnels.",
}

export function OffresHubPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Offres" }]} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Nos offres
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un projet utile ne commence pas toujours par une décision.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il commence souvent par une situation encore insuffisamment clarifiée.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Quelque chose ralentit. Un besoin existe, mais reste difficile à formuler. Un projet semble
                nécessaire, mais son périmètre n’est pas encore assez stable. Une consultation doit être lancée, mais
                la base de comparaison reste fragile. Ou bien la décision a déjà été prise, mais la mise en œuvre
                devient plus difficile à tenir.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est précisément sur cette chaîne que nous intervenons.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Nos offres ne sont pas pensées comme trois prestations juxtaposées.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elles correspondent à trois niveaux d’intervention complémentaires, qui répondent à trois moments
                différents d’un même sujet :
              </p>
              <ul className={bulletListClass}>
                <li>comprendre ce qui se passe réellement</li>
                <li>structurer ce qui doit être lancé</li>
                <li>faire avancer ce qui doit être mis en œuvre</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Autrement dit :</p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">diagnostic, cadrage, pilotage.</p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/methode/">Découvrir notre méthode</Link>
                </Button>
              </div>
            </div>
          </section>

          <HubQuickSommaire
            title="Sommaire des offres"
            subtitle="Un accès direct aux pages clés pour choisir le bon niveau d’intervention."
            items={offresQuickItems}
          />

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="why-three-title">
                <h2 id="why-three-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ces trois offres existent
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, les difficultés ne viennent pas d’un manque d’énergie ou d’intention.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles viennent d’un décalage entre :</p>
                <ul className={bulletListClass}>
                  <li>ce qui est perçu</li>
                  <li>ce qui est réellement en jeu</li>
                  <li>ce qui est décidé</li>
                  <li>et ce qui est effectivement mis en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce décalage produit plusieurs situations typiques.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parfois, l’entreprise sait qu’il y a un sujet, mais elle n’a pas encore une lecture assez claire du
                  fonctionnement réel pour décider correctement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parfois, le besoin est identifié, mais il reste encore trop diffus pour être transformé en projet
                  structuré, en cahier des charges ou en consultation sérieuse.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parfois enfin, le projet existe déjà, mais sa mise en œuvre demande une coordination, un rythme et
                  une tenue plus solides.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pour répondre à ces trois moments que nous avons structuré notre offre de cette manière.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="simple-logic-title">
                <h2 id="simple-logic-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Une logique simple : comprendre, structurer, faire avancer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nos offres suivent une logique volontairement simple.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Comprendre</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de choisir, lancer ou transformer, il faut lire correctement la situation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est le rôle du diagnostic.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Structurer</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de consulter, de comparer ou de lancer un projet, il faut poser un cadre clair.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est le rôle du cadrage.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Faire avancer</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le projet existe déjà et entre en exécution, il faut maintenir la continuité entre décisions,
                  actions et mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est le rôle du pilotage.</p>

                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette logique est importante, parce qu’elle évite deux erreurs très fréquentes :
                </p>
                <ul className={bulletListClass}>
                  <li>demander trop tôt à la solution de répondre à un besoin encore mal formulé</li>
                  <li>demander trop tard au pilotage de compenser ce qui n’a pas été clarifié en amont</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="subjects-title">
                <h2 id="subjects-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  À quels types de sujets ces offres répondent
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nos offres sont conçues pour des situations concrètes, comme par exemple :
                </p>
                <ul className={bulletListClass}>
                  <li>des pertes de temps entre services</li>
                  <li>des ressaisies ou des fichiers parallèles devenus structurels</li>
                  <li>un manque de visibilité sur les processus</li>
                  <li>des méthodes de travail non harmonisées</li>
                  <li>un besoin encore trop flou avant consultation</li>
                  <li>un projet industriel mal cadré</li>
                  <li>une organisation qui compense trop au quotidien</li>
                  <li>une mise en œuvre qui avance, mais sans cadre suffisamment lisible</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans tous ces cas, la première question n’est pas toujours : quelle solution choisir ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La première question est souvent : de quoi le sujet a-t-il réellement besoin maintenant ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  A-t-il besoin d’être compris ? D’être structuré ? Ou d’être tenu dans sa mise en œuvre ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nos trois offres répondent précisément à cette question.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour prolonger cette lecture, consultez aussi{" "}
                  <Link href="/problematiques/" className={inlineSeoLinkClass}>
                    nos problématiques
                  </Link>
                  ,{" "}
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    nos cas clients
                  </Link>{" "}
                  et{" "}
                  <Link href="/ressources/" className={inlineSeoLinkClass}>
                    nos ressources
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="offer-1-title">
                <h2 id="offer-1-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Offre 1 — Diagnostic du fonctionnement opérationnel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic intervient lorsqu’une entreprise a besoin de prendre du recul sur une situation, de
                  relire son fonctionnement réel et d’objectiver ce qui freine.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il est utile lorsque :</p>
                <ul className={bulletListClass}>
                  <li>les pertes de temps existent, mais leurs causes restent mal qualifiées</li>
                  <li>plusieurs irritants se cumulent sans lecture claire</li>
                  <li>des écarts entre services ou méthodes deviennent récurrents</li>
                  <li>le besoin paraît réel, mais encore trop flou pour être directement structuré</li>
                  <li>ou la direction a besoin d’un regard extérieur avant de décider de la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic ne sert pas à produire un constat abstrait. Il sert à lire une situation dans sa
                  réalité concrète : méthodes de travail, organisation opérationnelle, points de blocage, interfaces
                  entre équipes, validations, ressaisies, contournements, circulation de l’information et
                  responsabilités implicites.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Son objectif est double :</p>
                <ul className={bulletListClass}>
                  <li>rendre la situation plus lisible</li>
                  <li>préparer une base plus solide pour décider de la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, le diagnostic n’est pas une fin en soi. Il permet de mieux comprendre ce qu’il faut
                  réellement traiter, et à quel niveau.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Page associée :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic du fonctionnement opérationnel en PME industrielle
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="offer-2-title">
                <h2 id="offer-2-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Offre 2 — Cadrage de projet et cahier des charges
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage intervient lorsqu’un sujet existe déjà, mais doit encore être structuré avant d’être
                  consulté, comparé ou lancé proprement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il est utile lorsque :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est identifié, mais encore mal formulé</li>
                  <li>plusieurs lectures du sujet coexistent</li>
                  <li>le périmètre reste instable</li>
                  <li>une consultation de prestataires est envisagée, mais la base n’est pas encore assez solide</li>
                  <li>un projet doit être lancé, mais l’amont reste trop fragile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage sert à transformer un sujet encore diffus en base de travail exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il permet de :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin réel</li>
                  <li>préciser l’objectif</li>
                  <li>poser le périmètre</li>
                  <li>rendre visibles les contraintes</li>
                  <li>identifier les parties prenantes</li>
                  <li>hiérarchiser les attentes</li>
                  <li>formaliser une base utilisable pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon les situations, cela peut conduire à :</p>
                <ul className={bulletListClass}>
                  <li>une note de cadrage</li>
                  <li>une expression de besoin</li>
                  <li>une roadmap</li>
                  <li>un cahier des charges</li>
                  <li>une base de consultation plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le rôle du cadrage n’est pas de produire un document de plus. Son rôle est de rendre le projet plus
                  clair, plus partageable, plus arbitrable et plus robuste avant toute mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Page associée :{" "}
                  <Link
                    href="/offres/cadrage-projet-industriel-cahier-des-charges/"
                    className={inlineSeoLinkClass}
                  >
                    cadrage de projet industriel et cahier des charges
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="offer-3-title">
                <h2 id="offer-3-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Offre 3 — Pilotage de mise en œuvre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage intervient quand le projet n’a plus seulement besoin d’être compris ou structuré, mais
                  d’être tenu dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il est utile lorsque :</p>
                <ul className={bulletListClass}>
                  <li>le projet est validé</li>
                  <li>plusieurs acteurs doivent avancer ensemble</li>
                  <li>la coordination devient plus exigeante</li>
                  <li>des arbitrages doivent être remontés au bon moment</li>
                  <li>l’avancement réel perd en lisibilité</li>
                  <li>ou la mise en œuvre doit être sécurisée jusqu’au terrain</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage n’est pas une couche administrative supplémentaire. Il sert à maintenir une continuité
                  entre le besoin de départ, les décisions prises, les actions engagées et ce qui se passe réellement
                  dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il permet de :</p>
                <ul className={bulletListClass}>
                  <li>clarifier l’avancement</li>
                  <li>structurer la coordination</li>
                  <li>faire remonter les points de vigilance</li>
                  <li>préparer les arbitrages</li>
                  <li>tenir le rythme</li>
                  <li>garder une lecture lisible du projet dans le temps</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, le pilotage ne sert pas seulement à suivre. Il sert à faire en sorte que le projet
                  reste cohérent, tenable et exécutable jusqu’à sa mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Page associée :{" "}
                  <Link
                    href="/offres/pilotage-mise-en-oeuvre-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    pilotage de mise en œuvre de projet industriel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="which-offer-title">
                <h2 id="which-offer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir de quelle offre vous avez besoin
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent la première vraie question.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon point d’entrée dépend moins du nom du projet que du niveau réel du sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Vous avez probablement besoin d’un diagnostic si :
                </p>
                <ul className={bulletListClass}>
                  <li>la situation reste encore difficile à lire</li>
                  <li>plusieurs symptômes existent, mais le problème réel n’est pas encore bien qualifié</li>
                  <li>vous sentez qu’un sujet existe sans pouvoir encore dire clairement ce qu’il faut traiter</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Vous avez probablement besoin d’un cadrage si :
                </p>
                <ul className={bulletListClass}>
                  <li>le besoin est déjà identifié</li>
                  <li>mais doit encore être transformé en projet structuré</li>
                  <li>ou en base de consultation / cahier des charges</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Vous avez probablement besoin de pilotage si :
                </p>
                <ul className={bulletListClass}>
                  <li>le projet est déjà engagé</li>
                  <li>et que la vraie difficulté devient la coordination, les arbitrages, le rythme ou la tenue</li>
                </ul>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Vous pouvez aussi avoir besoin de plusieurs niveaux</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est fréquent. Un diagnostic peut naturellement déboucher sur un cadrage. Un cadrage peut ouvrir
                  sur un pilotage. Et certains sujets demandent une continuité entre les trois.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’important n’est pas de dérouler systématiquement tout le cycle. L’important est d’intervenir au
                  bon niveau, au bon moment.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-title">
                <h2 id="common-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nos offres ont en commun
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Même si elles répondent à des moments différents, nos offres partagent la même logique de fond.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Partir du réel</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d’une solution à placer. Nous partons du fonctionnement réel, du besoin réel et
                  du niveau réel du sujet.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Clarifier avant d’accélérer</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous préférons poser une base juste plutôt que lancer trop vite un projet encore mal formulé.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Aller à l’essentiel</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif n’est pas de produire plus de complexité. L’objectif est de distinguer ce qui compte
                  vraiment.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Garder un lien fort avec l’exécution</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Même lorsqu’un sujet est encore en phase de diagnostic ou de cadrage, nous le lisons déjà avec une
                  logique de suite : qu’est-ce que cela implique, qu’est-ce que cela rend possible, qu’est-ce qui
                  devra être tenu dans la mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette continuité est importante, parce qu’elle évite de créer une rupture entre l’analyse, la
                  structuration et l’exécution.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="not-buying-title">
                <h2 id="not-buying-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que vous n’achetez pas avec nous
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est aussi important à dire.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous n’achetez pas :</p>
                <ul className={bulletListClass}>
                  <li>un discours de transformation générique</li>
                  <li>une couche de jargon</li>
                  <li>une solution prédéfinie</li>
                  <li>un diagnostic hors-sol</li>
                  <li>ou un pilotage décoratif</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous achetez un travail utile pour :</p>
                <ul className={bulletListClass}>
                  <li>comprendre un sujet</li>
                  <li>le structurer</li>
                  <li>et, si nécessaire, le faire aboutir</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette différence compte, parce qu’elle conditionne le type de valeur réellement apportée.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="environments-title">
                <h2 id="environments-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Dans quels environnements nous intervenons
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nos offres s’adressent principalement à des entreprises de l’industrie, de la logistique et du
                  retail.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous intervenons dans des contextes où :</p>
                <ul className={bulletListClass}>
                  <li>le fonctionnement réel compte</li>
                  <li>les interfaces entre équipes sont déterminantes</li>
                  <li>la qualité de mise en œuvre a un impact direct</li>
                  <li>les sujets demandent autant de lecture terrain que de structuration projet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, des environnements où il ne suffit pas d’avoir une idée juste. Il faut aussi être
                  capable de la transformer en action tenue.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="first-offer-title">
                <h2 id="first-offer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quelle offre vient en premier ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il n’y a pas de réponse automatique.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Mais il y a une règle simple : on commence par le niveau qui manque le plus.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si le sujet manque surtout de clarté, on commence par le diagnostic. S’il manque surtout de
                  structuration, on commence par le cadrage. S’il manque surtout de tenue dans l’exécution, on commence
                  par le pilotage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Et si vous hésitez, c’est souvent que le besoin initial n’est pas encore assez qualifié, ce qui
                  oriente généralement vers un premier travail de clarification.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nos offres couvrent trois niveaux d’intervention complémentaires :
                </p>
                <ul className={bulletListClass}>
                  <li>Diagnostic pour comprendre et objectiver</li>
                  <li>Cadrage pour structurer et formaliser</li>
                  <li>Pilotage pour coordonner et faire avancer</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles répondent à une logique simple :</p>
                <ul className={bulletListClass}>
                  <li>lire correctement la situation</li>
                  <li>poser un cadre clair</li>
                  <li>sécuriser l’exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet existe déjà mais que vous ne savez pas encore s’il faut le diagnostiquer, le cadrer
                  ou le piloter, cette page est le point de départ. Le bon niveau d’intervention est toujours celui qui
                  permet de traiter le sujet réel, pas seulement son symptôme le plus visible.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic
                  </Link>
                  ,{" "}
                  <Link
                    href="/offres/cadrage-projet-industriel-cahier-des-charges/"
                    className={inlineSeoLinkClass}
                  >
                    cadrage
                  </Link>
                  ,{" "}
                  <Link
                    href="/offres/pilotage-mise-en-oeuvre-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    pilotage
                  </Link>
                  ,{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    méthode
                  </Link>
                  ,{" "}
                  <Link href="/problematiques/" className={inlineSeoLinkClass}>
                    problématiques
                  </Link>
                  ,{" "}
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    cas clients
                  </Link>{" "}
                  et{" "}
                  <Link href="/ressources/" className={inlineSeoLinkClass}>
                    ressources
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
                  Besoin d’identifier le bon niveau d’intervention ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à qualifier le sujet et choisir entre diagnostic, cadrage et pilotage.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/methode/">Voir notre méthode</Link>
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
