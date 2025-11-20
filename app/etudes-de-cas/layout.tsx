import type React from "react"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Sécurité & conformité | RGPD, hébergement France, audit sécurité",
  path: "/etudes-de-cas",
  description:
    "Protection des données, conformité RGPD, hébergement souverain, audit sécurité. Solutions certifiées pour TPE/PME.",
})

export default function EtudesDecasLayout({ children }: { children: React.ReactNode }) {
  return children
}
