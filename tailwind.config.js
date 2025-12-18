/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      /* ✅ GRADIENT ANIMATION */
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradientMove: "gradientMove 8s ease infinite",
      },

      /* ✅ TRUST & RELIABILITY COLOR SYSTEM */
      colors: {
        primary: {
          DEFAULT: "#1E40AF",  // Royal Blue
          light: "#3B82F6",
          dark: "#1E3A8A",
        },
        secondary: {
          DEFAULT: "#06B6D4",  // Cyan
          light: "#22D3EE",
          dark: "#0891B2",
        },
        accent: {
          DEFAULT: "#8B5CF6",  // Violet
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        background: "#F1F5F9",
        card: "#FFFFFF",
        border: "#E2E8F0",
        text: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
        },
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },

      /* ✅ PROFESSIONAL SHADOWS */
      boxShadow: {
        card: "0 10px 25px -10px rgba(30,64,175,0.3)",
        hover: "0 20px 40px -15px rgba(30,64,175,0.4)",
        glow: "0 0 40px rgba(139,92,246,0.5)",
      },

      /* ✅ SMOOTH BORDERS */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },

  plugins: [],
};