import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Politique de confidentialité — Aegens",
  path: "/politique-de-confidentialite",
  description:
    "Politique de confidentialité conforme RGPD d'Aegens. Informations sur la collecte, l'utilisation et la protection de vos données personnelles.",
})

export default function PolitiqueDeConfidentialitePage() {
  return (
    <SimplePageLayout
      title="Politique de confidentialité"
      description="Dernière mise à jour : 01/01/2025"
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Politique de confidentialité" }]}
    >
      <section className="ae-section">
        <h2>1. Qui est le responsable de traitement ?</h2>
        <div className="space-y-2">
          <p>
            <strong>Aegens</strong>
          </p>
          <p>Forme juridique : SAS</p>
          <p>Siège : 18 Rue Ampère – ZI La Folie Sud, 85310 La Chaize-le-Vicomte, France</p>
          <p>E-mail : privacy@aegens.com</p>
          <p>SIREN : [À compléter]</p>
          <p>Directeur de la publication : [À compléter]</p>
        </div>
      </section>

      <section className="ae-section">
        <h2>2. À quoi sert cette politique ?</h2>
        <p>
          Informer les personnes sur la façon dont Aegens collecte, utilise, partage et protège les données personnelles
          dans le cadre :
        </p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>du site web et de ses formulaires,</li>
          <li>de la relation commerciale B2B (prospects/clients/partenaires),</li>
          <li>de l'exécution des prestations, du support et de la facturation,</li>
          <li>de la mesure d'audience et de la sécurité du site.</li>
        </ul>
      </section>

      <section className="ae-section">
        <h2>3. Quelles données collectons-nous ?</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>
            <strong>Identification et contact pro :</strong> nom, prénom, fonction, société, e-mail pro, téléphone pro.
          </li>
          <li>
            <strong>Contenu échangé :</strong> messages, pièces jointes, brief, devis, commandes, tickets.
          </li>
          <li>
            <strong>Données d'usage :</strong> logs techniques, pages consultées, date/heure, user-agent, IP
            (pseudonymisée si possible).
          </li>
          <li>
            <strong>Facturation/contrats :</strong> adresse de facturation, SIRET, TVA, RIB, références de paiement.
          </li>
          <li>
            <strong>Visioconférence/RDV :</strong> date/heure, lien, participants.
          </li>
          <li>
            <strong>Recrutement (si applicable) :</strong> CV, lettre, échanges.
          </li>
        </ul>
        <p className="mt-4">Aegens ne collecte pas de données sensibles au sens du RGPD.</p>
      </section>

      <section className="ae-section">
        <h2>4. Pourquoi les collectons-nous ? (finalités et bases légales)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-2 border-white/30">
            <thead>
              <tr className="bg-white/20">
                <th className="border-2 border-white/30 p-3 text-left">Finalité</th>
                <th className="border-2 border-white/30 p-3 text-left">Exemple</th>
                <th className="border-2 border-white/30 p-3 text-left">Base légale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-white/30 p-3">Répondre aux demandes et établir des devis</td>
                <td className="border-2 border-white/30 p-3">Formulaire contact / appel</td>
                <td className="border-2 border-white/30 p-3">Mesures précontractuelles</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Exécuter le contrat et assurer le support/SLA</td>
                <td className="border-2 border-white/30 p-3">Livraison, runbook, tickets</td>
                <td className="border-2 border-white/30 p-3">Contrat</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Prospection B2B et développement commercial</td>
                <td className="border-2 border-white/30 p-3">E-mails LinkedIn/CRM ciblés</td>
                <td className="border-2 border-white/30 p-3">Intérêt légitime</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Prise de rendez-vous</td>
                <td className="border-2 border-white/30 p-3">Calendly/agenda</td>
                <td className="border-2 border-white/30 p-3">Intérêt légitime</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Envoi d'informations sur nos services</td>
                <td className="border-2 border-white/30 p-3">Newsletter (si utilisée)</td>
                <td className="border-2 border-white/30 p-3">Consentement</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Facturation, comptabilité</td>
                <td className="border-2 border-white/30 p-3">Factures, avoirs, écritures</td>
                <td className="border-2 border-white/30 p-3">Obligation légale</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Sécurité, prévention fraude, journalisation</td>
                <td className="border-2 border-white/30 p-3">Logs, contrôle d'accès</td>
                <td className="border-2 border-white/30 p-3">Intérêt légitime</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Mesure d'audience conforme CNIL</td>
                <td className="border-2 border-white/30 p-3">Plausible/Matomo exempté</td>
                <td className="border-2 border-white/30 p-3">Intérêt légitime</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="ae-section">
        <h2>5. D'où proviennent les données ?</h2>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Directement de vous (formulaire, e-mail, téléphone, RDV, contrat).</li>
          <li>De vos outils si vous nous donnez accès (ex. CRM/ERP) dans le cadre d'une prestation.</li>
          <li>De sources professionnelles publiques ou autorisées (site de l'entreprise, LinkedIn pro).</li>
        </ul>
      </section>

      <section className="ae-section">
        <h2>6. Qui peut y accéder ?</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>Équipe Aegens habilitée, selon le principe du moindre privilège.</li>
          <li>
            Sous-traitants nécessaires (contrats Art. 28 RGPD) :
            <ul className="ml-6 mt-2 space-y-1 list-disc">
              <li>Hébergement/CDN/DNS : Vercel / OVH / Cloudflare</li>
              <li>E-mailing/SMTP : [À compléter]</li>
              <li>Visioconférence : Google Meet / Microsoft Teams</li>
              <li>CRM : [À compléter]</li>
              <li>Mesure d'audience : Plausible / Matomo</li>
              <li>Formulaires/prise de RDV : Calendly / Tally</li>
              <li>Helpdesk : [À compléter]</li>
              <li>Stockage documentaire : Google Drive / Microsoft OneDrive</li>
            </ul>
          </li>
        </ul>
        <p className="mt-4">La liste exacte est disponible sur demande et peut évoluer.</p>
      </section>

      <section className="ae-section">
        <h2>7. Où sont traitées les données ? Transferts hors UE</h2>
        <p>
          Aegens privilégie l'hébergement en Union européenne. Si un prestataire situe des traitements hors UE (ex.
          États-Unis), Aegens met en place des garanties appropriées : Clauses Contractuelles Types (CCT), mesures
          complémentaires, évaluations de transfert. Copie des garanties sur demande : privacy@aegens.com.
        </p>
      </section>

      <section className="ae-section">
        <h2>8. Combien de temps conservons-nous les données ?</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-2 border-white/30">
            <thead>
              <tr className="bg-white/20">
                <th className="border-2 border-white/30 p-3 text-left">Catégorie</th>
                <th className="border-2 border-white/30 p-3 text-left">Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-white/30 p-3">Prospects B2B</td>
                <td className="border-2 border-white/30 p-3">3 ans après le dernier contact</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Données client liées aux prestations</td>
                <td className="border-2 border-white/30 p-3">Durée du contrat + 5 ans</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Pièces comptables (factures, écritures)</td>
                <td className="border-2 border-white/30 p-3">10 ans (obligation légale)</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Tickets/support</td>
                <td className="border-2 border-white/30 p-3">3 ans après clôture</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Logs techniques</td>
                <td className="border-2 border-white/30 p-3">6 à 12 mois</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Candidatures</td>
                <td className="border-2 border-white/30 p-3">2 ans après dernier contact</td>
              </tr>
              <tr>
                <td className="border-2 border-white/30 p-3">Newsletter</td>
                <td className="border-2 border-white/30 p-3">Jusqu'au désabonnement ou 3 ans d'inactivité</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="ae-section">
        <h2>9. Vos droits</h2>
        <p>Vous pouvez exercer à tout moment :</p>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside mt-4">
          <li>Accès, rectification, effacement,</li>
          <li>Limitation et opposition (notamment à la prospection),</li>
          <li>Portabilité (données fournies par vous et traitées automatiquement),</li>
          <li>Retrait du consentement (si base = consentement),</li>
          <li>Directives post-mortem.</li>
        </ul>
        <p className="mt-4">
          <strong>Contact :</strong> privacy@aegens.com (+ pièce d'identité si nécessaire).
        </p>
        <p className="mt-2">
          <strong>Réclamation :</strong> CNIL –{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            www.cnil.fr
          </a>
        </p>
      </section>

      <section className="ae-section">
        <h2>10. Sécurité</h2>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>Chiffrement en transit (HTTPS), segmentation des environnements.</li>
          <li>Contrôle d'accès par rôles, journalisation, révocation des accès.</li>
          <li>Sauvegardes et tests de reprise.</li>
          <li>Sensibilisation équipe et revues périodiques.</li>
        </ul>
        <p className="mt-4">Aegens exige des garanties comparables de ses sous-traitants.</p>
      </section>

      <section className="ae-section" id="cookies">
        <h2>11. Cookies et traceurs</h2>
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li>
            Mesure d'audience : préférence pour une solution exemptée de consentement (ex. Plausible/Matomo configuré
            CNIL).
          </li>
          <li>Cookies non essentiels (profilage, retargeting, etc.) : consentement préalable via bandeau conforme.</li>
          <li>Détails et paramétrage : voir la Politique Cookies (lien en footer).</li>
        </ul>
      </section>

      <section className="ae-section">
        <h2>12. Mineurs</h2>
        <p>Le site et l'offre s'adressent à un public professionnel. Aegens ne cible pas de mineurs.</p>
      </section>

      <section className="ae-section">
        <h2>13. Décisions automatisées</h2>
        <p>
          Aucune décision produisant des effets juridiques fondée exclusivement sur un traitement automatisé n'est prise
          via le site.
        </p>
      </section>

      <section className="ae-section">
        <h2>14. Réseaux sociaux, liens externes</h2>
        <p>
          Les interactions via réseaux sociaux ou sites tiers sont régies par leurs politiques. Aegens n'est pas
          responsable de leurs pratiques.
        </p>
      </section>

      <section className="ae-section">
        <h2>15. Sous-traitance chez le client</h2>
        <p>
          Dans le cadre d'une prestation, Aegens peut agir en sous-traitant des données de ses clients. Les droits,
          obligations, durées et mesures de sécurité sont alors définis dans un DPA/ATRT (Annexe de Traitement) signé
          avec le client.
        </p>
      </section>

      <section className="ae-section">
        <h2>16. DPO (si applicable)</h2>
        <p>Point de contact : privacy@aegens.com</p>
      </section>

      <section className="ae-section">
        <h2>17. Comment mettre à jour cette politique ?</h2>
        <p>
          Aegens peut modifier la présente politique à tout moment pour tenir compte des évolutions légales ou
          techniques. La date de mise à jour figure en tête. En cas de changement majeur, une information dédiée sera
          affichée sur le site.
        </p>
      </section>

      <section className="ae-section">
        <h2>Coordonnées utiles</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <strong>Responsable de traitement :</strong> Aegens, 18 Rue Ampère – ZI La Folie Sud, 85310 La
            Chaize-le-Vicomte – privacy@aegens.com
          </li>
          <li>
            <strong>Autorité de contrôle :</strong> CNIL – Service des Plaintes –{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              www.cnil.fr
            </a>
          </li>
        </ul>

        <div className="ae-section-links mt-8">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/contact">Nous contacter</Link>
        </div>
      </section>
    </SimplePageLayout>
  )
}
