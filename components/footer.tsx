"use client"

import Link from "next/link"
import { footerLinks } from "@/lib/navigation"
import { useParticles } from "./particle-context"
import { Button } from "./ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { setHovering } = useParticles()
  const legalLinks = footerLinks
  const splitIndex = Math.ceil(legalLinks.length / 2)
  const firstColumn = legalLinks.slice(0, splitIndex)
  const secondColumn = legalLinks.slice(splitIndex)

  return (
    <footer className="bg-black/60 backdrop-blur-xl border-t border-white/10 relative z-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 lg:col-span-4 text-center border-2 border-white/20 rounded-lg p-8 bg-white/5 backdrop-blur-sm">
            <h3 className="text-3xl font-semibold">Prêt à transformer votre vision en réalité ?</h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Discutons de votre projet et découvrez comment nous pouvons vous accompagner dans votre transformation
              digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-lg transition-all duration-500 hover:scale-105"
              >
                <Link href="/contact">Démarrer un projet</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white/50 bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg transition-all duration-500 hover:scale-105"
              >
                <Link href="/methode">Découvrir notre méthode</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-100 group">
            <h3 className="text-2xl font-semibold transition-all duration-500">Aegens</h3>
            <p className="text-white/70 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
              Votre partenaire stratégique pour l'innovation digitale. Nous créons des solutions sur mesure qui
              transforment vos ambitions en succès concrets.
            </p>
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <h4 className="text-lg font-semibold">Références légales</h4>
            <div className="flex flex-col gap-3 text-sm">
              {firstColumn.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="text-white/70 hover:text-white transition-all duration-500 hover:translate-x-1 inline-block relative group"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white/50 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <h4 className="text-lg font-semibold">Documents</h4>
            <div className="flex flex-col gap-3 text-sm">
              {secondColumn.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="text-white/70 hover:text-white transition-all duration-500 hover:translate-x-1 inline-block relative group"
                >
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white/50 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-4 text-sm">
              <a
                href="mailto:contact@aegens.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-500 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-all duration-500" />
                <span className="group-hover:translate-x-1 transition-transform duration-500">contact@aegens.com</span>
              </a>
              <a
                href="tel:+33123456789"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-500 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-all duration-500" />
                <span className="group-hover:translate-x-1 transition-transform duration-500">+33 1 23 45 67 89</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 group hover:text-white transition-colors duration-500">
                <MapPin className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-all duration-500" />
                <span className="group-hover:translate-x-1 transition-transform duration-500">Paris, France</span>
              </div>
              <Button
                asChild
                className="bg-white text-black hover:bg-white/95 font-semibold mt-4 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10">Nous contacter</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 animate-in fade-in duration-1000 delay-700">
          <p className="transition-colors duration-500 hover:text-white/80">
            © {new Date().getFullYear()} Aegens. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-all duration-500 relative group"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-white/50 transition-all duration-500 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
