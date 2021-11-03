import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
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
          {visible ? (
            <p>
              Account <AiFillCaretUp />
            </p>
          ) : (
            <p>
              Account <AiFillCaretDown />
            </p>
          )}
        </button>

        {visible && (
          <div className={s.linkContainer}>
            <NavLink
              exact
              to="/register"
              className={s.authLink}
              activeClassName={activeLink}
            >
              Sign up
            </NavLink>

            <NavLink
              to="/login"
              className={s.authLink}
              activeClassName={activeLink}
            >
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default AuthNav;
