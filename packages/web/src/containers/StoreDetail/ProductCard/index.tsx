import { Box, styled, Typography } from '@mui/material';
import { FC, useMemo } from 'react';
import Card from '../../../components/Card';
import { OUT_OF_STOCK_LIMIT } from '../../../constants';
import { MenuDetail } from '../../../types/store';
import MultipleStatusChip from '../MultipleStatusChip';

interface CardProps {
  data: MenuDetail;
  handleClick: (id: string) => void;
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
  const { id, totalInStock, name, fullPrice } = data;
  const isOutOfStock = useMemo(
    () => totalInStock <= OUT_OF_STOCK_LIMIT,
    [totalInStock]
  );

  return (
    <Card
      onClick={() => handleClick(id)}
      image={data?.thumbnailImage}
      disabled={isOutOfStock}
    >
      <ContentWrapper>
        <Typography gutterBottom variant="subtitle1" component="div">
          {name || ''}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          price: {fullPrice || '-'} Baht
        </Typography>
        <MultipleStatusChip data={data} />
      </ContentWrapper>
    </Card>
  );
};

export default ProductCard;
