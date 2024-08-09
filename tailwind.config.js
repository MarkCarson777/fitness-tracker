/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: { 500: "hsl(223, 73%, 59%)" },
        danger: { 500: "hsl(11, 61%, 46%)" },
      },
    },
  },
  plugins: [],
};
