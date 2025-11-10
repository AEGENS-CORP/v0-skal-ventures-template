import { createPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Target, FileText, Zap, TrendingUp, Shield } from "lucide-react"

export const metadata = createPageMetadata({
  title: "Études de cas IA | Automatisation, assistants, reporting — avant/après mesurés",
  path: "/etudes-de-cas",
  description: "Projets concrets. Résultats mesurés. Méthode reproductible. Visite terrain et devis sous 48 h.",
})

export default function EtudesDecasPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Études de cas" }]} />
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Études de cas",
            description:
              "Des résultats concrets, mesurés, reproductibles. Chaque étude suit la même méthode: baseline signée, objectifs chiffrés, déploiement contrôlé, mesure avant/après.",
            provider: { "@type": "LocalBusiness", name: "Skal Ventures" },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-12 px-4 sm:px-6 md:pb-16 lg:pt-52">
        <div className="max-w-7xl mx-auto my-0">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-center leading-tight">
            Études de cas
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-10 md:mb-12 leading-relaxed text-center max-w-5xl mx-auto font-semibold">
            Des résultats concrets, mesurés, reproductibles
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed text-center max-w-4xl mx-auto">
            Nous publions des projets réels et des exemples anonymisés. Chaque étude suit la même méthode: baseline
            signée, objectifs chiffrés, déploiement contrôlé, mesure avant/après, plan d'extension.
          </p>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-12 px-4 sm:px-6 bg-white/10 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto w-full sm:w-auto transition-all duration-300 hover:scale-[1.02] shadow-xl"
          >
            <Link href="/contact" className="block">
              <span className="font-semibold flex items-center gap-2 justify-center">
                <Zap className="w-5 h-5 text-yellow-400" />
                Planifier une visite sur site
              </span>
              <span className="block text-xs sm:text-sm font-normal mt-2 opacity-80">
                Visite 60–90 min. Plan d'action et devis sous 48 h.
                <br />
                Orienté solution sur mesure et croissance ROI
              </span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Ce que vous verrez dans chaque étude */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-14 text-center">
            Ce que vous verrez dans chaque étude
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: Target,
                title: "Contexte",
                desc: "Secteur, effectif, outils, localisation.",
              },
              {
                icon: FileText,
                title: "Problème",
                desc: "Frictions mesurables et impacts.",
              },
              {
                icon: CheckCircle,
                title: "Objectifs & KPI",
                desc: "Baseline validée, sources de vérité.",
              },
              {
                icon: Zap,
                title: "Solution",
                desc: "Parcours as-is → to-be, intégrations, contrôle humain.",
              },
              {
                icon: Target,
                title: "Déploiement",
                desc: "Jalons, tests, bascule, formation.",
              },
              {
                icon: TrendingUp,
                title: "Résultats avant/après",
                desc: "Tableaux courts, preuves.",
              },
              {
                icon: TrendingUp,
                title: "Impact business",
                desc: "Décisions plus rapides, gains de temps/qualité.",
              },
              {
                icon: CheckCircle,
                title: "Prochaines étapes",
                desc: "Optimisation, élargissement, roadmap.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 md:p-7 bg-white/15 rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white/60 mb-4 md:mb-5" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre méthode de mesure */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-14 text-center">
            Notre méthode de mesure
          </h2>
          <ul className="space-y-5 md:space-y-6 max-w-5xl mx-auto">
            {[
              "Baseline signée avant travaux.",
              "KPI tracés dans des rapports partagés.",
              "Sources de vérité explicites (ERP, CRM, WMS/MES, compta).",
              "Jeux de tests et tolérances convenus.",
              "Tableau avant/après livré en fin de pilote.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 md:gap-5 text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed"
              >
                <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-green-400 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cas #1 — Négoce B2B */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10">
            <span className="text-base md:text-lg text-white/50 uppercase tracking-wider font-semibold">
              Cas #1 — Négoce B2B (Exemple anonymisé, La Roche-sur-Yon)
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-10 text-center flex items-center justify-center gap-4">
            <TrendingUp className="w-12 h-12 md:w-14 md:h-14 text-green-400" />
            Ressaisie supprimée sur le flux devis → facture
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-center text-white/90 mb-12 md:mb-16 font-semibold">
            Temps de saisie −32 % en 7 semaines.
          </p>

          <div className="space-y-10 md:space-y-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Contexte</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Négoce 35 pers. ERP compta en place, CRM sous-utilisé, GED simple.
                </p>
              </div>

              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Problème</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Ressaisies multiples devis/BL/factures. Retards de facturation. Erreurs de TVA ponctuelles.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 to-white/15 border border-white/20 rounded-xl p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Objectifs & KPI</h3>
              <ul className="space-y-4 md:space-y-5 text-white/90">
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">Temps de saisie devis→facture −25 à −35 %.</span>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">Erreurs documents −15 à −25 %.</span>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">Dispo des ventes en quasi temps réel.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
              <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">Solution</h3>
              <ul className="space-y-4 text-white/70 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">Orchestration devis→BL→facture.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">
                    OCR/LLM pour factures fournisseurs avec contrôles (montants, TVA, fournisseurs).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">GED reliée et archivage automatique.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">Étapes de validation humaine là où nécessaire.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
              <h3 className="text-2xl md:text-3xl font-bold mb-5">Déploiement</h3>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                J+7 mapping champs. J+15 UAT. J+30 prod progressive. Formation front office.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/15 to-green-500/10 border border-green-500/20 rounded-xl p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                <TrendingUp className="w-9 h-9 md:w-10 md:h-10 text-green-400" />
                Résultats avant/après
              </h3>
              <ul className="space-y-5 md:space-y-6 text-white/95">
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Temps de saisie: −32 %</strong> (mesure horodatée sur 4 semaines).
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Erreurs documentaires: −18 %.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Ventes:</strong> disponibilité quasi temps réel (selon source ERP).
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Impact business</h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Facturation plus rapide. Relances déclenchées plus tôt. Pilotage ventes fiable.
                </p>
              </div>

              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Prochaines étapes</h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Relances clients pilotées. Réassorts avec seuils dynamiques.
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/50 italic text-center">
              Mention légale: exemple anonymisé représentatif. À remplacer par un cas client validé dès publication.
            </p>
          </div>
        </div>
      </section>

      {/* Cas #2 — Cabinet comptable */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10">
            <span className="text-base md:text-lg text-white/50 uppercase tracking-wider font-semibold">
              Cas #2 — Cabinet comptable (Exemple anonymisé, Niort)
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-10 text-center flex items-center justify-center gap-4">
            <Zap className="w-12 h-12 md:w-14 md:h-14 text-yellow-400" />
            Assistant documentaire avec réponses sourcées
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-center text-white/90 mb-12 md:mb-16 font-semibold">
            Délai de réponse −18 % en 60 jours.
          </p>

          <div className="space-y-10 md:space-y-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Contexte</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Cabinet 25 pers. GED + Drive, base de procédures internes, forte saisonnalité.
                </p>
              </div>

              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Problème</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Recherche lente dans les procédures. Variabilité des réponses. Allers-retours clients fréquents.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 to-white/15 border border-white/20 rounded-xl p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Objectifs & KPI</h3>
              <ul className="space-y-4 md:space-y-5 text-white/90">
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">Temps de réponse moyen −15 à −25 %.</span>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">Première réponse correcte +10 à +20 pts.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-white/60 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">Adoption par 3 équipes pilotes.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
              <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">Solution</h3>
              <ul className="space-y-4 text-white/70 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">Assistant IA métier (RAG) sur procédures internes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">
                    Sources citées, seuil de confiance, refus en cas d'ambiguïté.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">Gabarits de réponses et validation humaine.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
              <h3 className="text-2xl md:text-3xl font-bold mb-5">Déploiement</h3>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                J+7 corpus et droits. J+15 tests. J+30 prod restreinte. Formation 2h.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/15 to-yellow-500/10 border border-yellow-500/20 rounded-xl p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                <Zap className="w-9 h-9 md:w-10 md:h-10 text-yellow-400" />
                Résultats avant/après
              </h3>
              <ul className="space-y-5 md:space-y-6 text-white/95">
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Délai de réponse: −18 %.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Première réponse correcte: +13 pts.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-white/60 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Connaissance interne:</strong> FAQ enrichie.
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Impact business</h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Moins d'allers-retours. Meilleure homogénéité. Onboarding plus rapide.
                </p>
              </div>

              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Prochaines étapes</h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Extension aux cas fiscaux récurrents. Connecteur portail client.
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/50 italic text-center">
              Mention légale: exemple anonymisé représentatif. À remplacer par un cas client validé dès publication.
            </p>
          </div>
        </div>
      </section>

      {/* Cas #3 — Atelier industriel */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 md:mb-10">
            <span className="text-base md:text-lg text-white/50 uppercase tracking-wider font-semibold">
              Cas #3 — Atelier industriel (Exemple anonymisé, Nantes)
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-10 text-center flex items-center justify-center gap-4">
            <TrendingUp className="w-12 h-12 md:w-14 md:h-14 text-green-400" />
            Tableaux temps réel atelier
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-center text-white/90 mb-12 md:mb-16 font-semibold">
            Retards de production −12 % en 2 mois.
          </p>

          <div className="space-y-10 md:space-y-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Contexte</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  PME 60 pers. ERP + suivi atelier manuel. Aucune alerte en direct.
                </p>
              </div>

              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Problème</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Décisions tardives. Retards non détectés assez tôt. Ruptures en chaîne.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/20 to-white/15 border border-white/20 rounded-xl p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Objectifs & KPI</h3>
              <ul className="space-y-4 md:space-y-5 text-white/90">
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">TRS suivi en temps réel/quasi temps réel.</span>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">Retards −10 à −20 %.</span>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-lg md:text-xl lg:text-2xl">Alertes seuil pertinentes.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
              <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">Solution</h3>
              <ul className="space-y-4 text-white/70 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">Connecteurs ERP + atelier.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">Tableaux direction et écrans d'îlot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/30 mt-1 text-xl">•</span>
                  <span className="text-lg md:text-xl">Alerte seuil + commentaires générés.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
              <h3 className="text-2xl md:text-3xl font-bold mb-5">Déploiement</h3>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                J+7 schéma données. J+15 tableaux pilotes. J+30 écrans îlot et alerte.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/15 to-green-500/10 border border-green-500/20 rounded-xl p-8 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                <TrendingUp className="w-9 h-9 md:w-10 md:h-10 text-green-400" />
                Résultats avant/après
              </h3>
              <ul className="space-y-5 md:space-y-6 text-white/95">
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Retards: −12 %.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Décisions en séance.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-xl md:text-2xl lg:text-3xl">
                    <strong>Qualité de données en hausse</strong> (contrôles).
                  </span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Impact business</h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  Cadence stabilisée. Fin des arbitrages "à l'aveugle".
                </p>
              </div>

              <div className="bg-white/15 border border-white/10 rounded-xl p-7 md:p-9">
                <h3 className="text-2xl md:text-3xl font-bold mb-5">Prochaines étapes</h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                  TRS par poste. Réduction rebuts. Prévision simple.
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/50 italic text-center">
              Mention légale: exemple anonymisé représentatif. À remplacer par un cas client validé dès publication.
            </p>
          </div>
        </div>
      </section>

      {/* Comment faire votre étude de cas */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Comment faire votre étude de cas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "1",
                desc: "Pilote 30 jours sur un flux, un assistant ou un tableau prioritaire.",
              },
              {
                num: "2",
                desc: "Mesure avant/après avec sources tracées.",
              },
              {
                num: "3",
                desc: "Validation client.",
              },
              {
                num: "4",
                desc: "Publication (nom/logo ou anonymisé) + citation courte.",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-white/20 to-white/15 rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 border border-white/20">
                  {step.num}
                </div>
                <p className="text-base text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center">FAQ — Études de cas</h2>
          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            <AccordionItem
              value="item-1"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/15 hover:bg-white/20 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Pourquoi peu de logos ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Nous publions avec l'accord écrit des clients. Sinon, nous anonymisons.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/15 hover:bg-white/20 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Les chiffres sont-ils garantis ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non. Les objectifs sont cadrés. Les résultats sont mesurés, tracés et publiés avec prudence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/15 hover:bg-white/20 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Quels secteurs couvrez-vous ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Négoce, industrie/ateliers, services B2B, cabinets comptables, retail/e-commerce, logistique,
                immobilier/maintenance, éducation/associations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/15 hover:bg-white/20 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Comment démarrer ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Une visite terrain, un cadrage sous 48 h, puis un pilote de 30 jours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-white/15 via-white/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight flex items-center justify-center gap-3">
            <Zap className="w-12 h-12 text-yellow-400" />
            Planifier une visite sur site
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-2xl mx-auto">
            Visite 60–90 min.{" "}
            <Link href="/contact" className="underline hover:text-white transition-colors font-semibold">
              Plan d'action et devis
            </Link>{" "}
            sous 48 h.
            <br />
            Orienté solution sur mesure et croissance ROI
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 lg:px-16 py-5 sm:py-6 md:py-7 lg:py-8 h-auto hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto"
          >
            <Link href="/contact">Prendre contact</Link>
          </Button>
        </div>
      </section>

      {/* Notes de confiance */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Shield className="w-8 h-8 text-white/60" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Notes de confiance</h2>
          </div>
          <ul className="space-y-4 text-white/70 leading-relaxed text-center max-w-3xl mx-auto">
            <li className="flex items-center justify-center gap-3">
              <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0" />
              <span>Données cloisonnées. Accès par rôles. Hébergement UE possible.</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0" />
              <span>Procédure de reprise documentée. Réversibilité prévue au contrat.</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0" />
              <span>DPA/RGPD disponibles sur demande.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
