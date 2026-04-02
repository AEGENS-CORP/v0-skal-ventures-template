import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const FaqFautIlConsulterPrestatairesAvantCadrerBesoinMeta = {
  title: "Faut-il consulter des prestataires avant de cadrer le besoin ? | FAQ AEGENS",
  description:
    "Consulter des prestataires avant de cadrer le besoin est rarement une bonne idée. Comprendre dans quels cas, pourquoi et ce qu’il faut clarifier d’abord.",
}

export function FaqFautIlConsulterPrestatairesAvantCadrerBesoinPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "FAQ", href: "/faq/" },
              { label: "Faut-il consulter des prestataires avant de cadrer le besoin ?" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Faut-il consulter des prestataires avant de cadrer le besoin ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                En général, non. On peut explorer le marché avant une consultation formelle, mais consulter réellement
                des prestataires alors que le besoin n’est pas cadré est souvent une mauvaise séquence.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                On peut faire du repérage, écouter des options et comprendre ce qui existe. En revanche, on ne devrait
                pas demander au marché de faire à votre place le travail de cadrage du besoin.
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
              <section className={sectionClass} aria-labelledby="temptation-title">
                <h2 id="temptation-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi la tentation est forte
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Consulter tôt donne l’impression d’avancer vite : le sujet est réel, la pression existe, les options
                  paraissent nombreuses. Mais on transforme alors souvent un sujet encore flou en marché de solutions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème n’est pas d’aller vite. Le problème est de consulter sur une base qui n’est pas encore
                  suffisamment définie.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="cannot-do-title">
                <h2 id="cannot-do-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que la consultation ne peut pas faire à votre place
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un prestataire peut éclairer le sujet, poser de bonnes questions et montrer des options. Mais il ne
                  peut pas produire à votre place un cadre neutre et stabilisé du besoin.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Chaque prestataire lit la situation selon :</p>
                <ul className={bulletListClass}>
                  <li>son offre</li>
                  <li>sa méthode</li>
                  <li>son modèle économique</li>
                  <li>ses références</li>
                  <li>son périmètre habituel</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En consultant trop tôt, vous comparez souvent des reconstructions concurrentes de votre sujet, pas des
                  réponses à un besoin commun déjà cadré.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="too-early-title">
                <h2 id="too-early-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui se passe quand on consulte trop tôt
                </h2>
                <ol className="list-decimal pl-6 space-y-3 ae-text text-base sm:text-lg leading-relaxed marker:text-[#07bc7d]">
                  <li>
                    <strong>Les offres deviennent difficilement comparables :</strong> périmètres, hypothèses et niveaux
                    de charge diffèrent fortement.
                  </li>
                  <li>
                    <strong>Le prix devient trompeur :</strong> un prix bas peut simplement couvrir moins ou transférer plus
                    de charge à l’interne.
                  </li>
                  <li>
                    <strong>Les arbitrages arrivent trop tard :</strong> ce qui aurait dû être clarifié en amont réapparaît
                    pendant la sélection.
                  </li>
                  <li>
                    <strong>La décision devient fragile :</strong> l’impression générale prend le dessus sur une comparaison
                    structurée.
                  </li>
                </ol>
              </section>

              <section className={sectionClass} aria-labelledby="distinction-title">
                <h2 id="distinction-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut distinguer : sourçage et consultation
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le sourçage</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sourçage est une phase amont pour comprendre le marché : types de solutions, modèles
                  d’intervention, contraintes de faisabilité, état de l’offre.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">La consultation</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La consultation suppose déjà un besoin suffisamment défini, un périmètre posé et des attendus
                  explicites permettant une vraie comparaison.
                </p>

                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En synthèse : le sourçage prépare le cadrage, la consultation suppose un cadrage déjà avancé.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="before-title">
                <h2 id="before-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Dans quels cas il est utile d’échanger avant cadrage
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Des échanges préparatoires sont utiles quand vous voulez :</p>
                <ul className={bulletListClass}>
                  <li>comprendre la structure du marché</li>
                  <li>identifier les types de réponses possibles</li>
                  <li>tester la faisabilité générale d’un sujet</li>
                  <li>faire un premier repérage avant formalisation</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces échanges doivent rester une phase d’exploration, sans être confondus avec une consultation.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="cadrer-title">
                <h2 id="cadrer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut cadrer avant de consulter
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Avant une consultation sérieuse, il faut clarifier :</p>
                <ul className={bulletListClass}>
                  <li>le besoin réel</li>
                  <li>l’objectif</li>
                  <li>le périmètre</li>
                  <li>les contraintes</li>
                  <li>les attendus</li>
                  <li>les critères de comparaison</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les critères peuvent inclure : compréhension du besoin, couverture du périmètre, méthode,
                  faisabilité, charge côté client, coût global et niveau de risque.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="risk-title">
                <h2 id="risk-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les cas où consulter trop tôt est particulièrement risqué
                </h2>
                <ul className={bulletListClass}>
                  <li>quand plusieurs équipes sont concernées</li>
                  <li>quand le projet est structurant</li>
                  <li>quand une solution semble déjà évidente</li>
                  <li>quand vous voulez comparer plusieurs prestataires</li>
                  <li>quand le prix risque de peser lourd dans la décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ces cas, consulter trop tôt ne fait pas gagner du temps. Cela déplace les ambiguïtés plus loin.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="ready-title">
                <h2 id="ready-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signaux que vous n’êtes pas encore prêt à consulter
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous n’êtes probablement pas prêt si plusieurs réponses sont non :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est clairement formulé</li>
                  <li>l’objectif principal est partagé</li>
                  <li>le périmètre est stabilisé</li>
                  <li>les attendus de réponse sont clairs</li>
                  <li>les critères de choix existent</li>
                  <li>vous savez ce qui relève de la phase immédiate</li>
                  <li>vous pouvez comparer des offres sur une base commune</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si ce n’est pas le cas, le sujet est probablement encore au stade du cadrage.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="after-title">
                <h2 id="after-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand la consultation peut venir juste après
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La consultation peut venir rapidement après cadrage quand :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est clair</li>
                  <li>le périmètre est posé</li>
                  <li>les contraintes sont visibles</li>
                  <li>les attendus sont explicites</li>
                  <li>les critères sont définis</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Séquence saine :</p>
                <ol className="list-decimal pl-6 space-y-1 ae-text text-base sm:text-lg leading-relaxed marker:text-[#07bc7d]">
                  <li>clarification du besoin</li>
                  <li>cadrage</li>
                  <li>consultation</li>
                  <li>comparaison</li>
                  <li>décision</li>
                  <li>mise en œuvre</li>
                </ol>
              </section>

              <section className={sectionClass} aria-labelledby="dont-wait-title">
                <h2 id="dont-wait-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut faire si vous ne voulez pas attendre trop
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La bonne réponse n’est ni de consulter tout de suite, ni de bloquer jusqu’au document parfait. La bonne
                  approche est souvent :
                </p>
                <ul className={bulletListClass}>
                  <li>faire un cadrage ciblé</li>
                  <li>clarifier le besoin et les attendus</li>
                  <li>sourcer intelligemment si nécessaire</li>
                  <li>consulter ensuite sur une base comparable</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En général, non : il ne faut pas consulter des prestataires avant de cadrer le besoin.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En revanche, il est pertinent de faire du sourçage ou des échanges exploratoires en amont.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En une phrase : on peut échanger avec le marché avant de cadrer, mais on ne devrait pas demander au
                  marché de cadrer le besoin à sa place.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage
                  </Link>
                  ,{" "}
                  <Link href="/faq/que-contient-un-cahier-des-charges/" className={inlineSeoLinkClass}>
                    que contient un cahier des charges
                  </Link>
                  ,{" "}
                  <Link href="/faq/peut-on-lancer-un-projet-sans-cahier-des-charges/" className={inlineSeoLinkClass}>
                    peut-on lancer un projet sans cahier des charges
                  </Link>
                  ,{" "}
                  <Link
                    href="/ressources/comment-structurer-un-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    comment structurer un besoin avant consultation
                  </Link>
                  ,{" "}
                  <Link href="/modeles-checklists/checklist-consultation-prestataires/" className={inlineSeoLinkClass}>
                    checklist consultation prestataires
                  </Link>
                  ,{" "}
                  <Link
                    href="/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/"
                    className={inlineSeoLinkClass}
                  >
                    matrice de critères de choix
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
                  Besoin de préparer une consultation sur une base solide ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le besoin et à structurer une base de comparaison réellement exploitable.
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
