"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Zap,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Brain,
  LineChart,
  Search,
  Check,
  ShieldCheck,
  Eye,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useEffect, useState } from "react"

export default function NantesClientPage() {
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
    <div className="min-h-screen text-white relative">
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />

      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Villes", href: "/" }, { label: "Nantes" }]} />
        </div>
      </div>

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
            areaServed: ["Nantes", "Loire-Atlantique", "Pays de la Loire"],
            sameAs: [],
          }),
        }}
      />

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
                name: "Nantes",
                item: "https://aegens.com/ville/nantes",
              },
            ],
          }),
        }}
      />

      <section className="pt-32 md:pt-36 pb-12 px-4 sm:px-6 md:pb-16 lg:pt-52 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500">
            Intégrateur IA à Nantes (Loire-Atlantique)
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto">
            Automatisation, assistants métier, analyse & reporting, audit 360°
          </p>
          <p className="text-lg sm:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed max-w-3xl mx-auto">
            Orienté solution sur mesure et croissance ROI
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-lg px-10 py-7 h-auto transition-all duration-300 hover:scale-105 shadow-xl font-semibold rounded-2xl"
          >
            <Link href="/contact">Planifier une visite sur site</Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 bg-black/33 backdrop-blur-sm rounded-3xl max-w-6xl mx-auto border-4 border-white/20 border-t-white/60 border-l-white/50 scroll-reveal-premium relative z-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center">
            Vous cherchez un intégrateur IA à Nantes pour automatiser vos flux, déployer un assistant IA métier et
            structurer un reporting temps réel fiable.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center mt-4">
            Priorité TPE/PME de Nantes et Loire-Atlantique. Approche terrain, sur-mesure, orientée impact et ROI.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-8 scroll-reveal-premium">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500">
              Services IA pour TPE/PME à Nantes
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </div>

          <div className="max-w-6xl mx-auto space-y-8 mb-10 sm:mb-12">
            {/* Automatisation */}
            <Link href="/services/automatisation" className="block group no-underline">
              <div className="relative p-4 bg-black/33 rounded-2xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] cursor-pointer min-h-[300px] flex flex-col scroll-reveal-left">
                <div className="flex items-start gap-4 relative z-10 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500 border-2 border-white/30">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xl font-bold leading-tight text-white group-hover:text-white/90 transition-colors duration-300">
                      Automatisation
                    </h3>
                    <p className="text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">
                      Connectez vos outils et automatisez vos workflows
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Workflow animation */}
                <div className="flex-1 flex items-center justify-center px-2 py-3">
                  <div className="relative w-full max-w-sm h-48">
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
                            <span className="text-[8px] text-white font-black uppercase tracking-wider">Active</span>
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
                </div>
              </div>
            </Link>

            {/* Assistant IA - same structure with animation */}
            <Link href="/services/assistant-ia-metier" className="block group no-underline">
              <div className="relative p-4 bg-black/33 rounded-2xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] cursor-pointer min-h-[300px] flex flex-col scroll-reveal-right">
                <div className="flex items-start gap-4 relative z-10 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500 border-2 border-white/30">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xl font-bold leading-tight text-white group-hover:text-white/90 transition-colors duration-300">
                      Assistants métier IA & RAG
                    </h3>
                    <p className="text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">
                      Réponses instantanées depuis vos documents métier
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center px-2 py-3">
                  <div className="relative w-full max-w-sm h-48">
                    <div className="relative bg-white/15 backdrop-blur-xl rounded-2xl border-2 border-white/50 p-4 shadow-xl animate-float-gentle-premium h-full overflow-hidden">
                      {/* Search IA animation */}
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
                </div>
              </div>
            </Link>

            <Link href="/services/analyse-reporting" className="block group no-underline">
              <div className="relative p-4 bg-black/33 rounded-2xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] cursor-pointer min-h-[300px] flex flex-col scroll-reveal-left">
                <div className="flex items-start gap-4 relative z-10 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500 border-2 border-white/30">
                    <LineChart className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xl font-bold leading-tight text-white group-hover:text-white/90 transition-colors duration-300">
                      Tableaux de bord & KPIs
                    </h3>
                    <p className="text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">
                      Pilotez avec des indicateurs temps réel
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center px-2 py-3">
                  <div className="relative w-full max-w-sm h-48">
                    {/* Dashboard with charts animation - copy full code from homepage */}
                    <div className="relative w-full h-full bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-2xl rounded-3xl p-4 border-3 border-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] animate-float-gentle-premium overflow-hidden">
                      <div className="absolute inset-0 opacity-30">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 animate-shimmer-premium" />
                        </div>
                      </div>

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
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                              <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
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
                            strokeLinejoin="round"
                            filter="url(#glow)"
                            className="animate-line-draw-premium"
                          />
                          {[
                            [25, 50],
                            [50, 55],
                            [75, 35],
                            [100, 40],
                            [125, 25],
                            [150, 30],
                            [175, 15],
                            [200, 20],
                          ].map(([x, y], i) => (
                            <circle
                              key={i}
                              cx={x}
                              cy={y}
                              r="3"
                              fill="white"
                              filter="url(#glow)"
                              className="animate-dot-appear-premium"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </svg>
                      </div>

                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-1.5 bg-gradient-to-r from-white/20 to-white/10 px-2 py-1 rounded-xl border-2 border-white/40 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]">
                          <div className="flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-0.5 h-2.5 bg-white/80 rounded-full animate-pulse-glow-premium shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                                style={{ animationDelay: `${i * 0.15}s` }}
                              />
                            ))}
                          </div>
                          <span className="text-[8px] text-white/90 font-bold uppercase tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                            Temps réel
                          </span>
                        </div>
                        <div className="flex items-center gap-1 bg-gradient-to-r from-white/20 to-white/10 px-2 py-1 rounded-xl border-2 border-white/40 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]">
                          <TrendingUp className="w-2.5 h-2.5 text-white animate-pulse-glow-premium drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                          <span className="text-[8px] text-white font-bold uppercase tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                            Optimal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services/audit" className="block group no-underline">
              <div className="relative p-4 bg-black/33 rounded-2xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] cursor-pointer min-h-[300px] flex flex-col scroll-reveal-right">
                <div className="flex items-start gap-4 relative z-10 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500 border-2 border-white/30">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xl font-bold leading-tight text-white group-hover:text-white/90 transition-colors duration-300">
                      Audit, cartographie & diagnostic
                    </h3>
                    <p className="text-sm text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">
                      Identifiez les gains rapides et structurants
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center px-2 py-3">
                  <div className="relative w-full max-w-sm h-48">
                    {/* Audit scanner animation - full code from homepage */}
                    <div className="relative w-full h-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border-2 border-white/50 shadow-2xl animate-float-gentle-premium overflow-hidden">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-0.5 h-0.5 bg-white/60 rounded-full animate-particle-float-premium"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`,
                          }}
                        />
                      ))}

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
                        <div className="flex items-center gap-1.5">
                          <div className="text-[9px] text-white/90 font-bold animate-count-up-premium">
                            {Math.floor(Math.random() * 25) + 70}%
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-0.5 h-2.5 bg-white/80 rounded-full animate-pulse-glow-premium"
                                style={{ animationDelay: `${i * 0.15}s` }}
                              />
                            ))}
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
                          <div
                            className="absolute inset-1 border-t-2 border-white/80 rounded-full animate-scan-rotate-reverse-premium"
                            style={{ animationDuration: "2s" }}
                          />
                          <div
                            className="absolute inset-2 border-t-1 border-white/60 rounded-full animate-scan-rotate-fast-premium"
                            style={{ animationDelay: "0.3s", animationDuration: "1.5s" }}
                          />

                          {[0, 120, 240].map((angle, i) => (
                            <div
                              key={i}
                              className="absolute inset-0"
                              style={{
                                animation: `orbit-premium ${4 + i}s linear infinite`,
                                animationDelay: `${i * 0.5}s`,
                              }}
                            >
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-pulse-glow-premium" />
                            </div>
                          ))}

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              <div className="absolute inset-0 bg-white/40 rounded-full blur-xl animate-pulse-glow-premium" />
                              <Eye className="relative w-10 h-10 text-white drop-shadow-[0_0_12px_rgba(255,255,255,1)] animate-float-gentle-premium" />
                            </div>
                          </div>
                        </div>

                        <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-1.5">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="flex items-center gap-1.5 animate-scan-result-slide-premium"
                              style={{ animationDelay: `${i * 0.25}s` }}
                            >
                              <div className="relative">
                                <div className="absolute inset-0 bg-white/50 rounded-full blur-sm animate-pulse-glow-premium" />
                                <Check className="relative w-3 h-3 text-white" />
                              </div>
                              <div
                                className="relative h-1.5 bg-white/70 rounded-full overflow-hidden"
                                style={{ width: `${25 + i * 6}px` }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-premium" />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-1.5">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="flex items-center gap-1.5 animate-scan-result-slide-premium"
                              style={{ animationDelay: `${0.15 + i * 0.25}s` }}
                            >
                              <div
                                className="relative h-1.5 bg-white/70 rounded-full overflow-hidden"
                                style={{ width: `${22 + i * 5}px` }}
                              >
                                <div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-premium"
                                  style={{ animationDelay: "0.5s" }}
                                />
                              </div>
                              <div className="relative">
                                <div
                                  className="absolute inset-0 bg-white/50 rounded-full blur-sm animate-pulse-glow-premium"
                                  style={{ animationDelay: "0.2s" }}
                                />
                                <Check className="relative w-3 h-3 text-white" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative mt-2 h-2 bg-white/20 rounded-full overflow-hidden border-2 border-white/40">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-premium" />
                        <div className="relative h-full bg-gradient-to-r from-white/70 via-white to-white/70 animate-progress-fill-loop-premium shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                      </div>

                      <div className="flex justify-between items-center mt-2 text-[8px] font-semibold">
                        <div className="flex items-center gap-1 text-white/70">
                          <div className="flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse-glow-premium"
                                style={{ animationDelay: `${i * 0.2}s` }}
                              />
                            ))}
                          </div>
                          <span>Analyse active</span>
                        </div>
                        <div className="text-white/90 font-bold animate-count-up-premium">
                          {Math.floor(Math.random() * 200) + 350} éléments scannés
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] scroll-reveal-premium">
            Cas d'usage locaux (Nantes, Rezé, Saint-Herblain, Orvault, Carquefou)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Industrie, fabrication, agro / food",
                desc: "Ordonnancement, suivi atelier, traçabilité, stocks, contrôles qualité, rapports de production.",
              },
              {
                title: "Logistique, transport, e-commerce",
                desc: "WMS ↔ ERP, préparation de tournées, suivi de colis, délais, exceptions.",
              },
              {
                title: "ESN, agences, services B2B",
                desc: "Pilotage des projets, extraction automatique des infos clé dans les mails, comptes-rendus, temps passés.",
              },
              {
                title: "Retail, pure players et DNVB",
                desc: "Consolidation des ventes (web, boutiques, marketplaces), ROAS, marge, retours, cohérence catalogue.",
              },
              {
                title: "Culture, médias, événementiel, communication",
                desc: "Pipelines de contenus, validation, calendriers, reporting clients/partenaires.",
              },
            ].map((useCase, i) => (
              <div
                key={i}
                className="p-6 md:p-7 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 scroll-reveal-scale"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 leading-tight text-white">{useCase.title}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-center mt-10 md:mt-12 italic text-base md:text-lg max-w-3xl mx-auto leading-relaxed scroll-reveal-premium transition-delay-500">
            Tout est adaptable. On automatise à partir de vos contraintes, pas contre elles.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] scroll-reveal-premium">
            Comment on travaille (local et pragmatique)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                num: "1",
                title: "Visite sur site à Nantes",
                desc: "60–90 min, immersion dans vos flux réels.",
              },
              {
                num: "2",
                title: "Cadrage sous 48 h",
                desc: "Objectifs, KPI, périmètre, risques, responsabilités.",
              },
              {
                num: "3",
                title: "Pilote 30 jours",
                desc: "Un processus clé automatisé ou un assistant IA métier utilisable directement.",
              },
              {
                num: "4",
                title: "Mise en production",
                desc: "Sécurité, conformité, formation, bascule progressive.",
              },
              {
                num: "5",
                title: "Ops managées",
                desc: "Supervision, petites améliorations, revue des KPI.",
              },
            ].map((step, i) => (
              <div key={i} className="relative group scroll-reveal-scale" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 border-4 border-white/30 group-hover:scale-110 transition-transform duration-300 text-white">
                  {step.num}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 leading-tight text-white">{step.title}</h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-black/33 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] scroll-reveal-premium">
            Résultats attendus et mesure
          </h2>
          <div className="bg-white/5 border-4 border-white/20 border-t-white/60 border-l-white/50 rounded-xl p-6 md:p-8 lg:p-10 scroll-reveal-premium transition-delay-200">
            <ul className="space-y-4 md:space-y-5 text-white/70 text-base md:text-lg">
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-1" />
                <span>Objectifs chiffrés définis au cadrage.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-1" />
                <span>Mesure avant/après sur vos outils de référence.</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4 leading-relaxed">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-white/50 flex-shrink-0 mt-1" />
                <span>Focus : temps de traitement, erreurs, délais, fiabilité des chiffres, capacité absorbée.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Link href="/contact" className="block no-underline">
        <section className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative z-10 scroll-reveal-scale cursor-pointer group">
          <div className="max-w-4xl mx-auto text-center bg-black/33 backdrop-blur-xl rounded-3xl p-10 md:p-16 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500">
              Planifier une visite sur site
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Visite 60–90 min. Plan d'action et devis sous 48 h.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
              Orienté solution sur mesure et croissance ROI.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-white text-black hover:bg-white/90 text-lg px-10 py-7 h-auto transition-all duration-300 group-hover:scale-110 shadow-xl font-semibold rounded-2xl"
            >
              Demander un diagnostic IA & automatisation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </section>
      </Link>
    </div>
  )
}
