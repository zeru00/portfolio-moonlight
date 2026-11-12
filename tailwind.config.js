/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moonlight: {
          darkest: '#070204',
          deep: '#0e0407',
          surface: '#17060b',
          card: '#1e090f',
          cardHover: '#2a0c16',
          border: 'rgba(239, 68, 68, 0.18)',
          borderHover: 'rgba(239, 68, 68, 0.45)',
          maroon: {
            900: '#38040e',
            800: '#540b17',
            700: '#730d1d',
            600: '#8e1224',
            500: '#b0182f',
          },
          red: {
            DEFAULT: '#ff3355',
            glow: '#ff1a40',
            bright: '#ff4d6d',
            soft: '#ff758f',
            muted: '#e57373',
          }
        }
      },
      backgroundImage: {
        'moonlight-radial': 'radial-gradient(circle at 50% 0%, rgba(220, 20, 60, 0.22) 0%, rgba(115, 13, 29, 0.12) 35%, rgba(7, 2, 4, 0.95) 80%)',
        'moonlight-glow': 'radial-gradient(ellipse at top, rgba(239, 68, 68, 0.25), transparent 70%)',
        'maroon-gradient': 'linear-gradient(135deg, rgba(84, 11, 23, 0.7) 0%, rgba(23, 6, 11, 0.95) 100%)',
      },
      boxShadow: {
        'moon-glow': '0 0 50px -10px rgba(220, 38, 38, 0.35)',
        'moon-glow-lg': '0 0 90px -15px rgba(239, 68, 68, 0.4)',
        'maroon-card': '0 8px 30px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 100, 120, 0.1)',
        'maroon-card-hover': '0 12px 40px rgba(180, 20, 40, 0.25), inset 0 1px 0 rgba(255, 100, 120, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

