/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29ABE2",
        secondary: "#0079BF",
        tertiary: "#1ABC9C",
        success: "#2ECC71",
        warning: "#FF9800",
        danger: "#F50057",
        info: "#9ACD32",
        light: "#F8F9FC",
        dark: "#333333",
      },
    },
  },
  plugins: [require("daisyui")],
};
