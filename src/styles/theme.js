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
            //////
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
              WebkitTextFillColor: '#8E929A',
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
          '& .MuiTypography-root': {
            color: '#101828',
          },
        },
        input: {
          fontWeight: '500',
        },
        inputAdornedStart: {
          lineHeight: 1.25,
          padding: '0',
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
              : ownerState['data-select'] === 'rentalPrice'
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

    /// CALENDAR
    MuiDatePicker: {
      styleOverrides: {
        root: {},
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          width: '276px',
          maxHeight: '328px',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              "url('/calendar-background.svg') no-repeat center bottom / cover",
            width: '100%',
            height: '100%',
            transform: 'scaleY(-1)',
          },
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        root: {
          // Стилізація для Popper в DatePicker
        },
        paper: {
          // Стилізація для контейнера календаря
          width: '276px',
          height: 'auto',
          background: 'transparent',
          boxShadow: 'none',
          padding: '22px 12px',
        },
      },
    },
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          // Загальний стиль для компонента календаря
          background: 'transparent',
        },
      },
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          // Стилізація календаря
          width: '100%',
          height: '100%',
        },
      },
    },

    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          // Стилізація заголовка календаря MONTH
          position: 'relative',
          maxHeight: '24px',
          minHeight: '24px',

          padding: '0',
          margin: '0 0 14px 0',
        },
        labelContainer: {
          marginInline: 'auto',
        },
        label: {
          fontFamily: "'Inter', sans-serif",
          margin: '0',
          width: '100%',

          // Стилізація тексту з назвою місяця
        },
        switchViewButton: {
          display: 'none',
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: {
          // Стилізація стрілок для перемикання місяців
          position: 'absolute',
          inset: '0',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          // background: ' red',
        },
        button: {
          // Стилізація кнопок перемикання місяців
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        root: {
          // Стилізація сітки з днями (весь)
          width: '100%',
          height: '100%',
        },
        weekDayLabel: {
          // Стилізація назв днів тижня
          width: '100%',
          height: '100%',
          fontFamily: "'Inter', sans-serif",
          fontWeight: '600',
          lineHeight: '1.2',
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          //// Стилізація дня в календарі
          border: 'none',
          //// Стиль для поточного дня
          ...(ownerState.today && {
            backgroundColor: 'transparent !important',
            color: '#0B44CD',
            boxShadow: '0 0 0 1px #0B44CD !important',
            '&:focus': { border: 'none !important' },
            '&:hover': { border: 'none !important' },
          }),

          //// Стиль для вибраного дня
          ...(ownerState.selected && {
            backgroundColor: '#3470FF !important',
            border: 'none',
            '&:focus': { border: 'none' },
            '&:hover': { border: 'none' },
          }),
        }),
      },
    },
  },
});

export default theme;
