import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1E33",
          light: "#122A45",
          dark: "#081524",
        },
        ink: "#0A0A0C",
        graphite: "#2B2F36",
        mist: "#F5F6F8",
        cloud: "#C9D0D9",
        slate: "#5B636F",
        line: "#E5E7EB",
        cyan: {
          DEFAULT: "#2FD1D9",
          dim: "#37C4CE",
          ink: "#0E7C86",
          soft: "rgba(47, 209, 217, 0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      borderRadius: {
        DEFAULT: "6px",
        md: "8px",
      },
      letterSpacing: {
        wide2: "0.08em",
        wide3: "0.14em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
