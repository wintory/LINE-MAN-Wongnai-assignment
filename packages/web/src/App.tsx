import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import FullScreenLoading from './components/FullScreenLoading';
import Provider from './Provider';

const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const StoreDetail = lazy(() => import('./pages/StoreDetail'));
const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Provider>
      <Suspense fallback={<FullScreenLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/:storeId" element={<StoreDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Provider>
  );
};

export default App;
