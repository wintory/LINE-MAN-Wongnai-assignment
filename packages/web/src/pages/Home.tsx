import { Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import PageWrapper from '../components/PageWrapper';
import { mockStoreListData } from '../constants/mock';

const Home: FC = () => {
  const navigate = useNavigate();
  const handleSelectStore = (id: number) => navigate(`/store/${id}`);

  return (
    <PageWrapper>
      <Typography variant="h2" my={4}>
        All Store
      </Typography>
      {mockStoreListData.map(({ storeId, name, coverImage }) => (
        <Card
          key={storeId}
          image={coverImage}
          onClick={() => handleSelectStore(storeId)}
        >
          {name && <Typography variant="h4">{name}</Typography>}
        </Card>
      ))}
    </PageWrapper>
  );
};

export default Home;
