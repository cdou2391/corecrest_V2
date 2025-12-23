/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout.tsx",
    "./App.tsx",
    "./main.tsx",
    "./api/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

