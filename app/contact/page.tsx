import { createPageMetadata } from "@/lib/metadata"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Zap, Clock, FileCheck, TrendingUp, Phone, Mail, MapPin } from "lucide-react"
import { PhoneLink } from "@/components/phone-link"
import { EmailLink } from "@/components/email-link"

export const metadata = createPageMetadata({
  title: "Contact — Aegens",
  path: "/contact",
  description:
    "Contactez Aegens pour votre projet d'intégration IA. Visite sur site 60-90 min, plan d'action sous 48h.",
})

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="pt-20 pb-4 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 md:mb-12 lg:mb-16 text-balance leading-[1.1]">
            Planifier une visite sur site
          </h1>

          {/* Promesses */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
            <div className="border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 group opacity-100 border text-[rgba(82,40,40,0)] bg-input">
              <Clock className="w-10 h-10 md:w-12 md:h-12 text-white/60 group-hover:text-white/80 mx-auto mb-4 transition-colors" />
              <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight">Visite 60–90 min</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 group bg-input">
              <FileCheck className="w-10 h-10 md:w-12 md:h-12 text-white/60 group-hover:text-white/80 mx-auto mb-4 transition-colors" />
              <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                Plan d'action et devis sous 48 h
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 group bg-input">
              <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-green-400 group-hover:text-green-300 mx-auto mb-4 transition-colors" />
              <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                Solution sur mesure et croissance ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column layout: Form + Contact Info */}
      <section className="pb-20 md:pb-24 lg:pb-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {/* Formulaire */}
            <div className="order-2 lg:order-1">
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 hover:border-white/20 transition-all duration-300 bg-input">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Demande de contact</h2>
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
                      className="w-full px-4 py-3 md:px-5 md:py-4 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all text-base"
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
                      className="w-full px-4 py-3 md:px-5 md:py-4 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all text-base"
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
                      className="w-full px-4 py-3 md:px-5 md:py-4 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all text-base"
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
                      className="w-full px-4 py-3 md:px-5 md:py-4 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all text-base"
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
                      className="w-full px-4 py-3 md:px-5 md:py-4 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all resize-none text-base"
                      placeholder="Décrivez brièvement votre projet ou problématique..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90 text-base md:text-lg px-8 py-6 md:py-7 h-auto font-semibold transition-all duration-300 hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3"
                  >
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
                    Envoyer ma demande
                  </Button>

                  <p className="text-xs md:text-sm text-white/50 text-center leading-relaxed">
                    Réponse sous 24h en semaine. Vos données sont protégées.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              {/* Contact direct */}
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 bg-input">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact direct</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-white/60 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-white/60 mb-1">Téléphone</p>
                      <PhoneLink
                        phoneNumber="07 45 10 30 15"
                        className="text-lg md:text-xl font-medium hover:text-white/80 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-white/60 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-white/60 mb-1">Email</p>
                      <EmailLink
                        email="contact@aegens.fr"
                        className="text-lg md:text-xl font-medium hover:text-white/80 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-white/60 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-white/60 mb-1">Adresse</p>
                      <p className="text-base md:text-lg leading-relaxed">
                        18 Rue Ampère, ZI La Folie Sud
                        <br />
                        85310 La Chaize-le-Vicomte
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processus */}
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 bg-input">
                <h3 className="text-xl md:text-2xl font-bold mb-5">Après votre demande</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-medium mb-1">Prise de contact</p>
                      <p className="text-sm text-white/70">
                        Échange téléphonique de 15-20 min pour qualifier le besoin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-medium mb-1">Visite sur site</p>
                      <p className="text-sm text-white/70">
                        Observation terrain, analyse des flux, identification des gains
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-medium mb-1">Plan d'action et devis</p>
                      <p className="text-sm text-white/70">Livré sous 48h avec objectifs chiffrés et jalons précis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zone intervention */}
              <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-300 bg-input">
                <h3 className="text-xl md:text-2xl font-bold mb-3">Zone d'intervention</h3>
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
