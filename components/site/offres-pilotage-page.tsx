import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"

const inlineSeoLinkClass =
  "font-semibold text-[#07bc7d] underline decoration-[#07bc7d]/70 underline-offset-4 transition-colors hover:text-[#34e0a0] hover:decoration-[#34e0a0]"

const primaryButtonClass =
  "h-14 rounded-[14px] px-7 text-base font-semibold !text-zinc-950 hover:!text-zinc-950"

const darkButtonClass =
  "h-14 rounded-[14px] px-7 text-base font-semibold border-white/25 bg-black/35 !text-white hover:bg-black/45"

const whenToInterveneCards = [
  {
    title: "Un projet doit passer à l'action",
    text: "Le besoin a été clarifié, les grandes orientations sont posées, mais l'exécution doit maintenant être organisée.",
  },
  {
    title: "Plusieurs acteurs doivent avancer ensemble",
    text: "Le projet implique plusieurs interlocuteurs, plusieurs décisions ou plusieurs étapes qui doivent rester alignées.",
  },
  {
    title: "Le rythme doit être tenu",
    text: "Le sujet ne peut pas rester en attente ou avancer de manière irrégulière.",
  },
  {
    title: "Les arbitrages doivent être posés au bon moment",
    text: "Le projet avance, mais certaines décisions doivent être structurées pour éviter les décalages ou les incompréhensions.",
  },
  {
    title: "La coordination devient un enjeu central",
    text: "Le sujet ne dépend plus seulement d'une bonne idée ou d'un bon besoin, mais d'une exécution suivie et cohérente.",
  },
  {
    title: "Le projet risque de se disperser",
    text: "Sans pilotage clair, un projet peut avancer par à-coups, perdre en lisibilité ou glisser vers des priorités mal tenues.",
  },
]

const whatWePilot = [
  "les étapes du projet",
  "la coordination entre acteurs",
  "les points de décision",
  "les sujets en attente d'arbitrage",
  "les dépendances entre actions",
  "les points de vigilance",
  "les écarts éventuels entre ce qui a été prévu et ce qui se passe réellement",
  "la lisibilité globale de l'avancement",
  "la continuité entre le besoin initial et la mise en œuvre",
]

const whatWePilotExtended = [
  "le suivi des actions",
  "l'organisation des échanges",
  "la formalisation des décisions",
  "la coordination avec des prestataires",
  "la remontée des points sensibles",
  "la préparation des étapes suivantes",
]

const benefits = [
  {
    title: "Un projet qui avance réellement",
    text: "Les sujets ne restent pas à l'état de décisions théoriques. Ils progressent dans un cadre suivi.",
  },
  {
    title: "Une meilleure coordination",
    text: "Les acteurs avancent sur une base plus alignée, avec des échanges plus utiles.",
  },
  {
    title: "Des arbitrages plus lisibles",
    text: "Les décisions à prendre ressortent plus clairement et au bon moment.",
  },
  {
    title: "Un suivi plus structuré",
    text: "L'avancement, les écarts et les points de vigilance sont mieux tenus.",
  },
  {
    title: "Une exécution plus solide",
    text: "Le projet reste connecté à son objectif initial et à la logique de mise en œuvre.",
  },
]

const solidSteeringQuestions = [
  "où en est réellement le projet ?",
  "qu'est-ce qui avance, qu'est-ce qui bloque, qu'est-ce qui attend ?",
  "quelles décisions doivent être prises ?",
  "quels sont les points de vigilance ?",
  "qui porte quoi ?",
  "quelle est la prochaine étape concrète ?",
]

const interventionSituations = [
  {
    title: "Déployer un projet dans un cadre plus solide",
    text: "Passer d'une décision à une exécution réellement suivie.",
  },
  {
    title: "Coordonner plusieurs acteurs",
    text: "Garder le projet lisible quand plusieurs interlocuteurs doivent avancer ensemble.",
  },
  {
    title: "Maintenir le rythme d'avancement",
    text: "Éviter qu'un sujet important progresse de manière irrégulière ou dispersée.",
  },
  {
    title: "Sécuriser la mise en œuvre",
    text: "Faire en sorte que les décisions prises se traduisent réellement dans l'exécution.",
  },
]

