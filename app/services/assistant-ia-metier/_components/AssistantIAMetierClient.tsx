"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FileText, Search, TrendingUp, Zap, Users, Eye, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function AssistantIAMetierClient() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // <CHANGE> Added mouse tracking and scroll reveal effects from homepage
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
      {/* <CHANGE> Added animated background from homepage */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Accueil", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Assistants métier IA & RAG" },
              ]}
            />
          </div>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Assistants métier IA & RAG",
              description:
                "Un point d'accès unique à vos documents, procédures et chiffres clés. Vos équipes posent une question en langage simple, l'assistant répond en quelques secondes avec les bonnes informations.",
              provider: { "@type": "LocalBusiness", name: "Skal Ventures" },
              areaServed: ["La Roche-sur-Yon", "La Rochelle", "Niort", "Nantes", "Poitiers", "Angoulême"],
            }),
          }}
        />

        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 px-4 sm:px-6 relative z-10 scroll-reveal-premium">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] leading-tight">
                Assistants métier IA & recherche dans vos données
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Un point d'accès unique à vos documents, procédures et chiffres clés.
                <br className="hidden sm:block" />
                Vos équipes posent une question en langage simple, l'assistant répond en quelques secondes, avec les
                bonnes informations et les bons chiffres, sans fouiller dans des mails, dossiers ou fichiers Excel.
              </p>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Techniquement, il s'appuie sur vos données (documents, outils, bases) plutôt que sur de simples réponses
                génériques.
              </p>

              <div className="flex justify-center pt-6">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="px-10 py-7 text-xl font-semibold bg-white text-black hover:bg-white/90 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
                  >
                    <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                    Demandez votre diagnostic
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <main className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-24 md:space-y-32">
            {/* Problèmes que nous supprimons */}
            <section>
              <div className="text-center mb-16 space-y-8 scroll-reveal-premium">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Problèmes que nous supprimons
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="max-w-4xl mx-auto mb-12 scroll-reveal-premium">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center">
                  Aujourd'hui, vos équipes perdent du temps à chercher l'information au lieu de l'utiliser :
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Information dispersée",
                    desc: "Mails, contrats, procédures, comptes-rendus dispersés dans plusieurs outils",
                  },
                  {
                    title: "Dépendance aux sachants",
                    desc: 'Dépendance à quelques personnes "qui savent où est l\'info"',
                  },
                  {
                    title: "Données éclatées",
                    desc: "Chiffres éclatés entre CRM, ERP, Excel, drive partagé",
                  },
                  {
                    title: "Réponses variables",
                    desc: "Réponses clients variables selon la personne qui traite la demande",
                  },
                  {
                    title: "Onboarding long",
                    desc: "Onboarding long pour chaque nouveau collaborateur",
                  },
                ].map((problem, index) => (
                  <div
                    key={index}
                    className={`group p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-white/70 leading-relaxed">{problem.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12 max-w-3xl mx-auto p-6 bg-white/5 rounded-xl border border-white/20 scroll-reveal-premium">
                <p className="text-lg text-white/80 leading-relaxed">
                  Un assistant métier connecté à vos données réduit cette friction au quotidien.
                </p>
              </div>
            </section>

            {/* Exemples d'usages concrets */}
            <section>
              <div className="text-center mb-16 space-y-8 scroll-reveal-premium">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Exemples d'usages concrets
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Relation client / support / ADV",
                    examples: [
                      '"Que prévoit le contrat pour ce client en cas de retard de livraison ?"',
                      "\"Qu'est-ce qu'on a déjà répondu à ce client sur ce problème ?\"",
                      '"Quelles sont les conditions de garantie pour ce type de produit ?"',
                    ],
                    capabilities: [
                      "retrouve les bons mails, contrats, tickets, procédures,",
                      "résume l'historique,",
                      "propose une réponse conforme à vos règles.",
                    ],
                  },
                  {
                    title: "Vente, prospection, direction commerciale",
                    examples: [
                      "\"Quel chiffre d'affaires a généré ce client cette année et l'année dernière ?\"",
                      '"Quels devis sont toujours en attente de réponse pour ce commercial ?"',
                      '"Quels clients ont acheté ce produit au cours des 12 derniers mois ?"',
                    ],
                    capabilities: [
                      "interroge vos CRM / ERP / Excel,",
                      "croise données clients, devis, factures,",
                      "fournit une vue synthétique et exploitable.",
                    ],
                  },
                  {
                    title: "Production, logistique, services sur site",
                    examples: [
                      '"Quelle est la dernière version de la procédure pour cette intervention ?"',
                      '"Quels incidents récurrents sur cette machine ces 6 derniers mois ?"',
                      '"Quelles consignes donner au technicien avant d\'aller chez ce client ?"',
                    ],
                    capabilities: [
                      "rassemble comptes-rendus, fiches techniques, historiques,",
                      "extrait les points clés,",
                      "présente les infos utiles avant l'intervention.",
                    ],
                  },
                  {
                    title: "Back-office, administratif, finances",
                    examples: [
                      '"Où en est ce dossier fournisseur ?"',
                      '"Quels documents manquent pour ce dossier client ?"',
                      '"Quels contrats arrivent à échéance dans les 3 prochains mois ?"',
                    ],
                    capabilities: [
                      "parcourt dossiers, contrats, pièces jointes,",
                      "liste les éléments manquants ou à échéance,",
                      "structure l'information pour traiter plus vite.",
                    ],
                  },
                ].map((useCase, index) => (
                  <div
                    key={index}
                    className={`p-8 bg-black/33 rounded-2xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">{useCase.title}</h3>

                    <div className="space-y-4 mb-6">
                      {useCase.examples.map((example, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Search className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                          <p className="text-white/80 italic">{example}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/20">
                      <p className="text-sm font-semibold text-white/90 mb-3">L'assistant :</p>
                      <div className="space-y-2">
                        {useCase.capabilities.map((capability, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-white/30 mt-1">•</span>
                            <p className="text-white/70 text-sm">{capability}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Ce que nous connectons */}
            <section className="scroll-reveal-premium">
              <div className="text-center mb-16 space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Ce que nous connectons
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center mb-12">
                  Nous branchons l'assistant sur vos sources réelles, en respectant les droits d'accès :
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      icon: FileText,
                      title: "Documents",
                      desc: "PDF, Word, PowerPoint, contrats, procédures, modèles",
                    },
                    {
                      icon: Zap,
                      title: "Outils métiers",
                      desc: "CRM, ERP, ticketing, GED, drive partagé, SharePoint…",
                    },
                    {
                      icon: TrendingUp,
                      title: "Données structurées",
                      desc: "fichiers Excel, bases de données, exports",
                    },
                    {
                      icon: Users,
                      title: "Historique",
                      desc: "mails, comptes-rendus, notes internes (quand c'est pertinent)",
                    },
                  ].map((source, index) => (
                    <div
                      key={index}
                      className={`p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <source.icon className="w-12 h-12 text-white/60 mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{source.title}</h3>
                      <p className="text-white/70">{source.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/20 text-center">
                  <p className="text-lg text-white/80 leading-relaxed">
                    L'assistant ne "devine" pas : il s'appuie sur ce que vous avez réellement dans vos systèmes, et
                    indique d'où viennent ses réponses.
                  </p>
                </div>
              </div>
            </section>

            {/* Comment l'assistant travaille */}
            <section className="scroll-reveal-premium">
              <div className="text-center mb-16 space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Comment l'assistant travaille
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="max-w-4xl mx-auto">
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed text-center mb-12">
                  Derrière une interface simple, il :
                </p>

                <div className="space-y-4">
                  {[
                    "retrouve les bons documents et les bons enregistrements,",
                    "extrait les passages utiles et les données clés,",
                    "reformule la réponse en langage clair,",
                    "ajoute les références (contrat, mail, fiche, rapport) pour vérification.",
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 scroll-reveal-left`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                          {index + 1}
                        </div>
                        <p className="text-lg text-white/90">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/20 text-center">
                  <p className="text-lg text-white/80 leading-relaxed">
                    Vous gardez la main : vos équipes valident, complètent ou ajustent avant d'envoyer ou de décider.
                  </p>
                </div>
              </div>
            </section>

            {/* Impact pour vos équipes */}
            <section className="scroll-reveal-premium">
              <div className="text-center mb-16 space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Impact pour vos équipes
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    title: "Moins de temps perdu à chercher",
                    desc: "Une seule question, une réponse exploitable, les sources à l'appui.",
                  },
                  {
                    title: "Meilleure qualité de réponse",
                    desc: "Alignement sur vos contrats, vos procédures, vos règles internes.",
                  },
                  {
                    title: "Onboarding plus rapide",
                    desc: "Les nouveaux trouvent les réponses dans l'assistant plutôt que d'interroger tout le monde.",
                  },
                  {
                    title: "Décisions plus factuelles",
                    desc: "Accès direct aux bons chiffres, aux bonnes clauses, aux bons historiques.",
                  },
                ].map((impact, index) => (
                  <div
                    key={index}
                    className={`p-8 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] scroll-reveal-scale`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">{impact.title}</h3>
                    <p className="text-lg text-white/70 leading-relaxed">{impact.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Notre façon de faire */}
            <section className="scroll-reveal-premium">
              <div className="text-center mb-16 space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Notre façon de faire
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="space-y-6 max-w-5xl mx-auto">
                {[
                  {
                    num: "1",
                    title: "Cadrage des usages prioritaires (1 à 2 ateliers)",
                    desc: "On identifie qui utilisera l'assistant, sur quels sujets, avec quels objectifs (temps gagné, qualité, sécurisation).",
                  },
                  {
                    num: "2",
                    title: "Cartographie des données utiles",
                    desc: "On liste les sources à connecter : documents, outils, tableaux, historiques. On vérifie la qualité et les droits d'accès.",
                  },
                  {
                    num: "3",
                    title: "Construction de l'assistant métier",
                    desc: "On conçoit l'interface, les premiers cas d'usage, les règles de réponse, les connexions techniques aux outils.",
                  },
                  {
                    num: "4",
                    title: "Pilote et ajustements",
                    desc: "On teste avec vos équipes sur des cas réels, on ajuste les réponses, les sources, les règles. Puis on étend à d'autres services.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`group flex items-start gap-6 p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:translate-x-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] ${index % 2 === 0 ? "scroll-reveal-left" : "scroll-reveal-right"}`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 text-3xl font-bold">
                      {step.num}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Adapté à tout type de métier */}
            <section className="scroll-reveal-premium">
              <div className="text-center mb-16 space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                  Adapté à tout type de métier
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 mx-auto shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    "Services clients, ADV, SAV",
                    "Commerciaux, account managers, direction commerciale",
                    "Back-office, administratif, finance",
                    "Opérations, logistique, production, services sur site",
                  ].map((sector, index) => (
                    <div
                      key={index}
                      className={`p-6 bg-black/33 rounded-xl border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 hover:scale-105 text-center scroll-reveal-rotate`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Users className="w-12 h-12 text-white/60 mx-auto mb-4" />
                      <p className="text-lg font-semibold text-white">{sector}</p>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-white/5 rounded-xl border border-white/20 text-center">
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-4">
                    L'assistant métier est construit sur mesure pour votre entreprise, vos données et vos règles.
                  </p>
                  <p className="text-base text-white/70 leading-relaxed">
                    Pas de modèle générique, pas de promesse irréaliste : un outil concret pour accéder vite à ce que
                    vous savez déjà… mais que vous mettez trop de temps à retrouver.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Final */}
            <section className="scroll-reveal-scale">
              <Link href="/contact" className="block no-underline">
                <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-10 md:p-16 lg:p-20 text-center border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] animate-reveal-border-glow-premium cursor-pointer group">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] mb-8">
                    Recevez un diagnostic "Assistant métier & données internes"
                  </h2>

                  <div className="max-w-3xl mx-auto space-y-6 mb-10">
                    <p className="text-xl text-white/90 leading-relaxed">En moins de 48h, nous :</p>
                    <div className="space-y-4 text-left">
                      {[
                        "identifions 2 à 3 usages concrets à fort impact,",
                        "évaluons les données disponibles,",
                        "estimons les gains possibles (temps gagné, qualité, fiabilité),",
                        "proposons un plan de mise en place adapté à votre structure.",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Eye className="w-5 h-5 text-white/60 flex-shrink-0 mt-1" />
                          <p className="text-lg text-white/80">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="px-12 py-7 text-xl font-bold bg-white text-black hover:bg-white/90 rounded-2xl transition-all duration-500 group-hover:scale-105 shadow-2xl"
                  >
                    Demandez votre diagnostic "Assistant métier & données internes"
                    <ArrowRight className="w-6 h-6 ml-2 inline group-hover:translate-x-2 transition-transform duration-300" />
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
