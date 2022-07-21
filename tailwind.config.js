/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
        'maroon': {
          100: '#800000',
          200: '#8F3931',
        },
        'silver': "#767676",
        'gold': 'FFA319',
        'ghostly-black': '#252525'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}