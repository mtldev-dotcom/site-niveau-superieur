import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, CheckCircle, Users, Clock, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services de Construction",
  description: "Découvrez nos services de construction : résidentiel, commercial, rénovations, charpente, finition intérieure, électricité et domotique. Expertise RBQ dans le Grand Montréal.",
  keywords: [
    "services construction", "construction résidentielle Montréal", "rénovation Laval",
    "construction commerciale", "charpente Québec", "finition intérieure",
    "électricité domotique", "entrepreneur RBQ"
  ],
  openGraph: {
    title: "Services de Construction | Niveau Supérieur Construction",
    description: "Services complets de construction et rénovation dans le Grand Montréal. Licence RBQ, 46 ans d'expérience combinée.",
    url: "https://niveausuperieur.ca/services",
    images: ["/images/images/hero-construction-2.jpg"],
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "construction-residentielle",
      title: "Construction résidentielle",
      description: "Maisons sur mesure, de la conception à la réalisation",
      fullDescription: "Nous concevons et construisons des maisons sur mesure qui reflètent votre style de vie et vos besoins. Notre équipe expérimentée vous accompagne à chaque étape, de la planification initiale à la remise des clés.",
      image: "/images/images/residential-project-1.jpg",
      features: [
        "Plans architecturaux personnalisés",
        "Construction neuve clé en main",
        "Maisons unifamiliales et jumelées",
        "Respect des normes RBQ",
        "Suivi de chantier rigoureux",
        "Garanties complètes"
      ],
      process: [
        "Consultation et analyse des besoins",
        "Conception et plans détaillés",
        "Obtention des permis",
        "Construction et suivi",
        "Finitions et livraison"
      ]
    },
    {
      id: "renovations",
      title: "Rénovations & agrandissements",
      description: "Transformation d&apos;espaces avec matériaux durables",
      fullDescription: "Donnez une nouvelle vie à votre propriété avec nos services de rénovation. Que ce soit pour moderniser votre cuisine, agrandir votre salon ou rénover complètement votre maison, nous utilisons des matériaux de qualité supérieure.",
      image: "/images/images/renovation-project-1.jpg",
      features: [
        "Rénovations complètes",
        "Agrandissements résidentiels",
        "Cuisine et salle de bain",
        "Sous-sols aménagés",
        "Isolation et efficacité énergétique",
        "Design moderne et fonctionnel"
      ],
      process: [
        "Évaluation de l&apos;existant",
        "Conception du projet",
        "Planification des travaux",
        "Exécution par phases",
        "Contrôle qualité final"
      ]
    },
    {
      id: "projets-commerciaux",
      title: "Projets commerciaux",
      description: "Espaces commerciaux et installations industrielles",
      fullDescription: "Nous réalisons des projets commerciaux et industriels adaptés aux besoins spécifiques de votre entreprise. Bureaux, commerces, entrepôts - nous maîtrisons tous les aspects de la construction commerciale.",
      image: "/images/images/commercial-project-1.jpg",
      features: [
        "Bureaux et espaces de travail",
        "Commerces et restaurants",
        "Entrepôts et installations industrielles",
        "Rénovations commerciales",
        "Mise aux normes",
        "Projets clé en main"
      ],
      process: [
        "Analyse des besoins d&apos;affaires",
        "Étude de faisabilité",
        "Conception adaptée",
        "Gestion de projet complète",
        "Livraison dans les délais"
      ]
    },
    {
      id: "charpente",
      title: "Charpente & structures",
      description: "Expertise en bois et acier pour tous projets",
      fullDescription: "Notre équipe spécialisée en charpenterie maîtrise les techniques traditionnelles et modernes. Structures en bois, acier, béton - nous garantissons la solidité et la durabilité de vos constructions.",
      image: "/images/construction-team-working-on-modern-building-site.jpg",
      features: [
        "Charpente traditionnelle et moderne",
        "Structures en bois lamellé-collé",
        "Ossature métallique",
        "Poutres et colonnes",
        "Toitures complexes",
        "Calculs d&apos;ingénierie"
      ],
      process: [
        "Étude structurale",
        "Calculs et plans d&apos;exécution",
        "Préparation des matériaux",
        "Montage et assemblage",
        "Contrôles de conformité"
      ]
    },
    {
      id: "finition",
      title: "Finition intérieure",
      description: "Planchers, peinture, menuiserie haut de gamme",
      fullDescription: "Les finitions intérieures donnent le caractère final à votre projet. Notre équipe de spécialistes en finition apporte une attention particulière aux détails pour un résultat exceptionnel.",
      image: "/images/images/kitchen.png",
      features: [
        "Revêtements de sol (bois, céramique, vinyle)",
        "Peinture et texture murale",
        "Menuiserie sur mesure",
        "Armoires de cuisine et vanités",
        "Moulures et boiseries",
        "Finitions haut de gamme"
      ],
      process: [
        "Sélection des matériaux",
        "Préparation des surfaces",
        "Installation méthodique",
        "Finitions de précision",
        "Inspection qualité finale"
      ]
    },
    {
      id: "electricite",
      title: "Électricité & domotique",
      description: "Installation complète et technologies intelligentes",
      fullDescription: "Nos électriciens certifiés s&apos;occupent de tous vos besoins électriques, des installations de base aux systèmes domotiques les plus avancés. Sécurité, efficacité et innovation technologique.",
      image: "/images/modern-construction-site-with-crane-and-building.jpg",
      features: [
        "Installation électrique complète",
        "Systèmes domotiques",
        "Éclairage LED et intelligent",
        "Prises et circuits spécialisés",
        "Panneaux électriques",
        "Mise aux normes électriques"
      ],
      process: [
        "Évaluation des besoins électriques",
        "Conception du système",
        "Installation certifiée",
        "Programmation domotique",
        "Tests et mise en service"
      ]
    }
  ];

  const stats = [
    { number: "46+", label: "Années d&apos;expérience", icon: <Award className="w-6 h-6" /> },
    { number: "500+", label: "Projets réalisés", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "100+", label: "Clients satisfaits", icon: <Users className="w-6 h-6" /> },
    { number: "24h", label: "Temps de réponse", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/images/hero-construction-2.jpg"
            alt="Nos services de construction"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-theme">
          <h1 className="heading-xl text-white mb-6">Nos Services</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Des solutions complètes de construction pour tous vos projets résidentiels et commerciaux
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-red-600 text-card-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-card-foreground">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Notre Expertise</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Découvrez nos domaines de spécialisation et laissez-nous transformer vos idées en réalité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div key={service.id} className="bg-card rounded-lg overflow-hidden card-shadow">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
    
                <div className="p-8">
                  <h3 className="heading-md text-theme mb-4">{service.title}</h3>
                  <p className="text-muted mb-6">{service.fullDescription}</p>
    
                  <div className="mb-6">
                    <h4 className="font-semibold text-theme mb-3">Services inclus :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
    
                  <div className="mb-6">
                    <h4 className="font-semibold text-theme mb-3">Notre processus :</h4>
                    <ol className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm text-muted">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
    
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link href="/soumission" className="btn-primary flex-1 text-center">
                      Demander une soumission
                    </Link>
                    <a
                      href="tel:514-555-7890"
                      className="btn-secondary flex items-center justify-center space-x-2 flex-1"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Discuter du projet</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted text-theme">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-4">
            Prêt à commencer votre projet?
          </h2>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
            Contactez notre équipe dès aujourd’hui pour une consultation gratuite
            et découvrez comment nous pouvons concrétiser vos idées.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/soumission" className="btn-primary">
              Obtenir une soumission gratuite
            </Link>
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
      </section>
    </div>
  );
}
