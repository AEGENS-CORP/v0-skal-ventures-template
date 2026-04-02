import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const RessourceCadrerProjetMeta = {
  title: "Comment cadrer un projet industriel | AEGENS",
  description:
    "Méthode claire pour cadrer un projet industriel : besoin, périmètre, objectifs, parties prenantes, risques, priorités et conditions de mise en œuvre.",
}

export function RessourceCadrerProjetPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/ressources" },
              { label: "Comment cadrer un projet industriel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Comment cadrer un projet industriel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cadrer un projet industriel, ce n&apos;est pas remplir un document avant de lancer l&apos;exécution. C&apos;est le
                moment où l&apos;on transforme une intention, un besoin ou une difficulté perçue en base de travail
                exploitable.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, le cadrage sert à répondre correctement à une question simple : qu&apos;allons-nous vraiment
                lancer, pourquoi, dans quel périmètre, avec quelles contraintes, et sur quelle base de décision ?
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Les contenus de référence sur le sujet convergent sur ce point. Le cadrage intervient avant la
                planification détaillée et avant le lancement. Il sert à fixer les objectifs, les délais, les
                ressources, le périmètre et les repères qui permettront ensuite de conduire le projet dans de bonnes
                conditions.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans cette logique, vous pouvez aussi consulter{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  notre page dédiée au cadrage de projet industriel
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
              <section className={sectionClass} aria-labelledby="importance-title">
                <h2 id="importance-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette étape est centrale dans l&apos;industrie
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans l&apos;industrie, cette étape a une importance particulière. Un projet industriel touche rarement un
                  seul sujet isolé. Il se situe presque toujours à l&apos;intersection de plusieurs dimensions :
                </p>
                <ul className={bulletListClass}>
                  <li>organisationnelles</li>
                  <li>opérationnelles</li>
                  <li>humaines</li>
                  <li>techniques</li>
                  <li>parfois réglementaires</li>
                  <li>et très souvent transverses</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet peut concerner une méthode de travail, un flux, une coordination entre services, une
                  évolution d&apos;outil, une transformation d&apos;organisation, un besoin de traçabilité, une révision de
                  fonctionnement entre production et fonctions support, ou encore la mise en œuvre d&apos;une nouvelle
                  solution. Dans tous les cas, le cadrage sert à éviter la même erreur : passer trop vite à la solution
                  ou à l&apos;exécution alors que le besoin n&apos;est pas encore suffisamment clarifié.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;expression du besoin, la définition du contexte, la clarification du périmètre, des parties
                  prenantes, des bénéfices attendus, des contraintes et des risques font partie des éléments à
                  structurer très tôt, au stade amont.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="sous-estime-title">
                <h2 id="sous-estime-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi le cadrage est souvent sous-estimé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d&apos;entreprises, le projet existe déjà dans les têtes avant même d&apos;être cadré. On sait
                  globalement qu&apos;il y a un sujet, qu&apos;il faut faire évoluer quelque chose, qu&apos;une difficulté existe et
                  qu&apos;une décision devra être prise.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais entre ce niveau d&apos;intuition et un projet réellement cadré, il manque souvent plusieurs éléments
                  essentiels :
                </p>
                <ul className={bulletListClass}>
                  <li>une formulation claire du besoin</li>
                  <li>des objectifs suffisamment précis</li>
                  <li>un périmètre compréhensible</li>
                  <li>une hiérarchie des priorités</li>
                  <li>un accord minimum sur ce que le projet doit réellement produire</li>
                  <li>une base exploitable pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un projet mal cadré produit très vite des effets visibles :</p>
                <ul className={bulletListClass}>
                  <li>des attentes différentes selon les interlocuteurs</li>
                  <li>des arbitrages plus difficiles</li>
                  <li>une consultation mal préparée</li>
                  <li>un cahier des charges peu utile</li>
                  <li>des comparaisons de solutions peu fiables</li>
                  <li>une mise en œuvre qui démarre sur des bases fragiles</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les guides de cadrage et de cahier des charges rappellent précisément cette fonction amont : structurer
                  la compréhension commune, éviter les ambiguïtés et poser une base solide avant de mobiliser plus
                  largement l&apos;organisation ou des prestataires externes.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="concret-title">
                <h2 id="concret-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Cadrer un projet industriel, concrètement, qu&apos;est-ce que cela veut dire ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cadrer un projet industriel, c&apos;est faire en sorte qu&apos;un sujet soit :
                </p>
                <ul className={bulletListClass}>
                  <li>compris</li>
                  <li>délimité</li>
                  <li>formulé</li>
                  <li>partagé</li>
                  <li>et préparé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela suppose de répondre, au minimum, à plusieurs questions.
                </p>

                <div className="space-y-5">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Quel est le sujet réel ?</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Ce qui déclenche un projet n&apos;est pas toujours sa formulation la plus juste. Des phrases comme « on
                      a un problème de logiciel », « on perd du temps » ou « il faut automatiser » signalent un sujet,
                      mais ne suffisent pas à le cadrer.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage consiste à aller plus loin :</p>
                    <ul className={bulletListClass}>
                      <li>quel problème cherche-t-on exactement à traiter ?</li>
                      <li>sur quels points précis ?</li>
                      <li>avec quels effets observables ?</li>
                      <li>dans quelles zones du fonctionnement réel ?</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Pourquoi ce projet maintenant ?</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un bon cadrage ne part pas seulement du quoi. Il part aussi du pourquoi maintenant. Cela permet de
                      clarifier l&apos;enjeu réel, le niveau de priorité, les bénéfices attendus et la raison d&apos;engager le
                      sujet à ce moment-là.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Quel est le périmètre utile ?</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Beaucoup de projets se fragilisent ici. Un périmètre trop large rend le projet difficile à tenir.
                      Un périmètre trop étroit peut faire manquer le vrai sujet.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il faut définir le périmètre, son début, sa fin, les activités concernées et les limites du projet
                      dès la phase amont.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Quelles sont les contraintes ?</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Dans l&apos;industrie, le projet n&apos;arrive jamais dans le vide. Il s&apos;inscrit dans un environnement qui
                      impose déjà des contraintes opérationnelles, de rythme, de ressources, parfois qualité,
                      d&apos;organisation, de système ou d&apos;intégration, et parfois réglementaires.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Qui est concerné ?</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le cadrage doit faire apparaître les parties prenantes réelles : qui décide, qui utilise, qui
                      subit, qui porte, qui contribue, qui arbitre. Cette étape est centrale, car un projet industriel est
                      presque toujours transverse.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">6. Qu&apos;est-ce qu&apos;une solution acceptable ?</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Avant de consulter ou de choisir, il faut savoir :</p>
                    <ul className={bulletListClass}>
                      <li>ce qui est indispensable</li>
                      <li>ce qui est souhaitable</li>
                      <li>ce qui relève d&apos;une contrainte</li>
                      <li>et sur quels critères une option sera jugée pertinente</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="etapes-title">
                <h2 id="etapes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les 7 étapes d&apos;un cadrage de projet industriel utile
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il n&apos;existe pas une seule manière de cadrer, mais un cadrage sérieux passe généralement par les étapes
                  suivantes.
                </p>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Étape 1 — Reformuler le sujet.</span> Le point de départ
                    n&apos;est pas le document. C&apos;est la reformulation : transformer une difficulté perçue ou un besoin diffus
                    en question de travail claire.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 2 — Décrire l&apos;existant.</span> Documenter le
                    fonctionnement actuel, les pratiques existantes, les outils en place, les interactions entre services
                    et les écarts entre ce qui est prévu et ce qui se passe réellement.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 3 — Clarifier l&apos;objectif réel.</span> Un projet mal
                    cadré confond souvent objectif, moyen et solution. L&apos;objectif doit être formulé du point de vue du
                    résultat recherché.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 4 — Définir le périmètre.</span> Dire explicitement
                    ce qui entre, ce qui n&apos;entre pas, ce qui est traité maintenant et ce qui pourra venir plus tard.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 5 — Identifier contraintes et risques.</span> Faire
                    apparaître les contraintes de temps, de charge, de dépendance, les contraintes techniques ou
                    organisationnelles et les risques visibles dès l&apos;amont.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 6 — Poser les critères de décision.</span> Les
                    critères peuvent porter sur la couverture du besoin, la simplicité de mise en œuvre, la robustesse,
                    l&apos;impact sur les équipes, le coût, le délai, l&apos;intégration, la maintenabilité et la capacité à
                    déployer.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 7 — Formaliser.</span> Le cadrage doit déboucher sur
                    un support exploitable : note de cadrage, expression de besoin, roadmap, cahier des charges ou
                    dossier de décision.
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour accélérer cette étape, vous pouvez utiliser{" "}
                  <Link href="/modeles-checklists/checklist-cadrage-projet-industriel/" className={inlineSeoLinkClass}>
                    la checklist cadrage projet industriel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="contenu-title">
                <h2 id="contenu-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;un bon cadrage doit contenir
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon cadrage n&apos;est pas un document long. C&apos;est un document utile. Il doit au minimum permettre de
                  retrouver clairement :
                </p>
                <ul className={bulletListClass}>
                  <li>le contexte</li>
                  <li>le problème traité</li>
                  <li>les objectifs</li>
                  <li>le périmètre</li>
                  <li>les parties prenantes</li>
                  <li>les contraintes</li>
                  <li>les risques</li>
                  <li>les hypothèses</li>
                  <li>les critères de décision</li>
                  <li>la logique de suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Si le sujet est plus avancé, le cadrage peut aussi intégrer :</p>
                <ul className={bulletListClass}>
                  <li>les scénarios possibles</li>
                  <li>une première vision de planning</li>
                  <li>des jalons</li>
                  <li>des besoins de ressources</li>
                  <li>une gouvernance</li>
                  <li>une logique de consultation</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="difference-title">
                <h2 id="difference-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Cadrage, expression de besoin, cahier des charges : quelle différence ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C&apos;est une confusion fréquente.</p>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">L&apos;expression de besoin.</span> Elle sert à formuler ce que
                    l&apos;on cherche à résoudre ou à obtenir.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Le cadrage.</span> Il organise le sujet, pose le périmètre,
                    clarifie les objectifs, les contraintes, les risques, les critères et la logique de suite.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Le cahier des charges.</span> Il formalise ensuite le besoin
                    de manière suffisamment précise pour préparer une consultation, une comparaison de solutions ou une
                    mise en œuvre plus structurée.
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Autrement dit :</p>
                <ul className={bulletListClass}>
                  <li>l&apos;expression de besoin clarifie</li>
                  <li>le cadrage structure</li>
                  <li>le cahier des charges formalise</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour approfondir, voir{" "}
                  <Link href="/ressources/cahier-des-charges-vs-expression-de-besoin/" className={inlineSeoLinkClass}>
                    cahier des charges vs expression de besoin
                  </Link>{" "}
                  et{" "}
                  <Link
                    href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/"
                    className={inlineSeoLinkClass}
                  >
                    exemple de cahier des charges fonctionnel
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
                    <span className="font-semibold text-white">Confondre besoin et solution.</span> Dire « il faut un
                    nouvel outil » n&apos;est pas cadrer.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Cadrer trop large.</span> Un cadrage trop vaste rend le
                    sujet difficile à tenir.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Cadrer trop vite.</span> Passer à la formalisation sans
                    assez travailler l&apos;existant produit des documents fragiles.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Laisser trop d&apos;implicite.</span> Quand les contraintes,
                    priorités ou critères restent implicites, la suite devient plus incertaine.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Vouloir consulter avant de formuler.</span> Consulter des
                    prestataires avant d&apos;avoir clarifié le besoin conduit souvent à comparer des réponses sur des bases
                    inégales.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="suffisant-title">
                <h2 id="suffisant-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si le cadrage est suffisant
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage est généralement assez avancé quand on peut répondre clairement à ces questions :
                </p>
                <ul className={bulletListClass}>
                  <li>de quoi parle-t-on exactement ?</li>
                  <li>quel problème traite-t-on vraiment ?</li>
                  <li>pourquoi ce sujet doit-il être engagé maintenant ?</li>
                  <li>quel est le périmètre retenu ?</li>
                  <li>quelles sont les contraintes à intégrer ?</li>
                  <li>qui est impliqué ?</li>
                  <li>quels sont les arbitrages encore ouverts ?</li>
                  <li>sur quoi jugera-t-on qu&apos;une solution ou un projet est adapté ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si plusieurs de ces réponses restent trop floues, alors le cadrage n&apos;est probablement pas encore
                  suffisant.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="impact-title">
                <h2 id="impact-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que le cadrage change concrètement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon cadrage ne garantit pas le succès du projet. Mais il améliore fortement la qualité de départ.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il permet :</p>
                <ul className={bulletListClass}>
                  <li>de mieux aligner les acteurs</li>
                  <li>de mieux préparer la décision</li>
                  <li>de mieux consulter</li>
                  <li>de mieux comparer</li>
                  <li>de mieux lancer</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il réduit aussi plusieurs risques :</p>
                <ul className={bulletListClass}>
                  <li>démarrer sur un besoin mal formulé</li>
                  <li>changer de cible en cours de route</li>
                  <li>consulter sur des bases fragiles</li>
                  <li>piloter un projet dont les fondations restent incertaines</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="nous-title">
                <h2 id="nous-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous faisons dans cette phase
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand nous intervenons en cadrage, nous ne cherchons pas à produire un document de plus.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous cherchons à faire trois choses :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le sujet réel</li>
                  <li>structurer le besoin</li>
                  <li>préparer une base de travail sérieuse pour la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon les cas, cela peut déboucher sur :</p>
                <ul className={bulletListClass}>
                  <li>une note de cadrage</li>
                  <li>une roadmap</li>
                  <li>un cahier des charges</li>
                  <li>une préparation plus structurée de la mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre objectif n&apos;est pas de rigidifier le projet. Notre objectif est de lui donner une base plus
                  lisible, plus partageable et plus exploitable. Pour un cas concret, voir{" "}
                  <Link
                    href="/cas-clients/structuration-dun-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    ce cas client de structuration d&apos;un besoin avant consultation
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cadrer un projet industriel, c&apos;est éviter de demander à l&apos;exécution de compenser ce que l&apos;amont n&apos;a
                  pas clarifié.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C&apos;est une étape de discernement autant que de structuration. Elle sert à :</p>
                <ul className={bulletListClass}>
                  <li>reformuler le sujet</li>
                  <li>décrire l&apos;existant</li>
                  <li>clarifier l&apos;objectif</li>
                  <li>définir le périmètre</li>
                  <li>identifier contraintes et risques</li>
                  <li>poser les critères de décision</li>
                  <li>formaliser une base exploitable</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C&apos;est cette qualité de départ qui rend ensuite la consultation, le choix et la mise en œuvre beaucoup
                  plus solides.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet existe déjà mais reste encore trop flou pour être lancé proprement, c&apos;est généralement
                  qu&apos;un travail de cadrage devient utile.
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-final-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-final-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de structurer un sujet avant de lancer la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises qui ont besoin de clarifier un besoin, formaliser les bonnes
                  priorités et préparer un projet sur des bases solides.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Découvrir notre approche de cadrage</Link>
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
