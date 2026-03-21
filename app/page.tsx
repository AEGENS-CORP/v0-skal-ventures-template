"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Zap,
  Clock,
  Target,
  Users,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Eye,
  Brain,
  LineChart,
  ChevronDown,
  Search,
  Check,
  MapPin,
} from "lucide-react"
import { useEffect, useState, useMemo } from "react"
import { homepageConfig, styleConfig } from "@/config/homepage"

const iconMap = {
  TrendingUp,
  Zap,
  Eye,
  Brain,
  LineChart,
  Users,
  Clock,
  Target,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Search,
  Check,
  MapPin,
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const aiQuestions = [
    "Qu'est-ce qui manque aujourd'hui pour que tout tourne comme prévu ?",
    "Qu'est-ce qui a pris du retard depuis ce matin ?",
    "Qui attend une décision de ma part pour avancer ?",
    "Quels chiffres du jour sortent de la normale ?",
  ]

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const handleMouseMove = (e: MouseEvent) => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setMousePos({ x: e.clientX, y: e.clientY })
      }, 50)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % aiQuestions.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const { hero, positioning, pillars, method, onsite, kpis, faq, finalCta } = homepageConfig

  const gradientStyle = useMemo(
    () => ({
      background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
    }),
    [mousePos.x, mousePos.y],
  )

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AEGENS",
    "url": "https://aegens.com",
    "logo": "https://aegens.com/ae-logo.png",
    "description": "AEGENS est une société d'accompagnement stratégique et opérationnel pour les entreprises qui veulent prendre le virage de l'IA et des nouvelles technologies.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18 Rue Ampère – ZI La Folie Sud",
      "addressLocality": "La Chaize-le-Vicomte",
      "postalCode": "85310",
      "addressCountry": "FR"
    },
    "telephone": "+33745103015",
    "email": "contact@aegens.com",
    "areaServed": ["Vendée", "La Roche-sur-Yon", "La Rochelle", "Niort", "Nantes", "Poitiers", "Angoulême"]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AEGENS",
    "image": "https://aegens.com/ae-logo.png",
    "url": "https://aegens.com",
    "telephone": "+33745103015",
    "email": "contact@aegens.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18 Rue Ampère – ZI La Folie Sud",
      "addressLocality": "La Chaize-le-Vicomte",
      "postalCode": "85310",
      "addressCountry": "FR"
    },
    "priceRange": "$$",
    "description": "Accompagnement stratégique et opérationnel pour les entreprises : pilotage, automatisation, IA, audit et accompagnement terrain."
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Accompagnement stratégique et opérationnel",
    "provider": {
      "@type": "Organization",
      "name": "AEGENS"
    },
    "areaServed": {
      "@type": "Place",
      "name": "France"
    },
    "description": "Accompagnement des entreprises dans leur virage IA et nouvelles technologies : audit des flux et processus, cockpit de direction, pilotage d'activité, automatisation des processus, assistants IA, structuration des données, accompagnement terrain et intervention sur site.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300" style={gradientStyle} />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 gap-0 sm:py-px my-0">
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center lg:space-y-1.5 my-0 py-0">
          {/* Badge */}
          <div className="flex justify-center opacity-0 animate-fade-in-up leading-7 py-0 my-10">
            {hero.badges.map((badge, idx) => {
              const Icon = iconMap[badge.icon as keyof typeof iconMap]
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 border-white/20 rounded-full backdrop-blur-sm border-2"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className={`${styleConfig.fonts.hero.badge} font-medium text-white tracking-wide`}>
                    {badge.text}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="space-y-2 sm:space-y-3 opacity-0 animate-fade-in-up animation-delay-200">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] leading-tight">
              Prenez le virage
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 py-1">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
                de
              </span>
              <span className="inline-flex px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-br from-white/20 to-white/5 border-2 border-white/40 rounded-2xl backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  l'IA
                </span>
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
                et des
              </span>
              <span className="inline-flex px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-br from-white/20 to-white/5 border-2 border-white/40 rounded-2xl backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)]">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  nouvelles technologies
                </span>
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up animation-delay-400 py-6">
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed">
              {hero.description.text}
            </p>
          </div>

          <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up animation-delay-600 py-4">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/30">
              <span className="text-sm sm:text-base text-white/90 font-medium">
                Vision, pilotage, automatisation, accompagnement terrain.
              </span>
            </div>
          </div>

          {/* CTA section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 opacity-0 animate-fade-in-up animation-delay-800 justify-center mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className={`px-6 py-4 sm:px-10 sm:py-7 ${styleConfig.fonts.hero.ctaButton} font-semibold bg-white text-black hover:bg-white/90 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                {hero.cta.main}
              </Button>
            </Link>
            <Link href="/services" className="group">
              <span className="text-white/80 hover:text-white flex items-center gap-2 font-medium transition-colors duration-300">
                {hero.cta.secondary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20 sm:space-y-24 md:space-y-32 md:py-1.5">

          {/* BLOC POSITIONNEMENT COURT */}
          <section className="scroll-reveal-premium">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-14 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6 sm:mb-8 leading-snug">
                {positioning.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto">
                <span className="text-white/90 font-medium">Ils se trouvent dans les flux, les processus, le pilotage, les arbitrages et l'exécution.</span>
                <br className="hidden sm:block" />
                <span className="mt-2 inline-block">Encore faut-il savoir les voir, les structurer et les transformer en résultats.</span>
              </p>
            </div>
          </section>

          {/* BLOC 4 PILIERS */}
          <section>
            <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500">
                {pillars.title}
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                {pillars.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {pillars.items.map((pillar, index) => {
                const Icon = iconMap[pillar.icon as keyof typeof iconMap]
                return (
                  <div
                    key={index}
                    className={`group relative p-6 sm:p-8 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{pillar.title}</h3>
                        <p className="text-base sm:text-lg text-white/70 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* BLOC METHODE VISUELS ANIMÉS */}
          <section>
            <div className="text-center mb-16 space-y-8 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500">
                {method.title}
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="max-w-4xl mx-auto mb-10 sm:mb-12 px-4 scroll-reveal-premium transition-delay-200">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed text-center">
                {method.subtitle}
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8 mb-10 sm:mb-12">
              {method.items.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
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

                      {/* ANIMATIONS VISUELLES CONSERVÉES */}
                      <div className="flex-1 flex items-center justify-center px-2 py-3">
                        {/* Étape 3: Fluidifier les flux - Visuel Workflow */}
                        {index === 2 && (
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

                        {index === 3 && (
                          <div className="relative w-full max-w-sm h-48">
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

                        {index === 1 && (
                          <div className="relative w-full max-w-sm h-48">
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
                                <div className="absolute left-1 top-1 bottom-1 flex flex-col justify-between text-[7px] text-white/60 font-bold">
                                  <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">100</span>
                                  <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">50</span>
                                  <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">0</span>
                                </div>

                                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                                  <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                  <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                  <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />

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
                                    <g key={i}>
                                      <circle
                                        cx={x}
                                        cy={y}
                                        r="3"
                                        fill="white"
                                        filter="url(#glow)"
                                        className="animate-dot-appear-premium"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                      />
                                    </g>
                                  ))}

                                  <line
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="80"
                                    stroke="rgba(255,255,255,0.7)"
                                    strokeWidth="1.5"
                                    filter="url(#glow)"
                                    className="animate-scan-line-premium"
                                  />
                                </svg>

                                <div className="absolute bottom-0.5 left-0 right-0 flex justify-between text-[7px] text-white/60 font-bold px-3">
                                  {["Lun", "Mar", "Mer", "Jeu", "Ven"].map((day, i) => (
                                    <span key={i} className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                                      {day}
                                    </span>
                                  ))}
                                </div>
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
                        )}

                        {/* Étape 1: Observer et cartographier - Visuel Audit */}
                        {index === 0 && (
                          <div className="relative w-full max-w-sm h-48">
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
                                    94%
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
                                  <div
                                    className="absolute inset-3 border-t-0.5 border-white/40 rounded-full animate-scan-rotate-reverse-premium"
                                    style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
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
                                      <div
                                        className="absolute inset-0 bg-white/30 rounded-full blur-lg animate-pulse-glow-premium"
                                        style={{ animationDelay: "0.3s" }}
                                      />
                                      <div
                                        className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse-glow-premium"
                                        style={{ animationDelay: "0.6s" }}
                                      />
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
                                <div className="relative h-full bg-gradient-to-r from-white/70 via-white to-white/70 animate-progress-fill-loop-premium shadow-[0_0_10px_rgba(255,255,255,0.9)]">
                                  <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer-premium"
                                    style={{ animationDelay: "0.3s" }}
                                  />
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

          </section>

          {/* BLOC POURQUOI NOUS VENONS SUR SITE */}
          <section className="scroll-reveal-premium">
            <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-2 border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/40 rounded-full blur-lg animate-pulse-glow-premium" />
                  <MapPin className="relative w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {onsite.title}
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-4xl">
                {onsite.text}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {onsite.points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/20">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white/90 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-8 py-4 font-semibold bg-white text-black hover:bg-white/90 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  {onsite.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* BLOC KPI / CONSTATS */}
          <section>
            <div className="text-center mb-10 sm:mb-12 space-y-4 scroll-reveal-premium-fast">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-500">
                {kpis.title}
              </h2>
              <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-white/20 via-white/50 to-white/20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
              {kpis.items.map((kpi, index) => (
                <div
                  key={index}
                  className="group flex flex-col text-center scroll-reveal-scale p-4 sm:p-5"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-none tracking-tight block drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-500">
                      {kpi.stat}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal">{kpi.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOC FAQ */}
          <section className="scroll-reveal-premium">
            <div className="text-center mb-12 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                {faq.title}
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faq.items.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-black/33 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{item.question}</h3>
                  <p className="text-white/70 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="scroll-reveal-scale">
            <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border-2 border-white/40 hover:border-white/60 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] animate-reveal-border-glow-premium my-8">
              <div className="mb-8 space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500">
                  {finalCta.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  {finalCta.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 text-base sm:text-lg md:text-xl font-bold hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] bg-white text-black hover:bg-white/90"
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      {finalCta.primaryCta}
                      <ArrowRight className="w-4 h-4 sm:w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
                <Link href="/contact" className="no-underline">
                  <div className="px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold border-2 border-white/30 rounded-xl backdrop-blur-md hover:border-white/60 hover:bg-white/10 transition-all duration-500 hover:scale-105 text-white flex items-center gap-2 cursor-pointer">
                    <span>{finalCta.secondaryCta}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
