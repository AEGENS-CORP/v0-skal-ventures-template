import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { HubQuickSommaire } from "@/components/site/hub-quick-sommaire"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const faqQuickItems = [
  {
    href: "/faq/quand-faire-un-diagnostic-operationnel/",
    title: "Quand faire un diagnostic opérationnel ?",
    summary: "Repérer le moment où il faut d’abord clarifier le réel avant de décider la suite.",
  },
  {
    href: "/faq/combien-de-temps-prend-un-cadrage-de-projet/",
    title: "Combien de temps prend un cadrage ?",
    summary: "Comprendre les facteurs qui font varier la durée utile d’un cadrage.",
  },
  {
    href: "/faq/que-contient-un-cahier-des-charges/",
    title: "Que contient un cahier des charges ?",
    summary: "Les rubriques indispensables pour rendre le besoin exploitable et comparable.",
  },
  {
    href: "/faq/quand-faut-il-un-pilotage-externe/",
    title: "Quand faut-il un pilotage externe ?",
    summary: "Savoir quand le sujet manque surtout de tenue dans l’exécution.",
  },
  {
    href: "/faq/peut-on-lancer-un-projet-sans-cahier-des-charges/",
    title: "Lancer sans cahier des charges ?",
    summary: "Distinguer l’absence de document et l’absence de cadre réel.",
  },
  {
    href: "/faq/faut-il-consulter-des-prestataires-avant-de-cadrer-le-besoin/",
    title: "Consulter avant de cadrer ?",
    summary: "Pourquoi la séquence cadrage puis consultation est généralement la plus robuste.",
  },
]

export const FaqHubMeta = {
  title: "FAQ | Diagnostic, cadrage et pilotage de projets | AEGENS",
  description:
    "FAQ sur le diagnostic opérationnel, le cadrage de projet, le cahier des charges, la consultation de prestataires et le pilotage de mise en œuvre.",
}

