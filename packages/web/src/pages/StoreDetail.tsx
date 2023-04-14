import { Chip, Grid, Skeleton, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import FullScreenLoading from '../components/FullScreenLoading';
import PageWrapper from '../components/PageWrapper';
import useStoreDetail from '../hooks/useStoreDetail';

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '25rem',
  objectFit: 'cover',

  [theme.breakpoints.up('md')]: {
    height: '48rem',
  },
}));

const StatusChip = styled(Chip)(({ isOpen }) => ({}));

const StoreDetail: FC = () => {
  const params = useParams();
  const { storeId } = params;
  const { storeDetail } = useStoreDetail(storeId);

  if (!storeDetail) return <FullScreenLoading />;

  return (
    <PageWrapper>
      <Grid display="block">
        <Image src={storeDetail.coverImage} />
        <Typography variant="h2" pt={2}>
          {storeDetail.name}
          <StatusChip isActive={false} label="" />
        </Typography>
      </Grid>
    </PageWrapper>
  );
};

export default StoreDetail;
