/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend : {

      colors: {
        grey: {
          50: '#dbd9d6',
          100: '#c5c3c0',
          200: '#afadab',
          300: '#999795',
          400: '#838280',
          500: '#6d6c6b',
          600: '#575655',
          700: '#414140',
          800: '#2b2b2a',
          900: '#151515',
        },
      },
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}