import { Grid, styled, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';
import { FC, ReactNode } from 'react';

interface CardProps {
  image: string;
  title: string;
  description?: string;
  badge?: ReactNode;
  onClick?: () => void;
}

const CardWrapper = styled('div')(({ theme }) => ({
  bgcolor: theme.palette.common.white,
  width: '100%',
  padding: '1.6rem',
  cursor: 'pointer',

  [theme.breakpoints.up('lg')]: {
    padding: '1.6rem 3.2rem',
  },
}));

const Image = styled('img')(({ theme }) => ({
  bgcolor: theme.palette.common.white,
  width: '8rem',
  height: '8rem',
  objectFit: 'cover',
  borderRadius: '1rem',

  [theme.breakpoints.up('md')]: {
    width: '12rem',
    height: '12rem',
  },

  [theme.breakpoints.up('lg')]: {
    width: '18rem',
    height: '18rem',
  },
}));

const Card: FC<CardProps> = props => {
  return (
    <CardWrapper onClick={props.onClick}>
      <Grid container gridTemplateColumns="auto 1fr">
        <Grid item>{props.image && <Image src={props.image} />}</Grid>
        <Grid item>
          {props.title && <Typography variant="h4">{props.title}</Typography>}
          {props?.description && (
            <Typography variant="subtitle1">{props.description}</Typography>
          )}
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default Card;
