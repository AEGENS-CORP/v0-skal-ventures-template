import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

export const NotreApprocheMeta = {
  title: "Notre approche | AEGENS",
  description:
    "Découvrez l’approche AEGENS : une intervention structurée pour analyser le fonctionnement opérationnel, cadrer les projets et sécuriser leur mise en œuvre.",
}

export function NotreApprochePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/a-propos" },
              { label: "Notre approche" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Notre approche
              </h1>

              <p className="ae-text text-lg sm:text-xl leading-relaxed max-w-5xl">
                Notre approche repose sur une idée simple : un sujet important ne doit pas être traité trop vite, trop
                vaguement, ni trop tard.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans beaucoup d'entreprises, les difficultés ne viennent pas toujours d'un manque d'engagement, d'un
                manque de compétence ou d'un manque d'intention. Elles viennent souvent d'un décalage entre ce qui est
                perçu, ce qui est réellement en jeu, ce qui est décidé et ce qui est effectivement mis en œuvre.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">C'est dans cet espace que nous intervenons.</p>

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

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="approche-article-title">
            <article className="mx-auto max-w-[980px] space-y-9">
              <section className="space-y-4 border-b border-white/10 pb-8">
                <h2 id="approche-article-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Notre point de départ : une situation réelle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne partons pas d'une solution. Nous ne partons pas d'un outil. Nous ne partons pas non plus d'un
                  discours théorique sur la transformation, l'optimisation ou l'innovation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous partons d'une situation réelle.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une situation peut être réelle de plusieurs manières :
                </p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>un besoin existe mais reste encore mal formulé</li>
                  <li>un projet a été identifié mais manque de structure</li>
                  <li>des points de blocage ralentissent le fonctionnement</li>
                  <li>des pertes de temps se répètent sans jamais être traitées de fond</li>
                  <li>plusieurs acteurs doivent avancer ensemble sans cadre commun</li>
                  <li>une mise en œuvre doit être tenue avec plus de méthode</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre approche consiste à rendre cette situation plus lisible, plus structurée et plus exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour situer cette approche dans l&apos;ensemble AEGENS, vous pouvez lire{" "}
                  <Link href="/a-propos/qui-nous-sommes/" className={inlineSeoLinkClass}>
                    qui nous sommes
                  </Link>{" "}
                  et{" "}
                  <Link href="/a-propos/notre-experience/" className={inlineSeoLinkClass}>
                    notre expérience
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="lecture-title">
                <h2 id="lecture-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comprendre avant d'accélérer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela suppose d'abord une qualité de lecture. Avant de vouloir transformer, deployer, choisir ou
                  piloter, il faut comprendre. Mais comprendre ne veut pas dire accumuler des informations.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Comprendre veut dire faire apparaitre ce qui compte reellement : distinguer l'essentiel du
                  secondaire, le ponctuel du structurel, le symptome du point de fond, le besoin percu du besoin reel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C'est pourquoi nous attachons autant d'importance a la phase amont. Nous considérons qu'un sujet mal
                  lu produit presque toujours une suite mal posée.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Un besoin mal lu devient</h3>
                    <ul className="mt-3 list-disc pl-6 space-y-2 ae-text text-sm sm:text-base leading-relaxed">
                      <li>un projet mal formule</li>
                      <li>une consultation mal preparee</li>
                      <li>une comparaison peu fiable</li>
                      <li>une decision fragile</li>
                      <li>une mise en oeuvre qui se disperse</li>
                    </ul>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Une situation bien comprise permet</h3>
                    <ul className="mt-3 list-disc pl-6 space-y-2 ae-text text-sm sm:text-base leading-relaxed">
                      <li>un constat plus clair</li>
                      <li>des priorites plus nettes</li>
                      <li>un besoin mieux formule</li>
                      <li>un projet mieux structure</li>
                      <li>une execution mieux tenue</li>
                    </ul>
                  </article>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre approche ne cherche donc pas a accelerer artificiellement les sujets. Elle cherche a leur donner
                  le bon niveau de clarte avant de les faire avancer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela ne signifie pas que nous defendons une logique lourde. Au contraire. Nous cherchons a produire le
                  minimum de complexite necessaire pour obtenir le maximum de lisibilite utile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon travail d'analyse n'est pas un travail verbeux. Un bon cadrage n'est pas un document long pour
                  le principe. Un bon pilotage n'est pas une multiplication de reunions.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="reel-title">
                <h2 id="reel-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Partir du fonctionnement reel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accordons une place centrale au fonctionnement reel. Pas au fonctionnement theorique, pas au
                  fonctionnement suppose, pas au fonctionnement decrit uniquement dans les procedures ou dans les
                  intentions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le fonctionnement reel, c'est ce qui se passe effectivement :
                </p>
                <ul className="list-disc pl-6 sm:columns-2 space-y-2.5 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed">
                  <li>la maniere dont les equipes travaillent</li>
                  <li>la facon dont les informations circulent</li>
                  <li>les points ou les decisions ralentissent</li>
                  <li>les etapes ou les validations s'allongent</li>
                  <li>les ajustements devenus habituels</li>
                  <li>les pertes de temps integrees au quotidien</li>
                  <li>les contournements qui compensent un probleme sans le resoudre</li>
                  <li>les zones ou les responsabilites sont moins claires qu'elles ne devraient l'etre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C'est dans cette matiere-la que se trouvent les vrais sujets. Notre approche consiste donc a partir de
                  ce reel pour construire une lecture plus juste de la situation.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="objectiver-title">
                <h2 id="objectiver-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Objectiver, clarifier, hierarchiser
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette lecture n'a pas pour but de faire un audit au sens vague du terme. Elle a pour but d'objectiver.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Objectiver, dans notre travail, veut dire plusieurs choses.
                </p>
                <ol className="space-y-3 ae-text text-base sm:text-lg leading-relaxed">
                  <li className="border-l-2 border-[#07bc7d]/55 pl-4">
                    <span className="font-semibold text-white">1. Mettre des mots precis sur le sujet.</span> Tant qu'un besoin
                    reste formule de maniere trop large, chacun le comprend a sa maniere. Cette imprecision fragilise la suite.
                  </li>
                  <li className="border-l-2 border-[#07bc7d]/55 pl-4">
                    <span className="font-semibold text-white">2. Clarifier le niveau du probleme.</span> Tout sujet n'est pas un
                    projet, tout blocage ne demande pas une refonte, toute difficulte n'appelle pas une solution lourde.
                  </li>
                  <li className="border-l-2 border-[#07bc7d]/55 pl-4">
                    <span className="font-semibold text-white">3. Hierarchiser.</span> Tous les sujets n'ont pas le meme poids,
                    tous les irritants n'ont pas le meme effet, tous les ecarts n'appellent pas le meme niveau de reponse.
                  </li>
                </ol>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L'un des roles essentiels de notre approche est precisement la : faire ressortir les vraies priorites,
                  et eviter que tout soit traite au meme niveau.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="trois-temps-title">
                <h2 id="trois-temps-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Trois temps d'intervention
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette logique nous conduit naturellement vers trois temps d'intervention : diagnostic, cadrage,
                  pilotage.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Diagnostic</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Comprendre le fonctionnement concret, faire apparaitre les points de blocage, identifier les pertes
                      de temps, rendre visibles les sujets mal poses et preparer une base plus claire.
                    </p>
                    <p className="mt-3">
                      <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                        Voir l'offre diagnostic
                      </Link>
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Cadrage</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Clarifier l'objectif reel, definir le perimetre utile, formuler le besoin, poser les contraintes,
                      faire emerger les criteres de decision et preparer la suite.
                    </p>
                    <p className="mt-3">
                      <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                        Voir l'offre cadrage
                      </Link>
                    </p>
                  </article>
                  <article className="rounded-2xl border border-white/12 bg-black/24 p-4 sm:p-5">
                    <h3 className="ae-heading text-xl font-semibold">Pilotage</h3>
                    <p className="ae-text mt-2 text-sm sm:text-base leading-relaxed">
                      Tenir la continuite entre ce qui a ete compris, decide, planifie et ce qui se passe reellement
                      pendant la mise en oeuvre.
                    </p>
                    <p className="mt-3">
                      <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                        Voir l'offre pilotage
                      </Link>
                    </p>
                  </article>
                </div>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C'est cette continuite qui permet d'eviter la fragmentation : decisions deconnectees de l'execution,
                  arbitrages peu lisibles, rythme irregulier et perte de tenue du projet.
                </p>
              </section>

              <section className="space-y-4 border-b border-white/10 pb-8" aria-labelledby="posture-title">
                <h2 id="posture-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Notre posture et notre discipline
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si nous devions resumer notre approche : comprendre avant d'accelerer, structurer avant d'engager,
                  tenir l'execution jusqu'au reel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous ne venons pas confirmer automatiquement une idee deja formee. Nous ne venons pas non plus
                  compliquer le sujet. Nous venons apporter du recul, une lecture transversale, une methode de
                  structuration et une capacite a faire avancer.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela suppose d'etre suffisamment proches du terrain pour comprendre ce qui se joue reellement, mais
                  suffisamment exterieurs pour garder une lecture claire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans realite operationnelle, l'analyse reste theorique. Sans hauteur de vue, l'execution reste
                  fragmentee. Nous travaillons precisement a l'endroit ou ces deux dimensions doivent se rejoindre.
                </p>
                <div className="rounded-2xl border border-white/12 bg-black/26 p-5 sm:p-6">
                  <p className="ae-text text-base sm:text-lg leading-relaxed">
                    Une discipline utile consiste a refuser deux exces : le flou et la lourdeur. Le flou affaiblit les
                    decisions. La lourdeur ralentit l'action.
                  </p>
                </div>
              </section>

              <section className="space-y-4" aria-labelledby="effets-title">
                <h2 id="effets-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Effets concrets de cette approche
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand notre approche fonctionne, elle produit des effets concrets :
                </p>
                <ul className="list-disc pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed">
                  <li>sortir d'une lecture trop diffuse d'un sujet</li>
                  <li>mieux distinguer ce qui doit etre traite maintenant et ce qui peut attendre</li>
                  <li>faire converger des acteurs qui ne lisaient pas le besoin de la meme maniere</li>
                  <li>preparer une consultation sur une base plus serieuse</li>
                  <li>mieux relier la decision a la mise en oeuvre</li>
                  <li>rendre le projet plus lisible dans la duree</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre approche est donc une maniere concrete de travailler : lire le reel avec serieux, formuler les
                  sujets avec precision, hierarchiser avec discernement, structurer sans rigidifier, mettre en oeuvre
                  sans perdre le sens du besoin initial.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C'est cette coherence qui nous importe. Un projet tient a la qualite de sa lecture de depart, a la
                  solidite de sa structuration, et a la continuite de sa mise en oeuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour approfondir cette logique, vous pouvez consulter{" "}
                  <Link href="/methode/" className={inlineSeoLinkClass}>
                    notre methode
                  </Link>
                  , parcourir{" "}
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    nos cas clients
                  </Link>
                  , ou nous contacter directement via{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    la page contact
                  </Link>
                  .
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="approche-cta-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="approche-cta-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Un sujet a objectiver, mieux formuler ou mieux tenir ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet demande d'etre objectivé, mieux formulé ou mieux tenu dans sa mise en oeuvre, alors
                  notre approche peut vous etre utile.
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
