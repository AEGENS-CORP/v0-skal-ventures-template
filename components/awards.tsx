"use client"

import { useParticleContext } from "./particle-context"

export const Awards = () => {
  const { addParticles } = useParticleContext()

  const awards = [
    {
      title: "Tech Innovation Award 2023",
      organization: "European Tech Summit",
      description: "Reconnaissance pour notre plateforme IA révolutionnaire",
      year: "2023",
      category: "Innovation",
    },
    {
      title: "Best Digital Transformation",
      organization: "Digital Leaders Awards",
      description: "Excellence dans l'accompagnement de la transformation digitale",
      year: "2023",
      category: "Transformation",
    },
    {
      title: "Startup of the Year",
      organization: "French Tech Awards",
      description: "Meilleure startup technologique française",
      year: "2022",
      category: "Startup",
    },
    {
      title: "Cybersecurity Excellence",
      organization: "Security Innovation Forum",
      description: "Solutions de sécurité les plus innovantes",
      year: "2022",
      category: "Sécurité",
    },
    {
      title: "AI Implementation Award",
      organization: "Global AI Conference",
      description: "Meilleure implémentation d'IA en entreprise",
      year: "2021",
      category: "Intelligence Artificielle",
    },
    {
      title: "Green Tech Champion",
      organization: "Sustainable Tech Alliance",
      description: "Solutions technologiques les plus durables",
      year: "2021",
      category: "Durabilité",
    },
  ]

  const certifications = [
    { name: "ISO 27001", description: "Sécurité de l'information" },
    { name: "ISO 9001", description: "Management de la qualité" },
    { name: "AWS Partner", description: "Partenaire certifié Amazon" },
    { name: "Microsoft Gold", description: "Partenaire Gold Microsoft" },
    { name: "Google Cloud", description: "Partenaire Google Cloud" },
    { name: "RGPD Compliant", description: "Conformité données personnelles" },
  ]

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Reconnaissances & Certifications
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Notre excellence reconnue par l'industrie et nos certifications garantissent la qualité de nos services
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-white/90">Prix & Distinctions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="hover-card p-8 group text-center" onMouseEnter={() => addParticles(8)}>
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    🏆
                  </div>
                  <div className="text-sm font-bold text-white/60 mb-2">
                    {award.year} • {award.category}
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-3 group-hover:text-white/90 transition-colors">{award.title}</h4>

                <p className="text-white/70 font-bold mb-4">{award.organization}</p>

                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white/90">Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="hover-card p-6 text-center group" onMouseEnter={() => addParticles(5)}>
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-xl font-bold text-white">
                  ✓
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-white/90 transition-colors">{cert.name}</h4>
                <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
