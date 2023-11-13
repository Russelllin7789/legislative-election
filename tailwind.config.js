/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "orange-primary": "#DA7D4A",
      "orange-light": "#F7ECE1",
      "gray-darker": "#334155",
      "gray-primary": "#94A3B8",
      "gray-lighter": "#F1F5F9",
      "blue-light": "#E8E3FE",
    },
  },
  plugins: [],
};
