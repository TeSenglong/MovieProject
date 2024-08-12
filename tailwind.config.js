
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

    screens: {
      'xxs':'340px',
      'xs':'440px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      color:{
        primary:'#0cdefa',
        secondary:'#111827',
        manimo:'#09142C'
      },
      width: {
        '128': '32rem',
        '50vh':'50vh',
        '70vh':'70vh',
        '90vh':'90vh',
      },
      height: {
        '11/12': '95%',
        '50vh':'50vh',
        '70vh':'70vh',
        '85vh':'85vh',
        '90vh':'90vh',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin')
  ],
}

