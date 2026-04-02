import type { ReactNode } from "react"

type HighlightTone = "title" | "text"

const KEYWORD_PATTERNS = [
  "fonctionnement opérationnel",
  "mise en œuvre",
  "cahier des charges",
  "diagnostic",
  "cadrage",
  "pilotage",
  "priorités",
  "exécution",
  "projets",
  "projet",
  "résultats",
  "résultat",
].sort((a, b) => b.length - a.length)

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

const pattern = KEYWORD_PATTERNS.map((entry) => escapeRegExp(entry)).join("|")
const splitRegex = new RegExp(`(${pattern})`, "gi")
const exactKeywordRegex = new RegExp(`^(?:${pattern})$`, "i")

export function highlightImportantWords(text: string, tone: HighlightTone = "text"): ReactNode {
  if (!text) {
    return text
  }

  const className = tone === "title" ? "ae-keyword-title" : "ae-keyword-inline"
  const maxHighlights = tone === "title" ? 2 : 1
  let highlightsCount = 0

  return text.split(splitRegex).map((part, index) => {
    if (exactKeywordRegex.test(part) && highlightsCount < maxHighlights) {
      highlightsCount += 1
      return (
        <span key={`${part}-${index}`} className={className}>
          {part}
        </span>
      )
    }

    return <span key={`plain-${index}`}>{part}</span>
  })
}
