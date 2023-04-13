import { styled, Typography } from '@mui/material';
import { FC } from 'react';

const PageWrapper = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const PageNotFoundBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const PageNotFound: FC = () => {
  return (
    <PageWrapper>
      <PageNotFoundBox>
        <Typography variant="h4" color="common.black">
          404 Page not found
        </Typography>
      </PageNotFoundBox>
    </PageWrapper>
  );
};

export default PageNotFound;
