/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#9FEF00",
        dark: {
          DEFAULT: "#141D2B",
          lighter: "#1A2332",
          card: "#1E2936",
        },
      },
    },
  },
  plugins: [],
};
