"use client"

import { useParticles } from "./particle-context"

export function Expertise() {
  const { setHovering } = useParticles()

  const certifications = [
    {
      title: "Certifications Techniques",
      items: ["AWS AI/ML Specialty", "Google Cloud AI", "Microsoft Azure AI", "NVIDIA Deep Learning"],
    },
    {
      title: "Standards Qualité",
      items: ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "Ethical AI Framework"],
    },
    {
      title: "Reconnaissances",
      items: ["AI Excellence Award", "Innovation Prize 2024", "Tech Leader Recognition", "Best AI Solution"],
    },
  ]

  const expertise = [
    { domain: "Machine Learning", level: 95 },
    { domain: "Deep Learning", level: 90 },
    { domain: "NLP & LLM", level: 88 },
    { domain: "Computer Vision", level: 85 },
    { domain: "MLOps", level: 92 },
    { domain: "AI Ethics", level: 90 },
  ]

  return (
    <section className="py-24 bg-muted/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient font-extralight mb-4">Expertise Reconnue</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des certifications et une expertise technique de haut niveau
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-sentient font-light mb-8">Certifications & Standards</h3>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors cursor-pointer"
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  <h4 className="text-lg font-semibold mb-4">{cert.title}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-sentient font-light mb-8">Domaines d'Expertise</h3>
            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.domain}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
