import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const FaqCombienTempsCadrageMeta = {
  title: "Combien de temps prend un cadrage de projet ? | FAQ AEGENS",
  description:
    "Combien de temps prend un cadrage de projet, de quoi dépend sa durée, ce qu’il faut cadrer vraiment et pourquoi aller trop vite fragilise la suite.",
}

export function FaqCombienTempsCadragePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "FAQ", href: "/faq/" },
              { label: "Combien de temps prend un cadrage de projet ?" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Combien de temps prend un cadrage de projet ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un cadrage de projet prend le temps nécessaire pour rendre le sujet suffisamment clair, stable et
                exploitable pour la suite. Il n’existe donc pas de durée universelle.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un cadrage peut être relativement court si le besoin est déjà bien formulé, le périmètre presque
                stabilisé et les arbitrages majeurs déjà posés.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                À l’inverse, il prend plus de temps quand le besoin reste flou, que plusieurs lectures coexistent, que
                le projet est transverse ou que la consultation et la mise en œuvre dépendent directement de la qualité
                du cadrage.
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
              <section className={sectionClass} aria-labelledby="bad-question-title">
                <h2 id="bad-question-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La mauvaise manière de poser la question
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Demander combien de temps prend un cadrage est légitime, mais la question devient trompeuse quand le
                  cadrage est traité comme une étape standard indépendante du sujet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un cadrage sert à :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin</li>
                  <li>préciser l’objectif</li>
                  <li>poser le bon périmètre</li>
                  <li>rendre visibles les contraintes</li>
                  <li>aligner les parties prenantes</li>
                  <li>hiérarchiser les attentes</li>
                  <li>préparer une base sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La vraie question est donc : combien de travail faut-il pour rendre le sujet suffisamment cadré pour
                  être lancé, consulté ou piloté proprement ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="honest-answer-title">
                <h2 id="honest-answer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La réponse la plus honnête
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la pratique, la durée varie surtout selon cinq facteurs.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Le niveau de maturité du besoin</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si le besoin est déjà identifié, le cadrage structure et formalise. S’il est encore diffus, le cadrage
                  absorbe une part de clarification plus forte.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Le nombre de parties prenantes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Plus le sujet implique de services et de niveaux de décision, plus l’alignement prend du temps.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Le niveau d’arbitrage nécessaire</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage s’allonge quand il faut encore trancher :</p>
                <ul className={bulletListClass}>
                  <li>ce qui entre dans le périmètre</li>
                  <li>ce qui n’y entre pas</li>
                  <li>ce qui relève d’une phase 1</li>
                  <li>ce qui est indispensable ou simplement souhaitable</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Le niveau de formalisation attendu</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un cadrage peut déboucher sur :</p>
                <ul className={bulletListClass}>
                  <li>une note simple</li>
                  <li>une expression de besoin</li>
                  <li>un document de cadrage</li>
                  <li>une roadmap</li>
                  <li>un cahier des charges</li>
                  <li>une base de consultation</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Le niveau de risque porté par la suite</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quand le cadrage conditionne une consultation ou un déploiement engageant, il doit être plus robuste.</p>
              </section>

              <section className={sectionClass} aria-labelledby="understand-title">
                <h2 id="understand-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut bien comprendre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un cadrage ne prend pas du temps parce qu’il serait bureaucratique. Il prend du temps quand le sujet
                  demande un vrai travail de clarification.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Aller trop vite peut donner une impression de gain immédiat, puis faire reperdre beaucoup plus de temps
                  ensuite dans la consultation, les arbitrages, la comparaison des réponses, la mise en œuvre et les
                  corrections.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="short-cases-title">
                <h2 id="short-cases-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les cas où le cadrage peut être relativement court
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage peut aller assez vite quand :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est clair</li>
                  <li>le périmètre est presque posé</li>
                  <li>les attentes sont cohérentes</li>
                  <li>les contraintes sont déjà visibles</li>
                  <li>la formalisation attendue reste simple</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Dans ce cas, le cadrage sert surtout à consolider, ordonner et formaliser.</p>
              </section>

              <section className={sectionClass} aria-labelledby="longer-cases-title">
                <h2 id="longer-cases-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les cas où le cadrage prend plus de temps
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage est naturellement plus poussé quand :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est encore mal formulé</li>
                  <li>le projet touche plusieurs équipes</li>
                  <li>les lectures divergent</li>
                  <li>une consultation dépend directement du cadrage</li>
                  <li>la mise en œuvre sera sensible</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="useless-delay-title">
                <h2 id="useless-delay-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui allonge inutilement un cadrage
                </h2>
                <ul className={bulletListClass}>
                  <li>vouloir tout traiter d’un coup</li>
                  <li>ne pas trancher les arbitrages de fond</li>
                  <li>confondre cadrage et exploration sans fin</li>
                  <li>formaliser trop tôt trop de détails</li>
                  <li>ne pas clarifier le niveau réel du sujet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parfois, ce qui allonge le cadrage est surtout le fait qu’il absorbe un diagnostic qui aurait dû être
                  posé plus clairement en amont. À lire :{" "}
                  <Link href="/faq/quand-faire-un-diagnostic-operationnel/" className={inlineSeoLinkClass}>
                    quand faire un diagnostic opérationnel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="enough-title">
                <h2 id="enough-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si le cadrage est assez avancé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage est généralement suffisant quand vous pouvez répondre clairement à :</p>
                <ul className={bulletListClass}>
                  <li>quel besoin traite-t-on exactement ?</li>
                  <li>quel est l’objectif principal ?</li>
                  <li>quel est le périmètre du projet ?</li>
                  <li>quelles sont les contraintes majeures ?</li>
                  <li>qui est concerné ?</li>
                  <li>qu’attend-on réellement de la suite ?</li>
                  <li>sur quelle base prendra-t-on les décisions suivantes ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si ces réponses restent floues, le cadrage n’est pas encore mûr, même si du temps a déjà été passé.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="criterion-title">
                <h2 id="criterion-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Le bon critère n’est pas la vitesse, mais la solidité
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une entreprise peut avoir un cadrage rapide mais fragile, ou un cadrage plus exigeant qui sécurise
                  réellement la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La bonne question est : à partir de quand le projet est-il suffisamment clair pour que la suite repose
                  sur une base sérieuse ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="too-short-title">
                <h2 id="too-short-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Cadrage trop court vs cadrage suffisant
                </h2>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Un cadrage trop court laisse souvent</h3>
                <ul className={bulletListClass}>
                  <li>un besoin ambigu</li>
                  <li>un périmètre mouvant</li>
                  <li>des contraintes insuffisamment explicitées</li>
                  <li>des attentes divergentes</li>
                  <li>des arbitrages repoussés</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Un cadrage suffisant permet généralement</h3>
                <ul className={bulletListClass}>
                  <li>une lecture plus nette du sujet</li>
                  <li>un périmètre plus stable</li>
                  <li>une hiérarchie plus claire</li>
                  <li>des décisions plus propres</li>
                  <li>une base exploitable pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le signal le plus sûr est simple : si la suite rediscute en permanence ce qui aurait dû être posé au
                  départ, le cadrage a probablement été trop court.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="difference-title">
                <h2 id="difference-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En pratique, qu’est-ce qui fait la différence
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La durée utile dépend moins du volume de texte produit que de la quantité d’incertitude à réduire pour
                  rendre la suite tenable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon cadrage n’est pas celui qui prend longtemps. C’est celui qui traite réellement les incertitudes
                  qui fragiliseraient la suite si elles restaient ouvertes.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un cadrage de projet prend le temps nécessaire pour rendre le sujet suffisamment clair, stable et
                  exploitable pour la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Sa durée dépend surtout :</p>
                <ul className={bulletListClass}>
                  <li>de la maturité du besoin</li>
                  <li>du nombre de parties prenantes</li>
                  <li>du niveau d’arbitrage nécessaire</li>
                  <li>du degré de formalisation attendu</li>
                  <li>du niveau de risque porté par la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En une phrase : un bon cadrage ne doit être ni trop long, ni trop court. Il doit être assez solide
                  pour éviter que le projet paie plus tard ce qu’il n’a pas clarifié au départ.
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
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    comment cadrer un projet industriel
                  </Link>
                  ,{" "}
                  <Link href="/modeles-checklists/checklist-cadrage-projet-industriel/" className={inlineSeoLinkClass}>
                    checklist de cadrage de projet industriel
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
                  Besoin de sécuriser votre cadrage avant de lancer la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le besoin, stabiliser le périmètre et préparer une base de décision
                  exploitable.
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
