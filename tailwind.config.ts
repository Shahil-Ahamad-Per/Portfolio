import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--surface, hsl(var(--background)))",
        foreground: "var(--on-surface, hsl(var(--foreground)))",
        // Editorial Material Design 3 tokens
        surface: "var(--surface, #f6faf8)",
        "surface-bright": "var(--surface-bright, #f6faf8)",
        "surface-dim": "var(--surface-dim, #d6dbd9)",
        "surface-container-lowest": "var(--surface-container-lowest, #ffffff)",
        "surface-container-low": "var(--surface-container-low, #f0f5f2)",
        "surface-container": "var(--surface-container, #eaefed)",
        "surface-container-high": "var(--surface-container-high, #e5e9e7)",
        "surface-container-highest":
          "var(--surface-container-highest, #dfe3e1)",
        "surface-variant": "var(--surface-variant, #dfe3e1)",
        "surface-tint": "var(--surface-tint, #446558)",

        "on-surface": "var(--on-surface, #181d1c)",
        "on-surface-variant": "var(--on-surface-variant, #414845)",
        "on-background": "var(--on-surface, #181d1c)",

        primary: {
          DEFAULT: "var(--primary, #17382d)",
          foreground: "var(--on-primary, #ffffff)",
        },
        "on-primary": "var(--on-primary, #ffffff)",
        "primary-container": "var(--primary-container, #2e4f43)",
        "on-primary-container": "var(--on-primary-container, #9cc0b0)",
        "primary-fixed": "var(--primary-fixed, #c6ebda)",
        "primary-fixed-dim": "var(--primary-fixed-dim, #aacebf)",
        "on-primary-fixed": "var(--on-primary-fixed, #002117)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant, #2c4d41)",
        "inverse-primary": "var(--inverse-primary, #aacebf)",

        secondary: {
          DEFAULT: "var(--secondary, #725b24)",
          foreground: "var(--on-secondary, #ffffff)",
        },
        "on-secondary": "var(--on-secondary, #ffffff)",
        "secondary-container": "var(--secondary-container, #fcdc98)",
        "on-secondary-container": "var(--on-secondary-container, #775f28)",
        "secondary-fixed": "var(--secondary-fixed, #ffdf9b)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim, #e2c381)",
        "on-secondary-fixed": "var(--on-secondary-fixed, #251a00)",
        "on-secondary-fixed-variant":
          "var(--on-secondary-fixed-variant, #59440e)",

        tertiary: "var(--tertiary, #0f3830)",
        "on-tertiary": "var(--on-tertiary, #ffffff)",
        "tertiary-container": "var(--tertiary-container, #284f46)",
        "on-tertiary-container": "var(--on-tertiary-container, #97c0b4)",
        "tertiary-fixed": "var(--tertiary-fixed, #c1ebdf)",
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim, #a6cfc3)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed, #00201a)",
        "on-tertiary-fixed-variant":
          "var(--on-tertiary-fixed-variant, #274e45)",

        "inverse-surface": "var(--inverse-surface, #2c3130)",
        "inverse-on-surface": "var(--inverse-on-surface, #edf2f0)",

        outline: "var(--outline, #717975)",
        "outline-variant": "var(--outline-variant, #c1c8c3)",

        error: "var(--error, #ba1a1a)",
        "on-error": "var(--on-error, #ffffff)",
        "error-container": "var(--error-container, #ffdad6)",
        "on-error-container": "var(--on-error-container, #93000a)",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Legacy luxury palettes retained for compatibility
        cream: {
          50: "#fefdf8",
          100: "#fdf9f0",
          200: "#faf2e1",
          300: "#f6e8d1",
          400: "#f0d9b8",
          500: "#e8c79e",
          600: "#ddb284",
          700: "#d09a6a",
          800: "#c18250",
          900: "#b06a36",
        },
        sage: {
          50: "#f6f7f6",
          100: "#e8eae8",
          200: "#d1d5d1",
          300: "#b4bab4",
          400: "#929a92",
          500: "#6b7a6b",
          600: "#556655",
          700: "#455345",
          800: "#374237",
          900: "#2d352d",
        },
        charcoal: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#1a1d20",
        },
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#0A0A1A",
        },
        gold: {
          50: "#fffdf5",
          100: "#fff6d0",
          200: "#ffe89e",
          300: "#ffd066",
          400: "#e6b84d",
          500: "#cc9e30",
          600: "#b68528",
          700: "#996f1f",
          800: "#805918",
          900: "#664413",
        },
        slate: {
          50: "#f8fafc",
          100: "#EAEAEA",
          200: "#D0D0D0",
          300: "#B0B0B0",
          400: "#888888",
          500: "#64748b",
          600: "#3A3A3A",
          700: "#2C2C2C",
          800: "#1E1E1E",
          900: "#121212",
        },
      },
      spacing: {
        margin: "1.25rem",
        "gutter-desktop": "2.5rem",
        "space-xl": "2.5rem",
        "space-lg": "1.5rem",
        "margin-tablet": "2.5rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        gutter: "1.5rem",
        "space-3xl": "6rem",
        "space-2xl": "4rem",
        "margin-desktop": "4rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-display)", "var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        display: ["var(--font-display)", "serif"],
        "display-mobile": ["var(--font-display)", "serif"],
        "headline-lg": ["var(--font-display)", "serif"],
        "headline-lg-mobile": ["var(--font-display)", "serif"],
        "headline-md": ["var(--font-display)", "serif"],
        "headline-sm": ["var(--font-display)", "serif"],
        "body-lg": ["var(--font-sans)", "sans-serif"],
        "body-md": ["var(--font-sans)", "sans-serif"],
        "body-sm": ["var(--font-sans)", "sans-serif"],
        "label-lg": ["var(--font-sans)", "sans-serif"],
        "label-md": ["var(--font-mono)", "monospace"],
        "label-sm": ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "label-sm": [
          "10px",
          {
            lineHeight: "14px",
            letterSpacing: "0.06em",
            fontWeight: "500",
          },
        ],
        "body-sm": [
          "13px",
          {
            lineHeight: "20px",
            letterSpacing: "0.005em",
            fontWeight: "400",
          },
        ],
        "headline-lg-mobile": [
          "30px",
          {
            lineHeight: "36px",
            letterSpacing: "-0.01em",
            fontWeight: "400",
          },
        ],
        "label-md": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.04em",
            fontWeight: "500",
          },
        ],
        "body-md": [
          "15px",
          {
            lineHeight: "24px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "headline-lg": [
          "40px",
          {
            lineHeight: "48px",
            letterSpacing: "-0.015em",
            fontWeight: "400",
          },
        ],
        "headline-sm": [
          "22px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "label-lg": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "600",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "-0.005em",
            fontWeight: "400",
          },
        ],
        "display-mobile": [
          "38px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.015em",
            fontWeight: "400",
          },
        ],
        "headline-md": [
          "28px",
          {
            lineHeight: "36px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        display: [
          "56px",
          {
            lineHeight: "64px",
            letterSpacing: "-0.02em",
            fontWeight: "400",
          },
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
