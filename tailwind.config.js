/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Mobile first approach
    screens: {
      'xs': '320px',     // Small mobile
      'sm': '375px',     // Regular mobile
      'md': '768px',     // Tablet
      'lg': '1024px',    // Laptop
      'xl': '1280px',    // Desktop
      '2xl': '1536px',   // Large screens
    },
    extend: {
      colors: {
        brand: {
          neon: '#40E0D0',      // Turquoise néon principal
          dark: '#1A2F2F',      // Vert foncé (fond)
          light: '#FFFFFF',     // Blanc lumineux
          black: '#000000',     // Noir profond
          secondary: '#2C3E3E', // Gris foncé
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Add other font families if needed
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      // Custom spacing for consistent layouts
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      // Box shadows with brand colors
      boxShadow: {
        'neon': '0 0 10px rgba(64, 224, 208, 0.5)',
        'neon-strong': '0 0 20px rgba(64, 224, 208, 0.8)',
      },
    },
  },
  // Custom plugins for browser compatibility
  plugins: [
    function({ addVariant }) {
      // Browser-specific variants
      addVariant('firefox', '@-moz-document url-prefix(){}');
      addVariant('safari', '@media not all and (min-resolution:.001dpcm)');
      addVariant('chrome', '@media screen and (-webkit-min-device-pixel-ratio:0)');
      // Touch device variant
      addVariant('touch', '@media (hover: none)');
      // Dark mode preference
      addVariant('dark-mode', '@media (prefers-color-scheme: dark)');
    }
  ],
  // Ensure we generate all variants for responsive design
  variants: {
    extend: {
      padding: ['responsive'],
      margin: ['responsive'],
      fontSize: ['responsive'],
      display: ['responsive'],
      opacity: ['responsive', 'hover', 'focus'],
    }
  }
}