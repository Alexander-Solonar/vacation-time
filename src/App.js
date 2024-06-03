import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContextProvider from './context/Context';
import Layout from './components/layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './redux/operations';

const Home = lazy(() => import('../src/pages/pageHome'));
const AboutUs = lazy(() => import('../src/pages/pageAboutUs'));
const Contacts = lazy(() => import('../src/pages/pageContacts'));
const Reserve = lazy(() => import('../src/pages/pageReserve'));
const CottageBooking = lazy(() => import('../src/pages/pageCottageBooking'));
const Register = lazy(() => import('../src/pages/pageRegister'));
const Login = lazy(() => import('../src/pages/pageLogin'));
const Account = lazy(() => import('../src/pages/pageAccount'));

function App() {
  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchUserData(uid));
  }, [dispatch, uid]);

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="reserve/:houseId" element={<CottageBooking />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/account" component={Register} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/account" component={Login} />
            }
          />
          <Route
            path="/account"
            element={<PrivateRoute redirectTo="/login" component={Account} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
