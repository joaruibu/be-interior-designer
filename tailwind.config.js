/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx, json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        bigilla: ["Bigilla"],
        playfair: ["Playfair Display"],
      },
      colors: {
        "bid-wine": "#7A2C28",
        "bid-terracotta": "#AA2713",
        "bid-skin": "#F8C9B7",
        "bid-light-skin": "#FCF1EA",
        "bid-sand": "#D58F54",
        "bid-light-sand": "#E4C0A2",
        "bid-light-green": "#A5A58B",
        "bid-aqua": "#528F91",
      },
    },
  },
  plugins: [],
};
