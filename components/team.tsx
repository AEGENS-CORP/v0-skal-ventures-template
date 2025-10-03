"use client"

import { useParticles } from "./particle-context"

export function Team() {
  const { setHovering } = useParticles()

  const teamMembers = [
    {
      name: "Alexandre Dubois",
      role: "CEO & Fondateur",
      expertise: "Strategy & AI Leadership",
      image: "/professional-ceo-portrait.png",
      description: "15 ans d'expérience dans l'innovation technologique",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Architecture & DevOps",
      image: "/professional-cto-portrait.png",
      description: "Experte en systèmes distribués et cloud computing",
    },
    {
      name: "Marc Laurent",
      role: "Lead AI Engineer",
      expertise: "Machine Learning & Data Science",
      image: "/professional-ai-engineer-portrait.jpg",
      description: "Spécialiste en deep learning et computer vision",
    },
    {
      name: "Emma Rodriguez",
      role: "UX/UI Director",
      expertise: "Design & User Experience",
      image: "/ux-designer-portrait.png",
      description: "Créatrice d'expériences utilisateur exceptionnelles",
    },
  ]

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-muted-foreground mb-4 tracking-wider uppercase">Notre équipe</h2>
          <h3 className="text-4xl md:text-5xl font-light mb-6">Les experts derrière Aegens</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une équipe passionnée d'experts techniques et créatifs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h4 className="text-xl font-medium mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-3">{member.expertise}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
