/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Hobbit greenhouse palette: mossy greens, warm amber candle-light, parchment cream
        moss: {
          50:  '#f2f4ed',
          100: '#e3e8d8',
          200: '#c6d0b1',
          300: '#a5b488',
          400: '#869a66',
          500: '#6b8150',
          600: '#536740',
          700: '#425135',
          800: '#36422d',
          900: '#2b3425',
          950: '#171d13',
        },
        parchment: {
          50:  '#fbf7ec',
          100: '#f5efe0',
          200: '#ede3cc',
          300: '#e0d1ae',
          400: '#cfbb8b',
          500: '#bfa46d',
          600: '#a88955',
          700: '#856b43',
          800: '#6b563a',
          900: '#574733',
        },
        ember: {
          50:  '#fcf5e9',
          100: '#f6e4c0',
          200: '#eec98a',
          300: '#e2ac5a',
          400: '#d4913a',
          500: '#c07728',
          600: '#a25e22',
          700: '#82491f',
          800: '#663a1c',
          900: '#4f2e19',
        },
        bark: {
          50:  '#f1ece3',
          100: '#dcd1bb',
          200: '#b9a688',
          300: '#8d7555',
          400: '#6a543b',
          500: '#523f2c',
          600: '#402f22',
          700: '#31241a',
          800: '#241a12',
          900: '#17110c',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'ui-serif', 'cursive'],
      },
      letterSpacing: {
        'widest-2': '.32em',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(212,145,58,.35)',
        candle: '0 20px 60px -20px rgba(23,29,19,.6), 0 2px 8px -2px rgba(23,29,19,.3)',
      },
      backgroundImage: {
        'leaf-noise':
          "radial-gradient(circle at 20% 20%, rgba(212,145,58,.08), transparent 55%), radial-gradient(circle at 80% 70%, rgba(107,129,80,.12), transparent 55%)",
        'parchment-grain':
          "radial-gradient(rgba(35,44,27,.05) 1px, transparent 1px)",
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%':     { transform: 'translate3d(0,-8px,0)' },
        },
        flicker: {
          '0%,100%': { opacity: '1' },
          '45%':     { opacity: '.92' },
          '55%':     { opacity: '.96' },
        },
        steam: {
          '0%':   { opacity: '0', transform: 'translateY(0) scale(1)' },
          '20%':  { opacity: '.7' },
          '100%': { opacity: '0', transform: 'translateY(-60px) scale(1.6)' },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        flicker: 'flicker 4.5s ease-in-out infinite',
        steam: 'steam 4.5s ease-out infinite',
      },
    },
  },
  plugins: [],
};
