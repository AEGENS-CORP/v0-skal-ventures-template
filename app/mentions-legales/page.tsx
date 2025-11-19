import Link from "next/link"
import { SimplePageLayout } from "@/components/simple-page-layout"
import { createPageMetadata } from "@/lib/metadata"

export const metadata = createPageMetadata({
  title: "Mentions légales - Aegens",
  path: "/mentions-legales",
  description: "Mentions légales, informations juridiques et obligations RGPD d'Aegens.",
})

export default function MentionsLegalesPage() {
  return (
    <SimplePageLayout
      title="Mentions légales"
      description="Informations légales et réglementaires"
      breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 1) Éditeur du site */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">1) Éditeur du site</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              <strong>Aegens</strong>
            </p>
            <p>Forme juridique : SAS</p>
            <p>Siège social : 18 Rue Ampère – ZI La Folie Sud, 85310 La Chaize-le-Vicomte, France</p>
            <p>Téléphone : 07 45 10 30 15</p>
            <p>E-mail : contact@aegens.com</p>
            <p className="mt-4">Site destiné à une clientèle B2B (professionnels).</p>
          </div>
        </section>

        {/* 2) Hébergeur */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">2) Hébergeur</h2>
          <p className="text-muted-foreground">
            Vercel Inc. – 440 N Barranca Ave #4133, Covina, CA 91723, USA – vercel.com – support@vercel.com
          </p>
        </section>

        {/* 3) Propriété intellectuelle */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">3) Propriété intellectuelle</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              L'ensemble du site (textes, graphismes, logos, icônes, médias, structures, code) est protégé par le droit
              d'auteur et les droits voisins.
            </p>
            <p>© Aegens – Tous droits réservés.</p>
            <p>
              Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sans autorisation
              écrite préalable est interdite. Les marques et contenus tiers cités restent la propriété de leurs
              titulaires.
            </p>
          </div>
        </section>

        {/* 4) Accès et usage du site */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">4) Accès et usage du site</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>Accès gratuit hors coûts de télécommunication.</p>
            <p>Usage strictement professionnel.</p>
            <p>Aegens peut suspendre, modifier ou retirer le site sans préavis pour maintenance ou sécurité.</p>
            <p>L'utilisateur s'engage à ne pas porter atteinte au bon fonctionnement du site ni à sa sécurité.</p>
          </div>
        </section>

        {/* 5) Liens externes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">5) Liens externes</h2>
          <p className="text-muted-foreground">
            Les liens sortants sont fournis pour convenance. Aegens n'exerce aucun contrôle sur les contenus tiers et
            décline toute responsabilité quant à leur disponibilité ou leur exactitude.
          </p>
        </section>

        {/* 6) Données personnelles (RGPD) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">6) Données personnelles (RGPD)</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">6.1 Responsable de traitement</h3>
              <p className="text-muted-foreground">
                Aegens – 18 Rue Ampère – ZI La Folie Sud, 85310 La Chaize-le-Vicomte – contact@aegens.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6.2 Finalités</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Gestion des demandes (formulaire, téléphone, e-mail, prise de rendez-vous).</li>
                <li>Prospection B2B et suivi commercial lié à l'activité d'Aegens.</li>
                <li>Prestation et support aux clients.</li>
                <li>Sécurité, prévention de la fraude et continuité de service.</li>
                <li>Mesure d'audience (voir Cookies/Analytics).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6.3 Bases légales</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Exécution de mesures précontractuelles ou du contrat.</li>
                <li>Intérêt légitime d'Aegens à développer son activité B2B et sécuriser ses services.</li>
                <li>Consentement lorsque requis (ex. newsletters, cookies non essentiels).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6.4 Données traitées</h3>
              <p className="text-muted-foreground">
                Identité, coordonnées professionnelles, fonctions, contenus échangés, logs techniques, données de
                navigation (cf. Cookies). Aegens ne collecte pas de données sensibles au sens du RGPD.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6.5 Destinataires</h3>
              <p className="text-muted-foreground">
                Équipe interne Aegens habilitée. Sous-traitants techniques strictement nécessaires (hébergement,
                e-mailing, visioconférence, CRM), encadrés par accords de traitement (art. 28 RGPD).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6.6 Durées de conservation</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Prospects B2B : 3 ans après dernier contact.</li>
                <li>Clients et dossiers : durée du contrat + 5 ans (sauf obligations plus longues).</li>
                <li>Journaux techniques : 6 à 12 mois.</li>
                <li>Cookies/mesure d'audience : voir politique Cookies.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6.7 Transferts hors UE</h3>
              <p className="text-muted-foreground">
                Le cas échéant (ex. hébergeur / e-mailing non UE), Aegens met en place des garanties appropriées
                (clauses contractuelles types, mesures complémentaires). Détails sur demande.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6.8 Vos droits</h3>
              <p className="text-muted-foreground">
                Accès, rectification, effacement, limitation, opposition, portabilité, directives post-mortem. Demande à
                : privacy@aegens.com (ou contact@aegens.com) + pièce d'identité si nécessaire. Réclamation : CNIL –
                cnil.fr.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">6.9 Délégué à la protection des données (DPO)</h3>
              <p className="text-muted-foreground">Point de contact : privacy@aegens.com</p>
            </div>
          </div>
        </section>

        {/* 7) Cookies et mesure d'audience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">7) Cookies et mesure d'audience</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>
              Le site privilégie une mesure d'audience sans cookies et conforme CNIL (ex. Plausible/Matomo en mode
              exempté).
            </p>
            <p>
              Si des cookies non essentiels sont déposés, ils ne le seront qu'après consentement via un bandeau
              conforme.
            </p>
            <p>
              Vous pouvez gérer vos préférences à tout moment dans la page{" "}
              <Link href="/politique-de-confidentialite" className="text-primary">
                Politique de cookies
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 8) Sécurité */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">8) Sécurité</h2>
          <p className="text-muted-foreground">
            Mesures techniques et organisationnelles raisonnables : chiffrement en transit, contrôle d'accès par rôles,
            cloisonnement des environnements, sauvegardes et tests de reprise. Aegens applique le principe du moindre
            privilège et révise régulièrement les accès.
          </p>
        </section>

        {/* 9) Responsabilités */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">9) Responsabilités</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>Les informations sont fournies "en l'état", à titre général.</p>
            <p>
              Aegens ne peut être tenue responsable des dommages indirects ou immatériels résultant de l'usage du site.
            </p>
            <p>Pour toute prestation, seules les stipulations contractuelles convenues prévalent.</p>
          </div>
        </section>

        {/* 10) Droit applicable – Juridiction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">10) Droit applicable – Juridiction</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>Droit français.</p>
            <p>Compétence exclusive des tribunaux de La Roche-sur-Yon (sous réserve des règles impératives).</p>
            <p>Médiation de la consommation : non applicable (site et offres destinés aux professionnels).</p>
          </div>
        </section>

        {/* 11) Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">11) Contact</h2>
          <p className="text-muted-foreground">
            Pour toute question sur le site ou son contenu : contact@aegens.com – 07 45 10 30 15.
          </p>
        </section>

        {/* 12) Crédits */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">12) Crédits</h2>
          <p className="text-muted-foreground">Design & développement : Aegens</p>
        </section>

        {/* 13) Mise à jour des mentions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">13) Mise à jour des mentions</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>Aegens peut actualiser la présente page à tout moment.</p>
            <p>
              <strong>Dernière mise à jour : 11/10/2025</strong>
            </p>
          </div>
        </section>

        {/* Liens utiles */}
        <section className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap gap-4">
            <Link href="/politique-de-confidentialite" className="text-primary">
              Politique de confidentialité
            </Link>
            <Link href="/contact" className="text-primary">
              Contact
            </Link>
            <Link href="/plan-du-site" className="text-primary">
              Plan du site
            </Link>
          </div>
        </section>
      </div>
    </SimplePageLayout>
  )
}
