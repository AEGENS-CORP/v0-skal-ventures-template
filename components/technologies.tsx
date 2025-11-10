"use client"

import { useParticles } from "./particle-context"

export function Technologies() {
  const { setHovering } = useParticles()

  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Vue.js", level: 85 },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 90 },
        { name: "Go", level: 85 },
        { name: "Rust", level: 80 },
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 85 },
        { name: "Terraform", level: 82 },
      ],
    },
    {
      category: "AI & Data",
      technologies: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "Scikit-learn", level: 87 },
      ],
    },
  ]

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-sans text-muted-foreground mb-4 tracking-wider uppercase">
            Notre stack technique
          </h2>
          <h3 className="text-4xl md:text-5xl font-light mb-6">Technologies maîtrisées</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous utilisons les technologies les plus avancées pour créer des solutions robustes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/15 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <h4 className="text-lg font-medium mb-6 text-center">{category.category}</h4>

              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <span className="text-xs text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
