import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const RessourceCadrageVsGestionMeta = {
  title: "Cadrage vs gestion de projet : quelle différence ? | AEGENS",
  description:
    "Comprendre la différence entre cadrage et gestion de projet : objectifs, périmètre, livrables, temporalité, responsabilités et erreurs fréquentes.",
}

export function RessourceCadrageVsGestionPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/ressources" },
              { label: "Cadrage vs gestion de projet" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Cadrage vs gestion de projet : quelle différence ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La différence entre cadrage et gestion de projet est souvent mal comprise. Dans beaucoup
                d&apos;entreprises, les deux termes sont utilisés comme s&apos;ils désignaient la même chose. En pratique,
                ce n&apos;est pas le cas.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le cadrage intervient avant la gestion effective du projet. Il sert à définir les contours du sujet :
                besoin, objectifs, périmètre, parties prenantes, contraintes et premières hypothèses de mise en œuvre.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La gestion de projet couvre ensuite le cycle de vie : analyse, planification, conduite, pilotage,
                adaptation et clôture. Autrement dit :
              </p>
              <ul className={bulletListClass}>
                <li>le cadrage sert à dire ce que l&apos;on va lancer et sur quelle base</li>
                <li>la gestion de projet sert à conduire ce qui a été lancé jusqu&apos;au résultat</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cette distinction est décisive. Un grand nombre de projets se fragilisent quand le{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  cadrage
                </Link>{" "}
                est confondu avec le pilotage, ou quand la gestion de projet est censée compenser un amont
                insuffisamment clarifié.
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
              <section className={sectionClass} aria-labelledby="confusion-title">
                <h2 id="confusion-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi cette confusion est fréquente
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans les faits, plusieurs raisons expliquent pourquoi cadrage et gestion de projet sont souvent
                  mélangés.
                </p>
                <ul className={bulletListClass}>
                  <li>les deux relèvent du même univers : structurer un projet</li>
                  <li>les deux phases s&apos;enchaînent naturellement</li>
                  <li>en PME, les mêmes personnes peuvent porter plusieurs étapes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet correctement mené passe souvent par :
                </p>
                <ul className={bulletListClass}>
                  <li>une phase d&apos;analyse et de cadrage</li>
                  <li>une phase de planification</li>
                  <li>une phase de mise en œuvre</li>
                  <li>une phase de suivi et d&apos;ajustement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pourtant, la différence reste importante. Quand le cadrage est trop faible, la gestion de projet
                  hérite d&apos;un sujet déjà fragilisé :
                </p>
                <ul className={bulletListClass}>
                  <li>besoin mal formulé</li>
                  <li>périmètre flou</li>
                  <li>objectifs partiellement implicites</li>
                  <li>critères de décision insuffisants</li>
                  <li>parties prenantes mal alignées</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand la gestion de projet est trop faible, un cadrage correct ne suffit plus :
                </p>
                <ul className={bulletListClass}>
                  <li>les arbitrages ne remontent pas</li>
                  <li>le rythme se perd</li>
                  <li>la coordination se dégrade</li>
                  <li>les risques ne sont pas traités</li>
                  <li>le projet se disperse</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="cadrage-title">
                <h2 id="cadrage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;est réellement le cadrage
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage est une phase amont. Il transforme une intention, un besoin ou une difficulté perçue en
                  sujet de projet suffisamment clair pour être partagé, décidé et préparé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les définitions robustes convergent sur :
                </p>
                <ul className={bulletListClass}>
                  <li>clarification des besoins</li>
                  <li>définition des objectifs</li>
                  <li>délimitation du périmètre</li>
                  <li>identification des parties prenantes</li>
                  <li>repères sur ressources, risques et contraintes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage répond à des questions comme :
                </p>
                <ul className={bulletListClass}>
                  <li>de quoi parle-t-on exactement ?</li>
                  <li>quel problème veut-on traiter ?</li>
                  <li>pourquoi ce sujet maintenant ?</li>
                  <li>quel est l&apos;objectif réel ?</li>
                  <li>quel est le périmètre utile ?</li>
                  <li>qui est concerné ?</li>
                  <li>quelles contraintes intégrer dès le départ ?</li>
                  <li>sur quelle base décider de la suite ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette phase peut produire une note de cadrage, une expression de besoin ou un cahier des charges.
                  Pour aller plus loin :{" "}
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    comment cadrer un projet industriel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="gestion-title">
                <h2 id="gestion-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;est réellement la gestion de projet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La gestion de projet commence quand le sujet sort de la seule clarification pour entrer dans une
                  logique de conduite, de planification, de coordination et d&apos;exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle répond à des questions différentes :</p>
                <ul className={bulletListClass}>
                  <li>comment organiser le travail ?</li>
                  <li>qui fait quoi ?</li>
                  <li>à quel rythme ?</li>
                  <li>quels jalons suivre ?</li>
                  <li>quels risques surveiller ?</li>
                  <li>quels arbitrages traiter ?</li>
                  <li>comment tenir coûts, délais, ressources et qualité ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On entre alors dans :
                </p>
                <ul className={bulletListClass}>
                  <li>la gouvernance</li>
                  <li>le planning</li>
                  <li>l&apos;allocation des ressources</li>
                  <li>le suivi des risques</li>
                  <li>le pilotage des dérives</li>
                  <li>la coordination des acteurs</li>
                  <li>les indicateurs d&apos;avancement</li>
                  <li>l&apos;adaptation du plan</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette logique est détaillée ici :{" "}
                  <Link href="/ressources/comment-piloter-un-projet-industriel-en-pme/" className={inlineSeoLinkClass}>
                    comment piloter un projet industriel en PME
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="difference-simple-title">
                <h2 id="difference-simple-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La différence la plus simple
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage sert à décider ce que l&apos;on va faire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La gestion de projet sert à organiser comment on va le faire et le tenir.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage pose :</p>
                <ul className={bulletListClass}>
                  <li>le besoin</li>
                  <li>l&apos;objectif</li>
                  <li>le périmètre</li>
                  <li>les contraintes</li>
                  <li>la base de décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La gestion de projet pose ensuite :</p>
                <ul className={bulletListClass}>
                  <li>l&apos;organisation</li>
                  <li>le planning</li>
                  <li>le pilotage</li>
                  <li>les responsabilités</li>
                  <li>les ajustements</li>
                  <li>la tenue de l&apos;exécution</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="produit-cadrage-title">
                <h2 id="produit-cadrage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que le cadrage produit
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon cadrage produit d&apos;abord une lecture claire du sujet :
                </p>
                <ul className={bulletListClass}>
                  <li>quel problème traite-t-on ?</li>
                  <li>pourquoi ?</li>
                  <li>avec quels effets attendus ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il produit ensuite une base de travail :</p>
                <ul className={bulletListClass}>
                  <li>objectifs</li>
                  <li>périmètre</li>
                  <li>contraintes</li>
                  <li>parties prenantes</li>
                  <li>critères de décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il produit enfin une décision plus solide :</p>
                <ul className={bulletListClass}>
                  <li>faut-il lancer ?</li>
                  <li>faut-il recentrer ?</li>
                  <li>faut-il approfondir ?</li>
                  <li>faut-il consulter ?</li>
                  <li>faut-il formaliser un cahier des charges ?</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="produit-gestion-title">
                <h2 id="produit-gestion-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que la gestion de projet produit
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La gestion de projet produit d&apos;abord de la coordination :</p>
                <ul className={bulletListClass}>
                  <li>faire travailler plusieurs acteurs ensemble</li>
                  <li>organiser les dépendances</li>
                  <li>rythmer l&apos;avancement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle produit ensuite du suivi :</p>
                <ul className={bulletListClass}>
                  <li>jalons</li>
                  <li>risques</li>
                  <li>écarts</li>
                  <li>arbitrages</li>
                  <li>indicateurs</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle produit enfin de la continuité :</p>
                <ul className={bulletListClass}>
                  <li>garder le lien entre intention initiale et exécution réelle</li>
                  <li>ajuster sans perdre le cap</li>
                  <li>tenir le projet jusqu&apos;au résultat</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="oppose-title">
                <h2 id="oppose-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Cadrage et gestion de projet ne s&apos;opposent pas
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage n&apos;est pas totalement séparé de la gestion de projet. C&apos;est souvent une phase du cycle, ou
                  une phase juste en amont qui conditionne la qualité du reste.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais cette appartenance au même cycle ne doit pas faire disparaître leur différence de fonction.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;erreur classique consiste à considérer que la gestion de projet rattrapera un cadrage insuffisant.
                  En pratique, elle le fait mal.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet mal cadré oblige ensuite le pilote à gérer :
                </p>
                <ul className={bulletListClass}>
                  <li>des objectifs mouvants</li>
                  <li>un périmètre instable</li>
                  <li>des attentes divergentes</li>
                  <li>des décisions insuffisamment préparées</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="besoin-title">
                <h2 id="besoin-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si l&apos;on a besoin de cadrage ou de gestion de projet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous avez surtout besoin de cadrage si :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est encore flou</li>
                  <li>les objectifs ne sont pas assez clarifiés</li>
                  <li>le périmètre n&apos;est pas stable</li>
                  <li>les acteurs ne lisent pas le sujet de la même manière</li>
                  <li>la consultation ou la suite du projet n&apos;est pas prête</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous avez surtout besoin de gestion de projet si :</p>
                <ul className={bulletListClass}>
                  <li>le besoin est globalement défini</li>
                  <li>les objectifs existent déjà</li>
                  <li>le périmètre est posé</li>
                  <li>le sujet doit maintenant être organisé, planifié, suivi et coordonné</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous avez besoin des deux si :</p>
                <ul className={bulletListClass}>
                  <li>le sujet est identifié pour avancer</li>
                  <li>il reste encore fragile sur certains fondements</li>
                  <li>il nécessite déjà une organisation de l&apos;exécution</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="erreurs-title">
                <h2 id="erreurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">
                      1. Appeler gestion de projet ce qui relève encore du cadrage.
                    </span>{" "}
                    On lance une dynamique de suivi alors que le sujet n&apos;est pas encore assez défini.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      2. Produire un document de cadrage trop théorique.
                    </span>{" "}
                    Le texte devient long mais peu utile pour la décision.
                  </li>
                  <li>
                    <span className="font-semibold text-white">3. Considérer que le cadrage suffit à lui seul.</span>{" "}
                    Un projet bien défini peut échouer s&apos;il n&apos;est pas conduit correctement ensuite.
                  </li>
                  <li>
                    <span className="font-semibold text-white">4. Démarrer la gestion de projet trop tôt.</span> Quand
                    l&apos;amont n&apos;est pas stabilisé, le pilotage absorbe des débats qui auraient dû être tranchés avant.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      5. Ne pas formaliser les points de passage entre les deux.
                    </span>{" "}
                    Il faut distinguer ce qui est clarifié, ce qui reste à arbitrer et quand on passe de la définition
                    à la conduite.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="documents-title">
                <h2 id="documents-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quelle place pour la note de cadrage, la charte projet et le cahier des charges
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces documents servent précisément à faire le lien entre cadrage et gestion de projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La note de cadrage sert à poser :</p>
                <ul className={bulletListClass}>
                  <li>le contexte</li>
                  <li>les objectifs</li>
                  <li>le périmètre</li>
                  <li>les enjeux</li>
                  <li>les acteurs</li>
                  <li>les premiers repères de gouvernance</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La charte projet formalise l&apos;autorisation du projet et fixe un cap partagé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cahier des charges formalise plus précisément les besoins, objectifs, contraintes, portée et
                  attentes fonctionnelles.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces documents n&apos;assurent pas à eux seuls une bonne gestion de projet, mais ils améliorent fortement
                  la qualité du départ.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Support pratique :{" "}
                  <Link href="/modeles-checklists/checklist-cadrage-projet-industriel/" className={inlineSeoLinkClass}>
                    checklist cadrage projet industriel
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cadrage et la gestion de projet sont liés, mais ils ne désignent pas la même chose.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage sert à :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le besoin</li>
                  <li>définir les objectifs</li>
                  <li>poser le périmètre</li>
                  <li>identifier les contraintes</li>
                  <li>créer une base de décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La gestion de projet sert à :</p>
                <ul className={bulletListClass}>
                  <li>organiser l&apos;exécution</li>
                  <li>coordonner les acteurs</li>
                  <li>suivre l&apos;avancement</li>
                  <li>gérer les risques</li>
                  <li>arbitrer</li>
                  <li>tenir le projet jusqu&apos;au résultat</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En une phrase : le cadrage donne au projet sa base, la gestion de projet lui donne sa tenue.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet est encore trop flou pour être bien lancé, le besoin de{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    cadrage
                  </Link>{" "}
                  est probablement prioritaire. S&apos;il est déjà défini mais peine à avancer de manière lisible, alors
                  le{" "}
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                    pilotage de mise en œuvre
                  </Link>{" "}
                  devient le vrai sujet.
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-final-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-final-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de clarifier ce qui relève du cadrage et du pilotage ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à poser une base claire en amont et à structurer l&apos;exécution ensuite, selon le
                  niveau réel de votre sujet.
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
