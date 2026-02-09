import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        ring: "hsl(var(--ring))"
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 10px 30px -20px rgba(42, 31, 29, 0.4)",
        glow: "0 0 0 1px rgba(196, 138, 154, 0.35), 0 10px 30px -20px rgba(196, 138, 154, 0.6)"
      },
      backgroundImage: {
        "hero-wash": "radial-gradient(circle at 20% 20%, rgba(230, 183, 197, 0.25), transparent 55%), radial-gradient(circle at 80% 0%, rgba(207, 161, 141, 0.25), transparent 45%)",
        "section-wash": "linear-gradient(135deg, rgba(230, 183, 197, 0.2), rgba(232, 221, 212, 0.6))"
      }
    }
  },
  plugins: []
};

export default config;
