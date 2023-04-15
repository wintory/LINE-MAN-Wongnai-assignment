import { ThemeProvider } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundaries from './components/ErrorBoundaries';
import { getGlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/react-query';

const Provider: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles styles={getGlobalStyle(theme)} />
      <ErrorBoundary fallback={<ErrorBoundaries />}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>{children}</BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
};

export default Provider;
