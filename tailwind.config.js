/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "rgba(29, 33, 48, 1)",
      secondary: "rgba(255,255,255, 1)",
      quality: "rgba(107, 124, 255, 1)"
    }
  },
  plugins: [],
}