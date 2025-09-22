import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, CheckCircle, Star, Quote } from "lucide-react";
import JsonLd, { localBusinessSchema, organizationSchema } from "./components/JsonLd";

export default function Home() {
  const services = [
    {
      title: "Construction résidentielle",
      description: "Maisons sur mesure, de la conception à la réalisation",
      image: "/images/images/residential-project-1.jpg",
      href: "/services/construction-residentielle"
    },
    {
      title: "Rénovations & agrandissements",
      description: "Transformation d'espaces avec matériaux durables",
      image: "/images/images/renovation-project-1.jpg",
      href: "/services/renovations"
    },
    {
      title: "Projets commerciaux",
      description: "Espaces commerciaux et installations industrielles",
      image: "/images/images/commercial-project-1.jpg",
      href: "/services/projets-commerciaux"
    },
    {
      title: "Charpente & structures",
      description: "Expertise en bois et acier pour tous projets",
      image: "/images/construction-team-working-on-modern-building-site.jpg",
      href: "/services/charpente"
    },
    {
      title: "Finition intérieure",
      description: "Planchers, peinture, menuiserie haut de gamme",
      image: "/images/images/kitchen.png",
      href: "/services/finition"
    },
    {
      title: "Électricité & domotique",
      description: "Installation complète et technologies intelligentes",
      image: "/images/modern-construction-site-with-crane-and-building.jpg",
      href: "/services/electricite"
    }
  ];

  const whyUs = [
    {
      icon: <CheckCircle className="w-8 h-8 text-red-600" />,
      title: "Qualité supérieure",
      description: "Chaque projet livré avec expertise et attention aux détails"
    },
    {
      icon: <Star className="w-8 h-8 text-red-600" />,
      title: "Fiabilité garantie",
      description: "Délais respectés et communication transparente"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-600" />,
      title: "Innovation moderne",
      description: "Technologies avancées et techniques de pointe"
    }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      location: "Rosemère",
      text: "Service exceptionnel! Délais respectés et qualité au rendez-vous. Notre cuisine est magnifique.",
      rating: 5
    },
    {
      name: "Jean-Pierre D.",
      location: "Laval",
      text: "Équipe professionnelle et travail impeccable. Je recommande sans hésitation.",
      rating: 5
    },
    {
      name: "Sophie M.",
      location: "Brossard",
      text: "Rénovation complète de notre sous-sol. Résultat au-delà de nos attentes!",
      rating: 5
    }
  ];

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={organizationSchema} />
      <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/images/hero-construction-1.jpg"
            alt="Construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-accent)]/70 via-[color:var(--color-accent)]/50 to-[color:var(--color-accent)]/30"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-theme">
          <h1 className="heading-xl text-theme mb-6">
            Votre partenaire construction dans le{" "}
            <span className="text-red-600">Grand Montréal</span>
          </h1>
          <p className="heading-sm text-muted mb-8 max-w-3xl mx-auto">
            46 ans d&apos;expérience combinée – Résidentiel & Commercial
          </p>
          <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
            Licence RBQ 5859-1223-01 • Entrepreneur général de confiance
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:514-555-7890"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Appeler maintenant</span>
            </a>
            <Link href="/soumission" className="btn-secondary">
              Demander une soumission
            </Link>
            <a
              href="https://wa.me/15145557890"
              className="flex items-center space-x-2 text-white hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Nos Services</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              De la construction neuve aux rénovations complexes, nous maîtrisons tous les aspects
              de votre projet avec professionnalisme et expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group card card-shadow rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-sm text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted mb-4">{service.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Pourquoi nous choisir?</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Notre engagement envers l’excellence nous distingue dans l’industrie de la construction.
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <div key={index} className="card card-shadow p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="heading-sm text-card-foreground mb-3">{item.title}</h3>
                <p className="font-open-sans text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Teaser */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Nos Réalisations Récentes</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Découvrez quelques-uns de nos projets les plus remarquables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 rounded-lg overflow-hidden card-shadow">
              <Image
                src="/images/images/residential-project-2.jpg"
                alt="Projet résidentiel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-card-foreground">
                <h3 className="font-poppins font-semibold text-lg">Maison moderne - Laval</h3>
                <p className="font-open-sans text-sm">Construction neuve</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden card-shadow">
              <Image
                src="/images/images/renovation-project-2.jpg"
                alt="Projet de rénovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-card-foreground">
                <h3 className="font-poppins font-semibold text-lg">Rénovation cuisine - Brossard</h3>
                <p className="font-open-sans text-sm">Rénovation complète</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden card-shadow">
              <Image
                src="/images/images/commercial-project-2.jpg"
                alt="Projet commercial"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-card-foreground">
                <h3 className="font-poppins font-semibold text-lg">Bureau moderne - Montréal</h3>
                <p className="font-open-sans text-sm">Aménagement commercial</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projets" className="btn-primary">
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-theme mb-4">Ce que disent nos clients</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              La satisfaction de nos clients est notre plus grande récompense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card card-shadow p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="font-open-sans text-muted mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="font-poppins font-medium text-card-foreground">
                  <p>{testimonial.name}</p>
                  <p className="font-open-sans text-sm text-muted">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-black text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-4">
            Prêt à lancer votre projet?
          </h2>
          <p className="font-open-sans text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Demandez une soumission gratuite et laissez notre équipe d&apos;experts
            transformer votre vision en réalité.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/soumission" className="btn-primary">
              Demander une soumission gratuite
            </Link>
            <Link href="/contact" className="btn-secondary border-theme text-theme hover:bg-card hover:text-brand-black">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
