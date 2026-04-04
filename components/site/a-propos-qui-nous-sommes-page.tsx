import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const paragraphClass = "ae-text text-[0.98rem] sm:text-[1.04rem] leading-relaxed"
const profileListClass = "list-disc pl-5 space-y-2 marker:text-[#07bc7d] ae-text text-[0.95rem] sm:text-[1rem] leading-relaxed"
const founderSubCardClass = "rounded-xl border border-white/10 bg-black/30 p-4 sm:p-5"

export const QuiNousSommesMeta = {
  title: "Qui sommes-nous ? | AEGENS",
  description:
    "AEGENS réunit deux profils complémentaires en audit, cadrage, gestion de projet, pilotage de prestataires, automatisation, IA et data pour faire avancer des sujets complexes.",
}

export function QuiNousSommesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/a-propos" },
              { label: "Qui sommes-nous ?" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <p className="ae-kicker text-xs sm:text-sm uppercase tracking-[0.18em] text-white/70">Qui sommes-nous ?</p>
              <h1 className="ae-hero-title text-[clamp(1.9rem,4.1vw,3.7rem)] leading-[1.03] font-extrabold text-balance">
                Deux profils complémentaires pour cadrer, piloter et faire aboutir les sujets complexes
              </h1>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                AEGENS réunit une double lecture, système et data, pour faire avancer les sujets qui se situent à la
                croisée du besoin, du projet et de la mise en œuvre.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/methode/">Découvrir notre méthode</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="profils-title">
            <article className="mx-auto max-w-[1040px] space-y-8 sm:space-y-9">
              <h2 id="profils-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Les cofondateurs
              </h2>

              <div className="grid gap-5">
                <article className="h-full rounded-2xl border border-white/12 bg-black/28 p-4 sm:p-5 md:p-6">
                  <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:items-start">
                    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 aspect-square">
                      <Image
                        src="/images/adrien-retourne-2026.png"
                        alt="Portrait d'Adrien Retourne, cofondateur d'AEGENS"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 640px) 100vw, 180px"
                        priority
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="ae-heading text-xl sm:text-2xl font-semibold leading-tight">Adrien Retourne, cofondateur</h3>
                      <p className={paragraphClass}>
                        Ancien DSI en milieu industriel et ingénieur IT, Adrien apporte une vision structurée des
                        systèmes, des flux et de l’exécution sur des environnements qui touchent la production, la
                        supply chain, la qualité, la finance et le commerce.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3">
                    <div className={founderSubCardClass}>
                      <h4 className="ae-heading text-base sm:text-lg font-semibold mb-2.5">Expertises clés</h4>
                      <ul className={profileListClass}>
                        <li>Audit du fonctionnement réel et lecture des flux opérationnels</li>
                        <li>Cadrage de projets transverses et construction de cahiers des charges solides</li>
                        <li>Pilotage de prestataires et sécurisation de la mise en œuvre</li>
                        <li>Architecture SI, automatisation, IA/LLM, sécurité et gouvernance des données</li>
                      </ul>
                    </div>
                    <div className={founderSubCardClass}>
                      <h4 className="ae-heading text-base sm:text-lg font-semibold mb-2.5">Ce qu’il apporte</h4>
                      <p className="ae-text-soft text-[0.95rem] sm:text-[1rem] leading-relaxed">
                        Adrien apporte de la robustesse. Il voit vite ce qui bloque, ce qui manque, ce qui doit être
                        arbitré et ce qu’il faudra tenir pour que le projet fonctionne réellement, pas seulement sur le
                        papier.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="h-full rounded-2xl border border-white/12 bg-black/28 p-4 sm:p-5 md:p-6">
                  <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:items-start">
                    <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 aspect-square">
                      <Image
                        src="/images/simon-leclair-2026.png"
                        alt="Portrait de Simon Leclair, cofondateur d'AEGENS"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 640px) 100vw, 180px"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="ae-heading text-xl sm:text-2xl font-semibold leading-tight">Simon Leclair, cofondateur</h3>
                      <p className={paragraphClass}>
                        Ingénieur IT, avec une expérience en gestion, analyse et fiabilisation de données à la MAIF,
                        ainsi qu’un fort parcours en e-commerce et acquisition digitale, Simon apporte une vision
                        orientée performance, donnée et résultat.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3">
                    <div className={founderSubCardClass}>
                      <h4 className="ae-heading text-base sm:text-lg font-semibold mb-2.5">Expertises clés</h4>
                      <ul className={profileListClass}>
                        <li>Audit data/performance et pilotage par les indicateurs</li>
                        <li>Cadrage de besoins orientés performance, parcours et automatisations</li>
                        <li>IA métier et systèmes RAG, SEO/SEA, tracking et conversion</li>
                        <li>Gestion de projet et coordination de prestataires</li>
                      </ul>
                    </div>
                    <div className={founderSubCardClass}>
                      <h4 className="ae-heading text-base sm:text-lg font-semibold mb-2.5">Ce qu’il apporte</h4>
                      <p className="ae-text-soft text-[0.95rem] sm:text-[1rem] leading-relaxed">
                        Simon apporte de la lisibilité et du résultat. Il sait faire le lien entre la donnée, les
                        usages, les décisions et l’impact business réel.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="aegens-title">
            <article className="mx-auto max-w-[980px] space-y-4 border border-white/10 rounded-2xl bg-black/26 p-5 sm:p-6 md:p-7">
              <h2 id="aegens-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                AEGENS, concrètement
              </h2>
              <p className={paragraphClass}>
                AEGENS est né de cette complémentarité. D’un côté, une vision système, intégration, robustesse et
                exécution. De l’autre, une vision data, performance, usage et résultat.
              </p>
              <p className={paragraphClass}>
                Ensemble, cela permet de traiter les sujets tels qu’ils existent vraiment dans les entreprises :
                rarement purement techniques, rarement purement business, presque toujours à la croisée des outils, des
                flux, de la donnée, du besoin, du projet et de la mise en œuvre.
              </p>
              <p className={paragraphClass}>
                C’est exactement là que nous sommes utiles. Quand un besoin reste flou. Quand un projet est mal cadré.
                Quand un cahier des charges est trop faible. Quand des prestataires sont difficiles à comparer ou à
                piloter. Quand une automatisation est envisagée sans cadre suffisant. Quand l’IA attire, mais que
                personne n’a encore posé sérieusement la question de son usage réel, de sa sécurité, de sa donnée ou
                de son intégration. Quand un sujet avance, mais sans vraie tenue.
              </p>
              <p className={paragraphClass}>
                Nous apportons ce qui manque souvent à ce moment-là : un audit sérieux du réel, un cadrage propre du
                besoin, une formalisation exploitable, une gestion de projet claire, un pilotage de prestataires
                solide, une lecture qui relie système, data et métier, et une capacité à faire passer un sujet du flou
                à l’exécution.
              </p>
            </article>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="pourquoi-title">
            <article className="mx-auto max-w-[980px] space-y-4">
              <h2 id="pourquoi-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                Pourquoi travailler avec nous
              </h2>
              <p className={paragraphClass}>
                Parce que nous savons tenir ensemble ce que beaucoup séparent. Comprendre le fonctionnement réel.
                Clarifier le besoin. Cadrer le projet. Formaliser les attendus. Gérer les bons interlocuteurs. Piloter
                les prestataires. Structurer l’exécution. Garder le cap sur le résultat.
              </p>
              <p className={paragraphClass}>
                Nos clients viennent chercher cela : des interlocuteurs qui comprennent vite, qui posent les bonnes
                questions, qui remettent de l’ordre dans un sujet flou, qui construisent un cadre solide et qui savent
                faire avancer sans dégrader le réel. Ils ne viennent pas chercher du discours. Ils viennent chercher de
                la clarté, de la structure et de l’avancement.
              </p>
              <p className={paragraphClass}>
                Cette logique se retrouve dans{" "}
                <Link href="/a-propos/notre-approche/" className={inlineSeoLinkClass}>
                  notre approche
                </Link>
                ,{" "}
                <Link href="/a-propos/notre-experience/" className={inlineSeoLinkClass}>
                  notre expérience
                </Link>{" "}
                et dans les pages dédiées à nos{" "}
                <Link href="/offres/" className={inlineSeoLinkClass}>
                  offres
                </Link>
                , à{" "}
                <Link href="/methode/" className={inlineSeoLinkClass}>
                  la méthode
                </Link>{" "}
                et aux{" "}
                <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                  cas clients
                </Link>
                .
              </p>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="phrase-title">
            <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
              <div className="space-y-4">
                <h2 id="phrase-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  En une phrase
                </h2>
                <p className="ae-text text-lg sm:text-xl leading-relaxed">
                  AEGENS, c’est deux profils complémentaires pour auditer, cadrer, piloter et faire aboutir des sujets
                  complexes avec exigence, méthode et sens du résultat.
                </p>
              </div>
              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/">Voir nos offres</Link>
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
