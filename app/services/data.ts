export type Service = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  features: string[];
  process: string[];
};

export const services: Service[] = [
  {
    id: "construction-residentielle",
    title: "Construction résidentielle",
    description: "Maisons sur mesure, de la conception à la réalisation",
    fullDescription:
      "Nous concevons et construisons des maisons sur mesure qui reflètent votre style de vie et vos besoins. Notre équipe expérimentée vous accompagne à chaque étape, de la planification initiale à la remise des clés.",
    image: "/images/images/residential-project-1.jpg",
    features: [
      "Plans architecturaux personnalisés",
      "Construction neuve clé en main",
      "Maisons unifamiliales et jumelées",
      "Respect des normes RBQ",
      "Suivi de chantier rigoureux",
      "Garanties complètes",
    ],
    process: [
      "Consultation et analyse des besoins",
      "Conception et plans détaillés",
      "Obtention des permis",
      "Construction et suivi",
      "Finitions et livraison",
    ],
  },
  {
    id: "renovations",
    title: "Rénovations & agrandissements",
    description: "Transformation d'espaces avec matériaux durables",
    fullDescription:
      "Donnez une nouvelle vie à votre propriété avec nos services de rénovation. Que ce soit pour moderniser votre cuisine, agrandir votre salon ou rénover complètement votre maison, nous utilisons des matériaux de qualité supérieure.",
    image: "/images/images/renovation-project-1.jpg",
    features: [
      "Rénovations complètes",
      "Agrandissements résidentiels",
      "Cuisine et salle de bain",
      "Sous-sols aménagés",
      "Isolation et efficacité énergétique",
      "Design moderne et fonctionnel",
    ],
    process: [
      "Évaluation de l'existant",
      "Conception du projet",
      "Planification des travaux",
      "Exécution par phases",
      "Contrôle qualité final",
    ],
  },
  {
    id: "projets-commerciaux",
    title: "Projets commerciaux",
    description: "Espaces commerciaux et installations industrielles",
    fullDescription:
      "Nous réalisons des projets commerciaux et industriels adaptés aux besoins spécifiques de votre entreprise. Bureaux, commerces, entrepôts - nous maîtrisons tous les aspects de la construction commerciale.",
    image: "/images/images/commercial-project-1.jpg",
    features: [
      "Bureaux et espaces de travail",
      "Commerces et restaurants",
      "Entrepôts et installations industrielles",
      "Rénovations commerciales",
      "Mise aux normes",
      "Projets clé en main",
    ],
    process: [
      "Analyse des besoins d'affaires",
      "Étude de faisabilité",
      "Conception adaptée",
      "Gestion de projet complète",
      "Livraison dans les délais",
    ],
  },
  {
    id: "charpente",
    title: "Charpente & structures",
    description: "Expertise en bois et acier pour tous projets",
    fullDescription:
      "Notre équipe spécialisée en charpenterie maîtrise les techniques traditionnelles et modernes. Structures en bois, acier, béton - nous garantissons la solidité et la durabilité de vos constructions.",
    image: "/images/construction-team-working-on-modern-building-site.jpg",
    features: [
      "Charpente traditionnelle et moderne",
      "Structures en bois lamellé-collé",
      "Ossature métallique",
      "Poutres et colonnes",
      "Toitures complexes",
      "Calculs d'ingénierie",
    ],
    process: [
      "Étude structurale",
      "Calculs et plans d'exécution",
      "Préparation des matériaux",
      "Montage et assemblage",
      "Contrôles de conformité",
    ],
  },
  {
    id: "finition",
    title: "Finition intérieure",
    description: "Planchers, peinture, menuiserie haut de gamme",
    fullDescription:
      "Les finitions intérieures donnent le caractère final à votre projet. Notre équipe de spécialistes en finition apporte une attention particulière aux détails pour un résultat exceptionnel.",
    image: "/images/images/kitchen.png",
    features: [
      "Revêtements de sol (bois, céramique, vinyle)",
      "Peinture et texture murale",
      "Menuiserie sur mesure",
      "Armoires de cuisine et vanités",
      "Moulures et boiseries",
      "Finitions haut de gamme",
    ],
    process: [
      "Sélection des matériaux",
      "Préparation des surfaces",
      "Installation méthodique",
      "Finitions de précision",
      "Inspection qualité finale",
    ],
  },
  {
    id: "electricite",
    title: "Électricité & domotique",
    description: "Installation complète et technologies intelligentes",
    fullDescription:
      "Nos électriciens certifiés s'occupent de tous vos besoins électriques, des installations de base aux systèmes domotiques les plus avancés. Sécurité, efficacité et innovation technologique.",
    image: "/images/modern-construction-site-with-crane-and-building.jpg",
    features: [
      "Installation électrique complète",
      "Systèmes domotiques",
      "Éclairage LED et intelligent",
      "Prises et circuits spécialisés",
      "Panneaux électriques",
      "Mise aux normes électriques",
    ],
    process: [
      "Évaluation des besoins électriques",
      "Conception du système",
      "Installation certifiée",
      "Programmation domotique",
      "Tests et mise en service",
    ],
  },
];
