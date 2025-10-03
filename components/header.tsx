import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { InteractiveLink } from "./interactive-link"
import { NavigationDropdown } from "./navigation-dropdown"
import { primaryNav } from "@/lib/navigation"

export const Header = () => {
  const mainNavItems = primaryNav.filter((item) =>
    ["Méthode", "Services", "Ressources", "Contact"].includes(item.label),
  )

  return (
    <div className="fixed z-[9999] top-0 left-0 w-full">
      <div className="bg-black/60 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top duration-1000 ease-out relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>

        <header className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-10">
          <Link href="/" className="flex-shrink-0 animate-in fade-in duration-1000 delay-100">
            <Logo className="w-[180px] sm:w-[240px] lg:w-[280px] transition-all hover:scale-105 duration-700 ease-out" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {mainNavItems.map((item, index) => {
              const isContact = item.label === "Contact"

              return (
                <div
                  key={item.label}
                  className="animate-in fade-in duration-1000 group"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  <InteractiveLink
                    className={`text-lg font-bold transition-all duration-500 whitespace-nowrap relative ${
                      isContact
                        ? "border-2 border-white text-white px-6 py-2.5 rounded-md hover:bg-white/10 hover:scale-105"
                        : "text-white/80 hover:text-white"
                    }`}
                    href={item.href}
                  >
                    {item.label}
                    {!isContact && (
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-white/0 via-white to-white/0 transition-all duration-500 group-hover:w-full"></span>
                    )}
                  </InteractiveLink>
                </div>
              )
            })}
            <div className="animate-in fade-in duration-1000 delay-700">
              <NavigationDropdown />
            </div>
          </nav>

          <div className="lg:hidden animate-in fade-in duration-1000 delay-300">
            <MobileMenu navItems={primaryNav} />
          </div>
        </header>
      </div>
    </div>
  )
}
