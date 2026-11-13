import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Helvetica Neue'", "Helvetica", "'Segoe UI'", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#111",
        body: "#555",
        muted: "#a8a8a8",
        faint: "#c4c4c4",
        icon: "#bdbdbd",
      },
    },
  },
  plugins: [],
} satisfies Config;
