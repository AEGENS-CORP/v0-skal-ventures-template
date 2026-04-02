import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { HubQuickSommaire } from "@/components/site/hub-quick-sommaire"
import { ressourcesPages } from "@/lib/ae-content"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const toSummary = (text: string) =>
  text.length > 118 ? `${text.slice(0, 115).trimEnd().replace(/[.,;:!?]$/, "")}...` : text

const ressourcesQuickItems = ressourcesPages.map((page) => ({
  href: `/ressources/${page.slug}/`,
  title: page.title,
  summary: toSummary(page.intro),
}))

export const RessourcesHubMeta = {
  title: "Ressources | Diagnostic, cadrage et pilotage de projets | AEGENS",
  description:
    "Guides, repères et contenus utiles pour comprendre, cadrer et piloter un projet en industrie, logistique et retail.",
}

export function RessourcesHubPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Ressources" }]} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Ressources
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Une ressource utile ne sert pas à remplir un site.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle sert à clarifier un sujet que l’entreprise est en train de vivre.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans la réalité, un dirigeant, un responsable d’exploitation, un responsable de site, un responsable
                méthodes, un DSI, un responsable logistique ou un chef de projet ne cherche pas d’abord du contenu.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il cherche à comprendre une situation qui résiste encore à une lecture simple.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il essaie de répondre à des questions concrètes :
              </p>
              <ul className={bulletListClass}>
                <li>comment cadrer un projet industriel sans partir trop vite dans une solution</li>
                <li>comment rédiger un cahier des charges vraiment exploitable</li>
                <li>comment piloter un projet sans alourdir inutilement l’organisation</li>
                <li>comment consulter des prestataires sur une base sérieuse</li>
                <li>à quel moment un regard extérieur devient utile</li>
                <li>
                  comment distinguer un problème de méthode, d’organisation, de pilotage ou de besoin mal formulé
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est à ces questions que cette section répond.
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
            title="Sommaire des ressources"
            subtitle="Un mini-sommaire pour accéder immédiatement à chaque guide clé."
            items={ressourcesQuickItems}
          />

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="pourquoi-title">
                <h2 id="pourquoi-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette section existe
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, les sujets importants ne manquent pas de bonne volonté.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils manquent de formulation.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème n’est pas toujours de ne pas savoir qu’un sujet existe.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème est souvent de ne pas encore savoir le nommer au bon niveau.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet peut sembler bloqué alors qu’il est surtout mal cadré.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une consultation peut sembler difficile alors que le besoin est encore mal défini.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une perte de temps peut sembler venir d’un outil alors qu’elle vient d’abord d’une méthode ou d’une
                  interface entre services.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un besoin de pilotage peut en réalité masquer un défaut d’amont.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est précisément pour cela que cette section a été construite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle n’a pas vocation à produire des contenus abstraits ou décoratifs.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle a vocation à aider à mieux lire les sujets avant de décider, consulter ou lancer.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="trouverez-title">
                <h2 id="trouverez-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que vous trouverez ici
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des guides pour structurer un projet</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces contenus aident à répondre à des questions comme :
                </p>
                <ul className={bulletListClass}>
                  <li>comment cadrer un projet industriel</li>
                  <li>comment rédiger un cahier des charges fonctionnel</li>
                  <li>comment piloter un projet en PME</li>
                  <li>comment préparer une mise en œuvre de manière plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils servent à remettre de l’ordre dans les fondamentaux :
                </p>
                <ul className={bulletListClass}>
                  <li>besoin</li>
                  <li>objectif</li>
                  <li>périmètre</li>
                  <li>contraintes</li>
                  <li>parties prenantes</li>
                  <li>méthode</li>
                  <li>logique de suite</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des contenus pour mieux choisir</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certains sujets deviennent sensibles au moment de la consultation, du choix d’un prestataire ou de la
                  comparaison de plusieurs options.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans cette section, vous trouverez des contenus pour clarifier :
                </p>
                <ul className={bulletListClass}>
                  <li>comment structurer un besoin avant consultation</li>
                  <li>comment choisir un prestataire</li>
                  <li>sur quelle base comparer des réponses</li>
                  <li>comment éviter de confondre prix, périmètre et qualité réelle de réponse</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Des contenus pour mieux distinguer les notions
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un grand nombre de projets se compliquent parce que les mots sont utilisés trop vaguement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi cette section propose aussi des contenus de clarification sur des distinctions utiles :
                </p>
                <ul className={bulletListClass}>
                  <li>cadrage vs gestion de projet</li>
                  <li>cahier des charges vs expression de besoin</li>
                  <li>audit organisationnel vs audit SI</li>
                  <li>AMOE, MOE, MOA</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ces contenus ne sont pas là pour faire expert.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils sont là pour éviter des erreurs de raisonnement très concrètes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Des repères pour lire le bon niveau d’intervention
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certaines entreprises cherchent un outil alors qu’elles ont d’abord besoin d’un diagnostic.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  D’autres veulent lancer un projet alors qu’elles ont encore besoin de clarifier le sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  D’autres encore veulent avancer, mais manquent surtout d’une meilleure lecture de leur fonctionnement
                  réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette section aide à répondre à une question centrale : à quel niveau faut-il intervenir pour traiter
                  correctement le sujet ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="qui-title">
                <h2 id="qui-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  À qui s’adressent ces ressources
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces contenus sont utiles si vous êtes dans l’une des situations suivantes :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    vous avez identifié un sujet important, mais vous ne savez pas encore s’il relève d’un diagnostic,
                    d’un cadrage ou d’un pilotage
                  </li>
                  <li>vous devez consulter, mais le besoin reste encore trop flou</li>
                  <li>vous avez déjà plusieurs pistes, mais elles restent difficiles à comparer</li>
                  <li>vous sentez qu’un projet existe, sans être encore réellement structuré</li>
                  <li>vous voulez clarifier un sujet avant d’engager plus de temps, de budget ou d’énergie</li>
                  <li>vous avez besoin de remettre de la lisibilité dans un fonctionnement, une méthode ou une mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ces contenus sont pensés pour des contextes réels :</p>
                <ul className={bulletListClass}>
                  <li>industrie</li>
                  <li>logistique</li>
                  <li>retail</li>
                  <li>environnements multiservices</li>
                  <li>projets transverses</li>
                  <li>sujets opérationnels qui demandent à la fois lecture du terrain, structuration et capacité d’exécution</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="editoriale-title">
                <h2 id="editoriale-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre logique éditoriale
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous avons volontairement choisi une approche simple.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne publions pas du contenu pour couvrir artificiellement des mots-clés sans utilité réelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous publions des contenus qui doivent répondre à une question que se pose réellement une entreprise.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cette logique repose sur quatre principes.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Partir des vraies questions</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon contenu commence par une vraie question métier ou projet, pas par une formule marketing.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Rester au bon niveau</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous cherchons à expliquer clairement, sans jargon inutile, sans simplification excessive et sans
                  promesse artificielle.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Relier toujours le concept au réel</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un bon contenu n’est pas seulement exact.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il doit aider à relire une situation concrète :</p>
                <ul className={bulletListClass}>
                  <li>un besoin mal défini</li>
                  <li>un projet mal cadré</li>
                  <li>une consultation fragile</li>
                  <li>une mise en œuvre difficile à tenir</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Aider à décider plus justement</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le but final n’est pas d’informer pour informer.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le but est de remettre l’entreprise dans une position où elle peut :</p>
                <ul className={bulletListClass}>
                  <li>mieux qualifier son sujet</li>
                  <li>mieux choisir son niveau de réponse</li>
                  <li>mieux préparer la suite</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="grands-title">
                <h2 id="grands-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les grands sujets couverts dans cette section
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Cadrer un projet avant de le lancer</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’un des sujets les plus fréquents est le cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Beaucoup de projets sont lancés avec :</p>
                <ul className={bulletListClass}>
                  <li>un objectif encore trop large</li>
                  <li>un périmètre mal stabilisé</li>
                  <li>des contraintes insuffisamment intégrées</li>
                  <li>une lecture encore partielle du besoin</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les ressources liées au cadrage servent à éviter cela.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Formaliser un besoin de manière exploitable
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une autre série de contenus porte sur la formulation du besoin :
                </p>
                <ul className={bulletListClass}>
                  <li>expression de besoin</li>
                  <li>cahier des charges</li>
                  <li>structuration avant consultation</li>
                  <li>critères de choix</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le but est de permettre une formalisation utile, pas simplement documentaire.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Piloter sans alourdir</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage de projet est souvent mal compris.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Soit il est traité trop légèrement, soit il devient trop procédural.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les contenus associés servent à rappeler ce qu’un pilotage utile doit réellement produire :
                </p>
                <ul className={bulletListClass}>
                  <li>lisibilité</li>
                  <li>coordination</li>
                  <li>arbitrages</li>
                  <li>rythme</li>
                  <li>continuité entre décisions et exécution</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Clarifier le bon rôle des acteurs</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certaines ressources servent aussi à clarifier qui fait quoi dans un projet :
                </p>
                <ul className={bulletListClass}>
                  <li>maîtrise d’ouvrage</li>
                  <li>maîtrise d’œuvre</li>
                  <li>assistance</li>
                  <li>rôle du cadrage</li>
                  <li>rôle du pilotage</li>
                  <li>place du besoin</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces distinctions sont importantes parce qu’un projet se fragilise très vite quand les responsabilités
                  deviennent floues.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="lire-title">
                <h2 id="lire-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment lire cette section intelligemment
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Si votre sujet est encore flou</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Commencez par les contenus qui aident à clarifier :</p>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/ressources/quand-faire-appel-a-un-regard-exterieur/" className={inlineSeoLinkClass}>
                      Quand faire appel à un regard extérieur
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                      Comment cadrer un projet industriel
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources/cahier-des-charges-vs-expression-de-besoin/" className={inlineSeoLinkClass}>
                      Cahier des charges vs expression de besoin
                    </Link>
                  </li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Si vous devez consulter ou choisir</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Commencez par :</p>
                <ul className={bulletListClass}>
                  <li>
                    <Link
                      href="/ressources/comment-structurer-un-besoin-avant-consultation/"
                      className={inlineSeoLinkClass}
                    >
                      Comment structurer un besoin avant consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/"
                      className={inlineSeoLinkClass}
                    >
                      Comment choisir un prestataire pour un projet industriel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ressources/comment-rediger-un-cahier-des-charges-fonctionnel/"
                      className={inlineSeoLinkClass}
                    >
                      Comment rédiger un cahier des charges fonctionnel
                    </Link>
                  </li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Si votre projet est déjà engagé</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Commencez par :</p>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/ressources/comment-piloter-un-projet-industriel-en-pme/" className={inlineSeoLinkClass}>
                      Comment piloter un projet industriel en PME
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources/cadrage-vs-gestion-de-projet/" className={inlineSeoLinkClass}>
                      Cadrage vs gestion de projet
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources/amoe-moe-moa-quelle-difference/" className={inlineSeoLinkClass}>
                      AMOE, MOE, MOA : quelle différence ?
                    </Link>
                  </li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Si vous cherchez surtout à remettre de la clarté</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Commencez par les contenus qui aident à relire le sujet au bon niveau :</p>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/ressources/audit-organisationnel-vs-audit-si/" className={inlineSeoLinkClass}>
                      Audit organisationnel vs audit SI
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources/quand-faire-appel-a-un-regard-exterieur/" className={inlineSeoLinkClass}>
                      Quand faire appel à un regard extérieur
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                      Comment cadrer un projet industriel
                    </Link>
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="principales-title">
                <h2 id="principales-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les ressources principales à découvrir
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    Comment cadrer un projet industriel
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour comprendre comment transformer un sujet encore diffus en projet structuré.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/ressources/comment-rediger-un-cahier-des-charges-fonctionnel/"
                    className={inlineSeoLinkClass}
                  >
                    Comment rédiger un cahier des charges fonctionnel
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour formaliser un besoin de manière claire, comparable et exploitable.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/ressources/comment-piloter-un-projet-industriel-en-pme/" className={inlineSeoLinkClass}>
                    Comment piloter un projet industriel en PME
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour structurer l’avancement, la coordination et les arbitrages sans alourdir inutilement le
                  fonctionnement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    Comment choisir un prestataire pour un projet industriel
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour comparer correctement des réponses et éviter les choix construits sur une base trop fragile.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/ressources/quand-faire-appel-a-un-regard-exterieur/" className={inlineSeoLinkClass}>
                    Quand faire appel à un regard extérieur
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour savoir à quel moment une situation mérite un travail d’objectivation, de reformulation ou de
                  structuration.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/ressources/comment-structurer-un-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    Comment structurer un besoin avant consultation
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour préparer une consultation sur une base sérieuse, plutôt que de demander aux offres de compenser
                  un amont mal clarifié.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/ressources/cadrage-vs-gestion-de-projet/" className={inlineSeoLinkClass}>
                    Cadrage vs gestion de projet
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour distinguer ce qui relève de la définition du sujet et ce qui relève de sa conduite.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/ressources/cahier-des-charges-vs-expression-de-besoin/" className={inlineSeoLinkClass}>
                    Cahier des charges vs expression de besoin
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour savoir à quel moment clarifier, à quel moment formaliser, et avec quel niveau de précision.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/ressources/audit-organisationnel-vs-audit-si/" className={inlineSeoLinkClass}>
                    Audit organisationnel vs audit SI
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour ne pas se tromper de focale quand un problème touche à la fois fonctionnement et système
                  d’information.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/ressources/amoe-moe-moa-quelle-difference/" className={inlineSeoLinkClass}>
                    AMOE, MOE, MOA : quelle différence ?
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour clarifier les rôles et éviter les projets où chacun pense que l’autre porte ce qui n’a pas été
                  attribué clairement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="lien-title">
                <h2 id="lien-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le lien entre ces ressources et nos offres
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ces ressources n’existent pas à côté de nos offres.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles en montrent la logique.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un sujet qui commence par une question de lecture ou de compréhension renvoie souvent à un besoin de
                  diagnostic.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un sujet qui commence par un besoin flou, un périmètre instable ou une consultation difficile renvoie
                  souvent à un besoin de cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un sujet qui existe déjà, mais qui devient plus difficile à faire avancer proprement, renvoie souvent
                  à un besoin de pilotage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces contenus permettent donc aussi de mieux comprendre quand une problématique relève de :
                </p>
                <ul className={bulletListClass}>
                  <li>l’analyse du fonctionnement</li>
                  <li>la structuration du besoin</li>
                  <li>la tenue de la mise en œuvre</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cette section Ressources a été conçue pour répondre à une réalité simple :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  dans beaucoup d’entreprises, le sujet n’est pas seulement de faire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet est d’abord de comprendre ce qu’il faut faire, à quel niveau, dans quel périmètre, et sur
                  quelle base de décision.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est pour cela que ces contenus existent.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils servent à :</p>
                <ul className={bulletListClass}>
                  <li>clarifier un sujet</li>
                  <li>mieux distinguer les notions</li>
                  <li>mieux préparer une consultation</li>
                  <li>mieux cadrer un projet</li>
                  <li>mieux piloter une mise en œuvre</li>
                  <li>mieux choisir le bon niveau d’intervention</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous êtes en train de qualifier un sujet important, cette section est le bon point d’entrée pour
                  remettre de la clarté avant d’engager la suite.
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
                  Besoin de qualifier un sujet avant de lancer la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier la problématique, poser le bon cadre et sécuriser la mise en œuvre.
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
