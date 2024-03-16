/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}"'],
  theme: {
    extend: {
      colors:{
        primary:"#191a19",
        secondary: "#f7de1f",
        hover: "#f7e76a",
        main:"#fafbfb"
      },
      gridColumn:{
        auto:'auto'
      }
    },
  },
  plugins: [],
}

