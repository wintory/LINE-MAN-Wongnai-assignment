import { styled } from '@mui/material';
import { FC } from 'react';

const Wrapper = styled('div')(() => ({
  maxWidth: '133.6rem',
  margin: 'auto',
  height: '100%',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  pb: '2.4rem',
  position: 'relative',
}));

const PageWrapper: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageWrapper;
