import { Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import Card from '../../../components/Card';
import { MenuDetail } from '../../../types/store';

interface CardProps {
  data: MenuDetail;
  handleClick: (id: number) => void;
}

const ContentWrapper = styled(Box)(({ theme }) => ({
  bgcolor: theme.palette.common.white,
  width: '100%',
  padding: '1.6rem',
  cursor: 'pointer',

  [theme.breakpoints.up('lg')]: {
    padding: '1.6rem 3.2rem',
  },
}));

const ProductCard: FC<CardProps> = ({ data, handleClick }) => {
  const isDisabled = data.totalInStock <= 0;

  return (
    <Card
      onClick={() => handleClick(data?.id)}
      image={data?.thumbnailImage}
      disabled={isDisabled}
    >
      <ContentWrapper>
        <Typography gutterBottom variant="subtitle1" component="div">
          {data?.name || ''}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          price: {data?.fullPrice || '-'} Baht
        </Typography>
      </ContentWrapper>
    </Card>
  );
};

export default ProductCard;
