import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  CheckCircle2,
  ArrowRight,
  Target,
  FileText,
  TrendingUp,
  Shield,
  Zap,
  Layers,
  Database,
  Users,
  Eye,
  Workflow,
  Settings,
  Lock,
} from "lucide-react"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Audit 360° processus, SI et données | Plan d'action 90/180/360 jours",
  description:
    "Audit sur site en 5 jours. Cartographie complète, priorités ROI, roadmap exécutable et KPI. Visite de pré-qualif et devis sous 48 h.",
  path: "/services/audit",
})

export default function AuditPage() {
  return (
    <div className="min-h-screen">
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Audit 360°" }]}
          />
        </div>
      </div>

      <main className="relative z-10">
        <section className="relative pt-16 md:pt-20">
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Audit 360° — Processus, systèmes, données, supply chain
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Une vision claire en 5 jours. Des priorités nettes. Un plan d'exécution réaliste.
              <br />
              Intégration sur mesure. Décisions rapides. ROI piloté.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold bg-primary text-white hover:scale-105 transition-all duration-300"
              >
                Planifier une visite sur site
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-sm md:text-base text-white/60 mt-6 max-w-2xl mx-auto">
              Pré-qualif courte. Démarrage audit sous 7–10 jours. Plan d'action et{" "}
              <Link href="/contact" className="underline hover:text-white transition-colors">
                devis
              </Link>{" "}
              sous 48 h.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 py-12 md:py-20 text-white">
          <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Objectif</h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Cartographier le fonctionnement réel, identifier les leviers à plus fort impact, engager un plan
              90/180/360 jours basé sur des KPI mesurables.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Périmètre (audit 360°)</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Flux métier",
                  desc: "Commercial/ADV, support, production/atelier, logistique, RH, finance",
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Systèmes & intégrations",
                  desc: "ERP, CRM, compta, WMS/MES, e-commerce, GED, ITSM, APIs",
                },
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Informationnel",
                  desc: "Qui fait quoi, règles d'exception, contrôles, goulots, boucles de rework",
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Données",
                  desc: "Sources, qualité, fraîcheur temps r��el quand possible, traçabilité, ownership",
                },
                {
                  icon: <Layers className="w-6 h-6" />,
                  title: "Supply chain",
                  desc: "Prévisions, réassorts, délais, ruptures/retours, coûts",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Risques & conformité",
                  desc: "Sécurité, RGPD/DPA, continuité, réversibilité",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Déroulé en 5 jours</h2>
            <div className="space-y-6 max-w-5xl mx-auto">
              {[
                {
                  day: "J1",
                  title: "Immersion",
                  desc: "Direction et opérationnels. Visites postes clés. Objectifs, contraintes, priorités. Collecte docs.",
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  day: "J2",
                  title: "Processus as-is",
                  desc: "Cartes processus, variantes, exceptions, volumes, latences.",
                  icon: <Workflow className="w-6 h-6" />,
                },
                {
                  day: "J3",
                  title: "SI & données",
                  desc: "Schéma flux applicatifs, modèles de données, qualité, droits d'accès.",
                  icon: <Database className="w-6 h-6" />,
                },
                {
                  day: "J4",
                  title: "Leviers & faisabilité",
                  desc: "Opportunités classées impact × effort. Quick wins vs chantiers. Risques/mitigations.",
                  icon: <TrendingUp className="w-6 h-6 text-green-400" />,
                },
                {
                  day: "J5",
                  title: "Restitution exécutive",
                  desc: "Décisions, séquencement 90/180/360 j, responsables, jalons, KPI, plan de test.",
                  icon: <FileText className="w-6 h-6" />,
                },
              ].map((item, idx) => (
                <div
                  key={item.day}
                  className="flex flex-col md:flex-row items-start gap-4 md:gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/20 rounded-full flex flex-col items-center justify-center text-primary border-2 border-primary/40">
                    <span className="text-xs font-semibold">{item.day}</span>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Livrables (opérationnels)</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                "Blueprint des processus (BPMN simple) et points de contrôle",
                "Carte SI & flux temps réel/quasi temps réel et intégrations cibles",
                "Data pack: dictionnaire minimal, qualité, propriétaires, métriques de fraîcheur",
                "Backlog priorisé avec critères d'acceptation et dépendances",
                "Business case: hypothèses ROI, scénarios, seuils de rentabilité",
                "Roadmap 90/180/360 j avec jalons, risques, responsables",
                "Note dirigeant (1 page): décisions à prendre, impacts, calendrier",
                "Plan de changement: formation, communication, adoption",
                "Sécurité: baseline accès, journaux, sauvegardes/reprise, réversibilité",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Ce que ça change pour la direction</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Eye className="w-6 h-6 text-primary" />,
                  text: "Vision synthétique et actionnable",
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-green-400" />,
                  text: "Arbitrages guidés par KPI et ROI",
                },
                {
                  icon: <Shield className="w-6 h-6 text-primary" />,
                  text: "Risques maîtrisés et responsabilités claires",
                },
                {
                  icon: <Zap className="w-6 h-6 text-yellow-400" />,
                  text: "Passage rapide au pilote 30 jours sur le levier prioritaire",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <p className="text-white/90">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Exemples d'issues d'audit</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Devis→Facture",
                  desc: "Suppression de 3 ressaisies, contrôles automatiques, envoi GED",
                  icon: <FileText className="w-6 h-6" />,
                },
                {
                  title: "Support",
                  desc: "Tri automatique, réponses guidées sourcées, enrichissement base interne",
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  title: "Supply",
                  desc: "Réassorts pilotés par seuils dynamiques, alertes sur ruptures",
                  icon: <Layers className="w-6 h-6" />,
                },
                {
                  title: "Reporting",
                  desc: "Tableaux temps réel pour direction et ateliers, alertes dérives",
                  icon: <TrendingUp className="w-6 h-6 text-green-400" />,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-white/80 mt-8 max-w-3xl mx-auto">
              Tout est étudiable. L'audit part de votre réalité et de vos idées. Le plan est sur mesure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Méthode d'engagement</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                "Visite découverte (60–90 min) — pré-qualif, périmètre, accès",
                "Audit 5 jours — sur site + ateliers ciblés",
                "Restitution ≤ 72 h — livrables + plan 90/180/360 j",
                "Pilote 30 jours — un flux/assistant/tableau prioritaire",
                "Déploiement & Ops — mise en prod, formation, supervision",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">KPI suivis</h2>
            <p className="text-lg text-white/80 mb-6 max-w-4xl mx-auto text-center">
              Temps de cycle, taux d'erreurs, délai de réponse, disponibilité d'indicateurs, adoption par équipe,
              incidents évités, impacts sur CA/marge/cash.
            </p>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <p>Mesure avant/après incluse. KPI finalisés au cadrage.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Prérequis</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                "Accès lecture aux outils, échantillons de données",
                "Référents métiers disponibles",
                "Créneaux courts avec la direction",
                "NDA sur demande",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">Sécurité & conformité</h2>
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {[
                { icon: <Lock className="w-5 h-5" />, text: "Données cloisonnées" },
                { icon: <Shield className="w-5 h-5" />, text: "Accès par rôles" },
                { icon: <Eye className="w-5 h-5" />, text: "Journaux d'activité" },
                { icon: <Database className="w-5 h-5" />, text: "Hébergement UE possible" },
                { icon: <FileText className="w-5 h-5" />, text: "DPA/RGPD" },
                { icon: <ArrowRight className="w-5 h-5" />, text: "Procédure de reprise et réversibilité" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg border border-white/10"
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-sm text-white/80">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Après l'audit</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-yellow-400" />,
                  title: "Lancement pilote 30 j",
                  desc: "Sur le chantier n°1",
                },
                {
                  icon: <Settings className="w-6 h-6" />,
                  title: "Gouvernance",
                  desc: "Stand-ups courts, démos hebdo, critères d'acceptation",
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-green-400" />,
                  title: "Ops managées",
                  desc: "Supervision, petites évolutions, QBR",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">FAQ</h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
              <AccordionItem value="item-1" className="bg-white/5 rounded-xl border border-white/10 px-6">
                <AccordionTrigger className="text-lg font-semibold text-white hover:text-primary">
                  Combien de temps prend l'audit ?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  5 jours consécutifs. Restitution sous 72 h.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white/5 rounded-xl border border-white/10 px-6">
                <AccordionTrigger className="text-lg font-semibold text-white hover:text-primary">
                  Faut-il bloquer toute l'équipe ?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Non. Ateliers cadrés et visites ciblées. Référents identifiés en amont.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white/5 rounded-xl border border-white/10 px-6">
                <AccordionTrigger className="text-lg font-semibold text-white hover:text-primary">
                  Temps réel ou J+1 ?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Temps réel quand les sources le permettent. Sinon latence courte définie au cadrage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white/5 rounded-xl border border-white/10 px-6">
                <AccordionTrigger className="text-lg font-semibold text-white hover:text-primary">
                  Que se passe-t-il après ?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Pilote 30 j sur le levier prioritaire, puis déploiement et opérations managées.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white/5 rounded-xl border border-white/10 px-6">
                <AccordionTrigger className="text-lg font-semibold text-white hover:text-primary">
                  Tarification ?
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  Sur{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    devis
                  </Link>{" "}
                  après visite de pré-qualif. Devis détaillé sous 48 h.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 md:p-16 text-center border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Planifier une visite sur site</h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Visite 60–90 min.{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Plan d'action et devis
              </Link>{" "}
              sous 48 h.
              <br />
              Orienté solution sur mesure et croissance ROI
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold hover:scale-105 transition-all duration-300 bg-primary text-white"
              >
                Prendre rendez-vous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}
