import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';
import Layout from './components/layout';

const Home = lazy(() => import('../src/pages/pageHome/PageHome'));
const PageAboutUs = lazy(() => import('../src/pages/pageAboutUs/PageAboutUs'));
const Contacts = lazy(() => import('../src/pages/pageContacts/PageContacts'));
const PageReserve = lazy(() => import('../src/pages/pageReserve/PageReserve'));
const PageCottageBooking = lazy(
  () => import('../src/pages/pageCottageBooking/PageCottageBooking')
);
const PageAccount = lazy(() => import('../src/pages/pageAccount/PageAccount'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<PageAboutUs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="reserve" element={<PageReserve />} />
          <Route path="reserve/:houseId" element={<PageCottageBooking />} />
          <Route path="account" element={<PageAccount />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
