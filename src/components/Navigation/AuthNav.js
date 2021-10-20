import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function AuthNav() {
  const { authNav, link, activeLink } = s;

  return (
    <header>
      <nav className={authNav}>
        <NavLink
          exact
          to="/register"
          className={link}
          activeClassName={activeLink}
        >
          Sign up
        </NavLink>

        <NavLink to="/login" className={link} activeClassName={activeLink}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default AuthNav;
