/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        Rozha: ["Rozha One", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
