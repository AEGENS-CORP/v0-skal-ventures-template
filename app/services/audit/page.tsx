"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
  Eye,
  TrendingUp,
  FileText,
  ShieldCheck,
  Clock,
  Zap,
  BarChart3,
} from "lucide-react"
import { useEffect, useState } from "react"

const iconMap = {
  Target,
  Users,
  Eye,
  TrendingUp,
  FileText,
  ShieldCheck,
  Clock,
  Zap,
  BarChart3,
  CheckCircle2,
}

export default function AuditPage() {
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
    <div className="min-h-screen relative">
      {/* Animated background that follows mouse */}
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
              { label: "Audit, cartographie & diagnostic" },
            ]}
          />
        </div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-16 md:pt-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto py-12 md:py-16 text-center scroll-reveal-premium">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              Audit, cartographie & diagnostic des processus
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Voir clair avant d'automatiser. Nous analysons vos processus, vos outils et vos flux pour savoir
              exactement où vous perdez du temps, où vous prenez des risques et où l'automatisation a le plus d'impact.
            </p>
            <div className="inline-block px-6 py-3 bg-black/33 backdrop-blur-sm rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 mb-8">
              <p className="text-lg text-white font-semibold">
                Objectif : transformer votre fonctionnement actuel en plan d'action concret, chiffré et réaliste.
              </p>
            </div>
            <Link href="/contact">
              <Button
                size="lg"
                className="px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold bg-[#0071e3] text-white hover:bg-[#0071ed] rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Discuter de mon projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 py-12 md:py-20">
          {/* Ce que nous analysons */}
          <section>
            <div className="text-center mb-12 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Ce que nous analysons
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <p className="text-lg text-white/80 mt-6 max-w-4xl mx-auto">
                Nous partons de votre réalité : mails, Excel, ERP, CRM, dossiers partagés, échanges internes, habitudes
                des équipes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "Target",
                  title: "Processus & flux de travail",
                  items: [
                    "Qui fait quoi, dans quel ordre, avec quels allers-retours",
                    "Étapes répétitives, ressaisies, validations manuelles",
                    "Circulation des informations entre outils (mails, fichiers, logiciels…)",
                  ],
                },
                {
                  icon: "FileText",
                  title: "Cartographie détaillée des processus",
                  items: [
                    "Schémas clairs de vos processus (BPMN 2.0 ou équivalent, mais lisibles pour vos équipes)",
                    'Vue "de bout en bout" : de la demande client à la facturation, du devis à la production, du ticket au traitement',
                    'Identification des variantes (ce qui se passe "en vrai" vs ce qui est écrit dans les procédures)',
                  ],
                },
                {
                  icon: "Clock",
                  title: "Temps passé & charge opérationnelle",
                  items: [
                    "Estimation du temps consommé par étape, par rôle, par type de dossier",
                    "Identification des tâches à faible valeur (copier-coller, ressaisie, contrôles manuels basiques)",
                    "Évaluation du coût annuel des tâches répétitives",
                  ],
                },
                {
                  icon: "TrendingUp",
                  title: "Goulots d'étranglement & risques",
                  items: [
                    "Points de blocage (attentes de validation, dépendance à une seule personne, retards récurrents)",
                    "Sources d'erreurs (saisies manuelles, doublons, manque de contrôles)",
                    "Impacts possibles : retards, insatisfaction client, tension interne",
                  ],
                },
                {
                  icon: "BarChart3",
                  title: "Outils, données & sécurité",
                  items: [
                    "Comment vos outils sont réellement utilisés (et à quel point ils sont sous-exploités)",
                    "Flux de données : où passent les informations, où elles se perdent, où elles sont dupliquées",
                    "Points de vigilance sécurité (partages de fichiers, droits d'accès, circulation de données sensibles par mail, Excel, etc.)",
                  ],
                },
              ].map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap]
                return (
                  <div
                    key={index}
                    className={`p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-white/60 flex-shrink-0 mt-1" />
                          <span className="text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <div
              className="mt-8 p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 max-w-4xl mx-auto scroll-reveal-premium"
              style={{ transitionDelay: "500ms" }}
            >
              <p className="text-white/80 leading-relaxed">
                Nous utilisons des outils d'analyse de flux, des schémas de processus et des briques d'IA pour accélérer
                l'analyse (lecture de mails, logs, documents), mais le résultat est présenté de façon simple et
                actionnable.
              </p>
            </div>
          </section>

          {/* Comment se déroule l'audit */}
          <section>
            <div className="text-center mb-12 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Comment se déroule l'audit
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <p className="text-lg text-white/80 mt-6 max-w-4xl mx-auto">
                Nous restons sur une démarche courte, orientée décision, pas un projet théorique de 6 mois.
              </p>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {[
                {
                  number: "1",
                  title: "Immersion terrain (1/2 journée à 2 jours)",
                  items: [
                    "Entretiens ciblés avec les équipes opérationnelles et les responsables",
                    "Observation des flux réels : mails, dossiers, outils, échanges informels",
                    "Collecte de quelques exemples concrets (dossiers types, échanges clients, tickets, etc.)",
                  ],
                },
                {
                  number: "2",
                  title: "Cartographie & analyse (5 à 10 jours)",
                  items: [
                    "Formalisation des processus clés (BPMN 2.0 ou équivalent)",
                    "Mesure des temps, volumes, fréquences, points de reprise manuelle",
                    "Analyse des goulots d'étranglement, des risques et des redondances",
                    "Utilisation de l'IA pour analyser rapidement des volumes de mails, tickets, comptes-rendus, et faire ressortir les patterns récurrents",
                  ],
                },
                {
                  number: "3",
                  title: "Diagnostic & priorisation",
                  items: [
                    "Sélection de 3 à 6 processus ou sous-processus à fort impact (temps, coût, risques, irritants clients)",
                    "Identification des gains potentiels : heures économisées, erreurs évitées, capacité supplémentaire",
                    "Prise en compte des contraintes : outils existants, sécurité, organisation, budget, délais",
                  ],
                },
                {
                  number: "4",
                  title: "Plan d'action d'automatisation",
                  items: [
                    "Proposition d'automatisations concrètes : quoi automatiser, jusqu'où, avec quels outils",
                    "Distinction claire : automatisation classique (règles, connecteurs, workflows) / IA (LLM, RAG, assistants métiers)",
                    "Estimation de ROI et phasage : ce qu'on peut faire rapidement vs ce qui relève d'un chantier plus structurant",
                  ],
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start gap-6 p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${idx % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-white/60 flex-shrink-0 mt-1" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Livrables concrets */}
          <section>
            <div className="text-center mb-12 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Livrables concrets
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <p className="text-lg text-white/80 mt-6 max-w-4xl mx-auto">
                À la fin de l'audit, vous ne recevez pas un rapport théorique, mais des éléments utilisables
                immédiatement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Cartes de processus lisibles",
                  desc: "Vue claire de vos processus clés, étape par étape, avec les rôles et les outils associés.",
                },
                {
                  title: "Liste priorisée des cas d'automatisation",
                  desc: "Pour chaque cas : description, complexité, gains estimés, prérequis.",
                },
                {
                  title: "Vue des risques & points sensibles",
                  desc: "Goulots d'étranglement, dépendances, risques sécurité / conformité.",
                },
                {
                  title: "Plan d'action structuré",
                  desc: "Séquencement des chantiers (court / moyen terme), recommandations techniques et organisationnelles.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] scroll-reveal-scale`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-8 p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 max-w-4xl mx-auto scroll-reveal-premium"
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-white/80 leading-relaxed text-center">
                Ces livrables servent de base directe pour lancer les projets d'automatisation, de RAG/assistants
                métiers ou de tableaux de bord.
              </p>
            </div>
          </section>

          {/* Pourquoi faire un audit avant d'automatiser */}
          <section className="scroll-reveal-premium">
            <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-4 border-white/20 border-t-white/60 border-l-white/50 max-w-5xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Pourquoi faire un audit avant d'automatiser
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto mb-8 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />

              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                L'objectif n'est pas de "documenter pour documenter", mais d'éviter deux erreurs fréquentes :
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                      1
                    </div>
                    <p className="text-white font-semibold">automatiser un processus mal conçu,</p>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                      2
                    </div>
                    <p className="text-white font-semibold">
                      lancer des outils d'IA sans savoir où ils apportent vraiment de la valeur.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-white/80 mb-6 leading-relaxed">Un audit bien fait permet de :</p>

              <div className="space-y-4">
                {[
                  "concentrer l'investissement sur les bons processus (ceux qui consomment le plus de temps ou créent le plus de risques)",
                  "aligner les équipes sur une vision commune des flux et des priorités",
                  "sécuriser les choix techniques (outils, connecteurs, données, sécurité)",
                  "préparer un ROI mesurable, suivi dans le temps (temps gagné, erreurs réduites, capacité augmentée)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                    <p className="text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Adapté aux TPE/PME */}
          <section>
            <div className="text-center mb-12 scroll-reveal-premium">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Adapté aux TPE/PME, quel que soit le métier
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-white/80 text-center leading-relaxed scroll-reveal-premium">
                Notre démarche est pensée pour des structures qui n'ont pas le temps pour la théorie et qui veulent des
                résultats concrets :
              </p>

              <div className="grid sm:grid-cols-2 gap-4 scroll-reveal-premium" style={{ transitionDelay: "200ms" }}>
                {[
                  "services clients, ADV, SAV",
                  "équipes commerciales et administratives",
                  "back-office, finance, gestion",
                  "opérations, logistique, production, services terrain",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-black/33 rounded-lg border border-white/20">
                    <CheckCircle2 className="w-5 h-5 text-white/60 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <p
                className="text-lg text-white/80 text-center leading-relaxed pt-4 scroll-reveal-premium"
                style={{ transitionDelay: "400ms" }}
              >
                Nous partons de votre fonctionnement actuel, nous l'éclaircissons, et nous en faisons un plan
                d'automatisation réaliste, compatible avec vos outils et vos contraintes.
              </p>
            </div>
          </section>

          {/* CTA Final */}
          <section className="scroll-reveal-scale">
            <Link href="/contact" className="block group no-underline">
              <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] animate-reveal-border-glow-premium max-w-5xl mx-auto cursor-pointer">
                <div className="mb-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-6">
                    Recevez un diagnostic de vos processus
                  </h2>
                  <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                    En moins de 48h après l'immersion, vous obtenez une vision claire de :
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    "où vous perdez du temps,",
                    "ce qui peut être automatisé,",
                    "et dans quel ordre le faire pour maximiser le ROI.",
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/20">
                      <p className="text-white/90">{item}</p>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="group-hover:scale-105 transition-all duration-300 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-semibold bg-white text-black hover:bg-white/90"
                >
                  Demandez votre diagnostic "Audit, cartographie & diagnostic des processus"
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}
