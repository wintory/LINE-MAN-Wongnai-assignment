import { Box, Chip, styled, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import Card from '../../../components/Card';
import { MenuDetail } from '../../../types/store';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

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

const StatusChip = styled(Chip)(({ theme }) => ({
  marginTop: '1.6rem',
  padding: '1.6rem',
  fontSize: '1.2rem',
  width: '100%',

  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
    width: 'auto',
  },
}));

const ProductCard: FC<CardProps> = ({ data, handleClick }) => {
  const theme = useTheme();
  const { id, totalInStock, name, fullPrice, sold } = data;
  const isOutOfStock = totalInStock <= 0;
  const isNearlyOutOfStock = totalInStock <= 5 && totalInStock > 0;
  const isPopularProduct = sold > 100;

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
        {isPopularProduct && (
          <StatusChip
            avatar={
              <LocalFireDepartmentIcon
                sx={{ fill: theme.palette.common.white }}
              />
            }
            variant="filled"
            color="warning"
            label="Popular"
          />
        )}
        {isOutOfStock && (
          <StatusChip
            avatar={<DangerousIcon />}
            variant="filled"
            label="Out of stock"
          />
        )}
        {isNearlyOutOfStock && (
          <StatusChip
            avatar={
              <ReportGmailerrorredIcon
                sx={{ fill: theme.palette.common.white }}
              />
            }
            variant="filled"
            color="error"
            label="Nearly out of stock"
          />
        )}
      </ContentWrapper>
    </Card>
  );
};

export default ProductCard;
