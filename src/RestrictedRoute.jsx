import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogged } from './redux/authSlice';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectLogged);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};