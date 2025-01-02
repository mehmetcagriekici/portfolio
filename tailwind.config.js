/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto Mono, serif",
        exo: ["Exo 2", "sans-serif"],
      },

      keyframes: {
        textEnterFrame: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "80%": { transform: "translateY(100%)", opacity: "0.25" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },

        personalCardEnterFrameMd: {
          "0%": { opacity: "0", height: "0" },
          "100%": { opacity: "1", height: "20%" },
        },

        lgDiskFrame: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        lgCardEnterTopFrame: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },

        lgCardEnterBotFrame: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },

      animation: {
        textEnter: "textEnterFrame 1.2s ease forwards",
        personalCardEnterMd: "personalCardEnterFrameMd 0.8s ease forwards",
        lgDiskEnter: "lgDiskFrame 3.6s ease forwards",
        lgCardEnterTop: "lgCardEnterTopFrame 1.2s ease forwards",
        lgCardEnterBot: "lgCardEnterBotFrame 3.6s ease forwards",
      },
    },
  },
  plugins: [],
};
