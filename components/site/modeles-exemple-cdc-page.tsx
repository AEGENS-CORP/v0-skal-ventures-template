import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ModeleExempleCdcMeta = {
  title: "Exemple de cahier des charges fonctionnel | AEGENS",
  description:
    "Exemple de cahier des charges fonctionnel : structure, sections indispensables, niveau de détail utile, erreurs à éviter et modèle de contenu exploitable.",
}

export function ModeleExempleCdcPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Modèles & checklists", href: "/modeles-checklists" },
              { label: "Exemple de cahier des charges fonctionnel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Exemple de cahier des charges fonctionnel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un cahier des charges fonctionnel utile n&apos;est ni un document vague, ni un document technique déguisé.
                Il sert à formaliser un besoin de manière suffisamment claire pour permettre trois choses : aligner les
                parties prenantes, comparer des réponses sur une base commune, et préparer la suite du projet dans de
                bonnes conditions. Les guides les plus sérieux convergent sur ce point : un cahier des charges
                fonctionnel décrit d&apos;abord les besoins, les objectifs, les attentes et les contraintes du projet,
                tandis que la partie technique vient ensuite préciser comment ces besoins seront mis en œuvre.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, un bon CDC fonctionnel ne cherche pas d&apos;abord à dire comment construire. Il cherche
                d&apos;abord à dire ce que le projet doit permettre, dans quel contexte, pour quels utilisateurs, avec
                quelles contraintes, et selon quels critères on jugera que la réponse est adaptée. Les documents publics
                sur la rédaction en termes fonctionnels insistent eux aussi sur ce point : il faut exprimer les
                exigences, les objectifs et la performance attendue avant de figer prématurément la solution.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La page ci-dessous donne donc un exemple de structure solide, conçu pour être exploitable dans un
                contexte d&apos;entreprise, en particulier sur des sujets industriels, logistiques ou retail où le besoin
                doit être clarifié avant consultation, choix d&apos;un prestataire ou mise en œuvre. Les ressources de
                référence rappellent que le cahier des charges sert précisément de document de cadrage et d&apos;alignement
                avant d&apos;engager la suite du projet.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Pour structurer l&apos;amont, vous pouvez aussi consulter{" "}
                <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                  notre approche de cadrage de projet
                </Link>{" "}
                et{" "}
                <Link
                  href="/ressources/comment-rediger-un-cahier-des-charges-fonctionnel/"
                  className={inlineSeoLinkClass}
                >
                  la méthode de rédaction du cahier des charges fonctionnel
                </Link>
                .
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Voir notre approche cadrage</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="bon-cdc-title">
                <h2 id="bon-cdc-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  À quoi doit ressembler un bon cahier des charges fonctionnel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Avant de donner un exemple, il faut poser une règle simple : un bon cahier des charges fonctionnel
                  n&apos;est pas jugé à sa longueur, mais à son utilité. Il doit être assez précis pour rendre le projet
                  compréhensible et comparable, mais pas au point de figer trop tôt une réponse technique qui devrait
                  encore rester ouverte. Les recommandations publiques sur la définition du besoin et la rédaction
                  fonctionnelle vont clairement dans ce sens.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  En pratique, un bon CDC fonctionnel doit permettre de retrouver clairement :
                </p>
                <ul className={bulletListClass}>
                  <li>le contexte</li>
                  <li>le besoin réel</li>
                  <li>les objectifs</li>
                  <li>le périmètre</li>
                  <li>les utilisateurs ou parties prenantes</li>
                  <li>les besoins fonctionnels</li>
                  <li>les contraintes</li>
                  <li>les livrables attendus</li>
                  <li>les critères de choix</li>
                  <li>et les points encore ouverts</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="exemple-title">
                <h2 id="exemple-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Exemple de cahier des charges fonctionnel
                </h2>

                <div className="space-y-4">
                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Titre du document</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cahier des charges fonctionnel – [Nom du projet]
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Exemple : Cahier des charges fonctionnel – Structuration du suivi des flux et des validations
                      interservices
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le titre doit rester simple. Il n&apos;a pas vocation à vendre le projet. Il doit simplement
                      identifier clairement le sujet.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Contexte</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette partie répond à une question simple : dans quel environnement ce projet s&apos;inscrit-il ?
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Exemple de rédaction : L&apos;entreprise souhaite structurer le suivi d&apos;un ensemble de flux
                      aujourd&apos;hui gérés de manière hétérogène entre plusieurs équipes. La situation actuelle génère
                      des ressaisies, des validations peu lisibles, des pertes de temps et une visibilité insuffisante
                      sur l&apos;avancement réel. Le projet a pour objectif de clarifier le fonctionnement cible et
                      d&apos;identifier une réponse adaptée aux contraintes opérationnelles de l&apos;entreprise.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette partie ne doit pas encore entrer dans le détail des fonctionnalités. Elle sert à donner au
                      lecteur le point de départ, les irritants principaux et la logique du projet.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Problème ou besoin traité</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette partie est centrale. Elle répond à la question : quel problème cherche-t-on réellement à
                      traiter ?
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Exemple de rédaction : Le besoin porte sur l&apos;amélioration de la fluidité, de la traçabilité et
                      de la lisibilité des échanges entre plusieurs équipes impliquées dans un même processus.
                      Aujourd&apos;hui, certaines informations circulent par plusieurs canaux, les validations ne sont pas
                      toujours visibles, et les équipes doivent compenser par des relances ou des suivis manuels. Le
                      projet vise à structurer un dispositif plus fiable, plus lisible et plus homogène.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette section doit rester centrée sur le besoin, pas sur la solution. Si elle dérive trop tôt
                      vers une solution, le document devient déjà moins fonctionnel.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Objectifs du projet</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette section répond à la question : qu&apos;attend-on concrètement du projet ?
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple de rédaction :</p>
                    <ul className={bulletListClass}>
                      <li>réduire les pertes de temps liées aux ressaisies et aux suivis manuels</li>
                      <li>améliorer la visibilité sur l&apos;état d&apos;avancement des demandes ou des flux concernés</li>
                      <li>fiabiliser les étapes de validation</li>
                      <li>harmoniser les pratiques entre les équipes concernées</li>
                      <li>disposer d&apos;une base plus structurée pour le pilotage et la suite de la mise en œuvre</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Périmètre</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le périmètre sert à dire ce qui est inclus et ce qui ne l&apos;est pas.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple de rédaction :</p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le périmètre couvre :</p>
                    <ul className={bulletListClass}>
                      <li>les étapes de traitement amont et aval du flux concerné</li>
                      <li>les équipes A, B et C</li>
                      <li>les validations intermédiaires</li>
                      <li>les points de suivi et de relance</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le périmètre ne couvre pas :</p>
                    <ul className={bulletListClass}>
                      <li>la refonte complète du SI</li>
                      <li>les processus périphériques non directement liés au sujet</li>
                      <li>les développements techniques hors besoin validé à ce stade</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette partie est indispensable. Sans périmètre clair, le projet dérive facilement.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      6. Parties prenantes et utilisateurs concernés
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette partie répond à deux questions : qui est concerné ? Qui utilisera réellement la future
                      réponse ?
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple de rédaction :</p>
                    <ul className={bulletListClass}>
                      <li>la direction du site, en tant que sponsor</li>
                      <li>les responsables des équipes A, B et C</li>
                      <li>les utilisateurs opérationnels impliqués dans le traitement quotidien</li>
                      <li>les fonctions support participant aux validations ou au reporting</li>
                      <li>les interlocuteurs projets ou prestataires externes si une consultation est engagée</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un CDC fonctionnel solide ne parle pas uniquement du projet ; il identifie les acteurs réels.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">7. Besoins fonctionnels</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      C&apos;est ici que le document devient réellement fonctionnel. Il ne s&apos;agit pas encore de décrire la
                      technique. Il s&apos;agit de dire ce que la future réponse doit permettre.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple de rédaction :</p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      La solution ou l&apos;organisation cible devra permettre :
                    </p>
                    <ul className={bulletListClass}>
                      <li>de visualiser l&apos;état d&apos;avancement d&apos;un dossier ou d&apos;un flux</li>
                      <li>d&apos;identifier clairement les étapes en attente de validation</li>
                      <li>de tracer les actions réalisées</li>
                      <li>de réduire les ressaisies inutiles</li>
                      <li>de clarifier les points de responsabilité</li>
                      <li>de produire une information de suivi utile pour le pilotage</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      On peut ensuite détailler ces besoins sous forme de sous-parties : gestion des statuts,
                      visibilité, règles de validation, alertes ou relances, reporting, historiques, etc.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">8. Contraintes</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Une réponse peut sembler pertinente tout en étant inutilisable si les contraintes n&apos;ont pas été
                      explicitées.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple de rédaction :</p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le projet doit tenir compte des contraintes suivantes :
                    </p>
                    <ul className={bulletListClass}>
                      <li>charge limitée des équipes pendant la phase de déploiement</li>
                      <li>coexistence temporaire avec certains outils ou pratiques existantes</li>
                      <li>nécessité de limiter les ressaisies supplémentaires</li>
                      <li>simplicité de prise en main pour les utilisateurs</li>
                      <li>capacité à fonctionner dans un environnement multisite ou multiéquipe si nécessaire</li>
                      <li>calendrier de déploiement compatible avec les périodes de forte activité</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">9. Livrables attendus</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette partie répond à la question : qu&apos;attend-on concrètement du futur prestataire, de la future
                      solution ou du projet ?
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple de rédaction :</p>
                    <ul className={bulletListClass}>
                      <li>une proposition structurée répondant au besoin</li>
                      <li>une description du dispositif ou de la solution proposée</li>
                      <li>une méthode de mise en œuvre</li>
                      <li>un planning prévisionnel</li>
                      <li>les conditions de reprise ou de déploiement</li>
                      <li>les éléments utiles au pilotage et au suivi</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette section améliore fortement la qualité des consultations et la lisibilité des réponses.
                    </p>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">10. Critères de choix</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un cahier des charges utile prépare aussi la comparaison.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple de rédaction :</p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Les réponses seront analysées notamment au regard :
                    </p>
                    <ul className={bulletListClass}>
                      <li>de la compréhension du besoin</li>
                      <li>de la couverture fonctionnelle proposée</li>
                      <li>de la simplicité de mise en œuvre</li>
                      <li>de la compatibilité avec les contraintes de l&apos;entreprise</li>
                      <li>de la méthodologie proposée</li>
                      <li>du niveau de charge interne requis</li>
                      <li>du coût global</li>
                      <li>du calendrier</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3">
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">11. Points ouverts et hypothèses</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un bon cahier des charges ne prétend pas que tout est déjà tranché.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Exemple de rédaction :</p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      À ce stade, plusieurs points restent à préciser ou à arbitrer :
                    </p>
                    <ul className={bulletListClass}>
                      <li>niveau exact de reporting attendu</li>
                      <li>modalités de déploiement multisite</li>
                      <li>priorisation entre certaines fonctionnalités</li>
                      <li>hypothèses sur la charge de conduite du changement</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Cette section évite de donner une fausse impression de clôture et aide à distinguer ce qui est
                      ferme de ce qui reste à discuter.
                    </p>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="trame-title">
                <h2 id="trame-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Un exemple condensé de trame
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Voici une version courte, directement exploitable.
                </p>
                <ul className={bulletListClass}>
                  <li>1. Titre du projet</li>
                  <li>2. Contexte</li>
                  <li>3. Problème ou besoin traité</li>
                  <li>4. Objectifs</li>
                  <li>5. Périmètre</li>
                  <li>6. Parties prenantes</li>
                  <li>7. Besoins fonctionnels</li>
                  <li>8. Contraintes</li>
                  <li>9. Livrables attendus</li>
                  <li>10. Critères de choix</li>
                  <li>11. Points ouverts / hypothèses</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette trame est suffisante dans beaucoup de cas. Elle peut ensuite être enrichie selon la complexité
                  du sujet.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="eviter-title">
                <h2 id="eviter-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;il faut éviter
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">Confondre besoin et solution.</span> Un CDC fonctionnel
                    n&apos;a pas vocation à verrouiller trop tôt la réponse.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Rédiger trop vague.</span> Des formulations comme
                    « améliorer la performance » ou « fluidifier les échanges » ne suffisent pas si elles ne sont pas
                    traduites plus précisément.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Entrer trop tôt dans la technique.</span> La partie
                    technique doit venir après, ou à côté, mais ne doit pas écraser la logique fonctionnelle.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Oublier les contraintes.</span> Sans contraintes, le
                    document donne une vision incomplète du sujet.
                  </li>
                  <li>
                    <span className="font-semibold text-white">Ne pas hiérarchiser.</span> Tous les besoins ne se
                    valent pas. Il faut distinguer l&apos;indispensable du souhaitable.
                  </li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="modele-title">
                <h2 id="modele-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qui distingue un bon exemple d&apos;un mauvais modèle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un mauvais modèle donne l&apos;illusion d&apos;une structure. Un bon modèle aide à mieux penser le projet.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La différence tient à trois choses :</p>
                <ul className={bulletListClass}>
                  <li>il oblige à clarifier le besoin</li>
                  <li>il force à expliciter les arbitrages</li>
                  <li>il prépare une suite plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un bon exemple de cahier des charges fonctionnel ne doit donc pas être vu comme un formulaire à
                  remplir mécaniquement. Il doit être utilisé comme un support de réflexion, de clarification et de
                  décision. Pour compléter ce travail, vous pouvez lire{" "}
                  <Link
                    href="/ressources/cahier-des-charges-vs-expression-de-besoin/"
                    className={inlineSeoLinkClass}
                  >
                    cahier des charges vs expression de besoin
                  </Link>{" "}
                  et utiliser la{" "}
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
                  Un exemple de cahier des charges fonctionnel utile doit permettre de formaliser :
                </p>
                <ul className={bulletListClass}>
                  <li>le contexte</li>
                  <li>le besoin</li>
                  <li>les objectifs</li>
                  <li>le périmètre</li>
                  <li>les parties prenantes</li>
                  <li>les besoins fonctionnels</li>
                  <li>les contraintes</li>
                  <li>les livrables attendus</li>
                  <li>les critères de choix</li>
                  <li>et les points ouverts</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon document n&apos;est pas celui qui impressionne. C&apos;est celui qui rend le projet plus clair, la
                  consultation plus fiable, et la suite plus solide.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si votre sujet est déjà identifié mais qu&apos;il manque encore une base exploitable pour consulter,
                  comparer ou lancer correctement, alors le travail sur le cahier des charges fonctionnel devient une
                  vraie étape de structuration.
                </p>
              </section>
            </article>
          </section>

          <section className="ae-surface-strong ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="cta-title">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-7 lg:items-end">
              <div className="space-y-3">
                <h2 id="cta-title" className="ae-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Besoin de formaliser un CDC exploitable avant consultation ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à transformer un besoin en base claire pour décider, comparer et lancer dans de
                  bonnes conditions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
                    <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">Voir notre approche cadrage</Link>
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
