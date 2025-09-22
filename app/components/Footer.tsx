import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-theme">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-left">
            <div className="flex flex-col items-start space-y-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Niveau Supérieur Construction"
                width={128}
                height={128}
                className="self-start w-28 h-28 md:w-40 md:h-40"
              />
              <div className="text-left">
                <h3 className="font-bold text-lg text-theme">
                  Niveau Supérieur
                </h3>
                <p className="font-poppins text-sm text-primary uppercase tracking-wide">
                  Construction
                </p>
              </div>
            </div>
            <p className="text-muted mb-4">
              Votre partenaire de confiance dans le Grand Montréal. 46 ans d&apos;expérience combinée
              en construction résidentielle et commerciale.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/construction-residentielle"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Construction résidentielle
                </Link>
              </li>
              <li>
                <Link
                  href="/services/projets-commerciaux"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Projets commerciaux
                </Link>
              </li>
              <li>
                <Link
                  href="/services/renovations"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Rénovations & agrandissements
                </Link>
              </li>
              <li>
                <Link
                  href="/services/charpente"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Charpente & structures
                </Link>
              </li>
              <li>
                <Link
                  href="/services/finition"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Finition intérieure
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electricite"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Électricité & domotique
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/a-propos"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/projets"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/soumission"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Demander une soumission
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-open-sans text-muted hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contactez-nous</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:514-555-7890"
                    className="font-open-sans text-muted hover:text-primary transition-colors"
                  >
                    514-555-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@niveausuperieur.ca"
                    className="font-open-sans text-muted hover:text-primary transition-colors"
                  >
                    info@niveausuperieur.ca
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://wa.me/15145557890"
                    className="font-open-sans text-muted hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-open-sans text-muted">
                    Grand Montréal, Québec
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-theme pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="font-open-sans text-muted text-sm">
                © 2024 Niveau Supérieur Construction. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-2">
                <span className="font-open-sans text-gray-400 text-sm">Licence RBQ:</span>
                <span className="font-poppins font-medium text-primary text-sm">5859-1223-01</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/confidentialite"
                className="font-open-sans text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                href="/conditions"
                className="font-open-sans text-gray-400 hover:text-primary text-sm transition-colors"
              >
                Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
