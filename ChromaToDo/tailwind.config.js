/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: (theme) => ({
        mainColor: theme("userColor", "#3e86f4"),
        mainR: "#dc3022",
        mainG: "#249b46",
        mainY: "#fcc92c",
        mainB: "#1274e9",
        accent: "#73787d",
      }),
    },
  },
  plugins: [],
};
