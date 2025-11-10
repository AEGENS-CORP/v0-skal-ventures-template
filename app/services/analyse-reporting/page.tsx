import { createPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Database,
  TrendingUp,
  Bell,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  Headphones,
  Shield,
  CheckCircle,
  Zap,
  Clock,
  Eye,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = createPageMetadata({
  title: "Analyse & Reporting pour TPE/PME | Indicateurs temps réel et décisions rapides",
  path: "/services/analyse-reporting",
  description:
    "Tableaux direction et métiers. Données fiables, temps réel quand possible, alertes utiles. Visite terrain et devis sous 48 h.",
})

export default function AnalyseReportingPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Analyse & Reporting" },
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
            name: "Analyse & Reporting en temps réel",
            description:
              "Tableaux de bord direction et métiers. Centralisation des données, actualisation temps réel, alertes sur seuils et dérives.",
            provider: { "@type": "LocalBusiness", name: "Skal Ventures" },
            areaServed: ["La Roche-sur-Yon", "La Rochelle", "Niort", "Nantes", "Poitiers", "Angoulême"],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-12 md:pb-16 px-4 sm:px-6 lg:pt-52">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-balance leading-[1.1]">
              Analyse & Reporting en temps réel
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto">
              Des indicateurs clairs. Des alertes utiles. Des décisions rapides.
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:inline sm:mt-0">
                Intégration sur mesure. Mesure avant/après. Accompagnement long terme.
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
                    60–90 min.{" "}
                    <Link href="/contact" className="hover:underline">
                      Plan d'action + devis
                    </Link>{" "}
                    sous 48 h.
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que fait notre reporting */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Ce que fait notre reporting
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Database,
                title: "Centralise vos données",
                desc: "ERP, CRM, e-commerce, compta, WMS/MES, tickets, fichiers.",
              },
              {
                icon: Clock,
                title: "Actualise en temps réel",
                desc: "Quand les sources le permettent, sinon latence minute/heure définie au cadrage.",
              },
              {
                icon: Eye,
                title: "Explique les chiffres",
                desc: "Drill-down par client, produit, canal, équipe.",
              },
              {
                icon: Bell,
                title: "Alerte sur seuils",
                desc: "Dérives, ruptures et anomalies détectées automatiquement.",
              },
              {
                icon: BarChart3,
                title: "Diffuse partout",
                desc: "Tableaux direction, écrans d'atelier, email/Slack, exports.",
              },
              {
                icon: TrendingUp,
                title: "ROI mesurable",
                desc: "Objectifs chiffrés définis au cadrage, suivi avant/après.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <feature.icon
                  className="w-8 h-8 md:w-10 md:h-10 text-white/60 group-hover:text-white/80 mb-4 md:mb-6 transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 leading-tight">{feature.title}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas d'usage et KPI */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Cas d'usage et KPI (exemples)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Users,
                title: "Direction",
                desc: "Vue 360: CA, marge, cash, carnet de commandes, risques.",
                kpi: "Marge %, cash dispo, atterrissage mensuel, retard projets.",
              },
              {
                icon: ShoppingCart,
                title: "Commercial / ADV",
                desc: "Pipe propre, prévision, relances prioritaires.",
                kpi: "MQL→SQL, win-rate, cycle, panier, churn, retard devis.",
              },
              {
                icon: BarChart3,
                title: "E-commerce / Marketing",
                desc: "Trafic, ROAS, attribution simple, cohérence catalogue.",
                kpi: "Conv%, AOV, LTV, revenus incrémentaux, disponibilité fiches.",
              },
              {
                icon: Package,
                title: "Production / Logistique",
                desc: "TRS, retards, WIP, ruptures, OTD.",
                kpi: "TRS, lead time, OEE, OTD, coûts unitaires, taux rebut.",
              },
              {
                icon: DollarSign,
                title: "Achats / Supply",
                desc: "Couverture stock, délais fournisseurs, dérives tarifs.",
                kpi: "Jours de stock, taux rupture, respect délais, écarts prix.",
              },
              {
                icon: Headphones,
                title: "Support / Qualité",
                desc: "SLA, volumes, causes racines, boucle d'amélioration.",
                kpi: "FRT, MTTR, % résolution 1er contact, top motifs.",
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <useCase.icon
                  className="w-8 h-8 md:w-10 md:h-10 text-white/60 group-hover:text-white/80 mb-4 md:mb-6 transition-colors"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 leading-tight flex items-center gap-2">
                  {useCase.title}
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3">{useCase.desc}</p>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  <strong className="text-white/80">KPI:</strong> {useCase.kpi}
                </p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-center mt-10 md:mt-12 italic text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Tout est étudiable. Ces exemples ouvrent la discussion. Les périmètres et KPI sont adaptés à votre contexte.
          </p>
        </div>
      </section>

      {/* Fonctions clés */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Fonctions clés</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Modèle de données métier",
                desc: "Définitions communes, versions, propriétaires.",
              },
              {
                title: "Qualité de données",
                desc: "Contrôles, journaux, règles de correction.",
              },
              {
                title: "Alerting",
                desc: "Seuils, tendances, notifications ciblées.",
              },
              {
                title: "Narration automatique",
                desc: "Commentaires générés sur écarts et priorités.",
              },
              {
                title: "Sécurité",
                desc: "Accès par rôles, masquage, historiques d'accès.",
              },
              {
                title: "Diffusion",
                desc: "Web, mobile, écrans, emails, exports planifiés, API.",
              },
            ].map((func, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-white/10 rounded-xl bg-black/50 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 leading-tight flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white/50" strokeWidth={1.5} />
                  {func.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{func.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources & intégrations */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
            Sources & intégrations (exemples)
          </h2>
          <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-6 max-w-4xl mx-auto text-center">
            Odoo, Sage, EBP, Cegid · HubSpot, Pipedrive, Salesforce · Shopify, PrestaShop, WooCommerce · WMS/MES ·
            Google Workspace, Microsoft 365 · Notion, Confluence · Zendesk, Freshdesk · bases SQL · fichiers CSV/XLS.
          </p>
          <p className="text-white/50 italic text-sm md:text-base text-center">Agnostiques. On connecte l'existant.</p>
        </div>
      </section>

      {/* Résultats attendus */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-10 h-10 text-green-400" />
            Résultats attendus
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors max-w-4xl mx-auto">
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Objectifs chiffrés fixés au cadrage. Mesure avant/après incluse.
              <br />
              Focales: fiabilité, fraîcheur, utilisation réelle, impact sur délais/erreurs/CA/marge.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
              Repères secteur (indicatifs, non contractuels)
            </h3>
            <ul className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base">
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  Pilotage sur indicateurs actualisés → baisse de retards/écarts opérationnels observée dans plusieurs
                  études 2023–2024.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  Gouvernance de données minimale → amélioration mesurable de la qualité et de la vitesse de décision.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Méthode</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                num: "1",
                title: "Visite terrain",
                desc: "60–90 min — besoins décision, sources, fréquences, contraintes.",
              },
              {
                num: "2",
                title: "Cadrage ≤ 48 h",
                desc: "KPI cibles, fraîcheur visée, modèles, accès, jalons, risques.",
              },
              {
                num: "3",
                title: "Pilote 30 jours",
                desc: "Un tableau prioritaire temps réel ou latence courte. Démos hebdo 20 min.",
              },
              {
                num: "4",
                title: "Mise en production",
                desc: "Sécurisation, tests utilisateurs, formation, runbook.",
              },
              {
                num: "5",
                title: "Opérations managées",
                desc: "Supervision, corrections, nouvelles vues, veille.",
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
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Livrables</h2>
              <ul className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base">
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Dictionnaire de données minimal et propriétaires.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Schéma sources → modèles → tableaux.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Jeu de tests KPI et seuils d'alerte.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Runbook d'exploitation (rafraîchissements, accès, sauvegardes).</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Tableaux direction et métiers, filtres prêts, exports planifiés.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Prérequis</h2>
              <ul className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base">
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Accès lecture aux sources, comptes techniques si besoin.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Jeux d'échantillons représentatifs.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Référents métiers disponibles pour valider les définitions.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Règles d'accès et de diffusion décidées au cadrage.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sécurité & conformité */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
            <Shield className="w-10 h-10 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Sécurité & conformité</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors max-w-4xl mx-auto">
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Données cloisonnées, accès par rôles, journaux, sauvegardes et tests de reprise. Hébergement UE possible.
              DPA/RGPD sur demande.
            </p>
          </div>
        </div>
      </section>

      {/* Gouvernance & relation */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Gouvernance & relation
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors max-w-4xl mx-auto">
            <ul className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base">
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Onboarding 2–4 semaines selon périmètre.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Revue delivery hebdo.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Support: prise en compte &lt; J+1, escalade bloquante &lt; H4.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Dashboard partagé: avancement, qualité, adoption, incidents.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">Zone d'intervention</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 mb-4 md:mb-6 leading-relaxed text-center">
            Visites sur site dans un rayon ~2 h. À distance au-delà.
          </p>
          <p className="text-white/80 text-sm md:text-base leading-relaxed text-center">
            Adresse: 18 Rue Ampère, ZI La Folie Sud, 85310 La Chaize-le-Vicomte · Tél:{" "}
            <Link href="tel:0745103015" className="hover:text-white transition-colors font-sans hover:underline">
              07 45 10 30 15
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            <AccordionItem
              value="item-1"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Temps réel ou J+1 ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Par défaut temps réel quand la source l'autorise. Sinon latence minute/heure définie au cadrage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Doit-on changer d'outils BI ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non par défaut. On part de l'existant. On peut proposer une alternative si utile.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Qui voit quoi ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Accès par rôles et masquage de champs sensibles. Traçabilité complète.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Comment éviter les "deux versions de la vérité" ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Dictionnaire commun, jeux de tests KPI, source of truth unique par indicateur.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Comment pérenniser ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Runbook, supervision, revues régulières, mise à jour des modèles et des droits.
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
            On qualifie vos besoins décisionnels. Vous recevez un{" "}
            <Link href="/contact" className="underline hover:text-white transition-colors font-semibold">
              plan et un devis
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
