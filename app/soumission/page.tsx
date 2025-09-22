'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Upload, CheckCircle, User, MapPin, DollarSign, FileText, Phone, Mail } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  projectType: string;
  propertyType: string;
  projectScope: string;
  rooms: string[];
  timeline: string;
  currentCondition: string;
  budget: string;
  priority: string;
  materials: string;
  description: string;
  hasPlans: string;
  preferredContact: string;
  files: File[];
}

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    // Step 2: Project Location
    address: '',
    city: '',
    postalCode: '',
    projectType: '',
    propertyType: '',

    // Step 3: Project Details
    projectScope: '',
    rooms: [],
    timeline: '',
    currentCondition: '',

    // Step 4: Budget & Preferences
    budget: '',
    priority: '',
    materials: '',

    // Step 5: Additional Info
    description: '',
    hasPlans: '',
    preferredContact: '',
    files: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 5;

  const steps = [
    { number: 1, title: "Coordonnées", icon: <User className="w-5 h-5" /> },
    { number: 2, title: "Localisation", icon: <MapPin className="w-5 h-5" /> },
    { number: 3, title: "Projet", icon: <FileText className="w-5 h-5" /> },
    { number: 4, title: "Budget", icon: <DollarSign className="w-5 h-5" /> },
    { number: 5, title: "Finalisation", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const projectTypes = [
    "Construction neuve",
    "Rénovation complète",
    "Rénovation partielle",
    "Agrandissement",
    "Aménagement commercial",
    "Charpente/Structure",
    "Finition intérieure",
    "Électricité/Domotique"
  ];

  const propertyTypes = [
    "Maison unifamiliale",
    "Condo/Appartement",
    "Duplex/Triplex",
    "Commerce/Bureau",
    "Entrepôt/Industriel",
    "Autre"
  ];

  const roomTypes = [
    "Cuisine", "Salle de bain", "Salon", "Chambre", "Sous-sol",
    "Garage", "Grenier", "Toiture", "Façade", "Terrasse"
  ];

  const budgetRanges = [
    "Moins de 25 000$",
    "25 000$ - 50 000$",
    "50 000$ - 100 000$",
    "100 000$ - 200 000$",
    "200 000$ - 500 000$",
    "Plus de 500 000$"
  ];

  const timelineOptions = [
    "Dès que possible",
    "Dans les 3 prochains mois",
    "Dans les 6 prochains mois",
    "Dans l'année",
    "Plus d'un an",
    "Pas encore décidé"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string, field: keyof typeof formData) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[];
      return {
        ...prev,
        [field]: currentArray.includes(value)
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.address && formData.city && formData.projectType;
      case 3:
        return formData.projectScope && formData.timeline;
      case 4:
        return formData.budget;
      case 5:
        return formData.description;
      default:
        return true;
    }
  };

    if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="heading-lg text-theme mb-4">Soumission envoyée!</h1>
          <p className="text-muted mb-6">
            Merci pour votre demande de soumission. Notre équipe l'examinera et vous contactera
            dans les prochaines 24 heures pour discuter de votre projet.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-medium">Numéro de référence: #QUO-{Date.now().toString().slice(-6)}</p>
          </div>
          <div className="space-y-3">
            <a
              href="tel:514-555-7890"
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Appelez-nous maintenant</span>
            </a>
            <a
              href="mailto:info@niveausuperieur.ca"
              className="btn-secondary w-full flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Nous écrire</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

    return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <section className="bg-card border-theme">
        <div className="container-custom py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-theme mb-2">Demande de soumission</h1>
            <p className="text-muted mb-8">
              Obtenez une soumission détaillée et personnalisée pour votre projet
            </p>

            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    currentStep >= step.number
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'border-theme text-muted'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-red-600' : 'text-muted'
                    }`}>
                      Étape {step.number}
                    </div>
                    <div className={`text-xs ${
                      currentStep >= step.number ? 'text-theme' : 'text-muted'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-4 ${
                      currentStep > step.number ? 'bg-red-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="bg-card rounded-lg card-shadow p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="heading-md text-black mb-6">Coordonnées</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom de famille *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          placeholder="514-555-7890"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Location */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="heading-md text-black mb-6">Localisation du projet</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Adresse du projet *
                        </label>
                        <input
                          type="text"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          placeholder="123 Rue Exemple"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ville *
                          </label>
                          <input
                            type="text"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                            placeholder="Montréal"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Code postal
                          </label>
                          <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                            placeholder="H1A 1A1"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type de projet *
                          </label>
                          <select
                            name="projectType"
                            required
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          >
                            <option value="">Sélectionnez un type</option>
                            {projectTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Type de propriété
                          </label>
                          <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          >
                            <option value="">Sélectionnez un type</option>
                            {propertyTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Project Details */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="heading-md text-black mb-6">Détails du projet</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Portée du projet *
                        </label>
                        <textarea
                          name="projectScope"
                          required
                          rows={4}
                          value={formData.projectScope}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          placeholder="Décrivez votre projet en détail..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Pièces concernées (sélectionnez toutes les pièces applicables)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {roomTypes.map((room, index) => (
                            <label key={index} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={formData.rooms.includes(room)}
                                onChange={() => handleCheckboxChange(room, 'rooms')}
                                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                              />
                              <span className="text-sm text-gray-700">{room}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Échéancier souhaité *
                        </label>
                        <select
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Sélectionnez un délai</option>
                          {timelineOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Budget & Preferences */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="heading-md text-black mb-6">Budget et préférences</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget approximatif *
                        </label>
                        <select
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Sélectionnez une fourchette</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Priorité principale
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Sélectionnez une priorité</option>
                          <option value="qualite">Qualité maximale</option>
                          <option value="budget">Respect du budget</option>
                          <option value="delai">Rapidité d&apos;exécution</option>
                          <option value="equilibre">Équilibre qualité/prix/délai</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Préférences de matériaux
                        </label>
                        <textarea
                          name="materials"
                          rows={3}
                          value={formData.materials}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          placeholder="Décrivez vos préférences en matière de matériaux, style, marques..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Final Details */}
                {currentStep === 5 && (
                  <div>
                    <h2 className="heading-md text-black mb-6">Informations complémentaires</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description détaillée de votre projet *
                        </label>
                        <textarea
                          name="description"
                          required
                          rows={5}
                          value={formData.description}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                          placeholder="Ajoutez tous les détails importants, contraintes particulières, objectifs spécifiques..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Avez-vous des plans ou documents?
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="hasPlans"
                              value="oui"
                              checked={formData.hasPlans === 'oui'}
                              onChange={handleInputChange}
                              className="border-gray-300 text-red-600 focus:ring-red-500"
                            />
                            <span className="text-sm text-gray-700">Oui, j&apos;ai des plans/documents</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input
                              type="radio"
                              name="hasPlans"
                              value="non"
                              checked={formData.hasPlans === 'non'}
                              onChange={handleInputChange}
                              className="border-gray-300 text-red-600 focus:ring-red-500"
                            />
                            <span className="text-sm text-gray-700">Non, j&apos;ai besoin d&apos;aide pour la conception</span>
                          </label>
                        </div>
                      </div>

                      {formData.hasPlans === 'oui' && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Télécharger vos fichiers
                          </label>
                          <div className="border-2 border-theme rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 text-muted mx-auto mb-2" />
                            <p className="text-sm text-muted mb-2">
                              Glissez vos fichiers ici ou cliquez pour parcourir
                            </p>
                            <input
                              type="file"
                              multiple
                              accept=".pdf,.jpg,.jpeg,.png,.dwg"
                              onChange={handleFileUpload}
                              className="hidden"
                              id="file-upload"
                            />
                            <label
                              htmlFor="file-upload"
                              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
                            >
                              Sélectionner fichiers
                            </label>
                            <p className="text-xs text-muted mt-2">
                              PDF, JPG, PNG, DWG (max 10MB par fichier)
                            </p>
                          </div>
                          {formData.files.length > 0 && (
                            <div className="mt-4">
                              <p className="text-sm font-medium text-gray-700 mb-2">Fichiers sélectionnés:</p>
                              <ul className="space-y-1">
                                {formData.files.map((file, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    {file.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Méthode de contact préférée
                        </label>
                        <select
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Sélectionnez une méthode</option>
                          <option value="telephone">Téléphone</option>
                          <option value="email">Email</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="rencontre">Rencontre en personne</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t">
                    <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center space-x-2 px-6 py-3 border border-theme rounded-lg text-muted hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Précédent</span>
                  </button>

                  <div className="text-center">
                    <span className="text-sm text-gray-500">
                      Étape {currentStep} sur {totalSteps}
                    </span>
                  </div>

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!isStepValid()}
                      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      <span>Suivant</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isStepValid() || isSubmitting}
                      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Envoyer la demande</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
