import ServicesClientPage from "./services-client-page"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Services d'intégration IA et automatisation | Automatisation, Assistant IA, Reporting, Audit",
  path: "/services",
  description:
    "Nous concevons et déployons des solutions IA sur mesure pour TPE/PME : automatisation, assistants métier, reporting, audit. Objectif : moins de tâches manuelles, plus de productivité, ROI mesurable.",
})

export default function ServicesPage() {
  return <ServicesClientPage />
}
