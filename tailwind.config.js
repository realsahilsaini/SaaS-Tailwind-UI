/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        "kode": ["Kode Mono", "sans-serif"],
      }, 
      colors:{
        primary: '#3238f2'
      }
    },
  },
  plugins: [],
}

