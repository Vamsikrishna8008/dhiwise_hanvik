module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fbf7f7",
          100: "#f7f7f7",
          300: "#e8e3df",
          400: "#bdbdbd",
          800: "#4b4b4b",
          900: "#1e1e1e",
          "50_01": "#f8f9fa",
          "900_99": "#1e1e1e99",
          "900_02": "#161616",
          "900_87": "#1e1e1e87",
          "900_01": "#252525",
          "300_01": "#e0e0e0",
          "100_01": "#f4f4f4",
        },
        black: { 900: "#000000", "900_b2": "#000000b2", "900_3f": "#0000003f" },
        red: { 700: "#da1e28", A400: "#ff1818", A700: "#b10000" },
        yellow: {
          800: "#f0ae2c",
          "800_9b": "#f0ae2c9b",
          "800_87": "#f0ae2c87",
          "800_7f": "#f0ae2c7f",
        },
        blue_gray: { 100: "#d9d9d9", 900: "#353535" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs4: "inset 0px 1px  1px 0px #e0e0e0",
        bs1: "0px 0px  1px 0px #0000003f",
        bs3: "0px 0px  4px 0px #0000003f",
        bs2: "0px 4px  4px 0px #0000003f",
        bs: "1px 1px  4px 0px #0000003f",
      },
      fontFamily: {
        inter: "Inter",
        spacegrotesk: "Space Grotesk",
        akshar: "Akshar",
        ibmplexsans: "IBM Plex Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
