import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLogged } from '../redux/authSlice';
import css from './Navigation.module.css'

export const Navigation = () => {
  const isLoggedIn = useSelector(selectLogged);

  return (
    <nav className={css.NavBox}>
      <NavLink to="/"> Home </NavLink>
      {isLoggedIn && ( <NavLink to="/contacts"> Contacts </NavLink> )}
    </nav>
  );
};