import type React from "react"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Intégrateur IA Niort | Automatisation PME Deux-Sèvres | Assistant IA & Reporting",
  path: "/ville/niort",
  description:
    "Intégrateur IA pour TPE/PME à Niort. Automatisation des processus, assistant IA métier, reporting temps réel, audit 360°. Visite 60–90 min. Plan d'action et devis sous 48 h.",
})

export default function NiortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
