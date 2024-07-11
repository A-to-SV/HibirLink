import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D55DB',
        'primary-text': '#006CE1',
        'gradient-start': '#4facfe',
        'gradient-end': '#00f2fe',
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #651FFF 0%, #00BCD4 100%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(-3%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'custom-bounce': 'custom-bounce 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
