/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        black: "#323643",
        grey: "#606470",
        white: "#F7F7F7",
        blue: "#93DEFF",
      },
    },
  },
  plugins: [],
};
