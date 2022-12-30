/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      'white': '#fff',
      'gray-dark': '#2a2a2a',
      'gray-light': '#888',
      'gray-plusdark': '#1a1a1a'
    },
    maxWidth: {
        'max-w-2xl': '672px',
        'max-w-4xl': '960px',
        'max-w-6xl': '1200px',
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
  options: {
    important: true,
  }
}
