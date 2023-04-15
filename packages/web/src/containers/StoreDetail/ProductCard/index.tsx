import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { MenuDetail } from '../../../types/store';

interface CardProps {
  data?: MenuDetail;
  handleClick: (id: number) => void;
  disabled: boolean;
}

const CardWrapper = styled(Card)(({ theme }) => ({
  bgcolor: theme.palette.common.white,
  width: '100%',
  padding: '1.6rem',
  cursor: 'pointer',

  [theme.breakpoints.up('lg')]: {
    padding: '1.6rem 3.2rem',
  },
}));

const ProductCard: FC<CardProps> = ({ data, handleClick, disabled }) => {
  return (
    <Box onClick={() => handleClick(data?.id)}>
      <CardWrapper>
        <Stack direction="row">
          <CardMedia
            component="img"
            image={data?.thumbnailImage}
            alt="green iguana"
            sx={{ width: { xs: '8rem', md: '20rem' }, borderRadius: '1.6rem' }}
          />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                {data?.name || ''}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                price: {data?.fullPrice || '-'} Baht
              </Typography>
            </CardContent>
          </CardActionArea>
        </Stack>
      </CardWrapper>
    </Box>
  );
};

export default ProductCard;
