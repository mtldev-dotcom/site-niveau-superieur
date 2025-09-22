'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      value: "514-555-7890",
      action: "tel:514-555-7890",
      description: "Lun-Ven: 7h00 - 18h00 | Sam: 8h00 - 16h00"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "514-555-7890",
      action: "https://wa.me/15145557890",
      description: "Réponse rapide 7j/7"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@niveausuperieur.ca",
      action: "mailto:info@niveausuperieur.ca",
      description: "Réponse sous 24h"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Zone de service",
      value: "Grand Montréal",
      action: "#map",
      description: "Montréal, Laval, Longueuil, Brossard, Terrebonne"
    }
  ];

  const projectTypes = [
    "Construction résidentielle",
    "Rénovation & agrandissement",
    "Projet commercial",
    "Charpente & structure",
    "Finition intérieure",
    "Électricité & domotique",
    "Autre"
  ];

  const serviceAreas = [
    "Montréal", "Laval", "Longueuil", "Brossard", "Saint-Lambert",
    "Boucherville", "Terrebonne", "Mascouche", "Repentigny",
    "Dollard-des-Ormeaux", "Pierrefonds", "Pointe-Claire"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/images/hero-construction-5.jpg"
            alt="Contactez Niveau Supérieur Construction"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-theme">
          <h1 className="heading-xl text-theme mb-6">Contactez-nous</h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Prêt à commencer votre projet? Notre équipe est là pour vous accompagner
            de la conception à la réalisation
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-theme mb-4">Plusieurs façons de nous joindre</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Choisissez le moyen qui vous convient le mieux
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                target={info.action.startsWith('http') ? '_blank' : undefined}
                rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-card p-6 rounded-lg card-shadow hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors text-red-600">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-theme mb-2">{info.title}</h3>
                <p className="text-red-600 font-medium mb-2">{info.value}</p>
                <p className="text-sm text-muted">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
              <div className="lg:col-span-2">
              <div className="bg-card rounded-lg card-shadow p-8">
                <h2 className="heading-md text-theme mb-6">Envoyez-nous un message</h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-theme mb-2">Message envoyé!</h3>
                    <p className="text-muted">
                      Merci pour votre message. Nous vous contacterons sous 24h.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-theme rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-theme rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-muted mb-2">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-theme rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="514-555-7890"
                        />
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-muted mb-2">
                          Type de projet
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-theme rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                        >
                          <option value="">Sélectionnez un type</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">
                          Sujet *
                        </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                          Message *
                        </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-theme rounded-lg focus:ring-red-500 focus:border-red-500 transition-colors"
                          placeholder="Décrivez votre projet en détail..."
                        />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:bg-muted text-card-foreground px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-red-600 text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Besoin d&apos;une réponse immédiate?</h3>
                <p className="mb-6">Appelez-nous directement ou envoyez-nous un message WhatsApp</p>
                <div className="space-y-3">
                  <a
                    href="tel:514-555-7890"
                    className="flex items-center space-x-3 bg-card/10 hover:bg-card/20 p-3 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="font-medium">514-555-7890</div>
                      <div className="text-sm text-red-100">Lun-Ven: 7h00-18h00</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/15145557890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-card/10 hover:bg-card/20 p-3 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <div className="text-sm text-red-100">Réponse rapide 7j/7</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-card p-6 rounded-lg card-shadow">
                <h3 className="text-xl font-semibold text-theme mb-4">Zones de service</h3>
                <p className="text-muted mb-4">
                  Nous servons fièrement le Grand Montréal et ses environs:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3 text-red-600 flex-shrink-0" />
                      <span className="text-sm text-muted">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-card p-6 rounded-lg card-shadow">
                <h3 className="text-xl font-semibold text-theme mb-4">Heures d'ouverture</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted">Lundi - Vendredi</span>
                    <span className="font-medium">7h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Samedi</span>
                    <span className="font-medium">8h00 - 16h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="flex items-center space-x-2 text-red-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Urgences 24h/7j sur appel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted" id="map">
        <div className="container-custom py-16">
          <div className="text-center mb-8">
            <h2 className="heading-lg text-theme mb-4">Notre zone de service</h2>
            <p className="text-xl text-muted">
              Nous intervenons dans tout le Grand Montréal
            </p>
          </div>

          {/* Placeholder for Google Map */}
          <div className="bg-muted h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-muted">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Carte Google Maps</p>
              <p className="text-sm">Grand Montréal et environs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted text-theme">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-theme mb-4">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto">
            Obtenez une soumission détaillée et personnalisée pour votre projet de construction ou rénovation.
          </p>
          <Link href="/soumission" className="btn-primary inline-block">
            Demander une soumission gratuite
          </Link>
        </div>
      </section>
    </div>
  );
}
