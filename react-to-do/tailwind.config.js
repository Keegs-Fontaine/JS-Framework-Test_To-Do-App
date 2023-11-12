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
  },
  plugins: [],
}
