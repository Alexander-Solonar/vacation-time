import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { user } = useSelector(state => state.data);
  const shouldRedirect = user !== null && user !== undefined && isLoggedIn;

  return shouldRedirect ? <Component /> : <Navigate to={redirectTo} />;
};
