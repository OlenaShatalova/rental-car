import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Manrope', sans-serif",
  },
  palette: {
    primary: {
      main: '#101828',
    },
    secondary: {
      main: '#3470ff',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#101828',
      secondary: '#8d929a',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#3470ff',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: 1.25,
          color: '#fff',
          textTransform: 'none',
          borderRadius: '12px',
          padding: '12px 38px',
          '&:hover': {
            backgroundColor: '#0b44cd',
          },
        },
      },
    },
    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       paddingInline: '24px', // Падінги для мобільних пристроїв
    //       '@media (min-width:600px)': {
    //         paddingInline: '40px', // Падінги для планшетів
    //       },
    //       '@media (min-width:1200px)': {
    //         paddingInline: '120px', // Падінги для десктопів
    //       },
    //     },
    //   },
    // },
  },
});

export default theme;
