import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"

const inlineSeoLinkClass =
  "font-semibold text-[#07bc7d] underline decoration-[#07bc7d]/70 underline-offset-4 transition-colors hover:text-[#34e0a0] hover:decoration-[#34e0a0]"

const primaryButtonClass =
  "h-14 rounded-[14px] px-7 text-base font-semibold !text-zinc-950 hover:!text-zinc-950"

const darkButtonClass =
  "h-14 rounded-[14px] px-7 text-base font-semibold border-white/25 bg-black/35 !text-white hover:bg-black/45"

export function OffreDiagnosticPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Offres", href: "/offres" },
              { label: "Diagnostic du fonctionnement opérationnel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 items-start">
              <div className="rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8 space-y-5">
                <h1 className="ae-hero-title text-[clamp(1.95rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                  Diagnostic du fonctionnement opérationnel
                </h1>

                <p className="ae-text text-lg sm:text-xl leading-relaxed max-w-3xl">
                  Poser un constat clair avant de décider, structurer ou lancer un projet.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                  Nous intervenons lorsqu'une entreprise a besoin de prendre du recul sur son fonctionnement,
                  d'objectiver des points de blocage et de clarifier les priorités avant d'engager des décisions ou une
                  mise en œuvre.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed max-w-4xl">
                  Avant d&apos;engager la suite, vous pouvez aussi lire{" "}
                  <Link
                    href="/ressources/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    notre ressource dédiée au diagnostic
                  </Link>{" "}
                  ou{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    nous exposer directement votre situation
                  </Link>
                  .
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Button asChild size="lg" className={primaryButtonClass}>
                    <Link href="/contact/">Parler de votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={darkButtonClass}>
                    <Link href="/methode/">Voir notre méthode</Link>
                  </Button>
                </div>
              </div>

              <aside className="ae-surface ae-industrial-block rounded-2xl border border-white/14 bg-black/30 p-5 sm:p-6">
                <h2 className="ae-heading text-xl font-bold mb-4">Finalité du diagnostic</h2>
                <ul className="list-disc pl-6 space-y-3 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  <li>Poser un constat fiable sur le fonctionnement réel</li>
                  <li>Hiérarchiser les priorités avant toute décision structurante</li>
                  <li>Préparer un cadrage ou une mise en œuvre sur une base solide</li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="diagnostic-article-title">
            <article className="mx-auto max-w-[940px] space-y-10">
              <section className="space-y-4 border-b border-white/10 pb-8">
                <h2
                  id="diagnostic-article-title"
                  className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                >
                  Un diagnostic pour comprendre ce qui freine réellement le fonctionnement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic du fonctionnement opérationnel permet d'analyser une situation dans sa réalité
                  concrète.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il ne se limite ni à un outil, ni à un service, ni à un organigramme. Il porte sur les{" "}
                  <Link href="/problematiques/manque-de-visibilite-sur-les-processus/" className={inlineSeoLinkClass}>
                    méthodes de travail
                  </Link>
                  , l{"'"}organisation opérationnelle, les interfaces entre équipes et les points de blocage qui
                  ralentissent l'exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L'objectif est simple : poser un constat fiable, faire ressortir les priorités utiles et donner une
                  base solide à la suite.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="quand-title">
                <h2 id="quand-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand faire un diagnostic
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons lorsque la situation mérite d'être objectivée avant de décider, de lancer un projet
                  ou d'engager des moyens.
                </p>
                <div className="space-y-3 ae-text text-base sm:text-lg leading-relaxed">
                  <p>
                    <span className="font-semibold text-white">Un besoin encore trop flou.</span> Le sujet est réel,
                    mais pas encore assez clair pour être structuré ou lancé dans de bonnes conditions.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Des difficultés récurrentes.</span> Certaines frictions
                    ou{" "}
                    <Link href="/problematiques/pertes-de-temps-entre-services-industrie/" className={inlineSeoLinkClass}>
                      pertes de temps
                    </Link>{" "}
                    reviennent sans être réellement objectivées.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Un projet à préparer.</span> Une décision doit être
                    prise, mais le cadre n'est pas encore suffisamment posé pour avancer sereinement.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Un regard extérieur nécessaire.</span> La situation
                    demande du recul, une lecture transversale et une hiérarchisation plus claire des priorités.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Un besoin avant consultation.</span> Avant de consulter
                    ou d'engager des prestataires, le besoin doit être mieux formalisé.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Une situation devenue diffuse.</span> Le sujet existe
                    depuis un moment, mais il manque encore un constat clair pour structurer la suite.
                  </p>
                </div>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="analyse-title">
                <h2 id="analyse-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous analysons concrètement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention porte sur le fonctionnement concret de l'entreprise, tel qu'il se vit réellement
                  au quotidien.
                </p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                  <li>les méthodes de travail</li>
                  <li>l'organisation opérationnelle</li>
                  <li>les interfaces entre services</li>
                  <li>les points de blocage</li>
                  <li>les pertes de temps</li>
                  <li>les contournements devenus habituels</li>
                  <li>les responsabilités peu claires</li>
                  <li>les besoins mal formalisés</li>
                  <li>les sujets qui demandent un cadre plus structuré</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon les situations, les leviers peuvent être organisationnels, méthodologiques, outillés ou liés
                  au cadre même de mise en œuvre.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="permet-title">
                <h2 id="permet-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que cette intervention permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic n'a pas vocation à ajouter de la complexité. Il sert à poser un cadre plus clair pour
                  décider et agir dans de meilleures conditions.
                </p>
                <div className="space-y-3 ae-text text-base sm:text-lg leading-relaxed">
                  <p>
                    <span className="font-semibold text-white">Un constat plus fiable.</span> La situation est
                    objectivée de manière plus claire, plus structurée et plus exploitable.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Des priorités hiérarchisées.</span> Les sujets
                    importants ressortent plus nettement, sans dispersion inutile.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Une meilleure base de décision.</span> Les arbitrages
                    peuvent être pris sur un socle plus solide.
                  </p>
                  <p>
                    <span className="font-semibold text-white">Une suite plus structurée.</span> Si un projet doit être
                    lancé, le cadre de départ est plus clair, plus crédible et plus utile.
                  </p>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic crée les conditions d'une décision plus juste et d'une exécution plus solide.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="approche-title">
                <h2 id="approche-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Une approche structurée, orientée décision
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre intervention repose sur une logique simple : comprendre la situation, objectiver ce qui compte,
                  hiérarchiser les priorités et préparer une suite plus claire.
                </p>
                <ol className="space-y-4 ae-text text-base sm:text-lg leading-relaxed">
                  <li className="border-l-2 border-[#07bc7d]/55 pl-4">
                    <span className="font-semibold text-white">Étape 1 — Observer.</span> Comprendre le fonctionnement
                    réel, les interactions et les points de vigilance.
                  </li>
                  <li className="border-l-2 border-[#07bc7d]/55 pl-4">
                    <span className="font-semibold text-white">Étape 2 — Analyser.</span> Faire ressortir ce qui
                    freine, ce qui se répète et ce qui mérite une attention prioritaire.
                  </li>
                  <li className="border-l-2 border-[#07bc7d]/55 pl-4">
                    <span className="font-semibold text-white">Étape 3 — Objectiver.</span> Poser un constat clair,
                    lisible et exploitable.
                  </li>
                  <li className="border-l-2 border-[#07bc7d]/55 pl-4">
                    <span className="font-semibold text-white">Étape 4 — Prioriser.</span> Distinguer ce qui relève
                    d'un ajustement, d'un cadrage ou d'une mise en œuvre plus structurée.
                  </li>
                </ol>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="exterieur-title">
                <h2 id="exterieur-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi faire appel à un regard extérieur
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certaines situations ne manquent pas d'engagement ou de bonne volonté. Elles manquent surtout de
                  recul, de structure et d'une lecture suffisamment transversale.
                </p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>prendre de la distance sur une situation devenue trop familière</li>
                  <li>distinguer les signaux importants du bruit quotidien</li>
                  <li>
                    objectiver ce qui relève d'un point de blocage, d'une méthode, d'une organisation ou d'un besoin
                    mal posé
                  </li>
                  <li>clarifier ce qui doit réellement être traité</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C'est cette mise à plat qui permet ensuite de poser de meilleures décisions et d'engager la suite sur
                  une base plus solide.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="ensuite-title">
                <h2 id="ensuite-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Et ensuite
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Selon les sujets, le diagnostic peut rester une intervention ponctuelle, ou ouvrir vers une étape
                  plus structurée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Lorsque la situation le justifie, il peut conduire à un{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    cadrage de projet
                  </Link>
                  , une roadmap, un cahier des charges ou une mise en œuvre à organiser.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le diagnostic ne force pas une suite. Il permet simplement de décider plus justement de ce qui doit
                  être engagé. Pour aller plus loin, vous pouvez consulter{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    notre méthode
                  </Link>{" "}
                  ou voir{" "}
                  <Link href="/cas-clients/diagnostic-et-cadrage-dun-projet-industriel/" className={inlineSeoLinkClass}>
                    un cas client diagnostic et cadrage
                  </Link>
                  . Si vous souhaitez un premier échange rapide,{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    la page contact
                  </Link>{" "}
                  permet de cadrer le point de départ.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="situations-title">
                <h2 id="situations-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Situations sur lesquelles nous intervenons
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons notamment pour{" "}
                  <Link
                    href="/problematiques/besoin-mal-defini-avant-consultation-prestataires/"
                    className={inlineSeoLinkClass}
                  >
                    clarifier un besoin avant projet
                  </Link>
                  , objectiver des pertes de temps entre services, structurer une situation devenue diffuse et préparer
                  un cadrage sérieux.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Vous pouvez parcourir{" "}
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    nos cas clients
                  </Link>{" "}
                  pour voir des situations proches et les décisions qui ont permis de débloquer l'exécution.
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-final-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-final-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de poser un constat clair avant d'aller plus loin ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises qui ont besoin de comprendre une situation, de clarifier les
                  priorités et de préparer une suite plus structurée.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/methode/">Découvrir notre approche</Link>
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
