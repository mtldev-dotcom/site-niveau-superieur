# Niveau Supérieur Construction - Website

A modern, responsive website for Niveau Supérieur Construction, a Quebec-based general contractor specializing in residential and commercial construction projects.

## 🏗️ Project Overview

This website showcases the services, projects, and expertise of Niveau Supérieur Construction, featuring:
- Bilingual support (French primary, English secondary)
- Interactive project galleries with before/after comparisons
- Multi-step quote request system
- Responsive design optimized for all devices
- SEO-optimized with structured data

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Montserrat, Poppins, Open Sans (Google Fonts)
- **Image Optimization**: Next.js Image component
- **SEO**: Structured data (JSON-LD), metadata optimization

## 📁 Project Structure
```
site/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── BeforeAfterSlider.tsx  # Interactive image slider
│   │   └── JsonLd.tsx      # Structured data component
│   ├── a-propos/           # About page
│   ├── contact/            # Contact page
│   ├── projets/            # Projects gallery
│   ├── services/           # Services page
│   ├── soumission/         # Quote request form
│   ├── globals.css         # Global styles and Tailwind config
│   ├── layout.tsx          # Root layout with SEO metadata
│   └── page.tsx            # Homepage
├── public/
│   ├── images/             # Website images and logos
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine directives
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 🎨 Design System

### Colors
- **Primary Red**: `#DC2626` (red-600)
- **Primary Black**: `#000000`
- **Text Gray**: `#4B5563` (gray-600)
- **Background**: `#F9FAFB` (gray-50)

### Typography
- **Headings**: Montserrat (700)
- **Subheadings**: Poppins (600)
- **Body Text**: Open Sans (400)

### Components
- Custom button styles (`btn-primary`, `btn-secondary`)
- Card shadows and hover effects
- Responsive grid layouts
- Mobile-first design approach

## 🌟 Key Features

### Interactive Components
- **Before/After Slider**: Touch and mouse-enabled comparison slider for project showcases
- **Multi-step Form**: 5-step quote request system with validation
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Image Galleries**: Optimized image loading with Next.js Image

### SEO Optimization
- Complete metadata configuration
- OpenGraph and Twitter Card support
- JSON-LD structured data for local business
- Sitemap and robots.txt
- French language optimization

### Pages
1. **Homepage** (`/`): Hero section, services overview, testimonials, recent projects
2. **Services** (`/services`): Detailed service descriptions with processes
3. **Projects** (`/projets`): Gallery with filtering and before/after comparisons
4. **About** (`/a-propos`): Company history, values, team, certifications
5. **Contact** (`/contact`): Contact form, location, hours, service areas
6. **Quote** (`/soumission`): Multi-step quote request form

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The website is built for static export and can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

### Build for Production
```bash
npm run build
```

## 🔮 Future Enhancements

### Planned Features
- [ ] Supabase integration for contact forms
- [ ] Full bilingual FR/EN support with next-intl
- [ ] Advanced project filtering
- [ ] Client portal for project tracking
- [ ] Blog/news section
- [ ] Google Maps integration
- [ ] Performance monitoring

### Potential Integrations
- **CMS**: Sanity.io or Strapi for content management
- **Analytics**: Google Analytics 4
- **Forms**: Supabase or Formspree
- **Maps**: Google Maps API
- **Chat**: WhatsApp Business API

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js automatic optimization
- **Bundle Size**: < 130kB first load JS

## 📞 Company Information

**Niveau Supérieur Construction**
- **License**: RBQ 5859-1223-01
- **Experience**: 46+ years combined
- **Phone**: (514) 555-7890
- **Email**: info@niveausuperieur.ca
- **Service Area**: Greater Montreal (Montréal, Laval, Longueuil, Brossard)

## 📋 Services Offered

1. **Construction résidentielle** - Custom residential construction
2. **Rénovations & agrandissements** - Renovations and extensions
3. **Projets commerciaux** - Commercial and industrial projects
4. **Charpente & structures** - Framing and structural work
5. **Finition intérieure** - Interior finishing
6. **Électricité & domotique** - Electrical and smart home systems

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for Niveau Supérieur Construction.

## 📧 Support

For technical support or questions about the website:
- Email: dev@niveausuperieur.ca
- Issues: Create an issue in this repository

---

**Built with ❤️ using Next.js 15 and modern web technologies**