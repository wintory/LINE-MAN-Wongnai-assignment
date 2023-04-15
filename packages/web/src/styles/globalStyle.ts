import { Theme, css } from '@mui/material';

export const getGlobalStyle = (theme: Theme) => css`
  html {
    box-sizing: border-box;
    background-color: ${theme.palette.common.white};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-overflow-scrolling: touch;
    font-weight: 300;
    font-family: 'Roboto', helvetica, sans-serif;
    overflow: auto;
    text-align: left;
    font-weight: normal;
    color: ${theme.palette.common.black};
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
