/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      colors: {
        main: {
          primary: "#00BFA6", // Hijau cerah untuk elemen utama seperti navbar, tombol, atau header
          accent: "#7ED4AD",  // Kuning keemasan untuk menarik perhatian, seperti ikon atau elemen kecil
          secondary: "#F4F9F9", // Putih kebiruan untuk latar belakang elemen kontainer
          dark: "#007965",    // Hijau tua untuk kontras di elemen footer atau bagian yang lebih serius
        },
        textShadow: {
          sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
          DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        },
        light: {
          one: "#E8F5E9", // Hijau pastel lembut untuk area latar belakang yang besar
          two: "#FFFDE7", // Kuning pastel untuk elemen yang ingin terlihat lembut tapi ceria
        },
        textColor: {
          primary: "#004D40", // Hijau gelap untuk teks utama (profesional dan nyaman di mata)
          secondary: "#00796B",
          white:"#FBF8EF", // Biru-hijau untuk teks sekunder atau link
        }
      }
      
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
