/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx,js,jsx}',

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
          "primary": {
            "0":"#DDF2FF",
            "100": "#F7FBFF",
            "200": "#EFF8FF",
            "300": "#E7F4FF",
            "400": "#DFF1FF",
            "500": "#D7EEFF",
            "600": "#CFEAFF",
            "700": "#C7E7FF",
            "800": "#BFE4FF",
            "900": "#B7E0FF",
            "1000": "#AFDDFF"
          },
          "secondary": {
            "0":"#C2E7FE",
            "100": "#F0FBFF",
            "200": "#E1F7FE",
            "300": "#D3F3FE",
            "400": "#C4EFFD",
            "500": "#B6EBFD",
            "600": "#A8E7FC",
            "700": "#99E3FC",
            "800": "#8BDEFB",
            "900": "#7CD9FB",
            "1000": "#6ED5FA"
          },
          "tertiary": {
            "0":"#9F9AB9",
            "100": "#ECEAF1",
            "200": "#D9D5E4",
            "300": "#C5C0D7",
            "400": "#B2ABC9",
            "500": "#9F96BC",
            "600": "#8B81AF",
            "700": "#776CA2",
            "800": "#635795",
            "900": "#4F4288",
            "1000": "#3B2D7B"
          },
          "error": {
            "0":"#FF7164",
            "100": "#FFEBE9",
            "200": "#FFD7D3",
            "300": "#FFC3BD",
            "400": "#FFB0A7",
            "500": "#FF9C91",
            "600": "#FF887B",
            "700": "#FF7465",
            "800": "#FF604F",
            "900": "#FF4C39",
            "1000": "#FF3823"
          },
          "neutral": {
            "0":"#8790AD",
            "100": "#E1E4EB",
            "200": "#C3C9D7",
            "300": "#A5AEC3",
            "400": "#8793AF",
            "500": "#69789B",
            "600": "#4B5D87",
            "700": "#2D4273",
            "800": "#0F275F",
            "900": "#001C4B",
            "1000": "#001037"
          },
          "neutralVariant": {
            "0":"#798C94",
            "100": "#D7E1E4",
            "200": "#AFBCCD",
            "300": "#8790AD",
            "400": "#677A94",
            "500": "#506A82",
            "600": "#43586B",
            "700": "#334153",
            "800": "#283544",
            "900": "#1D2A36",
            "1000": "#121C24"
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
        
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
};
