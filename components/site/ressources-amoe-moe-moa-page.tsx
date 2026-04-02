import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const RessourceAmoeMoeMoaMeta = {
  title: "AMOE, MOE, MOA : quelle différence ? | AEGENS",
  description:
    "Comprendre la différence entre MOA, MOE et AMOE : rôles, responsabilités, limites, points de recouvrement et erreurs fréquentes dans les projets.",
}

export function RessourceAmoeMoeMoaPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/ressources" },
              { label: "AMOE, MOE, MOA : quelle différence" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                AMOE, MOE, MOA : quelle différence ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Les termes MOA, MOE et AMOE sont très utilisés dans les projets. Ils sont aussi très souvent mal
                compris.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le problème n&apos;est pas seulement théorique. Quand ces rôles sont mal définis, le projet se fragilise
                très vite :
              </p>
              <ul className={bulletListClass}>
                <li>les responsabilités deviennent floues</li>
                <li>les décisions remontent mal</li>
                <li>la coordination se dégrade</li>
                <li>et chacun pense que l&apos;autre porte un sujet non clairement attribué</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Avant même de définir les sigles, il faut comprendre ceci : MOA, MOE et AMOE ne sont pas des titres
                décoratifs. Ce sont des rôles de projet. Et si ces rôles ne sont pas définis précisément, le projet
                devient plus difficile à tenir.
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

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="article-title">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="usage-title">
                <h2 id="usage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ces termes sont souvent mal utilisés
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces termes viennent historiquement du monde de la construction et de la commande publique, mais ils
                  ont été largement repris dans les projets informatiques, organisationnels et de transformation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Hors de leur cadre juridique initial, ils sont parfois utilisés comme des raccourcis vagues. On
                  parle de MOA, de MOE ou d&apos;AMOA comme si leur sens allait de soi, alors qu&apos;il faut toujours préciser
                  la portée réelle de chaque rôle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans les faits, on rencontre souvent trois situations problématiques :
                </p>
                <ul className={bulletListClass}>
                  <li>la MOA pense qu&apos;elle a délégué des décisions qu&apos;elle doit encore porter</li>
                  <li>la MOE est attendue sur des arbitrages qui ne relèvent pas d&apos;elle</li>
                  <li>
                    l&apos;assistance est censée faire avancer un projet sans que son périmètre réel soit clarifié
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="moa-title">
                <h2 id="moa-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;est la MOA
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La MOA, ou maîtrise d&apos;ouvrage, est le rôle qui porte le besoin et la finalité du projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Autrement dit, la MOA répond aux questions suivantes :</p>
                <ul className={bulletListClass}>
                  <li>pourquoi fait-on ce projet ?</li>
                  <li>quel besoin cherche-t-on à couvrir ?</li>
                  <li>quels résultats attend-on ?</li>
                  <li>quel niveau d&apos;engagement accepte-t-on ?</li>
                  <li>quels arbitrages majeurs relèvent de l&apos;entreprise ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Même lorsqu&apos;il y a des assistants ou des prestataires, certaines décisions restent du ressort de la
                  maîtrise d&apos;ouvrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un projet d&apos;entreprise, la MOA est donc :
                </p>
                <ul className={bulletListClass}>
                  <li>le donneur d&apos;ordre</li>
                  <li>le porteur du besoin</li>
                  <li>le responsable des grandes décisions</li>
                  <li>le garant de la finalité du projet</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="moe-title">
                <h2 id="moe-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;est la MOE
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La MOE, ou maîtrise d&apos;œuvre, est le rôle qui conçoit, organise ou réalise la réponse au besoin
                  défini par la maîtrise d&apos;ouvrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Transposé aux projets d&apos;entreprise, cela veut dire que la MOE est du côté de la réponse à mettre en
                  œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle répond à des questions comme :</p>
                <ul className={bulletListClass}>
                  <li>comment traduire le besoin en dispositif concret ?</li>
                  <li>comment concevoir la solution ou l&apos;organisation cible ?</li>
                  <li>comment réaliser ce qui a été demandé ?</li>
                  <li>comment exécuter dans les conditions prévues ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La MOE peut être :</p>
                <ul className={bulletListClass}>
                  <li>interne</li>
                  <li>externe</li>
                  <li>ou mixte selon les projets</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Son rôle reste distinct de celui de la MOA : la MOE ne porte pas d&apos;abord la finalité métier ou
                  stratégique du projet, elle porte la conception et la réalisation de la réponse.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="amoe-title">
                <h2 id="amoe-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;est l&apos;AMOE
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;AMOE, ou assistance à maîtrise d&apos;œuvre, est un rôle d&apos;appui à la maîtrise d&apos;œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle ne se substitue pas à la MOE. Elle l&apos;assiste lorsque la maîtrise d&apos;œuvre doit se renforcer sur
                  certains aspects.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle intervient quand la MOE a besoin :</p>
                <ul className={bulletListClass}>
                  <li>d&apos;un renfort spécialisé</li>
                  <li>d&apos;une expertise technique</li>
                  <li>d&apos;un appui de structuration</li>
                  <li>d&apos;une capacité complémentaire sur certains volets du projet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon les contextes, cela peut concerner :</p>
                <ul className={bulletListClass}>
                  <li>l&apos;architecture</li>
                  <li>la coordination</li>
                  <li>certains volets techniques</li>
                  <li>l&apos;outillage</li>
                  <li>la documentation</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Point essentiel : l&apos;AMOE n&apos;a de sens que par rapport à une MOE clairement identifiée.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="amoa-title">
                <h2 id="amoa-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Et l&apos;AMOA dans tout ça ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Même si la question porte sur AMOE, MOE, MOA, il faut clarifier un point : dans beaucoup de projets,
                  l&apos;acteur réellement présent côté client n&apos;est pas l&apos;AMOE, mais l&apos;AMOA.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Autrement dit :</p>
                <ul className={bulletListClass}>
                  <li>la MOA porte le besoin</li>
                  <li>l&apos;AMOA aide la MOA à mieux formuler, structurer ou conduire le sujet</li>
                  <li>la MOE conçoit ou réalise la réponse</li>
                  <li>l&apos;AMOE aide la MOE sur certains volets de cette réponse</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="simple-title">
                <h2 id="simple-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La différence la plus simple
                </h2>
                <ul className={bulletListClass}>
                  <li>MOA : porte le besoin, les objectifs et les décisions de fond</li>
                  <li>MOE : conçoit et réalise la réponse au besoin</li>
                  <li>AMOE : aide la MOE à tenir son rôle sur certains aspects spécialisés</li>
                  <li>AMOA : aide la MOA à mieux formuler, cadrer ou suivre le projet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En une phrase :</p>
                <ul className={bulletListClass}>
                  <li>la MOA dit ce qu&apos;il faut obtenir</li>
                  <li>la MOE dit comment le réaliser</li>
                  <li>l&apos;AMOA aide la MOA</li>
                  <li>l&apos;AMOE aide la MOE</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="decisif-title">
                <h2 id="decisif-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi la distinction est décisive dans un projet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette distinction n&apos;est pas une question de vocabulaire. Elle conditionne la qualité du projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quand les rôles sont flous :</p>
                <ul className={bulletListClass}>
                  <li>le besoin reste mouvant</li>
                  <li>les responsabilités se chevauchent</li>
                  <li>les arbitrages remontent mal</li>
                  <li>la solution est parfois conçue avant que le besoin soit stabilisé</li>
                  <li>la mise en œuvre devient plus fragile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup de projets, la difficulté n&apos;est pas l&apos;absence d&apos;acteurs. La difficulté est
                  l&apos;absence de définition claire de ce que chacun doit réellement porter.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="moa-nondel-title">
                <h2 id="moa-nondel-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que la MOA ne doit pas déléguer sans le savoir
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La MOA peut se faire assister. Elle peut déléguer certains travaux. Mais elle ne doit pas croire
                  qu&apos;elle a transféré la responsabilité du besoin ou des arbitrages de fond.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La MOA doit rester capable de porter :
                </p>
                <ul className={bulletListClass}>
                  <li>l&apos;objectif réel</li>
                  <li>le périmètre retenu</li>
                  <li>les critères de décision</li>
                  <li>les arbitrages structurants</li>
                  <li>les choix engageants pour l&apos;organisation</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si elle ne le fait pas, la MOE ou les assistants risquent de compenser à sa place, sans légitimité
                  complète pour le faire.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="moe-limites-title">
                <h2 id="moe-limites-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que la MOE ne doit pas absorber à tort
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À l&apos;inverse, la MOE ne doit pas être chargée de résoudre seule ce qui relève d&apos;un besoin encore mal
                  formulé ou d&apos;un arbitrage non posé côté MOA.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quand cela arrive :</p>
                <ul className={bulletListClass}>
                  <li>la réponse est conçue sur des hypothèses fragiles</li>
                  <li>les choix techniques prennent la place de décisions métier</li>
                  <li>les demandes changent en cours de route</li>
                  <li>la réalisation devient plus coûteuse ou instable</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La MOE a besoin d&apos;un besoin suffisamment clarifié pour tenir correctement sa mission.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="quand-amoe-title">
                <h2 id="quand-amoe-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Dans quels cas parle-t-on réellement d&apos;AMOE
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le terme AMOE est pertinent quand la maîtrise d&apos;œuvre doit être renforcée sur des volets
                  spécifiques.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C&apos;est souvent le cas quand :</p>
                <ul className={bulletListClass}>
                  <li>le projet est techniquement dense</li>
                  <li>plusieurs expertises doivent être articulées</li>
                  <li>la MOE a besoin d&apos;un appui spécialisé</li>
                  <li>des sujets demandent une compétence ponctuelle ou transverse</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup de projets d&apos;entreprise, on utilise parfois AMOE de manière impropre pour désigner un
                  rôle de coordination côté client. Si l&apos;intervention aide d&apos;abord le client à clarifier le besoin,
                  structurer le projet ou suivre la mise en œuvre côté maîtrise d&apos;ouvrage, on est plus proche de
                  l&apos;AMOA que de l&apos;AMOE.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="erreurs-title">
                <h2 id="erreurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">
                      1. Utiliser les sigles sans définir leur portée.
                    </span>{" "}
                    Les termes MOA, MOE, AMOA ou AMOE ne suffisent pas à eux seuls ; leur contenu réel doit être
                    explicité.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      2. Appeler MOE un acteur qui fait surtout du cadrage côté client.
                    </span>{" "}
                    On mélange réponse au besoin et formulation du besoin.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      3. Croire que l&apos;assistance remplace la responsabilité.
                    </span>{" "}
                    Qu&apos;il s&apos;agisse d&apos;AMOA ou d&apos;AMOE, l&apos;assistance aide ; elle ne prend pas automatiquement la place
                    du rôle principal.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      4. Lancer la MOE alors que la MOA n&apos;a pas stabilisé le besoin.
                    </span>{" "}
                    On demande à la réalisation de compenser un amont insuffisamment clarifié.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      5. Parler d&apos;AMOE alors que la vraie question est la gouvernance projet.
                    </span>{" "}
                    Le problème est parfois l&apos;absence de clarification des rôles globaux.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="besoin-title">
                <h2 id="besoin-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir de quoi vous avez besoin
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous êtes du côté MOA si :</p>
                <ul className={bulletListClass}>
                  <li>vous portez le besoin</li>
                  <li>vous devez arbitrer</li>
                  <li>vous définissez l&apos;objectif du projet</li>
                  <li>vous engagez l&apos;organisation sur les décisions de fond</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous êtes du côté MOE si :</p>
                <ul className={bulletListClass}>
                  <li>vous concevez ou réalisez la réponse</li>
                  <li>vous portez la mise en œuvre de la solution</li>
                  <li>vous traduisez le besoin en dispositif opérationnel ou technique</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous avez besoin d&apos;AMOA si :</p>
                <ul className={bulletListClass}>
                  <li>le besoin doit être clarifié</li>
                  <li>le cadrage manque</li>
                  <li>la structuration projet doit être renforcée côté client</li>
                  <li>la maîtrise d&apos;ouvrage a besoin d&apos;aide pour piloter ou décider</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous avez besoin d&apos;AMOE si :</p>
                <ul className={bulletListClass}>
                  <li>la maîtrise d&apos;œuvre est identifiée</li>
                  <li>elle doit être renforcée sur des volets spécialisés</li>
                  <li>le sujet demande un appui technique ou opérationnel côté réalisation</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La différence entre MOA, MOE et AMOE n&apos;est pas une question de jargon. C&apos;est une question de rôle
                  dans le projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La MOA porte le besoin, les objectifs et les décisions structurantes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La MOE conçoit et réalise la réponse.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;AMOE assiste la MOE sur certains volets spécialisés.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Et, dans beaucoup de projets, l&apos;AMOA assiste la MOA dans la clarification, le cadrage ou le suivi.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En une phrase :</p>
                <ul className={bulletListClass}>
                  <li>la maîtrise d&apos;ouvrage porte le sens du projet</li>
                  <li>la maîtrise d&apos;œuvre porte sa réalisation</li>
                  <li>les assistances renforcent l&apos;un ou l&apos;autre selon le besoin</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si les rôles ne sont pas clairs, le projet perd rapidement en lisibilité. Si les rôles sont bien
                  posés, les responsabilités, les décisions et la mise en œuvre deviennent beaucoup plus solides.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parcours lié :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic
                  </Link>
                  ,{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    cadrage
                  </Link>{" "}
                  et{" "}
                  <Link href="/offres/pilotage-mise-en-oeuvre-projet-industriel/" className={inlineSeoLinkClass}>
                    pilotage
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
                  Besoin de clarifier les rôles de votre projet ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à poser un cadre clair entre besoin, réalisation et pilotage pour sécuriser la
                  décision et l&apos;exécution.
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
