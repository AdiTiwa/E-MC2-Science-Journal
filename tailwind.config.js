/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
        'maroon': {
          200: '#800000',
          100: '#8F3931',
        },
        'silver': "#767676",
        'gold': '#FFA319',
        'ghostly-black': '#252525',
        'white': "#FFFFFF",
    },
    fontFamily:{
      sans: ['Lato','sans-serif'],
      serif: ['Ibarra Real Nova', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}