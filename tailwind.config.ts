import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'F6F7F9' : '#F6F7F9',
        '616161' : '#616161',
        'E4252C' : '#E4252C',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        body: ['Nunito', 'serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
