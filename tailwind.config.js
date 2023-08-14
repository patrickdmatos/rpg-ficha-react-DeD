/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}","index.html"],
  theme: {
    extend: {
      fontFamily: {
        medievalsharp: ['MedievalSharp', 'sans'],
      },
    },
  },
  plugins: [],
}

