import { createPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Cog,
  Bot,
  BarChart3,
  Search,
  ShoppingCart,
  CheckCircle,
  Target,
  Zap,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = createPageMetadata({
  title: "Services d'intégration IA et automatisation | Automatisation, Assistant IA, Reporting, Audit",
  path: "/services",
  description:
    "Intégration sur mesure pour TPE/PME. Automatisation, assistant IA, reporting temps réel, audit 360°, vente/gestion. Visite terrain et devis sous 48 h.",
})

export default function ServicesPage() {
  return (
    <div>
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Services" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-balance leading-[1.1]">
            Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto">
            Intégration et gestion technologique sur mesure pour TPE/PME.
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:inline sm:mt-0">
              Automatisation, assistants, reporting, audit, vente/gestion. Résultats en semaines. ROI mesurable.
            </span>
          </p>
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
              </span>
              <span className="block text-xs sm:text-sm font-normal opacity-80">
                Orienté solution sur mesure et croissance ROI
              </span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Choisissez votre besoin */}
      <section className="py-12 md:py-16 lg:py-px">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center">
            Choisissez votre besoin
          </h2>

          <div className="space-y-8 md:space-y-12">
            {/* 1. Automatisation */}
            <Link href="/services/automatisation" className="block">
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4 mb-5">
                  <Cog className="w-10 h-10 md:w-12 md:h-12 text-white/60 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Automatisation</h3>
                    <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                      Supprimer la ressaisie. Sécuriser les flux. Décider plus vite.
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-white/90 mb-3 text-base md:text-lg">Ce que nous livrons</p>
                  <ul className="space-y-2 text-white/70 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Flux ERP/CRM/compta/e-commerce orchestrés.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Contrôles + validation humaine.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Runbook + mesure avant/après.</span>
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent pointer-events-none"
                >
                  Voir la page Automatisation →
                </Button>
              </div>
            </Link>

            {/* 2. Assistant IA Métier */}
            <Link href="/services/assistant-ia-metier" className="block">
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4 mb-5">
                  <Bot className="w-10 h-10 md:w-12 md:h-12 text-white/60 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Assistant IA Métier</h3>
                    <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                      Réponses sourcées depuis vos documents. Productivité immédiate.
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-white/90 mb-3 text-base md:text-lg">Ce que nous livrons</p>
                  <ul className="space-y-2 text-white/70 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>RAG sécurisé + gabarits de réponses.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Jeux de tests + seuils de confiance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Formation + gouvernance du corpus.</span>
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent pointer-events-none"
                >
                  Voir la page Assistant IA Métier →
                </Button>
              </div>
            </Link>

            {/* 3. Analyse & Reporting */}
            <Link href="/services/analyse-reporting" className="block">
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4 mb-5">
                  <BarChart3 className="w-10 h-10 md:w-12 md:h-12 text-white/60 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Analyse & Reporting</h3>
                    <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                      Indicateurs temps réel quand la source le permet. Alertes utiles.
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-white/90 mb-3 text-base md:text-lg">Ce que nous livrons</p>
                  <ul className="space-y-2 text-white/70 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Modèle de données métier.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Tableaux direction/métiers + alerting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Dictionnaire + tests KPI.</span>
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent pointer-events-none"
                >
                  Voir la page Analyse & Reporting →
                </Button>
              </div>
            </Link>

            {/* 4. Audit 360° */}
            <Link href="/services/audit" className="block">
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4 mb-5">
                  <Search className="w-10 h-10 md:w-12 md:h-12 text-white/60 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Audit 360°</h3>
                    <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                      5 jours pour cartographier processus, SI, données, supply.
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-white/90 mb-3 text-base md:text-lg">Ce que nous livrons</p>
                  <ul className="space-y-2 text-white/70 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Blueprint "as-is → to-be".</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Backlog priorisé + business case.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Roadmap 90/180/360 jours.</span>
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent pointer-events-none"
                >
                  Voir la page Audit →
                </Button>
              </div>
            </Link>

            {/* 5. Vente / Gestion */}
            <Link href="/services/vente-gestion" className="block">
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4 mb-5">
                  <ShoppingCart className="w-10 h-10 md:w-12 md:h-12 text-white/60 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">Vente / Gestion</h3>
                    <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
                      Du premier contact à l'exploitation. Sans friction.
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="font-semibold text-white/90 mb-3 text-base md:text-lg">Ce que nous livrons</p>
                  <ul className="space-y-2 text-white/70 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Process de vente cadré, critères d'acceptation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Mise en production maîtrisée.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Support/SLA + QBR valeur.</span>
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent pointer-events-none"
                >
                  Voir la page Vente / Gestion →
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Ce que vous obtenez à chaque mission */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-12 text-center">
            Ce que vous obtenez à chaque mission
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Target,
                text: "Objectifs et KPI définis au cadrage.",
              },
              {
                icon: TrendingUp,
                text: "Mesure avant/après et sources de vérité explicites.",
                iconColor: "text-green-400",
              },
              {
                icon: Shield,
                text: "Sécurité intégrée: accès par rôles, journaux, réversibilité.",
              },
              {
                icon: CheckCircle,
                text: "Documentation: runbook, gabarits, checklists d'adoption.",
              },
              {
                icon: Users,
                text: "Suivi: revues régulières, tableau partagé, évolutions légères.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 md:p-7 rounded-xl border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all duration-300"
              >
                <item.icon
                  className={`w-7 h-7 md:w-8 md:h-8 ${item.iconColor || "text-white/60"} flex-shrink-0 mt-1`}
                  strokeWidth={1.5}
                />
                <p className="text-base md:text-lg text-white/80 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment on travaille */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 md:mb-12 text-center">
            Comment on travaille
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                num: "1",
                title: "Visite sur site 60–90 min.",
              },
              {
                num: "2",
                title: "Cadrage sous 48 h: objectifs, KPI, jalons, responsabilités.",
              },
              {
                num: "3",
                title: "Pilote 30 jours: un flux ou un assistant ou un tableau temps réel.",
              },
              {
                num: "4",
                title: "Mise en production: bascule progressive, formation.",
              },
              {
                num: "5",
                title: "Opérations managées: supervision, petites évolutions.",
              },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-gradient-to-br from-white/20 to-white/15 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold mb-5 md:mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {step.num}
                </div>
                <p className="text-base md:text-lg text-white/80 leading-relaxed text-center">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            <AccordionItem
              value="item-1"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Faut-il changer d'outils ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non par défaut. On connecte l'existant. Alternative proposée si ROI clair.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Temps réel ou J+1 ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Temps réel quand la source le permet. Sinon latence courte définie au cadrage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Quand voit-on un premier résultat ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Typiquement sous 30 jours sur le périmètre pilote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Comment suivez-vous la valeur ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                KPI cadrés, mesure avant/après, rapport simple partagé.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-white/10 rounded-xl px-5 md:px-6 hover:bg-white/15 transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Tarification ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Sur devis après visite et cadrage. Devis transmis sous 48 h.
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
            Visite 60–90 min. Plan d'action et devis sous 48 h.
            <br />
            <span className="text-white/70">Orienté solution sur mesure et croissance ROI</span>
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
    </div>
  )
}
