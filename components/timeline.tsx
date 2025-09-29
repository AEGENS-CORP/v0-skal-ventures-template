"use client"

import { useParticleContext } from "./particle-context"

export const Timeline = () => {
  const { addParticles } = useParticleContext()

  const timelineEvents = [
    {
      year: "2018",
      title: "Fondation d'Aegens",
      description: "Création de l'entreprise avec une vision claire : révolutionner l'industrie technologique",
      position: "left",
    },
    {
      year: "2019",
      title: "Premier projet majeur",
      description: "Développement d'une plateforme IA pour une multinationale, établissant notre réputation",
      position: "right",
    },
    {
      year: "2020",
      title: "Expansion internationale",
      description: "Ouverture de bureaux en Europe et partenariats stratégiques avec des leaders du marché",
      position: "left",
    },
    {
      year: "2021",
      title: "Innovation blockchain",
      description: "Lancement de solutions blockchain révolutionnaires pour la supply chain",
      position: "right",
    },
    {
      year: "2022",
      title: "Certification ISO",
      description: "Obtention des certifications ISO 27001 et ISO 9001 pour la qualité et la sécurité",
      position: "left",
    },
    {
      year: "2023",
      title: "IA Générative",
      description: "Intégration de l'IA générative dans tous nos produits et services",
      position: "right",
    },
  ]

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Notre Parcours
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Découvrez les étapes clés qui ont façonné Aegens et notre évolution vers l'excellence technologique
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-16 ${event.position === "left" ? "flex-row-reverse" : ""}`}
              onMouseEnter={() => addParticles(10)}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black z-10 shadow-lg shadow-white/20"></div>

              {/* Content */}
              <div className={`w-5/12 ${event.position === "left" ? "pr-16 text-right" : "pl-16"}`}>
                <div className="hover-card p-8 group">
                  <div className="text-3xl font-bold text-white/50 mb-2 group-hover:text-white/70 transition-colors">
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{event.title}</h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
