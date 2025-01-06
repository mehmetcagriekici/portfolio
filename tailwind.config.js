/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"], // Use for body text
        play: ["Playfair Display", "serif"], // Use for headers or elegant sections
        rale: ['"Raleway Dots"', "cursive"], // Adding Raleway Dots as a custom font
        orb: ['"Orbitron"', "sans-serif"], // Adding Orbitron for bold styling
      },

      keyframes: {},

      animation: {},
    },
  },
  plugins: [],
};
