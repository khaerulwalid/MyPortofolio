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
        secondary: "#0f172a",
        linkedin: "#0077B5",
        whatsapp: "#25d366",
        github: "#2b3137",
        white: "#e2e8f0"
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(16), blink .7s infinite"
      }
    },
  },
  plugins: [],
}

