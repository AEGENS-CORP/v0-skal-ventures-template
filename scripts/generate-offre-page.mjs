#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"

function parseArgs(argv) {
  const result = {}
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i]
    if (!token.startsWith("--")) continue
    const key = token.slice(2)
    const next = argv[i + 1]
    if (!next || next.startsWith("--")) {
      result[key] = "true"
      continue
    }
    result[key] = next
    i += 1
  }
  return result
}

function toPascalCase(input) {
  return input
    .split(/[-_\s]+/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
}

const args = parseArgs(process.argv.slice(2))

const slug = args.slug
const title = args.title
const component = args.component || `Offre${toPascalCase(args.key || slug || "Nouvelle")}Page`
const key = (args.key || slug || "nouvelle-offre").toLowerCase()
const support = args.support || "Phrase d'appui à compléter."
const metaTitle = args["meta-title"] || `${title || "Titre à compléter"} | AEGENS`
const metaDescription = args["meta-description"] || "Meta description à compléter."

if (!slug || !title) {
  console.error(
    "Usage: pnpm gen:offre --slug <slug> --title \"Titre\" [--component OffreXPage] [--key x] [--support \"...\"] [--meta-title \"...\"] [--meta-description \"...\"]",
  )
  process.exit(1)
}

const projectRoot = process.cwd()
const outFile = path.join(projectRoot, "components", "site", `offres-${key}-page.tsx`)

if (fs.existsSync(outFile)) {
  console.error(`Fichier déjà existant: ${outFile}`)
  process.exit(1)
}

const template = `import Link from "next/link"
import {
  OffreCardsGrid,
  OffreFinalCta,
  OffreHero,
  OffrePageLayout,
  OffreSection,
  SeoInlineLink,
} from "@/components/site/offre-page-kit"

const whenCards = [
  { title: "Situation 1", text: "Texte à compléter." },
  { title: "Situation 2", text: "Texte à compléter." },
  { title: "Situation 3", text: "Texte à compléter." },
]

export const ${component}Meta = {
  title: "${metaTitle}",
  description: "${metaDescription}",
}

export function ${component}() {
  return (
    <OffrePageLayout
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Offres", href: "/offres" },
        { label: "${title}" },
      ]}
    >
      <OffreHero
        title="${title}"
        supportText="${support}"
        paragraphs={[
          "Paragraphe d'introduction 1 à compléter.",
          "Paragraphe d'introduction 2 à compléter.",
        ]}
        asideTitle="Finalité"
        asideItems={[
          "Point clé 1",
          "Point clé 2",
          "Point clé 3",
          "Point clé 4",
        ]}
        primaryCta={{ label: "Échanger sur votre situation", href: "/contact/" }}
        secondaryCta={{ label: "Voir notre méthode", href: "/methode/" }}
      />

      <OffreSection id="${key}-core" title="Section principale" intro="Intro de section à compléter.">
        <div className="space-y-4 ae-text text-base sm:text-lg leading-relaxed">
          <p>Texte éditorial SEO/LLM à compléter.</p>
          <p>
            Ajouter des liens internes utiles comme{" "}
            <SeoInlineLink href="/offres/cadrage-projet-industriel-cahier-des-charges/">
              cette page offre connexe
            </SeoInlineLink>.
          </p>
        </div>
      </OffreSection>

      <OffreSection id="${key}-when" title="Quand intervenir" intro="Texte d'introduction à compléter.">
        <OffreCardsGrid cards={whenCards} columns={3} />
      </OffreSection>

      <OffreSection id="${key}-more" title="Et ensuite">
        <p className="ae-text text-base sm:text-lg leading-relaxed">
          Pour aller plus loin :{" "}
          <SeoInlineLink href="/methode/">voir notre méthode</SeoInlineLink>,{" "}
          <SeoInlineLink href="/cas-clients/">consulter les cas clients</SeoInlineLink> et{" "}
          <SeoInlineLink href="/ressources/">voir les ressources</SeoInlineLink>.
        </p>
      </OffreSection>

      <OffreFinalCta
        id="${key}-cta-final"
        title="Besoin de clarifier votre situation ?"
        text="Nous accompagnons les entreprises qui doivent structurer leurs décisions et sécuriser l'exécution."
        primaryCta={{ label: "Échanger sur votre situation", href: "/contact/" }}
        secondaryCta={{ label: "Voir notre méthode", href: "/methode/" }}
      />
    </OffrePageLayout>
  )
}
`

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, template, "utf8")

console.log(`✅ Fichier généré: ${outFile}`)
console.log("")
console.log("➡ Étapes suivantes dans app/offres/[slug]/page.tsx :")
console.log(`1) Importer: { ${component}, ${component}Meta } depuis "@/components/site/offres-${key}-page"`)
console.log(`2) Ajouter dans CUSTOM_OFFRES le slug "${slug}" avec:`)
console.log(`   - component: ${component}`)
console.log(`   - metaTitle: ${component}Meta.title`)
console.log(`   - metaDescription: ${component}Meta.description`)
