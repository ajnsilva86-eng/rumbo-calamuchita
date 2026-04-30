import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef4ee",
          100: "#d9e7d9",
          600: "#3f6f45",
          700: "#315b37",
          900: "#203c27"
        },
        earth: {
          100: "#f3eadb",
          200: "#e5d3b7",
          500: "#a47956",
          700: "#71513a"
        },
        cream: "#fbf7ef"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(32, 60, 39, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
