import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const RessourcePilotageProjetPmeMeta = {
  title: "Comment piloter un projet industriel en PME | AEGENS",
  description:
    "Méthode claire pour piloter un projet industriel en PME : gouvernance, rythme, arbitrages, coordination, KPI, risques et conditions de mise en œuvre.",
}

export function RessourcePilotageProjetPmePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/ressources" },
              { label: "Comment piloter un projet industriel en PME" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Comment piloter un projet industriel en PME
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Piloter un projet industriel en PME, ce n&apos;est pas seulement suivre un planning ou organiser des
                reunions. C&apos;est faire en sorte qu&apos;un projet garde une trajectoire claire entre l&apos;intention de depart,
                les decisions prises, les actions engagees et la mise en oeuvre reelle.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dit autrement, le pilotage sert a repondre a une question simple : qu&apos;est-ce qui permet a un projet de
                rester lisible, coordonne et utile jusqu&apos;a son execution ?
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Les referentiels les plus solides convergent sur quelques fondamentaux : objectifs clairs, gouvernance,
                roles explicites, suivi des risques, arbitrages et indicateurs de progression. En PME, cette adaptation
                est encore plus importante : ressources plus contraintes, equipes plus exposees a la charge quotidienne,
                et circuits de decision plus courts mais plus sensibles aux urgences.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Si vous etes deja en phase d&apos;execution, vous pouvez aussi consulter{" "}
                <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                  notre offre de pilotage de mise en oeuvre
                </Link>
                .
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans un environnement industriel, le pilotage est decisif car le projet implique souvent en parallele :
              </p>
              <ul className={bulletListClass}>
                <li>organisation</li>
                <li>methodes</li>
                <li>operations</li>
                <li>contraintes terrain</li>
                <li>prestataires</li>
                <li>outils</li>
                <li>qualite</li>
                <li>rythme de production</li>
                <li>coordination entre fonctions</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Sans pilotage, ces dimensions se desalignent. Le projet continue d&apos;exister, mais il perd en lisibilite,
                en rythme et en coherence.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">Voir l&apos;offre pilotage</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="article-title">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="mal-compris-title">
                <h2 id="mal-compris-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi le pilotage est souvent mal compris
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d&apos;entreprises, le pilotage est assimile a la partie administrative du projet :
                </p>
                <ul className={bulletListClass}>
                  <li>mettre a jour un planning</li>
                  <li>organiser des points d&apos;avancement</li>
                  <li>suivre des taches</li>
                  <li>produire des comptes rendus</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces elements sont utiles, mais ils ne definissent pas a eux seuls un bon pilotage. Un bon pilotage
                  sert d&apos;abord a tenir ensemble :
                </p>
                <ul className={bulletListClass}>
                  <li>le besoin initial</li>
                  <li>les objectifs</li>
                  <li>les priorites</li>
                  <li>les contraintes</li>
                  <li>les decisions</li>
                  <li>l&apos;avancement reel</li>
                  <li>les points de vigilance</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet n&apos;est donc pas seulement de suivre. Le sujet est de garder le projet sous controle sans le
                  rigidifier.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="veut-dire-title">
                <h2 id="veut-dire-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que piloter un projet veut reellement dire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Piloter un projet industriel en PME, c&apos;est faire en sorte que les bonnes decisions soient prises au bon
                  moment, que les bons acteurs soient mobilises au bon niveau, et que l&apos;execution reste coherente avec
                  l&apos;objectif poursuivi.
                </p>

                <div className="space-y-4">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">D&apos;abord, une lecture claire de l&apos;avancement</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      L&apos;avancement ne se resume pas a une suite de taches cochees. Il faut pouvoir repondre clairement :
                    </p>
                    <ul className={bulletListClass}>
                      <li>ou en est reellement le projet ?</li>
                      <li>qu&apos;est-ce qui avance ?</li>
                      <li>qu&apos;est-ce qui est en attente ?</li>
                      <li>qu&apos;est-ce qui bloque ?</li>
                      <li>qu&apos;est-ce qui derive ?</li>
                      <li>qu&apos;est-ce qui doit etre arbitre ?</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Ensuite, une gouvernance explicite</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le pilotage suppose de savoir :</p>
                    <ul className={bulletListClass}>
                      <li>qui decide</li>
                      <li>qui prepare</li>
                      <li>qui execute</li>
                      <li>qui valide</li>
                      <li>qui doit etre informe</li>
                      <li>qui porte le rythme du projet</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Enfin, une capacite d&apos;arbitrage</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Un projet ne suit presque jamais sa trajectoire ideale. Il faut arbitrer :</p>
                    <ul className={bulletListClass}>
                      <li>ce qui doit etre traite maintenant</li>
                      <li>ce qui peut attendre</li>
                      <li>ce qui releve d&apos;une adaptation</li>
                      <li>ce qui releve d&apos;un risque plus serieux</li>
                      <li>ce qui doit etre remonte a la direction ou au sponsor</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="piliers-title">
                <h2 id="piliers-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les 7 piliers d&apos;un pilotage de projet industriel en PME
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la pratique, un pilotage solide repose generalement sur sept piliers.
                </p>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">1. Des objectifs clairs.</span> Quel resultat cherche-t-on ?
                    Quel probleme veut-on traiter ? A quoi reconnaitra-t-on que le projet avance dans la bonne direction ?
                  </li>
                  <li>
                    <span className="font-semibold text-white">2. Un perimetre stable ou explicitement revise.</span> Distinguer
                    ce qui releve du perimetre initial, ce qui a ete ajoute, ecarte, ou reste a arbitrer.
                  </li>
                  <li>
                    <span className="font-semibold text-white">3. Une gouvernance simple, mais explicite.</span> Sponsor,
                    pilote, contributeurs, decideurs, points d&apos;avancement et points d&apos;arbitrage.
                  </li>
                  <li>
                    <span className="font-semibold text-white">4. Un rythme de travail tenu.</span> Eviter l&apos;irregularite,
                    les decisions repoussees et les temps morts entre etapes.
                  </li>
                  <li>
                    <span className="font-semibold text-white">5. Des risques suivis.</span> Risques organisationnels,
                    calendaires, techniques, de charge, de disponibilite, de dependance et de qualite.
                  </li>
                  <li>
                    <span className="font-semibold text-white">6. Des indicateurs utiles.</span> Quelques KPI lisibles,
                    directement relies a la decision.
                  </li>
                  <li>
                    <span className="font-semibold text-white">7. Une coordination reelle des acteurs.</span> Clarifier les
                    dependances, fluidifier les echanges utiles et maintenir une lecture commune du projet.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="pme-title">
                <h2 id="pme-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui change en PME
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le pilotage de projet en PME presente plusieurs particularites.
                </p>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Les ressources sont souvent plus limitees.</span> Le temps des
                    equipes est contraint et les projets coexistent avec l&apos;activite courante.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Les acteurs cumulent parfois plusieurs roles.</span> Un meme
                    interlocuteur peut etre decisionnaire, utilisateur et contributeur.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Les arbitrages peuvent etre plus rapides... ou plus fragiles.</span>
                    La vitesse de decision peut aussi produire des revisions frequentes si le cadre est insuffisant.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Le pilotage doit rester leger.</span> Il doit etre sobre,
                    utile, lisible et proportionne.
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon pilotage n&apos;est pas lourd. C&apos;est un pilotage qui apporte juste assez de structure pour permettre
                  au projet d&apos;avancer correctement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="kpi-title">
                <h2 id="kpi-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quels indicateurs suivre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon pilotage ne commence pas par les KPI. Il commence par la question : qu&apos;avons-nous besoin de
                  voir pour decider correctement ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la plupart des projets industriels en PME, on retrouve un noyau simple d&apos;indicateurs utiles.
                </p>

                <div className="space-y-4">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold mb-2">Avancement</h3>
                    <ul className={bulletListClass}>
                      <li>jalons atteints / non atteints</li>
                      <li>actions realisees / en attente</li>
                      <li>points critiques ouverts</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold mb-2">Delai</h3>
                    <ul className={bulletListClass}>
                      <li>respect du calendrier</li>
                      <li>glissements</li>
                      <li>dependances qui retardent les etapes suivantes</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold mb-2">Qualite</h3>
                    <ul className={bulletListClass}>
                      <li>ecarts entre attendu et realise</li>
                      <li>anomalies</li>
                      <li>reprises</li>
                      <li>non-conformites</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold mb-2">Risques</h3>
                    <ul className={bulletListClass}>
                      <li>risques ouverts</li>
                      <li>risques leves</li>
                      <li>actions preventives ou correctives</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold mb-2">Coordination</h3>
                    <ul className={bulletListClass}>
                      <li>decisions en attente</li>
                      <li>arbitrages non rendus</li>
                      <li>sujets bloques entre acteurs</li>
                      <li>engagements non tenus</li>
                    </ul>
                  </article>
                </div>

                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour structurer vos revues de pilotage, vous pouvez utiliser{" "}
                  <Link
                    href="/modeles-checklists/checklist-consultation-prestataires/"
                    className={inlineSeoLinkClass}
                  >
                    la checklist consultation prestataires
                  </Link>{" "}
                  et{" "}
                  <Link
                    href="/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/"
                    className={inlineSeoLinkClass}
                  >
                    la matrice de criteres de choix
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="erreurs-title">
                <h2 id="erreurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus frequentes
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Confondre suivi et pilotage.</span> Suivre des taches ne
                    suffit pas : il faut une lecture, une hierarchisation et une capacite d&apos;arbitrage.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Laisser trop de choses dans l&apos;implicite.</span>
                    Responsabilites, priorites et criteres doivent etre explicites.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Multiplier les reunions sans traiter les decisions.</span>
                    Les points d&apos;avancement doivent faire avancer les arbitrages.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Piloter trop tard.</span> Quand les risques ne sont vus
                    qu&apos;au moment ou ils se materialisent, la marge de manoeuvre disparait.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Vouloir tout suivre.</span> Un pilotage efficace repose
                    sur quelques reperes utiles, pas sur une inflation d&apos;indicateurs.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="qualite-title">
                <h2 id="qualite-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si le pilotage est bon
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un pilotage de qualite se reconnait moins a la sophistication des outils qu&apos;a la capacite du projet a
                  rester lisible.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On peut generalement dire qu&apos;un pilotage tient correctement quand :
                </p>
                <ul className={bulletListClass}>
                  <li>les acteurs savent ou en est le projet</li>
                  <li>les priorites sont claires</li>
                  <li>les decisions attendues sont identifiees</li>
                  <li>les points bloquants remontent au bon moment</li>
                  <li>les risques sont visibles</li>
                  <li>les jalons restent lisibles</li>
                  <li>la mise en oeuvre avance sans perte de coherence majeure</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si chacun a une lecture differente de l&apos;avancement, si les decisions se dispersent ou si le projet
                  progresse par a-coups, c&apos;est souvent qu&apos;un vrai pilotage manque encore.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="ce-que-nous-faisons-title">
                <h2 id="ce-que-nous-faisons-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous faisons dans cette phase
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand nous intervenons en pilotage, nous cherchons d&apos;abord a rendre le projet plus lisible et plus tenu.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Concretement, cela peut consister a :</p>
                <ul className={bulletListClass}>
                  <li>structurer le rythme du projet</li>
                  <li>clarifier la gouvernance</li>
                  <li>organiser les points utiles</li>
                  <li>formaliser les arbitrages</li>
                  <li>suivre les points de vigilance</li>
                  <li>coordonner les acteurs ou les prestataires</li>
                  <li>maintenir un lien clair entre besoin, decisions et mise en oeuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;objectif n&apos;est pas d&apos;ajouter de la gestion pour la gestion. L&apos;objectif est de faire avancer le
                  projet dans un cadre plus solide.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En resume
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Piloter un projet industriel en PME, c&apos;est maintenir la continuite entre :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qui doit etre obtenu</li>
                  <li>ce qui a ete decide</li>
                  <li>ce qui est en train de se faire</li>
                  <li>ce qui se passe reellement dans la mise en oeuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela suppose :</p>
                <ul className={bulletListClass}>
                  <li>des objectifs clairs</li>
                  <li>un perimetre tenu</li>
                  <li>une gouvernance explicite</li>
                  <li>un rythme de travail</li>
                  <li>une gestion des risques</li>
                  <li>des indicateurs utiles</li>
                  <li>une vraie coordination des acteurs</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon pilotage ne rend pas le projet plus lourd. Il le rend plus lisible, plus coherent et plus
                  executable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre projet existe deja mais a besoin d&apos;un rythme plus clair, d&apos;une meilleure coordination ou
                  d&apos;une mise en oeuvre mieux tenue, alors le pilotage devient un vrai sujet. Cas concret :{" "}
                  <Link
                    href="/cas-clients/pilotage-de-mise-en-oeuvre-dun-projet-operationnel/"
                    className={inlineSeoLinkClass}
                  >
                    pilotage de mise en oeuvre d&apos;un projet operationnel
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
                  Besoin de faire avancer un projet dans de bonnes conditions ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises qui ont besoin de structurer la coordination, de tenir
                  l&apos;avancement et de securiser la mise en oeuvre jusqu&apos;a l&apos;execution.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">Découvrir notre offre pilotage</Link>
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