export function OffrePilotagePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Offres", href: "/offres" },
              { label: "Pilotage de mise en œuvre de projet" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.22fr_0.78fr] lg:gap-8 items-start">
              <div className="rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8 space-y-5">
                <h1 className="ae-hero-title text-[clamp(1.95rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                  Pilotage de mise en œuvre de projet
                </h1>

                <p className="ae-text text-lg sm:text-xl leading-relaxed max-w-3xl">
                  Faire avancer le projet avec méthode, coordination et continuité.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                  Nous intervenons lorsqu'un projet doit être mis en œuvre dans de bonnes conditions, avec un pilotage
                  clair, un rythme de travail tenu et une coordination structurée entre les acteurs.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                  Le pilotage ne consiste pas à suivre un planning pour le principe. Il consiste à faire avancer le
                  projet, à maintenir un cadre lisible, à objectiver les points de vigilance et à sécuriser
                  l'exécution jusqu'aux étapes concrètes de mise en œuvre.
                </p>
              </div>

              <aside className="ae-surface ae-industrial-block rounded-2xl border border-white/14 bg-black/30 p-5 sm:p-6">
                <h2 className="ae-heading text-xl font-bold mb-4">Finalité du pilotage</h2>
                <ul className="list-disc pl-6 space-y-3 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  <li>Faire avancer le projet dans un cadre clair</li>
                  <li>Structurer la coordination entre les acteurs</li>
                  <li>Suivre les points de vigilance et les arbitrages</li>
                  <li>Sécuriser la mise en œuvre jusqu&apos;à l&apos;exécution</li>
                </ul>
              </aside>
            </div>

            <div className="mt-6 rounded-2xl border border-white/14 bg-black/30 p-4 sm:p-5">
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/methode/">Voir notre méthode</Link>
                </Button>
              </div>
            </div>
          </section>

          <section
            className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10"
            aria-labelledby="pilotage-core-title"
          >
            <article className="mx-auto max-w-[980px] space-y-12">
              <section className="space-y-4 border-b border-white/10 pb-8">
                <h2 id="pilotage-core-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Un pilotage pour transformer une décision en mise en œuvre réelle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet bien décidé peut malgré tout se dégrader s'il n'est pas piloté avec suffisamment de
                  méthode.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage de mise en œuvre sert à maintenir la continuité entre :
                </p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  <li>le besoin initial</li>
                  <li>les décisions prises</li>
                  <li>les actions engagées</li>
                  <li>l'exécution réelle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il permet de donner un cadre à l'avancement, de coordonner les parties prenantes, de clarifier les
                  points d'arbitrage et de faire progresser le projet sans le laisser se disperser.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette phase s&apos;inscrit souvent après un{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic
                  </Link>{" "}
                  puis un{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    cadrage de projet
                  </Link>
                  .
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L'objectif n'est pas d'ajouter de la gestion. L'objectif est de garder le projet lisible, tenu et
                  exécutable jusqu'à sa mise en œuvre.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="when-title">
                <h2 id="when-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand intervenir en pilotage
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons lorsqu'un sujet est déjà engagé ou prêt à l'être, mais que sa mise en œuvre demande
                  un pilotage plus structuré.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {whenToInterveneCards.map((card) => (
                    <article key={card.title} className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                      <h3 className="ae-heading text-lg sm:text-xl font-semibold leading-tight">{card.title}</h3>
                      <p className="ae-text mt-2.5 text-sm sm:text-base leading-relaxed">{card.text}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="what-title">
                <h2 id="what-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous pilotons concrètement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention porte sur l'avancement réel du projet et sur les conditions qui permettent à sa
                  mise en œuvre de rester cohérente.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous pilotons notamment :</p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  {whatWePilot.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon les situations, cela peut inclure :</p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  {whatWePilotExtended.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="benefits-title">
                <h2 id="benefits-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que le pilotage permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage n'est pas une couche supplémentaire. Il sert à rendre l'exécution plus claire, plus
                  régulière et plus maîtrisée.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {benefits.map((benefit) => (
                    <article key={benefit.title} className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                      <h3 className="ae-heading text-lg sm:text-xl font-semibold leading-tight">{benefit.title}</h3>
                      <p className="ae-text mt-2.5 text-sm sm:text-base leading-relaxed">{benefit.text}</p>
                    </article>
                  ))}
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage donne au projet la continuité nécessaire pour passer d'un sujet structuré à une
                  exécution réellement tenue.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="approach-title">
                <h2 id="approach-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Une approche structurée, orientée exécution
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention repose sur une logique simple : organiser, coordonner, suivre, faire avancer.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-lg sm:text-xl font-semibold leading-tight">Organiser</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Poser un mode de fonctionnement clair pour le projet.
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-lg sm:text-xl font-semibold leading-tight">Coordonner</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Faire travailler les bons acteurs au bon niveau et au bon moment.
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-lg sm:text-xl font-semibold leading-tight">Suivre</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Maintenir une lecture claire de l'avancement, des points sensibles et des décisions à prendre.
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-lg sm:text-xl font-semibold leading-tight">Faire avancer</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Garder le rythme, porter les sujets ouverts et faire progresser la mise en œuvre dans la durée.
                    </p>
                  </article>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette logique permet de tenir le projet dans un cadre lisible, sans le surcharger inutilement.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="solid-title">
                <h2 id="solid-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu'un pilotage solide doit permettre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un pilotage utile ne se résume pas à des réunions ou à des comptes rendus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il doit permettre de répondre clairement à ces questions :
                </p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  {solidSteeringQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un pilotage sérieux sert à rendre le projet plus lisible, plus fluide et plus exécutable.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="decisive-title">
                <h2 id="decisive-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette étape est souvent décisive
                </h2>
                <div className="rounded-2xl border border-white/12 border-l-[3px] border-l-[#07bc7d] bg-black/28 p-5 sm:p-6">
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Un projet peut être bien pensé, bien cadré et malgré tout perdre en qualité au moment de la mise en
                    œuvre.
                  </p>
                  <p className="ae-text mt-3 text-base sm:text-lg leading-relaxed">
                    Ce n'est pas forcément un problème de compétence. C'est souvent un problème de continuité, de
                    coordination ou de rythme.
                  </p>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le pilotage permet précisément de :</p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>maintenir le cap</li>
                  <li>éviter la dispersion</li>
                  <li>rendre les arbitrages plus clairs</li>
                  <li>donner de la cohérence aux actions engagées</li>
                  <li>garder le lien entre la décision initiale et l'exécution réelle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C'est cette étape qui permet au projet de rester vivant, tenu et concrètement avancé.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="coordination-title">
                <h2 id="coordination-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Coordination des acteurs et des prestataires
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand plusieurs acteurs interviennent, la qualité de mise en œuvre dépend souvent de la qualité de
                  coordination.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Notre rôle peut alors consister à :</p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>structurer les échanges</li>
                  <li>clarifier les responsabilités</li>
                  <li>suivre les engagements</li>
                  <li>faire remonter les points de vigilance</li>
                  <li>maintenir une lecture claire du projet dans son ensemble</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L'enjeu n'est pas de multiplier les échanges. L'enjeu est de rendre le travail collectif plus lisible
                  et plus utile à l'avancement réel.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="next-title">
                <h2 id="next-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Et ensuite
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon les projets, le pilotage peut couvrir une phase de lancement, une période de déploiement, un
                  suivi plus large jusqu'à la stabilisation, ou une étape spécifique de mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il s'inscrit toujours dans une logique simple : tenir la continuité entre le besoin, les décisions,
                  les actions et l'exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour aller plus loin :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    découvrir notre approche de cadrage de projet
                  </Link>
                  ,{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    voir notre méthode
                  </Link>
                  {" "}et{" "}
                  <Link
                    href="/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel/"
                    className={inlineSeoLinkClass}
                  >
                    consulter un cas client lié à une phase de pilotage de mise en œuvre
                  </Link>
                  . Vous pouvez aussi consulter{" "}
                  <Link href="/ressources/comment-piloter-un-projet-industriel-en-pme/" className={inlineSeoLinkClass}>
                    notre ressource sur le pilotage de projet industriel
                  </Link>{" "}
                  et la{" "}
                  <Link
                    href="/modeles-checklists/checklist-consultation-prestataires/"
                    className={inlineSeoLinkClass}
                  >
                    checklist de consultation prestataires
                  </Link>
                  . Pour lancer un échange opérationnel, vous pouvez aussi passer par{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    notre page contact
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="situations-title">
                <h2 id="situations-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Situations sur lesquelles nous intervenons
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {interventionSituations.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-white/12 bg-black/26 p-4 sm:p-5">
                      <h3 className="ae-heading text-lg sm:text-xl font-semibold leading-tight">{item.title}</h3>
                      <p className="ae-text mt-2.5 text-sm sm:text-base leading-relaxed">{item.text}</p>
                    </article>
                  ))}
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    Voir nos cas clients
                  </Link>
                  {" "}pour des situations proches de la vôtre.
                </p>
              </section>
            </article>
          </section>

          <section
            className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10"
            aria-labelledby="cta-final-title"
          >
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-final-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de faire avancer un projet dans de bonnes conditions ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises qui ont besoin de structurer la coordination, de tenir l'avancement
                  et de sécuriser la mise en œuvre d'un projet jusqu'à son exécution.
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
