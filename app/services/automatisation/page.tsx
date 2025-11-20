"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  FileText,
  Cog,
  Users,
  CheckCircle,
  Target,
  Zap,
  TrendingUp,
  ArrowRight,
  Mail,
  MessageSquare,
  FileSpreadsheet,
  Briefcase,
  Truck,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function AutomatisationPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
      ".scroll-reveal, .scroll-reveal-premium, .scroll-reveal-premium-fast, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-rotate",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
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
              { label: "Automatisation" },
            ]}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="opacity-0 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-balance leading-[1.1] bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                Automatisation de processus métiers
              </h1>
            </div>

            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)] opacity-0 animate-fade-in-up animation-delay-200" />

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto opacity-0 animate-fade-in-up animation-delay-300">
              Rendre vos processus plus rapides, plus fiables, moins coûteux.
              <br className="hidden sm:block" />
              <span className="block mt-4 text-white/60 text-base sm:text-lg">
                Nous automatisons vos opérations pour réduire les tâches manuelles, sécuriser les flux et libérer du
                temps pour l’essentiel.
              </span>
            </p>

            <div className="opacity-0 animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 border-white/20 rounded-full backdrop-blur-sm border-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span className="font-medium text-white tracking-wide text-sm sm:text-base">
                  Transformer des étapes en flux fluides
                </span>
              </div>
              <Link href="/contact">
                <Button className="rounded-full px-6 py-6 text-base font-semibold bg-white text-black hover:bg-white/90 transition-all hover:scale-105">
                  Discuter de mon projet <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Block */}
      <section className="py-12 px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center scroll-reveal-premium">
          <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-4 border-white/20 border-t-white/60 border-l-white/50 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Un processus métier, c’est une suite d’étapes qui se répètent : actions, validations, échanges
              d’informations entre personnes et outils.
              <br />
              <br />
              <span className="text-white font-semibold">Notre travail :</span> transformer ces étapes en flux fluides,
              portés par des automatisations et, lorsque c’est utile, par des briques d’IA capables de traiter des
              tâches plus complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Ce que nous automatisons le plus souvent */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Ce que nous automatisons le plus souvent
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Nous commençons par les processus qui consomment le plus de temps et d’énergie à vos équipes, en les
              adaptant à votre métier et à vos outils.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Mail,
                title: "Mails et demandes clients",
                desc: "Triage automatique, regroupement par sujet, détection des urgences, réponses standard, brouillons personnalisés à valider, distribution aux bonnes personnes.",
              },
              {
                icon: MessageSquare,
                title: "Support et service après-vente",
                desc: "Création et mise à jour des tickets, reconnaissance automatique du motif, propositions de réponses, suivi des engagements, comptes-rendus après chaque échange.",
              },
              {
                icon: Target,
                title: "Prospection et vente",
                desc: "Qualification des leads à partir des mails et formulaires, préparation de séquences d’e-mails, relances programmées, enrichissement automatique des fiches clients, résumés d’appels et de rendez-vous.",
              },
              {
                icon: FileText,
                title: "Devis, commandes, facturation",
                desc: "Pré-remplissage depuis vos bases clients et produits, contrôles de cohérence, génération des devis et factures, envoi, relances, rapprochement avec les paiements.",
              },
              {
                icon: Briefcase,
                title: "Préparation et gestion de dossiers",
                desc: "Collecte des pièces, relances automatiques en cas de manque, vérification de complétude, application de règles métiers, génération de dossiers prêts à être transmis, mise en forme et archivage.",
              },
              {
                icon: Cog,
                title: "Production, logistique et opérations internes",
                desc: "Mise à jour des statuts, ordres de travail, planning, notifications internes, comptes-rendus d’intervention, synchronisation entre vos outils (ERP, CRM, Excel, planning…).",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal-premium transition-delay-500">
            <div className="inline-block p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 backdrop-blur-sm">
              <p className="text-white/90 font-medium">
                Chaque automatisation est conçue sur mesure, capable de suivre la logique réelle de votre métier et de
                gérer des tâches à la fois répétitives et plus intelligentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nos automatisations savent faire */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Ce que nos automatisations savent faire (avec et sans IA)
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Nous combinons règles métier classiques et IA pour traiter aussi bien des cas simples que des situations
              plus nuancées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Appliquer vos règles métier sans oubli",
                desc: "Si [condition] alors [action] : contrôles, validations, routage, notifications, mises à jour d’outils.",
                icon: CheckCircle,
              },
              {
                title: "Lire, comprendre et traiter du texte",
                desc: "Analyse de mails, demandes, comptes-rendus, pièces jointes : extraction d’informations clés, classement par type de demande, préparation de réponses alignées avec vos pratiques.",
                icon: FileText,
              },
              {
                title: "Générer des documents et contenus structurés",
                desc: "Devis, réponses clients, comptes-rendus, modèles de mails, dossiers pré-remplis, toujours conformes à vos modèles internes.",
                icon: FileSpreadsheet,
              },
              {
                title: "Orchestrer des enchaînements complexes",
                desc: "Plusieurs étapes, plusieurs outils, plusieurs intervenants : le workflow suit le dossier de bout en bout, sans perte d’information et avec un historique clair.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-black/33 rounded-2xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 transition-all duration-500 scroll-reveal-scale"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white">
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 scroll-reveal-premium">
            <p className="text-white/80 text-lg font-medium">
              Pour les équipes, le fonctionnement reste simple : le processus se lance, avance étape par étape, et vous
              gardez la main sur les décisions importantes.
            </p>
          </div>
        </div>
      </section>

      {/* Ce que l’automatisation change pour vous */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Ce que l’automatisation change pour vous
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              L’objectif n’est pas “faire de l’IA”, mais gagner des heures et fiabiliser l’exécution au quotidien.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: "Temps",
                title: "Temps récupéré sur chaque dossier",
                desc: "Moins de copier-coller, moins de re-saisies, moins de suivis manuels. Le temps est réinvesti sur la relation client, la production et les décisions.",
              },
              {
                stat: "Fiabilité",
                title: "Moins d’erreurs, moins de retards",
                desc: "Contrôles systématiques, rappels automatiques, statuts à jour. Les oublis, doublons et erreurs de manipulation diminuent nettement.",
              },
              {
                stat: "Vision",
                title: "Plus de maîtrise sur l’activité",
                desc: "Vue claire sur les dossiers en cours, les priorités, les blocages. Vous savez où en est chaque demande sans chercher dans les mails ou les fichiers.",
              },
              {
                stat: "Scale",
                title: "Plus de volume sans recruter",
                desc: "Les mêmes équipes peuvent traiter plus de dossiers, avec plus de régularité et moins de tension opérationnelle.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 text-center overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] scroll-reveal-rotate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-sm font-bold text-white/50 uppercase tracking-wider mb-4">{item.stat}</div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment nous travaillons sur vos processus */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Comment nous travaillons sur vos processus
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Nous partons de votre réalité terrain, pas d’un modèle théorique.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {[
              {
                num: "1",
                title: "Cartographie rapide des processus clés",
                desc: "Repérage des étapes, des volumes, des règles, des points de friction et des outils utilisés (mails, fichiers, logiciels, échanges internes).",
              },
              {
                num: "2",
                title: "Sélection des cas à plus fort impact",
                desc: "Priorisation de 2 à 4 processus : ceux qui consomment le plus de temps ou créent le plus de risques (retards, erreurs, insatisfaction client).",
              },
              {
                num: "3",
                title: "Conception et déploiement des automatisations",
                desc: "Construction des workflows, connexion à vos outils, intégration de l’IA lorsqu’elle apporte un gain net, tests sur des cas réels avec vos équipes.",
              },
              {
                num: "4",
                title: "Suivi, ajustements et extension",
                desc: "Mesure des gains, corrections, puis extension progressive à d’autres tâches, d’autres services ou d’autres sites.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`group relative flex items-start gap-6 p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl font-bold border border-white/20">
                  {step.num}
                </div>
                <div className="flex-1 space-y-2 pt-2">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adapté à tout métier, sur mesure */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Adapté à tout métier, sur mesure
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Nos automatisations s’adaptent à votre secteur, à vos contraintes et à votre niveau de maturité digitale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Services clients, ADV, SAV",
                desc: "Demandes, réclamations, retours, garanties, suivi des engagements.",
                icon: Users,
              },
              {
                icon: Target,
                title: "Commerciaux, marketing, prospection",
                desc: "Leads, opportunités, relances, préparation d’offres et de dossiers.",
              },
              {
                icon: FileText,
                title: "Back-office, administratif, finances",
                desc: "Dossiers clients/fournisseurs, commandes, factures, contrats, contrôles.",
              },
              {
                icon: Truck,
                title: "Opérations, logistique, production, services sur site",
                desc: "Planning, interventions, traçabilité, mise à jour des systèmes après chaque action.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 transition-all duration-500 scroll-reveal-scale"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center scroll-reveal-premium transition-delay-500">
            <p className="text-white/90 text-lg font-medium">
              La logique est toujours la même : partir de vos processus, construire du sur-mesure, et viser un retour
              mesurable en temps gagné et en fiabilité.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
        <Link href="/contact" className="block">
          <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] lg:px-2.5 animate-reveal-border-glow-premium max-w-5xl mx-auto cursor-pointer group lg:py-6">
            <div className="mb-8 sm:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-6">
                Recevez un diagnostic de vos processus
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                En moins de 48h, nous analysons vos principaux processus, estimons les gains possibles (temps, erreurs,
                capacité) et proposons un plan d’automatisation adapté à votre entreprise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
              <Button
                size="lg"
                className="group-hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] bg-white text-black hover:bg-white/90 h-auto px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 text-base sm:text-lg font-bold rounded-lg"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Demandez votre diagnostic
                  <ArrowRight className="w-4 h-4 sm:w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </Link>
      </section>
    </div>
  )
}
