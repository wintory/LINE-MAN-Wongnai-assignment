import { Box, CardContent, CardMedia, Stack, styled } from '@mui/material';
import { FC } from 'react';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

interface CardProps {
  image?: string;
  onClick?: () => void;
  disabled: boolean;
}

const CardWrapper = styled(Box)(({ theme }) => ({
  bgcolor: theme.palette.common.white,
  width: '100%',
  padding: '1.6rem',
  cursor: 'pointer',

  '&.disabled': {
    cursor: 'default',
    opacity: 0.5,
  },

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

const Card: FC<CardProps> = ({ image, onClick, children, disabled = true }) => {
  return (
    <CardWrapper onClick={onClick} className={disabled ? 'disabled' : ''}>
      <CardWrapper>
        <Stack direction="row">
          {image ? (
            <CardMedia
              component="img"
              image={image}
              alt="green iguana"
              sx={{
                width: { xs: '8rem', md: '20rem' },
                borderRadius: '1.6rem',
              }}
            />
          ) : null}
          <CardContent>{children}</CardContent>
        </Stack>
      </CardWrapper>
    </CardWrapper>
  );
};

export default Card;
