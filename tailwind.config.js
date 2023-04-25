/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF5403",
        bordergray: "#EFF1F6",
        icongray: "#31373D",
        navColor: "#4D5760",
        fontblack: "#131316",
      },
    },
  },
  plugins: [],
};
