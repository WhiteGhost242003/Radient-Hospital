/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F4C81",
          50: "#e8f1fb",
          100: "#c5d9f3",
          200: "#9ec0ea",
          300: "#77a6e1",
          400: "#5d93db",
          500: "#4380d5",
          600: "#3872c7",
          700: "#2a60b3",
          800: "#1d4f9e",
          900: "#0F4C81",
        },
        teal: {
          DEFAULT: "#2BB3B1",
          50: "#e5f7f7",
          100: "#bfecec",
          200: "#95e0df",
          300: "#6ad4d3",
          400: "#4dc9c8",
          500: "#2BB3B1",
          600: "#26a5a3",
          700: "#1f9391",
          800: "#18817f",
          900: "#0d6260",
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

