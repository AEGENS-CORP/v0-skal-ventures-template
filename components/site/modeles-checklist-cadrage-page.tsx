import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const checklistCardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

export const ModeleChecklistCadrageMeta = {
  title: "Checklist de cadrage de projet industriel | AEGENS",
  description:
    "Checklist complète pour cadrer un projet industriel : besoin, objectifs, périmètre, parties prenantes, contraintes, risques, critères de décision et conditions de mise en œuvre.",
}

export function ModeleChecklistCadragePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Modèles & checklists", href: "/modeles-checklists" },
              { label: "Checklist de cadrage de projet industriel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Checklist de cadrage de projet industriel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cadrer un projet industriel ne consiste pas à préparer le lancement au sens administratif du terme.
                C&apos;est le moment où l&apos;on vérifie si le sujet est suffisamment clair, suffisamment structuré et
                suffisamment partageable pour être transformé en projet réel.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans beaucoup d&apos;entreprises, un projet démarre alors que plusieurs points essentiels restent encore
                trop implicites :
              </p>
              <ul className={bulletListClass}>
                <li>le besoin exact</li>
                <li>le périmètre</li>
                <li>les contraintes</li>
                <li>les rôles</li>
                <li>les critères de choix</li>
                <li>la logique réelle de mise en œuvre</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le problème est simple : ce qui n&apos;est pas clarifié au moment du cadrage réapparaît presque toujours
                plus tard, sous une forme plus coûteuse :
              </p>
              <ul className={bulletListClass}>
                <li>incompréhensions</li>
                <li>dérives</li>
                <li>arbitrages tardifs</li>
                <li>consultations difficiles à comparer</li>
                <li>charge supplémentaire pour les équipes</li>
                <li>exécution plus fragile</li>
              </ul>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cette checklist a un objectif très concret : permettre de vérifier si un projet industriel est
                réellement cadré, ou seulement prêt dans les têtes.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Elle peut être utilisée :
              </p>
              <ul className={bulletListClass}>
                <li>avant une consultation</li>
                <li>avant la rédaction d&apos;un cahier des charges</li>
                <li>avant le lancement d&apos;un projet</li>
                <li>pour tester la solidité d&apos;un sujet déjà engagé</li>
              </ul>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/">
                    Voir notre approche cadrage
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="utilisation-title">
                <h2 id="utilisation-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment utiliser cette checklist
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette checklist n&apos;est pas un formulaire à remplir mécaniquement. Elle sert à faire apparaître :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qui est déjà clair</li>
                  <li>ce qui reste encore flou</li>
                  <li>ce qui doit être arbitré</li>
                  <li>ce qui demande un travail de cadrage plus sérieux</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon usage n&apos;est donc pas de répondre oui partout le plus vite possible. Le bon usage est
                  d&apos;identifier les zones où le projet reste encore fragile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans la pratique :
                </p>
                <ul className={bulletListClass}>
                  <li>
                    si la plupart des réponses sont claires, le projet est probablement mûr pour une phase de
                    formalisation ou de consultation
                  </li>
                  <li>si plusieurs réponses restent vagues, il faut encore travailler le cadrage</li>
                  <li>
                    si les réponses divergent selon les interlocuteurs, c&apos;est souvent le signe qu&apos;un vrai travail de
                    structuration manque encore
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour poser une base claire avant ces arbitrages, vous pouvez lire{" "}
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    comment cadrer un projet industriel
                  </Link>
                  .
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="checklist-complete-title">
                <h2 id="checklist-complete-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Checklist complète
                </h2>

                <div className="space-y-4">
                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      1. Le sujet de départ est-il réellement clair ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Avant même de parler de planning, d&apos;outil ou de prestataire, il faut vérifier que le sujet
                      lui-même est bien posé.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Peut-on expliquer en quelques phrases ce que le projet cherche à traiter ?</li>
                      <li>Le problème de départ est-il formulé clairement ?</li>
                      <li>Les différentes parties prenantes parlent-elles bien du même sujet ?</li>
                      <li>Le projet répond-il à une difficulté identifiée ou à un besoin explicite ?</li>
                      <li>
                        Le sujet est-il formulé en termes de besoin, et pas seulement de solution envisagée ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;un sujet encore mal posé :
                    </p>
                    <ul className={bulletListClass}>
                      <li>le projet est présenté surtout par l&apos;outil pressenti</li>
                      <li>chacun reformule le sujet différemment</li>
                      <li>l&apos;objectif réel change selon l&apos;interlocuteur</li>
                      <li>le besoin existe, mais reste trop général</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un projet mal nommé est souvent un projet mal cadré.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      2. Le besoin réel a-t-il été distingué de la solution ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      C&apos;est une étape décisive.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Beaucoup de projets dérivent très tôt vers :
                    </p>
                    <ul className={bulletListClass}>
                      <li>il faut un outil</li>
                      <li>il faut automatiser</li>
                      <li>il faut digitaliser</li>
                      <li>il faut changer de prestataire</li>
                      <li>il faut une nouvelle organisation</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Mais ces formulations décrivent déjà une réponse possible. Elles ne suffisent pas à définir le
                      besoin.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Sait-on précisément ce que l&apos;on cherche à améliorer, sécuriser ou rendre plus fluide ?</li>
                      <li>Le besoin a-t-il été formulé indépendamment de la solution imaginée ?</li>
                      <li>
                        Le projet répond-il à un usage, un fonctionnement, un blocage ou un objectif clairement
                        identifiés ?
                      </li>
                      <li>
                        A-t-on vérifié que la solution envisagée n&apos;arrive pas trop tôt dans la réflexion ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;une confusion besoin / solution :
                    </p>
                    <ul className={bulletListClass}>
                      <li>le projet commence par un nom d&apos;outil</li>
                      <li>la consultation est envisagée avant que le besoin soit formalisé</li>
                      <li>la discussion tourne déjà autour du comment alors que le pourquoi reste flou</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un projet bien cadré commence par le besoin, pas par la réponse.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      3. L&apos;objectif du projet est-il formulé de manière exploitable ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un objectif trop vague affaiblit toute la suite.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Dire :
                    </p>
                    <ul className={bulletListClass}>
                      <li>améliorer la performance</li>
                      <li>fluidifier le fonctionnement</li>
                      <li>gagner du temps</li>
                      <li>mieux piloter</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      n&apos;est pas suffisant si l&apos;on ne traduit pas cela en objectif plus précis.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Le projet poursuit-il un objectif principal clairement identifiable ?</li>
                      <li>Cet objectif peut-il être expliqué simplement ?</li>
                      <li>Les résultats attendus sont-ils décrits de manière concrète ?</li>
                      <li>
                        Les objectifs secondaires ont-ils été distingués de l&apos;objectif principal ?
                      </li>
                      <li>Le lien entre le besoin initial et l&apos;objectif poursuivi est-il clair ?</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;un objectif mal cadré :
                    </p>
                    <ul className={bulletListClass}>
                      <li>trop d&apos;objectifs à la fois</li>
                      <li>objectifs trop larges</li>
                      <li>objectifs qui changent selon les échanges</li>
                      <li>absence de hiérarchie entre les attentes</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un projet peut supporter de l&apos;incertitude. Il supporte mal l&apos;ambiguïté sur son
                      objectif principal.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      4. Le périmètre est-il réellement défini ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le périmètre ne sert pas seulement à poser une limite. Il sert à rendre le projet tenable.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Sait-on ce qui entre dans le projet ?</li>
                      <li>Sait-on ce qui n&apos;y entre pas ?</li>
                      <li>
                        Les sites, équipes, processus ou flux concernés sont-ils identifiés ?
                      </li>
                      <li>
                        Les frontières du projet sont-elles partagées par les décideurs et les acteurs concernés ?
                      </li>
                      <li>
                        Le périmètre est-il proportionné aux ressources et au niveau de maturité du sujet ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Points à clarifier :</p>
                    <ul className={bulletListClass}>
                      <li>périmètre fonctionnel</li>
                      <li>périmètre organisationnel</li>
                      <li>périmètre géographique ou multisite si nécessaire</li>
                      <li>périmètre temporel</li>
                      <li>phases incluses ou non dans le projet</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;un périmètre mal posé :
                    </p>
                    <ul className={bulletListClass}>
                      <li>on verra en avançant sur les limites</li>
                      <li>ajout régulier de sujets connexes</li>
                      <li>confusion entre phase 1 et vision plus large</li>
                      <li>difficulté à dire ce qui est hors projet</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un périmètre flou est l&apos;une des premières causes de dérive.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      5. Le contexte et l&apos;existant ont-ils été suffisamment décrits ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un projet sérieux ne part pas dans le vide. Il part d&apos;un existant.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Le fonctionnement actuel est-il suffisamment compris ?</li>
                      <li>
                        Les difficultés de l&apos;existant sont-elles décrites de manière concrète ?
                      </li>
                      <li>
                        Les pratiques actuelles ont-elles été observées ou simplement supposées ?
                      </li>
                      <li>Les points de blocage ont-ils été objectivés ?</li>
                      <li>
                        Les écarts entre ce qui est prévu et ce qui se passe réellement sont-ils connus ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Éléments à documenter :</p>
                    <ul className={bulletListClass}>
                      <li>organisation actuelle</li>
                      <li>outils ou supports déjà utilisés</li>
                      <li>méthodes de travail</li>
                      <li>circuits de validation</li>
                      <li>irritants récurrents</li>
                      <li>contournements ou pratiques de compensation</li>
                      <li>dépendances entre équipes</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;un existant mal lu :
                    </p>
                    <ul className={bulletListClass}>
                      <li>projet construit sur des impressions générales</li>
                      <li>faible compréhension des usages réels</li>
                      <li>sous-estimation des habitudes déjà installées</li>
                      <li>peu d&apos;éléments concrets sur le point de départ</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : On cadre mieux quand on part du réel, pas d&apos;une représentation abstraite du
                      problème.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      6. Les parties prenantes ont-elles été correctement identifiées ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Dans un projet industriel, les difficultés viennent rarement d&apos;un seul acteur. Le cadrage doit
                      donc identifier qui est réellement concerné.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Les décideurs sont-ils identifiés ?</li>
                      <li>Les utilisateurs ou équipes concernées ont-ils été pris en compte ?</li>
                      <li>Les contributeurs clés sont-ils connus ?</li>
                      <li>
                        Les acteurs à consulter, informer ou faire valider sont-ils identifiés ?
                      </li>
                      <li>Le projet touche-t-il plusieurs services ou niveaux de décision ?</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">À cartographier :</p>
                    <ul className={bulletListClass}>
                      <li>sponsor</li>
                      <li>porteur du besoin</li>
                      <li>utilisateurs</li>
                      <li>responsables opérationnels</li>
                      <li>fonctions support</li>
                      <li>décideurs</li>
                      <li>prestataires actuels ou futurs si le sujet le nécessite</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;une cartographie insuffisante :
                    </p>
                    <ul className={bulletListClass}>
                      <li>oubli des utilisateurs réels</li>
                      <li>rôle décisionnel mal défini</li>
                      <li>parties prenantes découvertes en cours de route</li>
                      <li>forte dépendance à une seule personne pour tout comprendre</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un projet mal peuplé au départ se complique très vite au moment des arbitrages.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      7. Les responsabilités sont-elles suffisamment claires ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Identifier les acteurs ne suffit pas. Il faut aussi clarifier leur rôle.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Sait-on qui porte le projet ?</li>
                      <li>Sait-on qui décide ?</li>
                      <li>Sait-on qui prépare les arbitrages ?</li>
                      <li>Sait-on qui contribue à la définition du besoin ?</li>
                      <li>Sait-on qui sera responsable de la suite ?</li>
                      <li>
                        Les responsabilités sont-elles explicites ou encore largement implicites ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Ce qu&apos;il faut pouvoir distinguer :
                    </p>
                    <ul className={bulletListClass}>
                      <li>portage</li>
                      <li>décision</li>
                      <li>contribution</li>
                      <li>validation</li>
                      <li>exécution</li>
                      <li>suivi</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;un problème de responsabilité :
                    </p>
                    <ul className={bulletListClass}>
                      <li>même sujet porté par plusieurs personnes sans rôle clair</li>
                      <li>arbitrages qui remontent mal</li>
                      <li>confusion entre sponsor, pilote et contributeurs</li>
                      <li>attentes contradictoires sur qui doit faire quoi</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Le cadrage ne sert pas seulement à définir le projet. Il sert aussi à définir la
                      manière dont le projet sera porté.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      8. Les contraintes ont-elles été rendues visibles ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un projet mal cadré sous-estime souvent ses contraintes. Or ce sont elles qui conditionnent la
                      faisabilité réelle.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Les contraintes de temps sont-elles connues ?</li>
                      <li>Les contraintes de ressources sont-elles explicitées ?</li>
                      <li>Les contraintes opérationnelles ont-elles été prises en compte ?</li>
                      <li>
                        Le projet doit-il coexister avec des périodes de forte activité ?
                      </li>
                      <li>
                        Existe-t-il des contraintes techniques, réglementaires ou d&apos;intégration ?
                      </li>
                      <li>
                        Les limites de disponibilité des équipes sont-elles connues ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Familles de contraintes à examiner :
                    </p>
                    <ul className={bulletListClass}>
                      <li>charge interne</li>
                      <li>calendrier</li>
                      <li>budget</li>
                      <li>compatibilité avec l&apos;existant</li>
                      <li>dépendances avec d&apos;autres projets</li>
                      <li>capacité de déploiement</li>
                      <li>maturité des équipes</li>
                      <li>contraintes qualité, sécurité ou conformité si nécessaire</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;un cadrage aveugle aux contraintes :
                    </p>
                    <ul className={bulletListClass}>
                      <li>calendrier annoncé sans test de faisabilité</li>
                      <li>dépendances non documentées</li>
                      <li>charge des équipes sous-estimée</li>
                      <li>complexité de déploiement peu prise en compte</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un projet bien cadré n&apos;ignore pas ses contraintes. Il les rend visibles assez tôt
                      pour qu&apos;elles soient intégrées dans les décisions.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      9. Les risques principaux ont-ils été identifiés ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le cadrage ne consiste pas à prévoir tous les problèmes. Il consiste à voir assez tôt ce qui peut
                      fragiliser le projet.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Les principaux risques sont-ils connus ?</li>
                      <li>
                        Les risques portent-ils sur le besoin, le périmètre, la coordination, le calendrier, les
                        ressources ou l&apos;acceptation ?
                      </li>
                      <li>Les dépendances critiques sont-elles visibles ?</li>
                      <li>
                        Les risques les plus probables ont-ils été distingués des risques les plus graves ?
                      </li>
                      <li>
                        Certains sujets demandent-ils une attention particulière avant lancement ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Risques fréquents en phase amont :
                    </p>
                    <ul className={bulletListClass}>
                      <li>besoin encore instable</li>
                      <li>périmètre trop large</li>
                      <li>manque de disponibilité des équipes</li>
                      <li>faible alignement entre acteurs</li>
                      <li>consultation trop précoce</li>
                      <li>solution imaginée trop tôt</li>
                      <li>complexité de déploiement sous-estimée</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un bon cadrage ne supprime pas le risque. Il réduit le risque d&apos;entrer dans le
                      projet sans l&apos;avoir vu.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      10. Les critères de décision ont-ils été posés ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Un projet devient beaucoup plus difficile à piloter quand les critères de décision apparaissent
                      trop tard.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Sait-on sur quels critères le projet sera arbitré ?</li>
                      <li>
                        Les critères de choix d&apos;une solution ou d&apos;un prestataire sont-ils définis ?
                      </li>
                      <li>
                        Les priorités entre simplicité, robustesse, délai, coût, intégration ou déploiement sont-elles
                        connues ?
                      </li>
                      <li>Les critères de réussite du projet sont-ils formulés ?</li>
                      <li>
                        Les arbitrages futurs pourront-ils s&apos;appuyer sur une base claire ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">À clarifier :</p>
                    <ul className={bulletListClass}>
                      <li>critères éliminatoires</li>
                      <li>critères majeurs</li>
                      <li>critères secondaires</li>
                      <li>compromis acceptables</li>
                      <li>niveau d&apos;exigence attendu sur chaque dimension</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;une absence de critères :
                    </p>
                    <ul className={bulletListClass}>
                      <li>on choisira au feeling</li>
                      <li>critères de sélection définis après réception des offres</li>
                      <li>
                        impossibilité de hiérarchiser entre coût, délai et couverture du besoin
                      </li>
                      <li>arbitrages déplacés au dernier moment</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Sans critères, la décision devient plus subjective et la consultation beaucoup plus
                      fragile.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      11. Les livrables attendus sont-ils identifiés ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Il ne suffit pas de dire que le projet doit avancer. Il faut savoir ce qu&apos;il doit produire.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Sait-on quels livrables sont attendus ?</li>
                      <li>Les livrables de la phase amont sont-ils clairs ?</li>
                      <li>
                        Si une consultation est prévue, les réponses attendues sont-elles définies ?
                      </li>
                      <li>
                        Si un prestataire est sollicité, sait-on ce qu&apos;on attend de lui concrètement ?
                      </li>
                      <li>
                        Le lien entre livrables, décisions et mise en œuvre est-il clair ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Exemples de livrables possibles :
                    </p>
                    <ul className={bulletListClass}>
                      <li>note de cadrage</li>
                      <li>expression de besoin</li>
                      <li>cahier des charges</li>
                      <li>feuille de route</li>
                      <li>plan de déploiement</li>
                      <li>proposition structurée</li>
                      <li>planning prévisionnel</li>
                      <li>dispositif de pilotage</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un projet bien cadré rend visible ce qu&apos;il doit produire, pas seulement ce qu&apos;il
                      doit améliorer.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      12. Le niveau de formalisation attendu est-il défini ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Tous les projets n&apos;ont pas besoin du même niveau de formalisation.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>
                        Le sujet demande-t-il une simple note de cadrage ou un cahier des charges plus complet ?
                      </li>
                      <li>Une expression de besoin suffit-elle à ce stade ?</li>
                      <li>
                        La formalisation attendue est-elle adaptée au niveau réel du projet ?
                      </li>
                      <li>
                        Cherche-t-on à formaliser pour clarifier, pour consulter ou pour lancer ?
                      </li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Repères utiles :</p>
                    <ul className={bulletListClass}>
                      <li>sujet encore amont : expression de besoin ou note de cadrage</li>
                      <li>sujet prêt à être consulté : cahier des charges plus structuré</li>
                      <li>sujet déjà engagé : support de pilotage ou feuille de route</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      À retenir : Un bon cadrage choisit le bon niveau de formalisation. Ni trop faible, ni inutilement
                      lourd.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      13. La logique de consultation est-elle prête ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Si le projet doit donner lieu à une consultation, le cadrage doit le préparer.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>La consultation est-elle réellement justifiée à ce stade ?</li>
                      <li>
                        Le besoin est-il assez clair pour être présenté à des prestataires ?
                      </li>
                      <li>Les attentes de réponse sont-elles définies ?</li>
                      <li>Les critères de comparaison sont-ils prêts ?</li>
                      <li>Les zones encore ouvertes ont-elles été identifiées ?</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Signaux faibles d&apos;une consultation trop précoce :
                    </p>
                    <ul className={bulletListClass}>
                      <li>besoin encore instable</li>
                      <li>arbitrages majeurs non tranchés</li>
                      <li>critères non définis</li>
                      <li>acteurs encore désalignés</li>
                      <li>consultation lancée pour voir ce qui existe plutôt que sur une base structurée</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : On ne consulte pas pour clarifier le besoin à sa place. On consulte mieux quand le
                      besoin est déjà suffisamment structuré.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      14. La logique de mise en œuvre a-t-elle été anticipée ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Le cadrage n&apos;est pas le pilotage. Mais il doit déjà tester la plausibilité de la suite.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Questions à se poser :</p>
                    <ul className={bulletListClass}>
                      <li>Le projet semble-t-il tenable dans les conditions actuelles ?</li>
                      <li>
                        Les étapes de mise en œuvre commencent-elles à être visibles ?
                      </li>
                      <li>
                        Les principaux points de vigilance pour l&apos;exécution ont-ils été identifiés ?
                      </li>
                      <li>
                        Le projet demande-t-il une conduite du changement, un déploiement progressif, une phase pilote
                        ?
                      </li>
                      <li>La charge de mise en œuvre a-t-elle été sous-estimée ?</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                      À retenir : Un cadrage sérieux ne remplace pas la mise en œuvre. Mais il évite de la traiter
                      comme un simple prolongement automatique.
                    </p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                      15. Le projet est-il réellement prêt à passer à l&apos;étape suivante ?
                    </h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      C&apos;est la question finale.
                    </p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      À la fin du cadrage, doit-on pouvoir répondre oui à ceci ?
                    </p>
                    <ul className={bulletListClass}>
                      <li>le sujet est clair</li>
                      <li>le besoin est formulé</li>
                      <li>l&apos;objectif principal est connu</li>
                      <li>le périmètre est posé</li>
                      <li>les parties prenantes sont identifiées</li>
                      <li>les responsabilités sont suffisamment lisibles</li>
                      <li>les contraintes et risques principaux sont visibles</li>
                      <li>les critères de décision existent</li>
                      <li>la formalisation attendue est définie</li>
                      <li>la suite peut être engagée sur une base plus solide</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">
                      Si plusieurs de ces points restent incertains, alors le projet n&apos;est probablement pas encore
                      mûr pour la suite.
                    </p>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="version-courte-title">
                <h2 id="version-courte-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Version courte de la checklist
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Voici la version synthétique.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Checklist de cadrage de projet industriel
                </p>
                <ul className={bulletListClass}>
                  <li>le sujet est-il formulé clairement ?</li>
                  <li>le besoin est-il distingué de la solution ?</li>
                  <li>l&apos;objectif principal est-il explicite ?</li>
                  <li>le périmètre est-il défini ?</li>
                  <li>l&apos;existant est-il suffisamment compris ?</li>
                  <li>les parties prenantes sont-elles identifiées ?</li>
                  <li>les responsabilités sont-elles claires ?</li>
                  <li>les contraintes sont-elles visibles ?</li>
                  <li>les risques principaux sont-ils identifiés ?</li>
                  <li>les critères de décision sont-ils posés ?</li>
                  <li>les livrables attendus sont-ils définis ?</li>
                  <li>le niveau de formalisation est-il adapté ?</li>
                  <li>la consultation est-elle réellement prête ?</li>
                  <li>la logique de mise en œuvre est-elle anticipée ?</li>
                  <li>le projet est-il mûr pour l&apos;étape suivante ?</li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un projet industriel bien cadré n&apos;est pas un projet documenté. C&apos;est un projet dont les
                  fondations sont suffisamment claires pour permettre une suite plus fiable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette checklist sert à tester cette solidité.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle permet de vérifier si le projet est :
                </p>
                <ul className={bulletListClass}>
                  <li>compréhensible</li>
                  <li>structuré</li>
                  <li>partageable</li>
                  <li>arbitrable</li>
                  <li>prêt à être transformé en consultation, en cahier des charges ou en mise en œuvre</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si trop de réponses restent floues, ce n&apos;est pas forcément un problème. C&apos;est simplement le signe
                  qu&apos;un vrai travail de cadrage reste encore à faire.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link href="/offres/cadrage-projet-industriel-cahier-des-charges/" className={inlineSeoLinkClass}>
                    offre cadrage de projet industriel
                  </Link>
                  ,{" "}
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    comment cadrer un projet industriel
                  </Link>
                  ,{" "}
                  <Link
                    href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/"
                    className={inlineSeoLinkClass}
                  >
                    exemple de cahier des charges fonctionnel
                  </Link>{" "}
                  et{" "}
                  <Link
                    href="/modeles-checklists/matrice-criteres-choix-solution-ou-prestataire/"
                    className={inlineSeoLinkClass}
                  >
                    matrice de critères de choix solution ou prestataire
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
                  Besoin de cadrer un projet avant de lancer la suite ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous accompagnons les entreprises qui doivent clarifier le besoin, structurer le cadre et préparer
                  une mise en œuvre solide.
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
