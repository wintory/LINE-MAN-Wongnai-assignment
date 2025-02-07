import { Box, CardContent, CardMedia, Stack, styled } from '@mui/material';
import NoImage from '@assets/images/no_image_available.svg';
import { FC } from 'react';

interface CardProps {
  image?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CardWrapper = styled(Box)(({ theme }) => ({
  bgcolor: theme.palette.common.white,
  width: '100%',
  padding: '1.6rem',
  cursor: 'pointer',
  boxSizing: 'border-box',

  '&.disabled': {
    opacity: 0.5,
  },

  [theme.breakpoints.up('lg')]: {
    padding: '1.6rem 3.2rem',
  },
}));

const Card: FC<CardProps> = ({
  image,
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <CardWrapper onClick={onClick} className={disabled ? 'disabled' : ''}>
      <Stack direction="row" alignItems="center">
        <CardMedia
          component="img"
          image={image || NoImage}
          alt={image ? 'media-image' : 'no-media-image'}
          sx={{
            width: { xs: '8rem', md: '20rem' },
            height: { xs: '8rem', md: '20rem' },
            objectFit: 'cover',
            borderRadius: '1.6rem',
          }}
        />
        <CardContent sx={{ padding: '1.6rem', boxSizing: 'border-box' }}>
          {children}
        </CardContent>
      </Stack>
    </CardWrapper>
  );
};

export default Card;
