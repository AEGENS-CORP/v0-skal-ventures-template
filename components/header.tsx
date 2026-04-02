import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "./mobile-menu"
import { InteractiveLink } from "./interactive-link"
import { NavigationDropdown } from "./navigation-dropdown"
import { primaryNav } from "@/lib/navigation"

export const Header = () => {
  return (
    <div className="fixed z-[9999] top-0 left-0 w-full px-3 sm:px-4 pt-3 sm:pt-4">
      <div className="max-w-[1240px] mx-auto ae-nav-shell">
        <header className="flex h-[62px] items-center justify-between px-3 sm:px-4 relative z-10">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 font-[var(--font-sans)]">
            <Image
              src="/logo-global.png"
              alt="Logo Aegens"
              width={46}
              height={46}
              priority
              className="h-[2.7rem] w-[2.7rem] object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,0.42)]"
            />
            <span className="text-[1.62rem] font-bold tracking-[-0.02em] text-white">Aegens</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-5 font-[var(--font-sans)]">
            {primaryNav.map((item) => {
              const isContact = item.label === "Contact"
              const hasChildren = item.children && item.children.length > 0

              return (
                <div key={item.label} className="group">
                  {hasChildren ? (
                    <NavigationDropdown label={item.label} items={item.children ?? []} />
                  ) : (
                    <InteractiveLink
                      className={`text-[15px] font-semibold tracking-[-0.015em] transition-colors duration-200 whitespace-nowrap relative ${
                        isContact
                          ? "h-10 inline-flex items-center px-5 rounded-full border border-white/80 bg-white !text-zinc-950 hover:bg-zinc-100"
                          : "text-white/76 hover:text-white"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </InteractiveLink>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="xl:hidden">
            <MobileMenu navItems={primaryNav} className="text-white/92" />
          </div>
        </header>
      </div>
    </div>
  )
}
