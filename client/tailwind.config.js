module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E9FFC0",
        accent: "#E9FFC0",
        darkBg: "#092A35",
        lightBg: "#F6FFE6",
        darkFont: "#092A35",
        lightFont: "#FAF9F6",
        error: "#940949",
      },
      fontFamily: {
        title: "'Lato'",
        title1: "'Oswald'",
      },
      fontSize: {
        title: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
    },
  },
  plugins: [],
};
