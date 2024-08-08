
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {

    screen: {
      'xs': '475px',
    },
    extend: {
      color:{
        primary:'#0cdefa',
        secondary:'#111827',
        manimo:'#09142C'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin')
  ],
}

