import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectLogged } from '../redux/authSlice';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectLogged);

  return (
    <header className={css.MainHeader}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};