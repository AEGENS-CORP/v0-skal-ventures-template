import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const FaqQuandFautIlPilotageExterneMeta = {
  title: "Quand faut-il un pilotage externe ? | FAQ AEGENS",
  description:
    "Quand faut-il un pilotage externe, dans quels cas il est utile, ce qu’il apporte réellement et comment savoir si votre projet manque de pilotage ou de cadrage.",
}

export function FaqQuandFautIlPilotageExternePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "FAQ", href: "/faq/" },
              { label: "Quand faut-il un pilotage externe ?" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Quand faut-il un pilotage externe ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un pilotage externe devient utile quand le projet ne manque plus seulement d’intention ou de décision,
                mais de tenue dans l’exécution.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                On n’y a pas recours pour suivre un planning de plus. On y a recours quand il manque une lecture
                fiable de l’avancement réel, une coordination claire, une remontée des arbitrages au bon moment, et une
                continuité entre besoin, décisions et exécution.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La vraie question n’est pas de savoir si un projet est en cours. La vraie question est de savoir s’il
                est encore assez lisible, coordonné et tenable dans sa mise en œuvre.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">Voir notre offre pilotage</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="short-answer-title">
                <h2 id="short-answer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La réponse la plus juste
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un pilotage externe devient généralement utile dans quatre cas.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  1. Quand le projet est lancé, mais perd en lisibilité
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les symptômes classiques :</p>
                <ul className={bulletListClass}>
                  <li>l’avancement n’est plus lu de la même manière selon les acteurs</li>
                  <li>les points en attente sont mal visibles</li>
                  <li>les dépendances se multiplient</li>
                  <li>les échanges produisent du mouvement, mais peu de clarté</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Quand plusieurs acteurs doivent avancer ensemble</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le pilotage externe est particulièrement pertinent quand il faut tenir :</p>
                <ul className={bulletListClass}>
                  <li>plusieurs équipes</li>
                  <li>plusieurs niveaux de décision</li>
                  <li>plusieurs prestataires ou contributeurs</li>
                  <li>plusieurs sites</li>
                  <li>des interfaces et dépendances critiques</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Quand le pilotage est absorbé localement</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le projet avance par morceaux, les arbitrages se prennent au fil de l’eau et la cohérence d’ensemble
                  repose sur quelques personnes qui compensent en permanence.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Quand la mise en œuvre risque de payer les flous restants</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand il faut tenir calendrier, coordination et déploiement, le pilotage sert à protéger la continuité
                  du projet jusqu’à l’atterrissage.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="not-title">
                <h2 id="not-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’un pilotage externe n’est pas
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un pilotage externe n’est pas :</p>
                <ul className={bulletListClass}>
                  <li>une couche administrative supplémentaire</li>
                  <li>un simple suivi de planning</li>
                  <li>un reporting décoratif</li>
                  <li>une façon de masquer un projet encore mal défini</li>
                  <li>un substitut à la responsabilité du client</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un pilotage utile produit :</p>
                <ul className={bulletListClass}>
                  <li>une lecture claire de l’avancement réel</li>
                  <li>une coordination structurée</li>
                  <li>une remontée propre des arbitrages</li>
                  <li>une continuité forte entre décisions et exécution</li>
                  <li>une meilleure tenue du projet dans le temps</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="signals-title">
                <h2 id="signals-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signes qu’il est temps de faire appel à un pilotage externe
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le projet avance, mais les lectures divergent</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les uns parlent actions réalisées, les autres blocages, d’autres décisions manquantes. Cette divergence
                  est un signal fort d’un pilotage insuffisamment consolidé.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les arbitrages arrivent trop tard</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’exécution absorbe alors les effets de l’absence de décision :</p>
                <ul className={bulletListClass}>
                  <li>corrections</li>
                  <li>reprises</li>
                  <li>attentes</li>
                  <li>décalages</li>
                  <li>surcharge</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les dépendances deviennent envahissantes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Prérequis, ressources partagées, validations et séquences conditionnent la suite. Sans pilotage explicite,
                  le projet se fragilise rapidement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le projet repose trop sur quelques personnes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si certaines personnes seules savent quoi relancer, quoi arbitrer et où ça bloque, le projet tient plus
                  par mémoire humaine que par pilotage structuré.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La charge d’exploitation étouffe le projet</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les équipes portent déjà l’activité courante. Le sujet n’est pas la volonté, mais la bande passante
                  disponible pour tenir le projet proprement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="priority-title">
                <h2 id="priority-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Dans quels cas le pilotage externe est souvent prioritaire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage externe est prioritaire quand le projet est déjà assez défini pour avancer, mais pas assez
                  tenu pour rester cohérent.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est souvent le bon moment quand le cadrage existe à un niveau suffisant et que la question n’est
                  plus quoi faire, mais comment le faire avancer dans le bon ordre avec des arbitrages lisibles.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À lire aussi :{" "}
                  <Link href="/faq/combien-de-temps-prend-un-cadrage-de-projet/" className={inlineSeoLinkClass}>
                    combien de temps prend un cadrage de projet
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="not-first-title">
                <h2 id="not-first-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand le pilotage externe n’est pas la première réponse
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il n’est pas forcément prioritaire si :</p>
                <ul className={bulletListClass}>
                  <li>le projet reste mal défini</li>
                  <li>le besoin n’est pas stabilisé</li>
                  <li>le périmètre bouge trop</li>
                  <li>plusieurs lectures du sujet coexistent encore</li>
                  <li>la difficulté est surtout en amont</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce cas, un diagnostic ou un cadrage est souvent plus pertinent. Un projet peut sembler mal piloté
                  alors qu’il est surtout mal cadré.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Point d’entrée utile :{" "}
                  <Link href="/faq/quand-faire-un-diagnostic-operationnel/" className={inlineSeoLinkClass}>
                    quand faire un diagnostic opérationnel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="value-title">
                <h2 id="value-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’un pilotage externe apporte concrètement
                </h2>
                <ol className="list-decimal pl-6 space-y-3 ae-text text-base sm:text-lg leading-relaxed marker:text-[#07bc7d]">
                  <li>
                    <strong>Une lecture plus fiable de l’avancement :</strong> ce qui est fait, en cours, bloqué, dépendant
                    d’un arbitrage et ce qui vient ensuite.
                  </li>
                  <li>
                    <strong>Une coordination plus structurée :</strong> articuler les contributions au lieu de seulement les
                    additionner.
                  </li>
                  <li>
                    <strong>Une meilleure gestion des dépendances :</strong> elles deviennent visibles, suivies et traitées
                    avant de réapparaître trop tard.
                  </li>
                  <li>
                    <strong>Une remontée plus propre des arbitrages :</strong> les décisions sont préparées et présentées au
                    bon moment.
                  </li>
                  <li>
                    <strong>Une continuité plus forte jusqu’à la mise en œuvre :</strong> le projet reste aligné avec son
                    besoin, son périmètre et ses priorités.
                  </li>
                </ol>
              </section>

              <section className={sectionClass} aria-labelledby="avoid-waiting-title">
                <h2 id="avoid-waiting-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les situations typiques où il faut éviter d’attendre
                </h2>
                <ul className={bulletListClass}>
                  <li>le projet devient de plus en plus transversal</li>
                  <li>les points en attente s’accumulent</li>
                  <li>les décisions se prennent au fil de l’eau</li>
                  <li>la mise en œuvre déforme le besoin initial</li>
                  <li>l’organisation compense de plus en plus</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="check-title">
                <h2 id="check-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous êtes concerné
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage externe est souvent le bon choix si plusieurs réponses à ces questions sont oui :
                </p>
                <ul className={bulletListClass}>
                  <li>le projet est déjà lancé ou sur le point de l’être</li>
                  <li>plusieurs acteurs doivent avancer ensemble</li>
                  <li>l’avancement réel devient difficile à lire</li>
                  <li>les arbitrages ne remontent pas assez clairement</li>
                  <li>les dépendances pèsent de plus en plus</li>
                  <li>le projet repose trop sur quelques personnes</li>
                  <li>l’exploitation quotidienne laisse peu de place pour tenir le projet</li>
                  <li>le sujet a surtout besoin d’être mieux tenu, pas seulement mieux défini</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un pilotage externe devient utile quand le projet ne manque plus d’existence, mais de tenue dans
                  l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est généralement le bon choix quand :</p>
                <ul className={bulletListClass}>
                  <li>le projet est déjà suffisamment défini</li>
                  <li>plusieurs acteurs sont impliqués</li>
                  <li>l’avancement devient moins lisible</li>
                  <li>les arbitrages arrivent trop tard</li>
                  <li>les dépendances se multiplient</li>
                  <li>l’organisation compense trop</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En une phrase : si votre projet existe déjà mais devient plus difficile à faire avancer proprement, il
                  est souvent temps d’envisager un pilotage externe.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                    offre pilotage
                  </Link>
                  ,{" "}
                  <Link href="/ressources/comment-piloter-un-projet-industriel-en-pme/" className={inlineSeoLinkClass}>
                    comment piloter un projet industriel en PME
                  </Link>
                  ,{" "}
                  <Link
                    href="/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel/"
                    className={inlineSeoLinkClass}
                  >
                    cas client pilotage de mise en œuvre
                  </Link>
                  ,{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    contact
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
                  Besoin de renforcer la tenue de votre projet dans l’exécution ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à structurer le pilotage, clarifier l’avancement réel et sécuriser les arbitrages.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={primaryButtonClass}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={darkButtonClass}>
                    <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">Voir notre offre pilotage</Link>
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
