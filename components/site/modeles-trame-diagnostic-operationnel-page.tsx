import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

const checklistCardClass = "rounded-2xl border border-white/12 bg-black/25 p-4 sm:p-5 space-y-3"

export const ModeleTrameDiagnosticMeta = {
  title: "Trame de diagnostic opérationnel | AEGENS",
  description:
    "Trame complète de diagnostic opérationnel pour structurer l’analyse d’un fonctionnement, objectiver les points de blocage et préparer un cadrage ou une feuille de route.",
}

export function ModeleTrameDiagnosticPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Modèles & checklists", href: "/modeles-checklists" },
              { label: "Trame de diagnostic opérationnel" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Trame de diagnostic opérationnel
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un diagnostic opérationnel utile ne consiste pas à accumuler des constats. Il consiste à transformer
                une situation encore trop diffuse en lecture exploitable.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Autrement dit, une bonne trame sert à répondre, avec méthode, à quelques questions décisives :</p>
              <ul className={bulletListClass}>
                <li>que se passe-t-il réellement ?</li>
                <li>où le fonctionnement se déforme-t-il ?</li>
                <li>quels sont les points de blocage structurants ?</li>
                <li>qu’est-ce qui relève d’un irritant local, et qu’est-ce qui relève d’un sujet plus profond ?</li>
                <li>que faut-il clarifier, ajuster, cadrer ou transformer ensuite ?</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cette trame n’est pas un document à remplir pour la forme. C’est un support de travail pour structurer
                un diagnostic de manière sérieuse, lisible et utile à la décision.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">
                    Voir notre offre diagnostic
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="role-title">
                <h2 id="role-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  À quoi sert une trame de diagnostic opérationnel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans beaucoup d’entreprises, le besoin de diagnostic apparaît dans une zone floue : pertes de temps,
                  reprises, validations peu lisibles, écarts entre équipes, fichiers parallèles, manque de visibilité,
                  ou projet pressenti sans besoin correctement nommé.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans cette situation, deux erreurs reviennent souvent : passer directement à une solution, ou rester
                  dans une lecture trop générale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Le diagnostic sert justement à sortir de ces deux impasses. Il permet de :</p>
                <ul className={bulletListClass}>
                  <li>partir du réel</li>
                  <li>qualifier le sujet</li>
                  <li>objectiver les écarts</li>
                  <li>hiérarchiser</li>
                  <li>préparer une suite plus juste</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La trame structure cette démarche pour éviter un diagnostic trop flou, trop descriptif, trop large ou
                  inutilement lourd.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="when-title">
                <h2 id="when-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Quand utiliser cette trame
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cette trame est utile lorsque :</p>
                <ul className={bulletListClass}>
                  <li>un fonctionnement produit trop de pertes de temps ou de reprises</li>
                  <li>plusieurs équipes se renvoient régulièrement les mêmes points de friction</li>
                  <li>un manque de visibilité rend les arbitrages difficiles</li>
                  <li>des méthodes de travail divergent trop</li>
                  <li>un projet semble nécessaire, mais le besoin n’est pas encore qualifié</li>
                  <li>une consultation est envisagée, mais l’amont reste trop fragile</li>
                  <li>la direction a besoin d’une lecture plus claire avant de décider</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle peut être utilisée comme support interne, base de mission, grille de lecture, ou structure de restitution.</p>
              </section>

              <section className={sectionClass} aria-labelledby="outputs-title">
                <h2 id="outputs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que cette trame doit produire
                </h2>
                <div className="space-y-4">
                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Une lecture plus claire de la situation</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet devient plus lisible.</p>
                  </article>
                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Une distinction entre symptômes et causes probables</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">On ne mélange plus tout au même niveau.</p>
                  </article>
                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Une hiérarchisation des points importants</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Tout ne se vaut pas. Le diagnostic fait apparaître ce qui compte réellement.</p>
                  </article>
                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Une qualification du bon niveau de réponse</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le sujet relève-t-il d’un ajustement, d’une harmonisation, d’un cadrage, d’un projet ou d’un pilotage ?</p>
                  </article>
                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Une base utile pour la suite</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Le diagnostic prépare une décision, un cadrage, une feuille de route, un cahier des charges ou un plan d’action.</p>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="template-title">
                <h2 id="template-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Trame de diagnostic opérationnel
                </h2>

                <div className="space-y-4">
                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">1. Objet du diagnostic</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Poser clairement sur quoi porte le diagnostic.</p>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">À formuler :</p>
                    <ul className={bulletListClass}>
                      <li>intitulé du sujet</li>
                      <li>contexte de la demande</li>
                      <li>périmètre initial pressenti</li>
                      <li>origine de la demande</li>
                      <li>raison pour laquelle le diagnostic est lancé</li>
                    </ul>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Point de vigilance : poser un point de départ, sans conclure trop tôt.</p>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">2. Contexte</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Situer le sujet dans son environnement.</p>
                    <ul className={bulletListClass}>
                      <li>dans quel contexte le sujet apparaît-il ?</li>
                      <li>depuis quand est-il perçu ?</li>
                      <li>quelles équipes sont concernées ?</li>
                      <li>quels enjeux rendent le diagnostic utile maintenant ?</li>
                      <li>quels effets visibles ont déjà été observés ?</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">3. Problématique observée</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Reformuler le problème de départ de manière précise, sur la base de faits observables.</p>
                    <ul className={bulletListClass}>
                      <li>qu’est-ce qui est observé concrètement ?</li>
                      <li>quels dysfonctionnements reviennent ?</li>
                      <li>quels symptômes sont visibles ?</li>
                      <li>quels effets produisent-ils ?</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">4. Périmètre du diagnostic</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Définir une limite claire pour éviter un diagnostic trop large.</p>
                    <ul className={bulletListClass}>
                      <li>fonctions, équipes, sites concernés</li>
                      <li>flux, processus ou activités étudiés</li>
                      <li>ce qui entre dans le diagnostic</li>
                      <li>ce qui n’y entre pas</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">5. Parties prenantes</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Identifier qui vit, subit, pilote et décide autour du sujet.</p>
                    <ul className={bulletListClass}>
                      <li>sponsor ou demandeur</li>
                      <li>responsables concernés</li>
                      <li>utilisateurs et opérateurs</li>
                      <li>fonctions support</li>
                      <li>décideurs</li>
                      <li>interlocuteurs à consulter</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">6. Fonctionnement attendu vs fonctionnement réel</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Comparer ce qui est censé se passer et ce qui se passe réellement.</p>
                    <ul className={bulletListClass}>
                      <li>étapes théoriques vs étapes observées</li>
                      <li>règles officielles vs pratiques réelles</li>
                      <li>écarts prévu/réel</li>
                      <li>contournements et exceptions devenues normales</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">7. Points de passage et interfaces</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Observer les transitions où le travail change de main.</p>
                    <ul className={bulletListClass}>
                      <li>passages d’information</li>
                      <li>relais entre services</li>
                      <li>validations</li>
                      <li>zones d’attente</li>
                      <li>points de reprise</li>
                      <li>dépendances entre acteurs</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">8. Données, supports et outils réellement utilisés</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Regarder les supports réels du fonctionnement, pas seulement les outils officiels.</p>
                    <ul className={bulletListClass}>
                      <li>outils principaux</li>
                      <li>fichiers Excel, mails, tableaux de suivi</li>
                      <li>supports locaux et extractions</li>
                      <li>doublons et supports parallèles</li>
                      <li>emplacement de la donnée jugée fiable</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">9. Méthodes de travail et écarts de pratique</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Identifier les différences de traitement entre équipes, sites, services ou personnes.</p>
                    <ul className={bulletListClass}>
                      <li>règles de validation</li>
                      <li>séquences de travail</li>
                      <li>critères de passage</li>
                      <li>pratiques locales</li>
                      <li>divergences utiles ou devenues problématiques</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">10. Points de blocage et causes probables</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Distinguer symptômes visibles et causes les plus crédibles au regard des faits.</p>
                    <ul className={bulletListClass}>
                      <li>points de blocage récurrents</li>
                      <li>zones de ralentissement</li>
                      <li>dépendances critiques</li>
                      <li>facteurs aggravants</li>
                      <li>causes probables argumentées</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">11. Effets observés</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Rendre visibles les conséquences concrètes du sujet.</p>
                    <ul className={bulletListClass}>
                      <li>pertes de temps et reprises</li>
                      <li>allongement des délais</li>
                      <li>charge supplémentaire</li>
                      <li>baisse de lisibilité</li>
                      <li>dépendance aux personnes</li>
                      <li>fragilité du pilotage</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">12. Forces et appuis existants</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Un bon diagnostic identifie aussi ce qui fonctionne et sur quoi s’appuyer.</p>
                    <ul className={bulletListClass}>
                      <li>pratiques qui fonctionnent</li>
                      <li>relais fiables</li>
                      <li>méthodes solides</li>
                      <li>zones déjà structurées</li>
                      <li>habitudes utiles à conserver</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">13. Niveau réel du sujet</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Qualifier le bon niveau de réponse pour éviter une action inadéquate.</p>
                    <ul className={bulletListClass}>
                      <li>ajustement local</li>
                      <li>clarification de méthode</li>
                      <li>harmonisation</li>
                      <li>besoin de cadrage</li>
                      <li>projet structurant</li>
                      <li>pilotage</li>
                      <li>consultation ou cahier des charges</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">14. Priorités de travail</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Hiérarchiser ce qui est prioritaire, ce qui doit être approfondi, et ce qui peut attendre.</p>
                    <ul className={bulletListClass}>
                      <li>sujets prioritaires</li>
                      <li>sujets secondaires</li>
                      <li>actions immédiates</li>
                      <li>arbitrages nécessaires</li>
                      <li>sujets à ne pas lancer tout de suite</li>
                    </ul>
                  </article>

                  <article className={checklistCardClass}>
                    <h3 className="ae-heading text-xl sm:text-2xl font-semibold">15. Recommandation sur la suite</h3>
                    <p className="ae-text text-base sm:text-lg leading-relaxed">Terminer par une orientation claire, ordonnée et exploitable.</p>
                    <ul className={bulletListClass}>
                      <li>ajustement de fonctionnement</li>
                      <li>clarification de méthode</li>
                      <li>harmonisation</li>
                      <li>cadrage plus poussé</li>
                      <li>expression de besoin ou cahier des charges</li>
                      <li>consultation</li>
                      <li>feuille de route</li>
                      <li>pilotage de mise en œuvre</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section className={sectionClass} aria-labelledby="condensed-title">
                <h2 id="condensed-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Version condensée de la trame
                </h2>
                <ol className="list-decimal pl-6 space-y-2 ae-text text-base sm:text-lg leading-relaxed marker:text-[#07bc7d]">
                  <li>Objet du diagnostic</li>
                  <li>Contexte</li>
                  <li>Problématique observée</li>
                  <li>Périmètre</li>
                  <li>Parties prenantes</li>
                  <li>Fonctionnement attendu vs réel</li>
                  <li>Points de passage et interfaces</li>
                  <li>Supports, données et outils réellement utilisés</li>
                  <li>Méthodes de travail et écarts de pratique</li>
                  <li>Points de blocage et causes probables</li>
                  <li>Effets observés</li>
                  <li>Forces et appuis existants</li>
                  <li>Niveau réel du sujet</li>
                  <li>Priorités de travail</li>
                  <li>Recommandation sur la suite</li>
                </ol>
              </section>

              <section className={sectionClass} aria-labelledby="usage-title">
                <h2 id="usage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment bien utiliser cette trame
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Cette trame n’a de valeur que si elle sert à penser correctement le sujet.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle doit être utilisée :</p>
                <ul className={bulletListClass}>
                  <li>avec des faits observables</li>
                  <li>avec une lecture transversale</li>
                  <li>avec une vraie distinction entre symptômes et causes probables</li>
                  <li>avec une exigence de hiérarchisation</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle ne doit pas être utilisée :</p>
                <ul className={bulletListClass}>
                  <li>comme formulaire automatique</li>
                  <li>comme habillage d’une solution déjà choisie</li>
                  <li>comme document de plus sans effet sur la décision</li>
                  <li>comme moyen d’éviter une discussion de fond sur le besoin réel</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="errors-title">
                <h2 id="errors-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  <li>Décrire sans qualifier</li>
                  <li>Aller trop vite à la solution</li>
                  <li>Vouloir couvrir trop large</li>
                  <li>Confondre irritants et causes de fond</li>
                  <li>Oublier la suite</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Un bon diagnostic prépare une décision ou un cadrage. Il ne s’arrête pas au constat.</p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une trame de diagnostic opérationnel utile sert à transformer une situation encore trop diffuse en
                  lecture exploitable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle permet de :</p>
                <ul className={bulletListClass}>
                  <li>clarifier le sujet</li>
                  <li>objectiver les écarts</li>
                  <li>distinguer les causes probables des symptômes</li>
                  <li>hiérarchiser</li>
                  <li>préparer une suite plus solide</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Liens utiles :</p>
                <ul className={bulletListClass}>
                  <li>
                    <Link href="/modeles-checklists/checklist-cadrage-projet-industriel/" className={inlineSeoLinkClass}>
                      Checklist de cadrage de projet industriel
                    </Link>
                  </li>
                  <li>
                    <Link href="/modeles-checklists/exemple-cahier-des-charges-fonctionnel/" className={inlineSeoLinkClass}>
                      Exemple de cahier des charges fonctionnel
                    </Link>
                  </li>
                  <li>
                    <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/" className={inlineSeoLinkClass}>
                      Offre diagnostic du fonctionnement opérationnel
                    </Link>
                  </li>
                  <li>
                    <Link href="/ressources/quand-faire-appel-a-un-regard-exterieur/" className={inlineSeoLinkClass}>
                      Quand faire appel à un regard extérieur
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/" className={inlineSeoLinkClass}>
                      Contact
                    </Link>
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon diagnostic n’est donc pas celui qui décrit le plus. C’est celui qui permet de mieux comprendre,
                  de mieux décider et de mieux structurer la suite.
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
                  Besoin d’un diagnostic structuré ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à transformer un sujet diffus en base de décision exploitable.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={primaryButtonClass}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={darkButtonClass}>
                    <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">
                      Voir notre offre diagnostic
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
