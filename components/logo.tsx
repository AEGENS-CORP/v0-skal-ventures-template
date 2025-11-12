import type React from "react"
import Image from "next/image"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={`flex items-center ${className || ""}`} {...props}>
      <Image
        src="/gens-logo.png"
        alt="GENS Logo"
        width={500}
        height={250}
        className="w-auto h-8 sm:h-10 md:h-12 lg:h-14 object-contain"
      />
    </div>
  )
}
