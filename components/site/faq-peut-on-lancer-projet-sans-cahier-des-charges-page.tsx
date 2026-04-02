import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const FaqPeutOnLancerProjetSansCahierDesChargesMeta = {
  title: "Peut-on lancer un projet sans cahier des charges ? | FAQ AEGENS",
  description:
    "Peut-on lancer un projet sans cahier des charges, dans quels cas oui ou non, et ce qu’il faut absolument avoir clarifié avant de lancer sérieusement la suite.",
}

export function FaqPeutOnLancerProjetSansCahierDesChargesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "FAQ", href: "/faq/" },
              { label: "Peut-on lancer un projet sans cahier des charges ?" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Peut-on lancer un projet sans cahier des charges ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Oui, on peut parfois lancer un projet sans cahier des charges formel. Mais on ne peut pas lancer
                sérieusement un projet sans cadre clair.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La vraie question n’est pas d’avoir un document intitulé cahier des charges. La vraie question est de
                savoir si le besoin, l’objectif, le périmètre, les contraintes et la logique de suite sont suffisamment
                clarifiés pour engager le projet proprement.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un projet peut donc démarrer sans cahier des charges formel, mais il ne devrait pas démarrer sans base
                de travail structurée.
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
              <section className={sectionClass} aria-labelledby="short-answer-title">
                <h2 id="short-answer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La réponse courte
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Oui, dans certains cas</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un projet peut être lancé sans cahier des charges formel si :</p>
                <ul className={bulletListClass}>
                  <li>le sujet est simple</li>
                  <li>le besoin est déjà clair</li>
                  <li>le périmètre est limité</li>
                  <li>les interlocuteurs partagent la même lecture</li>
                  <li>la mise en œuvre ne dépend pas d’une consultation complexe</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Non, dans d’autres cas</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le projet ne devrait pas démarrer sans cahier des charges, ou sans équivalent sérieux, si :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est encore partiellement flou</li>
                  <li>plusieurs équipes sont concernées</li>
                  <li>un prestataire ou une solution externe doit être consulté</li>
                  <li>les attentes doivent être comparées</li>
                  <li>le périmètre doit être stabilisé</li>
                  <li>la suite engage des ressources ou des coûts significatifs</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="clarity-title">
                <h2 id="clarity-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le vrai sujet n’est pas le document, mais la clarté
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’opposition entre document lourd et projet agile est souvent mal posée. Un cahier des charges est
                  utile non pas pour son nom, mais parce qu’il formalise ce que le projet doit traiter.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si cette formalisation existe déjà ailleurs, le nom importe peu. Si elle n’existe nulle part, l’absence
                  de cahier des charges est souvent le symptôme d’un manque de cadre : besoin flou, objectif vague,
                  périmètre mouvant, attentes divergentes, contraintes mal intégrées.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="must-have-title">
                <h2 id="must-have-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut absolument avoir, même sans cahier des charges
                </h2>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Un besoin formulé</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut pouvoir dire quel problème est traité, pourquoi le projet existe et ce qu’il doit améliorer.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Un objectif principal</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le projet doit avoir une finalité nette, au-delà de formulations trop générales.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Un périmètre</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut savoir ce qui entre dans la phase actuelle et ce qui n’y entre pas.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Des contraintes visibles</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Temps, charge, ressources, environnement existant, dépendances et déploiement doivent être connus.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Une logique de suite</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La prochaine étape doit être claire : décision, consultation, déploiement, pilote ou pilotage.</p>
              </section>

              <section className={sectionClass} aria-labelledby="possible-title">
                <h2 id="possible-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les cas où on peut effectivement démarrer sans cahier des charges
                </h2>
                <ul className={bulletListClass}>
                  <li>le sujet est simple et bien connu</li>
                  <li>le projet est interne et peu transverse</li>
                  <li>une base claire existe déjà (note de cadrage, expression de besoin, roadmap)</li>
                  <li>la première étape est exploratoire ou pilote, avec un cadre explicite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ces cas, l’absence de cahier des charges formel n’est pas forcément un problème, à condition que
                  cela ne masque pas une absence de clarté plus générale.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="bad-idea-title">
                <h2 id="bad-idea-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les cas où c’est une mauvaise idée
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L’absence de cahier des charges devient risquée quand :</p>
                <ul className={bulletListClass}>
                  <li>plusieurs équipes sont concernées</li>
                  <li>le besoin reste mal formulé</li>
                  <li>une consultation de prestataires est prévue</li>
                  <li>le projet engage des ressources importantes</li>
                  <li>la mise en œuvre sera complexe</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ces situations, démarrer sans base de formalisation revient souvent à demander à l’exécution de
                  compenser ce que l’amont n’a pas posé.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="too-early-title">
                <h2 id="too-early-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui se passe quand on lance trop tôt
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les fragilités les plus fréquentes :</p>
                <ul className={bulletListClass}>
                  <li>le besoin continue à être rediscuté</li>
                  <li>le périmètre glisse au fil du projet</li>
                  <li>les décisions se prennent sur fond de flou</li>
                  <li>la consultation devient difficile à comparer</li>
                  <li>la mise en œuvre absorbe l’ambiguïté</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’absence de cahier des charges n’empêche pas de démarrer, mais augmente fortement le risque de payer
                  plus tard ce qui n’a pas été structuré au départ.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="distinguish-title">
                <h2 id="distinguish-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut distinguer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ne pas avoir de cahier des charges formel peut être acceptable. Ne pas avoir de besoin structuré ne
                  l’est généralement pas, sauf sujet très simple.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On peut démarrer sans document nommé cahier des charges si l’on dispose déjà d’un cadrage clair,
                  d’objectifs stables, d’un périmètre posé et d’une logique de suite propre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À l’inverse, on peut avoir un document intitulé cahier des charges mais trop vague pour être utile.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="check-title">
                <h2 id="check-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous pouvez avancer sans cahier des charges
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous pouvez généralement avancer sans cahier des charges formel si plusieurs réponses sont oui :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est clairement formulé</li>
                  <li>l’objectif principal est net</li>
                  <li>le périmètre est posé</li>
                  <li>les contraintes sont visibles</li>
                  <li>les parties prenantes partagent la même lecture</li>
                  <li>la prochaine étape est claire</li>
                  <li>la suite ne dépend pas d’une comparaison externe complexe</li>
                  <li>la complexité du sujet reste raisonnable</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="instead-title">
                <h2 id="instead-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Que faire à la place si vous ne voulez pas un cahier des charges lourd
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet n’est pas d’écrire long. Le sujet est d’écrire utile.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon les cas, cela peut prendre la forme de :</p>
                <ul className={bulletListClass}>
                  <li>note de cadrage</li>
                  <li>expression de besoin</li>
                  <li>feuille de route</li>
                  <li>base de consultation</li>
                  <li>cadrage fonctionnel synthétique</li>
                  <li>cahier des charges léger mais rigoureux</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Oui, on peut parfois lancer un projet sans cahier des charges formel. Mais on ne devrait pas lancer
                  sérieusement un projet sans cadre clair sur le besoin, l’objectif, le périmètre, les contraintes et
                  la logique de suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce n’est pas le nom du document qui compte, c’est le niveau de structuration au moment du lancement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/faq/que-contient-un-cahier-des-charges/" className={inlineSeoLinkClass}>
                    que contient un cahier des charges
                  </Link>
                  ,{" "}
                  <Link
                    href="/faq/faut-il-consulter-des-prestataires-avant-de-cadrer-le-besoin/"
                    className={inlineSeoLinkClass}
                  >
                    faut-il consulter des prestataires avant de cadrer le besoin
                  </Link>
                  ,{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage
                  </Link>
                  ,{" "}
                  <Link href="/ressources/cahier-des-charges-vs-expression-de-besoin/" className={inlineSeoLinkClass}>
                    cahier des charges vs expression de besoin
                  </Link>
                  ,{" "}
                  <Link href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/" className={inlineSeoLinkClass}>
                    exemple de cahier des charges fonctionnel
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
                  Besoin de lancer votre projet sur une base claire et exploitable ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à poser le bon niveau de formalisation avant consultation, lancement ou mise en
                  œuvre.
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
