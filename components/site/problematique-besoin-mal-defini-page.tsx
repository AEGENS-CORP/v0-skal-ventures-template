import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ProblematiqueBesoinMalDefiniMeta = {
  title: "Besoin mal défini avant consultation prestataires | AEGENS",
  description:
    "Un besoin mal défini avant consultation produit offres difficiles à comparer, critères flous et décisions fragiles. Comprendre les signes et les risques.",
}

export function ProblematiqueBesoinMalDefiniPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Problématiques", href: "/problematiques" },
              { label: "Besoin mal défini avant consultation prestataires" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Besoin mal défini avant consultation prestataires
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un besoin mal défini avant consultation ne produit pas seulement un peu de flou.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Il fausse toute la suite.</p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                En apparence, tout semble pourtant déjà lancé :
              </p>
              <ul className={bulletListClass}>
                <li>le sujet est identifié</li>
                <li>une consultation est envisagée</li>
                <li>des prestataires potentiels sont connus</li>
                <li>des échanges ont parfois déjà commencé</li>
                <li>l’entreprise veut avancer</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Mais si le besoin n’est pas suffisamment clarifié avant cette étape, la consultation ne joue plus son
                rôle.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle ne sert plus à comparer des réponses à un besoin commun.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle sert à mettre côte à côte des interprétations différentes d’un sujet encore insuffisamment posé.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit : si le besoin est mal défini, la consultation ne sécurise pas la décision.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle déplace l’incertitude dans les offres, puis dans la comparaison, puis dans l’exécution.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">
                    Découvrir notre offre cadrage
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="grave-title">
                <h2 id="grave-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce sujet est plus grave qu’il n’en a l’air
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, on pense qu’une consultation va aider à clarifier le besoin.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est vrai à la marge, mais seulement si le besoin est déjà suffisamment structuré pour que les
                  réponses soient comparables.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sinon, ce qui se passe est très différent :
                </p>
                <ul className={bulletListClass}>
                  <li>chaque prestataire reconstruit le sujet à sa manière</li>
                  <li>chacun répond avec son propre périmètre</li>
                  <li>les hypothèses de départ diffèrent</li>
                  <li>les livrables proposés ne sont pas les mêmes</li>
                  <li>la charge côté client varie fortement</li>
                  <li>le prix lui-même devient difficile à lire</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela veut dire qu’un besoin mal défini ne produit pas simplement de moins bonnes réponses.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il rend la comparaison structurellement plus fragile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Et dans un projet industriel, logistique ou retail, cette fragilité se paie ensuite :
                </p>
                <ul className={bulletListClass}>
                  <li>en incompréhensions</li>
                  <li>en écarts de périmètre</li>
                  <li>en corrections tardives</li>
                  <li>en renégociations</li>
                  <li>en surcharge côté client</li>
                  <li>parfois en choix mal calibré dès le départ</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="definition-title">
                <h2 id="definition-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’on appelle réellement un besoin mal défini
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un besoin mal défini n’est pas seulement un besoin mal écrit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est un besoin dont plusieurs dimensions essentielles restent trop implicites au moment où l’on
                  veut consulter.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En pratique, cela veut dire que l’entreprise ne peut pas encore répondre clairement à des questions
                  pourtant simples :
                </p>
                <ul className={bulletListClass}>
                  <li>quel problème cherche-t-on exactement à traiter ?</li>
                  <li>quel résultat attend-on réellement ?</li>
                  <li>quel est le périmètre du sujet ?</li>
                  <li>quelles contraintes doivent être intégrées ?</li>
                  <li>qui est concerné ?</li>
                  <li>quels livrables ou quel niveau d’intervention attend-on ?</li>
                  <li>sur quels critères comparera-t-on les réponses ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, le problème ne vient pas seulement d’un manque de formalisme.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème vient d’un manque de structuration du sujet lui-même.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="signes-title">
                <h2 id="signes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signes qu’un besoin est encore trop flou pour être consulté
                </h2>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le sujet change selon l’interlocuteur</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand plusieurs personnes internes expliquent la consultation à venir, mais ne décrivent pas
                  exactement le même besoin, le signal est très fort.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’un parle d’un problème d’outil. L’autre parle d’un problème de fluidité. Un troisième parle de
                  suivi, de traçabilité ou de méthode.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce cas, la consultation ne part pas d’un besoin partagé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle part d’un agrégat de lectures partielles.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  La solution est déjà au centre, avant même que le besoin soit stabilisé
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet est parfois déjà formulé comme :
                </p>
                <ul className={bulletListClass}>
                  <li>il nous faut un outil</li>
                  <li>il faut un prestataire</li>
                  <li>il faut une solution</li>
                  <li>il faut digitaliser</li>
                  <li>il faut automatiser</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Or cette formulation inverse l’ordre des choses.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le périmètre n’est pas réellement posé</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On veut consulter, mais on ne sait pas encore clairement :
                </p>
                <ul className={bulletListClass}>
                  <li>quelles équipes sont concernées</li>
                  <li>quelles étapes sont incluses</li>
                  <li>ce qui relève d’une première phase</li>
                  <li>ce qui reste hors sujet</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans cette configuration, deux prestataires peuvent paraître répondre à la même demande alors qu’ils
                  n’interviennent pas du tout sur le même objet.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les attendus ne sont pas explicites</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Que demande-t-on exactement ?</p>
                <ul className={bulletListClass}>
                  <li>un diagnostic ?</li>
                  <li>un cadrage ?</li>
                  <li>une recommandation ?</li>
                  <li>un cahier des charges ?</li>
                  <li>une mise en œuvre ?</li>
                  <li>un accompagnement de bout en bout ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si ce point n’est pas clair, les réponses seront forcément hétérogènes.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Les critères de comparaison n’existent pas encore
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est un signe fort.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand l’entreprise ne sait pas encore sur quels critères elle choisira, cela veut dire qu’elle n’a
                  pas encore suffisamment clarifié ce qui compte vraiment dans la réponse.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="prestataires-title">
                <h2 id="prestataires-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi les prestataires ne peuvent pas corriger ce problème à votre place
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une illusion très répandue.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On pense parfois : consultons, nous verrons bien ce qui ressort.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette logique peut sembler pragmatique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En réalité, elle transfère vers le marché une ambiguïté qui devrait être traitée en amont.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Chaque prestataire reconstruit alors le besoin selon :
                </p>
                <ul className={bulletListClass}>
                  <li>sa compréhension</li>
                  <li>son offre</li>
                  <li>sa méthode</li>
                  <li>ses références</li>
                  <li>son modèle économique</li>
                  <li>ses hypothèses implicites</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le résultat n’est pas neutre :
                </p>
                <ul className={bulletListClass}>
                  <li>l’un répondra très large</li>
                  <li>l’autre très serré</li>
                  <li>l’un intégrera du cadrage</li>
                  <li>l’autre supposera que tout est déjà cadré</li>
                  <li>l’un inclura du pilotage</li>
                  <li>l’autre le laissera entièrement au client</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce n’est pas un défaut des prestataires.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est la conséquence normale d’un besoin encore trop ouvert.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="produit-title">
                <h2 id="produit-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’un besoin mal défini produit dans la consultation
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Les effets sont presque toujours les mêmes.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des offres difficilement comparables</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les réponses parlent du même sujet en apparence, mais :
                </p>
                <ul className={bulletListClass}>
                  <li>pas du même périmètre</li>
                  <li>pas du même niveau d’intervention</li>
                  <li>pas du même niveau de responsabilité</li>
                  <li>pas des mêmes hypothèses de départ</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Un prix trompeur</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le prix devient très difficile à interpréter.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pourquoi ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce qu’il ne porte plus sur la même chose.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Une charge interne mal anticipée</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le besoin est mal défini, une partie de la charge réelle est souvent transférée implicitement
                  vers l’entreprise :
                </p>
                <ul className={bulletListClass}>
                  <li>préparation</li>
                  <li>coordination</li>
                  <li>données</li>
                  <li>arbitrages</li>
                  <li>conduite du changement</li>
                  <li>pilotage</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Des arbitrages tardifs</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce qui aurait dû être clarifié avant consultation réapparaît ensuite :
                </p>
                <ul className={bulletListClass}>
                  <li>en fait, on veut aussi…</li>
                  <li>ce point n’était pas compris comme ça</li>
                  <li>ce périmètre-là devait être inclus</li>
                  <li>nous pensions que c’était prévu</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Une décision plus fragile</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La décision finale repose alors moins sur une base structurée que sur :
                </p>
                <ul className={bulletListClass}>
                  <li>l’impression générale</li>
                  <li>la confiance perçue</li>
                  <li>le niveau de confort dans l’échange</li>
                  <li>une lecture approximative du prix</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="pme-title">
                <h2 id="pme-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce problème apparaît souvent en PME industrielle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une PME industrielle, ce problème est fréquent pour plusieurs raisons.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  D’abord, le sujet est souvent bien connu en interne, mais mal formalisé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le fonctionnement réel est dans les têtes. Les irritants sont connus. Les effets sont visibles.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais leur traduction en besoin structuré n’a pas encore été faite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ensuite, les projets sont souvent transverses.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le même sujet touche :</p>
                <ul className={bulletListClass}>
                  <li>opérations</li>
                  <li>méthodes</li>
                  <li>support</li>
                  <li>qualité</li>
                  <li>logistique</li>
                  <li>administratif</li>
                  <li>parfois outil ou SI</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette transversalité rend la formulation du besoin plus exigeante.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Enfin, la pression à avancer est souvent forte.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le sujet pèse déjà sur le quotidien, la tentation est grande de consulter vite pour gagner du
                  temps.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais si le besoin n’est pas prêt, cette accélération fait souvent perdre du temps ensuite.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="clarifier-title">
                <h2 id="clarifier-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut clarifier avant consultation
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de consulter, plusieurs dimensions doivent être suffisamment posées.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le problème traité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quel est le sujet exact ? Pas son habillage, pas sa traduction en solution. Le problème réel.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">L’objectif</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Que veut-on obtenir ? Quel résultat attend-on ?</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le périmètre</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Qu’est-ce qui entre ? Qu’est-ce qui n’entre pas ?</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les contraintes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Calendrier, charge interne, budget, environnement existant, dépendances, déploiement.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les parties prenantes</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Qui décide ? Qui utilise ? Qui sera impacté ? Qui devra être mobilisé ?
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les attendus de réponse</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Que demande-t-on au prestataire :</p>
                <ul className={bulletListClass}>
                  <li>compréhension</li>
                  <li>méthode</li>
                  <li>livrables</li>
                  <li>organisation de mission</li>
                  <li>planning</li>
                  <li>hypothèses</li>
                  <li>accompagnement</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Les critères de choix</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Sur quoi la réponse sera-t-elle jugée :</p>
                <ul className={bulletListClass}>
                  <li>compréhension du besoin</li>
                  <li>couverture du périmètre</li>
                  <li>faisabilité</li>
                  <li>méthode</li>
                  <li>équipe</li>
                  <li>coût global</li>
                  <li>charge côté client</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="eviter-title">
                <h2 id="eviter-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il ne faut pas faire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plusieurs erreurs reviennent systématiquement.
                </p>
                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Consulter pour clarifier à la place du cadrage
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est la plus fréquente.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Croire qu’un cahier des charges compensera un besoin mal pensé
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un document plus long n’améliore pas automatiquement la qualité de définition du besoin.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Définir les critères après avoir reçu les offres
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est une faiblesse majeure.</p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Chercher à aller vite sur un sujet encore instable
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela crée ensuite :</p>
                <ul className={bulletListClass}>
                  <li>plus d’allers-retours</li>
                  <li>plus de corrections</li>
                  <li>plus de charge</li>
                  <li>plus de renégociations</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Mélanger consultation, exploration et décision
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si l’on veut à la fois découvrir le marché, préciser le besoin, comparer des solutions et décider,
                  sans distinguer ces étapes, la consultation devient vite confuse.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une intervention utile permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le besoin est encore mal défini avant consultation, l’objectif n’est pas de produire encore un
                  document.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’objectif est de rendre la consultation :
                </p>
                <ul className={bulletListClass}>
                  <li>plus lisible</li>
                  <li>plus comparable</li>
                  <li>plus défendable</li>
                  <li>plus utile</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cela passe généralement par :
                </p>
                <ul className={bulletListClass}>
                  <li>la reformulation du besoin réel</li>
                  <li>la clarification de l’objectif</li>
                  <li>la définition du bon périmètre</li>
                  <li>l’explicitation des contraintes</li>
                  <li>la structuration des attendus</li>
                  <li>la préparation des critères de comparaison</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, il ne s’agit pas seulement de préparer un appel à propositions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il s’agit de remettre la décision sur une base suffisamment solide pour qu’elle ait du sens.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="concerned-title">
                <h2 id="concerned-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous êtes concerné
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet mérite généralement un vrai travail de structuration avant consultation si plusieurs
                  réponses à ces questions sont oui :
                </p>
                <ul className={bulletListClass}>
                  <li>le besoin change encore selon les interlocuteurs</li>
                  <li>la solution est déjà évoquée alors que le problème reste flou</li>
                  <li>le périmètre n’est pas complètement stabilisé</li>
                  <li>les attendus de réponse ne sont pas vraiment posés</li>
                  <li>les critères de choix ne sont pas encore définis</li>
                  <li>vous pensez que la consultation aidera à clarifier ce qui n’a pas encore été travaillé</li>
                  <li>vous sentez que les offres risquent d’être difficiles à comparer</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si c’est le cas, le sujet n’est probablement pas encore une consultation prête.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est encore un sujet de cadrage.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un besoin mal défini avant consultation fragilise toute la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il produit :</p>
                <ul className={bulletListClass}>
                  <li>des offres hétérogènes</li>
                  <li>des écarts de périmètre</li>
                  <li>des prix difficiles à lire</li>
                  <li>des critères flous</li>
                  <li>des arbitrages tardifs</li>
                  <li>une décision moins solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe n’est donc pas de consulter plus vite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est souvent de mieux structurer le besoin avant consultation :
                </p>
                <ul className={bulletListClass}>
                  <li>clarifier le problème</li>
                  <li>poser l’objectif</li>
                  <li>définir le périmètre</li>
                  <li>rendre visibles les contraintes</li>
                  <li>expliciter les attendus</li>
                  <li>préparer les critères de choix</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est cette qualité amont qui rend ensuite la consultation réellement utile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage de projet industriel
                  </Link>
                  ,{" "}
                  <Link
                    href="/ressources/comment-structurer-un-besoin-avant-consultation/"
                    className={inlineSeoLinkClass}
                  >
                    comment structurer un besoin avant consultation
                  </Link>
                  ,{" "}
                  <Link
                    href="/ressources/comment-choisir-un-prestataire-pour-un-projet-industriel/"
                    className={inlineSeoLinkClass}
                  >
                    comment choisir un prestataire
                  </Link>
                  ,{" "}
                  <Link
                    href="/modeles-checklists/checklist-consultation-prestataires/"
                    className={inlineSeoLinkClass}
                  >
                    checklist consultation prestataires
                  </Link>{" "}
                  et{" "}
                  <Link href="/contact/" className={inlineSeoLinkClass}>
                    nous contacter
                  </Link>
                  .
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de sécuriser votre consultation avant de la lancer ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à structurer le besoin, poser les critères et préparer une comparaison solide.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">
                      Voir notre offre cadrage
                    </Link>
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
