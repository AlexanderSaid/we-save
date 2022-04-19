module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      md2: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#E9FFC0",
        accent: "#2F998A",
        darkBg: "#033343",
        lightBg: "#F6FFE6",
        darkFont: "#092A35",
        lightFont: "#FCFFFC",
        error: "#940949",
        shade: "#03334380",
      },
      fontFamily: {
        Lato: "Lato",
        Oswald: "Oswald",
        Roboto: ["Roboto", "sans-serif"],
        Fira: "Fira Sans",
      },
      fontSize: {
        title: "64px",
        title2: "48px",
        title3: "36px",
        title4: "24px",
        subtitle: "24px",
        bodyLarge: "20px",
        bodyRegular: "16px",
        bodyMd: "14px",
        bodySmall: "12px",
        button: "10px",
      },
      maxWidth: {
        1440: "1440px",
      },
      minHeight: {
        high: "80vh",
      },
    },
  },
  plugins: [],
};
