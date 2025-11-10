import { createPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  FileText,
  Search,
  Mail,
  FileCheck,
  HelpCircle,
  Users,
  CheckCircle,
  Zap,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = createPageMetadata({
  title: "Assistant IA métier | Réponses sourcées, productivité immédiate",
  path: "/services/assistant-ia-metier",
  description:
    "Assistant IA sur vos documents et processus. Réponses sourcées, temps de réponse réduit, intégration à vos outils. Visite terrain et devis sous 48 h.",
})

export default function AssistantIAMetierPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Assistant IA métier" },
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
            name: "Assistant IA métier",
            description:
              "Assistant IA conversationnel sur vos documents et processus internes. Réponses sourcées, réduction du temps de recherche et de rédaction.",
            provider: { "@type": "LocalBusiness", name: "Skal Ventures" },
            areaServed: ["La Roche-sur-Yon", "La Rochelle", "Niort", "Nantes", "Poitiers", "Angoulême"],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-40 md:pt-44 pb-12 px-4 sm:px-6 lg:pt-52 md:pb-3.5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 text-balance leading-[1.1]">
              Assistant IA métier sur vos documents et processus
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto">
              Des réponses fiables, tout de suite. Vos équipes gagnent du temps. Vos clients obtiennent des réponses
              cohérentes.
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

      {/* Ce que fait l'assistant IA */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Ce que fait l'assistant IA
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Search,
                title: "Réponses métier instantanées",
                desc: "Répond aux questions à partir de vos procédures, contrats, fiches produits, FAQs.",
              },
              {
                icon: Mail,
                title: "Rédaction assistée",
                desc: "Rédige des emails, devis, comptes-rendus et modes opératoires prêts à valider.",
              },
              {
                icon: FileCheck,
                title: "Résumés intelligents",
                desc: "Résume des documents longs et met en avant les clauses clés.",
              },
              {
                icon: CheckCircle,
                title: "Suggestions proactives",
                desc: "Suggère next-steps, checklists, pièces manquantes.",
              },
              {
                icon: HelpCircle,
                title: "Triage des tickets",
                desc: "Triage des tickets et propose des réponses guidées.",
              },
              {
                icon: Users,
                title: "Contexte maîtrisé",
                desc: "Apprend le contexte autorisé et respecte les droits d'accès.",
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
          <p className="text-white/60 text-center mt-10 md:mt-12 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Sorties sourcées, niveau de confiance visible, validation simple côté utilisateur.
          </p>
        </div>
      </section>

      {/* Cas d'usage */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Cas d'usage (exemples)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Mail,
                title: "Commercial & ADV",
                items: [
                  "Réponse client assistée sur base documentaire.",
                  "Génération de devis ou propositions structurées.",
                  "Q&A produit multi-canal.",
                ],
              },
              {
                icon: HelpCircle,
                title: "Support & Service client",
                items: [
                  "Triage automatique, modèles de réponse avec sources.",
                  "Enrichissement de la base de connaissances interne.",
                ],
              },
              {
                icon: FileCheck,
                title: "Juridique & achats",
                items: ["Résumés de contrats, alertes clauses sensibles, listes de vérification."],
              },
              {
                icon: Users,
                title: "RH & opérations",
                items: ["Onboarding/offboarding guidé, FAQs internes, notes et CR automatiques."],
              },
              {
                icon: FileText,
                title: "Finance",
                items: ["Explications sur règles de refacturation, pièces manquantes, contrôles simples."],
              },
              {
                icon: CheckCircle,
                title: "Direction & qualité",
                items: ["Synthèses de reporting, points d'attention, actions à lancer."],
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
            Tout est étudiable. Ces exemples sont un point de départ. L'assistant s'adapte à votre métier et à vos
            idées.
          </p>
        </div>
      </section>

      {/* Exemples concrets (flows typiques) */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Exemples concrets (flows typiques)
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Email client → brouillon prêt",
                desc: "L'assistant lit la demande, propose une réponse avec références, vous validez et envoyez.",
                icon: <Zap className="w-5 h-5 text-yellow-400" />,
              },
              {
                title: "Contrat PDF → synthèse",
                desc: "Clauses résumées, risques signalés, questions à poser.",
                icon: <TrendingUp className="w-5 h-5 text-green-400" />,
              },
              {
                title: "Ticket entrant → solution",
                desc: "Classification, suggestion basée sur cas similaires, mise à jour FAQ interne.",
                icon: <Zap className="w-5 h-5 text-yellow-400" />,
              },
              {
                title: "Réunion → actions",
                desc: "Notes automatiques, décisions, tâches affectées.",
                icon: <TrendingUp className="w-5 h-5 text-green-400" />,
              },
            ].map((flow, i) => (
              <div
                key={i}
                className="p-6 md:p-8 border border-white/10 rounded-xl bg-black/50 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 leading-tight flex items-center gap-2">
                  {flow.title}
                  {flow.icon}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que vous gagnez */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-10 h-10 text-green-400" />
            Ce que vous gagnez
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors">
            <ul className="space-y-4 md:space-y-5 text-white/70 text-base md:text-lg">
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <Clock className="w-6 h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  <strong className="text-white/90">Temps de réponse réduit</strong> et qualité homogène.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-6 h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  <strong className="text-white/90">Moins d'allers-retours</strong> grâce aux sources citées.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <Users className="w-6 h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  <strong className="text-white/90">Montée en compétence plus rapide</strong> des nouveaux.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  <strong className="text-white/90">Décisions plus rapides</strong> avec trames et checklists adaptées.
                </span>
              </li>
            </ul>
            <p className="text-white/60 mt-6 md:mt-8 leading-relaxed">
              Objectifs chiffrés fixés au cadrage. Mesure avant/après incluse.
            </p>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Méthode</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                num: "1",
                title: "Visite terrain",
                desc: "60–90 min — corpus, outils, cas récurrents, contraintes.",
              },
              {
                num: "2",
                title: "Cadrage ≤ 48 h",
                desc: "Objectifs, KPI, périmètre documentaire, droits d'accès, jalons.",
              },
              {
                num: "3",
                title: "Pilote 30 jours",
                desc: "1 périmètre prioritaire, tests avec vos équipes, démos hebdo 20 min.",
              },
              {
                num: "4",
                title: "Mise en production",
                desc: "Intégrations, bascule progressive, formation, runbook.",
              },
              {
                num: "5",
                title: "Opérations managées",
                desc: "Supervision, mises à jour, nouvelles 'cartes' métier.",
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
                  <span>Périmètre documentaire et règles d'accès.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Gabarits de réponses et prompts métiers.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Jeu de tests et critères d'acceptation.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Runbook d'exploitation, annexes "bonnes pratiques".</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>Tableau de suivi KPI et journal des améliorations.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Prérequis</h2>
              <ul className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base">
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Accès lecture au corpus autorisé (Drive/SharePoint/Notion/Confluence, etc.).</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Référent métier disponible.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Cas d'usage typiques listés.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <span className="text-white/30 mt-1 text-lg">•</span>
                  <span>Comptes SSO si disponibles.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intégrations possibles */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
            Intégrations possibles
          </h2>
          <p className="text-white/70 mb-6 md:mb-8 text-base md:text-lg lg:text-xl leading-relaxed">
            Google Workspace, Microsoft 365, SharePoint, OneDrive, Notion, Confluence, Zendesk, Freshdesk, HubSpot,
            Pipedrive, Salesforce, Slack, Teams, outils ITSM et GED.
          </p>
          <p className="text-white/50 italic text-sm md:text-base">Agnostiques. On part de l'existant.</p>
        </div>
      </section>

      {/* Résultats & KPI suivis */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center flex items-center justify-center gap-3">
            <TrendingUp className="w-10 h-10 text-green-400" />
            Résultats & KPI suivis
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors">
            <ul className="space-y-4 md:space-y-5 text-white/70 text-base md:text-lg">
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Temps de réponse moyen.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Taux de première réponse correcte.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Taux d'escalade et satisfaction utilisateurs.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Taux d'adoption par équipe.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Couverture documentaire et mises à jour.</span>
              </li>
            </ul>
            <p className="text-white/60 mt-6 md:mt-8 leading-relaxed">
              Mesure avant/après fournie. Périmètre et objectifs validés au cadrage.
            </p>
          </div>
        </div>
      </section>

      {/* Sécurité & conformité */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
            <Shield className="w-10 h-10 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">Sécurité & conformité</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors max-w-4xl mx-auto">
            <ul className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base">
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Données cloisonnées, accès par rôles, journaux d'usage.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Hébergement UE possible. DPA/RGPD sur demande.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Validation humaine là où nécessaire.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gouvernance & support */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
            Gouvernance & support
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 lg:p-10 hover:bg-white/[0.07] transition-colors max-w-4xl mx-auto">
            <ul className="space-y-4 md:space-y-5 text-white/70 text-sm md:text-base">
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Revues hebdo pendant le pilote, QBR trimestriel ensuite.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Procédure de mise à jour du corpus et des gabarits.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Canal support dédié, prise en compte &lt; J+1.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">Zone d'intervention</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 mb-4 md:mb-6 leading-relaxed text-center">
            Visites sur site dans un rayon ~2 h. Intervention à distance au-delà.
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
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4 md:space-y-5">
            <AccordionItem
              value="item-1"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                L'assistant "entraîne-t-il" un modèle externe avec nos données ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non. Le contenu reste dans votre environnement autorisé. Pas d'entraînement externe par défaut.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Comment éviter les réponses inexactes ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Sources citées, seuil de confiance, validation simple, et jeu de tests systématique.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Multilingue ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Oui selon corpus et canaux cibles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Combien de temps pour un premier résultat ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Pilote typique ≈ 30 jours selon périmètre, corpus et accès.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-white/10 rounded-xl px-5 md:px-6 bg-white/5 hover:bg-white/[0.07] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline py-5 md:py-6">
                Faut-il changer d'outils ?
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-sm md:text-base leading-relaxed pb-5 md:pb-6">
                Non par défaut. On connecte l'existant.
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
            On observe vos usages, on propose un plan réaliste, vous recevez un{" "}
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
