import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import { services } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) {
    return { title: "Service introuvable | Niveau Supérieur Construction" };
  }

  const baseUrl = "https://niveausuperieur.ca";
  return {
    title: `${service.title} | Niveau Supérieur Construction`,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} | Niveau Supérieur Construction`,
      description: service.fullDescription,
      url: `${baseUrl}/services/${service.id}`,
      images: [service.image],
    },
    alternates: {
      canonical: `${baseUrl}/services/${service.id}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 container-custom text-center">
          <h1 className="heading-xl text-white mb-4">{service.title}</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-lg p-6 card-shadow">
              <h2 className="heading-md text-theme mb-4">Aperçu</h2>
              <p className="text-muted">{service.fullDescription}</p>
            </div>

            <div className="bg-card rounded-lg p-6 card-shadow">
              <h3 className="font-semibold text-theme mb-4">Services inclus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 card-shadow">
              <h3 className="font-semibold text-theme mb-4">Notre processus</h3>
              <ol className="space-y-3">
                {service.process.map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar CTA */}
          <aside className="space-y-6">
            <div className="bg-card rounded-lg p-6 card-shadow">
              <h3 className="font-semibold text-theme mb-2">Prêt à démarrer?</h3>
              <p className="text-sm text-muted mb-4">
                Parlez-nous de votre projet et obtenez une estimation rapide.
              </p>
              <div className="flex flex-col space-y-3">
                <Link href="/soumission" className="btn-primary text-center">
                  Demander une soumission
                </Link>
                <a href="tel:514-555-7890" className="btn-secondary flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>514-555-7890</span>
                </a>
                <a
                  href="https://wa.me/15145557890"
                  className="flex items-center justify-center space-x-2 text-muted hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 card-shadow">
              <h4 className="font-semibold text-theme mb-3">Autres services</h4>
              <ul className="space-y-2">
                {services
                  .filter((s) => s.id !== service.id)
                  .map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.id}`}
                        className="text-sm text-muted hover:text-primary transition-colors"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-3">
            Discutons de votre projet {service.title.toLowerCase()}
          </h2>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Notre équipe vous accompagne de la conception à la livraison, avec des standards de qualité supérieurs.
          </p>
          <Link href="/soumission" className="btn-primary">
            Obtenir une soumission
          </Link>
        </div>
      </section>
    </div>
  );
}
