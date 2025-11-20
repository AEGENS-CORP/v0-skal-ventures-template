import { AssistantIAMetierClient } from "./_components/AssistantIAMetierClient"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Assistants métier IA & RAG | Accès instantané à vos données",
  path: "/services/assistant-ia-metier",
  description:
    "Un point d'accès unique à vos documents, procédures et chiffres clés. Vos équipes posent une question en langage simple, l'assistant répond en quelques secondes avec les bonnes informations.",
})

export default function AssistantIAMetierPage() {
  return <AssistantIAMetierClient />
}
