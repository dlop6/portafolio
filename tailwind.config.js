/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  extend: {
    colors: {
      primaryStart: '#0D3B66',
      primaryMid: '#5EEAD4',
      primaryEnd: '#FAF0CA',
      accentPink: '#F47174',
      accentPurple: '#8E44AD',
      accentBlue: '#2980B9',
      accentYellow: '#F4D35E',
      accentGreen: '#2ECC71',
      accentRed: '#E74C3C',
      neutralDark: '#1F2833',
      neutralMed: '#C5C6C7',
      neutralLight: '#F0F0F0',
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-accent': 'linear-gradient(to right, #F47174, #8E44AD, #2980B9)',
      'gradient-cool': 'linear-gradient(to right, #0D3B66, #5EEAD4, #FAF0CA)',
    },
    fontFamily: {
      sans: ['Inter', ..._fontFamily.sans],
    },
    keyframes: {
      scaleXGrow: {
        '0%': { transform: 'scaleX(0)' },
        '100%': { transform: 'scaleX(1)' },
      },
      pulseBlob: {
        '0%, 100%': { opacity: '0.2' },
        '50%': { opacity: '0.5' },
      }
    },
    animation: {
      'scale-x': 'scaleXGrow 0.6s ease-out forwards',
      'blob-pulse': 'pulseBlob 3s ease-in-out infinite',
    }
  },
};
export const plugins = [];
