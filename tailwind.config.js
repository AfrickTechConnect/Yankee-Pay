module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: { min: "642px", max: "1176px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
