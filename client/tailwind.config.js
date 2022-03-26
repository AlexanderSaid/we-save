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
        title: "64px",
        title2: "48px",
        title3: "36px",
        title4: "24px",
        subtitle: "24px",
        bodyLarge: "20px",
        bodyRegular: "16px",
        bodySmall: "14px",
        button: "10px",
      },
    },
  },
  plugins: [],
};
