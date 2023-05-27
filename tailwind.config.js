/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html, js}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        roboto_regular: ["roboto-regular", "sans-serif"],
        roboto_bold: ["roboto-bold", "sans-serif"],
        roboto_semi: ["roboto-semi", "sans-serif"],
      },
    },
    colors: {
      primary: "#3ed3c1",
      dark: "#264653",
      textGreen: "#2ca697",
      button: "#3e71d3",
      border: "#abc9cb",
      error: "#e76f51",
    },
  },
  plugins: [],
};
