import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Provider: FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Provider;
