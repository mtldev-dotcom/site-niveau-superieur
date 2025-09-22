import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Niveau Supérieur Construction",
  description:
    "Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.",
  alternates: {
    canonical: "https://niveausuperieur.ca/confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité | Niveau Supérieur Construction",
    description:
      "Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.",
    url: "https://niveausuperieur.ca/confidentialite",
  },
};

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h1 className="heading-xl text-white mb-2">Politique de confidentialité</h1>
          <p className="text-muted max-w-3xl">
            Dernière mise à jour&nbsp;: {new Date().toLocaleDateString("fr-CA")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom prose prose-invert max-w-none">
          <p className="text-muted">
            Chez Niveau Supérieur Construction, nous accordons une grande importance à la protection
            de vos informations personnelles. Cette politique décrit les types de données que nous
            collectons, la manière dont nous les utilisons et les mesures que nous prenons pour les
            protéger.
          </p>

          <h2 className="heading-md text-theme mt-10">Données collectées</h2>
          <ul className="list-disc pl-6 text-muted">
            <li>Informations d&#39;identification (nom, prénom)</li>
            <li>Coordonnées (courriel, téléphone)</li>
            <li>Informations liées à votre projet transmises via nos formulaires</li>
            <li>Données d&#39;usage du site (analytique agrégée)</li>
          </ul>

          <h2 className="heading-md text-theme mt-10">Utilisation des données</h2>
          <p className="text-muted">
            Nous utilisons vos informations pour répondre à vos demandes, préparer des soumissions,
            améliorer nos services et communiquer avec vous au sujet de votre projet.
          </p>

          <h2 className="heading-md text-theme mt-10">Partage des données</h2>
          <p className="text-muted">
            Nous ne vendons pas vos données. Elles peuvent être partagées avec des fournisseurs
            de services strictement nécessaires (hébergement, messagerie) sous engagements de
            confidentialité.
          </p>

          <h2 className="heading-md text-theme mt-10">Sécurité</h2>
          <p className="text-muted">
            Nous mettons en place des mesures organisationnelles et techniques raisonnables afin de
            protéger vos informations contre l&#39;accès, l&#39;utilisation ou la divulgation non autorisés.
          </p>

          <h2 className="heading-md text-theme mt-10">Vos droits</h2>
          <p className="text-muted">
            Vous pouvez demander l&#39;accès, la rectification ou la suppression de vos informations
            personnelles en nous écrivant à&nbsp;
            <a className="text-primary underline" href="mailto:info@niveausuperieur.ca">
              info@niveausuperieur.ca
            </a>.
          </p>

          <h2 className="heading-md text-theme mt-10">Contact</h2>
          <p className="text-muted">
            Pour toute question relative à cette politique, contactez-nous à&nbsp;
            <a className="text-primary underline" href="mailto:info@niveausuperieur.ca">
              info@niveausuperieur.ca
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
