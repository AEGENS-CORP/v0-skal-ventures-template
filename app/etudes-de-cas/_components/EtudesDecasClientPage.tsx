"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  Target,
  TrendingUp,
  Shield,
  Lock,
  FileCheck,
  Server,
  Users,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Database,
  Key,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { useEffect, useState } from "react"

const iconMap = {
  Shield,
  Lock,
  FileCheck,
  Server,
  Users,
  Eye,
  CheckCircle2,
  Target,
  ShieldCheck,
  AlertTriangle,
  Database,
  Key,
  ArrowRight,
  TrendingUp,
}

export default function EtudesDecasClientPage() {
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

  const priorites = [
    {
      icon: "Server",
      title: "Automatisations et interconnexions d'outils",
      description: "Flux entre ERP, CRM, WMS, MES, outils métiers, fichiers partagés, e-mails.",
      action: "Limiter les accès, sécuriser les API, tracer les opérations.",
    },
    {
      icon: "Eye",
      title: "Assistants IA et RAG (Recherche augmentée par les données)",
      description: "Assistants métier connectés à vos documents internes, à votre base clients, à vos procédures.",
      action:
        "Contrôler quelles données sont indexées, qui peut interroger quoi, et comment les réponses sont tracées.",
    },
    {
      icon: "Database",
      title: "Données clients, commerciales et financières",
      description: "Devis, commandes, factures, contrats, historiques, marges, conditions négociées.",
      action: "Chiffrement, contrôle d'accès, gestion des durées de conservation.",
    },
    {
      icon: "FileCheck",
      title: "Documents métiers et dossiers sensibles",
      description: "Dossiers clients, dossiers techniques, pièces justificatives, documents RH.",
      action: "Cloisonnement, gestion fine des droits, archivage maîtrisé.",
    },
    {
      icon: "Lock",
      title: "Infrastructure et accès aux solutions",
      description: "Accès utilisateurs, comptes techniques, environnements de test et de production, sauvegardes.",
      action: "Principe du moindre privilège, séparation des environnements, politique de sauvegarde robuste.",
    },
  ]

  const approche = [
    {
      number: "1",
      title: "Cartographie des données et des flux",
      items: [
        "Où sont vos données critiques ?",
        "Qui y accède aujourd'hui ?",
        "Quels outils, quels fichiers, quels e-mails les manipulent ?",
      ],
      description:
        "Nous cartographions vos processus, vos flux et vos applications (BPMN 2.0, schémas de flux) pour avoir une vision claire des zones sensibles et des goulots d'étranglement en sécurité.",
    },
    {
      number: "2",
      title: "Analyse des risques et priorisation",
      items: [
        "Quels sont les scénarios de risques réalistes pour votre activité ?",
        "Quelles conséquences en cas d'incident (opérationnel, financier, légal, image) ?",
      ],
      description:
        "Nous utilisons une approche pragmatique de gestion des risques (logique ISO 27005 / méthodes type EBIOS) pour prioriser ce qui doit être traité en premier, sans surdimensionner les mesures.",
    },
    {
      number: "3",
      title: "Architecture sécurisée des solutions IA et automatisations",
      items: [
        "Choix des fournisseurs et hébergeurs (priorité aux solutions hébergées dans l'UE ou conformes RGPD)",
        "Chiffrement des données sensibles (en transit et au repos)",
        "Segmentation des environnements (test / pré-production / production)",
        "Gestion des accès et des rôles (qui peut faire quoi, sur quelles données)",
      ],
      description:
        "Nous concevons les workflows, les assistants IA et les connecteurs avec ces contraintes en tête dès le départ.",
    },
    {
      number: "4",
      title: "Gouvernance, conformité et documentation",
      items: [
        "Prise en compte du RGPD et des recommandations CNIL",
        "Contribution au registre de traitement, aux analyses d'impact (si nécessaires)",
        "Clauses contractuelles avec les prestataires (DPA, engagements de sous-traitants)",
        "Procédures simples en cas d'incident ou de demande d'un client (droit d'accès, rectification, suppression…)",
      ],
    },
    {
      number: "5",
      title: "Contrôles, tests et amélioration continue",
      items: [
        "Tests de bon fonctionnement et de cohérence des droits d'accès",
        "Revue régulière des journaux (logs) et des accès sensibles",
        "Ajustements en fonction des retours terrain, des évolutions réglementaires ou outils",
      ],
    },
  ]

  const iaRagSecurity = [
    {
      icon: "Database",
      title: "Contrôle des données indexées",
      description: "Seules les données pertinentes et autorisées sont intégrées dans les bases de connaissances.",
    },
    {
      icon: "Lock",
      title: "Index RAG cloisonné",
      description: "Les données utilisées par vos assistants ne servent pas à entraîner des modèles publics.",
    },
    {
      icon: "Users",
      title: "Droits d'accès appliqués à l'IA",
      description:
        "L'assistant ne donne pas à un utilisateur plus de visibilité que ce qu'il a dans vos systèmes sources.",
    },
    {
      icon: "Eye",
      title: "Traçabilité des réponses",
      description:
        "Réponses sourcées, journalisation des requêtes, capacité à expliquer « qui a vu quoi, quand, et sur quelle base ».",
    },
    {
      icon: "ShieldCheck",
      title: "Usage maîtrisé des LLM externes",
      description:
        "Paramétrage des outils pour éviter l'envoi non contrôlé de données sensibles vers des services hors UE ou non conformes à vos exigences.",
    },
  ]

  const benefices = [
    {
      icon: "CheckCircle2",
      title: "Des projets IA et automatisation acceptables",
      description: "Vous pouvez expliquer comment vos données sont stockées, protégées, tracées et qui y accède.",
    },
    {
      icon: "AlertTriangle",
      title: "Moins de risques opérationnels, juridiques et réputationnels",
      description: "Moins de bricolage, moins de zones grises, moins d'exceptions non maîtrisées.",
    },
    {
      icon: "FileCheck",
      title: "Des réponses claires aux questionnaires sécurité",
      description: "Plus simple de répondre aux appels d'offres, aux audits et aux demandes de vos grands comptes.",
    },
    {
      icon: "ShieldCheck", // Updated from TrendingUp
      title: "Une sécurité proportionnée à votre taille",
      description: "Des mesures raisonnables, adaptées à une TPE/PME, sans usine à gaz et sans bloquer le business.",
    },
  ]

  return (
    <div className="relative">
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Sécurité & conformité" }]} />
          </div>
        </div>

        <section className="pt-32 md:pt-36 pb-12 px-4 sm:px-6 md:pb-16 relative min-h-[60vh] flex items-center justify-center lg:pt-0">
          <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border-2 border-white/20 rounded-full backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
                <span className="text-base font-medium text-white tracking-wide">Sécurité & conformité</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] leading-tight">
              Sécurité & conformité
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Sécuriser vos projets IA et automatisation, sans complexifier votre quotidien.
            </p>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Notre priorité : protéger vos données, réduire vos risques et rester aligné avec les exigences
              réglementaires (RGPD, CNIL, ISO 27001…), tout en gardant des solutions simples à exploiter pour vos
              équipes.
            </p>
          </div>
        </section>

        <main className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-20 sm:space-y-24 md:space-y-32">
            {/* Pourquoi la sécurité */}
            <section className="scroll-reveal-premium">
              <div className="text-center mb-12 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Pourquoi la sécurité est au centre de nos projets
                </h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="max-w-4xl mx-auto space-y-6 mb-12">
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Chaque automatisation, chaque assistant IA, chaque connecteur entre outils manipule des données
                  sensibles :
                </p>

                <ul className="space-y-3 text-base sm:text-lg text-white/80">
                  {[
                    "Données clients et fournisseurs",
                    "Données financières et commerciales",
                    "Documents internes, contrats, échanges mail",
                    "Informations de production, logistique, RH",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed pt-6">
                  Si la sécurité n'est pas pensée dès le départ, vous exposez votre entreprise à :
                </p>

                <ul className="space-y-3 text-base sm:text-lg text-white/80">
                  {[
                    "Fuites de données",
                    "Perte ou corruption d'informations",
                    "Non-conformité RGPD",
                    "Perte de confiance de vos clients et partenaires",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg sm:text-xl font-semibold text-white pt-6">
                  Nous intégrons la sécurité et la conformité dans la conception même des solutions, pas après coup.
                </p>
              </div>
            </section>

            {/* Ce que nous sécurisons */}
            <section>
              <div className="text-center mb-12 space-y-6 scroll-reveal-premium">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Ce que nous sécurisons en priorité
                </h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <p className="text-base sm:text-lg text-white/80 text-center max-w-4xl mx-auto mb-12">
                Nous intervenons sur l'ensemble de la chaîne, là où vos données circulent et se transforment :
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                {priorites.map((priorite, index) => {
                  const Icon = iconMap[priorite.icon as keyof typeof iconMap]
                  return (
                    <div
                      key={index}
                      className={`group relative p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{priorite.title}</h3>
                          <p className="text-base text-white/70 leading-relaxed mb-3">{priorite.description}</p>
                          <p className="text-sm text-white/60 leading-relaxed">→ {priorite.action}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Notre approche */}
            <section>
              <div className="text-center mb-12 space-y-6 scroll-reveal-premium">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Notre approche sécurité & conformité
                </h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <p className="text-base sm:text-lg text-white/80 text-center max-w-4xl mx-auto mb-12">
                Nous appliquons une démarche structurée, inspirée des bonnes pratiques ISO 27001 / 27002 / 27005 et des
                recommandations de l'ANSSI, mais adaptée au niveau et aux moyens d'une TPE/PME.
              </p>

              <div className="space-y-6 max-w-5xl mx-auto">
                {approche.map((etape, index) => (
                  <div
                    key={index}
                    className={`group relative flex items-start gap-6 p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 text-3xl font-bold">
                      {etape.number}
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-bold text-white">{etape.title}</h3>
                      {etape.items && (
                        <ul className="space-y-2">
                          {etape.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-white/70">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1" />
                              <span className="text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {etape.description && (
                        <p className="text-base text-white/80 leading-relaxed">{etape.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sécurité IA & RAG */}
            <section>
              <div className="text-center mb-12 space-y-6 scroll-reveal-premium">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Sécurité spécifique aux projets IA et RAG
                </h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <p className="text-base sm:text-lg text-white/80 text-center max-w-4xl mx-auto mb-12">
                Les assistants IA et les systèmes RAG peuvent apporter un vrai gain, mais seulement si les données
                restent maîtrisées. Nous veillons à :
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {iaRagSecurity.map((item, index) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap]
                  return (
                    <div
                      key={index}
                      className="group relative p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 text-center overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] scroll-reveal-scale"
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-white mb-3">{item.title}</h3>
                      <p className="text-base text-white/70">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Cadre réglementaire */}
            <section className="scroll-reveal-premium">
              <div className="text-center mb-12 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Cadre réglementaire et référentiels
                </h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Nous alignons nos pratiques sur les principaux cadres et recommandations du marché :
                </p>

                <ul className="space-y-3 text-base sm:text-lg text-white/80">
                  {[
                    "RGPD et lignes directrices de la CNIL",
                    "Recommandations de l'ANSSI pour la protection des systèmes d'information",
                    "Bonnes pratiques de sécurité de l'information (ISO 27001 / 27002)",
                    "Gestion des risques liée à la sécurité de l'information (ISO 27005)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed pt-6">
                  Nous ne jouons pas le rôle d'organisme certificateur, mais nous concevons vos solutions pour qu'elles
                  soient cohérentes avec ces référentiels et facilitent vos audits ou vos futures démarches de
                  certification.
                </p>
              </div>
            </section>

            {/* Ce que cela change */}
            <section>
              <div className="text-center mb-12 space-y-6 scroll-reveal-premium">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Ce que cela change concrètement pour vous
                </h2>
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefices.map((benefice, index) => {
                  const Icon = iconMap[benefice.icon as keyof typeof iconMap]
                  return (
                    <div
                      key={index}
                      className={`group relative p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-xl font-bold text-white">{benefice.title}</h3>
                          <p className="text-base text-white/70 leading-relaxed">{benefice.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* CTA Final */}
            <section className="scroll-reveal-scale">
              <Link href="/contact" className="block group no-underline">
                <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] animate-reveal-border-glow-premium cursor-pointer">
                  <div className="mb-8 space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] transition-all duration-500">
                      Audit sécurité & conformité pour vos projets IA et automatisation
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                      Nous proposons un audit dédié aux projets IA, automatisation et interconnexions d'outils :
                    </p>
                  </div>

                  <div className="max-w-3xl mx-auto mb-10">
                    <ul className="space-y-3 text-left">
                      {[
                        "cartographie des flux et des données sensibles",
                        "analyse des risques principaux",
                        "recommandations priorisées (mesures techniques, organisationnelles et contractuelles)",
                        "plan d'action réaliste, adapté à vos contraintes et à vos moyens",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/80">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                          <span className="text-base sm:text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    size="lg"
                    className="group/btn relative overflow-hidden px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 text-base sm:text-lg md:text-xl font-bold hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] bg-white text-black hover:bg-white/90"
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      Demander un audit sécurité
                      <ArrowRight className="w-4 h-4 sm:w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
