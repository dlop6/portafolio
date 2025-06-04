/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryStart:   '#ff8c00',
        primaryMid:     '#ff5500',
        primaryEnd:     '#ff2200',
        accentLime:     '#00ff00',
        accentAmber:    '#ffbf00',
        neutralBlack:   '#000000',
        neutralDark:    '#111111',
        neutralMed:     '#222222',
        neutralLight:   '#333333',
        textGray:       '#bbbbbb',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-accent':  'linear-gradient(to right, #ffbf00, #00ff00)',
      },
      fontFamily: {
        // Usamos Fira Code como fuente monospace principal
        sans: ['"Fira Code"', 'Consolas', 'Monaco', 'Menlo', ..._fontFamily.sans],
        mono: ['"Fira Code"', 'Consolas', 'Monaco', 'Menlo', ..._fontFamily.mono],
      },
      keyframes: {
        scaleXGrow: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        pulseBlob: {
          '0%, 100%': { opacity: '0.15' },
          '50%':      { opacity: '0.35' },
        }
      },
      animation: {
        'scale-x':    'scaleXGrow 0.6s ease-out forwards',
        'blob-pulse': 'pulseBlob 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
