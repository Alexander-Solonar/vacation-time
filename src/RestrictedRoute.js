import Loader from 'components/common/loader';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { user, isLoader } = useSelector(state => state.data);
  const shouldRedirect = user !== null && user !== undefined && isLoggedIn;

  if (!isLoader) {
    return <Loader />;
  }

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
