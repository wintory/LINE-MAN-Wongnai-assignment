import {
  Box,
  CircularProgress,
  Divider,
  styled,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import PageWrapper from '../components/PageWrapper';
import useStore from '../hooks/useStore';
import HeaderImage from '@assets/images/lineman-header.png';
import { getIsActiveTime } from '../helpers/store';
import { StatusChip } from './StoreDetail';

const CoverImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '15rem',
  objectFit: 'cover',

  [theme.breakpoints.up('md')]: {
    height: '24rem',
  },
}));

const Home: FC = () => {
  const navigate = useNavigate();
  const { stores = [] } = useStore();
  const handleSelectStore = (id: number) => navigate(`/store/${id}`);

  return (
    <PageWrapper>
      <CoverImage alt="home-cover-image" src={HeaderImage} />
      <Typography variant="h2" mt={4} mx={2}>
        All Store
      </Typography>
      <Divider />
      {stores.length > 0 ? (
        stores.map(({ id, name, coverImage, activeTimePeriod }) => {
          const isActiveStore: boolean =
            getIsActiveTime(activeTimePeriod?.open, activeTimePeriod?.close) ||
            false;

          return (
            <Card
              key={id}
              image={coverImage}
              disabled={!isActiveStore}
              onClick={() => handleSelectStore(id)}
            >
              {name && <Typography variant="h4">{name}</Typography>}
              <StatusChip
                size="medium"
                isActive={isActiveStore}
                color={isActiveStore ? 'success' : 'default'}
                label={isActiveStore ? 'Open' : 'Open Soon'}
                sx={{ maxWidth: 'fit-content' }}
              />
              <Box>
                <Typography variant="h5" pt={2}>
                  {`Open time: ${activeTimePeriod?.open || '-'}`}
                </Typography>
                <Typography variant="h5">
                  {`Close time: ${activeTimePeriod?.close || '-'}`}
                </Typography>
              </Box>
            </Card>
          );
        })
      ) : (
        <Box display="flex" justifyContent="center" width="100%" pt={6}>
          <CircularProgress color="success" />
        </Box>
      )}
    </PageWrapper>
  );
};

export default Home;
