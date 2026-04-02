import type React from "react"
import Image from "next/image"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <div className={`flex items-center ${className || ""}`} {...props}>
      <Image
        src="/logo-global.png"
        alt="Aegens Logo"
        width={512}
        height={512}
        className="w-auto h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
      />
    </div>
  )
}
