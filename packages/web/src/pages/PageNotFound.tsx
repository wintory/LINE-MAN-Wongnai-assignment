import { styled } from '@mui/material';
import { FC } from 'react';

const PageWrapper = styled('div')(() => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const PageNotFound: FC = () => {
  return <PageWrapper>404 Page not found</PageWrapper>;
};

export default PageNotFound;
