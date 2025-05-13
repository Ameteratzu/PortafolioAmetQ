/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        accent:  '#F472B6',
        darkbg:  '#0F172A',
      },
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui'],
      },
    },
  },
  plugins: [],
}
