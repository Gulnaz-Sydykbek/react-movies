import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const { authNav, authButton } = s;

  return (
    <div className={authNav}>
      <span>Welkom, {name}!</span>
      <button
        className={authButton}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
