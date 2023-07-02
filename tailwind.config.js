/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        black: "#010103",
      },
      fontFamily: {
        ultra: ["Ultra", "serif"],
        holtwoodOneSC: ["Holtwood One SC", "sans-serif"],
        freckleFace: ["Freckle Face", "sans-serif"],
        titanOne: ["Titan One", "sans-serif"],
        fredokaOne: ["Fredoka One", "sans-serif"],
        timmana: ["Timmana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
