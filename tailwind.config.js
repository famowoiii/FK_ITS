/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
        "6rem": "6rem",
        "7rem": "7rem",
        "8rem": "8rem",
        "9rem": "9rem",
        "10rem": "10rem",
        // ... tambahkan ukuran lainnya sesuai kebutuhan
        "100rem": "100rem",
      },
      height: {
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
        "6rem": "6rem",
        "7rem": "7rem",
        "8rem": "8rem",
        "9rem": "9rem",
        "10rem": "10rem",
        // ... tambahkan ukuran lainnya sesuai kebutuhan
        "100rem": "100rem",
      },
      width: {
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
        "6rem": "6rem",
        "7rem": "7rem",
        "8rem": "8rem",
        "9rem": "9rem",
        "10rem": "10rem",
        // ... tambahkan ukuran lainnya sesuai kebutuhan
        "100rem": "100rem",
      },
      backgroundImage: {
        gedung: "url('./assets/gedung.jpeg')",
        logoITS: "url('./assets/Logo ITS.png')",
      },
      translate: {
        "40rem": "40rem",
        "100rem": "100rem",
      },
      colors: {
        hitam: "#000000",
        biruMuda: "#0066AB",
        biruTua: "#OE1F3B",
      },
    },
  },

  plugins: [],
};
