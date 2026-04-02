import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const FaqDiagnosticOperationnelMeta = {
  title: "Quand faire un diagnostic opérationnel ? | FAQ AEGENS",
  description:
    "Quand faire un diagnostic opérationnel, dans quels cas il est utile, ce qu’il permet réellement et comment savoir si le sujet relève d’un diagnostic ou d’un cadrage.",
}

export function FaqDiagnosticOperationnelPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "FAQ", href: "/faq/" },
              { label: "Quand faire un diagnostic opérationnel ?" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Quand faire un diagnostic opérationnel ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un diagnostic opérationnel devient utile quand une entreprise sait qu’un sujet existe, mais ne le lit
                pas encore assez clairement pour décider correctement de la suite.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                On ne fait pas un diagnostic parce qu’il faut analyser. On le fait quand il manque une lecture fiable
                du fonctionnement réel, une distinction claire entre symptômes et causes probables, une hiérarchie
                entre irritants et points de blocage structurants, ou une base solide pour cadrer et arbitrer.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La vraie question n’est pas de savoir s’il y a des problèmes. La vraie question est de savoir si vous
                êtes encore au stade où il faut comprendre le sujet, ou déjà au stade où il faut le structurer en
                projet.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">
                    Voir notre offre diagnostic
                  </Link>
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
                  Un diagnostic opérationnel est généralement utile dans quatre cas.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  1. Quand le problème est réel, mais encore mal qualifié
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous observez :</p>
                <ul className={bulletListClass}>
                  <li>des pertes de temps</li>
                  <li>des reprises</li>
                  <li>des validations peu lisibles</li>
                  <li>des écarts entre services</li>
                  <li>un manque de visibilité</li>
                  <li>des suivis parallèles</li>
                  <li>des méthodes divergentes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Mais vous ne savez pas encore clairement où se situe le cœur du problème.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Quand plusieurs symptômes se mélangent</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tout le monde voit qu’il y a un sujet, mais les lectures divergent : outil, méthode, coordination,
                  organisation. Le diagnostic sert alors à remettre à plat le réel avant de choisir une direction.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Quand vous risquez de lancer une solution trop tôt</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Si vous sentez une pression à :</p>
                <ul className={bulletListClass}>
                  <li>consulter un prestataire</li>
                  <li>choisir un outil</li>
                  <li>lancer un projet</li>
                  <li>réorganiser</li>
                  <li>écrire un cahier des charges</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">alors que le besoin reste mal formulé, le diagnostic est souvent l’étape préalable la plus sûre.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Quand l’organisation compense trop</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le fonctionnement tient encore, mais au prix de nombreuses compensations :</p>
                <ul className={bulletListClass}>
                  <li>relances</li>
                  <li>ressaisies</li>
                  <li>fichiers parallèles</li>
                  <li>validations informelles</li>
                  <li>dépendance à certaines personnes</li>
                  <li>reconstitution manuelle de l’avancement réel</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="not-title">
                <h2 id="not-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’un diagnostic opérationnel n’est pas
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un diagnostic opérationnel n’est pas :</p>
                <ul className={bulletListClass}>
                  <li>un audit décoratif</li>
                  <li>une simple écoute des irritants</li>
                  <li>une liste de problèmes</li>
                  <li>un prétexte pour justifier une solution déjà choisie</li>
                  <li>un substitut à la décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un diagnostic utile sert à produire :</p>
                <ul className={bulletListClass}>
                  <li>une lecture plus claire du fonctionnement réel</li>
                  <li>une qualification du bon niveau de problème</li>
                  <li>une orientation crédible sur la suite</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="signals-title">
                <h2 id="signals-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signes qu’il est temps de faire un diagnostic
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le sujet revient sans arrêt, mais reste difficile à nommer</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">On décrit surtout des effets :</p>
                <ul className={bulletListClass}>
                  <li>trop de lenteurs</li>
                  <li>trop de mails</li>
                  <li>trop de doubles saisies</li>
                  <li>manque de fluidité</li>
                  <li>manque de visibilité</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les équipes n’ont pas la même lecture</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Chaque service voit une partie du problème, mais pas l’ensemble.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les solutions sont déjà évoquées, alors que le besoin reste flou</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quand la discussion parle déjà d’outil, de prestataire, de déploiement ou de réorganisation, alors que le besoin n’est pas objectivé, le risque d’aller trop vite est élevé.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le fonctionnement tient surtout grâce aux personnes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Si quelques personnes savent compenser en permanence les écarts, c’est souvent qu’un diagnostic devient nécessaire.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Vous devez décider, mais la base de décision est encore faible</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est souvent le meilleur repère : un diagnostic est utile quand le choix serait trop fragile sans lecture plus solide.</p>
              </section>

              <section className={sectionClass} aria-labelledby="diagnostic-vs-cadrage-title">
                <h2 id="diagnostic-vs-cadrage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Dans quels cas le diagnostic est prioritaire sur le cadrage
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le diagnostic et le cadrage sont liés, mais ne répondent pas au même moment.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le diagnostic est prioritaire quand :</p>
                <ul className={bulletListClass}>
                  <li>le problème réel n’est pas encore assez qualifié</li>
                  <li>les causes restent incertaines</li>
                  <li>les symptômes se mélangent</li>
                  <li>plusieurs lectures coexistent</li>
                  <li>le niveau du sujet n’est pas encore clair</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage devient prioritaire quand :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est mieux identifié</li>
                  <li>l’objectif commence à être clair</li>
                  <li>le projet existe comme objet de travail</li>
                  <li>mais il doit encore être structuré pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous ne savez pas encore exactement ce qu’il faut traiter, vous êtes probablement au stade du
                  diagnostic. Si vous savez quoi traiter mais pas encore comment l’organiser, vous êtes plutôt au stade
                  du cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À lire ensuite :{" "}
                  <Link href="/faq/combien-de-temps-prend-un-cadrage-de-projet/" className={inlineSeoLinkClass}>
                    combien de temps prend un cadrage de projet
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="what-it-delivers-title">
                <h2 id="what-it-delivers-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’un diagnostic permet concrètement
                </h2>
                <ol className="list-decimal pl-6 space-y-3 ae-text text-base sm:text-lg leading-relaxed marker:text-[#07bc7d]">
                  <li>
                    <strong>Objectiver :</strong> localiser où les reprises apparaissent, où les validations ralentissent,
                    où les interfaces se fragilisent.
                  </li>
                  <li>
                    <strong>Requalifier :</strong> distinguer symptômes, causes probables, irritants locaux et sujets
                    structurants.
                  </li>
                  <li>
                    <strong>Hiérarchiser :</strong> tout ne doit pas être traité avec le même effort.
                  </li>
                  <li>
                    <strong>Clarifier le bon niveau de réponse :</strong> ajustement, harmonisation, cadrage, cahier des
                    charges, projet plus large ou pilotage.
                  </li>
                  <li>
                    <strong>Préparer la suite :</strong> un bon diagnostic ne s’arrête pas au constat, il prépare la
                    décision.
                  </li>
                </ol>
              </section>

              <section className={sectionClass} aria-labelledby="avoid-waiting-title">
                <h2 id="avoid-waiting-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les situations typiques où il faut éviter d’attendre
                </h2>
                <ul className={bulletListClass}>
                  <li>les mêmes pertes de temps reviennent depuis longtemps</li>
                  <li>les interfaces entre services produisent des tensions récurrentes</li>
                  <li>les suivis parallèles se multiplient</li>
                  <li>un projet important est envisagé sur une base encore trop floue</li>
                  <li>l’entreprise ne sait plus très bien où commence le vrai problème</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="not-first-step-title">
                <h2 id="not-first-step-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand le diagnostic n’est pas forcément la première étape
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le diagnostic n’est pas forcément prioritaire si :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est déjà clairement formulé</li>
                  <li>le périmètre est posé</li>
                  <li>les parties prenantes lisent globalement le sujet de la même manière</li>
                  <li>les contraintes sont visibles</li>
                  <li>la difficulté porte surtout sur la structuration ou l’exécution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Dans ce cas, un cadrage ou un pilotage peut être plus pertinent.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Vous pouvez aussi consulter :{" "}
                  <Link href="/faq/peut-on-lancer-un-projet-sans-cahier-des-charges/" className={inlineSeoLinkClass}>
                    peut-on lancer un projet sans cahier des charges
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="check-title">
                <h2 id="check-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous êtes concerné
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le diagnostic est souvent le bon point d’entrée si plusieurs réponses à ces questions sont oui :</p>
                <ul className={bulletListClass}>
                  <li>le problème est réel, mais encore difficile à nommer précisément</li>
                  <li>plusieurs symptômes se cumulent</li>
                  <li>les équipes n’ont pas la même lecture du sujet</li>
                  <li>les causes restent incertaines</li>
                  <li>l’organisation compense beaucoup</li>
                  <li>une solution ou un projet semblent tentants, mais la base reste fragile</li>
                  <li>il manque une lecture plus propre avant de décider de la suite</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On fait un diagnostic opérationnel quand il manque une lecture suffisamment claire du fonctionnement
                  réel pour décider correctement de la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est généralement le bon choix quand :</p>
                <ul className={bulletListClass}>
                  <li>le problème est encore mal qualifié</li>
                  <li>plusieurs symptômes se mélangent</li>
                  <li>les lectures divergent</li>
                  <li>l’organisation compense trop</li>
                  <li>le risque est fort de lancer une solution trop tôt</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En une phrase : si vous ne savez pas encore exactement ce qu’il faut traiter, ni à quel niveau, il est
                  souvent temps de faire un diagnostic opérationnel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                    offre diagnostic
                  </Link>
                  ,{" "}
                  <Link href="/ressources/quand-faire-appel-a-un-regard-exterieur/" className={inlineSeoLinkClass}>
                    quand faire appel à un regard extérieur
                  </Link>
                  ,{" "}
                  <Link href="/modeles-checklists/trame-diagnostic-operationnel/" className={inlineSeoLinkClass}>
                    trame de diagnostic opérationnel
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
                  Besoin de clarifier votre sujet avant d’aller plus loin ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à objectiver le réel et à choisir la bonne suite : diagnostic, cadrage ou pilotage.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={primaryButtonClass}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={darkButtonClass}>
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
