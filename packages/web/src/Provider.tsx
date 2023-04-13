import { ThemeProvider } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { getGlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

const Provider: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles styles={getGlobalStyle(theme)} />
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default Provider;
