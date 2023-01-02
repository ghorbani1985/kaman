/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.666667%",
      },
      colors: {
        mainColor: "#2851A2",
        secondColor: "#EFAC35",
      },
    },
  },
  plugins: [],
};
