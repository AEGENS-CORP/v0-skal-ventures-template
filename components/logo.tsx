import type React from "react"
import Image from "next/image"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={`flex items-center gap-4 ${className || ""}`} {...props}>
      <Image
        src="/logo-nouveau.png"
        alt="Logo"
        width={120}
        height={120}
        loading="lazy"
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
      />
      <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-wide">Aegens</span>
    </div>
  )
}
