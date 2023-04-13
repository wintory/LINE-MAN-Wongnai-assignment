import { createTheme } from '@mui/material/styles';

// Todo: separate to supported light/dark theme
const theme = createTheme({
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
});

export default theme;
