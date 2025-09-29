"use client"

import { useState } from "react"
import { useParticleContext } from "./particle-context"

export const FAQ = () => {
  const { addParticles } = useParticleContext()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Quels types de projets Aegens développe-t-elle ?",
      answer:
        "Nous développons des solutions sur mesure incluant des applications web et mobile, des systèmes d'IA, des plateformes blockchain, des solutions IoT et des architectures cloud natives. Chaque projet est adapté aux besoins spécifiques de nos clients.",
    },
    {
      question: "Combien de temps prend un projet typique ?",
      answer:
        "La durée varie selon la complexité : 2-4 semaines pour un MVP, 2-6 mois pour une application complète, et 6-12 mois pour des systèmes d'entreprise complexes. Nous travaillons en méthodologie agile avec des livrables réguliers.",
    },
    {
      question: "Proposez-vous un support après livraison ?",
      answer:
        "Absolument. Nous offrons différents niveaux de support : maintenance corrective, évolutive, monitoring 24/7, et formation des équipes. Nos contrats de support sont flexibles et adaptés à vos besoins opérationnels.",
    },
    {
      question: "Comment garantissez-vous la sécurité des données ?",
      answer:
        "Nous appliquons les standards les plus élevés : chiffrement end-to-end, authentification multi-facteurs, audits de sécurité réguliers, conformité RGPD, et certifications ISO 27001. La sécurité est intégrée dès la conception.",
    },
    {
      question: "Travaillez-vous avec des startups ou seulement des grandes entreprises ?",
      answer:
        "Nous accompagnons tous types d'organisations : startups innovantes, PME en croissance, et grandes entreprises. Nos solutions et tarifs sont adaptés à chaque contexte, de l'idée au produit mature.",
    },
    {
      question: "Quelles technologies utilisez-vous principalement ?",
      answer:
        "Notre stack inclut React/Next.js, Node.js, Python, TypeScript, AWS/Azure, Docker, Kubernetes, TensorFlow, et les dernières innovations en IA. Nous choisissons toujours la technologie la plus adaptée au projet.",
    },
  ]

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-white/70">
            Trouvez rapidement les réponses à vos questions sur nos services et notre approche
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="hover-card overflow-hidden transition-all duration-300"
              onMouseEnter={() => addParticles(5)}
            >
              <button
                className="w-full p-8 text-left flex justify-between items-center group"
                onClick={() => {
                  setOpenIndex(openIndex === index ? null : index)
                  addParticles(15)
                }}
              >
                <h3 className="text-xl font-bold group-hover:text-white/90 transition-colors pr-8">{faq.question}</h3>
                <div
                  className={`text-2xl font-bold transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
                  <p className="text-white/80 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
