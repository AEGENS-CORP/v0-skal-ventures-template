import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const FaqQueContientCahierDesChargesMeta = {
  title: "Que contient un cahier des charges ? | FAQ AEGENS",
  description:
    "Que contient un cahier des charges, à quoi il sert, quelles rubriques il doit inclure et ce qu’il ne faut pas lui faire porter à tort.",
}

export function FaqQueContientCahierDesChargesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "FAQ", href: "/faq/" },
              { label: "Que contient un cahier des charges ?" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Que contient un cahier des charges ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un cahier des charges contient, au minimum, ce qu’il faut pour rendre un besoin compréhensible,
                comparable et exploitable pour la suite d’un projet.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Un bon cahier des charges contient :</p>
              <ul className={bulletListClass}>
                <li>le contexte</li>
                <li>le besoin</li>
                <li>les objectifs</li>
                <li>le périmètre</li>
                <li>les parties prenantes</li>
                <li>les contraintes</li>
                <li>les attendus fonctionnels</li>
                <li>les livrables</li>
                <li>les critères de choix ou de réussite</li>
                <li>et, selon les cas, des éléments de calendrier, de budget, de méthode ou de gouvernance</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Ce n’est pas seulement une liste de rubriques. C’est un document de cadrage qui doit traduire
                correctement le besoin pour éviter les interprétations divergentes.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Voir notre offre cadrage</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="function-title">
                <h2 id="function-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La fonction réelle d’un cahier des charges
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un cahier des charges ne sert pas d’abord à faire un document. Il sert à éviter trois problèmes.
                </p>
                <ul className={bulletListClass}>
                  <li>un besoin encore trop implicite</li>
                  <li>des réponses impossibles à comparer</li>
                  <li>une mise en œuvre engagée sur une base trop floue</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sa fonction est simple : transformer un besoin en base de travail suffisamment claire pour que la
                  consultation, la décision et l’exécution reposent sur des attendus partagés.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="content-title">
                <h2 id="content-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il doit contenir, concrètement
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Le contexte</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le document doit situer le point de départ : situation actuelle, problème à traiter, enjeux du sujet,
                  et raisons pour lesquelles le projet est important maintenant.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Le besoin</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est la rubrique centrale. Il faut exprimer le besoin réel à traiter, pas uniquement une solution
                  déjà supposée. La question à couvrir est : qu’est-ce que le projet doit résoudre, fiabiliser ou rendre
                  possible ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Les objectifs</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cahier des charges doit préciser l’objectif principal, les objectifs secondaires et les résultats
                  attendus.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Le périmètre</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il doit dire ce qui entre dans le projet et ce qui n’y entre pas : processus concernés, équipes,
                  sites, flux inclus, exclusions explicites et éventuel découpage par phases.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Les parties prenantes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un cahier des charges sérieux identifie :</p>
                <ul className={bulletListClass}>
                  <li>le porteur du besoin</li>
                  <li>les utilisateurs</li>
                  <li>les décideurs</li>
                  <li>les fonctions support</li>
                  <li>les interlocuteurs projet</li>
                  <li>et, selon les cas, les contributeurs externes</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">6. Les contraintes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les contraintes à respecter doivent être explicites :</p>
                <ul className={bulletListClass}>
                  <li>délai</li>
                  <li>charge interne</li>
                  <li>réglementation</li>
                  <li>qualité</li>
                  <li>intégration</li>
                  <li>budget</li>
                  <li>déploiement ou exploitation</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">7. Les attendus fonctionnels</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette partie décrit ce que la future réponse doit permettre de faire, sans figer trop tôt la solution :
                  fonctions attendues, usages, règles de validation, traçabilité, visibilité et critères de performance.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">8. Les livrables attendus</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le document doit préciser ce qui sera produit :</p>
                <ul className={bulletListClass}>
                  <li>recommandation ou solution</li>
                  <li>documentation</li>
                  <li>méthode de mise en œuvre</li>
                  <li>planning</li>
                  <li>accompagnement</li>
                  <li>déploiement</li>
                  <li>support au pilotage</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">9. Les critères de choix ou de réussite</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon le cas, il faut faire apparaître les critères de comparaison, les priorités, les critères de
                  réussite et les points incontournables.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">10. Les éléments de calendrier, budget ou méthode</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le sujet est assez mûr, le cahier des charges peut inclure des repères de calendrier, un cadre
                  budgétaire, des hypothèses de méthode, des modalités de gouvernance et les conditions de déploiement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="avoid-title">
                <h2 id="avoid-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il ne doit pas contenir trop tôt
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le document perd en qualité quand il bascule trop vite dans la solution. Il faut éviter :
                </p>
                <ul className={bulletListClass}>
                  <li>la sur-spécification technique prématurée</li>
                  <li>la description détaillée d’une solution déjà supposée</li>
                  <li>la confusion entre besoin et outil</li>
                  <li>les zones ouvertes masquées</li>
                  <li>un document long mais peu exploitable</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="types-title">
                <h2 id="types-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui change selon le type de cahier des charges
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">On distingue généralement :</p>
                <ul className={bulletListClass}>
                  <li>le cahier des charges fonctionnel, centré sur le besoin et les performances attendues</li>
                  <li>le cahier des charges technique, orienté spécifications de réalisation ou d’intégration</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En amont, une logique fonctionnelle est souvent plus pertinente. Plus le projet avance, plus des
                  éléments techniques deviennent nécessaires.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À lire aussi :{" "}
                  <Link href="/ressources/comment-rediger-un-cahier-des-charges-fonctionnel/" className={inlineSeoLinkClass}>
                    comment rédiger un cahier des charges fonctionnel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="minimum-title">
                <h2 id="minimum-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le minimum à retrouver dans tous les cas
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Même en version sobre, il faut retrouver :</p>
                <ul className={bulletListClass}>
                  <li>le contexte</li>
                  <li>le besoin</li>
                  <li>les objectifs</li>
                  <li>le périmètre</li>
                  <li>les contraintes</li>
                  <li>les attendus</li>
                  <li>la base de décision pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si l’un de ces éléments manque, le document devient vite trop vague, trop interprétable ou trop peu
                  utile pour comparer et décider.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="mistakes-title">
                <h2 id="mistakes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Faire un document trop vague</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le texte existe, mais il ne permet pas de comprendre ce qui est réellement attendu.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Faire un document trop technique trop tôt</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La réponse est figée avant que le besoin soit correctement clarifié.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Oublier le périmètre</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le besoin paraît clair, mais personne ne sait précisément ce qui est inclus ou non.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Mélanger besoin, solution et projet</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le document parle de tout, sans hiérarchie claire.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Croire que le cahier des charges remplace le cadrage</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cahier des charges est un support de formalisation. Il ne remplace pas le travail amont de
                  clarification.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un cahier des charges contient ce qu’il faut pour rendre un besoin clair, structuré, comparable et
                  exploitable pour la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">On doit y retrouver, au minimum :</p>
                <ul className={bulletListClass}>
                  <li>le contexte</li>
                  <li>le besoin</li>
                  <li>les objectifs</li>
                  <li>le périmètre</li>
                  <li>les parties prenantes</li>
                  <li>les contraintes</li>
                  <li>les attendus fonctionnels</li>
                  <li>les livrables</li>
                  <li>les critères utiles à la décision ou à la réussite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En une phrase : un bon cahier des charges ne sert pas à faire long. Il sert à faire juste.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage
                  </Link>
                  ,{" "}
                  <Link href="/faq/peut-on-lancer-un-projet-sans-cahier-des-charges/" className={inlineSeoLinkClass}>
                    peut-on lancer un projet sans cahier des charges
                  </Link>
                  ,{" "}
                  <Link
                    href="/faq/faut-il-consulter-des-prestataires-avant-de-cadrer-le-besoin/"
                    className={inlineSeoLinkClass}
                  >
                    faut-il consulter des prestataires avant de cadrer le besoin
                  </Link>
                  ,{" "}
                  <Link href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/" className={inlineSeoLinkClass}>
                    exemple de cahier des charges fonctionnel
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
                  Besoin de formaliser votre besoin sur une base exploitable ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à structurer un cahier des charges utile pour comparer proprement, décider et lancer
                  la suite.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={primaryButtonClass}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={darkButtonClass}>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Voir notre offre cadrage</Link>
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
