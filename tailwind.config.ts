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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'theme-1' : '#706482',
        'theme-2' : '#4A4A4A',
        'theme-3' : '#7A897A',
        'theme-4' : '#F0F0F0',
      },
    },
  },
  plugins: [],
};
export default config;
