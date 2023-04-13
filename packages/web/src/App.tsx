import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import StoreDetail from './pages/StoreDetail';
import Provider from './Provider';

const App = () => {
  return (
    <Provider>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store/*" element={<StoreDetail />} />
        </Routes>
      </Suspense>
    </Provider>
  );
};

export default App;
