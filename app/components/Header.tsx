'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/projets' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-lg z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Niveau Supérieur Construction"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div>
              <h1 className="font-extrabold text-xl text-black">
                Niveau Supérieur
              </h1>
              <p className="text-sm text-red-600 uppercase tracking-wide">
                Construction
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:514-555-7890"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">514-555-7890</span>
            </a>
            <a
              href="https://wa.me/15145557890"
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <Link href="/soumission" className="btn-primary">
              Demander une soumission
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <nav className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block font-medium text-gray-600 hover:text-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:514-555-7890"
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">514-555-7890</span>
                </a>
                <a
                  href="https://wa.me/15145557890"
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <Link href="/soumission" className="btn-primary inline-block">
                  Demander une soumission
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}