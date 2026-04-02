import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const RessourceAuditOrganisationnelVsSiMeta = {
  title: "Audit organisationnel vs audit SI : quelle différence ? | AEGENS",
  description:
    "Comprendre la différence entre audit organisationnel et audit SI : périmètre, objectifs, livrables, cas d’usage, points de recouvrement et erreurs à éviter.",
}

export function RessourceAuditOrganisationnelVsSiPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Ressources", href: "/ressources" },
              { label: "Audit organisationnel vs audit SI" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Audit organisationnel vs audit SI : quelle différence ?
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                L&apos;audit organisationnel et l&apos;audit SI sont souvent rapprochés, parfois même confondus. Pourtant, ils
                ne partent pas du même point et ne répondent pas exactement aux mêmes questions.
              </p>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                La différence la plus simple est la suivante :
              </p>
              <ul className={bulletListClass}>
                <li>
                  l&apos;audit organisationnel cherche à comprendre comment l&apos;entreprise fonctionne, comment les rôles
                  s&apos;articulent, comment les décisions se prennent, comment les processus et interactions produisent de
                  la fluidité ou des blocages
                </li>
                <li>
                  l&apos;audit SI cherche à évaluer le système d&apos;information, ses risques, ses contrôles, son efficacité,
                  sa sécurité, sa conformité ou sa capacité à soutenir correctement l&apos;activité
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">Autrement dit :</p>
              <ul className={bulletListClass}>
                <li>l&apos;audit organisationnel part d&apos;abord du fonctionnement</li>
                <li>l&apos;audit SI part d&apos;abord du système d&apos;information</li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Cette distinction est importante, parce qu&apos;une entreprise qui se trompe de point d&apos;entrée risque :
              </p>
              <ul className={bulletListClass}>
                <li>d&apos;analyser trop technique un sujet qui est d&apos;abord organisationnel</li>
                <li>
                  ou, à l&apos;inverse, de traiter comme un simple sujet d&apos;organisation une difficulté qui vient en
                  réalité de la qualité, de la sécurité ou de la maîtrise du SI
                </li>
              </ul>

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

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10" aria-labelledby="article-title">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="confusion-title">
                <h2 id="confusion-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi la confusion est fréquente
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La confusion est logique, car dans la réalité de l&apos;entreprise, organisation et système d&apos;information
                  sont étroitement liés.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un même problème peut se manifester de plusieurs façons :
                </p>
                <ul className={bulletListClass}>
                  <li>lenteurs entre services</li>
                  <li>ressaisies</li>
                  <li>validations peu fluides</li>
                  <li>manque de visibilité</li>
                  <li>outils mal utilisés</li>
                  <li>données peu fiables</li>
                  <li>règles de gestion peu claires</li>
                  <li>responsabilités diffuses</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Selon l&apos;angle retenu, ce même sujet peut être lu :</p>
                <ul className={bulletListClass}>
                  <li>comme un problème de méthode ou de coordination</li>
                  <li>comme un problème de processus</li>
                  <li>comme un problème d&apos;outil</li>
                  <li>comme un problème de contrôle</li>
                  <li>comme un problème de sécurité et de maîtrise du SI</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un audit d&apos;organisation peut inclure une dimension SI, mais il ne devient pas pour autant un audit
                  SI. Inversement, un audit SI peut constater des effets organisationnels, mais il ne remplace pas un
                  audit organisationnel.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="org-title">
                <h2 id="org-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;est réellement un audit organisationnel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un audit organisationnel cherche à comprendre comment l&apos;entreprise fonctionne dans sa réalité
                  concrète.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il porte sur des questions comme :</p>
                <ul className={bulletListClass}>
                  <li>comment le travail s&apos;organise-t-il réellement ?</li>
                  <li>comment les rôles se répartissent-ils ?</li>
                  <li>où se situent les points de blocage ?</li>
                  <li>quelles étapes génèrent des pertes de temps ?</li>
                  <li>où les décisions ralentissent-elles ?</li>
                  <li>quelles interfaces entre équipes sont fragiles ?</li>
                  <li>quels écarts existent entre ce qui est prévu et ce qui se passe effectivement ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;audit organisationnel s&apos;intéresse donc au fonctionnement réel :
                </p>
                <ul className={bulletListClass}>
                  <li>méthodes de travail</li>
                  <li>organisation opérationnelle</li>
                  <li>circulation de l&apos;information utile</li>
                  <li>interfaces entre services</li>
                  <li>responsabilités</li>
                  <li>coordination</li>
                  <li>règles de fonctionnement</li>
                  <li>processus au sens large</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Son but n&apos;est pas d&apos;abord de contrôler un système. Son but est de produire une lecture plus claire
                  d&apos;un fonctionnement et d&apos;identifier ce qui doit être clarifié, ajusté, structuré ou revu.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="si-title">
                <h2 id="si-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu&apos;est réellement un audit SI
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;audit SI, lui, se concentre sur le système d&apos;information.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il peut porter selon les cas sur :</p>
                <ul className={bulletListClass}>
                  <li>la sécurité</li>
                  <li>la conformité</li>
                  <li>les dispositifs de contrôle</li>
                  <li>la gestion des risques</li>
                  <li>la gouvernance du SI</li>
                  <li>les accès</li>
                  <li>la qualité des dispositifs de protection</li>
                  <li>l&apos;adéquation entre le SI et les besoins métiers</li>
                  <li>la robustesse globale du système</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans sa version la plus classique, l&apos;audit SI cherche donc à répondre à des questions comme :
                </p>
                <ul className={bulletListClass}>
                  <li>le système est-il maîtrisé ?</li>
                  <li>les contrôles sont-ils suffisants ?</li>
                  <li>les risques sont-ils identifiés et traités ?</li>
                  <li>la sécurité est-elle au niveau attendu ?</li>
                  <li>le SI répond-il correctement aux exigences de conformité ou de gouvernance ?</li>
                  <li>les procédures et dispositifs informatiques soutiennent-ils correctement l&apos;activité ?</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Autrement dit, on est ici plus proche :</p>
                <ul className={bulletListClass}>
                  <li>du contrôle</li>
                  <li>de la maîtrise des risques</li>
                  <li>de la sécurité</li>
                  <li>de la conformité</li>
                  <li>de la gouvernance du système d&apos;information</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="depart-title">
                <h2 id="depart-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  La vraie différence de point de départ
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La différence la plus utile à retenir n&apos;est pas seulement une différence de définition. C&apos;est une
                  différence de point de départ analytique.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;audit organisationnel part de la question :
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Comment l&apos;entreprise fonctionne-t-elle réellement, et où cela produit-il des écarts, des blocages ou
                  des inefficacités ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L&apos;audit SI part de la question :</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed font-semibold text-white">
                  Le système d&apos;information est-il maîtrisé, sûr, cohérent, conforme et adapté à ce qu&apos;il doit soutenir
                  ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les deux peuvent se croiser. Mais ils ne regardent pas la situation avec la même focale.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="produit-title">
                <h2 id="produit-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que chaque audit cherche à produire
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L&apos;audit organisationnel produit généralement :</p>
                <ul className={bulletListClass}>
                  <li>une lecture plus claire du fonctionnement</li>
                  <li>une identification des points de blocage</li>
                  <li>une analyse des rôles, interfaces et responsabilités</li>
                  <li>une mise en évidence des pertes de temps ou incohérences</li>
                  <li>des priorités d&apos;ajustement ou de structuration</li>
                  <li>une base de cadrage pour un projet plus large</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L&apos;audit SI produit généralement :</p>
                <ul className={bulletListClass}>
                  <li>une évaluation du niveau de maîtrise du SI</li>
                  <li>une lecture des risques</li>
                  <li>une analyse des contrôles et vulnérabilités</li>
                  <li>un niveau de conformité ou de sécurité</li>
                  <li>des recommandations de renforcement</li>
                  <li>un plan d&apos;actions orienté SI, sécurité, gouvernance ou contrôle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On voit donc bien que le résultat attendu n&apos;est pas le même :
                </p>
                <ul className={bulletListClass}>
                  <li>d&apos;un côté, on clarifie un fonctionnement</li>
                  <li>de l&apos;autre, on évalue un système et les risques qui lui sont liés</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="choix-org-title">
                <h2 id="choix-org-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Dans quels cas privilégier un audit organisationnel
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un audit organisationnel devient plus pertinent quand le sujet se formule d&apos;abord comme :
                </p>
                <ul className={bulletListClass}>
                  <li>une difficulté de fonctionnement</li>
                  <li>une perte de fluidité entre services</li>
                  <li>un problème de coordination</li>
                  <li>un besoin encore flou</li>
                  <li>une organisation qui compense trop par des contournements</li>
                  <li>un projet à structurer sur une base métier plus claire</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quelques signaux typiques :</p>
                <ul className={bulletListClass}>
                  <li>les équipes perdent du temps sans savoir précisément où</li>
                  <li>les responsabilités sont partiellement implicites</li>
                  <li>les étapes d&apos;un processus se chevauchent mal</li>
                  <li>le problème semble plus large qu&apos;un simple outil</li>
                  <li>le besoin doit être clarifié avant toute décision structurante</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce type de situation, partir directement sur un audit SI risque de déplacer le sujet trop vite
                  vers la technique.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="choix-si-title">
                <h2 id="choix-si-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Dans quels cas privilégier un audit SI
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Un audit SI devient plus pertinent quand le sujet se formule d&apos;abord comme :
                </p>
                <ul className={bulletListClass}>
                  <li>une question de sécurité</li>
                  <li>un risque de conformité</li>
                  <li>une faiblesse de contrôle</li>
                  <li>un besoin d&apos;évaluer la robustesse du système</li>
                  <li>une interrogation sur la gouvernance du SI</li>
                  <li>une difficulté clairement située dans la maîtrise informatique</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Quelques signaux typiques :</p>
                <ul className={bulletListClass}>
                  <li>inquiétudes sur la sécurité ou la conformité</li>
                  <li>besoin de vérifier les contrôles et protections</li>
                  <li>niveau de risque SI mal identifié</li>
                  <li>gouvernance du système insuffisamment clarifiée</li>
                  <li>besoin d&apos;évaluer la qualité des politiques ou procédures internes SI</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce cas, un audit organisationnel seul serait trop large ou pas assez précis.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="recouvrement-title">
                <h2 id="recouvrement-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les zones de recouvrement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">La réalité n&apos;est pas binaire. Il existe une zone de recouvrement importante entre les deux.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Par exemple :</p>
                <ul className={bulletListClass}>
                  <li>un mauvais fonctionnement entre services peut être aggravé par un SI mal configuré</li>
                  <li>un manque de visibilité peut venir autant d&apos;un problème d&apos;organisation que de qualité de donnée</li>
                  <li>une procédure peu claire peut produire un défaut de coordination et un défaut de contrôle</li>
                  <li>une faiblesse de gouvernance SI peut être autant technique qu&apos;organisationnelle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Dans certains cas, il faut :</p>
                <ul className={bulletListClass}>
                  <li>commencer par un angle principal</li>
                  <li>puis intégrer la dimension connexe au bon niveau</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Autrement dit :</p>
                <ul className={bulletListClass}>
                  <li>un audit organisationnel peut faire apparaître qu&apos;un approfondissement SI est nécessaire</li>
                  <li>un audit SI peut faire apparaître qu&apos;un problème plus large de gouvernance doit être travaillé</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="angle-title">
                <h2 id="angle-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  L&apos;erreur classique : partir par le mauvais angle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une entreprise ressent une difficulté, elle nomme souvent le sujet à partir de ce qui est le
                  plus visible :
                </p>
                <ul className={bulletListClass}>
                  <li>on a un problème d&apos;outil</li>
                  <li>le SI n&apos;est pas bon</li>
                  <li>il faut revoir l&apos;organisation</li>
                  <li>on manque de fluidité</li>
                  <li>on a un sujet de contrôle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais la formulation initiale n&apos;est pas toujours la bonne porte d&apos;entrée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si l&apos;on part trop vite sur un audit SI alors que le besoin est d&apos;abord organisationnel, on risque
                  de documenter correctement le système tout en laissant intacts les vrais problèmes de fonctionnement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si l&apos;on part à l&apos;inverse sur un audit organisationnel alors que le cœur du problème est la sécurité,
                  la conformité ou la gouvernance SI, on risque de produire une lecture partielle sans traiter le
                  niveau réel de risque.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="choix-title">
                <h2 id="choix-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir lequel vous avez réellement besoin de lancer
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous avez probablement besoin d&apos;un audit organisationnel si :</p>
                <ul className={bulletListClass}>
                  <li>le sujet se manifeste surtout par des frictions de fonctionnement</li>
                  <li>les pertes de temps sont visibles dans le travail quotidien</li>
                  <li>le besoin est encore flou et doit être clarifié</li>
                  <li>les interfaces entre services sont au cœur du problème</li>
                  <li>le projet à venir demande d&apos;abord une lecture métier ou opérationnelle</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous avez probablement besoin d&apos;un audit SI si :</p>
                <ul className={bulletListClass}>
                  <li>le sujet porte d&apos;abord sur la sécurité, conformité, contrôle ou gouvernance du SI</li>
                  <li>le niveau de risque informatique doit être évalué</li>
                  <li>la robustesse des dispositifs SI est la question centrale</li>
                  <li>vous cherchez à évaluer la maîtrise du système d&apos;information lui-même</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Vous avez peut-être besoin des deux si :</p>
                <ul className={bulletListClass}>
                  <li>le sujet est clairement hybride</li>
                  <li>les symptômes sont organisationnels mais la cause est partiellement SI</li>
                  <li>ou l&apos;inverse</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans ce cas, l&apos;enjeu est de ne pas mélanger les niveaux, mais de séquencer correctement l&apos;analyse.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="erreurs-title">
                <h2 id="erreurs-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les erreurs les plus fréquentes
                </h2>
                <ul className={bulletListClass}>
                  <li>
                    <span className="font-semibold text-white">
                      1. Réduire trop vite un problème de fonctionnement à un sujet d&apos;outil.
                    </span>{" "}
                    Le SI devient alors l&apos;explication par défaut, alors que le problème porte parfois d&apos;abord sur les
                    règles, les rôles ou les interfaces.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      2. Faire un audit organisationnel trop large pour un sujet d&apos;abord SI.
                    </span>{" "}
                    On produit un état des lieux intéressant, mais insuffisant sur le cœur du risque.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      3. Confondre gouvernance SI et organisation générale.
                    </span>{" "}
                    Les deux se recoupent, mais ne se traitent pas au même niveau.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      4. Chercher un seul audit pour répondre à tout.
                    </span>{" "}
                    Il vaut mieux choisir l&apos;angle principal, puis approfondir le second si nécessaire.
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      5. Utiliser le terme audit sans préciser son objet réel.
                    </span>{" "}
                    Un audit n&apos;a de valeur que si son périmètre, son objectif et sa focale sont clairement définis.
                  </li>
                </ul>
              </section>

              <section className="space-y-4" aria-labelledby="resume-title">
                <h2 id="resume-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L&apos;audit organisationnel et l&apos;audit SI sont liés, mais ils ne désignent pas la même chose.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L&apos;audit organisationnel sert à :</p>
                <ul className={bulletListClass}>
                  <li>comprendre le fonctionnement réel</li>
                  <li>identifier les blocages, interfaces, rôles, méthodes et pertes de temps</li>
                  <li>clarifier un besoin ou une situation avant décision</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">L&apos;audit SI sert à :</p>
                <ul className={bulletListClass}>
                  <li>évaluer le système d&apos;information</li>
                  <li>apprécier son niveau de maîtrise, sécurité, conformité ou gouvernance</li>
                  <li>traiter les risques spécifiquement liés au SI</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">En une phrase :</p>
                <ul className={bulletListClass}>
                  <li>l&apos;audit organisationnel regarde d&apos;abord comment l&apos;entreprise fonctionne</li>
                  <li>l&apos;audit SI regarde d&apos;abord comment le système d&apos;information est maîtrisé</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon point de départ dépend donc de la nature réelle du sujet. Quand le problème est encore mal
                  nommé, la vraie valeur consiste souvent à choisir d&apos;abord la bonne focale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    diagnostic du fonctionnement opérationnel
                  </Link>
                  ,{" "}
                  <Link href="/ressources/comment-cadrer-un-projet-industriel/" className={inlineSeoLinkClass}>
                    comment cadrer un projet industriel
                  </Link>{" "}
                  et{" "}
                  <Link href="/ressources/quand-faire-appel-a-un-regard-exterieur/" className={inlineSeoLinkClass}>
                    quand faire appel à un regard extérieur
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
                  Besoin de choisir la bonne focale d&apos;audit ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à qualifier le sujet, distinguer l&apos;angle organisationnel de l&apos;angle SI et poser un
                  cadre de décision utile pour la suite.
                </p>
              </div>

              <div className="rounded-2xl border border-white/14 bg-black/34 p-4 sm:p-5">
                <div className="grid gap-3">
                  <Button asChild size="lg" className={`${primaryButtonClass} w-full px-6`}>
                    <Link href="/contact/">Échanger sur votre situation</Link>
                  </Button>
                  <Button asChild size="lg" className={`${darkButtonClass} w-full px-6`}>
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
