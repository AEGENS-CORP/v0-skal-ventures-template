import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"
import { InteractiveLink } from "./interactive-link"

export const Header = () => {
  return (
    <div className="fixed z-[9999] top-0 left-0 w-full">
      <div className="bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="bg-gradient-to-b from-black/60 via-black/40 to-transparent h-1"></div>
        <header className="flex items-center justify-between max-w-4xl mx-auto px-8 py-0.5 -mt-1 relative z-10 font-sentient">
          <Link href="/" className="flex-shrink-0">
            <Logo className="w-[240px] sm:w-[280px]" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: "Services", href: "#services" },
              { name: "Expertise", href: "#expertise" },
              { name: "Projets", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <InteractiveLink
                className="text-lg font-bold text-white/80 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
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
    </div>
  )
}
