import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const RessourceStructurerBesoinMeta = {
  title: "Comment structurer un besoin avant consultation | AEGENS",
  description:
    "Méthode claire pour structurer un besoin avant consultation : objectif, périmètre, contraintes, critères, livrables attendus et erreurs à éviter.",
}

export function RessourceStructurerBesoinPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/ressources" },
              { label: "Comment structurer un besoin avant consultation" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Comment structurer un besoin avant consultation
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Structurer un besoin avant consultation, ce n&apos;est pas préparer un document pour lancer plus vite une
                demande. C&apos;est faire en sorte que la consultation repose sur un sujet suffisamment clair pour produire
                des réponses comparables, utiles et réellement exploitables.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, la question n&apos;est pas seulement comment consulter. La vraie question est d&apos;abord sur
                quelle base consulter correctement.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Les ressources de référence sur les cahiers des charges, l&apos;expression de besoin et l&apos;examen des
                offres convergent toutes sur un point : la qualité d&apos;une consultation dépend d&apos;abord de la qualité de
                définition du besoin.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Pour structurer ce travail amont, vous pouvez aussi consulter{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  notre offre de cadrage de projet industriel
                </Link>
                .
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Découvrir notre cadrage</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="article-title">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="fragiles-title">
                <h2 id="fragiles-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi beaucoup de consultations sont fragiles dès le départ
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une consultation devient fragile bien avant l&apos;envoi du dossier. Elle le devient quand :
                </p>
                <ul className={bulletListClass}>
                  <li>le besoin est encore formulé comme une intuition</li>
                  <li>le sujet est tiré trop vite vers une solution</li>
                  <li>les attentes restent implicites</li>
                  <li>les contraintes ne sont pas explicitées</li>
                  <li>les critères de comparaison ne sont pas encore posés</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les guides publics et professionnels sur la consultation et l&apos;achat rappellent justement qu&apos;il faut
                  définir les besoins en premier, puis faire découler de cette définition les critères, les documents de
                  consultation et la méthode d&apos;examen des offres.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une consultation bien structurée commence quand on peut répondre clairement :</p>
                <ul className={bulletListClass}>
                  <li>quel est le besoin réel ?</li>
                  <li>quel problème cherche-t-on à traiter ?</li>
                  <li>quel est l&apos;objectif poursuivi ?</li>
                  <li>quel est le périmètre du sujet ?</li>
                  <li>quelles contraintes doivent être prises en compte ?</li>
                  <li>qu&apos;attend-on concrètement du prestataire ?</li>
                  <li>sur quels critères comparera-t-on les réponses ?</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="structurer-title">
                <h2 id="structurer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Structurer un besoin : ce que cela veut vraiment dire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Structurer un besoin ne consiste pas à le rendre plus impressionnant. Cela consiste à le rendre :
                </p>
                <ul className={bulletListClass}>
                  <li>plus clair</li>
                  <li>plus partagé</li>
                  <li>plus arbitrable</li>
                  <li>plus exploitable</li>
                </ul>

                <div className="space-y-4">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">D&apos;abord, reformuler le sujet</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un besoin est souvent exprimé au départ sous une forme approximative : il faut fluidifier, il
                      faut mieux tracer, il faut consulter, il faut moderniser, on perd du temps, il nous faut un
                      prestataire.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Ces formulations signalent un sujet. Elles ne suffisent pas à le structurer.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Structurer le besoin, c&apos;est donc reformuler :</p>
                    <ul className={bulletListClass}>
                      <li>que cherche-t-on réellement à améliorer ?</li>
                      <li>dans quelles situations ?</li>
                      <li>avec quels effets observables ?</li>
                      <li>pour quels utilisateurs ou acteurs ?</li>
                      <li>dans quel environnement ?</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      Ensuite, distinguer besoin, solution et préférence
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le besoin correspond à ce que l&apos;entreprise cherche à obtenir ou à améliorer. La solution
                      correspond à une manière possible d&apos;y répondre. La préférence correspond souvent à une intuition
                      ou à une habitude.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Ces trois niveaux sont souvent mélangés trop tôt. Pendant la phase amont, il est beaucoup plus
                      utile de partir du besoin avant de figer la solution.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      Enfin, donner une forme exploitable au besoin
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un besoin bien structuré doit pouvoir être lu par la direction, les métiers, les utilisateurs
                      concernés, les fonctions support et les prestataires consultés.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il doit donc être formulé de manière suffisamment claire pour produire une compréhension commune.
                    </p>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="elements-title">
                <h2 id="elements-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les éléments indispensables à structurer avant consultation
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de consulter, plusieurs dimensions doivent être posées.
                </p>

                <div className="space-y-4">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Le contexte</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il faut expliquer d&apos;où part le sujet : la situation actuelle, les difficultés observées, les
                      enjeux, les limites de l&apos;existant et les raisons pour lesquelles la consultation est envisagée.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Le besoin réel</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il faut pouvoir formuler le problème traité, le résultat attendu, l&apos;amélioration recherchée ou
                      la fonction que la future réponse devra permettre.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Le périmètre</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le périmètre doit être clairement posé : ce qui entre, ce qui n&apos;entre pas, les sites ou équipes
                      concernés, les processus visés et les frontières du sujet.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Les contraintes</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il faut rendre visibles les contraintes de temps, de budget, d&apos;organisation, de charge interne,
                      de compatibilité avec l&apos;existant, de ressources, de déploiement et de conformité si nécessaire.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Les parties prenantes</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il faut identifier qui décide, qui utilise, qui contribue, qui sera impacté, qui valide et qui
                      porte la suite.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">6. Les livrables attendus</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Une consultation est plus utile quand elle précise ce qui est attendu : diagnostic, cadrage,
                      document, déploiement, coordination, livrables intermédiaires et logique de suivi.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">7. Les critères de comparaison</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il faut savoir avant consultation sur quoi portera l&apos;évaluation, ce qui est éliminatoire, ce qui
                      est important, ce qui est secondaire et comment les offres seront comparées.
                    </p>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="etapes-title">
                <h2 id="etapes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les 6 étapes pour structurer un besoin avant consultation
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Étape 1 — Reformuler le sujet.</span> Partir du sujet tel
                    qu&apos;il est perçu, puis le reformuler avec plus de précision.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 2 — Décrire l&apos;existant.</span> Documenter les
                    pratiques actuelles, les difficultés connues, les outils ou méthodes en place, les limites
                    observées et les zones de friction.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 3 — Poser l&apos;objectif.</span> Relier le besoin à un
                    objectif clair : qu&apos;attend-on réellement de la suite.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 4 — Définir le périmètre et les contraintes.</span>{" "}
                    Poser où le sujet commence, où il s&apos;arrête, qui est concerné et quels points doivent être pris en
                    compte dans les réponses.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 5 — Déterminer les attendus de la consultation.</span>{" "}
                    Clarifier ce qui est demandé aux prestataires, dans quel format et avec quels livrables.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 6 — Formaliser.</span> Mettre le besoin en forme
                    dans un support lisible : note de cadrage, expression de besoin, cahier des charges ou trame de
                    consultation.
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;important n&apos;est pas le nom du document. L&apos;important est qu&apos;il permette de consulter sur une base
                  commune.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="qualite-reponses-title">
                <h2 id="qualite-reponses-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette phase change radicalement la qualité des réponses
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un besoin bien structuré produit généralement trois effets majeurs.
                </p>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Les prestataires répondent sur un objet plus clair.</span>{" "}
                    Ils comprennent mieux le sujet, le périmètre, les attentes, les contraintes et le niveau réel de la
                    demande.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Les réponses deviennent plus comparables.</span> Il devient
                    plus facile de comparer la compréhension, la méthode, les livrables, la capacité d&apos;exécution, le
                    périmètre réel et le coût.
                  </li>
                  <li>
                    <span className="font-semibold text-white">La décision devient plus solide.</span> La comparaison ne
                    repose plus seulement sur l&apos;impression générale ou le prix, mais sur une lecture plus structurée du
                    fond.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="erreurs-title">
                <h2 id="erreurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Consulter trop tôt.</span> Quand le besoin n&apos;est pas
                    structuré, la consultation donne une illusion de comparaison.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Laisser trop d&apos;implicite.</span> Les attentes non
                    explicites réapparaissent ensuite sous forme de malentendus.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Confondre besoin et solution.</span> Une consultation
                    orientée trop tôt vers une solution empêche d&apos;évaluer d&apos;autres réponses pertinentes.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Oublier les contraintes.</span> Des réponses séduisantes
                    peuvent rester peu tenables si les contraintes réelles ne sont pas posées.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Définir les critères après réception des offres.</span>{" "}
                    Les critères doivent être posés avant.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="suffisant-title">
                <h2 id="suffisant-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si le besoin est suffisamment structuré
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant consultation, il est utile de se poser ces questions :
                </p>
                <ul className={bulletListClass}>
                  <li>le besoin peut-il être formulé clairement en quelques phrases ?</li>
                  <li>les parties prenantes lisent-elles le sujet de manière cohérente ?</li>
                  <li>le périmètre est-il suffisamment défini ?</li>
                  <li>les contraintes sont-elles visibles ?</li>
                  <li>les attendus de la consultation sont-ils explicites ?</li>
                  <li>les critères de comparaison sont-ils déjà pensés ?</li>
                  <li>le futur prestataire saura-t-il ce qu&apos;on attend réellement ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si plusieurs de ces réponses restent floues, le besoin n&apos;est probablement pas encore suffisamment
                  structuré.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="nous-title">
                <h2 id="nous-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous faisons dans cette phase
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand nous intervenons à ce stade, nous cherchons d&apos;abord à rendre la consultation plus fiable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Concrètement, cela consiste à :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le sujet réel</li>
                  <li>structurer le besoin</li>
                  <li>définir le périmètre</li>
                  <li>faire apparaître les contraintes</li>
                  <li>formuler les attendus</li>
                  <li>poser les critères utiles</li>
                  <li>produire une base de travail sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre objectif n&apos;est pas seulement de préparer une consultation. Notre objectif est de faire en
                  sorte que la consultation repose sur une compréhension plus juste du sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour prolonger cette étape, vous pouvez lire{" "}
                  <Link
                    href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    comment choisir un prestataire pour un projet industriel
                  </Link>{" "}
                  et utiliser{" "}
                  <Link href="/modeles-checklists/checklist-cadrage-projet-industriel/" className={inlineSeoLinkClass}>
                    la checklist de cadrage projet industriel
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Structurer un besoin avant consultation, c&apos;est éviter de demander aux offres de compenser ce qui
                  n&apos;a pas été clarifié en amont.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela consiste à :</p>
                <ul className={bulletListClass}>
                  <li>reformuler le sujet</li>
                  <li>décrire l&apos;existant</li>
                  <li>clarifier l&apos;objectif</li>
                  <li>définir le périmètre</li>
                  <li>expliciter les contraintes</li>
                  <li>identifier les parties prenantes</li>
                  <li>préciser les attendus</li>
                  <li>poser les critères de comparaison</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C&apos;est cette qualité de préparation qui rend ensuite la consultation, la comparaison et la décision
                  beaucoup plus solides.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous devez consulter des prestataires sur un sujet important, la meilleure manière d&apos;améliorer la
                  qualité du choix n&apos;est pas toujours de consulter plus d&apos;acteurs. C&apos;est souvent de mieux structurer
                  le besoin avant de les consulter.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cas client lié :{" "}
                  <Link
                    href="/cas-clients/structuration-dun-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    structuration d&apos;un besoin avant consultation
                  </Link>
                  . Outil d&apos;arbitrage utile :{" "}
                  <Link
                    href="/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/"
                    className={inlineSeoLinkClass}
                  >
                    matrice de critères de choix solution ou prestataire
                  </Link>
                  .
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-final-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-final-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de structurer un sujet avant consultation ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le besoin, poser un cadre de comparaison utile et préparer une décision
                  plus solide.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
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
