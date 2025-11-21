import { createPageMetadata } from "@/lib/metadata"
import { AProposClient } from "./a-propos-client"

export const metadata = createPageMetadata({
  title: "À propos d'Aegens | Ingénierie IA & Automatisation pour TPE/PME",
  path: "/a-propos",
  description:
    "Aegens : Solutions d'ingénierie IA et automatisation sur mesure pour TPE/PME. ROI rapide, systèmes fiables, gains mesurables au quotidien.",
})

export default function AProposPage() {
  return <AProposClient />
}
