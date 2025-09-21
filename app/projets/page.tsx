'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Filter, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

// Note: Metadata export must be at the top level for static pages
// For client components, we'll add meta via dynamic head updates

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('tous');

  const filters = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'residentiel', label: 'Résidentiel' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Rénovation' }
  ];

  const projects = [
    {
      id: 1,
      title: "Maison moderne - Laval",
      category: "residentiel",
      type: "Construction neuve",
      location: "Laval, QC",
      date: "2024",
      duration: "8 mois",
      client: "Famille Tremblay",
      description: "Construction d&apos;une maison unifamiliale moderne de 2 800 pi² avec finitions haut de gamme, système domotique intégré et aménagement paysager.",
      image: "/images/images/residential-project-1.jpg",
      beforeImage: "/images/images/residential-project-1.jpg",
      afterImage: "/images/images/residential-project-2.jpg",
      gallery: [
        "/images/images/residential-project-1.jpg",
        "/images/images/residential-project-2.jpg",
        "/images/images/kitchen.png"
      ],
      features: [
        "2 800 pi² habitables",
        "4 chambres, 3 salles de bain",
        "Cuisine avec îlot central",
        "Système domotique complet",
        "Garage double",
        "Terrasse avec pergola"
      ],
      budget: "450 000$ - 500 000$"
    },
    {
      id: 2,
      title: "Rénovation cuisine - Brossard",
      category: "renovation",
      type: "Rénovation complète",
      location: "Brossard, QC",
      date: "2024",
      duration: "6 semaines",
      client: "Famille Dubois",
      description: "Rénovation complète d&apos;une cuisine avec démolition, nouvelle plomberie, électricité mise à jour et installation d&apos;armoires sur mesure.",
      image: "/images/images/kitchen.png",
      beforeImage: "/images/images/residential-project-3.jpg",
      afterImage: "/images/images/kitchen.png",
      gallery: [
        "/images/images/kitchen.png",
        "/images/images/bathroom.png"
      ],
      features: [
        "Démolition complète",
        "Armoires sur mesure",
        "Comptoirs en quartz",
        "Électroménagers encastrés",
        "Plancher en bois franc",
        "Éclairage LED"
      ],
      budget: "35 000$ - 45 000$"
    },
    {
      id: 3,
      title: "Bureau moderne - Montréal",
      category: "commercial",
      type: "Aménagement commercial",
      location: "Montréal, QC",
      date: "2023",
      duration: "12 semaines",
      client: "TechCorp Solutions",
      description: "Aménagement de bureaux modernes pour une entreprise technologique incluant espaces collaboratifs, salles de réunion et zones détente.",
      image: "/images/images/commercial-project-1.jpg",
      beforeImage: "/images/images/commercial-project-1.jpg",
      afterImage: "/images/images/commercial-project-2.jpg",
      gallery: [
        "/images/images/commercial-project-1.jpg",
        "/images/images/commercial-project-2.jpg"
      ],
      features: [
        "5 000 pi² d&apos;espace bureau",
        "Espaces collaboratifs ouverts",
        "6 salles de réunion",
        "Cuisine d&apos;équipe moderne",
        "Système de visioconférence",
        "Éclairage intelligent"
      ],
      budget: "150 000$ - 200 000$"
    },
    {
      id: 4,
      title: "Agrandissement familial - Longueuil",
      category: "residentiel",
      type: "Agrandissement",
      location: "Longueuil, QC",
      date: "2023",
      duration: "10 semaines",
      client: "Famille Martin",
      description: "Agrandissement d&apos;une maison existante avec ajout d&apos;une extension de 800 pi² incluant salon familial et salle de bain.",
      image: "/images/images/residential-project-2.jpg",
      beforeImage: "/images/images/residential-project-2.jpg",
      afterImage: "/images/images/residential-project-3.jpg",
      gallery: [
        "/images/images/residential-project-2.jpg",
        "/images/images/residential-project-3.jpg",
        "/images/images/bathroom.png"
      ],
      features: [
        "Extension de 800 pi²",
        "Salon familial avec foyer",
        "Nouvelle salle de bain",
        "Fondations renforcées",
        "Toiture assortie",
        "Terrasse extérieure"
      ],
      budget: "85 000$ - 95 000$"
    },
    {
      id: 5,
      title: "Rénovation sous-sol - Terrebonne",
      category: "renovation",
      type: "Aménagement sous-sol",
      location: "Terrebonne, QC",
      date: "2023",
      duration: "8 semaines",
      client: "Famille Gagnon",
      description: "Transformation complète d&apos;un sous-sol en espace de vie avec bureau, salle familiale et salle de bain.",
      image: "/images/images/renovation-project-1.jpg",
      beforeImage: "/images/images/renovation-project-1.jpg",
      afterImage: "/images/images/renovation-project-2.jpg",
      gallery: [
        "/images/images/renovation-project-1.jpg",
        "/images/images/renovation-project-2.jpg"
      ],
      features: [
        "1 200 pi² aménagés",
        "Bureau à domicile",
        "Salle familiale avec bar",
        "Salle de bain complète",
        "Plancher chauffant",
        "Isolation supérieure"
      ],
      budget: "45 000$ - 55 000$"
    },
    {
      id: 6,
      title: "Restaurant moderne - Boucherville",
      category: "commercial",
      type: "Commercial neuf",
      location: "Boucherville, QC",
      date: "2023",
      duration: "16 semaines",
      client: "Bistro Le Moderne",
      description: "Construction et aménagement complet d&apos;un restaurant moderne avec cuisine professionnelle et salle à manger de 100 places.",
      image: "/images/images/commercial-project-2.jpg",
      beforeImage: "/images/commercial-construction.png",
      afterImage: "/images/images/commercial-project-2.jpg",
      gallery: [
        "/images/images/commercial-project-2.jpg",
        "/images/commercial-construction.png"
      ],
      features: [
        "Salle à manger 100 places",
        "Cuisine professionnelle",
        "Bar avec 20 places",
        "Terrasse extérieure",
        "Système de ventilation",
        "Décoration contemporaine"
      ],
      budget: "250 000$ - 300 000$"
    }
  ];

  const filteredProjects = activeFilter === 'tous'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/images/hero-construction-3.jpg"
            alt="Nos réalisations"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="heading-xl text-white mb-6">Nos Réalisations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Découvrez notre portfolio de projets réalisés avec excellence et savoir-faire
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b">
        <div className="container-custom py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Before/After */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-black mb-4">Avant / Après</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Voyez la transformation remarquable de nos projets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <div key={`before-after-${project.id}`} className="bg-white rounded-lg overflow-hidden card-shadow">
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeAlt={`${project.title} - avant`}
                  afterAlt={`${project.title} - après`}
                  className="rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="heading-sm text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-black mb-4">Tous nos projets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez notre portfolio complet de réalisations ({filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''})
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden card-shadow hover:scale-105 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="heading-sm text-black mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date} • {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {project.client}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">
                        Budget: {project.budget}
                      </span>
                      <button className="text-red-600 hover:text-red-700 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-4">
            Votre projet sera le prochain!
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Rejoignez nos clients satisfaits et transformez vos idées en réalité avec notre équipe d&apos;experts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/soumission" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors">
              Commencer mon projet
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-medium transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}