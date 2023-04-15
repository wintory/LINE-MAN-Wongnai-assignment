import { Box, Chip, styled, useTheme } from '@mui/material';
import { FC, useMemo } from 'react';
import { OUT_OF_STOCK_LIMIT, POPULAR_LIMIT } from '../../../constants';
import { getIsActiveTime } from '../../../helpers/store';
import { MenuDetail } from '../../../types/store';
import DangerousIcon from '@mui/icons-material/Dangerous';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SellIcon from '@mui/icons-material/Sell';

interface MultipleStatusChipProps {
  data: MenuDetail;
}

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

const MultipleStatusChip: FC<MultipleStatusChipProps> = ({ data }) => {
  const theme = useTheme();
  const { totalInStock, discountedTimePeriod, sold, discountedPercent } = data;

  const isOutOfStock = useMemo(
    () => totalInStock <= OUT_OF_STOCK_LIMIT,
    [totalInStock]
  );
  const isOnDiscounted = useMemo(
    () =>
      getIsActiveTime(discountedTimePeriod?.begin, discountedTimePeriod?.end),
    [discountedTimePeriod]
  );
  const isNearlyOutOfStock = useMemo(
    () => totalInStock <= 5 && totalInStock > OUT_OF_STOCK_LIMIT,
    [totalInStock]
  );
  const isPopularProduct = useMemo(() => sold > POPULAR_LIMIT, [sold]);

  return (
    <Box display={{ xs: 'block', md: 'inline-flex' }}>
      {isOnDiscounted && !isOutOfStock && (
        <StatusChip
          avatar={<SellIcon sx={{ fill: theme.palette.common.white }} />}
          sx={{ maxWidth: 'fit-content' }}
          variant="filled"
          color="warning"
          label={`${discountedPercent}% off!!`}
        />
      )}
      {isPopularProduct && (
        <StatusChip
          avatar={
            <LocalFireDepartmentIcon
              sx={{ fill: theme.palette.common.white }}
            />
          }
          sx={{ maxWidth: 'fit-content' }}
          variant="filled"
          color="warning"
          label="Popular!!"
        />
      )}
      {isOutOfStock && (
        <StatusChip
          avatar={<DangerousIcon />}
          sx={{ maxWidth: 'fit-content' }}
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
          sx={{ maxWidth: 'fit-content' }}
          variant="filled"
          color="error"
          label="Nearly out of stock"
        />
      )}
    </Box>
  );
};

export default MultipleStatusChip;
