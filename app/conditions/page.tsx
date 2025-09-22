/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | Niveau Supérieur Construction",
  description:
    "Lisez les conditions d'utilisation du site de Niveau Supérieur Construction, incluant les responsabilités, limitations et droits.",
  alternates: {
    canonical: "https://niveausuperieur.ca/conditions",
  },
  openGraph: {
    title: "Conditions d'utilisation | Niveau Supérieur Construction",
    description:
      "Conditions d'utilisation du site de Niveau Supérieur Construction.",
    url: "https://niveausuperieur.ca/conditions",
  },
};

export default function ConditionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h1 className="heading-xl text-white mb-2">Conditions d&#39;utilisation</h1>
          <p className="text-muted max-w-3xl">
            Dernière mise à jour&nbsp;: {new Date().toLocaleDateString("fr-CA")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom prose prose-invert max-w-none">
          <h2 className="heading-md text-theme mt-0">Acceptation des conditions</h2>
          <p className="text-muted">
            En accédant à ce site, vous acceptez d'être lié par ces conditions d'utilisation,
            l'ensemble des lois et règlements applicables, et convenez que vous êtes
            responsable du respect des lois locales applicables.
          </p>

          <h2 className="heading-md text-theme mt-10">Utilisation du contenu</h2>
          <p className="text-muted">
            Le contenu du site est fourni à titre informatif. Toute reproduction, distribution
            ou exploitation sans autorisation est interdite.
          </p>

          <h2 className="heading-md text-theme mt-10">Limitation de responsabilité</h2>
          <p className="text-muted">
            Nous mettons tout en œuvre pour maintenir des informations exactes, sans garantie
            explicite ou implicite. Niveau Supérieur Construction ne pourra être tenu responsable
            de dommages résultant de l'utilisation du site.
          </p>

          <h2 className="heading-md text-theme mt-10">Liens externes</h2>
          <p className="text-muted">
            Ce site peut contenir des liens vers des sites externes dont nous n'avons pas le
            contrôle. Nous ne sommes pas responsables de leur contenu.
          </p>

          <h2 className="heading-md text-theme mt-10">Modifications</h2>
          <p className="text-muted">
            Nous pouvons réviser ces conditions à tout moment. En utilisant ce site, vous acceptez
            d'être lié par la version alors en vigueur.
          </p>

          <h2 className="heading-md text-theme mt-10">Contact</h2>
          <p className="text-muted">
            Pour toute question concernant ces conditions, contactez-nous à&nbsp;
            <a className="text-primary underline" href="mailto:info@niveausuperieur.ca">
              info@niveausuperieur.ca
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
}
