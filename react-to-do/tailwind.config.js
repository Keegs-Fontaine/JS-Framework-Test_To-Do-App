/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "black",

      "clr-primary": "#FF5151",

      "clr-neutral-900": "hsl(0 0% 98%)",
      "clr-neutral-800": "hsl(0 0% 85%)",
      "clr-neutral-700": "hsl(0 0% 71%)",
    },
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { visibility: "visible", opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { visibility: "hidden", opacity: 0 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.25s ease-in-out forwards",
        "fade-out": "fade-out 0.25s ease-in-out forwards",
      },
      boxShadow: {
        screen: "0 0 100vmax 100vmax rgb(0 0 0 / 0.25)",
      },
    },
  },
  plugins: [],
}
