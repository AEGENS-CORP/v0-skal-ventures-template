"use client"

import Link from "next/link"
import { Hero } from "@/components/hero"
import { Button } from "@/components/ui/button"
import { PhoneLink } from "@/components/phone-link"
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Clock,
  Shield,
  Zap,
  MapPin,
  Headphones,
  Users,
  Sparkles,
  ShoppingCart,
  Package,
  DollarSign,
  TrendingUp,
  BarChart3,
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      {/* CTA fixe en haut */}
      <div className="fixed top-20 right-6 z-50 hidden lg:flex flex-col gap-2 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-2xl">
        <PhoneLink
          phoneNumber="+33745103015"
          displayNumber="07 45 10 30 15"
          className="flex items-center gap-2 text-sm font-semibold"
          showIcon
        />
        <Link href="/contact">
          <Button size="sm" className="w-full text-xs">
            Planifier une visite
          </Button>
        </Link>
      </div>

      <Hero />

      <main className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">
          {/* Cas d'usage */}
          <section>
            <h2 className="text-4xl font-bold mb-6 text-center">Cas d&#39;usage </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Tout est étudiable. Ces exemples ouvrent la discussion. On part de vos idées.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <ShoppingCart className="w-8 h-8" />,
                  title: "Commercial",
                  desc: "Devis commande facture. Relances pilotées. Offres assistées.",
                  link: "/services/automatisation",
                  roi: (
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> +25% taux de transformation
                    </span>
                  ),
                },
                {
                  icon: <Package className="w-8 h-8" />,
                  title: "Production logistique",
                  desc: "TRS retards ruptures. Stocks synchronisés. Alertes.",
                  link: "/services/analyse-reporting",
                  roi: (
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> -30% retards livraison
                    </span>
                  ),
                },
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Finance",
                  desc: "Rapprochements. DSO. Prévision simple.",
                  link: "/services/analyse-reporting",
                  roi: (
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> -15 jours DSO
                    </span>
                  ),
                },
                {
                  icon: <Headphones className="w-8 h-8" />,
                  title: "Support",
                  desc: "Tri des tickets. Réponses guidées. Base RAG interne.",
                  link: "/services/assistant-ia-metier",
                  roi: (
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" /> -40% temps réponse
                    </span>
                  ),
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "RH organisation",
                  desc: "Onboarding. Notes de frais. Comptes rendus.",
                  link: "/services/automatisation",
                  roi: (
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" /> 5h/semaine gagnées
                    </span>
                  ),
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Sur-mesure",
                  desc: "Un besoin spécifique ? Une envie ? Un audit ? On étudie tout cas d'usage métier.",
                  link: "/contact",
                  roi: (
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-4 h-4" /> Solutions adaptées
                    </span>
                  ),
                },
              ].map((useCase) => (
                <Link
                  key={useCase.title}
                  href={useCase.link}
                  className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                >
                  <div className="text-white/80 mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{useCase.desc}</p>
                  <p className="text-xs font-semibold text-green-400">{useCase.roi}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Comment on travaille */}
          <section>
            <h2 className="text-4xl font-bold mb-12 text-center">Comment on travaille</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Visite découverte sur site",
                  time: "60–90 min",
                  desc: "Observation terrain, flux, volumes, exceptions",
                },
                {
                  step: "2",
                  title: "Cadrage sous 48 h",
                  time: "48 h",
                  desc: "Objectifs, KPI, jalons, responsabilités",
                },
                {
                  step: "3",
                  title: "Pilote 30 jours",
                  time: "30 j",
                  desc: "Un flux automatisé ou assistant ou tableau temps réel. Démos hebdo 20 min",
                },
                {
                  step: "4",
                  title: "Mise en production",
                  time: "Variable",
                  desc: "Sécurité, bascule progressive, formation, runbook",
                },
                {
                  step: "5",
                  title: "Opérations managées",
                  time: "Continu",
                  desc: "Supervision et petites évolutions",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-primary font-semibold text-xs">{item.time}</span>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center p-6 bg-primary/10 border border-primary/20 rounded-xl max-w-2xl mx-auto">
              <p className="text-primary font-bold text-3xl">
                <Link href="/contact" className="hover:underline">
                  Devis
                </Link>{" "}
                sous 48 h après visite
              </p>
            </div>
          </section>

          {/* Ce que vous obtenez */}
          <section>
            <h2 className="text-4xl font-bold mb-12 text-center">Ce que vous obtenez</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Cartographie claire",
                  desc: "Flux et irritants identifiés",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "3 à 6 cas d'usage",
                  desc: "Adaptés au métier",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Plan d'action priorisé",
                  desc: "90 j, 6 mois, 12 mois",
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6" />,
                  title: "KPI cibles",
                  desc: "Critères d'acceptation",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Mise en production",
                  desc: "Avec contrôle humain",
                },
                {
                  icon: <ArrowRight className="w-6 h-6" />,
                  title: "Ops managés",
                  desc: "Solutions qui vivent",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Audit et intégration sur mesure */}
          <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-4xl font-bold mb-6">Audit et intégration sur mesure</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nous intégrons et opérons des solutions d'IA et d'automatisation sur vos outils existants pour éliminer la
              ressaisie, fiabiliser les données et piloter en temps réel. Objectifs mesurables. Déploiements rapides.
              Accompagnement long terme.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold mb-4">Points clés</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Solutions sur mesure branchées à votre ERP, CRM, compta, WMS/MES, e-commerce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automatisation des flux critiques avec contrôle humain là où nécessaire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Assistants métier sur vos documents, réponses sourcées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Tableaux d'indicateurs en temps réel, alertes utiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sécurité et conformité intégrées dès le cadrage</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Pour qui</h3>
                <p className="text-muted-foreground">
                  PME, ETI, négoce, industrie, services B2B, retail/e-commerce, logistique, comptabilité, maintenance,
                  éducation privée. Nous partons de vos idées et de vos contraintes.
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-6">Comment on démarre</h3>
                <p className="text-muted-foreground">
                  Visite sur site. Cadrage sous 48 h avec objectifs et KPI. Pilote court sur un flux ou un assistant ou
                  un tableau temps réel. Mise en production puis opérations managées.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services/audit">
                <Button size="lg" className="px-8 py-6 text-base font-semibold">
                  Découvrir l'audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-semibold bg-transparent">
                  Planifier une visite sur site
                </Button>
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Nous comprenons vos flux. Vous recevez un{" "}
              <Link href="/contact" className="text-primary hover:underline font-semibold">
                plan d'action et un devis
              </Link>{" "}
              sous 48 h.
            </p>
          </section>

          {/* Assistant IA métier */}
          <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-4xl font-bold mb-6">Assistant IA métier: réponses sourcées, productivité immédiate</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Des réponses fiables à partir de vos documents et processus. Vos équipes gagnent du temps. Vos clients
              obtiennent des réponses cohérentes. Réduction du temps de recherche et de rédaction.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold mb-4">Ce que fait l'assistant</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Répond aux questions métier à partir de vos procédures, contrats, FAQs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rédige des emails, devis, comptes-rendus prêts à valider</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Résume des documents longs et met en avant les clauses clés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Triage des tickets et propose des réponses guidées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Respecte les droits d'accès et cite ses sources</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Pour qui</h3>
                <p className="text-muted-foreground">
                  Commercial & ADV, Support client, Juridique & achats, RH & opérations, Finance, Direction & qualité.
                  L'assistant s'adapte à votre métier et à vos documents.
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-6">Gains mesurables</h3>
                <p className="text-muted-foreground">
                  Temps de réponse réduit, qualité homogène, moins d'allers-retours, montée en compétence plus rapide
                  des nouveaux. ROI en 8 semaines. Mesure avant/après incluse.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services/assistant-ia-metier">
                <Button size="lg" className="px-8 py-6 text-base font-semibold">
                  Découvrir l'assistant IA
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-semibold bg-transparent">
                  Planifier une visite
                </Button>
              </Link>
            </div>
          </section>

          {/* Analyse & Reporting */}
          <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-4xl font-bold mb-6">
              Analyse & Reporting: indicateurs temps réel et décisions rapides
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Des indicateurs clairs. Des alertes utiles. Des décisions rapides. Tableaux direction et métiers, données
              fiables, temps réel quand possible.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold mb-4">Ce que fait notre reporting</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Centralise vos données métiers (ERP, CRM, e-commerce, compta, WMS/MES)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Actualise en temps réel quand les sources le permettent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Explique les chiffres: drill-down par client, produit, canal, équipe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Alerte sur seuils, dérives et ruptures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Diffuse: tableaux direction, écrans d'atelier, email/Slack, exports</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Cas d'usage typiques</h3>
                <p className="text-muted-foreground">
                  Direction (CA, marge, cash), Commercial (pipe, prévision, relances), Production (TRS, retards, OTD),
                  Finance (DSO, prévision), Support (SLA, volumes, causes racines). KPI adaptés à votre contexte.
                </p>

                <h3 className="text-xl font-semibold mb-4 mt-6">Résultats mesurables</h3>
                <p className="text-muted-foreground">
                  Fiabilité, fraîcheur des données, utilisation réelle, impact sur délais/erreurs/CA/marge. Objectifs
                  chiffrés fixés au cadrage. Mesure avant/après incluse.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services/analyse-reporting">
                <Button size="lg" className="px-8 py-6 text-base font-semibold">
                  Découvrir l'analyse & reporting
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-semibold bg-transparent">
                  Planifier une visite
                </Button>
              </Link>
            </div>
          </section>

          {/* Vente et gestion */}
          <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-4xl font-bold mb-6">Vente et gestion: du premier contact à l'exploitation</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Processus cadré. Décisions rapides. Mise en production sans friction. Accompagnement long terme avec
              gouvernance transparente.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Parcours complet</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">Prospection & qualification:</strong> Ciblage ICP, messages
                      orientés gains, Go/No-Go rapide
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">Audit & cadrage:</strong> Visite terrain, baseline et KPI,
                      note de cadrage sous 48 h
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">Pilote 30 jours:</strong> Un flux automatisé ou assistant ou
                      tableau temps réel, démos hebdo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">Déploiement:</strong> Sécurité, accès par rôles, formation,
                      bascule progressive
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-foreground">Exploitation & valeur:</strong> Support/SLA, supervision, QBR
                      trimestriel, rapport mensuel
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Gouvernance transparente</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Onboarding 2–4 semaines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Revues hebdomadaires delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prise en compte support &lt; 4 h</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dashboard partagé: avancement, risques, KPI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>KPI suivis: taux RDV, délai devis, taux signature, MTTR, ROI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services/vente-gestion">
                <Button size="lg" className="px-8 py-6 text-base font-semibold">
                  Découvrir le processus complet
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 py-6 text-base font-semibold bg-transparent">
                  Planifier une visite
                </Button>
              </Link>
            </div>
          </section>

          {/* Résultats attendus */}
          <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h2 className="text-4xl font-bold text-center">Résultats attendus</h2>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center">
              Objectifs chiffrés définis au cadrage. Mesure avant et après incluse{" "}
              <BarChart3 className="w-5 h-5 inline-block" />. Focus sur temps de saisie, taux d'erreurs, délai de
              réponse, disponibilité des indicateurs en temps réel selon source.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-center">Repères marché</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Assistants documentaires.</strong> Réduction notable du temps de recherche et de rédaction
                    observée dans plusieurs études 2023–2024. <Zap className="w-4 h-4 inline-block" /> Gains de 30-40%
                    constatés.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Automatisation de processus.</strong> Gains de productivité significatifs sur tâches
                    répétitives rapportés par des sources sectorielles. <TrendingUp className="w-4 h-4 inline-block" />{" "}
                    ROI visible en 3-6 mois.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Pilotage temps réel.</strong> Baisse mesurable des retards et écarts quand les équipes
                    pilotent sur indicateurs vivants. <Sparkles className="w-4 h-4 inline-block" /> Décisions 5x plus
                    rapides.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground italic mt-6 text-center">
                Repères indicatifs. Non contractuels. Alignement sur votre contexte lors du cadrage.
              </p>
            </div>
          </section>

          {/* Pourquoi nous */}
          <section>
            <h2 className="text-4xl font-bold mb-12 text-center">Pourquoi nous</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Terrain d'abord",
                  desc: "On observe. On mesure. On propose.",
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6" />,
                  title: "Sur devis",
                  desc: "Périmètre clair. Jalons. KPI suivis.",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Sûr par défaut",
                  desc: "Données cloisonnées. Accès par rôles. Hébergement UE possible.",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Agnostique",
                  desc: "On connecte l'existant. Pas de verrou.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Secteurs servis */}
          <section className="font-normal text-4xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Secteurs servis</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Négoce et distribution",
                "Industrie et ateliers",
                "Services B2B",
                "Cabinets comptables",
                "Retail et e-commerce",
                "Logistique et transport",
                "Immobilier maintenance",
                "Éducation associations",
              ].map((sector) => (
                <span
                  key={sector}
                  className="px-4 bg-white/5 rounded-full hover:border-primary/50 transition-all duration-500 text-xl font-semibold py-2 border-2 border-ring"
                >
                  {sector}
                </span>
              ))}
            </div>
          </section>

          {/* Études de cas */}
          <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-4xl font-bold mb-6">Études de cas</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Au lancement. Démos reproductibles et scénarios anonymisés clairement étiquetés exemple.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Après signatures. Cas validés avec mesures avant et après et citation courte.
            </p>
            <Link href="/etudes-de-cas" className="inline-flex items-center gap-2 text-primary hover:underline">
              Voir les études de cas <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* Sécurité et conformité */}
          <section>
            <div className="flex items-center gap-3 mb-12">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">Sécurité et conformité</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Hébergement UE",
                  desc: "Données stockées en Union Européenne selon vos besoins",
                },
                {
                  title: "Accès minimaux",
                  desc: "Principe du moindre privilège appliqué systématiquement",
                },
                {
                  title: "Journaux d'audit",
                  desc: "Traçabilité complète de tous les accès et actions",
                },
                {
                  title: "Procédure de reprise",
                  desc: "Documentation complète pour la continuité d'activité",
                },
                {
                  title: "DPA disponible",
                  desc: "Data Processing Agreement fourni sur demande",
                },
                {
                  title: "Cloisonnement",
                  desc: "Séparation stricte des données entre clients",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Zone d'intervention */}
          <section className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Zone d'intervention</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Basés à La Chaize-le-Vicomte. Visites sur site dans un rayon proche (La Roche-sur-Yon, La Rochelle,
                  Niort, Nantes, Poitiers, Angoulême). Au-delà, nous intervenons à distance avec des outils de
                  visioconférence et de partage d'écran.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                  {[
                    { name: "La Roche-sur-Yon", slug: "la-roche-sur-yon" },
                    { name: "La Rochelle", slug: "la-rochelle" },
                    { name: "Niort", slug: "niort" },
                    { name: "Nantes", slug: "nantes" },
                    { name: "Poitiers", slug: "poitiers" },
                    { name: "Angoulême", slug: "angouleme" },
                  ].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/ville/${city.slug}`}
                      className="px-4 py-2 bg-white/5 border-white/10 rounded-lg text-center hover:border-primary/50 transition-all duration-500 font-sans border leading-6 font-bold text-xl"
                      style={{ textDecoration: "none" }}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Adresse:</strong> 18 Rue Ampère, ZI La Folie Sud, 85310 La
                    Chaize-le-Vicomte
                  </p>
                  <p>
                    <strong className="text-foreground">Téléphone:</strong>{" "}
                    <PhoneLink
                      phoneNumber="+33745103015"
                      displayNumber="07 45 10 30 15"
                      className="hover:text-primary transition-colors"
                    />
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA final */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-12 md:p-16 text-center border-primary/20 leading-7 tracking-normal my-0 border-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              Planifier une visite sur site <Zap className="w-10 h-10 text-yellow-400" />
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nous venons comprendre vos flux. Vous recevez un{" "}
              <Link href="/contact" className="text-primary hover:underline font-semibold">
                plan et un devis
              </Link>{" "}
              sous 48 h. <Sparkles className="w-5 h-5 inline-block" /> IA pragmatique pour votre croissance.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="px-12 py-6 text-lg font-semibold hover:scale-105 transition-all duration-500"
              >
                Prendre rendez-vous
              </Button>
            </Link>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-4xl font-bold mb-12 text-center leading-7 tracking-widest mt-20">FAQ</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q: "Comment se passe le devis ?",
                  a: "Nous commençons par une visite sur site de 60 à 90 minutes pour observer vos flux et comprendre vos besoins. Sous 48 heures, vous recevez un cadrage détaillé avec objectifs, KPI, jalons et un devis précis. Tout est transparent et sur mesure.",
                },
                {
                  q: "Faut-il changer d'outils ?",
                  a: "Non, par défaut nous connectons vos outils existants (ERP, CRM, tableurs, bases de données). Notre approche est agnostique : nous travaillons avec ce que vous avez déjà. Pas de verrou technologique, pas de migration forcée.",
                },
                {
                  q: "Quand voit-on un premier résultat ?",
                  a: "Un pilote typique est livré en 30 jours selon le périmètre défini. Il peut s'agir d'un flux automatisé, d'un assistant métier ou d'un tableau de bord temps réel. Vous voyez des démos hebdomadaires de 20 minutes pour suivre l'avancement.",
                },
                {
                  q: "Comment sont gérées les données sensibles ?",
                  a: "Accès restreints par rôles, journaux d'audit, hébergement en Union Européenne possible. Nous appliquons le principe du moindre privilège et documentons tous les accès. Un DPA (Data Processing Agreement) est fourni sur demande.",
                },
                {
                  q: "Que se passe-t-il après la mise en production ?",
                  a: "Nous proposons des opérations managées en continu : supervision, maintenance, petites évolutions. Vos solutions restent vivantes et s'adaptent à vos besoins. Vous n'êtes jamais seul après le déploiement.",
                },
                {
                  q: "Quels sont les secteurs que vous servez ?",
                  a: "Nous travaillons avec des TPE/PME dans le négoce, l'industrie, les services B2B, les cabinets comptables, le retail, la logistique, l'immobilier et l'éducation. Si vous avez des processus répétitifs ou des besoins de pilotage, nous pouvons vous aider.",
                },
                {
                  q: "Combien coûte une intégration IA ?",
                  a: "Chaque projet est unique. Le devis dépend du périmètre, de la complexité et des objectifs. Nous fournissons un devis détaillé sous 48h après la visite découverte. Pas de surprise, tout est transparent dès le départ.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                  >
                    <h3 className="font-semibold tracking-normal leading-7 text-base">{faq.q}</h3>
                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? "rotate-90" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-muted-foreground">
              Plus de questions ?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contactez-nous
              </Link>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
