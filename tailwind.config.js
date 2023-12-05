/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gedung: "url('./assets/gedung.jpeg')",
        logoITS: "url('./assets/Logo ITS.png')",
      },
      translate: {
        "40rem": "40rem",
      },
    },
  },
  plugins: [],
};
