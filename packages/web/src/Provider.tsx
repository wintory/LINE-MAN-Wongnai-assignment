import { ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';

const Provider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default Provider;
