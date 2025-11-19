"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import { InteractiveLink } from "./interactive-link"
import type { NavItem } from "@/lib/navigation"
import { PhoneLink } from "./phone-link"
import { EmailLink } from "./email-link"

interface MobileMenuProps {
  className?: string
  navItems: NavItem[]
}

export const MobileMenu = ({ className, navItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn("group lg:hidden p-2 text-foreground transition-colors", className)}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={24} />
          <X className="hidden group-[[data-state=open]]:block" size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div data-overlay="true" className="fixed z-30 inset-0 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (e.target instanceof HTMLElement && e.target.dataset.overlay !== "true") {
              e.preventDefault()
            }
          }}
          className="fixed top-0 left-0 w-full z-40 py-28 md:py-40"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col space-y-6 container mx-auto">
            {navItems.map((item) => (
              <div key={item.label} className="space-x-0 mx-10">
                <InteractiveLink
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-xl font-sans uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-foreground/100 py-2"
                >
                  {item.label}
                </InteractiveLink>
                {item.children && (
                  <div className="pl-4 space-y-2">
                    {item.children.map((child) => (
                      <InteractiveLink
                        key={child.href}
                        href={child.href}
                        onClick={handleLinkClick}
                        className="block text-base text-foreground/60 transition-colors hover:text-foreground/100"
                      >
                        {child.label}
                      </InteractiveLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="mx-10 pt-8 mt-4 border-t-2 border-white/30 space-y-5">
              <div className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Contact</div>
              <PhoneLink
                phoneNumber="+33745103015"
                displayNumber="07 45 10 30 15"
                className="flex items-center gap-3 text-xl font-bold text-green-400 hover:text-green-300 transition-all duration-300 bg-green-500/10 px-4 py-3 rounded-lg border-2 border-green-500/40 hover:border-green-500/60"
                showIcon
              />
              <EmailLink
                email="contact@aegens.com"
                className="flex items-center gap-3 text-lg font-semibold text-white/90 hover:text-white transition-all duration-300 bg-white/5 px-4 py-3 rounded-lg border-2 border-white/20 hover:border-white/40"
                showIcon
              />
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
