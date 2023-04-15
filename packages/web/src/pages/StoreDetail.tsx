import { Chip, Box, styled, Typography, Divider } from '@mui/material';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import FullScreenLoading from '../components/FullScreenLoading';
import PageWrapper from '../components/PageWrapper';
import useStoreDetail from '../hooks/useStoreDetail';
import ProductCard from '../containers/StoreDetail/ProductCard';

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '25rem',
  objectFit: 'cover',

  [theme.breakpoints.up('md')]: {
    height: '48rem',
  },
}));

const ContentWrapper = styled('div')(() => ({
  display: 'block',
  padding: '1.6rem',
}));

const StatusChip = styled(Chip)<{ isActive: boolean }>(
  ({ theme, isActive }) => ({
    marginTop: '1.6rem',
    padding: '1.6rem',
    color: isActive ? theme.palette.common.white : theme.palette.common.black,
    fontSize: '1.2rem',
    width: '100%',

    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
      width: 'auto',
    },
  })
);

const StoreDetail: FC = () => {
  const params = useParams();
  const { storeId } = params;
  const { storeDetail, isActiveStore } = useStoreDetail(storeId);

  if (!storeDetail) return <FullScreenLoading />;

  return (
    <PageWrapper>
      <Box display="block">
        <Image alt="store-cover-image" src={storeDetail.coverImage} />
        <ContentWrapper>
          <Typography
            variant="h2"
            pt={2}
            position="relative"
            width="fit-content"
          >
            {storeDetail.name}
          </Typography>
          <StatusChip
            size="medium"
            isActive={isActiveStore}
            color={isActiveStore ? 'success' : 'default'}
            label={isActiveStore ? 'Open' : 'Open Soon'}
          />
          <Box>
            <Typography variant="h5" pt={2}>
              {`Open time: ${storeDetail?.activeTimePeriod?.open || '-'}`}
            </Typography>
            <Typography variant="h5">
              {`Close time: ${storeDetail?.activeTimePeriod?.close || '-'}`}
            </Typography>
          </Box>
        </ContentWrapper>
      </Box>
      <Box display="block">
        {storeDetail.menus.map(data => (
          <>
            <ProductCard data={data} />
            <Divider />
          </>
        ))}
      </Box>
    </PageWrapper>
  );
};

export default StoreDetail;
