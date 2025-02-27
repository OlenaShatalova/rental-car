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
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '& .MuiFormLabel-root': {
            left: '8px',
            top: '-3px',
          },
          '& .MuiInputBase-root': {
            backgroundColor: '#f7f7f7',
            color: '#101828',
            height:
              ownerState?.name === 'comment' || ownerState?.label === 'comment'
                ? '88px'
                : '48px',
            borderRadius: '12px',
            padding:
              ownerState?.name === 'comment' || ownerState?.label === 'comment'
                ? '12px 20px'
                : '14px 20px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiInputBase-input': {
            fontWeight: '500',
            padding: '0',
            '::placeholder': {
              color: 'red',
              opacity: 1,
            },
            '&:-webkit-autofill': {
              boxShadow: 'none',
              WebkitTextFillColor: 'inherit',
              transition: 'background-color 5000s ease-in-out 0s',
            },
          },
        }),
      },
    },
  },
});

export default theme;
