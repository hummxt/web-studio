import { Input } from 'postcss';

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
      quality: "rgba(107, 124, 255, 1)",
      grey: "rgba(205, 199, 210, 1)",
      border: "rgba(97, 153, 237, 0.26)",
      input: "rgba(43, 46, 60, 1)",
      button: "rgba(224, 228, 252, 1)",
      check: "rgba(213, 245, 234, 1)",
      card: "rgba(215, 231, 249, 1)"
    }
  },
  plugins: [],
}