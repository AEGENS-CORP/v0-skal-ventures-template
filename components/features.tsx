"use client"

import { useParticles } from "./particle-context"

export function Features() {
  const { setHovering } = useParticles()

  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
        </div>
      ),
      title: "Performance Optimale",
      description: "Solutions haute performance conçues pour évoluer avec votre entreprise",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
        </div>
      ),
      title: "Sécurité Avancée",
      description: "Protection de données de niveau entreprise avec chiffrement de bout en bout",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
        </div>
      ),
      title: "Déploiement Rapide",
      description: "Mise en production accélérée avec notre méthodologie éprouvée",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      ),
      title: "Solutions Sur Mesure",
      description: "Développement personnalisé adapté à vos besoins spécifiques",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
          <div className="w-6 h-1 bg-white rounded-full"></div>
        </div>
      ),
      title: "Analytics Avancés",
      description: "Tableaux de bord intelligents pour un suivi en temps réel",
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-lg transform rotate-12"></div>
        </div>
      ),
      title: "Intégration Continue",
      description: "Synchronisation parfaite avec vos systèmes existants",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wider uppercase">
            Pourquoi nous choisir
          </h2>
          <h3 className="text-4xl md:text-5xl font-light mb-6">Fonctionnalités avancées</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des technologies de pointe au service de votre transformation digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
