import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';
import Layout from './components/layout';

const Home = lazy(() => import('../src/pages/home/Home'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
