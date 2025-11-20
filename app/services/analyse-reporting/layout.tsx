import type React from "react"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Tableaux de bord & KPIs en temps réel | Pilotage décisionnel TPE/PME",
  path: "/services/analyse-reporting",
  description:
    "Tableaux de bord simples, fiables et connectés à vos outils. Pilotez l'activité en temps réel sans passer des heures dans Excel. Diagnostic et devis sous 48h.",
})

export default function AnalyseReportingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
