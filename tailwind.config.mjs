/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#6C5CE7",
          "purple-light": "#8B7CF7",
          green: "#55EFC4",
          amber: "#FDCB6E",
          coral: "#FF7675",
          bg: "#0A0A0F",
          "bg-light": "#12121A",
          "bg-card": "#16161F",
          text: "#E0E0E8",
          "text-dim": "#8888A0",
          border: "#2A2A3A",
        },
      },
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
