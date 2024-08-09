/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: { 300: "hsl(226, 100%, 75%)", 500: "hsl(223, 73%, 59%)" },
        danger: { 500: "hsl(11, 61%, 46%)" },
        black: { 500: "hsl(225, 8%, 9%)" },
      },
    },
  },
  plugins: [],
};
