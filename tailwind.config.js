/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        funnel: ['"Funnel Sans"', "sans-serif"],
        montserrat: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};