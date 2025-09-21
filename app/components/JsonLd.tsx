interface JsonLdProps {
  data: Record<string, unknown>
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Niveau Supérieur Construction",
  "description": "Entrepreneur général spécialisé en construction résidentielle et commerciale dans le Grand Montréal",
  "url": "https://niveausuperieur.ca",
  "logo": "https://niveausuperieur.ca/images/logo.png",
  "image": "https://niveausuperieur.ca/images/logo.png",
  "telephone": "+1-514-555-7890",
  "email": "info@niveausuperieur.ca",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "QC",
    "addressCountry": "CA",
    "addressLocality": "Montréal"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "45.5017",
    "longitude": "-73.5673"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Montréal"
    },
    {
      "@type": "City",
      "name": "Laval"
    },
    {
      "@type": "City",
      "name": "Longueuil"
    },
    {
      "@type": "City",
      "name": "Brossard"
    }
  ],
  "serviceType": [
    "Construction résidentielle",
    "Construction commerciale",
    "Rénovations",
    "Agrandissements",
    "Charpente",
    "Finition intérieure",
    "Électricité et domotique"
  ],
  "foundingDate": "2022",
  "paymentAccepted": ["Cash", "Credit Card", "Check", "Bank Transfer"],
  "currenciesAccepted": "CAD",
  "openingHours": [
    "Mo-Fr 07:00-18:00",
    "Sa 08:00-16:00"
  ],
  "sameAs": [
    "https://www.facebook.com/niveausuperieurconstruction",
    "https://www.instagram.com/niveausuperieurconstruction"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "50"
  },
  "priceRange": "$$$$",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Licence RBQ",
    "recognizedBy": "Régie du bâtiment du Québec"
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Niveau Supérieur Construction",
  "url": "https://niveausuperieur.ca",
  "logo": "https://niveausuperieur.ca/images/logo.png",
  "foundingDate": "2022",
  "numberOfEmployees": "5-10",
  "slogan": "Votre niveau supérieur en construction",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-514-555-7890",
    "contactType": "customer service",
    "areaServed": "QC",
    "availableLanguage": ["French", "English"]
  }
}