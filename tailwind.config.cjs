/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: "Lexend",
      },
      colors: {
        "adna-green": "#16A085",
        "adna-brown": "#854D0E",
        "adna-yellow": "#FDDF5C",
      },
    },
  },
  plugins: [],
};
