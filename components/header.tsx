import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { InteractiveLink } from "./interactive-link"
import { NavigationDropdown } from "./navigation-dropdown"
import { primaryNav } from "@/lib/navigation"
import { PhoneLink } from "./phone-link"
import { EmailLink } from "./email-link"
import { NAP } from "@/lib/ae-content"

export const Header = () => {
  const navItemsWithoutChildren = primaryNav.filter((item) => !item.children || item.children.length === 0)
  const navItemsWithChildren = primaryNav.filter((item) => item.children && item.children.length > 0)

  return (
    <div className="fixed z-[9999] top-0 left-0 w-full">
      <div className="bg-black/60 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top duration-1000 ease-out relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>

        <header className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative z-10">
          <Link href="/" className="flex-shrink-0 animate-in fade-in duration-1000 delay-100">
            <Logo className="w-[140px] xs:w-[180px] sm:w-[240px] lg:w-[280px] transition-all hover:scale-105 duration-700 ease-out" />
          </Link>

          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-0.5 sm:gap-6 mr-2 sm:mr-0">
            <EmailLink
              email={NAP.email}
              className="text-[10px] xs:text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors"
              showIcon
            />
            <PhoneLink
              phoneNumber="+33745103015"
              displayNumber="07 45 10 30 15"
              className="text-[10px] xs:text-xs sm:text-sm font-medium text-white/70 hover:text-white transition-colors"
              showIcon
            />
          </div>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {primaryNav.map((item, index) => {
              const isContact = item.label === "Contact"
              const hasChildren = item.children && item.children.length > 0

              return (
                <div
                  key={item.label}
                  className="animate-in fade-in duration-1000 group"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  {hasChildren ? (
                    <NavigationDropdown label={item.label} items={item.children} />
                  ) : (
                    <InteractiveLink
                      className={`text-base xl:text-lg font-semibold transition-all duration-500 whitespace-nowrap relative ${
                        isContact
                          ? "border-2 border-white text-white px-5 py-2 rounded-md hover:bg-white/10 hover:scale-105"
                          : "text-white/80 hover:text-white"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                      {!isContact && (
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-white/0 via-white to-white/0 transition-all duration-500 group-hover:w-full"></span>
                      )}
                    </InteractiveLink>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="lg:hidden animate-in fade-in duration-1000 delay-300">
            <MobileMenu navItems={primaryNav} />
          </div>
        </header>
      </div>
    </div>
  )
}
