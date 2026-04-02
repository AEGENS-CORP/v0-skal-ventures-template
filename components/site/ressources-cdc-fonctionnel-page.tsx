import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const RessourceCdcFonctionnelMeta = {
  title: "Comment rédiger un cahier des charges fonctionnel | AEGENS",
  description:
    "Méthode claire pour rédiger un cahier des charges fonctionnel utile : objectifs, périmètre, besoins, contraintes, parties prenantes, critères de choix et erreurs à éviter.",
}

export function RessourceCdcFonctionnelPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/ressources" },
              { label: "Comment rédiger un cahier des charges fonctionnel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Comment rédiger un cahier des charges fonctionnel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Rédiger un cahier des charges fonctionnel, ce n&apos;est pas produire un document de plus pour formaliser
                un projet. C&apos;est transformer un besoin encore partiellement diffus en base de travail exploitable.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le cahier des charges fonctionnel sert d&apos;abord à cela : exprimer clairement ce que le projet doit
                permettre, pour qui, dans quel périmètre, avec quelles contraintes et selon quels critères de réussite.
                Les guides les plus sérieux convergent sur ce point : le CDC fonctionnel décrit les besoins, les
                objectifs, les attentes et les contours du projet, tandis que le technique vient ensuite traduire ces
                besoins en solutions d&apos;implémentation.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un cahier des charges fonctionnel bien rédigé ne dit pas d&apos;abord comment la solution doit être
                construite. Il dit d&apos;abord ce qu&apos;elle doit permettre.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Un bon CDC sert à :</p>
              <ul className={bulletListClass}>
                <li>clarifier le besoin</li>
                <li>aligner les parties prenantes</li>
                <li>poser les objectifs</li>
                <li>définir le périmètre</li>
                <li>expliciter les contraintes</li>
                <li>créer une base de référence pour la consultation, le choix ou la mise en œuvre</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Pour préparer cette phase, vous pouvez aussi lire{" "}
                <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                  comment cadrer un projet industriel
                </Link>
                .
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

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="article-title">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="utilite-title">
                <h2 id="utilite-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  À quoi sert réellement un cahier des charges fonctionnel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cahier des charges fonctionnel a plusieurs fonctions, mais elles se regroupent autour d&apos;une même
                  idée : rendre le projet compréhensible avant de le rendre exécutable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il sert d&apos;abord à clarifier.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Sans clarification, chacun lit le besoin à sa manière : le décideur parle enjeu, l&apos;utilisateur parle
                  difficulté, le prestataire comprend une solution, et l&apos;équipe projet tente de relier l&apos;ensemble.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le CDC permet de ramener le projet à une base commune.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il sert ensuite à cadrer :</p>
                <ul className={bulletListClass}>
                  <li>poser l&apos;objectif</li>
                  <li>définir le périmètre</li>
                  <li>préciser les attentes</li>
                  <li>clarifier les contraintes</li>
                  <li>identifier les acteurs concernés</li>
                  <li>donner un langage partagé à la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il sert enfin à préparer :</p>
                <ul className={bulletListClass}>
                  <li>la consultation</li>
                  <li>la comparaison de scénarios</li>
                  <li>le dialogue avec des prestataires</li>
                  <li>la décision</li>
                  <li>et la mise en œuvre</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="fonctionnel-title">
                <h2 id="fonctionnel-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Fonctionnel ne veut pas dire technique
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C&apos;est l&apos;une des confusions les plus fréquentes. Un cahier des charges fonctionnel ne décrit pas
                  d&apos;abord l&apos;architecture technique, les composants ou les modalités détaillées d&apos;implémentation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il décrit ce que le projet doit rendre possible du point de vue du besoin, des usages et des attentes
                  métier. Cette distinction est décisive en industrie, logistique et retail, car les projets y sont
                  souvent tirés trop vite vers :
                </p>
                <ul className={bulletListClass}>
                  <li>l&apos;outil</li>
                  <li>la solution</li>
                  <li>le prestataire</li>
                  <li>l&apos;automatisation</li>
                  <li>l&apos;intégration</li>
                  <li>la technique</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que le besoin n&apos;est pas correctement formulé, la technique répond souvent à une interprétation
                  du problème, pas nécessairement au problème lui-même.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un CDC bien rédigé oblige à revenir aux questions structurantes :
                </p>
                <ul className={bulletListClass}>
                  <li>quel est le sujet réel ?</li>
                  <li>que doit-on améliorer, permettre ou sécuriser ?</li>
                  <li>qui est concerné ?</li>
                  <li>dans quelles limites ?</li>
                  <li>avec quels résultats attendus ?</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="quand-title">
                <h2 id="quand-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand faut-il rédiger un cahier des charges fonctionnel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il devient utile lorsque le projet a dépassé le stade de l&apos;intuition, mais n&apos;est pas encore assez
                  structuré pour être exécuté ou confié dans de bonnes conditions.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En pratique, il devient utile lorsque :</p>
                <ul className={bulletListClass}>
                  <li>le besoin existe, mais reste interprété différemment selon les interlocuteurs</li>
                  <li>plusieurs scénarios sont possibles et doivent être comparés</li>
                  <li>une consultation de prestataires ou de solutions se prépare</li>
                  <li>le projet touche plusieurs équipes ou plusieurs usages</li>
                  <li>le périmètre, les contraintes ou les objectifs doivent être posés proprement</li>
                  <li>le risque de malentendu en aval devient significatif</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette étape est encore plus solide quand elle s&apos;appuie sur un{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    cadrage projet structuré
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="contenu-title">
                <h2 id="contenu-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;un cahier des charges fonctionnel doit contenir
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il n&apos;existe pas un plan unique valable pour tous les projets. En revanche, un bon CDC contient
                  presque toujours les éléments suivants.
                </p>

                <div className="space-y-4">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Le contexte</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut rappeler d&apos;où part le sujet :</p>
                    <ul className={bulletListClass}>
                      <li>l&apos;environnement du projet</li>
                      <li>la situation actuelle</li>
                      <li>les difficultés observées</li>
                      <li>les enjeux qui motivent la démarche</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Le problème ou le besoin</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le cœur du document :</p>
                    <ul className={bulletListClass}>
                      <li>quel besoin doit être couvert</li>
                      <li>quelle difficulté doit être traitée</li>
                      <li>quel résultat fonctionnel est attendu</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette partie doit rester centrée sur le besoin, pas sur la solution imaginée.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Les objectifs</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Les objectifs doivent être formulés de façon claire et exploitable. Ils répondent à la question :
                      qu&apos;est-ce que le projet doit permettre d&apos;obtenir ?
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Le périmètre</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le document précise ce qui entre dans le projet et ce qui n&apos;y entre pas, pour éviter un cadrage
                      trop large ou une dérive progressive.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Les utilisateurs ou parties prenantes</h3>
                    <ul className={bulletListClass}>
                      <li>utilisateurs</li>
                      <li>décideurs</li>
                      <li>contributeurs</li>
                      <li>équipes impactées</li>
                      <li>acteurs à consulter ou à informer</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Si besoin, la logique RACI peut clarifier qui est responsable, approbateur, consulté ou informé.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">6. Les besoins fonctionnels</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le document décrit ce que la future organisation, solution ou évolution doit permettre :
                    </p>
                    <ul className={bulletListClass}>
                      <li>quelles actions</li>
                      <li>quels usages</li>
                      <li>quels résultats</li>
                      <li>quelles interactions</li>
                      <li>quelles informations</li>
                      <li>quels niveaux de service ou de visibilité</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">7. Les contraintes</h3>
                    <ul className={bulletListClass}>
                      <li>organisationnelles</li>
                      <li>opérationnelles</li>
                      <li>temporelles</li>
                      <li>réglementaires</li>
                      <li>budgétaires</li>
                      <li>systèmes</li>
                      <li>ressources</li>
                      <li>déploiement</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">8. Les livrables attendus</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il faut préciser ce que le projet doit produire, avec des résultats tangibles clairement
                      formulés pour servir de repère au travail collectif.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">9. Les critères de choix ou de réussite</h3>
                    <ul className={bulletListClass}>
                      <li>couverture du besoin</li>
                      <li>simplicité d&apos;usage</li>
                      <li>intégration</li>
                      <li>déploiement</li>
                      <li>robustesse</li>
                      <li>coût</li>
                      <li>délai</li>
                      <li>accompagnement</li>
                      <li>maintenabilité</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-2">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">10. Les points ouverts</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un bon document n&apos;essaie pas de faire croire que tout est déjà tranché. Il fait apparaître :
                    </p>
                    <ul className={bulletListClass}>
                      <li>les hypothèses</li>
                      <li>les questions ouvertes</li>
                      <li>les décisions à prendre</li>
                      <li>les dépendances</li>
                    </ul>
                  </article>
                </div>

                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour partir d&apos;une base concrète, vous pouvez utiliser{" "}
                  <Link
                    href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/"
                    className={inlineSeoLinkClass}
                  >
                    notre exemple de cahier des charges fonctionnel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="etapes-title">
                <h2 id="etapes-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment le rédiger, étape par étape
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon cahier des charges fonctionnel ne se rédige pas d&apos;un seul jet. Il se construit.
                </p>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Étape 1 — Reprendre le besoin à la base.</span> Clarifier
                    ce que le projet cherche réellement à traiter, sans jargon inutile ni solution imposée trop tôt.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 2 — Décrire l&apos;existant.</span> Documenter
                    l&apos;organisation actuelle, les usages réels, les difficultés observées, les limites de l&apos;existant et
                    les interactions critiques.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 3 — Clarifier objectifs et périmètre.</span> Poser
                    l&apos;objectif principal, les objectifs secondaires, le périmètre inclus et le périmètre exclu.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 4 — Structurer les besoins fonctionnels.</span>
                    Classer, hiérarchiser et formuler les attentes métier, sans entrer trop tôt dans la technique.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 5 — Ajouter contraintes, critères et livrables.</span>
                    Intégrer ce qui limite, ce qui oriente, ce qui sera produit et ce qui servira à décider.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Étape 6 — Relire comme document de décision.</span>
                    Vérifier lisibilité, comparabilité, capacité à décider et levée des ambiguïtés principales.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="erreurs-title">
                <h2 id="erreurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Écrire trop tôt.</span> Rédiger un CDC avant clarification
                    réelle du besoin produit un document fragile.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Mélanger besoin et solution.</span> Décrire la solution
                    avant d&apos;avoir posé le besoin oriente artificiellement la suite.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Être trop vague.</span> Des objectifs trop larges rendent le
                    document peu utile.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Être trop détaillé au mauvais niveau.</span> Entrer trop
                    tôt dans la technique nuit à la lisibilité du document fonctionnel.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Oublier les contraintes.</span> Le projet est alors décrit
                    de façon incomplète.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Oublier les critères de choix.</span> Sans critères
                    explicites, comparer des réponses devient difficile.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="utile-title">
                <h2 id="utile-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui distingue un cahier des charges utile d&apos;un document seulement sérieux
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un document peut avoir l&apos;air sérieux sans être réellement utile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un CDC utile se reconnaît à plusieurs choses :</p>
                <ul className={bulletListClass}>
                  <li>il est lisible</li>
                  <li>il aide à comprendre</li>
                  <li>il permet de comparer</li>
                  <li>il éclaire les arbitrages</li>
                  <li>il réduit l&apos;implicite</li>
                  <li>il prépare la suite sans la figer inutilement</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il ne cherche pas à tout dire. Il cherche à dire ce qui compte, au bon niveau de précision.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="lien-title">
                <h2 id="lien-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quel lien avec le cadrage de projet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le cahier des charges fonctionnel n&apos;arrive pas tout seul. Il s&apos;inscrit dans une logique plus large de
                  cadrage.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le cadrage sert à :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le sujet</li>
                  <li>poser les objectifs</li>
                  <li>structurer le périmètre</li>
                  <li>identifier les contraintes</li>
                  <li>organiser les priorités</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le CDC vient ensuite formaliser cette structuration dans un document exploitable. Vous pouvez
                  approfondir ici :{" "}
                  <Link href="/ressources/cahier-des-charges-vs-expression-de-besoin/" className={inlineSeoLinkClass}>
                    cahier des charges vs expression de besoin
                  </Link>
                  .
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Autrement dit :</p>
                <ul className={bulletListClass}>
                  <li>sans cadrage, le CDC risque d&apos;être imprécis</li>
                  <li>sans CDC, le cadrage reste parfois trop abstrait pour servir à la suite</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Rédiger un cahier des charges fonctionnel, c&apos;est transformer un besoin en base de travail utile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cela suppose de :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le contexte</li>
                  <li>formuler le problème</li>
                  <li>préciser les objectifs</li>
                  <li>définir le périmètre</li>
                  <li>identifier les parties prenantes</li>
                  <li>structurer les besoins fonctionnels</li>
                  <li>expliciter les contraintes</li>
                  <li>poser les critères de choix</li>
                  <li>formaliser les livrables attendus</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon document n&apos;est ni le plus long, ni le plus impressionnant. C&apos;est celui qui permet de mieux
                  comprendre, mieux décider et mieux préparer la suite.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet est déjà identifié mais qu&apos;il manque encore une base claire pour consulter, comparer
                  ou lancer, alors le travail autour du cahier des charges devient utile. Cas concret :{" "}
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
                  Besoin de formaliser un CDC fonctionnel utile ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à transformer un besoin diffus en base claire pour décider, consulter et lancer dans
                  de bonnes conditions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Découvrir notre cadrage de projet</Link>
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
