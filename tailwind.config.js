/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ec4899',
          hover: '#db2777',
          light: '#f472b6',
        },
        darkBg: '#09050b',
        darkCard: '#130d17',
        lightBg: '#fcfaf8',
        lightCard: '#ffffff',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
