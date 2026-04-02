import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass = "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

export const NotreExperienceMeta = {
  title: "Notre expérience | AEGENS",
  description:
    "Découvrez l’expérience AEGENS : une pratique du diagnostic, du cadrage et du pilotage construite au contact des réalités opérationnelles, des projets structurants et des environnements exigeants.",
}

export function NotreExperiencePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/a-propos" },
              { label: "Notre expérience" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Notre expérience
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L&apos;expérience, dans notre métier, ne se résume pas à une durée. Elle ne se résume pas non plus à une
                accumulation de projets ou à une liste de secteurs.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L&apos;expérience utile est celle qui permet de lire une situation plus vite, plus justement, et avec un
                niveau de discernement supérieur.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C&apos;est cette expérience-là qui nous intéresse. C&apos;est aussi celle que nous cherchons à mettre au
                service des entreprises que nous accompagnons.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                AEGENS accompagne l&apos;industrie, la logistique et le retail dans le diagnostic, le cadrage et le pilotage
                de mise en œuvre, avec une logique simple : comprendre, structurer et faire avancer.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans les sujets que nous traitons, la difficulté ne vient pas toujours d&apos;un manque de travail. Elle vient
                souvent d&apos;une difficulté plus discrète : savoir où regarder, quoi clarifier, ce qu&apos;il faut réellement
                structurer, et à quel moment il faut arrêter d&apos;analyser pour commencer à faire avancer.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/methode/">Voir notre méthode</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="experience-reading-title">
            <article className="mx-auto max-w-[980px] space-y-9">
              <section className="space-y-4 border-b border-white/10 pb-8">
                <h2
                  id="experience-reading-title"
                  className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                >
                  Une expérience utile pour lire juste et décider au bon niveau
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;expérience sert à reconnaître plus rapidement :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qui relève d&apos;un vrai point de blocage</li>
                  <li>ce qui relève d&apos;un besoin encore mal formulé</li>
                  <li>ce qui relève d&apos;un défaut de coordination</li>
                  <li>ce qui relève d&apos;un projet à cadrer</li>
                  <li>ce qui relève d&apos;une mise en œuvre à tenir dans la durée</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans cette lecture, beaucoup de sujets restent prisonniers d&apos;un traitement trop partiel :
                </p>
                <ul className={bulletListClass}>
                  <li>on agit trop tôt</li>
                  <li>on formalise trop tard</li>
                  <li>on consulte sans base claire</li>
                  <li>on engage une mise en œuvre alors que la compréhension du besoin reste insuffisante</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre expérience s&apos;est construite précisément à l&apos;endroit où ces écarts deviennent visibles.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle permet aussi de savoir si un sujet demande un{" "}
                  <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                    diagnostic
                  </Link>
                  , un{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    cadrage
                  </Link>{" "}
                  ou un{" "}
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                    pilotage de mise en œuvre
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="contexts-title">
                <h2 id="contexts-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Des environnements où l&apos;exécution compte autant que la décision
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons dans des contextes où l&apos;exécution compte autant que la décision :
                </p>
                <ul className={bulletListClass}>
                  <li>industrie</li>
                  <li>logistique</li>
                  <li>retail</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces environnements ont des réalités différentes, mais ils partagent plusieurs exigences communes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  D&apos;abord, le réel y compte plus que le discours. Lorsqu&apos;un sujet touche à l&apos;organisation, au
                  fonctionnement, aux méthodes ou à un projet à mettre en œuvre, les effets se voient vite :
                </p>
                <ul className={bulletListClass}>
                  <li>dans le rythme</li>
                  <li>dans la coordination</li>
                  <li>dans les délais</li>
                  <li>dans la charge</li>
                  <li>dans la qualité d&apos;exécution</li>
                  <li>dans la capacité à faire tenir ensemble plusieurs acteurs ou plusieurs étapes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ensuite, ces environnements supportent mal le flou durable. Un besoin mal posé, un projet lancé trop
                  tôt, une responsabilité mal définie, un périmètre trop approximatif ou une coordination insuffisante
                  finissent presque toujours par produire des frictions visibles.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Enfin, la mise en œuvre y a une valeur particulière : un sujet est considéré comme abouti lorsqu&apos;il
                  est réellement tenu dans l&apos;exécution.
                </p>
              </section>

              <section className="space-y-5 border-b border-white/10 pb-8" aria-labelledby="dimensions-title">
                <h2 id="dimensions-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Trois dimensions qui structurent notre expérience
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl font-semibold">Lecture opérationnelle</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">
                      Comprendre une organisation, ce n&apos;est pas seulement comprendre ce qu&apos;elle déclare faire. C&apos;est
                      comprendre comment elle fonctionne effectivement :
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                      <li>comment les décisions se prennent</li>
                      <li>comment les informations circulent</li>
                      <li>où les validations s&apos;allongent</li>
                      <li>où le travail se ralentit ou se recompose</li>
                      <li>où il dépend d&apos;ajustements non formalisés</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl font-semibold">Expérience du cadrage</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">
                      Entre une difficulté perçue et un projet réellement structuré, il faut être capable de :
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                      <li>clarifier l&apos;objectif réel</li>
                      <li>distinguer le symptôme du sujet de fond</li>
                      <li>définir le périmètre utile</li>
                      <li>faire émerger les arbitrages</li>
                      <li>formuler le besoin de manière exploitable</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl font-semibold">Expérience du pilotage</h3>
                    <p className="ae-text text-sm sm:text-base leading-relaxed">
                      Elle permet de reconnaître ce qui fragilise l&apos;exécution :
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 marker:text-[#07bc7d] ae-text text-sm sm:text-base leading-relaxed">
                      <li>l&apos;absence de lecture commune</li>
                      <li>le manque de suivi réel</li>
                      <li>les arbitrages repoussés</li>
                      <li>les responsabilités floues</li>
                      <li>la perte de continuité de portage</li>
                    </ul>
                  </article>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ces situations, l&apos;expérience n&apos;apporte pas seulement une méthode. Elle apporte une capacité
                  de tenue.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="qualifier-title">
                <h2 id="qualifier-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Identifier le noyau réel d&apos;une difficulté
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avec le temps, nous avons constaté qu&apos;un même problème peut être formulé de plusieurs façons :
                </p>
                <ul className={bulletListClass}>
                  <li>comme une difficulté d&apos;outil</li>
                  <li>comme un problème d&apos;organisation</li>
                  <li>comme une question de méthode</li>
                  <li>comme un sujet de coordination</li>
                  <li>comme un manque de visibilité</li>
                  <li>comme une surcharge</li>
                  <li>comme un projet qu&apos;il faudrait enfin lancer</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans les faits, ces formulations peuvent toutes désigner le même noyau de difficulté. L&apos;expérience
                  sert à identifier ce noyau et à éviter deux erreurs fréquentes :
                </p>
                <ul className={bulletListClass}>
                  <li>traiter trop petit un sujet qui demande une lecture plus globale</li>
                  <li>traiter trop grand un sujet qui demande d&apos;abord une clarification précise</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette capacité de bon niveau est fondamentale. Elle permet de savoir si l&apos;entreprise a besoin :
                </p>
                <ul className={bulletListClass}>
                  <li>d&apos;un diagnostic</li>
                  <li>d&apos;un cadrage</li>
                  <li>d&apos;une mise en forme du besoin</li>
                  <li>d&apos;un pilotage</li>
                  <li>d&apos;une remise à plat plus brève mais bien menée</li>
                </ul>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="intervenir-title">
                <h2 id="intervenir-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que l&apos;expérience change dans la manière d&apos;intervenir
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle s&apos;exprime moins par un affichage que par une manière d&apos;intervenir. Elle se voit dans :
                </p>
                <ul className={bulletListClass}>
                  <li>la qualité des questions posées</li>
                  <li>la capacité à reformuler un sujet de façon plus juste</li>
                  <li>la faculté de hiérarchiser rapidement</li>
                  <li>l&apos;attention portée aux interfaces entre équipes</li>
                  <li>la précision des priorités proposées</li>
                  <li>la capacité à construire une suite cohérente</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous attachons aussi une grande importance à la qualité de formulation. Un besoin imprécis, un
                  objectif trop large, un périmètre mal posé ou un arbitrage laissé dans l&apos;implicite suffisent à
                  affaiblir toute la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;expérience permet de transformer une intuition, un ressenti ou une difficulté diffuse en objet de
                  travail plus propre :
                </p>
                <ul className={bulletListClass}>
                  <li>plus net</li>
                  <li>plus partageable</li>
                  <li>plus arbitrable</li>
                  <li>plus exécutable</li>
                </ul>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="continuite-title">
                <h2 id="continuite-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Une discipline de discernement et de continuité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous considérons l&apos;expérience comme une discipline de discernement, et pas seulement comme un volume
                  d&apos;antériorité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce qui fait la qualité durable d&apos;un sujet, c&apos;est la cohérence entre :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qui a été compris</li>
                  <li>ce qui a été formulé</li>
                  <li>ce qui a été décidé</li>
                  <li>ce qui est réellement mis en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C&apos;est pourquoi nous pensons les projets comme un enchaînement cohérent d&apos;un bout à l&apos;autre :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                      diagnostic
                    </Link>
                  </li>
                  <li>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                      cadrage
                    </Link>
                  </li>
                  <li>
                    <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                      pilotage
                    </Link>
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Être solide, dans notre métier, veut dire être capable :
                </p>
                <ul className={bulletListClass}>
                  <li>de voir vite sans aller trop vite</li>
                  <li>de structurer sans rigidifier</li>
                  <li>de clarifier sans simplifier à l&apos;excès</li>
                  <li>de tenir l&apos;exécution sans l&apos;alourdir</li>
                  <li>de rester lisible même quand les sujets se complexifient</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="difference-title">
                <h2 id="difference-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Une différence concrète pour les projets
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans les environnements que nous accompagnons, cela fait une différence concrète : dans la façon de
                  comprendre, de décider et de mettre en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre expérience ne prétend pas supprimer toute difficulté. Elle permet en revanche d&apos;éviter un grand
                  nombre d&apos;erreurs évitables :
                </p>
                <ul className={bulletListClass}>
                  <li>lancer trop tôt</li>
                  <li>cadrer trop vaguement</li>
                  <li>consulter trop vite</li>
                  <li>piloter trop faiblement</li>
                  <li>traiter au mauvais niveau un sujet qui mérite une lecture plus juste</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre expérience s&apos;est construite au contact des réalités opérationnelles, des projets à structurer,
                  des exécutions à tenir et des environnements où les sujets importants demandent plus de clarté que de
                  bruit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour comprendre notre positionnement global, vous pouvez aussi lire{" "}
                  <Link href="/a-propos/qui-nous-sommes/" className={inlineSeoLinkClass}>
                    Qui nous sommes
                  </Link>{" "}
                  et{" "}
                  <Link href="/a-propos/notre-approche/" className={inlineSeoLinkClass}>
                    Notre approche
                  </Link>
                  . Pour des exemples concrets, consultez{" "}
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    nos cas clients
                  </Link>
                  , consulter{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    notre méthode
                  </Link>{" "}
                  et nous écrire via{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    la page contact
                  </Link>
                  .
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet demande du discernement, de la structuration et une vraie continuité entre l&apos;analyse
                  et la mise en œuvre, alors notre expérience peut être utile.
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="experience-cta-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="experience-cta-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin d&apos;un regard expérimenté pour structurer la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises qui ont besoin de clarifier un sujet, hiérarchiser les priorités et
                  sécuriser l&apos;exécution dans un cadre lisible.
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
