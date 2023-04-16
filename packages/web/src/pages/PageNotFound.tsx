import { Button, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const PageWrapper = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const PageNotFoundBox = styled('div')(() => ({
  display: 'block',
  textAlign: 'center',
}));

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <PageWrapper>
      <PageNotFoundBox>
        <Typography variant="h2" color="common.black">
          404 Page not found
        </Typography>
        <Typography variant="subtitle1" pt={1} mb={2}>
          Sorry, the page you're looking for doesn't exists.
        </Typography>
        <Button color="secondary" onClick={handleBackToHome}>
          <Typography variant="subtitle1">Back to Home</Typography>
        </Button>
      </PageNotFoundBox>
    </PageWrapper>
  );
};

export default PageNotFound;
