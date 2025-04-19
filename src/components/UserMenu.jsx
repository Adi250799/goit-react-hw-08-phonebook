import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/authOperations';
import { selectUser } from '../redux/authSlice';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.UserMenuBox}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};