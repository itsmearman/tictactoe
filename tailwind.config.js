/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_blue: {
          DEFAULT: "#C9F9FC",
        },
        primary_yellow: {
          DEFAULT: "#FBB500",
        },
      },
    },
  },
  plugins: [],
};
