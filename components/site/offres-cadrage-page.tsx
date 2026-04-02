import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"

const inlineSeoLinkClass =
  "font-semibold text-[#07bc7d] underline decoration-[#07bc7d]/70 underline-offset-4 transition-colors hover:text-[#34e0a0] hover:decoration-[#34e0a0]"

const primaryButtonClass =
  "h-14 rounded-[14px] px-7 text-base font-semibold !text-zinc-950 hover:!text-zinc-950"

const darkButtonClass =
  "h-14 rounded-[14px] px-7 text-base font-semibold border-white/25 bg-black/35 !text-white hover:bg-black/45"

const cadrageItems = [
  "les objectifs du projet",
  "le contexte et les enjeux",
  "le périmètre",
  "les contraintes métier et opérationnelles",
  "les attentes fonctionnelles",
  "les priorités",
  "les critères de choix",
  "les rôles et parties prenantes",
  "les points qui doivent être tranchés avant de passer à l'étape suivante",
]

const cadrageExtendedItems = [
  "les scénarios possibles",
  "les hypothèses de travail",
  "les points de vigilance",
  "les conditions de réussite",
  "les premières bases de planning ou de gouvernance",
]


const seriousCadrageQuestions = [
  "quel problème cherche-t-on à traiter ?",
  "quel est l'objectif réel du projet ?",
  "que faut-il inclure, exclure ou arbitrer ?",
  "quelles sont les contraintes à intégrer dès le départ ?",
  "qui décide, qui contribue, qui utilise ?",
  "sur quels critères jugera-t-on qu'une solution ou une mise en œuvre est adaptée ?",
]


