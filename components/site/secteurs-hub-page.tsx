import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"
import { HubQuickSommaire } from "@/components/site/hub-quick-sommaire"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const secteursQuickItems = [
  {
    href: "/secteurs/agroalimentaire/",
    title: "Agroalimentaire",
    summary: "Cadence, qualité, traçabilité et coordination multi-équipes en environnement exigeant.",
  },
  {
    href: "/secteurs/plasturgie/",
    title: "Plasturgie",
    summary: "Méthodes, flux et pilotage dans un contexte industriel sous forte contrainte.",
  },
  {
    href: "/secteurs/metal-mecanique/",
    title: "Métal et mécanique",
    summary: "Interfaces études, méthodes, atelier et qualité à stabiliser dans l’exécution.",
  },
  {
    href: "/secteurs/sous-traitance-industrielle/",
    title: "Sous-traitance industrielle",
    summary: "Variabilité, délais clients et robustesse opérationnelle des passages interservices.",
  },
  {
    href: "/secteurs/industrie-de-process/",
    title: "Industrie de process",
    summary: "Flux continus, sécurité, conformité et coordination des décisions terrain/support.",
  },
  {
    href: "/secteurs/logistique/",
    title: "Logistique",
    summary: "Lisibilité des flux, synchronisation des étapes et qualité d’exécution multi-acteurs.",
  },
  {
    href: "/secteurs/retail/",
    title: "Retail",
    summary: "Alignement siège/réseau/terrain et tenue de la mise en œuvre dans la durée.",
  },
]

export const SecteursHubMeta = {
  title: "Secteurs d’intervention | Industrie, logistique et retail | AEGENS",
  description:
    "AEGENS accompagne l’industrie, la logistique et le retail sur des sujets de diagnostic, cadrage et pilotage de projets liés au fonctionnement opérationnel.",
}

