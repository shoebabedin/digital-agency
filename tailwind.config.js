// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*", "./pages/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px",
      },
    },
    extend: {
      backgroundImage: {
        'hero': "url('/assets/images/hero/hero_bg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")({
    strategy: "base", // only generate global styles
    strategy: "class", // only generate classes
  })],
}
