import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';
import Layout from './components/layout';

const Home = lazy(() => import('../src/pages/home/Home'));
const AboutUs = lazy(() => import('../src/pages/aboutUs/AboutUs'));
const Contacts = lazy(() => import('../src/pages/contacts/Contacts'));
const Reserve = lazy(() => import('../src/pages/reserve/Reserve'));

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
