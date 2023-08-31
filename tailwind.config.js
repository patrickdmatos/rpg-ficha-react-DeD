/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}","index.html"],
  theme: {
    extend: {
      fontFamily: {
        medievalsharp: ['MedievalSharp', 'sans'],
      },
      colors: {
        sky: {
          50: "#EFF3FB",
          100: "#5D90FF",
          200: "#4E7DE2",
          300: "#456EC7",
          400: "#385AA4",
          500: "#314E8E",
          600: "#284176",
          700: "#1E325B",
          800: "#18284A",
          900: "#0B1222",
        },
      },
    },
  },
  plugins: [],
})

