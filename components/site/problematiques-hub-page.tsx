import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { HubQuickSommaire } from "@/components/site/hub-quick-sommaire"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const problematiquesQuickItems = [
  {
    href: "/problematiques/pertes-de-temps-entre-services-industrie/",
    title: "Pertes de temps entre services",
    summary: "Quand les passages inter-équipes deviennent des zones de friction répétées.",
  },
  {
    href: "/problematiques/ressaisies-excel-mails-pme-industrielle/",
    title: "Ressaisies Excel et mails",
    summary: "Symptômes d’un fonctionnement trop dépendant de contournements manuels.",
  },
  {
    href: "/problematiques/projet-industriel-mal-cadre/",
    title: "Projet industriel mal cadré",
    summary: "Périmètre instable, arbitrages tardifs et dérives dans l’exécution.",
  },
  {
    href: "/problematiques/besoin-mal-defini-avant-consultation-prestataires/",
    title: "Besoin mal défini avant consultation",
    summary: "Le besoin n’est pas assez structuré pour consulter et comparer sérieusement.",
  },
  {
    href: "/problematiques/choisir-solution-ou-prestataire-industriel/",
    title: "Choisir solution ou prestataire",
    summary: "Sécuriser la comparaison avant décision pour éviter les choix fragiles.",
  },
  {
    href: "/problematiques/organisation-entre-services-inefficace/",
    title: "Organisation entre services inefficace",
    summary: "Les interfaces sont floues et l’organisation compense au lieu de tenir.",
  },
  {
    href: "/problematiques/manque-de-visibilite-sur-les-processus/",
    title: "Manque de visibilité sur les processus",
    summary: "L’avancement réel est difficile à lire, les arbitrages deviennent réactifs.",
  },
  {
    href: "/problematiques/methodes-de-travail-non-harmonisees/",
    title: "Méthodes non harmonisées",
    summary: "Des pratiques divergentes créent écarts, reprises et charge cachée.",
  },
]

export const ProblematiquesHubMeta = {
  title: "Problématiques opérationnelles en industrie, logistique et retail | AEGENS",
  description:
    "Identifier les problématiques opérationnelles qui justifient un diagnostic, un cadrage ou un pilotage de projet : pertes de temps, ressaisies, manque de visibilité, coordination et structuration.",
}

