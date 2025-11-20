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
  ShieldCheck,
  Sparkles,
  Eye,
  Brain,
  Search,
  Globe,
  PenTool,
  Video,
  BarChart3,
  Megaphone,
} from "lucide-react"
import { useEffect, useState } from "react"

const iconMap = {
  TrendingUp,
  Zap,
  Eye,
  Brain,
  Users,
  Clock,
  Target,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Search,
  Globe,
  PenTool,
  Video,
  BarChart3,
  Megaphone,
}

export default function CroissanceCommercialePage() {
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
      ".scroll-reveal, .scroll-reveal-premium, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-rotate",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Animated background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20 sm:space-y-24 md:space-y-32">
          {/* Hero Section */}
          <section className="relative pt-20 pb-12 text-center scroll-reveal-premium">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Croissance commerciale & présence digitale
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto mb-8 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed mb-8">
              Des outils IA sur mesure + une vraie expertise marketing.
            </p>
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Nous aidons vos équipes à vendre plus, plus vite, avec une présence en ligne cohérente et efficace.
            </p>

            <Link href="/contact" className="inline-block mt-8">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-white/90 rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Discuter de mon projet
              </Button>
            </Link>
          </section>

          {/* What we combine */}
          <section className="scroll-reveal-premium">
            <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Ce que nous combinons dans cette offre :
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  {
                    icon: Brain,
                    text: "Copilotes commerciaux et assistants IA (LLM, recherche web, RAG sur vos données)",
                  },
                  { icon: Search, text: "SEO / SEA et optimisation de votre site pour la conversion" },
                  { icon: Globe, text: "Vente en ligne et parcours e-commerce" },
                  { icon: PenTool, text: "Communication, design, identité de marque" },
                  { icon: Megaphone, text: "Réseaux sociaux, contenus, vidéo et audio" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-4 bg-white/5 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-500 ${i % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <item.icon className="w-8 h-8 text-white mb-3" />
                    <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-white/80 text-center leading-relaxed">
                Tout est construit sur mesure, pour votre marché, vos équipes et vos outils.
              </p>
            </div>
          </section>

          {/* Outils commerciaux IA */}
          <section>
            <div className="text-center mb-12 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Outils commerciaux IA sur mesure
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto mb-6 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Nous créons des assistants qui épaulent directement vos commerciaux et votre direction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Copilote de prospection",
                  desc: "Un assistant qui, à partir d'un nom d'entreprise ou d'un contact, va chercher : activité, taille, CA estimé (si disponible), informations clés, actualités récentes, points d'entrée possibles. Résultat : une fiche synthèse prête avant chaque appel ou rendez-vous.",
                  icon: Search,
                },
                {
                  title: "Préparation de rendez-vous et de relances",
                  desc: "Récupération de l'historique CRM, des mails, des notes internes, des documents envoyés. L'assistant génère : résumé de la relation, points à aborder, objections possibles, propositions de relance cohérentes.",
                  icon: Brain,
                },
                {
                  title: "Qualification et scoring des leads",
                  desc: 'Analyse des formulaires, mails entrants, comportements sur le site. Priorisation automatique des contacts "à traiter en priorité", avec explication des critères.',
                  icon: Target,
                },
                {
                  title: "Assistants de rédaction orientés vente",
                  desc: "Aide à rédiger des mails de prospection, de relance, des messages LinkedIn, des réponses à appel d'offres, en respectant votre ton, vos offres et vos contraintes.",
                  icon: PenTool,
                },
              ].map((tool, i) => (
                <div
                  key={i}
                  className={`p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] ${i % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO, SEA et vente en ligne */}
          <section>
            <div className="text-center mb-12 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                SEO, SEA et vente en ligne
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto mb-6 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Nous faisons en sorte que vos prospects vous trouvent, comprennent votre offre et passent à l'action.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "SEO (référencement naturel)",
                  desc: "Structure du site, pages clés, maillage interne, optimisation des contenus pour les requêtes vraiment utilisées par vos clients. Objectif : amener un trafic qualifié, pas juste gonfler les chiffres.",
                  icon: Search,
                },
                {
                  title: "SEA (Google Ads, etc.)",
                  desc: "Campagnes ciblées, structuration des annonces, optimisation des mots-clés, suivi des conversions. Objectif : un coût d'acquisition maîtrisé et mesurable.",
                  icon: Megaphone,
                },
                {
                  title: "Site web et parcours de vente",
                  desc: "Pages d'atterrissage, formulaires, tunnels de vente, modules de prise de rendez-vous. On simplifie le chemin : visite → intérêt → contact ou achat.",
                  icon: Globe,
                },
                {
                  title: "Vente en ligne",
                  desc: "Mise en place ou optimisation de parcours e-commerce, commandes, paiements, upsell, récupération de paniers abandonnés.",
                  icon: ShieldCheck,
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className={`p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] ${i % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Communication, image de marque */}
          <section>
            <div className="text-center mb-12 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Communication, image de marque et contenus
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto mb-6 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Nous alignons votre image avec ce que vous vendez réellement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Identité de marque",
                  desc: "Logo, univers visuel, chartes simples à utiliser au quotidien, lignes directrices pour vos messages.",
                  icon: Sparkles,
                },
                {
                  title: "Design et supports commerciaux",
                  desc: "Présentations, fiches produits, plaquettes, argumentaires, templates d'e-mails, landing pages.",
                  icon: PenTool,
                },
                {
                  title: "Contenus & réseaux sociaux",
                  desc: "Lignes éditoriales, types de contenus adaptés à votre secteur, organisation des publications. Nous pouvons utiliser l'IA pour accélérer la production tout en gardant la validation humaine.",
                  icon: Megaphone,
                },
                {
                  title: "Vidéo et audio",
                  desc: "Scripts, formats courts, capsules pour réseaux sociaux, éléments pour vos pages de vente ou campagnes.",
                  icon: Video,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] ${i % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ce que cela change */}
          <section className="scroll-reveal-scale">
            <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Ce que cela change pour vos ventes
              </h2>
              <p className="text-xl text-white/80 text-center mb-8 leading-relaxed">
                L'objectif : plus de temps sur la vente, moins sur la préparation et le bricolage d'outils.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Moins de temps perdu en recherche et préparation",
                    desc: "Les commerciaux disposent de fiches synthèse et d'outils prêts à l'emploi au lieu de passer des heures à chercher des infos.",
                  },
                  {
                    title: "Messages plus cohérents et plus professionnels",
                    desc: "Même niveau de qualité sur les mails, les offres, les présentations, quel que soit le commercial.",
                  },
                  {
                    title: "Meilleure visibilité sur ce qui fonctionne",
                    desc: "Campagnes, canaux, messages, types d'offres : ce qui marche est identifié, ce qui ne marche pas est ajusté ou stoppé.",
                  },
                  {
                    title: "Une présence digitale qui soutient réellement la vente",
                    desc: "Site, contenus, campagnes et outils IA marchent ensemble, au service du pipeline commercial.",
                  },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/5 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-500"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-white/70 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Notre façon de travailler */}
          <section>
            <div className="text-center mb-12 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Notre façon de travailler
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Analyse de votre modèle de vente",
                  desc: "Compréhension de vos offres, de votre cycle de vente, des canaux utilisés et des profils clients cibles.",
                },
                {
                  step: "2",
                  title: "Diagnostic des points à plus fort impact",
                  desc: "Où vos équipes perdent le plus de temps ? Où les prospects décrochent ? Quelles infos manquent aux commerciaux ?",
                },
                {
                  step: "3",
                  title: "Conception des outils et des parcours",
                  desc: "Copilotes commerciaux, optimisations SEO/SEA, ajustements du site, supports et contenus prioritaires.",
                },
                {
                  step: "4",
                  title: "Mise en place, tests et ajustements",
                  desc: "Déploiement progressif, retours des équipes, corrections jusqu'à ce que les outils soient vraiment utilisés au quotidien.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`group flex items-start gap-6 p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] ${i % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Final */}
          <Link href="/contact" className="block group no-underline">
            <section className="scroll-reveal-scale">
              <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] cursor-pointer group-hover:scale-[1.02]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-6">
                  Vous voulez structurer et accélérer votre développement commercial ?
                </h2>
                <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
                  Nous pouvons construire avec vous un socle complet : outils IA, visibilité en ligne et supports de
                  vente, adapté à votre entreprise.
                </p>
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold bg-white text-black hover:bg-white/90 rounded-2xl transition-all duration-300 group-hover:scale-105"
                >
                  Demandez votre diagnostic
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </section>
          </Link>
        </div>
      </main>
    </div>
  )
}
