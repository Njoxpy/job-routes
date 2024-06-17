/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#bc4123",
        secondary: "#2b3452",
        whit: "#bbb",
      },
    },
  },
  plugins: [],
};
