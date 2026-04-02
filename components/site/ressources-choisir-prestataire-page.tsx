import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const RessourceChoisirPrestataireMeta = {
  title: "Comment choisir un prestataire pour un projet industriel | AEGENS",
  description:
    "Méthode claire pour choisir un prestataire sur un projet industriel : besoin, critères, consultation, comparaison des offres, risques et erreurs à éviter.",
}

export function RessourceChoisirPrestatairePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/ressources" },
              { label: "Comment choisir un prestataire pour un projet industriel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Comment choisir un prestataire pour un projet industriel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Choisir un prestataire pour un projet industriel ne consiste pas à comparer des devis ou à retenir
                l&apos;offre la plus rassurante en apparence. Le vrai sujet est plus exigeant : savoir si le prestataire
                comprend correctement le besoin, s&apos;il peut intervenir dans le bon périmètre, et s&apos;il est en mesure de
                contribuer à une mise en œuvre réellement tenable.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans beaucoup d&apos;entreprises, la difficulté n&apos;est pas seulement de trouver un prestataire. Elle est de
                trouver le bon prestataire pour le bon sujet, au bon moment, et sur une base de travail suffisamment
                claire.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans un projet industriel, un mauvais choix peut entraîner :
              </p>
              <ul className={bulletListClass}>
                <li>un cadrage biaisé</li>
                <li>une comparaison d&apos;offres peu fiable</li>
                <li>un projet lancé sur des hypothèses fragiles</li>
                <li>une surcharge côté client</li>
                <li>des décalages de compréhension</li>
                <li>une exécution plus coûteuse, plus lente ou moins utile que prévu</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le choix se prépare donc dans cet ordre : besoin clair, critères explicites, consultation structurée.
                Pour l&apos;amont du sujet, voir{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  notre approche de cadrage
                </Link>
                .
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Voir l&apos;offre cadrage</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="article-title">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="erreur-1-title">
                <h2 id="erreur-1-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La première erreur : chercher un prestataire avant d&apos;avoir clarifié le besoin
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C&apos;est probablement l&apos;erreur la plus fréquente. Quand le besoin n&apos;est pas suffisamment formalisé,
                  les prestataires ne répondent pas à la même chose. Chacun reconstruit le sujet selon ses références,
                  ses méthodes, ses offres et ses contraintes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Résultat : les propositions deviennent difficiles à comparer, parce qu&apos;elles ne portent pas sur le
                  même objet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de consulter, il faut pouvoir répondre clairement :
                </p>
                <ul className={bulletListClass}>
                  <li>quel problème cherchons-nous réellement à traiter ?</li>
                  <li>quel résultat attendons-nous ?</li>
                  <li>quel est le périmètre du sujet ?</li>
                  <li>quelles contraintes doivent être intégrées dès le départ ?</li>
                  <li>quelles parties prenantes sont concernées ?</li>
                  <li>quels éléments doivent être comparés dans les réponses ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que ces réponses restent floues, la consultation ne permettra pas de choisir correctement.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="evaluer-title">
                <h2 id="evaluer-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;il faut vraiment évaluer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Choisir un prestataire ne consiste pas uniquement à vérifier qu&apos;il sait faire. Il faut surtout
                  évaluer s&apos;il sait répondre correctement à votre sujet.
                </p>

                <div className="space-y-4">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Sa compréhension du besoin</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un bon prestataire ne se contente pas de reformuler votre demande. Il montre qu&apos;il a compris le
                      problème réel, les enjeux du contexte, les contraintes de l&apos;environnement, les points de
                      vigilance et les conditions de réussite.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Son périmètre réel d&apos;intervention</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut distinguer ce que le prestataire :</p>
                    <ul className={bulletListClass}>
                      <li>maîtrise directement</li>
                      <li>coordonne</li>
                      <li>sous-traite</li>
                      <li>laisse à la charge du client</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Ce point est essentiel car beaucoup de difficultés viennent d&apos;une limite de périmètre non
                      comprise au départ.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Son expérience pertinente</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      L&apos;expérience ne vaut que si elle est proche du sujet : environnements similaires, contraintes
                      comparables, contexte industriel, logistique ou retail quand c&apos;est le cas.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Sa méthode de travail</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">La proposition doit permettre de comprendre :</p>
                    <ul className={bulletListClass}>
                      <li>comment il intervient</li>
                      <li>sur quelles étapes</li>
                      <li>avec quel niveau d&apos;autonomie</li>
                      <li>avec quelles attentes vis-à-vis du client</li>
                      <li>avec quelle logique de coordination</li>
                      <li>selon quel rythme</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Sa capacité à tenir la mise en œuvre</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut évaluer s&apos;il est capable :</p>
                    <ul className={bulletListClass}>
                      <li>d&apos;avancer dans un cadre structuré</li>
                      <li>de produire les livrables attendus</li>
                      <li>de travailler avec plusieurs parties prenantes</li>
                      <li>de rendre visibles les points sensibles</li>
                      <li>de tenir la continuité du projet dans le temps</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="criteres-title">
                <h2 id="criteres-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les critères de choix à poser avant consultation
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On choisit mal un prestataire quand on définit les critères après avoir reçu les offres. Les critères
                  doivent être posés avant pour comparer sur une base cohérente.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les critères peuvent porter sur :</p>
                <ul className={bulletListClass}>
                  <li>la compréhension du besoin</li>
                  <li>la qualité de la réponse au périmètre demandé</li>
                  <li>l&apos;expérience sur des sujets comparables</li>
                  <li>la méthode proposée</li>
                  <li>la qualité de l&apos;équipe affectée au projet</li>
                  <li>la capacité à intervenir dans votre environnement</li>
                  <li>la cohérence planning / charge / livrables</li>
                  <li>le niveau d&apos;autonomie attendu du client</li>
                  <li>les garanties de suivi</li>
                  <li>le coût total</li>
                  <li>les conditions de déploiement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Dans certains contextes, il est utile de distinguer :</p>
                <ul className={bulletListClass}>
                  <li>les critères éliminatoires</li>
                  <li>les critères majeurs</li>
                  <li>les critères secondaires</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="prix-title">
                <h2 id="prix-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi le prix seul est un mauvais critère
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le prix compte. Mais il compte mal quand il est isolé.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un prix faible peut correspondre à :</p>
                <ul className={bulletListClass}>
                  <li>un périmètre plus réduit</li>
                  <li>une lecture incomplète du besoin</li>
                  <li>une sous-estimation de la charge</li>
                  <li>une dépendance plus forte vis-à-vis du client</li>
                  <li>un risque de dérive future</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un prix plus élevé peut inclure :</p>
                <ul className={bulletListClass}>
                  <li>une meilleure préparation</li>
                  <li>une méthode plus robuste</li>
                  <li>une équipe plus expérimentée</li>
                  <li>un meilleur niveau de coordination</li>
                  <li>une charge de pilotage qui évite de transférer le sujet au client</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est donc : quel est le rapport entre le prix, le périmètre réel, la compréhension du
                  sujet, les livrables et les conditions de mise en œuvre ?
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="consultation-title">
                <h2 id="consultation-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment organiser une consultation utile
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une consultation utile ne repose pas d&apos;abord sur le nombre de prestataires consultés. Elle repose sur
                  la qualité de la base fournie.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Avant de consulter, il faut idéalement disposer :</p>
                <ul className={bulletListClass}>
                  <li>d&apos;un besoin clarifié</li>
                  <li>d&apos;un périmètre posé</li>
                  <li>d&apos;un cahier des charges ou d&apos;une base équivalente</li>
                  <li>de critères de choix</li>
                  <li>d&apos;un format de réponse attendu</li>
                  <li>d&apos;une compréhension de ce qui devra être comparé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la pratique, une consultation sérieuse doit permettre de comparer :
                </p>
                <ul className={bulletListClass}>
                  <li>le fond</li>
                  <li>la méthode</li>
                  <li>le périmètre</li>
                  <li>le niveau d&apos;engagement</li>
                  <li>la qualité de l&apos;équipe</li>
                  <li>la faisabilité réelle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il est utile de demander des réponses qui rendent visibles :</p>
                <ul className={bulletListClass}>
                  <li>la lecture du besoin</li>
                  <li>les livrables proposés</li>
                  <li>l&apos;organisation de la mission</li>
                  <li>l&apos;équipe mobilisée</li>
                  <li>les hypothèses</li>
                  <li>les points de vigilance</li>
                  <li>les limites éventuelles</li>
                  <li>les conditions de réussite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour préparer cette phase, vous pouvez utiliser{" "}
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
                    la matrice de critères de choix
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="erreurs-title">
                <h2 id="erreurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Consulter trop tôt.</span> Quand le besoin n&apos;est pas
                    cadré, les réponses sont hétérogènes et la comparaison trompeuse.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Consulter trop large.</span> Interroger trop d&apos;acteurs sans
                    logique claire dégrade la qualité de la comparaison.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Ne pas préciser les attendus de réponse.</span> Si chaque
                    prestataire répond dans son format, le fond devient difficile à comparer.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Confondre aisance commerciale et compréhension réelle.</span>
                    Une présentation convaincante n&apos;est pas une preuve de compréhension suffisante.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Sous-estimer le rôle de l&apos;équipe réelle.</span> Il faut
                    savoir qui interviendra effectivement sur le projet.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Laisser trop de points implicites.</span> Les zones d&apos;ombre
                    du départ réapparaissent presque toujours pendant l&apos;exécution.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="questions-title">
                <h2 id="questions-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les questions qu&apos;il faut se poser avant de choisir
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de décider, il est utile de pouvoir répondre à ces questions :
                </p>
                <ul className={bulletListClass}>
                  <li>le prestataire a-t-il compris le sujet réel ?</li>
                  <li>répond-il au besoin ou réoriente-t-il le projet vers sa logique propre ?</li>
                  <li>son périmètre d&apos;intervention est-il clair ?</li>
                  <li>son équipe est-elle adaptée au niveau du sujet ?</li>
                  <li>les livrables sont-ils suffisamment précis ?</li>
                  <li>sa méthode est-elle compatible avec votre réalité ?</li>
                  <li>le rythme proposé est-il crédible ?</li>
                  <li>quelles charges seront réellement portées par vos équipes ?</li>
                  <li>quelles limites ou dépendances faut-il anticiper ?</li>
                  <li>que compare-t-on exactement entre les offres ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si ces questions restent sans réponse claire, le choix n&apos;est probablement pas encore assez préparé.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="plusieurs-title">
                <h2 id="plusieurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Et si plusieurs prestataires sont bons ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand plusieurs réponses sont sérieuses, le choix se fait rarement sur une seule dimension. Il faut
                  arbitrer selon ce qui compte le plus pour votre projet :
                </p>
                <ul className={bulletListClass}>
                  <li>profondeur de compréhension</li>
                  <li>niveau de structuration</li>
                  <li>qualité de la méthode</li>
                  <li>capacité à tenir la coordination</li>
                  <li>proximité avec votre contexte</li>
                  <li>niveau d&apos;autonomie</li>
                  <li>lisibilité du dispositif</li>
                  <li>robustesse de la mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans cette phase, une grille d&apos;évaluation aide à objectiver la décision plutôt qu&apos;à la laisser
                  dériver vers une préférence implicite.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="nous-title">
                <h2 id="nous-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous faisons dans cette phase
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand nous intervenons sur ce sujet, nous ne choisissons pas à la place du client. Nous cherchons à
                  rendre le choix plus solide.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela passe par :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin en amont</li>
                  <li>structurer les critères</li>
                  <li>préparer la consultation</li>
                  <li>lire les réponses avec une logique homogène</li>
                  <li>faire apparaître les écarts réels entre les offres</li>
                  <li>sécuriser les conditions de décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre rôle n&apos;est pas seulement de comparer des offres. Notre rôle est de faire en sorte que la
                  comparaison porte sur une base suffisamment claire pour être utile.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Choisir un prestataire pour un projet industriel consiste moins à repérer le meilleur qu&apos;à vérifier
                  qui est le plus pertinent pour votre sujet, dans votre contexte, au niveau réel de votre besoin.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela suppose de :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin</li>
                  <li>poser les critères avant la consultation</li>
                  <li>comparer sur des bases homogènes</li>
                  <li>regarder au-delà du prix seul</li>
                  <li>évaluer la méthode, l&apos;équipe et le périmètre réel</li>
                  <li>sécuriser les conditions de mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon choix ne commence pas au moment où les offres arrivent. Il commence quand le besoin devient
                  suffisamment clair pour être correctement formulé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si vous devez consulter ou comparer des prestataires sur un sujet important, la première question n&apos;est
                  souvent pas qui choisir, mais sur quelle base les comparer correctement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cas concret lié :{" "}
                  <Link
                    href="/cas-clients/structuration-dun-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    structuration d&apos;un besoin avant consultation
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
                  Besoin de structurer une consultation avant de choisir ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le besoin, poser des critères utiles et comparer les offres sur une base
                  solide, pour sécuriser la mise en œuvre.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/">Voir l&apos;offre pilotage</Link>
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
