/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        verdeescuro: "var(--verdeescuro)",
        verdeclaro: "var(--verdeclaro)",
        amarelo: "var(--amarelo)",
        laranja: "var(--laranja)",
      },
      boxShadow: {
        sombrainterna: "var(--sombrainterna)",
        sombra: "var(--sombracontainer)",
      },
      gridTemplateColumns: {
        '2-cols': '0.5fr 1fr',
      },
    },
  },
  plugins: [],
};
