import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../Container/Container';
import Logotype from '../Logotype/Logotype';
import { authSelectors } from '../../redux/auth';
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
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const clickTrue = trueItem => {
    setClick(trueItem);
  };

  return (
    <header>
      <Container>
        <nav className={nav}>
          <Logotype clickTrue={clickTrue} />

          <div>
            <NavLink exact to="/" className={link} activeClassName={activeLink}>
              <button
                type="button"
                className={navButton}
                onClick={() => clickTrue(true)}
              >
                Home
              </button>
            </NavLink>

            {isLoggedIn && (
              <NavLink
                to="/library"
                className={link}
                activeClassName={activeLink}
              >
                <button
                  type="button"
                  className={navButton}
                  onClick={() => clickTrue(false)}
                >
                  My library
                </button>
              </NavLink>
            )}
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
