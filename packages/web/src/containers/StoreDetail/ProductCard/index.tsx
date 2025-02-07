import { Box, styled, Typography } from '@mui/material';
import { FC, useMemo } from 'react';
import Card from '../../../components/Card';
import DiscountText from '../../../components/DiscountText';
import { OUT_OF_STOCK_LIMIT } from '../../../constants';
import { getIsActiveTime } from '../../../helpers/store';
import { MenuDetail } from '../../../types/store';
import MultipleStatusChip from '../MultipleStatusChip';

interface CardProps {
  data: MenuDetail;
  handleClick: (id: string) => void;
}

const ContentWrapper = styled(Box)(({ theme }) => ({
  bgcolor: theme.palette.common.white,
  width: '100%',
  boxSizing: 'border-box',
  padding: '1.6rem',
  cursor: 'pointer',

  [theme.breakpoints.up('lg')]: {
    padding: '0 1.6rem',
  },
}));

const ProductCard: FC<CardProps> = ({ data, handleClick }) => {
  const {
    id,
    totalInStock,
    name,
    fullPrice,
    discountedTimePeriod,
    discountedPercent,
  } = data;
  const isOutOfStock = useMemo(
    () => totalInStock <= OUT_OF_STOCK_LIMIT,
    [totalInStock]
  );
  const isOnDiscounted = useMemo(
    () =>
      getIsActiveTime(discountedTimePeriod?.begin, discountedTimePeriod?.end),
    [discountedTimePeriod]
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
        {isOnDiscounted ? (
          <DiscountText
            fullPrice={fullPrice}
            discountPrice={fullPrice - (discountedPercent / 100) * fullPrice}
          />
        ) : (
          <Typography variant="body1" color="text.secondary">
            price: {fullPrice || '-'} Baht
          </Typography>
        )}
        <MultipleStatusChip data={data} />
      </ContentWrapper>
    </Card>
  );
};

export default ProductCard;
