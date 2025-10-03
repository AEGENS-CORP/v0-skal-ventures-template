# Page Contact Aegens & Envoi d'e-mail

Cette fiche explique comment exploiter la nouvelle page « Contact » et le service d'envoi d'email associé.

## Stack rapide

- **Front** : composant Next.js (`app/contact/page.tsx`) avec Tailwind CSS + styles `ae-` personnalisés.
- **API** : route `POST /api/contact` (`app/api/contact/route.ts`) qui envoie un e-mail via un transporteur compatible Nodemailer.
- **Transport SMTP** : implémentation locale (`lib/vendor/nodemailer.ts`) respectant l'API de `nodemailer.createTransport` afin de garantir le fonctionnement dans les environnements sans accès direct au registre NPM.

## Installation & commandes

1. Installez les dépendances du projet :
   ```bash
   pnpm install
   ```
   > Si vous utilisez `npm` ou `yarn`, adaptez la commande (`npm install`, `yarn`).

2. Démarrez le serveur de développement :
   ```bash
   pnpm dev
   ```

3. L'application est accessible sur [http://localhost:3000](http://localhost:3000). Naviguez vers `/contact` pour tester l'interface.

## Variables d'environnement SMTP

Définissez les variables suivantes (fichier `.env.local` recommandé) pour que l'envoi d'e-mail fonctionne :

| Variable | Description | Exemple |
| --- | --- | --- |
| `SMTP_HOST` | Hôte du serveur SMTP (obligatoire) | `smtp.exemple.com` |
| `SMTP_PORT` | Port SMTP. Si omis : `465` (secure) ou `587` (startTLS). | `465` |
| `SMTP_SECURE` | `true` pour une connexion TLS directe, `false` pour STARTTLS. | `true` |
| `SMTP_USER` | Identifiant SMTP (optionnel si serveur ouvert). | `apikey` |
| `SMTP_PASS` | Mot de passe ou clé API SMTP. | `super-secret` |
| `SMTP_FROM` | Adresse d'expédition affichée. | `"Aegens" <no-reply@aegens.com>` |
| `SMTP_CLIENT_NAME` | Nom du client présenté lors de la commande `EHLO`. | `aegens.com` |
| `SMTP_REJECT_UNAUTHORIZED` | `true` pour refuser les certificats TLS non valides (défaut : `false`). | `true` |

> À défaut, l'adresse de destination est toujours `contact@aegens.com`. Les champs du formulaire sont facultatifs : le mail inclura uniquement les données fournies par l'utilisateur ainsi que le contexte technique (User-Agent, origine, horodatage ISO).

## API `POST /api/contact`

- **Entrée** : JSON `{ nameCompany?, email?, subject?, message? }`. Tous les champs sont optionnels.
- **Sorties** :
  - `200` `{ success: true, messageId }` si l'e-mail est accepté par le serveur SMTP.
  - `400` en cas de JSON invalide.
  - `502` si le serveur SMTP est indisponible.

La route normalise le sujet, supprime les retours chariot dans les champs sensibles et ajoute des métadonnées (origine, user-agent, horodatage) dans le corps du message.

## Personnalisation UI

Les effets visuels de la page sont gérés dans `styles/ae-overrides.css` via des classes préfixées `ae-contact-*`. Pour ajuster :

- **Arrière-plan animé** : section `.ae-contact-background` et `.ae-contact-orb`.
- **Formulaire & entrées** : classes `.ae-contact-form`, `.ae-contact-input`, `.ae-contact-button`.
- **Feedback** : classes `.ae-contact-toast` et `.ae-contact-toast--error`.

## Tests rapides

1. Configurez vos variables SMTP.
2. Lancez `pnpm dev`.
3. Remplissez le formulaire `/contact` (même un simple mot suffit) et cliquez sur **Envoyer**.
4. Vérifiez votre boîte `contact@aegens.com` ou les logs SMTP pour confirmer la réception.

En cas d'échec, l'API renvoie un message JSON clair et l'interface affiche un toast d'erreur animé.
