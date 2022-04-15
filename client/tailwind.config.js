module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      md2: '850px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#E9FFC0',
        accent: '#2F998A',
        darkBg: '#033343',
        lightBg: '#F6FFE6',
        darkFont: '#092A35',
        lightFont: '#FCFFFC',
        error: '#940949',
        shade: '#03334380',
      },
      fontFamily: {
        title: 'Lato',
        title1: 'Oswald',
        Roboto: ['Roboto', 'sans-serif'],
        Fira: 'Fira Sans',
      },
      fontSize: {
        title: '64px',
        title2: '48px',
        title3: '36px',
        title4: '24px',
        subtitle: '24px',
        bodyLarge: '20px',
        bodyRegular: '16px',
        bodyMd: '14px',
        bodySmall: '12px',
        button: '10px',
      },
      maxWidth: {
        1440: '1440px',
      },
      width: {
        screen: 'calc(100vw - 10px)',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
    },
  },
  plugins: [],
}
