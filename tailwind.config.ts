import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "why-we-are-different": "url('@/assets/ronaldinho3.png')",
      },
      fontFamily: {
        title: ["var(--font-gazzetta)"],
        body: ["var(--font-anek-latin)"],
      },
      colors: {
        "primary-green": "#00FF63",
        "secondary-green": "#3EFF48",
        "yellow-green": "#CEFF08",
        "background-gray": "#F9F9F9",
        "light-gray": "#E3E3E3",
        "mid-gray": "#9A9A9A",
        "dark-gray": "#4E4E4E",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
} satisfies Config;
