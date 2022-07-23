/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
        'maroon': {
          200: '#800000',
          100: '#8F3931',
        },
        'silver': "#767676",
        'gold': 'FFA319',
        'ghostly-black': '#252525'
    },
    fontFamily:{
      sans: ['Ubuntu','sans-serif'],
      serif: ['Ibarra Real Nova', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}