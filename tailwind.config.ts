import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151A1F",
        mist: "#F5F7FA",
        line: "#DDE4EA",
        pine: "#116149",
        sky: "#1F7A9D",
        gold: "#B6751A",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(21, 26, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
