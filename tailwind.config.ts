import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        'brand-red': {
          DEFAULT: '#C20000',
          light: '#E00000',
          dark: '#A00000',
        },
        'brand-black': '#000000',
        'brand-gray': {
          DEFAULT: '#777777',
          light: '#999999',
          dark: '#555555',
        },
        'brand-white': '#FFFFFF',

        // Theme tokens mapped to CSS variables (from app/globals.css)
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        'primary-foreground': "var(--primary-foreground)",
        secondary: "var(--secondary)",
        'secondary-foreground': "var(--secondary-foreground)",
        muted: "var(--muted)",
        'muted-foreground': "var(--muted-foreground)",
        accent: "var(--accent)",
        'accent-foreground': "var(--accent-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: "var(--card)",
        'card-foreground': "var(--card-foreground)",
      },
      fontFamily: {
        'sans': ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': '800',
      },
      borderRadius: {
        'brand': '12px',
      },
      boxShadow: {
        'brand': '0 10px 30px rgba(194, 0, 0, 0.1)',
        'brand-hover': '0 15px 40px rgba(194, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #C20000 0%, #E00000 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
