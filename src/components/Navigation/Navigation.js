import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Container from '../Container/Container';
import Logotype from '../Logotype/Logotype';
import s from './Navigation.module.css';

function Navigation() {
  const { link, activeLink, navButton } = s;
  const [click, setClick] = useState(true);
  console.log(click);

  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
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
          <div className={s.formContainer}>
            <NavLink to="/movies" className={link} activeClassName={activeLink}>
              <button
                type="button"
                className={s.button}
                onClick={() => setClick(false)}
              >
                Search movie...
              </button>
            </NavLink>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navigation;
