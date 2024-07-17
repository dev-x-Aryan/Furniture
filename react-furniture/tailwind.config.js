/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        '1.25': '0.3125rem',  // Custom translate value for 5px
        '-1.25': '-0.3125rem', // Custom negative translate value for -5px
      }
    },
  },
  plugins: [],
};
