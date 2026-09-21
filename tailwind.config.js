/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      large: { max: "1600px" },
      middle: { max: "1040px" },
      small: { max: "768px" },
    },
    extend: {
      colors: {
        "main-color": "var(--main-color)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        mulish: ["var(--font-mulish)"],
      },
    },
  },
  plugins: [],
};
