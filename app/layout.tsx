import type { Metadata } from "next";
import { Montserrat, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { cookies } from 'next/headers';
import ClientWrapper from "./components/ClientWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Niveau Supérieur Construction | Entrepreneur Général Montréal",
    template: "%s | Niveau Supérieur Construction"
  },
  description: "Niveau Supérieur Construction - Entrepreneur général au Québec. 46 ans d'expérience combinée. Construction résidentielle, commerciale, rénovations. Licence RBQ 5859-1223-01.",
  keywords: [
    "construction", "entrepreneur général", "rénovation", "Montréal", "Laval", "Longueuil",
    "construction résidentielle", "construction commerciale", "RBQ", "charpente",
    "finition intérieure", "électricité", "domotique", "agrandissement"
  ],
  authors: [{ name: "Niveau Supérieur Construction" }],
  creator: "Niveau Supérieur Construction",
  publisher: "Niveau Supérieur Construction",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://niveausuperieur.ca",
    siteName: "Niveau Supérieur Construction",
    title: "Niveau Supérieur Construction | Entrepreneur Général Montréal",
    description: "Entrepreneur général au Québec. 46 ans d'expérience combinée. Construction résidentielle, commerciale, rénovations. Licence RBQ 5859-1223-01.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Niveau Supérieur Construction Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niveau Supérieur Construction | Entrepreneur Général Montréal",
    description: "Entrepreneur général au Québec. 46 ans d'expérience combinée. Construction résidentielle, commerciale, rénovations.",
    images: ["/images/logo.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://niveausuperieur.ca",
    languages: {
      "fr-CA": "https://niveausuperieur.ca",
      "en-CA": "https://niveausuperieur.ca/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setInitialTheme = `(function() {
    try {
      // Only apply when no explicit theme class is present (server may have rendered one)
      var root = document.documentElement;
      if (root.classList.contains('dark') || root.classList.contains('light')) return;
      var theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        root.classList.add('dark');
      } else if (theme === 'light') {
        root.classList.add('light');
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
      } else {
        root.classList.add('light');
      }
    } catch (e) {}
  })();`;

  // Read server-side cookie to set html class before hydration (Next.js server)
  const cookieStore = cookies();
  const themeCookie = cookieStore.get('theme')?.value;
  const htmlClass = themeCookie === 'dark' ? 'dark' : themeCookie === 'light' ? 'light' : '';

  return (
    <html lang="en" className={htmlClass}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${openSans.variable} font-open-sans antialiased`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
