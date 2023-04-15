import {
  Chip,
  Box,
  styled,
  Typography,
  Divider,
  CircularProgress,
} from '@mui/material';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import FullScreenLoading from '../components/FullScreenLoading';
import PageWrapper from '../components/PageWrapper';
import useStoreDetail from '../hooks/useStoreDetail';
import ProductCard from '../containers/StoreDetail/ProductCard';
import { MenuDetail } from '../types/store';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import MenuDetailPopup from '../containers/StoreDetail/MenuDetailPopup';

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

export const StatusChip = styled(Chip)<{ isActive: boolean }>(
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
  const {
    storeDetail,
    isActiveStore,
    handleGetFullMenu,
    handleLoadMoreStoreDetail,
    isFetching,
    hasNextPage,
    isOpenPopup,
    handleClosePopup,
    selectedMenu,
  } = useStoreDetail(storeId);
  const [loadingRef] = useInfiniteScroll({
    loading: isFetching,
    hasNextPage,
    onLoadMore: () =>
      handleLoadMoreStoreDetail(storeDetail?.id, (storeDetail?.page || 0) + 1),
    disabled: !hasNextPage,
    rootMargin: '0px 0px 400px 0px',
  });
  const storeMenu = useMemo(() => {
    return storeDetail?.menus || [];
  }, [storeDetail?.menus]);

  if (!storeDetail) return <FullScreenLoading />;

  return (
    <PageWrapper>
      <MenuDetailPopup
        isOpen={isOpenPopup}
        onClose={handleClosePopup}
        data={selectedMenu}
      />
      <Box display="block">
        <Image alt="store-cover-image" src={storeDetail?.coverImage} />
        <ContentWrapper>
          <Typography
            variant="h2"
            pt={2}
            position="relative"
            width="fit-content"
          >
            {storeDetail?.name}
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
      <Typography
        variant="h4"
        pt={2}
        pl={2}
        position="relative"
        width="fit-content"
      >
        All menu
      </Typography>
      <Divider />
      <Box display="block">
        {storeMenu.length > 0 &&
          storeMenu.map((data: MenuDetail, index: number) => (
            <Box key={data.id}>
              <ProductCard
                data={data}
                handleClick={() => handleGetFullMenu(storeDetail?.id, data?.id)}
              />
              {index !== (storeDetail.menus || []).length - 1 && <Divider />}
            </Box>
          ))}
        {(isFetching || hasNextPage) && (
          <Box
            ref={loadingRef}
            display="flex"
            justifyContent="center"
            width="100%"
            py={6}
          >
            <CircularProgress color="success" />
          </Box>
        )}
      </Box>
    </PageWrapper>
  );
};

export default StoreDetail;
