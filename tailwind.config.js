/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#FAF9F6",
        warm: "#F4F1EB",
        sand: "#E8E0D3",
        mist: "#EDEDED",
        graphite: "#2B2B2B",
        ink: "#141414",
        stone: "#8A867E",
        clay: "#B8AFA1"
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', '"Helvetica Neue"', "Arial", "sans-serif"]
      },
      letterSpacing: {
        widest2: "0.28em"
      },
      maxWidth: {
        editorial: "88rem"
      }
    }
  },
  plugins: []
};
