#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const offersDir = path.join(root, "components", "site")
const files = fs
  .readdirSync(offersDir)
  .filter((file) => /^offres-.*-page\.tsx$/.test(file))
  .map((file) => path.join(offersDir, file))

if (files.length === 0) {
  console.log("Aucune page offre custom détectée.")
  process.exit(0)
}

const checks = [
  {
    label: "exactement 1 balise H1",
    test: (content) => (content.match(/<h1\b/g) || []).length === 1,
  },
  {
    label: "fil d'Ariane présent",
    test: (content) => /Breadcrumbs/.test(content),
  },
  {
    label: "CTA contact présent",
    test: (content) => /href=["']\/contact\/?["']/.test(content),
  },
  {
    label: "lien méthode présent",
    test: (content) => /href=["']\/methode\/?["']/.test(content),
  },
  {
    label: "sections sémantiques (>= 6)",
    test: (content) => (content.match(/<section\b/g) || []).length >= 6,
  },
  {
    label: "maillage interne (>= 4 liens internes)",
    test: (content) =>
      (content.match(/href=["']\/(offres|problematiques|cas-clients|ressources|modeles-checklists|expertises|secteurs|a-propos|faq|contact|methode)\/?[^"']*["']/g) || [])
        .length >= 4,
  },
]

let hasError = false

for (const file of files) {
  const content = fs.readFileSync(file, "utf8")
  const failed = checks.filter((check) => !check.test(content))
  if (failed.length > 0) {
    hasError = true
    console.error(`\n❌ ${path.relative(root, file)}`)
    for (const check of failed) {
      console.error(`   - ${check.label}`)
    }
  }
}

if (hasError) {
  console.error("\nVérification offres: échec.")
  process.exit(1)
}

console.log(`✅ Vérification offres: ${files.length} page(s) conforme(s).`)
