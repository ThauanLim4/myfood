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
        vermelho: "var(--vermelho)",
        cordopix: "#38BEB0",
        cordodinheiro: "#C2E7C5",
        cordocartao: "#ffc408",
      },
      boxShadow: {
        sombrainterna: "var(--sombrainterna)",
        sombra: "var(--sombracontainer)",
      },
      gridTemplateColumns: {
        '2-cols': '0.5fr 1fr',
        '3-cols': '0.7fr 1fr 0.3fr',
      },
      borderWidth: {
        3: "3px",
      },
      maxHeight: {
        '600': "600px",
        'complete': "100%"
      }
    },
  },
  plugins: [],
};
