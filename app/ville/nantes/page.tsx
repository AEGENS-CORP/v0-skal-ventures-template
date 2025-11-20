import { createPageMetadata } from "@/lib/metadata"
import NantesClientPage from "./NantesClientPage"

export const metadata = createPageMetadata({
  title: "Intégrateur IA Nantes | Automatisation PME Loire-Atlantique | Assistant IA & Reporting",
  path: "/ville/nantes",
  description:
    "Intégrateur IA pour TPE/PME à Nantes. Automatisation des processus, assistant IA métier, reporting temps réel, audit 360°. Visite 60–90 min. Plan d'action et devis sous 48 h.",
})

export default function NantesPage() {
  return <NantesClientPage />
}
