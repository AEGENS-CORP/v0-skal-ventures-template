import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

export const QuiNousSommesMeta = {
  title: "Qui nous sommes | AEGENS",
  description:
    "AEGENS accompagne l’industrie, la logistique et le retail dans le diagnostic, le cadrage et le pilotage de projets, avec une approche claire, structurée et orientée mise en œuvre.",
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
              { label: "Qui nous sommes" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Qui nous sommes
              </h1>

              <p className="ae-text text-lg sm:text-xl leading-relaxed max-w-5xl">
                AEGENS accompagne les entreprises industrielles, logistiques et retail dans l'analyse de leur
                fonctionnement opérationnel, le cadrage de leurs projets et le pilotage de leur mise en œuvre.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Nous intervenons sur des sujets qui demandent à la fois lecture du terrain, structuration des
                priorités et capacité à faire avancer l'exécution. Notre rôle n'est pas de produire un discours de plus
                autour des projets. Notre rôle est d'aider à poser un constat fiable, à clarifier ce qui doit être
                décidé et à donner une suite plus solide à des sujets qui comptent.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cette manière de nous présenter n'est pas seulement une préférence de style. Elle correspond aussi à ce
                que Google valorise de plus en plus : un contenu utile, fiable, people-first, ancré dans une
                expérience réelle et dans une expertise clairement identifiable.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Les recommandations officielles insistent aussi sur la nécessité de montrer qui parle, sur quelle base
                et pourquoi le contenu mérite d'être pris au sérieux.
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

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="positionnement-title">
            <article className="mx-auto max-w-[980px] space-y-8">
              <section className="space-y-4 border-b border-white/10 pb-8">
                <h2 id="positionnement-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Notre positionnement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous avons construit AEGENS autour d'une idée simple : beaucoup de sujets importants ne manquent ni
                  d'intention, ni d'énergie, ni d'enjeu. Ils manquent surtout de clarté, de méthode et de continuité
                  entre la décision et la mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C'est précisément là que nous intervenons.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d'une solution à placer. Nous ne partons pas non plus d'un discours théorique sur
                  la transformation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous partons :</p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>d'une situation à comprendre</li>
                  <li>d'un besoin à clarifier</li>
                  <li>de priorités à hiérarchiser</li>
                  <li>d'un projet à structurer ou à faire avancer</li>
                </ul>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="trois-temps-title">
                <h2 id="trois-temps-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Une approche en trois temps
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre approche s'articule autour de trois temps :
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Diagnostic</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Comprendre le fonctionnement réel, les points de blocage, les pertes de temps, les sujets encore
                      flous et les priorités utiles.
                    </p>
                    <p className="mt-3">
                      <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                        Découvrir l'offre diagnostic
                      </Link>
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Cadrage</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Transformer un sujet diffus en base de travail plus solide : objectifs, périmètre, contraintes,
                      priorités, logique de suite, cahier des charges si nécessaire.
                    </p>
                    <p className="mt-3">
                      <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                        Découvrir l'offre cadrage
                      </Link>
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Pilotage</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Faire avancer le projet dans un cadre lisible, coordonné et suivi jusqu'à la mise en œuvre.
                    </p>
                    <p className="mt-3">
                      <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                        Découvrir l'offre pilotage
                      </Link>
                    </p>
                  </article>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne présentons pas ces trois étapes comme une mécanique rigide. Tous les sujets ne demandent pas
                  le même niveau d'intervention. L'important est d'intervenir au bon niveau, au bon moment, avec un
                  travail utile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certains sujets nécessitent uniquement un diagnostic. D'autres demandent un travail de structuration
                  plus poussé. D'autres encore sont déjà engagés et nécessitent surtout du pilotage.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="valeur-title">
                <h2 id="valeur-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous cherchons à apporter
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce positionnement répond à une réalité simple : les décideurs B2B cherchent des interlocuteurs
                  capables de parler clairement d'un problème, d'une méthode et d'une preuve, plutôt que d'aligner des
                  promesses vagues.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les bonnes pratiques web B2B convergent sur ce point : clarté du message, crédibilité, cas concrets,
                  preuve et structure orientée conversion.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Un regard extérieur</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Rendre lisible ce qui relève d'un point de blocage, d'une priorisation fragile, d'un besoin mal
                      formulé ou d'une exécution sans continuité.
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Une méthode</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Poser un constat fiable, hiérarchiser les sujets, formuler le besoin de manière exploitable et
                      donner une logique à la suite.
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Une culture de mise en œuvre</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Maintenir la continuité entre ce qui a été compris, ce qui a été décidé et ce qui est réellement
                      mis en œuvre.
                    </p>
                  </article>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre manière de travailler repose sur un équilibre entre compréhension, structuration et mise en
                  œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons pour rendre la situation plus lisible, formuler le besoin de manière exploitable et
                  donner une logique claire à la suite.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les sujets sur lesquels nous intervenons
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous intervenons notamment sur :</p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed">
                  <li>les méthodes de travail</li>
                  <li>l'organisation opérationnelle</li>
                  <li>les points de blocage</li>
                  <li>les pertes de temps</li>
                  <li>les besoins à formaliser</li>
                  <li>les projets à structurer</li>
                  <li>les mises en œuvre à sécuriser</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon les cas, cela peut concerner :</p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>un besoin encore trop flou pour être lancé correctement</li>
                  <li>une situation qui mérite un diagnostic sérieux</li>
                  <li>un cadrage à poser avant consultation</li>
                  <li>un cahier des charges à formaliser</li>
                  <li>une mise en œuvre à suivre dans de bonnes conditions</li>
                  <li>un projet qui a besoin d'un pilotage plus lisible</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons dans des environnements où l'exécution compte autant que la décision : industrie,
                  logistique, retail. Nous le faisons avec une logique volontairement sobre : comprendre, structurer,
                  faire avancer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le détail de cette logique est présenté dans{" "}
                  <Link href="/a-propos/notre-approche/" className={inlineSeoLinkClass}>
                    notre approche
                  </Link>{" "}
                  et dans{" "}
                  <Link href="/a-propos/notre-experience/" className={inlineSeoLinkClass}>
                    notre expérience
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="eviter-title">
                <h2 id="eviter-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous cherchons à éviter et à produire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce que nous cherchons à éviter est tout aussi important que ce que nous cherchons à produire.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Éviter</h3>
                    <ul className="mt-3 list-disc pl-6 space-y-2 ae-text text-sm sm:text-base leading-relaxed">
                      <li>les décisions prises trop tôt sur une base encore floue</li>
                      <li>les consultations mal préparées</li>
                      <li>les projets qui avancent sans logique commune</li>
                      <li>les pertes de temps qui s'installent sans être objectivées</li>
                      <li>les écarts croissants entre l'intention de départ et la réalité de mise en œuvre</li>
                    </ul>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Produire</h3>
                    <ul className="mt-3 list-disc pl-6 space-y-2 ae-text text-sm sm:text-base leading-relaxed">
                      <li>une lecture plus claire</li>
                      <li>un besoin mieux formulé</li>
                      <li>des priorités plus nettes</li>
                      <li>une base de travail plus solide</li>
                      <li>une exécution mieux tenue</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section className="space-y-4" aria-labelledby="confiance-title">
                <h2 id="confiance-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Confiance, cohérence et utilité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous donnons de l'importance à la manière de présenter notre travail parce que la confiance ne se
                  décrète pas. Elle se construit par des signaux visibles : clarté du positionnement, cohérence de
                  l'offre, méthode lisible, profils identifiables, cas clients, exemples de livrables et capacité à
                  parler concrètement des sujets traités.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C'est pourquoi notre site et notre manière de nous présenter reposent sur quelques repères simples :
                </p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>une offre claire</li>
                  <li>une méthode lisible</li>
                  <li>des cas d'usage compréhensibles</li>
                  <li>des contenus utiles</li>
                  <li>une continuité entre ce que nous disons et ce que nous faisons</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne cherchons pas à occuper le terrain par des mots plus grands que le réel. Nous cherchons à
                  être utiles là où une entreprise a besoin de comprendre, de structurer et de mettre en œuvre dans de
                  bonnes conditions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  AEGENS a été construit pour cela : apporter un regard extérieur, clarifier les priorités, sécuriser
                  l'exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour apporter un regard extérieur. Pour clarifier les priorités. Pour sécuriser l'exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet demande d'être objectivé, structuré ou piloté dans un cadre plus clair, nous pouvons
                  en parler. Vous pouvez aussi consulter{" "}
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    nos cas clients
                  </Link>{" "}
                  et{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    notre méthode
                  </Link>
                  {" "}ou nous écrire via{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    la page contact
                  </Link>
                  .
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="qui-cta-final-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="qui-cta-final-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Un sujet à clarifier, structurer ou piloter ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises qui ont besoin d'un cadre clair pour décider et faire avancer
                  l'exécution.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">Voir les offres</Link>
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
