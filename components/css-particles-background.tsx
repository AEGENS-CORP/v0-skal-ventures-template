"use client"

export function CSSParticlesBackground() {
  return (
    <div className="css-particles-wrapper">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="css-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 20}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  )
}
