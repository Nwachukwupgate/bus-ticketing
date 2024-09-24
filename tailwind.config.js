/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md':'766px',
      'lg': '1025px',
      // xl: '1279px',
      //   '2xl': '1399px', 
      // @media (min-width)
     
    },
    extend: {},
  },
  plugins: [],
}