export function SecteursHubPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Secteurs d’intervention" }]} />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Secteurs d’intervention
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Toutes les entreprises n’ont pas les mêmes contraintes. Mais certains environnements partagent une
                même exigence : le fonctionnement réel compte autant que la décision.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">C’est le cas dans :</p>
              <ul className={bulletListClass}>
                <li>l’industrie</li>
                <li>la logistique</li>
                <li>le retail</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans ces secteurs, un sujet n’existe jamais seulement sur le papier. Il se voit vite dans le réel :
              </p>
              <ul className={bulletListClass}>
                <li>dans les délais</li>
                <li>dans les passages entre équipes</li>
                <li>dans la charge</li>
                <li>dans la visibilité sur les flux</li>
                <li>dans la qualité d’exécution</li>
                <li>
                  dans la capacité à faire tenir ensemble plusieurs étapes, plusieurs acteurs, plusieurs contraintes
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est pour cette raison que nous avons choisi de concentrer notre positionnement sur ces
                environnements.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Nous n’intervenons pas sur ces secteurs parce qu’ils font bien dans un discours. Nous intervenons sur
                eux parce qu’ils imposent un niveau de lecture, de structuration et de mise en œuvre qui correspond
                exactement à notre manière de travailler.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/">Découvrir nos offres</Link>
                </Button>
              </div>
            </div>
          </section>

          <HubQuickSommaire
            title="Sommaire des secteurs"
            subtitle="Accédez directement à chaque environnement et ses réalités opérationnelles."
            items={secteursQuickItems}
          />

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="particular-approach-title">
                <h2 id="particular-approach-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ces secteurs demandent une approche particulière
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’environnements, un sujet mal cadré produit surtout du flou. Dans l’industrie, la
                  logistique ou le retail, il produit rapidement des effets concrets.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Une interface mal tenue devient :</p>
                <ul className={bulletListClass}>
                  <li>un délai</li>
                  <li>une reprise</li>
                  <li>une attente</li>
                  <li>une erreur</li>
                  <li>une ressaisie</li>
                  <li>un point de tension entre équipes</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un besoin mal défini avant consultation devient :
                </p>
                <ul className={bulletListClass}>
                  <li>une comparaison fragile</li>
                  <li>un périmètre mal tenu</li>
                  <li>une mise en œuvre plus coûteuse</li>
                  <li>une dépendance plus forte aux arbitrages tardifs</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un projet mal piloté devient :</p>
                <ul className={bulletListClass}>
                  <li>une coordination plus instable</li>
                  <li>un rythme irrégulier</li>
                  <li>une charge croissante</li>
                  <li>une exécution qui se fragilise</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, ces secteurs rendent visibles très vite ce que d’autres environnements peuvent
                  absorber plus longtemps.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est précisément pour cela qu’ils demandent :
                </p>
                <ul className={bulletListClass}>
                  <li>du diagnostic quand le fonctionnement réel manque de lisibilité</li>
                  <li>du cadrage quand le besoin doit être structuré avant décision</li>
                  <li>du pilotage quand la mise en œuvre doit être tenue jusqu’au terrain</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="what-we-look-title">
                <h2 id="what-we-look-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous regardons dans ces environnements
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quel que soit le secteur, nous ne partons pas d’abord d’un outil ou d’une solution. Nous partons du
                  réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Nous regardons notamment :</p>
                <ul className={bulletListClass}>
                  <li>les méthodes de travail</li>
                  <li>les interfaces entre équipes</li>
                  <li>les points de passage</li>
                  <li>les validations</li>
                  <li>la circulation de l’information</li>
                  <li>les ressaisies et contournements</li>
                  <li>la lisibilité des responsabilités</li>
                  <li>la visibilité sur les flux ou les processus</li>
                  <li>la qualité du besoin avant projet</li>
                  <li>la capacité du projet à tenir dans sa mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette logique reste la même d’un secteur à l’autre. Ce qui change, c’est la manière dont ces
                  difficultés se manifestent dans le quotidien.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="industry-title">
                <h2 id="industry-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Industrie
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’industrie est un environnement où les écarts de méthode, de coordination ou de visibilité coûtent
                  vite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les sujets que nous y rencontrons portent souvent sur :
                </p>
                <ul className={bulletListClass}>
                  <li>les pertes de temps entre services</li>
                  <li>les ressaisies</li>
                  <li>les méthodes non harmonisées</li>
                  <li>les validations peu lisibles</li>
                  <li>les besoins encore trop flous avant consultation</li>
                  <li>
                    les projets industriels qui existent déjà dans les têtes, mais pas encore comme projets réellement
                    cadrés
                  </li>
                  <li>les mises en œuvre qui demandent une coordination plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans l’industrie, le terrain rappelle rapidement ce qui tient et ce qui ne tient pas.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet ou un fonctionnement peuvent paraître cohérents en réunion, tout en produisant dans le
                  réel :
                </p>
                <ul className={bulletListClass}>
                  <li>des reprises</li>
                  <li>des attentes</li>
                  <li>des circuits parallèles</li>
                  <li>des écarts entre théorie et pratique</li>
                  <li>une surcharge diffuse</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi notre travail y prend souvent la forme d’un diagnostic du fonctionnement réel, d’un
                  cadrage rigoureux avant consultation ou d’un pilotage structuré de la mise en œuvre.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pages secteurs associées :</p>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/secteurs/agroalimentaire/" className={inlineSeoLinkClass}>
                      Agroalimentaire
                    </Link>
                  </li>
                  <li>
                    <Link href="/secteurs/plasturgie/" className={inlineSeoLinkClass}>
                      Plasturgie
                    </Link>
                  </li>
                  <li>
                    <Link href="/secteurs/metal-mecanique/" className={inlineSeoLinkClass}>
                      Métal / mécanique
                    </Link>
                  </li>
                  <li>
                    <Link href="/secteurs/sous-traitance-industrielle/" className={inlineSeoLinkClass}>
                      Sous-traitance industrielle
                    </Link>
                  </li>
                  <li>
                    <Link href="/secteurs/industrie-de-process/" className={inlineSeoLinkClass}>
                      Industrie de process
                    </Link>
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="logistics-title">
                <h2 id="logistics-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Logistique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La logistique rend visibles très rapidement les défauts de coordination, de visibilité et de tenue
                  des flux.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les sujets que nous y rencontrons concernent souvent :
                </p>
                <ul className={bulletListClass}>
                  <li>la lisibilité des étapes</li>
                  <li>les interfaces entre exploitation, support et pilotage</li>
                  <li>le besoin de structurer certains circuits d’information</li>
                  <li>la difficulté à suivre un flux de manière suffisamment stable</li>
                  <li>les pertes de temps liées à des validations, transmissions ou méthodes peu homogènes</li>
                  <li>
                    les projets qui doivent être mieux cadrés avant de lancer une solution ou un déploiement
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans un environnement logistique, la performance ne dépend pas seulement d’un outil ou d’une équipe.
                  Elle dépend aussi de la qualité de passage entre les étapes, de la capacité à voir où en est le flux
                  et de la cohérence entre la méthode officielle et la pratique réelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet n’est donc pas seulement aller plus vite. Le sujet est de rendre le fonctionnement plus
                  lisible, plus cohérent et plus tenable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Page secteur associée :{" "}
                  <Link href="/secteurs/logistique/" className={inlineSeoLinkClass}>
                    Logistique
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="retail-title">
                <h2 id="retail-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Retail
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le retail partage avec l’industrie et la logistique une contrainte forte : ce qui ne tient pas dans
                  l’organisation finit par se voir très vite dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les sujets que nous y rencontrons portent souvent sur :
                </p>
                <ul className={bulletListClass}>
                  <li>l’articulation entre terrain, support et pilotage</li>
                  <li>les méthodes de travail qui se diversifient trop</li>
                  <li>les besoins de structuration avant un projet ou une évolution d’organisation</li>
                  <li>la visibilité sur certains flux ou enchaînements</li>
                  <li>
                    la difficulté à faire tenir un projet quand plusieurs niveaux d’acteurs doivent avancer ensemble
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans le retail, les écarts se paient souvent en reprises, manque de fluidité, hétérogénéité
                  d’exécution, dépendance à des relais locaux, ou difficulté à maintenir une cohérence entre la
                  décision centrale et la réalité du terrain.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pourquoi l’enjeu n’est pas seulement de définir une intention. L’enjeu est de structurer un
                  cadre capable de tenir dans l’exécution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Page secteur associée :{" "}
                  <Link href="/secteurs/retail/" className={inlineSeoLinkClass}>
                    Retail
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="common-points-title">
                <h2 id="common-points-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ces secteurs ont en commun
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Même si leurs réalités sont différentes, ces environnements partagent plusieurs caractéristiques
                  fortes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le réel y compte plus que le discours
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un sujet ne vaut que s’il tient dans le fonctionnement quotidien.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les interfaces y sont décisives
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La qualité d’exécution dépend souvent moins d’une équipe isolée que de la qualité des passages entre
                  équipes, services ou étapes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les écarts s’y accumulent vite
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une petite dégradation locale peut produire des effets beaucoup plus larges à l’échelle du flux
                  global.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La mise en œuvre y est une vraie épreuve de vérité
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet bien pensé mais mal tenu se voit rapidement :
                </p>
                <ul className={bulletListClass}>
                  <li>dans le rythme</li>
                  <li>dans la charge</li>
                  <li>dans les reprises</li>
                  <li>dans les validations</li>
                  <li>dans les tensions</li>
                  <li>dans la perte de lisibilité</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est pour cela que notre manière de travailler, partir du réel, clarifier, structurer, faire
                  avancer, est particulièrement adaptée à ces secteurs.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="not-bring-title">
                <h2 id="not-bring-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que nous n’apportons pas selon les secteurs
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous n’arrivons pas avec une recette sectorielle générique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous n’appliquons pas non plus un discours figé du type :
                </p>
                <ul className={bulletListClass}>
                  <li>vos process doivent être optimisés</li>
                  <li>il faut digitaliser</li>
                  <li>il faut transformer</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre travail n’est pas de plaquer une réponse standard sur un secteur.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Notre travail est de comprendre :
                </p>
                <ul className={bulletListClass}>
                  <li>comment le sujet se manifeste dans votre environnement</li>
                  <li>à quel niveau il se situe réellement</li>
                  <li>ce qui relève d’un diagnostic</li>
                  <li>ce qui relève d’un cadrage</li>
                  <li>ce qui relève d’un pilotage de mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, nous ne partons pas du secteur pour forcer une méthode. Nous partons du secteur pour
                  lire plus justement la réalité du sujet.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="scope-title">
                <h2 id="scope-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si votre secteur entre dans notre périmètre
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon critère n’est pas uniquement votre code NAF ou votre catégorie. Le bon critère est le type de
                  réalité que vous devez traiter.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous sommes particulièrement pertinents lorsque :
                </p>
                <ul className={bulletListClass}>
                  <li>votre fonctionnement dépend fortement de la coordination entre équipes</li>
                  <li>les pertes de temps, validations ou ressaisies ont un impact opérationnel direct</li>
                  <li>les méthodes de travail et les interfaces comptent autant que les outils</li>
                  <li>un projet doit tenir dans des contraintes terrain réelles</li>
                  <li>la qualité de mise en œuvre compte autant que la qualité de décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si c’est votre cas, alors le sujet se situe très probablement dans le type d’environnement pour
                  lequel notre approche a été pensée.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="discover-sector-pages-title">
                <h2
                  id="discover-sector-pages-title"
                  className="ae-heading text-2xl sm:text-3xl font-bold leading-tight"
                >
                  Les pages secteurs à découvrir
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette section se décline en pages plus spécifiques pour préciser les réalités de chaque
                  environnement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Industrie</h3>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/secteurs/agroalimentaire/" className={inlineSeoLinkClass}>
                      Agroalimentaire
                    </Link>
                  </li>
                  <li>
                    <Link href="/secteurs/plasturgie/" className={inlineSeoLinkClass}>
                      Plasturgie
                    </Link>
                  </li>
                  <li>
                    <Link href="/secteurs/metal-mecanique/" className={inlineSeoLinkClass}>
                      Métal / mécanique
                    </Link>
                  </li>
                  <li>
                    <Link href="/secteurs/sous-traitance-industrielle/" className={inlineSeoLinkClass}>
                      Sous-traitance industrielle
                    </Link>
                  </li>
                  <li>
                    <Link href="/secteurs/industrie-de-process/" className={inlineSeoLinkClass}>
                      Industrie de process
                    </Link>
                  </li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Logistique</h3>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/secteurs/logistique/" className={inlineSeoLinkClass}>
                      Logistique
                    </Link>
                  </li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Retail</h3>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/secteurs/retail/" className={inlineSeoLinkClass}>
                      Retail
                    </Link>
                  </li>
                </ul>

                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ces pages permettent de lire plus finement les contraintes sectorielles, les types de problématiques
                  récurrentes, et la manière dont diagnostic, cadrage et pilotage s’y appliquent concrètement.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous intervenons principalement dans trois grands environnements :
                </p>
                <ul className={bulletListClass}>
                  <li>industrie</li>
                  <li>logistique</li>
                  <li>retail</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce choix n’est pas marketing. Il correspond à des contextes où :
                </p>
                <ul className={bulletListClass}>
                  <li>le fonctionnement réel compte</li>
                  <li>les interfaces sont décisives</li>
                  <li>les écarts coûtent vite</li>
                  <li>les sujets demandent autant de lecture terrain que de structuration projet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre entreprise évolue dans l’un de ces environnements et fait face à un fonctionnement difficile
                  à lire, un besoin encore trop flou, un projet mal cadré, ou une mise en œuvre difficile à tenir,
                  alors cette section est le bon point d’entrée pour voir comment notre approche s’applique à votre
                  réalité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/" className={inlineSeoLinkClass}>
                    offres
                  </Link>
                  ,{" "}
                  <Link href="/problematiques/" className={inlineSeoLinkClass}>
                    problématiques
                  </Link>{" "}
                  et{" "}
                  <Link href="/cas-clients/" className={inlineSeoLinkClass}>
                    cas clients
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
                  Besoin d’un regard structuré sur votre contexte secteur ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier le sujet et choisir le bon niveau entre diagnostic, cadrage et
                  pilotage.
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
