import Image from "next/image";
import Link from "next/link";
import { Award, Users, Clock, Shield, CheckCircle, Star, Phone, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description: "Découvrez Niveau Supérieur Construction : 46 ans d'expérience combinée, licence RBQ 5859-1223-01. Notre équipe d'experts vous accompagne dans tous vos projets de construction au Québec.",
  keywords: [
    "à propos Niveau Supérieur", "équipe construction Montréal", "licence RBQ 5859-1223-01",
    "expérience construction Québec", "entrepreneur général certifié", "histoire entreprise construction"
  ],
  openGraph: {
    title: "À Propos | Niveau Supérieur Construction",
    description: "46 ans d'expérience combinée, licence RBQ officielle. Découvrez notre équipe d'experts en construction au Québec.",
    url: "https://niveausuperieur.ca/a-propos",
    images: ["/images/images/hero-construction-4.jpg"],
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Excellence",
      description: "Nous visons l&apos;excellence dans chaque projet, en utilisant les meilleures pratiques et matériaux de qualité supérieure."
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Collaboration",
      description: "Notre approche collaborative garantit que chaque client est impliqué dans chaque étape de son projet."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: "Ponctualité",
      description: "Nous respectons nos engagements et livrons tous nos projets dans les délais convenus."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Fiabilité",
      description: "Notre licence RBQ et nos assurances complètes garantissent la sécurité et la conformité de tous nos travaux."
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Première expérience",
      description: "Anthony débute sa carrière dans la construction résidentielle"
    },
    {
      year: "2015",
      title: "Spécialisation commerciale",
      description: "Extension vers les projets commerciaux et industriels"
    },
    {
      year: "2018",
      title: "Formation d&apos;équipe",
      description: "Constitution d&apos;une équipe de spécialistes expérimentés"
    },
    {
      year: "2020",
      title: "Licence RBQ",
      description: "Obtention de la licence RBQ officielle (5859-1223-01)"
    },
    {
      year: "2022",
      title: "Niveau Supérieur Construction",
      description: "Fondation officielle de l&apos;entreprise"
    },
    {
      year: "2024",
      title: "Croissance continue",
      description: "Plus de 500 projets réalisés avec succès"
    }
  ];

  const stats = [
    { number: "46+", label: "Années d&apos;expérience combinée", icon: <Award className="w-6 h-6" /> },
    { number: "500+", label: "Projets réalisés", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "100%", label: "Clients satisfaits", icon: <Star className="w-6 h-6" /> },
    { number: "24h", label: "Temps de réponse moyen", icon: <Clock className="w-6 h-6" /> }
  ];

  const certifications = [
    {
      title: "Licence RBQ",
      number: "5859-1223-01",
      description: "Régie du bâtiment du Québec",
      categories: [
        "Bâtiments résidentiels et commerciaux",
        "Ouvrages de génie civil",
        "Travaux spécialisés (charpente, électricité, excavation)"
      ]
    },
    {
      title: "Assurances",
      number: "Couverture complète",
      description: "Protection totale pour tous nos projets",
      categories: [
        "Responsabilité civile générale",
        "Assurance chantier",
        "Garantie des travaux"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/images/hero-construction-4.jpg"
            alt="À propos de Niveau Supérieur Construction"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="heading-xl text-white mb-6">À propos de nous</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Découvrez l&apos;histoire et les valeurs qui font de Niveau Supérieur Construction
            votre partenaire de confiance dans le Grand Montréal
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-theme mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted">
                <p>
                  <strong className="text-theme">Niveau Supérieur Construction</strong> est née de la passion et de l&apos;expertise
                  de jeunes entrepreneurs déterminés à révolutionner l&apos;industrie de la construction au Québec.
                </p>
                <p>
                  Avec plus de <strong className="text-red-600">46 ans d&apos;expérience combinée</strong>, notre équipe
                  maîtrise tous les aspects de la construction, des projets résidentiels aux installations commerciales
                  les plus complexes.
                </p>
                <p>
                  Notre <strong className="text-theme">licence RBQ officielle (5859-1223-01)</strong> témoigne de notre
                  engagement envers la qualité, la sécurité et la conformité réglementaire. Chaque projet que nous
                  entreprenons reflète notre dévouement à l&apos;excellence et notre volonté de dépasser les attentes
                  de nos clients.
                </p>
                <p>
                  Basés dans le <strong className="text-theme">Grand Montréal</strong>, nous servons fièrement
                  les communautés de Laval, Longueuil, Brossard, Terrebonne et les environs avec un service
                  personnalisé et une approche humaine.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden card-shadow">
                <Image
                  src="/images/construction-team-working-on-modern-building-site.jpg"
                  alt="Équipe Niveau Supérieur Construction"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg card-shadow">
                <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-red-600 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">RBQ</div>
                <div className="text-xs">Licencié</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-theme mb-4">Nos réalisations en chiffres</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats qui parlent d&apos;eux-mêmes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card p-6 rounded-lg card-shadow">
                <div className="flex justify-center mb-4 text-red-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-2">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Nos Valeurs</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-card card-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="heading-sm text-theme mb-3">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Notre Parcours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              46 ans d&apos;expérience combinée qui nous ont menés jusqu&apos;ici
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2 lg:px-8">
                      <div className="card p-6 rounded-lg card-shadow">
                      <div className="text-red-600 font-bold text-xl mb-2">{item.year}</div>
                      <h3 className="font-bold text-theme mb-2">{item.title}</h3>
                      <p className="text-muted">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 my-4 lg:my-0 hidden lg:block"></div>

                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Certifications & Assurances</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Votre tranquillité d'esprit est notre priorité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card p-8 rounded-lg card-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="heading-sm text-black">{cert.title}</h3>
                    <p className="text-red-600 font-medium">{cert.number}</p>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {cert.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-muted">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Notre Équipe</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Des professionnels passionnés au service de vos projets
            </p>
          </div>

            <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg card-shadow overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full relative">
                    <Image
                      src="/images/placeholder-user.jpg"
                      alt="Anthony - Fondateur"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="heading-md text-theme mb-4">Anthony</h3>
                  <p className="text-red-600 font-medium mb-4">Fondateur & Directeur Général</p>
                  <div className="space-y-4 text-muted">
                    <p>
                      Entrepreneur passionné avec plus de 15 ans d&apos;expérience dans la construction,
                      Anthony a fondé Niveau Supérieur Construction avec la vision de révolutionner
                      l&apos;industrie par l&apos;excellence et l&apos;innovation.
                    </p>
                    <p>
                      Expert en gestion de projet et en relations clients, il supervise personnellement
                      chaque projet pour garantir le respect des plus hauts standards de qualité.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold text-black mb-3">Spécialisations :</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Gestion de projet", "Construction résidentielle", "Projets commerciaux", "Rénovations"].map((skill, index) => (
                        <span key={index} className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-lg card-shadow text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-theme mb-2">Équipe expérimentée</h4>
                <p className="text-muted">Artisans qualifiés et certifiés</p>
              </div>

              <div className="bg-card p-6 rounded-lg card-shadow text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-theme mb-2">Formation continue</h4>
                <p className="text-muted">Techniques et technologies de pointe</p>
              </div>

              <div className="bg-card p-6 rounded-lg card-shadow text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h4 className="font-semibold text-theme mb-2">Sécurité prioritaire</h4>
                <p className="text-muted">Respect strict des normes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-4">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez pourquoi tant de clients nous font confiance pour leurs projets
            les plus importants. Contactez-nous dès aujourd&apos;hui.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/soumission" className="btn-primary">
              Demander une soumission
            </Link>
            <div className="flex items-center space-x-4">
              <a
                href="tel:514-555-7890"
                className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>514-555-7890</span>
              </a>
              <a
                href="https://wa.me/15145557890"
                className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
