"use client"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Zap, Phone, Mail, MapPin } from "lucide-react"
import { PhoneLink } from "@/components/phone-link"
import { EmailLink } from "@/components/email-link"
import { useEffect, useState } from "react"

export default function ContactPage() {
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
      ".scroll-reveal, .scroll-reveal-premium, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
        }}
      />

      {/* Breadcrumbs */}
      <div className="relative z-10 pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
        </div>
      </div>

      <section className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-16 px-4 sm:px-6 lg:pt-5 lg:pb-7">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-[1.1] bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] scroll-reveal-premium">
            Contactez-nous
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed scroll-reveal-premium">
            Recevez un diagnostic opérationnel + plan d'action et devis sous 48h
          </p>
        </div>
      </section>

      <section className="relative z-10 pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            <div className="order-2 lg:order-1 scroll-reveal-left">
              <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)]">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Demande de contact
                </h2>
                <form className="space-y-5 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium mb-2 text-white/90">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all text-base text-white placeholder:text-white/50"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium mb-2 text-white/90">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all text-base text-white placeholder:text-white/50"
                      placeholder="jean.dupont@entreprise.fr"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm md:text-base font-medium mb-2 text-white/90">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all text-base text-white placeholder:text-white/50"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm md:text-base font-medium mb-2 text-white/90">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all text-base text-white placeholder:text-white/50"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm md:text-base font-medium mb-2 text-white/90">
                      Votre besoin
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 md:px-5 md:py-4 bg-white/10 border-2 border-white/20 rounded-lg focus:outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all resize-none text-base text-white placeholder:text-white/50"
                      placeholder="Décrivez brièvement votre projet ou problématique..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90 text-base md:text-lg px-8 py-6 md:py-7 h-auto font-semibold transition-all duration-500 hover:scale-105 shadow-xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                  >
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                    Envoyer ma demande
                  </Button>

                  <p className="text-xs md:text-sm text-white/50 text-center leading-relaxed">
                    Réponse sous 24h jours ouvrés. Vos données sont protégées.
                  </p>
                </form>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              {/* Contact direct */}
              <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] scroll-reveal-right">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Contact direct
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white/60" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Téléphone</p>
                      <PhoneLink
                        phoneNumber="07 45 10 30 15"
                        className="text-lg md:text-xl font-medium hover:text-white/80 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white/60" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Email</p>
                      <EmailLink
                        email="contact@aegens.com"
                        className="text-lg md:text-xl font-medium hover:text-white/80 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white/60" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 mb-1">Adresse</p>
                      <p className="text-base md:text-lg leading-relaxed text-white/80">
                        18 Rue Ampère, ZI La Folie Sud
                        <br />
                        85310 La Chaize-le-Vicomte
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processus */}
              <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] scroll-reveal-scale">
                <h3 className="text-xl md:text-2xl font-bold mb-5 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Après votre demande
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center flex-shrink-0 font-bold text-sm text-white">
                      1
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-white">Prise de contact</p>
                      <p className="text-sm text-white/70">
                        Échange téléphonique de 15-20 min pour qualifier le besoin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center flex-shrink-0 font-bold text-sm text-white">
                      2
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-white">Visite sur site</p>
                      <p className="text-sm text-white/70">
                        Observation terrain, analyse des flux, identification des gains
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center flex-shrink-0 font-bold text-sm text-white">
                      3
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-white">Plan d'action et devis</p>
                      <p className="text-sm text-white/70">Livré sous 48h avec objectifs chiffrés et jalons précis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zone intervention */}
              <div className="bg-black/33 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-4 border-white/20 border-t-white/60 border-l-white/50 hover:border-white/40 hover:border-t-white/80 hover:border-l-white/70 transition-all duration-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_30px_rgba(255,255,255,0.1)] scroll-reveal-scale">
                <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Zone d'intervention
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  Visites sur site dans un rayon de 2h autour de La Roche-sur-Yon. Au-delà, intervention possible à
                  distance ou déplacement sur devis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
