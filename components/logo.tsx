import type React from "react"

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" {...props}>
        <path d="M16 2L24 10L16 18L8 10L16 2Z" fill="url(#gradient1)" />
        <path d="M16 14L24 22L16 30L8 22L16 14Z" fill="url(#gradient2)" />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-lg font-light text-white tracking-wide">Aegens</span>
    </div>
  )
}
