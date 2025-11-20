"use client"

import Link from "next/link"
import Image from "next/image"
import { footerLinks, primaryNav } from "@/lib/navigation"
import { plusNavItems, NAP } from "@/lib/ae-content"
import { useParticles } from "./particle-context"
import { Button } from "./ui/button"
import { MapPin } from "lucide-react"
import { PhoneLink } from "./phone-link"
import { EmailLink } from "./email-link"

export function Footer() {
  const { setHovering } = useParticles()

  const serviceLinks = primaryNav.find((item) => item.label === "Services")?.children || []

  return (
    <footer className="bg-black backdrop-blur-xl border-t border-white/10 relative z-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-100 group">
            <div className="mb-6">
              <Image src="/ae-logo.png" alt="AE Logo" width={80} height={80} />
            </div>
            <h3 className="text-2xl font-semibold transition-all duration-500">{NAP.name}</h3>
            <p className="text-white/70 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90">
              {
                "Solutions d’ingénierie IA et d’automatisation sur mesure pour TPE/PME.\nNous aidons les entreprises à éliminer leurs tâches répétitives, gagner en productivité et obtenir un ROI rapide grâce à des systèmes IA adaptés à leur activité."
              }
            </p>
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm">
              {primaryNav
                .filter((item) => item.label !== "Plus")
                .map((item) => (
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

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-250">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="flex flex-col gap-3 text-sm">
              {serviceLinks.map((item) => (
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
            <h4 className="text-lg font-semibold">Plus</h4>
            <div className="flex flex-col gap-3 text-sm">
              {plusNavItems
                .filter((item) => !["Mentions légales", "Politique de confidentialité"].includes(item.label))
                .map((item) => (
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
              <EmailLink
                email={NAP.email}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-500 group"
                showIcon
              />
              <PhoneLink
                phoneNumber={NAP.phoneLink.replace("tel:", "")}
                displayNumber={NAP.phone}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-500 group"
                showIcon
              />
              <div className="flex items-start gap-3 text-white/70 group hover:text-white transition-colors duration-500">
                <MapPin className="mt-0.5 group-hover:scale-110 transition-all duration-500 h-7 w-12" />
                <span className="group-hover:translate-x-1 transition-transform duration-500">{NAP.fullAddress}</span>
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
            © {new Date().getFullYear()} {NAP.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            {footerLinks.map((item) => (
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
