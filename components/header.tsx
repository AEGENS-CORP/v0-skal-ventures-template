import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { InteractiveLink } from "./interactive-link"

export const Header = () => {
  return (
    <div className="fixed z-[9999] top-0 left-0 w-full bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm">
      <header className="flex items-center justify-between max-w-6xl mx-auto px-6 py-3">
        <Link href="/" className="flex-shrink-0">
          <Logo className="w-[70px]" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {[
            { name: "Services", href: "#services" },
            { name: "Expertise", href: "#expertise" },
            { name: "Projets", href: "#projects" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <InteractiveLink
              className="text-sm font-bold text-white/90 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </InteractiveLink>
          ))}
        </nav>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </header>
    </div>
  )
}
