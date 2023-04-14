import { CircularProgress, styled } from '@mui/material';
import { FC } from 'react';

const LoadingWrapper = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(0,0,0,0.1)',
}));

const FullScreenLoading: FC = () => {
  return (
    <LoadingWrapper>
      <CircularProgress color="success" />
    </LoadingWrapper>
  );
};

export default FullScreenLoading;