export function FaqHubPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "FAQ" }]} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                FAQ
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Quand une entreprise cherche un appui extérieur sur un sujet opérationnel ou projet, les premières
                questions ne portent pas toujours sur le contenu de la mission. Elles portent souvent sur le bon niveau
                d’intervention.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Par exemple :</p>
              <ul className={bulletListClass}>
                <li>est-ce qu’il faut d’abord faire un diagnostic ?</li>
                <li>est-ce qu’un cadrage est vraiment nécessaire ?</li>
                <li>peut-on consulter sans cahier des charges ?</li>
                <li>à quel moment un pilotage externe devient utile ?</li>
                <li>combien de temps prend ce type de travail ?</li>
                <li>
                  est-ce qu’on a vraiment besoin d’un regard extérieur, ou peut-on encore traiter le sujet en interne ?
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ces questions sont importantes parce qu’elles conditionnent directement la qualité de la suite.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un sujet mal qualifié au départ produit presque toujours une mauvaise séquence ensuite : on consulte
                trop tôt, on structure trop tard, on choisit sur une base fragile, ou l’on demande à la mise en œuvre
                de corriger ce qui n’a pas été clarifié en amont.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est précisément pour cela que cette FAQ existe : remettre de la clarté sur les situations les plus
                fréquentes.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/">Voir nos offres</Link>
                </Button>
              </div>
            </div>
          </section>

          <HubQuickSommaire
            title="Sommaire FAQ"
            subtitle="Toutes les questions clés accessibles immédiatement, avec un repère de lecture."
            items={faqQuickItems}
          />

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="utile-title">
                <h2 id="utile-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette FAQ est utile
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, le sujet n’est pas d’abord de choisir un diagnostic, un cadrage ou un
                  pilotage. Le sujet est plutôt : qu’est-ce qui manque réellement aujourd’hui pour faire avancer ce
                  dossier correctement ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Or cette question est rarement posée assez tôt.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Très souvent, l’entreprise ressent d’abord :</p>
                <ul className={bulletListClass}>
                  <li>un manque de fluidité</li>
                  <li>un besoin difficile à formuler</li>
                  <li>un projet qui semble devoir avancer</li>
                  <li>une consultation qui approche</li>
                  <li>une mise en œuvre qui commence à se compliquer</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette FAQ répond à une question plus large : comment reconnaître le bon niveau de réponse avant
                  d’engager la suite ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="found-title">
                <h2 id="found-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que vous trouverez dans cette FAQ
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le diagnostic</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand faut-il faire un diagnostic ? À quoi sert-il réellement ? Comment savoir si le sujet mérite une
                  vraie lecture du fonctionnement réel ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le cadrage</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand faut-il cadrer un projet ? Que doit contenir un bon cadrage ? À quel moment transformer un besoin
                  en document exploitable ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le cahier des charges</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Est-il toujours nécessaire ? Que contient-il réellement ? Peut-on lancer un projet sans lui ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La consultation</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Peut-on consulter des prestataires alors que le besoin reste partiellement flou ? À quel moment la
                  consultation devient-elle réellement utile ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le pilotage</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand un pilotage externe devient-il pertinent ? Qu’apporte-t-il vraiment ? Que se passe-t-il quand il
                  arrive trop tard ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="approach-title">
                <h2 id="approach-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre manière de répondre à ces questions
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous avons choisi une approche simple, utile et directement reliée au réel.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Partir des situations concrètes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous répondons à partir de cas réels de fonctionnement, de projet, de consultation ou de mise en
                  œuvre.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Distinguer les niveaux</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Toutes les difficultés ne demandent pas un diagnostic, ni un cadrage, ni un pilotage. La valeur est
                  souvent dans cette distinction.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Rester honnêtes sur le bon moment</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certains sujets ne demandent pas encore une intervention lourde. D’autres sont déjà trop avancés pour
                  être traités par une simple correction locale.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="questions-title">
                <h2 id="questions-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les questions les plus fréquentes
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/faq/quand-faire-un-diagnostic-operationnel/" className={inlineSeoLinkClass}>
                    Quand faire un diagnostic opérationnel ?
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le sujet est réel, mais encore trop difficile à lire proprement : pertes de temps, ressaisies,
                  manque de visibilité, écarts entre services, méthodes divergentes, difficulté à nommer le problème de
                  fond.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/faq/combien-de-temps-prend-un-cadrage-de-projet/" className={inlineSeoLinkClass}>
                    Combien de temps prend un cadrage de projet ?
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage dépend moins de la taille du projet que du niveau de flou du besoin, du nombre de parties
                  prenantes, de la stabilité du périmètre et du nombre d’arbitrages à poser.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/faq/que-contient-un-cahier-des-charges/" className={inlineSeoLinkClass}>
                    Que contient un cahier des charges ?
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon cahier des charges contient le contexte, le besoin, les objectifs, le périmètre, les
                  contraintes, les parties prenantes, les attendus et les critères utiles à la suite.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/faq/quand-faut-il-un-pilotage-externe/" className={inlineSeoLinkClass}>
                    Quand faut-il un pilotage externe ?
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le projet n’a plus seulement besoin d’être défini, mais tenu : coordination, arbitrages,
                  rythme, visibilité sur l’avancement, continuité entre décisions et exécution.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link href="/faq/peut-on-lancer-un-projet-sans-cahier-des-charges/" className={inlineSeoLinkClass}>
                    Peut-on lancer un projet sans cahier des charges ?
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Oui, dans certains cas. Mais pas sans cadre. La vraie question est : le besoin est-il suffisamment
                  structuré pour engager la suite sérieusement ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  <Link
                    href="/faq/faut-il-consulter-des-prestataires-avant-de-cadrer-le-besoin/"
                    className={inlineSeoLinkClass}
                  >
                    Faut-il consulter des prestataires avant de cadrer le besoin ?
                  </Link>
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En général, non, ou alors très prudemment. La consultation ne doit pas servir à compenser un amont mal
                  clarifié.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="read-title">
                <h2 id="read-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment lire cette FAQ intelligemment
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Comme une porte d’entrée</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet est encore diffus, elle permet d’identifier dans quelle catégorie de besoin vous vous
                  situez : diagnostic, cadrage, consultation, pilotage.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Comme un outil de vérification</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous êtes déjà avancé dans un sujet, elle permet de tester si vous êtes au bon niveau : faut-il
                  structurer davantage, consulter plus tard, renforcer le pilotage, ou clarifier encore le besoin ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Dans les deux cas, son utilité est la même : éviter la mauvaise séquence.</p>
              </section>

              <section className={sectionClass} aria-labelledby="limits-title">
                <h2 id="limits-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que cette FAQ ne remplace pas
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une FAQ peut aider à qualifier un sujet. Elle ne remplace pas :</p>
                <ul className={bulletListClass}>
                  <li>une lecture du fonctionnement réel</li>
                  <li>une remise à plat du besoin</li>
                  <li>un cadrage sérieux</li>
                  <li>une décision structurée sur la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle aide à mieux orienter, et cette orientation évite ensuite des consultations fragiles, des projets mal lancés ou des mises en œuvre qui compensent trop de flou initial.</p>
              </section>

              <section className={sectionClass} aria-labelledby="discover-title">
                <h2 id="discover-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les pages FAQ à découvrir
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/faq/quand-faire-un-diagnostic-operationnel/" className={inlineSeoLinkClass}>
                      Quand faire un diagnostic opérationnel ?
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/combien-de-temps-prend-un-cadrage-de-projet/" className={inlineSeoLinkClass}>
                      Combien de temps prend un cadrage de projet ?
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/que-contient-un-cahier-des-charges/" className={inlineSeoLinkClass}>
                      Que contient un cahier des charges ?
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/quand-faut-il-un-pilotage-externe/" className={inlineSeoLinkClass}>
                      Quand faut-il un pilotage externe ?
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/peut-on-lancer-un-projet-sans-cahier-des-charges/" className={inlineSeoLinkClass}>
                      Peut-on lancer un projet sans cahier des charges ?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq/faut-il-consulter-des-prestataires-avant-de-cadrer-le-besoin/"
                      className={inlineSeoLinkClass}
                    >
                      Faut-il consulter des prestataires avant de cadrer le besoin ?
                    </Link>
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Chacune répond à un point précis de décision ou d’hésitation : clarifier le bon niveau du sujet, éviter la mauvaise séquence, préparer une suite plus solide.</p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette FAQ a été conçue pour répondre à une difficulté simple mais décisive : savoir comment faire
                  avancer un sujet au bon niveau, dans le bon ordre, avec le bon type de structuration.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle aide à distinguer :</p>
                <ul className={bulletListClass}>
                  <li>ce qui relève d’un diagnostic</li>
                  <li>ce qui relève d’un cadrage</li>
                  <li>ce qui relève d’un cahier des charges</li>
                  <li>ce qui relève d’une consultation</li>
                  <li>ce qui relève d’un pilotage de mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous vous demandez quoi faire en premier sur un sujet important, cette FAQ est le bon point
                  d’entrée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens complémentaires :{" "}
                  <Link href="/offres/" className={inlineSeoLinkClass}>
                    Offres
                  </Link>
                  ,{" "}
                  <Link href="/ressources/" className={inlineSeoLinkClass}>
                    Ressources
                  </Link>
                  ,{" "}
                  <Link href="/modeles-checklists/" className={inlineSeoLinkClass}>
                    Modèles & checklists
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
                  Besoin d’éclaircir votre situation ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à identifier le bon niveau d’intervention avant d’engager la suite.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={primaryButtonClass}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={darkButtonClass}>
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
