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
        'main-color' : '#363636',
        'sub-color' : '#788078',
        'accordion-bg-color' : '#e6e6e6',
        'about-color' : '#A567D8',
        'try-color' : '#00B7FF',
        'faq-color' : '#E71980',
      },
    },
  },
  plugins: [],
};
export default config;
