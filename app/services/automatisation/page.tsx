import { createPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  FileText,
  ShoppingCart,
  Package,
  Cog,
  DollarSign,
  Users,
  CheckCircle,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = createPageMetadata({
  title: "Automatisation IA pour TPE/PME | Intégration sur mesure, résultats rapides",
  path: "/services/automatisation",
  description: "Automatiser ERP/CRM/compta/e-commerce. Flux fiables en temps réel. Visite terrain et devis sous 48 h.",
})

export default function AutomatisationPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Automatisation" },
            ]}
          />
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automatisation des processus métier",
            description:
              "Intégration et automatisation sur mesure de flux ERP, CRM, comptabilité, e-commerce, WMS/MES et GED, avec contrôle humain et mise en production sécurisée.",
            provider: { "@type": "LocalBusiness", name: "Skal Ventures" },
            areaServed: ["La Roche-sur-Yon", "La Rochelle", "Niort", "Nantes", "Poitiers", "Angoulême"],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-12 md:pt-16 pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-balance leading-[1.1] text-center">
              Automatisation des processus métier
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-10 md:mb-12 leading-relaxed max-w-4xl text-center mx-auto">
              Supprimer la ressaisie. Sécuriser les flux. Décider en temps réel.
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:inline sm:mt-0">
                Partenaire durable. Solutions sur mesure. Croissance et ROI.
              </span>
            </p>
            <div className="flex justify-center">
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
                    60–90 min. Plan d'action + devis sous 48 h.
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promesse */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Zap, text: "Résultats visibles en semaines.", iconColor: "text-yellow-400" },
              { icon: Cog, text: "Intégration à vos outils existants.", iconColor: "text-white/60" },
              { icon: Target, text: "Mesure avant/après garantie.", iconColor: "text-white/60" },
              { icon: Users, text: "Accompagnement long terme.", iconColor: "text-white/60" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 md:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <item.icon
                  className={`w-6 h-6 md:w-7 md:h-7 ${item.iconColor} group-hover:text-white/80 flex-shrink-0 mt-1 transition-colors`}
                  strokeWidth={1.5}
                />
                <p className="text-base md:text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que nous automatisons */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Ce que nous automatisons
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: FileText,
                title: "Documents & back-office",
                items: [
                  "Capture factures/avoirs/BL/commandes (OCR/LLM) → contrôles → compta/ERP.",
                  "Génération devis/BL/factures à partir d'événements CRM/e-commerce.",
                  "Classement intelligent, GED reliée aux dossiers clients/fournisseurs.",
                ],
              },
              {
                icon: ShoppingCart,
                title: "Vente & relation client",
                items: [
                  "Devis → commande → expédition → facture synchronisés.",
                  "Relances pilotées (échéances, priorités, canaux).",
                  "Aide à la réponse commerciale sur base documentaire.",
                ],
              },
              {
                icon: Package,
                title: "Achats, stocks, supply chain",
                items: [
                  "Tarifs/références/stocks multi-canaux à jour.",
                  "Réassorts et ruptures: alertes + propositions d'ordres.",
                  "Synchronisation WMS/MES ↔ ERP.",
                ],
              },
              {
                icon: Cog,
                title: "Production & opérations",
                items: [
                  "Orchestration d'étapes planifiées/événementielles.",
                  "Contrôles qualité automatisés, exceptions tracées.",
                  "Notifications ciblées aux bonnes équipes.",
                ],
              },
              {
                icon: DollarSign,
                title: "Finance & administration",
                items: [
                  "Rapprochements simples, lettrages, pré-contrôles TVA.",
                  "Extraction d'écritures pour reporting temps réel.",
                  "Notes de frais: capture, règles, export compta.",
                ],
              },
              {
                icon: Users,
                title: "Support & RH",
                items: [
                  "Tri/assignation des tickets, suggestions de réponses, base RAG interne.",
                  "Onboarding/offboarding, provision d'accès, checklists automatiques.",
                ],
              },
            ].map((category, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <category.icon
                  className="w-8 h-8 md:w-10 md:h-10 text-white/60 group-hover:text-white/80 mb-4 md:mb-6 transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 leading-tight">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="text-white/70 text-sm md:text-base leading-relaxed flex items-start gap-3">
                      <span className="text-white/30 mt-1.5 text-lg">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-center mt-10 md:mt-12 italic text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Tout est étudiable. Ces exemples ouvrent la porte. On s'adapte à vos idées et à votre contexte.
          </p>
        </div>
      </section>

      {/* Playbooks */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Playbooks prêts à l'emploi
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                title: "Commercial",
                icon: <TrendingUp className="w-5 h-5 text-green-400" />,
                desc: "Pipeline propre. Relances intelligentes. Vues marge.",
                kpi: "KPI: délai devis, taux de transformation, cash-in.",
              },
              {
                title: "Production/Logistique",
                icon: <Zap className="w-5 h-5 text-yellow-400" />,
                desc: "TRS, retards, ruptures. Alertes temps réel.",
                kpi: "KPI: lead time, OTD, coûts unitaires.",
              },
              {
                title: "Finance",
                icon: <TrendingUp className="w-5 h-5 text-green-400" />,
                desc: "DSO, écarts, prévision simple.",
                kpi: "KPI: DSO, fiabilité clôture, variances.",
              },
              {
                title: "Support/Service client",
                icon: null,
                desc: "SLA, base de connaissances, réponses guidées.",
                kpi: "KPI: temps de réponse, résolution au premier contact.",
              },
              {
                title: "RH/Organisation",
                icon: null,
                desc: "On/off-boarding, notes de frais, CR automatiques.",
                kpi: "KPI: délais d'intégration, erreurs, conformité.",
              },
            ].map((playbook, i) => (
              <div
                key={i}
                className="p-5 md:p-6 border border-white/10 rounded-xl bg-black/50 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 leading-tight flex items-center gap-2">
                  {playbook.title}
                  {playbook.icon}
                </h3>
                <p className="text-white/70 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">{playbook.desc}</p>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">{playbook.kpi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats attendus */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-10 h-10 text-green-400" />
            Résultats attendus
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors">
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
              Objectifs chiffrés fixés au cadrage. Mesure avant/après incluse.
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:inline sm:mt-0 text-white/70">
                Focales: temps de saisie, taux d'erreurs, délais de traitement, disponibilité d'indicateurs temps réel.
              </span>
            </p>
            <div className="space-y-4 md:space-y-5">
              <p className="font-semibold text-white/90 text-base md:text-lg">
                Repères marché (indicatifs, non contractuels)
              </p>
              <ul className="space-y-3 md:space-y-4 text-white/70 text-sm md:text-base">
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Automatisation ciblée: gains de productivité constatés sur tâches répétitives.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Assistants documentaires: réduction notable des temps de recherche/rédaction.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Pilotage temps réel: baisse mesurable des retards et écarts opérationnels.</span>
                </li>
              </ul>
              <p className="text-xs md:text-sm text-white/50 italic mt-4 md:mt-6">(Sources sectorielles 2023–2024.)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Méthode - Timeline */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Méthode</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                num: "1",
                title: "Visite terrain",
                desc: "60–90 min — flux, volumes, exceptions, accès.",
              },
              {
                num: "2",
                title: "Cadrage ≤ 48 h",
                desc: "Objectifs, KPI, jalons, responsabilités, risques.",
              },
              {
                num: "3",
                title: "Pilote 30 jours",
                desc: "Un flux automatisé en conditions réelles. Démos hebdo 20 min.",
              },
              {
                num: "4",
                title: "Mise en production",
                desc: "Bascule progressive, formation, runbook, reprise.",
              },
              {
                num: "5",
                title: "Opérations managées",
                desc: "Supervision, petites évolutions, revues régulières.",
              },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 leading-tight">{step.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livrables & Prérequis */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Livrables</h2>
              <ul className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base">
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Mapping des champs et spec courte du flux.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Schéma "avant → après" + points de contrôle.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Checklists de validation humaine.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Runbook d'exploitation + modes opératoires.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Plan de mesure + tableau de suivi des KPI.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Prérequis</h2>
              <p className="text-white/70 leading-relaxed text-sm md:text-base lg:text-lg">
                Accès lecture/écriture, échantillons de données, référent métier disponible, règles d'exception
                clarifiées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intégrations */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
            Intégrations (exemples)
          </h2>
          <p className="text-white/70 mb-6 md:mb-8 text-base md:text-lg lg:text-xl leading-relaxed">
            n8n · Odoo · Sage · EBP · Cegid · HubSpot · Pipedrive · Salesforce · Shopify · PrestaShop · WooCommerce ·
            Google Workspace · Microsoft 365 · Slack · Teams · outils ITSM et GED.
          </p>
          <p className="text-white/50 italic text-sm md:text-base">Agnostiques. Pas de verrou inutile.</p>
        </div>
      </section>

      {/* Sécurité & Gouvernance */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6 lg:mb-8 text-center lg:text-left">
                Sécurité & conformité
              </h2>
              <div className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base leading-relaxed">
                <p>
                  Accès par rôles. Journaux. Cloisonnement environnements. Hébergement UE possible. DPA/RGPD sur
                  demande.
                </p>
                <p>Procédure de reprise et réversibilité prévues.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 md:mb-6 lg:mb-8 text-center lg:text-left">
                Gouvernance
              </h2>
              <ul className="space-y-3 md:space-y-4 text-white/70 text-sm md:text-base">
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Onboarding 2–4 semaines selon périmètre.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Revue delivery hebdo.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Support: prise en compte &lt; J+1, escalade bloquante &lt; H4.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Dashboard partagé: avancement, risques, KPI.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">Zone d'intervention</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 mb-4 md:mb-6 leading-relaxed">
            Visites sur site dans un rayon ~2 h. À distance au-delà.
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Adresse: 18 Rue Ampère, ZI La Folie Sud, 85310 La Chaize-le-Vicomte · Tél:{" "}
            <Link href="tel:0745103015" className="hover:text-white transition-colors font-sans hover:underline">
              07 45 10 30 15
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            <AccordionItem
              value="item-1"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Faut-il changer d'outils ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non par défaut. On connecte l'existant.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Quand un premier résultat ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Pilote typique ≈ 30 jours selon périmètre et accès.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Et sans API ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Automatisation assistée (RPA léger) + validation humaine + reprise prévue.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Comment suivez-vous la performance ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                KPI cadrés, mesure avant/après, tableau de bord partagé.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Et la confidentialité ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                DPA/RGPD sur demande, accès minimaux, hébergement UE possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight flex items-center justify-center gap-3">
            <Zap className="w-12 h-12 text-yellow-400" />
            Planifier une visite sur site
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-2xl mx-auto">
            Nous venons, nous cadrons, vous décidez avec un plan et un{" "}
            <Link href="/contact" className="underline hover:text-white transition-colors font-semibold">
              devis
            </Link>{" "}
            sous 48 h.
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
