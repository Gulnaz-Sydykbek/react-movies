import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

function AppBar() {
  const { header } = s;
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <header className={header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
