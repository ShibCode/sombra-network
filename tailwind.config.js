const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", ...defaultTheme.fontFamily.sans],
        turret: "Turret Road",
      },

      colors: {
        green: "#A3FF00",
      },
    },
  },
  plugins: [],
};
