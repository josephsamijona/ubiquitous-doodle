// tailwind.config.js
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          50: '#E5F0FF',    // Bleu très clair pour les fonds
          100: '#CCE4FF',
          200: '#99C9FF',
          300: '#66ADFF',
          400: '#3392FF',
          500: '#0066FF',   // Bleu vif pour les actions
          600: '#0052CC',
          700: '#0A2659',   // Bleu profond navy
          800: '#001F4D',
          900: '#001333',
        },
        secondary: {
          50: '#F5F7FA',    // Gris très clair
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',   // Gris moyen
          600: '#475569',   // Gris foncé pour texte
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        text: {
          primary: '#1E293B',     // Texte principal
          secondary: '#475569',   // Texte secondaire
          light: '#FFFFFF',       // Texte clair sur fond foncé
        },
        background: {
          light: '#FFFFFF',      // Fond clair
          dark: '#0A2659',       // Fond foncé (navy)
          alternate: '#F5F7FA',  // Fond alternatif
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        'screen-90': '90vh',
        'screen-80': '80vh',
      },
      fontFamily: {
        sans: [
          'Inter var',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.125' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'float': 'float 10s ease-in-out infinite',
        'float-slow': 'float 15s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '25%': { 
            transform: 'translate(10px, -10px) rotate(2deg)',
          },
          '50%': {
            transform: 'translate(20px, 0) rotate(-2deg)',
          },
          '75%': {
            transform: 'translate(10px, 10px) rotate(2deg)',
          }
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wave-pattern': "url('/src/assets/wave-pattern.svg')",
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)",
      },
    },
  },
  plugins: [
    forms({
      strategy: 'class',
    }),
    typography,
    aspectRatio,
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}