import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import s from './Navigation.module.css';

function AuthNav() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  const { authNav, openButton, linkContainer, authLink, activeLink } = s;

  return (
    <header>
      <nav className={authNav}>
        <button className={openButton} type="button" onClick={toggle}>
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
          <div className={linkContainer}>
            <NavLink
              exact
              to="/register"
              className={authLink}
              activeClassName={activeLink}
            >
              Sign up
            </NavLink>

            <NavLink
              to="/login"
              className={authLink}
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
