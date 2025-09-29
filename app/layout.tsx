import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ParticleProvider } from "@/components/particle-context"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
})

export const metadata: Metadata = {
  title: "AI Agency - Intelligence Artificielle",
  description: "Agence spécialisée en intelligence artificielle et solutions innovantes",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-poppins antialiased`}
        suppressHydrationWarning
      >
        <ParticleProvider>{children}</ParticleProvider>
      </body>
    </html>
  )
}