export function ProblematiquesHubPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Problématiques" }]} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Problématiques opérationnelles
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un besoin de diagnostic ou de cadrage ne commence presque jamais par un mot technique.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Il commence par une gêne concrète.</p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Quelque chose prend trop de temps. Une coordination se dégrade. Un projet avance sans être vraiment
                stabilisé. Des ressaisies s’installent. Des validations deviennent floues. Des équipes compensent en
                permanence. Une consultation doit être lancée, mais le besoin n’est pas encore assez clair pour être
                comparé proprement.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans la plupart des cas, une entreprise ne formule pas d’abord son sujet comme :
              </p>
              <ul className={bulletListClass}>
                <li>nous avons besoin d’un diagnostic du fonctionnement opérationnel</li>
                <li>nous avons besoin d’un cadrage de projet</li>
                <li>nous avons besoin d’un pilotage de mise en œuvre</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle formule d’abord ce qu’elle subit :
              </p>
              <ul className={bulletListClass}>
                <li>des pertes de temps</li>
                <li>des écarts entre services</li>
                <li>un manque de visibilité</li>
                <li>des méthodes de travail qui divergent</li>
                <li>un projet mal cadré</li>
                <li>un besoin encore trop flou avant consultation</li>
                <li>une mise en œuvre qui devient plus difficile à tenir</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est précisément à ce niveau que commence notre travail.
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
            title="Sommaire des problématiques"
            subtitle="Repérez rapidement la problématique qui ressemble le plus à votre situation."
            items={problematiquesQuickItems}
          />

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="commun-title">
                <h2 id="commun-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ces problématiques ont en commun
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ces sujets paraissent différents.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En réalité, ils ont souvent une même structure.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils révèlent un écart entre :</p>
                <ul className={bulletListClass}>
                  <li>le fonctionnement théorique et le fonctionnement réel</li>
                  <li>l’organisation prévue et l’organisation vécue</li>
                  <li>le besoin perçu et le besoin réellement formulé</li>
                  <li>la décision prise et la capacité à la mettre en œuvre proprement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, la difficulté visible n’est pas toujours le vrai sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle en est souvent le symptôme le plus concret.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une ressaisie peut révéler :</p>
                <ul className={bulletListClass}>
                  <li>une méthode de travail non harmonisée</li>
                  <li>une circulation d’information peu stabilisée</li>
                  <li>une validation mal positionnée</li>
                  <li>une responsabilité implicite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une perte de temps entre services peut révéler :
                </p>
                <ul className={bulletListClass}>
                  <li>des points de passage mal tenus</li>
                  <li>une coordination insuffisamment structurée</li>
                  <li>un manque de visibilité sur le processus réel</li>
                  <li>des pratiques locales devenues incompatibles à l’échelle du flux global</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un projet mal cadré peut révéler :</p>
                <ul className={bulletListClass}>
                  <li>un besoin encore mal formulé</li>
                  <li>un périmètre trop mouvant</li>
                  <li>des attentes divergentes</li>
                  <li>une précipitation vers la solution avant d’avoir correctement relu le sujet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pour cela qu’il faut éviter de traiter ces problématiques uniquement au niveau de leur symptôme
                  le plus visible.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="tard-title">
                <h2 id="tard-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ces sujets sont souvent traités trop tard
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’organisations, ces problèmes sont connus avant d’être réellement objectivés.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tout le monde sait, plus ou moins, qu’il existe :
                </p>
                <ul className={bulletListClass}>
                  <li>des lenteurs</li>
                  <li>des doublons</li>
                  <li>des validations peu lisibles</li>
                  <li>des fichiers parallèles</li>
                  <li>des écarts de méthode</li>
                  <li>des zones de flou dans le projet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais tant que l’activité continue à tenir, même avec beaucoup de compensation, le sujet reste souvent
                  dans une zone intermédiaire :
                </p>
                <ul className={bulletListClass}>
                  <li>pas assez grave pour arrêter le fonctionnement</li>
                  <li>mais déjà assez coûteux pour l’user</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est précisément cette zone qui est dangereuse.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce qu’elle pousse souvent à deux erreurs inverses :
                </p>
                <ul className={bulletListClass}>
                  <li>soit minimiser le sujet, en le traitant comme un irritant normal</li>
                  <li>
                    soit vouloir aller trop vite vers une réponse lourde, sans avoir d’abord clarifié le problème réel
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans les deux cas, l’entreprise perd en qualité de décision.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="familles-title">
                <h2 id="familles-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les grandes familles de problématiques que nous rencontrons
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les problématiques que nous traitons se regroupent généralement autour de quelques familles
                  récurrentes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Les pertes de temps et les reprises</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet se voit dans :</p>
                <ul className={bulletListClass}>
                  <li>des étapes qui prennent plus de temps qu’elles ne devraient</li>
                  <li>des relances devenues permanentes</li>
                  <li>des validations qui s’allongent</li>
                  <li>des informations reprises, reformulées ou ressaisies</li>
                  <li>des points de passage qui génèrent du délai</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le problème réel n’est pas toujours le temps lui-même.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème est souvent la structure du fonctionnement qui le produit.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Les interfaces entre services</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet se situe dans les passages :</p>
                <ul className={bulletListClass}>
                  <li>entre équipes</li>
                  <li>entre production et support</li>
                  <li>entre opérationnel et administratif</li>
                  <li>entre terrain et décision</li>
                  <li>entre validation et exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est souvent là que se créent :</p>
                <ul className={bulletListClass}>
                  <li>le flou</li>
                  <li>les redondances</li>
                  <li>les écarts de lecture</li>
                  <li>les pertes de fluidité</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Le manque de visibilité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’entreprise ne voit pas suffisamment clairement :
                </p>
                <ul className={bulletListClass}>
                  <li>où en sont les flux</li>
                  <li>où se trouvent les blocages</li>
                  <li>quelles étapes sont en attente</li>
                  <li>quelles validations sont passées</li>
                  <li>où le processus réel s’écarte du processus supposé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet n’est alors pas seulement un manque de reporting.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est un manque de lecture fiable du fonctionnement réel.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. L’hétérogénéité des méthodes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Différentes équipes, sites ou personnes traitent un même sujet selon des logiques différentes :
                </p>
                <ul className={bulletListClass}>
                  <li>pas les mêmes étapes</li>
                  <li>pas les mêmes contrôles</li>
                  <li>pas les mêmes supports</li>
                  <li>pas les mêmes règles implicites</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">À ce stade, le problème n’est plus seulement documentaire.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il devient organisationnel.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Les projets insuffisamment stabilisés</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le projet existe, mais plusieurs éléments restent encore trop flous :</p>
                <ul className={bulletListClass}>
                  <li>le besoin réel</li>
                  <li>le périmètre</li>
                  <li>les contraintes</li>
                  <li>les parties prenantes</li>
                  <li>les critères de décision</li>
                  <li>la logique de suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le risque est alors de demander à la mise en œuvre de compenser ce que l’amont n’a pas assez clarifié.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">6. Les consultations lancées trop tôt</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le besoin est réel, mais pas encore assez structuré pour être comparé sérieusement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le résultat classique est une consultation où :</p>
                <ul className={bulletListClass}>
                  <li>les offres sont difficiles à lire</li>
                  <li>les périmètres diffèrent</li>
                  <li>les prix sont trompeurs</li>
                  <li>les critères apparaissent trop tard</li>
                  <li>la décision perd en solidité</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="concret-title">
                <h2 id="concret-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ces problématiques produisent concrètement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ces sujets n’ont pas seulement un coût théorique.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils produisent des effets très concrets dans le quotidien.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils augmentent :</p>
                <ul className={bulletListClass}>
                  <li>la charge de coordination</li>
                  <li>la dépendance à certaines personnes</li>
                  <li>les reprises</li>
                  <li>les vérifications</li>
                  <li>les relances</li>
                  <li>les arbitrages tardifs</li>
                  <li>la fatigue organisationnelle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils réduisent :</p>
                <ul className={bulletListClass}>
                  <li>la fluidité</li>
                  <li>la lisibilité</li>
                  <li>la fiabilité</li>
                  <li>la capacité de pilotage</li>
                  <li>la robustesse de l’exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils compliquent aussi la suite :</p>
                <ul className={bulletListClass}>
                  <li>un projet plus difficile à cadrer</li>
                  <li>une consultation plus fragile</li>
                  <li>une mise en œuvre plus risquée</li>
                  <li>un déploiement plus coûteux</li>
                  <li>une transformation qui commence sur des bases déjà trop instables</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, ces problématiques ne restent pas cantonnées à l’opérationnel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elles remontent tôt ou tard dans la décision.</p>
              </section>

              <section className={sectionClass} aria-labelledby="rapide-title">
                <h2 id="rapide-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi les réponses trop rapides sont rarement les bonnes
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand l’entreprise sent qu’un sujet devient trop coûteux, le réflexe est souvent de chercher
                  rapidement une réponse :
                </p>
                <ul className={bulletListClass}>
                  <li>un nouvel outil</li>
                  <li>une nouvelle procédure</li>
                  <li>une réorganisation</li>
                  <li>un prestataire</li>
                  <li>une automatisation</li>
                  <li>un pilotage renforcé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Parfois, c’est la bonne direction. Mais pas toujours.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le problème n’est pas la réponse envisagée.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le problème est le moment où elle arrive.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une réponse arrive trop tôt quand elle précède :</p>
                <ul className={bulletListClass}>
                  <li>la clarification du besoin</li>
                  <li>l’objectivation du fonctionnement réel</li>
                  <li>la lecture des écarts</li>
                  <li>la hiérarchisation des priorités</li>
                  <li>la définition du bon niveau de traitement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce cas, l’entreprise risque de traiter le symptôme le plus visible sans avoir correctement
                  identifié la logique qui le produit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent ainsi qu’un sujet revient quelques mois plus tard, sous une autre forme.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="utile-title">
                <h2 id="utile-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’un travail utile doit permettre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Face à ces problématiques, un travail utile ne consiste pas à produire un discours général sur
                  l’amélioration.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il doit permettre plusieurs choses très concrètes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Clarifier</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nommer le sujet plus précisément :</p>
                <ul className={bulletListClass}>
                  <li>qu’est-ce qui se passe réellement ?</li>
                  <li>où cela se produit-il ?</li>
                  <li>avec quels effets ?</li>
                  <li>à quel niveau du fonctionnement ?</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Objectiver</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Distinguer :</p>
                <ul className={bulletListClass}>
                  <li>les faits</li>
                  <li>les perceptions</li>
                  <li>les irritants locaux</li>
                  <li>les points de blocage structurants</li>
                  <li>les symptômes</li>
                  <li>les causes probables</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Requalifier</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet relève-t-il :</p>
                <ul className={bulletListClass}>
                  <li>d’un ajustement simple ?</li>
                  <li>d’une harmonisation ?</li>
                  <li>d’un diagnostic plus poussé ?</li>
                  <li>d’un cadrage ?</li>
                  <li>d’un projet structurant ?</li>
                  <li>d’un pilotage de mise en œuvre ?</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Hiérarchiser</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tout ne mérite pas le même niveau de réponse.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut faire ressortir ce qui compte vraiment.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Préparer la suite</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon les cas, la suite peut être :</p>
                <ul className={bulletListClass}>
                  <li>une clarification de méthode</li>
                  <li>un diagnostic du fonctionnement</li>
                  <li>un cadrage plus approfondi</li>
                  <li>un cahier des charges</li>
                  <li>une consultation</li>
                  <li>un pilotage de mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La vraie valeur est donc de remettre l’entreprise en position de décider plus justement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si le sujet mérite une intervention structurée
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon indicateur n’est pas seulement le niveau d’irritation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est le moment où le sujet commence à produire plusieurs effets en même temps.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>les mêmes difficultés reviennent régulièrement</li>
                  <li>plusieurs équipes sont concernées</li>
                  <li>des contournements se sont installés</li>
                  <li>la lisibilité du fonctionnement se dégrade</li>
                  <li>les responsabilités ou validations deviennent floues</li>
                  <li>les projets futurs risquent d’être lancés sur une base fragile</li>
                  <li>la consultation d’un prestataire devient difficile à préparer proprement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand plusieurs de ces éléments se combinent, il ne s’agit plus seulement d’un irritant.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il s’agit généralement d’un sujet qui mérite d’être traité à un niveau plus structuré.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="plus-title">
                <h2 id="plus-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les problématiques que nous traitons le plus souvent
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Vous retrouverez dans cette section des pages dédiées à des situations concrètes comme :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/problematiques/pertes-de-temps-entre-services-industrie/" className={inlineSeoLinkClass}>
                      Pertes de temps entre services en industrie
                    </Link>
                  </li>
                  <li>
                    <Link href="/problematiques/ressaisies-excel-mails-pme-industrielle/" className={inlineSeoLinkClass}>
                      Ressaisies Excel et mails en PME industrielle
                    </Link>
                  </li>
                  <li>
                    <Link href="/problematiques/projet-industriel-mal-cadre/" className={inlineSeoLinkClass}>
                      Projet industriel mal cadré
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/problematiques/besoin-mal-defini-avant-consultation-prestataires/"
                      className={inlineSeoLinkClass}
                    >
                      Besoin mal défini avant consultation prestataires
                    </Link>
                  </li>
                  <li>
                    <Link href="/problematiques/choisir-solution-ou-prestataire-industriel/" className={inlineSeoLinkClass}>
                      Choisir une solution ou un prestataire industriel
                    </Link>
                  </li>
                  <li>
                    <Link href="/problematiques/organisation-entre-services-inefficace/" className={inlineSeoLinkClass}>
                      Organisation entre services inefficace
                    </Link>
                  </li>
                  <li>
                    <Link href="/problematiques/manque-de-visibilite-sur-les-processus/" className={inlineSeoLinkClass}>
                      Manque de visibilité sur les processus
                    </Link>
                  </li>
                  <li>
                    <Link href="/problematiques/methodes-de-travail-non-harmonisees/" className={inlineSeoLinkClass}>
                      Méthodes de travail non harmonisées
                    </Link>
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chacune de ces problématiques peut être l’entrée d’un besoin plus large.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon niveau de réponse dépend toujours du sujet réel derrière le symptôme.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les problématiques opérationnelles ne sont pas seulement des irritants du quotidien.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles signalent souvent qu’un fonctionnement, un projet ou une interface a besoin d’être relu plus
                  sérieusement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les traiter utilement suppose de :</p>
                <ul className={bulletListClass}>
                  <li>revenir au réel</li>
                  <li>clarifier le sujet</li>
                  <li>distinguer symptôme et cause</li>
                  <li>hiérarchiser</li>
                  <li>préparer une suite adaptée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est précisément ce que permettent le diagnostic, le cadrage et, lorsque c’est nécessaire, le
                  pilotage de mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous reconnaissez votre situation dans l’une de ces problématiques, le bon réflexe n’est pas
                  forcément d’aller plus vite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est souvent de mieux qualifier le sujet avant d’engager la suite.
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
                  Besoin de clarifier votre problématique avant d’engager la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à objectiver le sujet, poser le bon niveau de réponse et sécuriser la décision.
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
