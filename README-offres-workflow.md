# Workflow rapide pages offres

Objectif: sortir une page offre complète (visuel + SEO + LLM) beaucoup plus vite, sans casser la DA.

## 1) Générer le squelette

```bash
pnpm gen:offre \
  --slug pilotage-mise-en-oeuvre-projet-industriel \
  --key pilotage \
  --component OffrePilotagePage \
  --title "Pilotage de mise en œuvre de projet" \
  --support "Faire avancer le projet avec méthode, coordination et continuité." \
  --meta-title "Pilotage de mise en œuvre de projet | AEGENS" \
  --meta-description "AEGENS accompagne l’industrie, la logistique et le retail dans le pilotage de mise en œuvre, la coordination des acteurs et le suivi structuré des projets."
```

Le fichier est créé dans `components/site/offres-<key>-page.tsx`.

## 2) Brancher la route

Ouvrir `app/offres/[slug]/page.tsx` puis ajouter l’entrée dans `CUSTOM_OFFRES`:
- `slug`
- `component`
- `metaTitle`
- `metaDescription`

## 3) Remplir le contenu

Remplir la page avec le texte final:
- Hero (H1, phrase d’appui, intro, CTA)
- blocs sections en alternance (texte, cartes, liste, bloc statutaire)
- liens internes (offre connexe, méthode, cas clients, ressources, contact)
- CTA final

## 4) Vérifier automatiquement

```bash
pnpm check:offres
pnpm build
```

`check:offres` valide les points structurels:
- 1 seul H1
- fil d’Ariane
- CTA contact
- lien méthode
- sections sémantiques
- maillage interne minimum

## 5) Règle de qualité

Ne pas réinventer la DA.
Optimiser surtout:
- lisibilité
- hiérarchie
- clarté métier
- maillage SEO/LLM
