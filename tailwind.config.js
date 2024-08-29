/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        primary: "#0FA47F",
        secondary: "#5536DA",
        background: "#343541",
      },
    },
  },
  plugins: [],
};
