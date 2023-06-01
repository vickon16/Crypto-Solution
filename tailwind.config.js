module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#000",
        bgPrimary: "#fff",
        bgSecondary: "#F9F9F9",
        textBlue: "#0071bd",
        lightBlue: "#e6f7ff",
        border: "#d9d9d9",
        navbar: "rgb(0, 21, 41)",
      },
      screens: {
        // min-width breakpoints
        sm: { min: "567px" },
        md: { min: "767px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
        "2xl": { min: "1600px" },
        
        // max-width breakpoints
        "max-sm": { max: "567px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "992px" },
        "max-xl": { max: "1200px" },
        "max-2xl": { max: "1600px" },
      },
    },
  },
  plugins: [],
};