export function OffreCadragePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Offres", href: "/offres" },
              { label: "Cadrage de projet industriel et cahier des charges" },
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
                  Cadrage de projet industriel et cahier des charges
                </h1>

                <p className="ae-text text-lg sm:text-xl leading-relaxed max-w-3xl">
                  Structurer le besoin avant de décider, consulter ou lancer.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                  Nous intervenons lorsqu'un sujet est identifié, mais doit encore être clarifié, structuré et
                  formalisé avant de passer à l'action.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                  Le cadrage permet de poser les bases du projet. Le cahier des charges permet ensuite de formaliser le
                  besoin, les objectifs, les contraintes et les critères utiles à la suite. Les contenus de référence
                  sur le sujet convergent sur ce point : le cadrage intervient en amont pour poser le cadre, et le
                  cahier des charges sert de document de référence pour préparer la consultation et l'exécution.
                </p>
              </div>

              <aside className="ae-surface ae-industrial-block rounded-2xl border border-white/14 bg-black/30 p-5 sm:p-6">
                <h2 className="ae-heading text-xl font-bold mb-4">Finalité du cadrage</h2>
                <ul className="list-disc pl-6 space-y-3 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  <li>Clarifier le besoin réel avant tout engagement</li>
                  <li>Structurer les priorités et le périmètre</li>
                  <li>Formaliser une base de travail exploitable</li>
                  <li>Préparer une consultation ou une mise en œuvre sur des bases solides</li>
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
            aria-labelledby="cadrage-core-title"
          >
            <article className="mx-auto max-w-[980px] space-y-12">
              <section className="space-y-4 border-b border-white/10 pb-8">
                <h2 id="cadrage-core-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Un cadrage pour transformer un sujet encore flou en projet structuré
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage sert à passer d'une intention ou d'un besoin perçu à un projet compréhensible, partageable
                  et pilotable. L'objectif est d'aboutir à un{" "}
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    projet structuré
                  </Link>{" "}
                  avant décision. En amont, il peut s&apos;appuyer sur un{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic du fonctionnement
                  </Link>
                  .
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C'est à cette étape que l'on clarifie :</p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  <li>le contexte</li>
                  <li>les objectifs</li>
                  <li>le périmètre</li>
                  <li>les contraintes</li>
                  <li>les parties prenantes</li>
                  <li>les priorités</li>
                  <li>la logique de suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les ressources méthodologiques qui font référence sur le sujet décrivent la note de cadrage comme un
                  document amont qui pose les grandes lignes du projet, prépare le consensus entre parties prenantes et
                  sert de base au cahier des charges.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cahier des charges vient ensuite formaliser le besoin de manière plus précise. Il sert à aligner
                  les attentes, comparer les options, préparer une consultation et donner un référentiel clair à la
                  suite du projet. Les guides de référence le décrivent comme le document qui rassemble besoins,
                  objectifs, contraintes, portée, délais et budget prévisionnel. Exemple utile :{" "}
                  <Link
                    href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/"
                    className={inlineSeoLinkClass}
                  >
                    cahier des charges fonctionnel
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="when-title">
                <h2 id="when-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand intervenir en cadrage
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons lorsque le besoin existe, mais que sa formulation reste insuffisante pour lancer le
                  projet dans de bonnes conditions.
                </p>
                <ul className="list-disc pl-6 space-y-3 ae-text text-base sm:text-lg leading-relaxed">
                  <li>
                    <span className="font-semibold text-white">Un sujet important, mais encore mal défini.</span> Le
                    besoin est réel, mais les contours restent trop flous pour être partagés ou traduits en projet.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Trop de choses sont implicites.</span> Les attentes,
                    les contraintes ou les critères de décision ne sont pas encore suffisamment posés par écrit.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Il faut consulter sans se tromper.</span> Avant de
                    comparer des prestataires ou des solutions, le besoin doit être formalisé de façon plus solide.
                    Plusieurs guides de cahier des charges rappellent que ce document sert précisément à comparer des
                    options sur des critères plus objectifs et à éviter les malentendus en aval.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Le projet risque de partir trop vite.</span> Sans
                    cadrage amont, le risque est de lancer trop tôt un projet dont les objectifs, le périmètre ou les
                    responsabilités restent insuffisamment posés. Les ressources sur le cadrage et la note de cadrage
                    insistent justement sur la fonction de ce travail amont : valider l'opportunité, fixer les grands
                    axes et préparer la suite sur une base plus claire.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Les parties prenantes ne lisent pas le sujet de la même manière.
                    </span>{" "}
                    Le cadrage permet d'aligner les lectures, de clarifier les attentes et de poser un langage commun
                    avant de lancer.
                  </li>
                </ul>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="what-title">
                <h2 id="what-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous cadrons concrètement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention porte sur le besoin tel qu'il doit être compris, partagé et préparé avant
                  consultation ou mise en œuvre. Nous structurons aussi les{" "}
                  <Link
                    href="/ressources/cahier-des-charges-vs-expression-de-besoin/"
                    className={inlineSeoLinkClass}
                  >
                    points de clarification du besoin
                  </Link>{" "}
                  pour éviter les zones grises.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous travaillons notamment sur :</p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  {cadrageItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quand le sujet le nécessite, nous structurons aussi :</p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  {cadrageExtendedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les guides de cahier des charges et de cadrage insistent tous sur ces mêmes composantes : contexte,
                  besoins, contraintes, ressources, délais, budget, critères d'évaluation et fonctions attendues.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="benefits-title">
                <h2 id="benefits-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que le cadrage et le cahier des charges permettent
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage n'a pas vocation à produire un document de plus. Il sert à rendre le projet plus lisible,
                  plus partageable et plus solide.
                </p>
                <div className="space-y-4 ae-text text-base sm:text-lg leading-relaxed">
                  <p>
                    <span className="font-semibold text-white">Un besoin mieux formulé.</span> Le sujet devient
                    compréhensible, transmissible et exploitable.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Un périmètre plus clair.</span> Ce qui entre dans le
                    projet, ce qui n'y entre pas, et ce qui reste à arbitrer sont mieux distingués.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Des décisions plus solides.</span> Les arbitrages
                    reposent sur un cadre plus fiable, pas sur des hypothèses implicites.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Une consultation plus utile.</span> Le cahier des
                    charges permet de comparer des réponses sur une base plus claire et plus homogène. Les sources de
                    référence sur les cahiers des charges métiers ou logiciels rappellent précisément cette fonction de
                    comparaison et d'alignement.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Une mise en œuvre mieux préparée.</span> Quand un projet
                    doit être lancé, les bases de départ sont plus propres, ce qui réduit le flou en aval. Plusieurs
                    guides soulignent qu'un cahier des charges incomplet ou approximatif expose davantage aux révisions
                    tardives, imprévus ou dérives de projet. Voir aussi{" "}
                    <Link
                      href="/cas-clients/structuration-dun-besoin-avant-consultation/"
                      className={inlineSeoLinkClass}
                    >
                      ce cas client de structuration du besoin
                    </Link>
                    .
                  </p>
                </div>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="approach-title">
                <h2 id="approach-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Une approche structurée, orientée décision
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention repose sur une logique simple : clarifier, formaliser, arbitrer, préparer la suite.
                </p>
                <ol className="list-decimal pl-6 space-y-3 ae-text text-base sm:text-lg leading-relaxed">
                  <li>
                    <span className="font-semibold text-white">Comprendre.</span> Reprendre le sujet à la base :
                    contexte, objectifs, enjeux, contraintes, acteurs.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Structurer.</span> Organiser le besoin, le périmètre,
                    les attentes et les priorités dans une logique cohérente.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Formaliser.</span> Produire une base de travail lisible
                    : note de cadrage, feuille de route, cahier des charges, critères de choix.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Préparer.</span> Donner au projet les conditions de
                    départ les plus solides possibles avant consultation ou mise en œuvre.
                  </li>
                </ol>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette logique est cohérente avec les pratiques projet les plus robustes : la note de cadrage vient
                  fixer le cap et le cahier des charges sert ensuite de document de référence pour l'exécution. Méthode
                  détaillée :{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    voir notre méthode d'intervention
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="serious-title">
                <h2 id="serious-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que doit contenir un cadrage sérieux
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un cadrage utile n'est ni une note superficielle, ni un document trop théorique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il doit au minimum permettre de répondre clairement à ces questions :
                </p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  {seriousCadrageQuestions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cahier des charges va plus loin en détaillant le besoin, les fonctions attendues, les contraintes
                  et les modalités utiles pour consulter ou exécuter. Les guides spécialisés décrivent le CDC comme un
                  document structuré qui précise les fonctions, contraintes et attentes du donneur d'ordre.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="impact-title">
                <h2 id="impact-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette étape change la suite du projet
                </h2>
                <div className="rounded-2xl border border-white/12 border-l-[3px] border-l-[#07bc7d] bg-black/28 p-5 sm:p-6">
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Un sujet mal cadré n'est pas seulement un sujet flou. C'est souvent un sujet qui mobilise trop tôt,
                    consulte trop vite, compare mal, ou avance sans base partagée.
                  </p>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">À l'inverse, un cadrage sérieux permet :</p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>d'aligner les parties prenantes</li>
                  <li>de faire ressortir les vrais arbitrages</li>
                  <li>de préparer une consultation plus propre</li>
                  <li>de réduire les malentendus au moment du lancement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les contenus de référence sur la note de cadrage et le cahier des charges insistent justement sur
                  leur rôle d'alignement, de consensus et de préparation de la suite.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="next-title">
                <h2 id="next-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Et ensuite
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon les sujets, le cadrage peut déboucher sur une consultation structurée, une sélection de
                  prestataire ou de solution, une roadmap plus détaillée, ou une mise en œuvre à piloter.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage n'est pas une fin en soi. Il sert à faire passer le sujet d'une intention ou d'un besoin
                  diffus à une base de travail réellement exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour aller plus loin :
                  {" "}
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                    découvrir notre pilotage de mise en œuvre
                  </Link>
                  ,{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    voir notre méthode
                  </Link>
                  {" "}et{" "}
                  <Link
                    href="/cas-clients/structuration-dun-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    consulter un cas client de structuration d'un besoin avant consultation
                  </Link>
                  . Pour échanger sur votre contexte, utilisez aussi{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    la page contact
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-5" aria-labelledby="situations-title">
                <h2 id="situations-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Situations sur lesquelles nous intervenons
                </h2>
                <ul className="list-disc pl-6 space-y-3 ae-text text-base sm:text-lg leading-relaxed">
                  <li>
                    <span className="font-semibold text-white">Formaliser un besoin avant consultation.</span> Poser un
                    cadre avant de comparer ou d'engager.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Transformer un sujet diffus en projet structuré.</span>{" "}
                    Passer d'une intention à un besoin formalisé et partageable.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Préparer un cahier des charges exploitable.</span>{" "}
                    Donner une base claire à la consultation et à la suite.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Sécuriser un lancement de projet.</span> Éviter de
                    démarrer trop tôt sur un périmètre encore instable.
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    Voir nos cas clients
                  </Link>
                  {" "}pour des situations proches de la vôtre.
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-final-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-final-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de structurer un sujet avant de lancer la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises qui ont besoin de clarifier un besoin, formaliser les bonnes
                  priorités et préparer un projet sur des bases solides.
                </p>
                <p className="ae-text text-sm sm:text-base leading-relaxed">
                  Pour approfondir :{" "}
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    comment cadrer un projet industriel
                  </Link>{" "}
                  et{" "}
                  <Link
                    href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/"
                    className={inlineSeoLinkClass}
                  >
                    exemple de cahier des charges fonctionnel
                  </Link>
                  .
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
