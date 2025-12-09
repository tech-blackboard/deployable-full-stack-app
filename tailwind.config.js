/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // tell Tailwind where to find your components
  ],

  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      animation: {
        gradientMove: "gradientMove 4s ease infinite",
      },
    },
  },

  plugins: [],
};
