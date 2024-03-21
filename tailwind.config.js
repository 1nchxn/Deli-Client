/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF4433",
        purple: "#BF40BF",
        secondary: "#555",
        primaryBG: "#FCFCFC",
      },
    },
  },
  plugins: [require("daisyui")],
};
