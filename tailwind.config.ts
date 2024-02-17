import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F9F7F3", // Light Cream
        primaryLight: "#B5E2FA", // Light Sky Blue
        primaryDark: "#0FA3B1", // Teal Blue
        secondary: "#EDDEA4", // Light Khaki
        accent: "#ADE8F4", // Light Blue-Green
        accentDark: "#F7A072", // Salmon Pink
      },
    },
  },
  plugins: [],
};

export default config;
