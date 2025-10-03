import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { InteractiveLink } from "./interactive-link"
import { primaryNav } from "@/lib/navigation"

export const Header = () => {
  return (
    <div className="fixed z-[9999] top-0 left-0 w-full">
      <div className="bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="bg-gradient-to-b from-black/60 via-black/40 to-transparent h-1"></div>
        <header className="flex items-center justify-between max-w-4xl mx-auto px-8 py-0.5 -mt-1 relative z-10 font-sans">
          <Link href="/" className="flex-shrink-0">
            <Logo className="w-[240px] sm:w-[280px]" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {primaryNav.map((item) => (
              <div key={item.label} className="relative group">
                <InteractiveLink
                  className="text-lg font-semibold text-white/80 hover:text-white transition-colors duration-200"
                  href={item.href}
                >
                  {item.label}
                </InteractiveLink>
                {item.children && (
                  <div className="absolute left-0 mt-4 hidden w-max min-w-[240px] rounded-2xl border border-white/10 bg-black/90 p-4 shadow-2xl group-hover:block group-focus-within:block">
                    <div className="grid max-h-[420px] gap-2 overflow-y-auto pr-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-sm text-white/80 hover:text-white transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="lg:hidden">
            <MobileMenu navItems={primaryNav} />
          </div>
        </header>
      </div>
    </div>
  )
}
