"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, TrendingUp, CheckCircle, ArrowRight, Clock, Brain, Check, Search, Eye, ShieldCheck } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useEffect, useState } from "react"

export default function AngoulemePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const aiQuestions = [
    "Qu'est-ce qui manque aujourd'hui pour que tout tourne comme prévu ?",
    "Qu'est-ce qui a pris du retard depuis ce matin ?",
    "Qui attend une décision de ma part pour avancer ?",
    "Quels chiffres du jour sortent de la normale ?",
  ]

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
      ".scroll-reveal, .scroll-reveal-premium, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % aiQuestions.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10 min-h-screen text-white">
        <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs
              items={[{ label: "Accueil", href: "/" }, { label: "Villes", href: "/" }, { label: "Angoulême" }]}
            />
          </div>
        </div>

        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Aegens",
              url: "https://aegens.com",
              image: "https://aegens.com/og.jpg",
              telephone: "+33745103015",
              address: {
                "@type": "PostalAddress",
                streetAddress: "18 Rue Ampère – ZI La Folie Sud",
                addressLocality: "La Chaize-le-Vicomte",
                postalCode: "85310",
                addressCountry: "FR",
              },
              areaServed: ["Angoulême", "Charente", "Nouvelle-Aquitaine"],
              sameAs: [],
            }),
          }}
        />

        {/* JSON-LD FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Faut-il changer d'outils pour automatiser ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Non par défaut. On connecte l'existant. Alternative proposée seulement si ROI évident.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Reporting temps réel ou J+1 ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Temps réel quand la source le permet. Sinon latence minute/heure définie au cadrage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Premier résultat sous quel délai ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Typiquement 30 jours sur le périmètre pilote, selon accès et volumes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Données sensibles et RGPD ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Accès par rôles, cloisonnement, journaux. Hébergement UE possible. DPA/RGPD sur demande.",
                  },
                },
              ],
            }),
          }}
        />

        {/* JSON-LD Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://aegens.com/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Angoulême",
                  item: "https://aegens.com/ville/angouleme",
                },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="pt-12 md:pt-16 pb-12 px-4 sm:px-6 md:pb-0 scroll-reveal-premium">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-balance leading-[1.1] bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Intégrateur IA à Angoulême (Charente)
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto">
              Automatisation, assistants métier, analyse & reporting, audit 360°
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#0071e3] text-white hover:bg-[#0071ed] text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-xl rounded-2xl font-semibold"
            >
              <Link href="/contact" className="block">
                <span className="font-semibold flex items-center gap-2 justify-center">
                  <Zap className="w-5 h-5" />
                  Planifier une visite sur site
                </span>
                <span className="block text-xs sm:text-sm font-normal mt-2 opacity-80">
                  Visite 60–90 min. Plan d'action et devis sous 48 h.
                </span>
              </Link>
            </Button>
            <p className="text-sm md:text-base text-white/60 mt-4 italic">
              Orienté solution sur mesure et croissance ROI
            </p>
          </div>
        </section>

        {/* Pourquoi cette page */}
        <section className="py-12 md:py-16 px-4 sm:px-6 scroll-reveal-premium">
          <div className="max-w-5xl mx-auto">
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              Vous cherchez un intégrateur IA à Angoulême pour automatiser vos processus, déployer un assistant IA
              métier et livrer un reporting temps réel connecté à vos outils. Priorité TPE/PME charentaises. Approche
              terrain, sur-mesure, orientée croissance/ROI.
            </p>
          </div>
        </section>

        {/* Services IA pour TPE/PME */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Services IA pour TPE/PME à Angoulême
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)] mb-12" />

            <div className="max-w-6xl mx-auto space-y-8 mb-10 sm:mb-12">
              {[
                {
                  title: "Automatisation des processus",
                  subtitle: "Connectez vos outils existants",
                  link: "/services/automatisation",
                  icon: Zap,
                  index: 0,
                },
                {
                  title: "Assistant IA métier",
                  subtitle: "RAG sécurisé, réponses sourcées",
                  link: "/services/assistant-ia-metier",
                  icon: Brain,
                  index: 1,
                },
                {
                  title: "Analyse & Reporting",
                  subtitle: "Dashboards temps réel",
                  link: "/services/analyse-reporting",
                  icon: TrendingUp,
                  index: 2,
                },
                {
                  title: "Audit 360° en 5 jours",
                  subtitle: "Processus, SI, données, supply chain",
                  link: "/services/audit",
                  icon: ShieldCheck,
                  index: 3,
                },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <Link key={index} href={service.link} className="block group no-underline">
                    <div
                      className={`relative p-4 bg-black/33 rounded-2xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] cursor-pointer min-h-[300px] flex flex-col ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="flex items-start gap-4 relative z-10 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500 border-2 border-white/30">
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1 space-y-1">
                          <h3 className="text-xl font-bold leading-tight text-white group-hover:text-white/90 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">
                            {service.subtitle}
                          </p>
                        </div>

                        <div className="flex-shrink-0 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="flex-1 flex items-center justify-center px-2 py-3">
                        {index === 0 && (
                          <div className="relative w-full max-w-sm h-48">
                            {/* Workflow animation from homepage */}
                            <div className="relative w-full h-full bg-white/15 backdrop-blur-xl rounded-2xl border-2 border-white/50 p-4 shadow-xl animate-float-gentle-premium overflow-hidden">
                              <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 animate-shimmer-premium" />
                                <div
                                  className="absolute inset-0"
                                  style={{
                                    backgroundImage:
                                      "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                                    backgroundSize: "20px 20px",
                                  }}
                                />
                              </div>

                              <div className="relative h-full flex flex-col justify-between py-1">
                                <div className="flex justify-between items-center mb-2 pb-2 border-b border-white/40">
                                  <div className="flex items-center gap-1.5">
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-white/40 rounded-full blur-md animate-pulse-glow-premium" />
                                      <Zap className="relative w-4 h-4 text-white animate-pulse-glow-premium" />
                                    </div>
                                    <div>
                                      <div className="text-[10px] text-white font-bold">Workflow Actif</div>
                                      <div className="text-[8px] text-white/70 font-semibold animate-typing-premium">
                                        Automatisation en cours...
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-white/20 to-white/10 px-2 py-1 rounded-xl border-2 border-white/40 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-white rounded-full blur-sm animate-pulse" />
                                      <div className="relative w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,1)]" />
                                    </div>
                                    <span className="text-[8px] text-white font-black uppercase tracking-wider">
                                      Active
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between px-1">
                                  <div className="flex flex-col items-center gap-1">
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-white/50 rounded-xl blur-lg animate-pulse-glow-premium" />
                                      <div className="relative w-12 h-12 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md border-2 border-white/60 rounded-xl flex items-center justify-center hover:bg-white/35 hover:scale-110 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.5)]">
                                        <Zap className="w-5 h-5 text-white drop-shadow-[0_2px_12px_rgba(255,255,255,1)]" />
                                      </div>
                                    </div>
                                    <span className="text-[9px] text-white font-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] tracking-wider">
                                      TRIGGER
                                    </span>
                                  </div>

                                  <div className="flex-1 flex items-center justify-center px-2">
                                    <div className="relative h-1 w-full bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-white rotate-45 drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                                    </div>
                                  </div>

                                  <div className="flex flex-col items-center gap-1">
                                    <div className="relative">
                                      <div
                                        className="absolute inset-0 bg-white/50 rounded-xl blur-lg animate-pulse-glow-premium"
                                        style={{ animationDelay: "0.3s" }}
                                      />
                                      <div className="relative w-12 h-12 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md border-2 border-white/60 rounded-xl flex items-center justify-center hover:bg-white/35 hover:scale-110 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.5)]">
                                        <Brain className="w-5 h-5 text-white drop-shadow-[0_2px_12px_rgba(255,255,255,1)]" />
                                      </div>
                                    </div>
                                    <span className="text-[9px] text-white font-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] tracking-wider">
                                      PROCESS
                                    </span>
                                  </div>

                                  <div className="flex-1 flex items-center justify-center px-2">
                                    <div className="relative h-1 w-full bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-2 border-r-2 border-white rotate-45 drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                                    </div>
                                  </div>

                                  <div className="flex flex-col items-center gap-1">
                                    <div className="relative">
                                      <div
                                        className="absolute inset-0 bg-white/50 rounded-xl blur-lg animate-pulse-glow-premium"
                                        style={{ animationDelay: "0.6s" }}
                                      />
                                      <div className="relative w-12 h-12 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-md border-2 border-white/60 rounded-xl flex items-center justify-center hover:bg-white/35 hover:scale-110 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.5)]">
                                        <Check className="w-5 h-5 text-white drop-shadow-[0_2px_12px_rgba(255,255,255,1)]" />
                                      </div>
                                    </div>
                                    <span className="text-[9px] text-white font-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] tracking-wider">
                                      COMPLETE
                                    </span>
                                  </div>
                                </div>

                                <div className="px-2 pt-1 mt-1 border-t border-white/30 space-y-2">
                                  <div className="flex items-center justify-between">
                                    <div className="text-[9px] text-white/90 font-black uppercase tracking-wider">
                                      Progression
                                    </div>
                                    <div className="text-xs text-white font-black animate-count-up-premium">78%</div>
                                  </div>

                                  <div className="relative h-3 bg-gradient-to-r from-white/10 via-white/15 to-white/10 rounded-full overflow-hidden border-2 border-white/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-premium" />
                                    <div className="relative h-full w-[78%] bg-gradient-to-r from-white/70 via-white to-white/70 shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                                      <div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer-premium"
                                        style={{ animationDelay: "0.3s" }}
                                      />
                                    </div>
                                    <div className="absolute left-[78%] top-1/2 -translate-y-1/2 -translate-x-1/2">
                                      <div className="absolute inset-0 bg-white rounded-full blur-md animate-pulse-glow-premium" />
                                      <div className="relative w-2 h-2 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,1)]" />
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between pt-0.5">
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-3 h-3 text-white/80 animate-pulse-glow-premium" />
                                      <span className="text-[8px] text-white/80 font-bold">2.4s restant</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <div className="flex gap-0.5">
                                        {[...Array(3)].map((_, i) => (
                                          <div
                                            key={i}
                                            className="w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse-glow-premium"
                                            style={{ animationDelay: `${i * 0.2}s` }}
                                          />
                                        ))}
                                      </div>
                                      <span className="text-[8px] text-white/80 font-bold">127 tâches traitées</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {[...Array(8)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-0.5 h-0.5 bg-white/60 rounded-full animate-particle-float-premium"
                                  style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${i * 0.4}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        )}

                        {index === 1 && (
                          <div className="relative w-full max-w-sm h-48">
                            {/* AI Assistant animation from homepage */}
                            <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl border-2 border-white/50 p-4 shadow-xl animate-float-gentle-premium h-full overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 animate-shimmer-premium opacity-50" />

                              <div className="relative flex items-center gap-3 mb-4 pb-3 border-b border-white/40">
                                <div className="relative">
                                  <div className="absolute inset-0 bg-white/40 rounded-full blur-md animate-pulse-glow-premium" />
                                  <Search className="relative w-6 h-6 text-white animate-pulse-glow-premium" />
                                </div>
                                <div className="flex-1 text-left overflow-hidden">
                                  <div className="text-xs text-white/90 font-bold mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                                    Question active
                                  </div>
                                  <div className="text-sm sm:text-base text-white font-semibold leading-tight animate-typing-cycle-premium drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                                    {aiQuestions[currentQuestion].substring(0, 55)}...
                                  </div>
                                </div>
                                <div className="flex gap-1">
                                  {[...Array(3)].map((_, i) => (
                                    <div
                                      key={i}
                                      className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-glow-premium"
                                      style={{ animationDelay: `${i * 0.15}s` }}
                                    />
                                  ))}
                                </div>
                              </div>

                              <div className="relative space-y-3">
                                {[1, 2, 3].map((i) => (
                                  <div
                                    key={i}
                                    className="relative bg-gradient-to-br from-white/15 to-white/5 border border-white/40 rounded-xl p-3 animate-result-appear-premium shadow-lg hover:border-white/60 transition-all duration-300 overflow-hidden"
                                    style={{ animationDelay: `${i * 0.4}s` }}
                                  >
                                    <div
                                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-premium"
                                      style={{ animationDelay: `${i * 0.5}s` }}
                                    />

                                    <div className="relative flex items-start gap-2 mb-2">
                                      <div className="relative flex-shrink-0">
                                        <div className="absolute inset-0 bg-white/30 rounded-full blur-sm animate-pulse-glow-premium" />
                                        <Brain className="relative w-4 h-4 text-white animate-pulse-glow-premium" />
                                      </div>
                                      <div className="flex-1 space-y-1.5">
                                        <div className="h-2 bg-white/70 rounded-full w-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                                        <div className="h-2 bg-white/50 rounded-full w-3/4 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                                      </div>
                                    </div>
                                    <div className="relative flex justify-between items-center pt-2 border-t border-white/20">
                                      <div className="text-[9px] text-white/80 font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                                        IA Analyse
                                      </div>
                                      <div className="flex gap-1">
                                        {[...Array(3)].map((_, j) => (
                                          <div
                                            key={j}
                                            className="w-1 h-1 bg-white/70 rounded-full animate-pulse-glow-premium shadow-[0_0_4px_rgba(255,255,255,0.8)]"
                                            style={{ animationDelay: `${j * 0.2}s` }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {index === 2 && (
                          <div className="relative w-full max-w-sm h-48">
                            {/* Reporting animation from homepage - simplified version */}
                            <div className="relative w-full h-full bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl rounded-3xl p-4 border-3 border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] animate-float-gentle-premium overflow-hidden">
                              <div className="grid grid-cols-3 gap-2 mb-4 relative z-10">
                                {[
                                  { value: "€45K", label: "CA", change: "+12%" },
                                  { value: "234", label: "Clients", change: "+8%" },
                                  { value: "94%", label: "Sat.", change: "+2%" },
                                ].map((metric, i) => (
                                  <div
                                    key={i}
                                    className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-xl rounded-xl p-2 border-3 border-white/60 animate-metric-appear-premium shadow-[0_6px_25px_rgba(0,0,0,0.25),inset_0_2px_0_rgba(255,255,255,0.5)]"
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                  >
                                    <div className="text-white font-black text-base mb-0.5 drop-shadow-[0_3px_10px_rgba(255,255,255,0.7)] animate-count-up-premium">
                                      {metric.value}
                                    </div>
                                    <div className="text-white/80 text-[9px] font-bold mb-1 uppercase tracking-wider">
                                      {metric.label}
                                    </div>
                                    <div className="flex items-center gap-1 bg-white/25 rounded-lg px-1.5 py-1">
                                      <TrendingUp className="w-2.5 h-2.5 text-white animate-pulse-glow-premium drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                                      <span className="text-[8px] text-white font-black drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]">
                                        {metric.change}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="relative h-28 bg-gradient-to-br from-white/15 to-white/5 rounded-2xl p-3 mb-3 shadow-[0_8px_30px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]">
                                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                                  <defs>
                                    <linearGradient id="chartGradientPremium" x1="0%" y1="0%" x2="0%" y2="100%">
                                      <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                                      <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
                                      <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                                    </linearGradient>
                                  </defs>
                                  <path
                                    d="M 0 60 L 25 50 L 50 55 L 75 35 L 100 40 L 125 25 L 150 30 L 175 15 L 200 20 L 200 80 L 0 80 Z"
                                    fill="url(#chartGradientPremium)"
                                    className="animate-chart-fill-premium"
                                  />
                                  <path
                                    d="M 0 60 L 25 50 L 50 55 L 75 35 L 100 40 L 125 25 L 150 30 L 175 15 L 200 20"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.95)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="animate-line-draw-premium"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}

                        {index === 3 && (
                          <div className="relative w-full max-w-sm h-48">
                            {/* Audit animation from homepage */}
                            <div className="relative w-full h-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border-2 border-white/50 shadow-2xl animate-float-gentle-premium overflow-hidden">
                              <div className="flex justify-between items-center mb-4 relative z-10">
                                <div className="flex items-center gap-2">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-white/40 rounded-full blur-md animate-pulse-glow-premium" />
                                    <ShieldCheck className="relative w-5 h-5 text-white animate-pulse-glow-premium" />
                                  </div>
                                  <div>
                                    <div className="text-[10px] text-white font-bold">Audit Système</div>
                                    <div className="text-[8px] text-white/70 font-semibold animate-typing-premium">
                                      Analyse en temps réel...
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="relative h-32 flex items-center justify-center">
                                <div className="relative w-28 h-28">
                                  {[0, 1, 2, 3, 4].map((i) => (
                                    <div
                                      key={i}
                                      className="absolute rounded-full transition-all duration-300"
                                      style={{
                                        inset: `${i * 6}px`,
                                        border: `${2 - i * 0.3}px solid rgba(255,255,255,${0.4 - i * 0.06})`,
                                        animation:
                                          i % 2 === 0
                                            ? "orbit-premium 8s linear infinite"
                                            : "orbit-reverse-premium 10s linear infinite",
                                        animationDelay: `${i * 0.2}s`,
                                      }}
                                    />
                                  ))}

                                  <div className="absolute inset-0 border-t-3 border-white rounded-full animate-scan-rotate-fast-premium drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />

                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-white/40 rounded-full blur-xl animate-pulse-glow-premium" />
                                      <Eye className="relative w-10 h-10 text-white drop-shadow-[0_0_12px_rgba(255,255,255,1)] animate-float-gentle-premium" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Cas d'usage locaux */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Cas d'usage locaux (Angoulême, Gond-Pontouvre, Soyaux, L'Isle-d'Espagnac, Saint-Yrieix)
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)] mb-12" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Industries papier/packaging/impression",
                  desc: "Planification ordonnancement, contrôles qualité, suivi TRS/OTD, gestion rebuts.",
                },
                {
                  title: "Spirits/boissons",
                  location: "Cognac/Jarnac à proximité",
                  desc: "Traçabilité lots, étiquetage, conformité, reporting production/expéditions.",
                },
                {
                  title: "Logistique/transport",
                  location: "axe N10",
                  desc: "WMS↔ERP, préparation de tournées, suivi délais et incidents.",
                },
                {
                  title: "Services B2B / cabinets",
                  desc: "Assistant documentaire sourcé, saisies automatisées, SLA support.",
                },
                {
                  title: "Retail/e-commerce",
                  desc: "Cohérence catalogue, commandes→expédition→facture, dashboards ROAS.",
                },
                {
                  title: "Culture/événementiel",
                  desc: "Content ops assistés (brief→V1→validation), calendrier ressources, reporting partenaires.",
                },
              ].map((useCase, i) => (
                <div
                  key={i}
                  className="p-6 md:p-7 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 rounded-xl bg-black/33 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 scroll-reveal-scale"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-2 leading-tight text-white">{useCase.title}</h3>
                  {useCase.location && (
                    <p className="text-white/50 text-xs md:text-sm mb-3 italic">{useCase.location}</p>
                  )}
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">{useCase.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-center mt-10 md:mt-12 italic text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Tout est étudiable. Pas de refonte lourde par défaut. On part de vos idées et de votre contexte.
            </p>
          </div>
        </section>

        {/* Comment on travaille */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
              Comment on travaille (local et pragmatique)
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {[
                {
                  num: "1",
                  title: "Visite sur site à Angoulême",
                  desc: "60–90 min, observation des flux et exceptions.",
                },
                {
                  num: "2",
                  title: "Cadrage sous 48 h",
                  desc: "Objectifs, KPI, jalons, responsabilités, risques.",
                },
                {
                  num: "3",
                  title: "Pilote 30 jours",
                  desc: "Un flux automatisé ou un assistant ou un tableau temps réel.",
                },
                {
                  num: "4",
                  title: "Mise en production",
                  desc: "Sécurité, formation, bascule progressive, runbook.",
                },
                {
                  num: "5",
                  title: "Ops managées",
                  desc: "Supervision, petites évolutions, revues régulières.",
                },
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-gradient-to-br from-white/35 to-white/25 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 leading-tight">{step.title}</h3>
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Résultats attendus et mesure */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 scroll-reveal-premium">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center flex items-center justify-center gap-3 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              <TrendingUp className="w-10 h-10 text-white" />
              Résultats attendus et mesure
            </h2>
            <div className="bg-black/33 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 rounded-xl p-6 md:p-8 lg:p-10 transition-all duration-500">
              <ul className="space-y-4 md:space-y-5 text-white/70 text-base md:text-lg">
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-1" />
                  <span>Objectifs chiffrés validés au cadrage.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-1" />
                  <span>Mesure avant/après sur source de vérité (ERP, CRM, WMS/MES, compta).</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white flex-shrink-0 mt-1" />
                  <span>
                    Focus: temps de saisie, erreurs, délais, disponibilité temps réel selon sources, adoption par
                    équipe.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Maillage interne */}
        

        {/* CTA Final */}
        <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 scroll-reveal-scale">
          <Link href="/contact" className="block group no-underline">
            <div className="max-w-4xl mx-auto bg-black/33 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] cursor-pointer lg:py-2.5 lg:px-2.5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight flex items-center justify-center gap-3 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                <Zap className="w-12 h-12 text-white" />
                Planifier une visite sur site
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mb-0">
                Visite 60–90 min. Plan d'action et devis sous 48 h.
                <br />
                <span className="text-white/70">Orienté solution sur mesure et croissance ROI</span>
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 lg:px-16 py-5 sm:py-6 md:py-7 lg:py-8 h-auto group-hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-auto pointer-events-none"
              >
                Prendre contact
              </Button>
            </div>
          </Link>
        </section>
      </div>
    </div>
  )
}
