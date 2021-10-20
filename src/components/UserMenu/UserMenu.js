import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from '../Navigation/Navigation.module.css';

function UserMenu() {
  const { authNav, link, activeLink } = s;
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={authNav}>
      <span>Welkom, {name}!</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
