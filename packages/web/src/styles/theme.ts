import { createTheme } from '@mui/material/styles';

let theme = createTheme();

theme = createTheme(theme, {
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
    ].join(','),
    h2: {
      fontSize: '3.2rem',
      fontStyle: 'normal',
      fontWeight: 400,

      [theme.breakpoints.up('md')]: {
        fontSize: '4.8rem',
      },
    },
    h3: {
      fontSize: '2.4rem',
      fontStyle: 'normal',
      fontWeight: 400,

      [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
      },
    },
    subtitle1: {
      fontSize: '1.8rem',
      fontStyle: 'normal',
      fontWeight: 400,

      [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
      },
    },
    body1: {
      fontSize: '1.4rem',
      fontStyle: 'normal',
      fontWeight: 400,

      [theme.breakpoints.up('md')]: {
        fontSize: '1.8rem',
      },
    },
  },
});

export default theme;
