import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.AuthDiv}>
      <NavLink to="/register"> Register </NavLink>
      <NavLink to="/login"> Log In </NavLink>
    </div>
  );
};