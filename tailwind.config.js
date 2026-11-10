/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#081020',
        card: {
          DEFAULT: 'rgba(21, 42, 71, 0.72)',
          solid: '#152A47',
          hover: 'rgba(28, 54, 90, 0.85)',
          border: 'rgba(59, 130, 246, 0.25)',
        },
        space: {
          dark: '#081020',
          deep: '#0B1528',
          card: '#152A47',
          border: 'rgba(34, 211, 238, 0.2)',
          glow: 'rgba(59, 130, 246, 0.35)',
        },
        primary: {
          DEFAULT: '#3B82F6',
          glow: '#60A5FA',
          dark: '#1D4ED8',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          glow: '#67E8F9',
        },
        purple: {
          DEFAULT: '#A855F7',
          glow: '#C084FC',
        },
        alert: {
          red: '#F43F5E',
          yellow: '#FBBF24',
          green: '#10B981',
          blue: '#3B82F6',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
          glow: '#E0F2FE',
        }
      },
      borderRadius: {
        'card': '18px',
        'badge': '9999px',
        'inner': '12px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px -3px rgba(34, 211, 238, 0.35)',
        'glow-primary': '0 0 25px -4px rgba(59, 130, 246, 0.45)',
        'glow-purple': '0 0 25px -4px rgba(168, 85, 247, 0.4)',
        'glow-red': '0 0 20px -3px rgba(244, 63, 94, 0.45)',
        'glow-green': '0 0 20px -3px rgba(16, 185, 129, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'glass-inset': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'orbit-slow': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit 28s linear reverse infinite',
        'scanline': 'scanline 4s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};

