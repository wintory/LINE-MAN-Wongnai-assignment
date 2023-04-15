import { styled, Typography } from '@mui/material';
import { FC } from 'react';

interface DiscountTextProps {
  fullPrice: number;
  discountPrice: number;
}

const Price = styled('span')(({ theme }) => ({
  textDecoration: 'line-through',

  '&.discount': {
    pl: 2,
    textDecoration: 'none',
    color: theme.palette.error.main,
  },
}));

const DiscountText: FC<DiscountTextProps> = ({ fullPrice, discountPrice }) => {
  const price = discountPrice === 0 ? 'Free' : `${discountPrice} Baht`;

  return (
    <>
      <Typography variant="body1" color="common.black">
        price: <Price>{fullPrice || '-'}</Price>{' '}
        <Price className="discount">{price || '-'}</Price>
      </Typography>
    </>
  );
};

export default DiscountText;
