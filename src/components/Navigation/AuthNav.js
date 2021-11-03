import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import s from './Navigation.module.css';

function AuthNav() {
  const { authNav, activeLink } = s;

  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <header>
      <nav className={authNav}>
        <button className={s.openButton} type="button" onClick={toggle}>
          {visible ? 'Close' : 'Open'}
        </button>

        {visible && (
          <div className={s.linkContainer}>
            <NavLink exact to="/register" activeClassName={activeLink}>
              Sign up
            </NavLink>

            <NavLink to="/login" activeClassName={activeLink}>
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default AuthNav;
