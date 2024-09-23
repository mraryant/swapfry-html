/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}' // Add this line to include all HTML and JS files in the src directory
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'max': '550px' },
        'tablet': { 'max': '768px' },
        'laptop': { 'max': '1024px' },
        'desktop': { 'max': '1200px' },
      },
    },
  },
  plugins: [],
}