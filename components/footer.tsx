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
  const serviceLinks = primaryNav.find((item) => item.label === "Offres")?.children || []

  return (
    <footer className="ae-metal-footer border-t border-white/12 relative z-10 text-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14 sm:py-16 space-y-12 relative z-10">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo-global.png"
                alt="Logo Aegens"
                width={80}
                height={80}
                className="h-20 w-20 object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.46)]"
              />
              <span className="text-[2.2rem] font-bold tracking-[-0.04em] text-white">{NAP.name}</span>
            </div>
            <p className="text-white/78 text-sm leading-relaxed">
              Diagnostic, cadrage et pilotage de projets pour PME industrielles. Regard extérieur, méthode claire et exécution maîtrisée.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-[-0.02em]">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm">
              {primaryNav
                .filter((item) => item.label !== "Plus")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className="text-white/74 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-[-0.02em]">Offres</h4>
            <div className="flex flex-col gap-3 text-sm">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="text-white/74 hover:text-white transition-colors duration-200 inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-[-0.02em]">Plus</h4>
            <div className="flex flex-col gap-3 text-sm">
              {plusNavItems
                .filter((item) => !["Mentions légales", "Politique de confidentialité"].includes(item.label))
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className="text-white/74 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-[-0.02em]">Contact</h4>
            <div className="flex flex-col gap-4 text-sm">
              <EmailLink email={NAP.email} className="flex items-center gap-3 text-white/82 hover:text-white transition-colors duration-200 text-base" showIcon />
              <PhoneLink
                phoneNumber={NAP.phoneLink.replace("tel:", "")}
                displayNumber={NAP.phone}
                className="flex items-center gap-3 text-white/82 hover:text-white transition-colors duration-200 text-base"
                showIcon
              />
              <div className="flex items-start gap-3 text-white/74 hover:text-white transition-colors duration-200">
                <MapPin className="mt-0.5 h-7 w-12" />
                <span>{NAP.fullAddress}</span>
              </div>
              <Button asChild className="mt-3 !text-zinc-950 hover:!text-zinc-950">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/62">
          <p>
            © {new Date().getFullYear()} {NAP.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors duration-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
