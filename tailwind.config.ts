import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#0a0a0f",
          900: "#11111a",
          800: "#1c1c2e",
          700: "#252540",
        },
        amber: {
          glow: "#f59e0b",
          soft: "#fbbf24",
          pale: "#fde68a",
        },
        teal: {
          glow: "#14b8a6",
          soft: "#2dd4bf",
        },
        rose: {
          glow: "#f43f5e",
        },
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "slide-in": "slideIn 0.4s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(245, 158, 11, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
