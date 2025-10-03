import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { ParticleProvider } from "@/components/particle-context"
import { CookieBanner } from "@/components/cookie-banner"
import { BASE_URL } from "@/lib/site-structure"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Skal Ventures",
  url: BASE_URL,
  logo: new URL("/placeholder-logo.png", BASE_URL).toString(),
  sameAs: [] as string[],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Skal Ventures",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?s={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
}

export const metadata: Metadata = {
  title: "AI Agency - Intelligence Artificielle",
  description: "Agence spécialisée en intelligence artificielle et solutions innovantes",
  generator: "v0.app",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Skal Ventures",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr-FR" className="dark">
      <head>
        <link
          rel="preload"
          href="/fonts/HelveticaNeue-55Roman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HelveticaNeue-75Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ParticleProvider>
          {children}
          <CookieBanner />
        </ParticleProvider>
        <Script id="structured-data-organization" type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="structured-data-website" type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </Script>
      </body>
    </html>
  )
}
