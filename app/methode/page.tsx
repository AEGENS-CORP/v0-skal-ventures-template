import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { createPageMetadata } from "@/lib/metadata"

const paragraphClass = "ae-text text-base sm:text-lg leading-relaxed"
const bulletClass = "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

export const metadata = createPageMetadata({
  title: "Méthode | Comment nous intervenons | AEGENS",
  path: "/methode",
  description:
    "Découvrez la méthode AEGENS : audit du réel, cadrage du besoin, structuration des priorités et pilotage de la mise en œuvre pour faire avancer les sujets complexes.",
})

export default function MethodePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Méthode" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Notre méthode
              </h1>
              <p className="ae-text text-lg sm:text-xl leading-relaxed max-w-5xl">
                Un sujet complexe ne se résout pas avec plus de discours. Il se résout avec une méthode claire.
              </p>
              <p className={paragraphClass}>
                Chez AEGENS, nous intervenons sur des sujets qui deviennent vite sensibles :
              </p>
              <ul className={bulletClass}>
                <li>fonctionnement qui se dégrade,</li>
                <li>besoin encore flou,</li>
                <li>projet mal cadré,</li>
                <li>consultation difficile à préparer,</li>
                <li>prestataires à piloter,</li>
                <li>mise en œuvre qui avance sans vraie tenue,</li>
                <li>automatisation ou IA envisagée sans cadre suffisant.</li>
              </ul>
              <p className={paragraphClass}>Dans ce type de contexte, la méthode change tout.</p>
              <p className={paragraphClass}>Une mauvaise méthode produit :</p>
              <ul className={bulletClass}>
                <li>du flou,</li>
                <li>des réunions,</li>
                <li>des documents,</li>
                <li>des décisions repoussées,</li>
                <li>et une exécution qui compense ce qui n’a pas été clarifié.</li>
              </ul>
              <p className={paragraphClass}>Une bonne méthode produit l’inverse :</p>
              <ul className={bulletClass}>
                <li>une lecture plus nette,</li>
                <li>des priorités plus claires,</li>
                <li>un cadre de décision plus solide,</li>
                <li>et une mise en œuvre plus propre.</li>
              </ul>
              <p className={paragraphClass}>C’est exactement le rôle de notre méthode.</p>

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

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="produire-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="produire-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ce que notre méthode cherche à produire
              </h2>
              <p className={paragraphClass}>
                Notre méthode n’a pas été construite pour “faire sérieux”. Elle a été construite pour obtenir un
                résultat simple : transformer un sujet flou, dispersé ou instable en trajectoire claire et tenable.
              </p>
              <p className={paragraphClass}>Concrètement, elle doit permettre de :</p>
              <ul className={bulletClass}>
                <li>comprendre ce qui se passe réellement ;</li>
                <li>distinguer le symptôme du problème de fond ;</li>
                <li>clarifier le besoin ;</li>
                <li>poser le bon périmètre ;</li>
                <li>structurer la suite ;</li>
                <li>et faire en sorte que l’exécution tienne.</li>
              </ul>
              <p className={paragraphClass}>
                Autrement dit, notre méthode sert à faire passer un sujet de : l’intuition vers la clarté, vers le
                cadrage, puis vers l’action.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="logique-title">
            <article className="mx-auto max-w-[1040px] space-y-6">
              <h2 id="logique-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Notre logique d’intervention
              </h2>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                <article className="rounded-2xl border border-white/12 bg-black/28 p-4 sm:p-5 space-y-3">
                  <h3 className="ae-heading text-xl font-semibold">1. Partir du réel</h3>
                  <p className="ae-text text-sm sm:text-base leading-relaxed">
                    Nous ne partons ni d’une solution à placer, ni d’un outil à vendre. Nous partons des pratiques
                    effectives, des flux, des validations, des écarts terrain et des contraintes réelles.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/12 bg-black/28 p-4 sm:p-5 space-y-3">
                  <h3 className="ae-heading text-xl font-semibold">2. Clarifier avant d’accélérer</h3>
                  <p className="ae-text text-sm sm:text-base leading-relaxed">
                    Avancer vite sur un sujet mal clarifié ne fait pas gagner du temps. Nous clarifions d’abord le
                    vrai sujet, le bon niveau de réponse et les priorités immédiates.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/12 bg-black/28 p-4 sm:p-5 space-y-3">
                  <h3 className="ae-heading text-xl font-semibold">3. Cadrer ce qui doit l’être</h3>
                  <p className="ae-text text-sm sm:text-base leading-relaxed">
                    Nous cadrons le besoin, l’objectif, le périmètre, les contraintes et les attendus, pour obtenir
                    une base exploitable. Selon les cas : note de cadrage, expression de besoin ou cahier des charges.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/12 bg-black/28 p-4 sm:p-5 space-y-3">
                  <h3 className="ae-heading text-xl font-semibold">4. Structurer une suite réaliste</h3>
                  <p className="ae-text text-sm sm:text-base leading-relaxed">
                    Nous construisons une suite cohérente avec les ressources, lisible pour les équipes et tenable dans
                    les opérations, sans réponse trop légère ni transformation trop lourde.
                  </p>
                </article>

                <article className="rounded-2xl border border-white/12 bg-black/28 p-4 sm:p-5 space-y-3">
                  <h3 className="ae-heading text-xl font-semibold">5. Faire tenir l’exécution</h3>
                  <p className="ae-text text-sm sm:text-base leading-relaxed">
                    Nous gardons une exigence constante : est-ce que ce que nous construisons tiendra réellement dans
                    l’exécution, la coordination et le pilotage dans le temps ?
                  </p>
                </article>
              </div>

              <p className={paragraphClass}>
                Cette logique se décline concrètement dans nos offres de{" "}
                <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                  diagnostic
                </Link>
                , de{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  cadrage
                </Link>{" "}
                et de{" "}
                <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                  pilotage de mise en œuvre
                </Link>
                .
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="principes-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="principes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Les 4 principes qui structurent notre méthode
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                  <h3 className="ae-heading text-xl font-semibold">Exigence de clarté</h3>
                  <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                    Un sujet mal nommé est presque toujours un sujet mal traité.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                  <h3 className="ae-heading text-xl font-semibold">Exigence de réalité</h3>
                  <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                    Nous travaillons sur ce qui se passe vraiment, pas sur ce qui devrait idéalement se passer.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                  <h3 className="ae-heading text-xl font-semibold">Exigence de structure</h3>
                  <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                    Nous remettons de l’ordre dans les sujets trop flous, trop chargés ou trop dispersés.
                  </p>
                </article>
                <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                  <h3 className="ae-heading text-xl font-semibold">Exigence de tenue</h3>
                  <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                    Nous ne séparons jamais le cadrage d’une question essentielle : comment cela va tenir dans le réel ?
                  </p>
                </article>
              </div>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="concret-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="concret-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Comment nous travaillons concrètement
              </h2>
              <p className={paragraphClass}>Une phase d’écoute et de lecture : contexte, symptômes, acteurs, contraintes.</p>
              <p className={paragraphClass}>
                Une phase d’analyse : flux, interfaces, outils, données, méthodes, pratiques réelles et points de friction.
              </p>
              <p className={paragraphClass}>
                Une phase de clarification : reformulation du besoin, priorités, périmètre et arbitrages.
              </p>
              <p className={paragraphClass}>
                Une phase de structuration : cadrage, cahier des charges, feuille de route, base de décision.
              </p>
              <p className={paragraphClass}>
                Une phase de tenue : lancement, coordination, pilotage des prestataires, arbitrages et exécution.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="efficace-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="efficace-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Ce qui rend cette méthode efficace
              </h2>
              <ul className={bulletClass}>
                <li>Elle évite les faux départs sur une base encore floue.</li>
                <li>Elle évite les consultations fragiles et les comparaisons peu fiables.</li>
                <li>Elle évite les projets “présentables” mais peu tenables.</li>
                <li>Elle réduit la dépendance au flou et améliore la lisibilité du pilotage.</li>
                <li>Elle améliore la qualité des décisions et des arbitrages.</li>
              </ul>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="not-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="not-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Ce que notre méthode n’est pas
              </h2>
              <ul className={bulletClass}>
                <li>une mécanique lourde,</li>
                <li>une succession de documents,</li>
                <li>une façon de ralentir artificiellement,</li>
                <li>une couche de jargon,</li>
                <li>ou un habillage autour d’une solution déjà choisie.</li>
              </ul>
              <p className={paragraphClass}>
                Notre méthode n’est pas figée. Elle s’adapte au niveau réel du sujet, avec une discipline constante :
                comprendre, clarifier, cadrer, structurer, faire tenir.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="valeur-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="valeur-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Quand notre méthode crée le plus de valeur
              </h2>
              <ul className={bulletClass}>
                <li>le sujet est réel, mais encore mal formulé ;</li>
                <li>plusieurs symptômes se mélangent ;</li>
                <li>plusieurs acteurs ont des lectures différentes ;</li>
                <li>une consultation doit être préparée sérieusement ;</li>
                <li>un cahier des charges doit être construit sur une base propre ;</li>
                <li>un projet transverse doit être cadré ;</li>
                <li>des prestataires doivent être pilotés ;</li>
                <li>la mise en œuvre commence à perdre en lisibilité ;</li>
                <li>ou une automatisation / un sujet IA doit être relié au réel.</li>
              </ul>
              <p className={paragraphClass}>
                Cette capacité s’appuie sur notre complémentarité de profils, présentée sur{" "}
                <Link href="/a-propos/qui-nous-sommes/" className={inlineSeoLinkClass}>
                  qui nous sommes
                </Link>
                .
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="ressenti-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="ressenti-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Ce que vos équipes ressentent avec notre méthode
              </h2>
              <p className={paragraphClass}>D’abord, plus de clarté : le sujet devient plus net.</p>
              <p className={paragraphClass}>Ensuite, plus de solidité : les décisions reposent sur une base plus propre.</p>
              <p className={paragraphClass}>
                Enfin, plus de mouvement utile : le projet avance avec plus de cohérence et moins de compensation.
              </p>
              <p className={paragraphClass}>
                C’est cela que nous cherchons : pas du mouvement apparent, mais de l’avancement réel.
              </p>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="resume-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                En résumé
              </h2>
              <p className={paragraphClass}>
                Notre méthode repose sur une logique simple : comprendre le réel, clarifier le besoin, cadrer
                sérieusement, structurer la suite, puis faire tenir l’exécution.
              </p>
              <p className={paragraphClass}>
                En une phrase : notre méthode consiste à remettre de la clarté, de la structure et de la tenue là où
                un sujet important ne peut plus avancer sérieusement sans cela.
              </p>
              <p className={paragraphClass}>
                Pour aller plus loin, vous pouvez consulter{" "}
                <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                  les cas clients
                </Link>
                ,{" "}
                <Link href="/ressources/" className={inlineSeoLinkClass}>
                  les ressources
                </Link>{" "}
                et{" "}
                <Link href="/modeles-checklists/" className={inlineSeoLinkClass}>
                  les modèles et checklists
                </Link>
                .
              </p>
            </article>

            <div className="mx-auto max-w-[980px] mt-6 rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                  <Link href="/offres/">Voir les offres</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
