"use client"

import { useParticles } from "./particle-context"

export function Portfolio() {
  const { setHovering } = useParticles()

  const projects = [
    {
      title: "Plateforme IA Médicale",
      category: "Intelligence Artificielle",
      description: "Système de diagnostic assisté par IA pour l'analyse d'imagerie médicale",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      image: "/medical-ai-platform.png",
    },
    {
      title: "Blockchain Supply Chain",
      category: "Blockchain",
      description: "Solution de traçabilité complète pour l'industrie agroalimentaire",
      tech: ["Solidity", "Web3", "Next.js", "PostgreSQL"],
      image: "/blockchain-supply-chain-dashboard.jpg",
    },
    {
      title: "Fintech Mobile App",
      category: "Finance",
      description: "Application de gestion financière avec IA prédictive",
      tech: ["React Native", "Python", "AWS", "MongoDB"],
      image: "/fintech-mobile-app.png",
    },
    {
      title: "IoT Smart Factory",
      category: "IoT",
      description: "Système de monitoring industriel en temps réel",
      tech: ["IoT", "Azure", "React", "Time Series DB"],
      image: "/smart-factory-iot-dashboard.jpg",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background/50 to-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wider uppercase">Nos réalisations</h2>
          <h3 className="text-4xl md:text-5xl font-light mb-6">Portfolio de projets</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations les plus innovantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded-md text-xs font-medium text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
