import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Container from '../Container/Container';
import Logotype from '../Logotype/Logotype';
import s from './Navigation.module.css';

function Navigation() {
  const {
    header,
    nav,
    link,
    activeLink,
    navButton,
    searchContainer,
    serchLink,
  } = s;

  const [click, setClick] = useState(true);

  return (
    <header className={header}>
      <Container>
        <nav className={nav}>
          <Logotype />

          <div>
            <NavLink exact to="/" className={link} activeClassName={activeLink}>
              <button
                type="button"
                className={navButton}
                onClick={() => setClick(true)}
              >
                Home
              </button>
            </NavLink>

            <NavLink
              to="/library"
              className={link}
              activeClassName={activeLink}
            >
              <button
                type="button"
                className={navButton}
                onClick={() => setClick(false)}
              >
                My library
              </button>
            </NavLink>
          </div>
        </nav>

        {click && (
          <div className={searchContainer}>
            <NavLink
              to="/movies"
              className={serchLink}
              activeClassName={activeLink}
            >
              Search movies...
            </NavLink>
          </div>
        )}

        <div className={s.homeImg}></div>
      </Container>
    </header>
  );
}

export default Navigation;
