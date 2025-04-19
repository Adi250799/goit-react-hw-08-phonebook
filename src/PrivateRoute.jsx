import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogged } from './redux/authSlice';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectLogged);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};