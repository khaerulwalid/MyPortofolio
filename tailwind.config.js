/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09aedc",
        slate: "#0f172a"
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

