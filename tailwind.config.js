/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bhagwa: '#E85D04',
        saffron: '#FF7900',
        bright: '#FF9E36',
        cream: '#FFF8F0',
        char: '#242424',
        gold: '#D4A64A',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Hind', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
