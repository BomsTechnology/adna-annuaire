/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: "Lexend",
        sans: ['"Lexend"'],
      },
      colors: {
        "adna-green": "#16A085",
        "adna-brown": "#854D0E",
        "adna-yellow": "#FDDF5C",
        "adna-footer": "#576574",
        "adna-subfooter": "#222f3e",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
