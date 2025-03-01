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
    // button styles
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#3470ff',
          height: '44px',
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
    // booking form styles
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '& .MuiFormLabel-root': {
            left: '8px',
            top: '-3px',
          },
          '& .MuiInputBase-root': {
            backgroundColor: '#f7f7f7',
            color: '#8d929a',
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
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '1.25',
              color: '#8d929a',
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
    // search form stules
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          lineHeight: 1.33,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: () => ({
          backgroundColor: '#f7f7f7',
          borderRadius: '12px',
          height: '44px',
          fontWeight: 500,
          color: '#101828',
          '& .MuiSelect-icon': {
            color: '#101828',
            right: '14px',
            top: '19px',
          },
          // '& .MuiInputBase-root': {
          //   height:
          //     ownerState?.name === 'mileage' || ownerState?.label === 'mileage'
          //       ? ''
          //       : '',
          //   padding: '14px 20px',
          // },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiSelect-select': {
            padding: '12px 16px',
            color: '#101828',
            textAlign: 'start',
          },
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#f7f7f7',
          padding: '12px 24px',
          color: '#101828',
          height: '44px',
          position: 'relative',

          '&::before': {
            display: 'none',
          },
          '&::after': {
            display: 'none',
          },

          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
            {
              WebkitAppearance: 'none',
              // margin: 0,
            },
        },
        input: {
          fontWeight: '500',
          // color: 'red', інпута доробити

          '&::placeholder': {
            color: '#101828', // Колір плейсхолдера
            opacity: 1, // Плейсхолдер не зникатиме при введенні
            fontWeight: '500',
          },
          // Задаємо відступи для введеного тексту
          '&:not(:placeholder-shown)': {
            paddingLeft: '12px', // Відступ після введеного тексту
          },
        },
      },
    },

    //
    MuiPaper: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          height:
            ownerState['data-select'] === 'brand'
              ? '272px'
              : ownerState['data-select'] === 'price'
              ? '188px'
              : 'null',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
            // clipPath: 'inset(-10px -10px -10px -10px)',
          },
          '&::-webkit-scrollbar-thumb': {
            height: ownerState['data-select'] === 'brand' ? '128px' : '64px', // Висота повзунка
            background: '#dadde1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },

          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          padding: '14px 18px',
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '0',
          marginRight: '10px', // Відступ для зсуву контенту
          color: '#8d929a',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          '& .MuiButtonBase-root': {
            padding: '0',
            backgroundColor: 'transparent',
            '&:not([aria-selected="true"])': {
              backgroundColor: 'transparent',
            },
            '&[aria-selected="true"]': {
              color: '#101828',
              backgroundColor: 'transparent',
            },
            '&:hover': {
              color: '#101828',
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent !important',
          '&.Mui-selected': {
            backgroundColor: 'transparent !important',
          },
          '&:hover': {
            backgroundColor: 'transparent !important',
          },
        },
      },
    },

    MuiDatePicker: {
      styleOverrides: {
        root: {
          height: 'auto', // Встановлюємо висоту на авто
          '& .MuiInputBase-root': {
            height: 'auto', // Висота для внутрішнього елементу
            padding: '12px 20px', // Паддінг
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none', // Прибираємо обводку
          },
          '& .MuiInputBase-input': {
            padding: '0', // Паддінг для тексту
            fontSize: '16px',
            color: '#101828',
          },
        },
      },
    },
  },
});

export default theme;
