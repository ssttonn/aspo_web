/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KelsonRegular: ["KelsonRegular", "sans-serif"],
        KelsonBold: ["KelsonBold", "sans-serif"],
        KelsonLight: ["KelsonLight", "sans-serif"],
        KelsonExtraLight: ["KelsonExtraLight", "sans-serif"],
        KelsonMedium: ["KelsonMedium", "sans-serif"],
        KelsonExtraBold: ["KelsonExtraBold", "sans-serif"],
      },
      colors: {
        primary: "#d6e4e0",
        background: "#fafafa",
        backgroundDark: "#f5f5f5",
        secondary: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
