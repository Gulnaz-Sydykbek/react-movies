import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const { authNav, authSpan, authButton } = s;

  return (
    <div className={authNav}>
      <span className={authSpan}>Welkom, {name}!</span>
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
