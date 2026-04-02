import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { darkButtonClass, inlineSeoLinkClass, primaryButtonClass } from "@/components/site/offre-page-kit"

const bulletListClass =
  "list-disc pl-6 space-y-2 marker:text-[#07bc7d] ae-text text-base sm:text-lg leading-relaxed"

const sectionClass = "space-y-4 border-b border-white/10 pb-8"

export const ProblematiqueRessaisiesMeta = {
  title: "Ressaisies Excel et mails en PME industrielle | AEGENS",
  description:
    "Ressaisies Excel, mails, fichiers parallèles : comprendre ce que ces pratiques révèlent dans une PME industrielle et pourquoi elles finissent par freiner le fonctionnement.",
}

export function ProblematiqueRessaisiesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Problématiques", href: "/problematiques" },
              { label: "Ressaisies Excel et mails en PME industrielle" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="max-w-[1240px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          <section className="ae-hero-shell ae-surface-strong ae-industrial-block rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="space-y-6 rounded-2xl border border-white/14 bg-black/26 p-6 sm:p-7 md:p-8">
              <h1 className="ae-hero-title text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] font-extrabold text-balance">
                Ressaisies Excel et mails en PME industrielle
              </h1>

              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Dans beaucoup de PME industrielles, le problème ne se présente pas d’abord comme un projet.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Il se présente comme une habitude.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Un fichier Excel est créé pour suivre un sujet plus proprement. Puis un deuxième fichier apparaît pour
                compléter le premier. Des informations circulent par mail parce que le support officiel ne suffit pas.
                Une équipe ressaisit ce qu’une autre a déjà produit, parce qu’elle a besoin de vérifier, de reformater
                ou simplement d’être sûre d’avoir la bonne version.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Au départ, ces pratiques sont souvent perçues comme pragmatiques. Elles permettent d’avancer. Elles
                compensent un manque de fluidité. Elles évitent de bloquer une opération. Elles donnent l’impression
                de sécuriser.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est précisément pour cette raison qu’elles s’installent.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Le problème est que, lorsqu’elles deviennent structurelles, elles finissent par produire l’inverse de
                ce qu’elles promettaient au départ :
              </p>
              <ul className={bulletListClass}>
                <li>plus de temps passé</li>
                <li>plus d’incertitude sur la bonne information</li>
                <li>plus de dépendance aux personnes</li>
                <li>plus de doublons</li>
                <li>moins de lisibilité sur le fonctionnement réel</li>
                <li>
                  une difficulté croissante à savoir où se trouve la version fiable, qui fait quoi, et à quel moment
                  une donnée devient réellement exploitable
                </li>
              </ul>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                Autrement dit, la ressaisie n’est presque jamais seulement une ressaisie.
              </p>
              <p className="ae-text text-base sm:text-lg leading-relaxed max-w-5xl">
                C’est le symptôme visible d’un fonctionnement qui compense au lieu d’être réellement structuré.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className={primaryButtonClass}>
                  <Link href="/contact/">Échanger sur votre situation</Link>
                </Button>
                <Button asChild size="lg" className={darkButtonClass}>
                  <Link href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/">
                    Découvrir notre offre diagnostic
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="ae-surface ae-industrial-block rounded-3xl p-6 sm:p-8 md:p-10">
            <article className="mx-auto max-w-[980px] space-y-10">
              <section className={sectionClass} aria-labelledby="sous-estime-title">
                <h2 id="sous-estime-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi ce sujet est sous-estimé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les ressaisies Excel et les échanges par mail posent un problème particulier : ils ont l’air
                  normaux.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Contrairement à une panne, à une rupture ou à un blocage brutal, ils n’arrêtent pas immédiatement le
                  travail. Ils permettent même souvent de le faire tenir.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">C’est ce qui les rend dangereux.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une entreprise peut fonctionner longtemps avec :
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs fichiers de suivi</li>
                  <li>des versions différentes d’une même donnée</li>
                  <li>des validations par mail</li>
                  <li>des relances manuelles</li>
                  <li>des recopies entre supports</li>
                  <li>des extractions retraitées localement</li>
                  <li>des tableaux personnels devenus indispensables à l’activité</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que cela marche, le sujet reste souvent sous le radar. Mais ce fonctionnement a un coût réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce coût n’est pas seulement un coût de temps.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est aussi un coût de lisibilité, de fiabilité et de coordination.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À partir d’un certain point, l’entreprise ne sait plus seulement qu’elle ressaisit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle ne sait plus toujours :
                </p>
                <ul className={bulletListClass}>
                  <li>quelle donnée fait foi</li>
                  <li>où commence et où s’arrête la responsabilité de chacun</li>
                  <li>ce qui relève du suivi officiel et ce qui relève d’une rustine locale</li>
                  <li>si les fichiers et les mails servent encore à piloter ou seulement à compenser</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est à ce moment-là que le sujet doit cesser d’être traité comme une simple gêne quotidienne.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="revele-title">
                <h2 id="revele-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que les ressaisies révèlent réellement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une ressaisie ne naît pas par accident.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle apparaît presque toujours parce qu’un besoin n’est pas correctement couvert dans le
                  fonctionnement existant.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ce besoin peut être de plusieurs natures.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il peut s’agir d’un besoin de visibilité : une équipe ressaisit parce qu’elle n’a pas accès à
                  l’information au bon moment, dans le bon format, ou avec le bon niveau de confiance.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il peut s’agir d’un besoin de contrôle : une donnée est reprise pour être vérifiée, corrigée ou
                  validée, parce que l’étape précédente n’apporte pas une fiabilité suffisante.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il peut s’agir d’un besoin de coordination : un fichier parallèle ou un envoi par mail sert à faire
                  circuler une information entre plusieurs acteurs, parce que le circuit normal ne suffit pas ou ne le
                  permet pas simplement.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il peut s’agir d’un besoin de méthode : les équipes ne travaillent pas toutes selon la même logique,
                  et la ressaisie devient alors le moyen de reconstituer une cohérence locale.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il peut enfin s’agir d’un besoin de traçabilité : quand le fonctionnement ne donne pas assez de
                  visibilité sur l’état réel d’un sujet, un suivi Excel ou mail devient une manière de garder la main.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Autrement dit, les ressaisies ne sont pas le vrai problème.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elles sont le langage par lequel le fonctionnement exprime ce qui lui manque.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="excel-mail-title">
                <h2 id="excel-mail-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi Excel et le mail prennent cette place
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il faut être précis ici.</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Excel et le mail ne sont pas, en soi, le problème.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils deviennent problématiques lorsqu’ils cessent d’être des outils utiles et deviennent des supports
                  de compensation permanents.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Excel prend souvent cette place parce qu’il est :
                </p>
                <ul className={bulletListClass}>
                  <li>accessible</li>
                  <li>souple</li>
                  <li>rapide à mettre en place</li>
                  <li>modifiable sans dépendance forte</li>
                  <li>facilement appropriable par une équipe ou une personne</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le mail, lui, devient un outil de pilotage implicite parce qu’il permet :
                </p>
                <ul className={bulletListClass}>
                  <li>de transmettre</li>
                  <li>de relancer</li>
                  <li>de valider</li>
                  <li>de laisser une trace</li>
                  <li>de contourner une rigidité perçue dans l’organisation ou dans les outils en place</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème ne vient donc pas du fait que les équipes utilisent Excel ou le mail.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème vient du moment où ces outils deviennent :
                </p>
                <ul className={bulletListClass}>
                  <li>la mémoire réelle du fonctionnement</li>
                  <li>le support principal des validations</li>
                  <li>l’endroit où l’on reconstitue le vrai état d’avancement</li>
                  <li>
                    le seul moyen de faire tenir ensemble des étapes qui devraient déjà être mieux structurées
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À ce stade, Excel et le mail cessent d’être des outils complémentaires.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Ils deviennent les béquilles d’un fonctionnement qui tient de plus en plus par compensation.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="bricolage-title">
                <h2 id="bricolage-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Les signes qu’il ne s’agit plus d’un simple bricolage local
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Toutes les ressaisies ne justifient pas une intervention.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certaines relèvent d’un besoin ponctuel, limité, parfaitement acceptable.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Mais certains signes montrent que le sujet a changé de nature.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Le premier signe, c’est la répétition.</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand les mêmes recopies, les mêmes extractions, les mêmes fichiers de suivi ou les mêmes échanges
                  par mail reviennent chaque semaine, chaque jour ou à chaque étape clé, il ne s’agit plus d’une
                  adaptation ponctuelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il s’agit d’un mode de fonctionnement installé.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le deuxième signe, c’est la multiplication des supports.
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une même information existe dans :
                </p>
                <ul className={bulletListClass}>
                  <li>un outil métier</li>
                  <li>un ou plusieurs fichiers Excel</li>
                  <li>des mails</li>
                  <li>des synthèses manuelles</li>
                  <li>parfois des notes personnelles</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  alors le sujet n’est plus seulement la double saisie.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet devient la fragmentation de la donnée et de sa lecture.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le troisième signe, c’est la dépendance à certaines personnes.
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand le fonctionnement repose sur celles et ceux qui savent où est la bonne version, savent comment
                  retraiter le fichier, savent quel mail fait foi ou savent comment reconstituer le bon état,
                  l’entreprise entre dans une zone fragile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le savoir de fonctionnement ne repose plus suffisamment sur l’organisation elle-même, mais sur des
                  relais humains qui compensent.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le quatrième signe, c’est l’impossibilité de dire clairement où se trouve la donnée de référence.
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À partir du moment où cette réponse devient floue, la ressaisie n’est plus seulement une perte de
                  temps.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle devient un risque de qualité, de coordination et de décision.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Le cinquième signe, c’est la fatigue organisationnelle.
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet n’est plus alors seulement technique ou administratif.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Il se voit dans :</p>
                <ul className={bulletListClass}>
                  <li>les relances</li>
                  <li>les reprises</li>
                  <li>les vérifications</li>
                  <li>les corrections</li>
                  <li>la charge mentale</li>
                  <li>la difficulté croissante à faire confiance à ce qui circule</li>
                </ul>
              </section>

              <section className={sectionClass} aria-labelledby="effets-title">
                <h2 id="effets-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce que ce problème produit dans une PME industrielle
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Dans une PME industrielle, les effets de ces pratiques sont souvent plus rapides et plus visibles
                  qu’ailleurs, parce que les équipes sont plus exposées directement au fonctionnement réel.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les ressaisies et les fichiers parallèles finissent souvent par produire plusieurs types d’effets.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Une perte de temps directe</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est l’effet le plus visible, mais pas toujours le plus grave.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Des personnes passent du temps à :
                </p>
                <ul className={bulletListClass}>
                  <li>recopier</li>
                  <li>reformater</li>
                  <li>vérifier</li>
                  <li>relancer</li>
                  <li>reconstituer</li>
                  <li>comparer des versions</li>
                  <li>remettre en forme une information déjà existante</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">Une baisse de fiabilité</h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Plus une donnée circule entre plusieurs supports, plus elle risque :
                </p>
                <ul className={bulletListClass}>
                  <li>d’être modifiée</li>
                  <li>d’être incomplète</li>
                  <li>d’être décalée</li>
                  <li>d’être interprétée différemment</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème n’est pas seulement l’erreur ponctuelle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème est l’incertitude permanente sur la donnée de référence.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Une dégradation des interfaces entre services
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand chaque service ou chaque équipe reconstruit localement sa propre version du suivi, les points
                  de passage deviennent plus fragiles.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  L’information n’est plus transmise dans une chaîne lisible.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle est reconstituée à chaque étape.
                </p>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Une perte de lisibilité sur le fonctionnement réel
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  À force de compenser, l’entreprise ne sait plus toujours :
                </p>
                <ul className={bulletListClass}>
                  <li>quel est le processus réel</li>
                  <li>quelles étapes sont effectivement suivies</li>
                  <li>où se trouvent les validations utiles</li>
                  <li>quels contournements sont devenus structurels</li>
                </ul>

                <h3 className="ae-heading text-xl sm:text-2xl font-semibold">
                  Une difficulté à faire évoluer le fonctionnement
                </h3>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que le réel repose sur plusieurs couches de fichiers et de mails, toute évolution devient plus
                  difficile à penser.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On risque alors de vouloir outiller un sujet que l’on n’a pas encore assez relu.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="fausse-bonne-title">
                <h2 id="fausse-bonne-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Pourquoi il faut éviter la fausse bonne réponse
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Quand une entreprise identifie un volume important de ressaisies Excel et de mails, la tentation est
                  forte de passer immédiatement à la réponse :
                </p>
                <ul className={bulletListClass}>
                  <li>nouvel outil</li>
                  <li>automatisation</li>
                  <li>interface</li>
                  <li>workflow</li>
                  <li>refonte</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le problème est que cette réponse peut être juste… ou complètement prématurée.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Pourquoi ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Parce qu’une ressaisie peut avoir plusieurs causes :
                </p>
                <ul className={bulletListClass}>
                  <li>une mauvaise structuration du besoin</li>
                  <li>une méthode hétérogène</li>
                  <li>une validation mal placée</li>
                  <li>une responsabilité implicite</li>
                  <li>une circulation d’information peu lisible</li>
                  <li>seulement un support inadapté</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que cette lecture n’est pas clarifiée, remplacer un support par un autre ne garantit rien.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  On peut très bien digitaliser un contournement sans traiter le fonctionnement qui l’a produit.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est l’une des erreurs les plus fréquentes : traiter comme un problème d’outil ce qui est d’abord
                  un problème de méthode, d’interface ou d’organisation.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="regarder-title">
                <h2 id="regarder-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’il faut regarder sérieusement
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour traiter correctement ce type de sujet, il faut revenir à quelques questions simples, mais
                  décisives.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  D’abord : qu’est-ce qui est ressaisi, exactement ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pas des données au sens large. Quelles données ? À quel moment ? Par qui ? Depuis quel support ? Vers
                  quel autre support ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ensuite : pourquoi est-ce ressaisi ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Pour vérifier ? Pour reformater ? Pour transmettre ? Pour suivre ? Pour compenser un manque de
                  visibilité ? Pour contourner une étape devenue trop lourde ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Puis : où la confiance se perd-elle ?</p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une ressaisie est souvent le signe qu’une équipe ne juge pas exploitable, visible ou fiable
                  l’information déjà produite en amont.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Enfin : qu’est-ce que cela révèle du fonctionnement ?
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">S’agit-il d’un problème :</p>
                <ul className={bulletListClass}>
                  <li>de méthode</li>
                  <li>de rôle</li>
                  <li>de validation</li>
                  <li>d’interface</li>
                  <li>de standardisation</li>
                  <li>de circulation de l’information</li>
                  <li>de structuration plus large</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Tant que ces questions ne sont pas posées proprement, la réponse restera approximative.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="intervention-title">
                <h2 id="intervention-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Ce qu’une intervention utile permet
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Une intervention sérieuse sur ce sujet ne consiste pas à recenser tous les fichiers Excel de
                  l’entreprise ni à produire un discours général sur la digitalisation.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Elle doit permettre de :</p>
                <ul className={bulletListClass}>
                  <li>localiser les vraies ressaisies structurantes</li>
                  <li>distinguer les pratiques ponctuelles des pratiques installées</li>
                  <li>comprendre ce que les fichiers et mails compensent réellement</li>
                  <li>identifier les points de passage fragiles</li>
                  <li>clarifier les méthodes de travail</li>
                  <li>faire émerger les responsabilités implicites</li>
                  <li>hiérarchiser les leviers d’action</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Cette hiérarchisation est essentielle.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Toutes les ressaisies ne justifient pas le même niveau de réponse.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Certaines demandent :
                </p>
                <ul className={bulletListClass}>
                  <li>un ajustement simple</li>
                  <li>une clarification de méthode</li>
                  <li>une harmonisation</li>
                  <li>une remise à plat d’un processus</li>
                  <li>un cadrage plus large avant tout projet de solution</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  La vraie valeur ne vient donc pas d’une promesse de suppression immédiate.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Elle vient d’une lecture plus juste de ce qui doit être traité, et à quel niveau.
                </p>
              </section>

              <section className={sectionClass} aria-labelledby="concern-title">
                <h2 id="concern-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  Comment savoir si vous êtes concerné
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le sujet mérite généralement un vrai travail de fond quand plusieurs réponses à ces questions sont
                  oui :
                </p>
                <ul className={bulletListClass}>
                  <li>plusieurs équipes ressaisissent les mêmes informations</li>
                  <li>les fichiers Excel sont devenus indispensables au fonctionnement courant</li>
                  <li>le mail sert de support principal de validation ou de suivi</li>
                  <li>il existe plusieurs versions d’une même donnée</li>
                  <li>le vrai état d’avancement ne se trouve pas dans un support unique et lisible</li>
                  <li>
                    certaines personnes tiennent le fonctionnement à elles seules parce qu’elles savent comment faire
                    tenir les écarts
                  </li>
                  <li>
                    les équipes perdent du temps, mais sans lecture encore suffisamment structurée des causes
                  </li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si c’est le cas, le sujet ne relève probablement plus d’un simple bricolage utile.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Il devient un vrai sujet de fonctionnement.
                </p>
              </section>

              <section className="space-y-4" aria-labelledby="summary-title">
                <h2 id="summary-title" className="ae-heading text-2xl sm:text-3xl font-bold leading-tight">
                  En résumé
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Les ressaisies Excel et les échanges par mail en PME industrielle ne sont pas seulement des mauvaises
                  habitudes.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">Ils révèlent souvent :</p>
                <ul className={bulletListClass}>
                  <li>une circulation d’information insuffisamment stabilisée</li>
                  <li>des méthodes de travail hétérogènes</li>
                  <li>des validations mal positionnées</li>
                  <li>des responsabilités implicites</li>
                  <li>un fonctionnement qui repose trop sur des compensations</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe n’est donc pas toujours de chercher immédiatement une nouvelle solution.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Le bon réflexe est souvent de comprendre :
                </p>
                <ul className={bulletListClass}>
                  <li>ce qui est ressaisi</li>
                  <li>pourquoi</li>
                  <li>à quel moment</li>
                  <li>par qui</li>
                  <li>ce que cela dit du fonctionnement réel</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  C’est cette lecture qui permet ensuite de choisir la bonne réponse :
                </p>
                <ul className={bulletListClass}>
                  <li>simplifier</li>
                  <li>harmoniser</li>
                  <li>clarifier</li>
                  <li>cadrer</li>
                  <li>mettre en œuvre quelque chose de plus structuré</li>
                </ul>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Si les fichiers Excel et les mails sont devenus le vrai système de tenue du quotidien, c’est souvent
                  que le sujet mérite d’être traité à un niveau plus sérieux.
                </p>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Liens utiles :{" "}
                  <Link
                    href="/offres/diagnostic-fonctionnement-operationnel-pme-industrielle/"
                    className={inlineSeoLinkClass}
                  >
                    offre diagnostic du fonctionnement opérationnel
                  </Link>
                  ,{" "}
                  <Link
                    href="/problematiques/pertes-de-temps-entre-services-industrie/"
                    className={inlineSeoLinkClass}
                  >
                    pertes de temps entre services en industrie
                  </Link>
                  ,{" "}
                  <Link
                    href="/problematiques/methodes-de-travail-non-harmonisees/"
                    className={inlineSeoLinkClass}
                  >
                    méthodes de travail non harmonisées
                  </Link>
                  ,{" "}
                  <Link
                    href="/cas-clients/reduction-des-ressaisies-et-clarification-des-methodes/"
                    className={inlineSeoLinkClass}
                  >
                    cas client réduction des ressaisies
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
                  Besoin d’objectiver les ressaisies et doublons dans votre organisation ?
                </h2>
                <p className="ae-text text-base sm:text-lg leading-relaxed">
                  Nous vous aidons à clarifier les causes, structurer les méthodes et sécuriser une suite utile.
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
