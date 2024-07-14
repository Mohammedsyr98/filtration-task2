/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "40px",
        sm: "30px",
        md: "140px",
        lg: "250px",
        xl: "250px",
        "2xl": "352px",
      },
    },
    extend: {
      colors: {
        custom1: "#C98A40",
        buttonColor: "#fdba10",
      },
      padding: {
        customPadding1: "352px",
        topForButton: "18px",
        rightLeftForButton: "53px",
        189: "189px",
        250: "250px",
      },
      width: {
        "70%": "70%",
        "30%": "30%",
      },
      minHeight: {
        500: "500px",
      },
      inset: {
        "10%": "10%",
      },
      lineHeight: {
        14: "14px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
