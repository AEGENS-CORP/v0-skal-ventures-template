"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  BarChart3,
  TrendingUp,
  Clock,
  Target,
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  Headphones,
  Database,
  Bell,
  Shield,
  CheckCircle,
  Zap,
  ArrowRight,
} from "lucide-react"
import { useEffect } from "react"

interface AnalyseReportingClientProps {
  mousePos: { x: number; y: number }
}

export default function AnalyseReportingClient({ mousePos }: AnalyseReportingClientProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-premium, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-rotate",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* <CHANGE> Added animated background effect matching homepage */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />

      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Tableaux de bord & KPIs" },
            ]}
          />
        </div>
      </div>

      {/* <CHANGE> Hero section with new content and premium styling */}
      <section className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center scroll-reveal-premium">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] leading-tight">
              Tableaux de bord & KPIs en temps réel
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-4xl mx-auto">
              Voir ce qui se passe dans l'entreprise, en temps réel.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto">
              Nous mettons en place des tableaux de bord simples, fiables et directement connectés à vos outils, pour
              piloter l'activité sans passer des heures dans Excel.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/30 px-4 py-2 mb-8">
              <Target className="w-5 h-5 text-white/80" />
              <p className="text-sm sm:text-base text-white/90 font-semibold">
                L'objectif : savoir où vous en êtes, en quelques secondes, et prendre des décisions sur des chiffres à
                jour, pas sur des estimations.
              </p>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 text-base sm:text-lg font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Zap className="w-5 h-5 mr-2" />
                Demander mon diagnostic
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20 sm:space-y-24 md:space-y-32">
        {/* <CHANGE> Ce que ça change concrètement section */}
        <section>
          <div className="text-center mb-12 md:mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Ce que ça change concrètement
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </div>

          <div className="max-w-4xl mx-auto mb-10 scroll-reveal-premium transition-delay-200">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center mb-8">
              Nous ne faisons pas "de la data" pour le principe. Nous construisons des indicateurs qui répondent à des
              questions très concrètes :
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                question: "Où en est le chiffre d'affaires ?",
                answer: "Par jour, semaine, mois, par client, par offre, par commercial, vs objectifs.",
              },
              {
                icon: Users,
                question: "Quels clients pèsent le plus cette année ?",
                answer: "CA cumulé par client, marge, évolution par rapport à l'an dernier.",
              },
              {
                icon: Clock,
                question: "Quels dossiers sont en retard ou bloqués ?",
                answer: "Vue immédiate des dossiers en cours, en retard, à risque, par responsable.",
              },
              {
                icon: Users,
                question: "Quelle est la charge sur les équipes ?",
                answer: "Volume de demandes, tickets, commandes, dossiers, par équipe et par personne.",
              },
              {
                icon: BarChart3,
                question: "Où part le temps ?",
                answer: "Répartition par type de tâche, par canal (mail, téléphone, outils), par service.",
              },
              {
                icon: Target,
                question: "Quel est l'impact des actions commerciales ?",
                answer: "Opportunités ouvertes, gagnées/perdues, délais de transformation, taux de relance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white leading-tight">{item.question}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 scroll-reveal-premium transition-delay-500">
            <p className="text-base sm:text-lg text-white/80 italic max-w-3xl mx-auto leading-relaxed">
              Chaque tableau de bord est construit à partir de vos données réelles, pas de modèles génériques.
            </p>
          </div>
        </section>

        {/* <CHANGE> Ce que nous mettons en place section */}
        <section>
          <div className="text-center mb-12 md:mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Ce que nous mettons en place
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </div>

          <div className="max-w-4xl mx-auto mb-10 scroll-reveal-premium transition-delay-200">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed text-center">
              Nous partons de vos outils actuels (mails, Excel, CRM, ERP, logiciels métiers…) et nous construisons une
              vue claire et opérationnelle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Database,
                title: "Connexion à vos sources de données",
                desc: "CRM, ERP, fichiers, outils métiers, formulaires, tickets support, etc. Objectif : éviter les doubles saisies et les copies manuelles.",
              },
              {
                icon: Users,
                title: "Tableaux de bord par rôle",
                desc: "Direction, commerciaux, ADV, support, production, finance. Chacun voit uniquement ce dont il a besoin pour agir.",
              },
              {
                icon: Target,
                title: "Indicateurs vraiment utiles",
                desc: "CA, marge, délais, volume de demandes, temps de traitement, retards, charge, satisfaction… Nous gardons l'essentiel, sans noyer sous les chiffres.",
              },
              {
                icon: Clock,
                title: "Mises à jour en temps réel ou quasi temps réel",
                desc: "Les indicateurs se mettent à jour automatiquement, sans export manuel ni retraitement.",
              },
              {
                icon: Bell,
                title: "Alertes et seuils",
                desc: "Retards, dépassements, objectifs non tenus… Vous êtes prévenus quand il faut intervenir, pas après coup.",
              },
              {
                icon: Shield,
                title: "Sécurité et accès",
                desc: "Droits d'accès par rôle, historiques, et protection des données sensibles.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">{feature.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <CHANGE> Exemples d'usages section */}
        <section>
          <div className="text-center mb-12 md:mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Exemples d'usages
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
              Quelques exemples typiques dans les TPE/PME :
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Direction & pilotage",
                items: [
                  "Vue globale : CA, marge, encours clients, retards critiques.",
                  "Top 20 clients de l'année, évolution par rapport à N-1.",
                  "Suivi des objectifs mensuels et des tendances.",
                ],
              },
              {
                icon: ShoppingCart,
                title: "Commerciaux & ADV",
                items: [
                  "Pipe commercial, CA signé par client, par offre, sur la période.",
                  "Relances à faire aujourd'hui : devis sans réponse, prospects inactifs, clients à réactiver.",
                ],
              },
              {
                icon: Headphones,
                title: "Support & service client",
                items: [
                  "Volume de tickets par jour/semaine, délais de réponse, SLA.",
                  "Liste des clients les plus sollicitants / les plus en difficulté.",
                  "Suivi des engagements et des dossiers sensibles.",
                ],
              },
              {
                icon: Package,
                title: "Production, logistique, opérations",
                items: [
                  "Dossiers en cours, en retard, en attente d'infos.",
                  "Charge par équipe / par ressource sur la semaine.",
                  "Avancement des commandes ou interventions, du reçu à la clôture.",
                ],
              },
              {
                icon: DollarSign,
                title: "Administratif & finances",
                items: [
                  "Factures émises / encaissées, retards de paiement, encours par client.",
                  "Suivi des commandes, avoirs, litiges.",
                  "Indicateurs pour le prévisionnel de trésorerie.",
                ],
              },
            ].map((usage, index) => (
              <div
                key={index}
                className={`group p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <usage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{usage.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {usage.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white/60 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 scroll-reveal-premium transition-delay-500">
            <p className="text-base sm:text-lg text-white/80 italic max-w-3xl mx-auto leading-relaxed">
              L'idée : chaque responsable ouvre son tableau, sait immédiatement ce qu'il doit surveiller et où agir.
            </p>
          </div>
        </section>

        {/* <CHANGE> Comment nous travaillons section */}
        <section>
          <div className="text-center mb-12 md:mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Comment nous travaillons sur vos tableaux de bord
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {[
              {
                num: "1",
                title: "Compréhension de votre pilotage réel",
                desc: "Nous identifions les questions auxquelles vous devez répondre chaque jour / semaine : CA, charge, retards, risques, priorités.",
              },
              {
                num: "2",
                title: "Recensement des données disponibles",
                desc: "Nous listons les outils, fichiers et systèmes où ces informations existent déjà (mails, Excel, CRM, ERP, logiciels métiers).",
              },
              {
                num: "3",
                title: "Conception des tableaux de bord",
                desc: "Nous définissons les KPIs, les vues (par client, par équipe, par période), les filtres et les alertes. Objectif : des écrans simples, exploitables, compréhensibles en 10 secondes.",
              },
              {
                num: "4",
                title: "Mise en place, tests et ajustements",
                desc: "Nous connectons les données, construisons les tableaux, testons sur vos cas réels, ajustons avec vos équipes, puis formons les utilisateurs.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`group flex items-start gap-6 p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white leading-tight">{step.title}</h3>
                  <p className="text-base text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <CHANGE> Adapté à tout métier section */}
        <section>
          <div className="text-center mb-12 md:mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Adapté à tout métier, sur mesure
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            <p className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              Nos tableaux de bord s'adaptent à votre organisation, qu'elle soit commerciale, industrielle ou orientée
              services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Headphones,
                title: "Services clients, ADV, SAV",
                desc: "Suivi des demandes, des retards, des engagements, des clients sensibles.",
              },
              {
                icon: TrendingUp,
                title: "Commerciaux, marketing, prospection",
                desc: "Pipe commercial, CA par client, par offre, par canal, suivi des campagnes.",
              },
              {
                icon: DollarSign,
                title: "Back-office, administratif, finances",
                desc: "Commandes, factures, encours, retards de paiement, dossiers clients/fournisseurs.",
              },
              {
                icon: Package,
                title: "Opérations, logistique, production, services sur site",
                desc: "Avancement des dossiers, charge, délais, interventions à risque, points de blocage.",
              },
            ].map((sector, index) => (
              <div
                key={index}
                className={`group p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] scroll-reveal-scale`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <sector.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">{sector.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{sector.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 scroll-reveal-premium transition-delay-500">
            <p className="text-base sm:text-lg text-white/80 italic max-w-3xl mx-auto leading-relaxed">
              Même logique que sur le reste de nos offres : sur-mesure, orienté ROI, connecté à vos outils et à votre
              réalité terrain.
            </p>
          </div>
        </section>

        {/* <CHANGE> CTA Final - clickable */}
        <section className="scroll-reveal-scale">
          <Link href="/contact" className="block no-underline group">
            <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 text-center border-4 border-white/20 border-t-white/60 border-l-white/50 group-hover:border-white/40 group-hover:border-t-white/80 group-hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] max-w-5xl mx-auto cursor-pointer group-hover:scale-[1.02]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-6">
                Recevez un diagnostic "Tableaux de bord & KPIs"
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                En moins de 48h, nous analysons vos besoins de pilotage, identifions les indicateurs les plus utiles et
                définissons une première maquette de tableaux de bord adaptés à votre entreprise.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 text-base sm:text-lg font-semibold px-8 py-6 rounded-xl transition-all duration-300 group-hover:scale-105 shadow-xl"
              >
                <span className="flex items-center gap-2">
                  Demandez votre diagnostic "Tableaux de bord & KPIs en temps réel"
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </Link>
        </section>
      </main>
    </div>
  )
}
