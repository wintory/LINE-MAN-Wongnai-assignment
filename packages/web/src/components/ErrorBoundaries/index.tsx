import { Button, Grid, styled, Typography } from '@mui/material';
import { FC } from 'react';

const PageWrapper = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ErrorBox = styled('div')(() => ({
  display: 'block',
  textAlign: 'center',
  padding: '1.6rem',
}));

const ErrorBoundaries: FC = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <PageWrapper>
      <ErrorBox>
        <Typography variant="h2" color="common.black">
          Something went wrong
        </Typography>
        <Typography variant="h4" pt={1} mb={2}>
          Please either refresh page or return to home to try again.
        </Typography>
        <Grid display="grid">
          <Button
            color="primary"
            variant="contained"
            onClick={handleRefreshPage}
          >
            <Typography variant="h5">Back to Home</Typography>
          </Button>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleBackToHome}
            sx={{ mt: 2 }}
          >
            <Typography variant="h5">Refresh Page</Typography>
          </Button>
        </Grid>
      </ErrorBox>
    </PageWrapper>
  );
};

export default ErrorBoundaries;
