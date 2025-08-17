import type { Config } from "tailwindcss"

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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
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
        // Custom luxury color palette (Light Mode)
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
          // Adjusted for Dark Mode background gradient
          900: "#0A0A1A", // Very deep dark blue
        },
        gold: {
          50: "#fffdf5",   // Soft cream gold
          100: "#fff6d0",  // Light golden yellow
          200: "#ffe89e",  // Pale gold
          300: "#ffd066",  // Amber gold
          400: "#e6b84d",  // Deep gold (used for text/icons)
          500: "#cc9e30",  // Rich bronze gold
          600: "#b68528",  // Deeper accent gold
          700: "#996f1f",  // Muted gold, very close to your logo's triangle
          800: "#805918",  // Warm dark bronze
          900: "#664413",  // Very deep shadowed gold
        },

        // New sophisticated dark colors (Dark Mode)
        slate: {
          50: "#f8fafc",
          100: "#EAEAEA", // Lightest for foreground text
          200: "#D0D0D0",
          300: "#B0B0B0",
          400: "#888888", // Muted text
          500: "#64748b", // Original, keeping for consistency
          600: "#3A3A3A", // For borders
          700: "#2C2C2C", // For card/section backgrounds
          800: "#1E1E1E", // For main background via gradient
          900: "#121212", // Deepest for main background via gradient
        },
        // Removed emerald as gold will be the primary accent in dark mode
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
