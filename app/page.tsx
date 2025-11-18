"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneLink } from "@/components/phone-link"
import { CheckCircle2, ArrowRight, TrendingUp, Zap, Clock, Target, Users, BarChart3, ShieldCheck, Sparkles, Eye, Brain, LineChart, ChevronDown } from 'lucide-react'
import { useEffect } from "react"
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
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const { hero, problems, services, method, kpis, about, finalCta } = homepageConfig

  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 gap-0 sm:py-px">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto text-center lg:space-y-1.5 my-0 py-0">
          
          {/* Badge */}
          <div className="flex justify-center opacity-0 animate-fade-in-up leading-7 py-0 my-10">
            {hero.badges.map((badge, idx) => {
              const Icon = iconMap[badge.icon as keyof typeof iconMap]
              return (
                <div key={idx} className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 border-white/20 rounded-full backdrop-blur-sm border-2">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className={`${styleConfig.fonts.hero.badge} font-medium text-white tracking-wide`}>
                    {badge.text}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="space-y-3 sm:space-y-4 opacity-0 animate-fade-in-up animation-delay-200">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 py-0">
              <h1 className={`${styleConfig.fonts.hero.titleLine1} font-semibold text-white tracking-tight`}>
                {hero.title.line1.split(' ')[0]}
              </h1>
              <span className="inline-flex px-3 py-1.5 sm:px-5 sm:py-2.5 bg-white/10 border-2 border-white/30 rounded-2xl backdrop-blur-sm">
                <span className={`${styleConfig.fonts.hero.titleLine1} font-bold text-white`}>
                  {hero.title.line1.split(' ')[1]}
                </span>
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 py-0 my-5">
              <span className="inline-flex px-3 py-1.5 sm:px-5 sm:py-2.5 bg-white/10 border-2 border-white/30 rounded-2xl backdrop-blur-sm">
                <span className={`${styleConfig.fonts.hero.titleLine2} font-bold text-white`}>
                  {hero.title.line2}
                </span>
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto opacity-0 animate-fade-in-up animation-delay-300 py-3.5">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-blue-400/40 hover:border-blue-400/60 transition-all duration-300 py-2 my-2">
              <Target className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-300 flex-shrink-0" />
              <p className={`${styleConfig.fonts.hero.solutionsTitle} font-semibold text-white font-mono tracking-wide`}>
                Solutions sur mesure pour TPE/PME
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up animation-delay-400">
            <div className="flex flex-wrap justify-center items-center leading-7 gap-1 px-0 mx-0 py-[-0px] py-[-10px]">
              <span className={`${styleConfig.fonts.hero.roiText} font-medium text-white px-px`}>Priorité</span>
              <span className="inline-flex bg-white/10 backdrop-blur-sm text-secondary-foreground border-foreground border px-1 py-px rounded-sm sm:px-1 sm:py-0.5">
                <span className={`${styleConfig.fonts.hero.roiText} font-semibold text-white`}>ROI</span>
              </span>
              <span className={`${styleConfig.fonts.hero.roiText} font-medium text-white px-px`}>avec</span>
              <span className="inline-flex">
                <span className={`${styleConfig.fonts.hero.roiText} font-semibold text-white`}>résultats rapides</span>
              </span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto opacity-0 animate-fade-in-up animation-delay-800 py-px">
            <div className="inline-flex items-center gap-2 sm:gap-3 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-emerald-400/40 hover:border-emerald-400/60 transition-all duration-300 my-12 py-1 px-3 text-center md:py-1 md:px-1.5">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-emerald-300 flex-shrink-0" />
              <p className={`${styleConfig.fonts.hero.diagnosticText} text-white/90 font-mono tracking-wide leading-relaxed sm:text-center text-center`}>
                Recevez un <span className="font-semibold text-white">diagnostic opérationnel</span> + <span className="font-semibold text-white">plan d'action</span> et <span className="font-semibold text-white">devis</span> sous <span className="font-bold text-white">48h</span>
              </p>
            </div>
          </div>

          {/* CTA section */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 opacity-0 animate-fade-in-up animation-delay-1000">
            <Link href="/contact">
              <Button
                size="lg"
                className={`px-6 py-4 sm:px-10 sm:py-7 ${styleConfig.fonts.hero.ctaButton} font-semibold bg-[#0071e3] text-white hover:bg-[#0077ed] rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                {hero.cta.main}
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* End of hero section redesign */}

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 space-y-20 sm:space-y-24 md:space-y-32">
          
          <section className="scroll-reveal">
            <div className="text-center mb-10 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6">
              <h2 className={`${styleConfig.fonts.section.title} font-bold text-white`}>{problems.title}</h2>
              <div className="w-16 sm:w-20 h-1 bg-white/50 mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {problems.intro.map((text, idx) => (
                <p key={idx} className={`${styleConfig.fonts.section.body} text-white/80 leading-relaxed`}>
                  {text}
                </p>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {problems.items.map((problem, index) => (
                <div
                  key={index}
                  className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 space-y-1 sm:space-y-2">
                      <h3 className={`${styleConfig.fonts.card.title} font-bold text-white`}>{problem.title}</h3>
                      {problem.subtitle && (
                        <p className={`${styleConfig.fonts.card.subtitle} text-white/70 font-medium`}>
                          {problem.subtitle}
                        </p>
                      )}
                      <p className={`${styleConfig.fonts.card.body} text-white/60 leading-relaxed`}>{problem.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12 max-w-3xl mx-auto p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
              <p className={`${styleConfig.fonts.section.body} text-white/80 leading-relaxed`}>
                {problems.conclusion.split("automatisations")[0]}
                <Link href="/services/automatisation" className="text-white font-semibold">
                  automatisations
                </Link>
                {problems.conclusion.split("automatisations")[1]}
              </p>
            </div>
          </section>

          <section className="scroll-reveal">
            <div className="text-center mb-16 space-y-8">
              <h2 className={`${styleConfig.fonts.section.title} font-bold text-white`}>{services.title}</h2>
              <div className="w-20 h-1.5 bg-white/50 mx-auto" />
            </div>

            <div className="max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
              <p className={`${styleConfig.fonts.section.subtitle} font-semibold text-white leading-relaxed text-center`}>
                {services.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
              {services.items.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <Link key={index} href={service.link} className="block group h-full">
                    <div
                      className="relative h-full p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-500 text-center overflow-hidden flex flex-col items-center justify-start hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
                      </div>
                      <div className="space-y-2">
                        <h3 className={`${styleConfig.fonts.card.title} font-bold leading-tight text-white group-hover:text-white transition-colors duration-300`}>
                          {service.title}
                        </h3>
                        <p className={`${styleConfig.fonts.card.subtitle} text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="text-center space-y-6">
              <Link href="/services" className="inline-block">
                <div className="group px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/60 transition-all duration-500 hover:scale-105">
                  <p className={`${styleConfig.fonts.card.body} font-semibold flex items-center gap-2 text-white`}>
                    {services.cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </p>
                </div>
              </Link>

              <p className={`${styleConfig.fonts.card.body} text-white font-semibold`}>{services.footnote}</p>
            </div>
          </section>

          <section className="scroll-reveal">
            <div className="text-center mb-16 space-y-8">
              <h2 className={`${styleConfig.fonts.section.title} font-bold text-white`}>{method.title}</h2>
              <div className="w-20 h-1 bg-white/50 mx-auto" />
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {method.steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative flex items-start gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:translate-x-2 hover:shadow-lg"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className={`${styleConfig.fonts.card.title} font-bold text-white`}>{step.title}</h3>
                    <p className={`${styleConfig.fonts.card.body} text-white/70 leading-relaxed`}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="scroll-reveal">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 border border-white/20 shadow-2xl">
              <div className="text-center mb-10 sm:mb-12 md:mb-14 space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{kpis.title}</h2>
                <div className="w-24 sm:w-32 h-1 bg-white/40 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
                {kpis.items.map((kpi, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col gap-4 sm:gap-5"
                  >
                    {/* Stat Block - Large number with subtle background */}
                    <div className="p-6 sm:p-7 md:p-8 backdrop-blur-md rounded-2xl border-white/30 hover:border-white/50 transition-all duration-500 text-center md:py-3.5 md:px-2.5 border-4 opacity-100 bg-sidebar">
                      <div className="text-5xl font-black text-white leading-none mx-0 sm:text-5xl">
                        {kpi.stat}
                      </div>
                    </div>
                    
                    {/* Text Block - Label and description in separate container */}
                    <div className="p-5 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 text-center space-y-2 sm:space-y-3">
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white leading-tight">
                        {kpi.label}
                      </h3>
                      
                      <div className="w-12 h-px bg-white/20 mx-auto"></div>
                      
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {kpi.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Link href="/etudes-de-cas" className="inline-block group">
                  <div className="px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-500 hover:scale-105">
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-white flex items-center gap-2">
                      {kpis.cta}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="scroll-reveal">
            <div className="text-center mb-16 space-y-8">
              <h2 className={`${styleConfig.fonts.section.title} font-bold text-white`}>{about.title}</h2>
              <p className={`${styleConfig.fonts.section.body} font-light text-white/70`}>{about.subtitle}</p>
              <div className="w-20 h-1 bg-white/50 mx-auto" />
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4 mb-12">
              {about.intro.map((text, idx) => (
                <p key={idx} className={`${styleConfig.fonts.section.body} text-white/80 text-center leading-relaxed`}>
                  {text}
                </p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {about.reasons.map((reason, index) => {
                const Icon = iconMap[reason.icon as keyof typeof iconMap]
                return (
                  <div
                    key={index}
                    className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 text-center overflow-hidden"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className={`${styleConfig.fonts.card.title} font-bold leading-tight text-white`}>
                        {reason.title}
                      </h3>
                      <p className={`${styleConfig.fonts.card.subtitle} text-white/70 font-medium`}>
                        {reason.subtitle}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <Link href="/a-propos" className="inline-block">
                <div className="group px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/60 transition-all duration-500 hover:scale-105">
                  <p className={`${styleConfig.fonts.card.body} font-semibold flex items-center gap-2 text-white`}>
                    {about.cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <section className="scroll-reveal">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border-2 border-white/30 hover:border-white/50 transition-all duration-500">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white">{finalCta.title}</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                  {finalCta.subtitle}
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-white font-bold">{finalCta.timeframe}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-8 text-base sm:text-lg md:text-xl lg:text-2xl font-black hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] bg-white text-black hover:bg-white/90"
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      {finalCta.primaryCta}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
                <PhoneLink
                  phoneNumber={finalCta.phone.number}
                  displayNumber={finalCta.phone.display}
                  className="px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-8 text-base sm:text-lg md:text-xl lg:text-2xl font-black border-2 border-white/30 rounded-lg backdrop-blur-md hover:border-white/60 hover:bg-white/10 transition-all duration-500 hover:scale-105 text-white"
                  showIcon
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
