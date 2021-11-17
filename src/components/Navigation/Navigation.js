import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../Container/Container';
import Logotype from '../Logotype/Logotype';
import { authSelectors } from '../../redux/auth';
import * as searchBarAction from '../../redux/searchBar/searchBar-action';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const hideTrue = useSelector(state => state.searchBar.hide);
  const dispatch = useDispatch();

  const hideClick = trueItem => {
    dispatch(searchBarAction.searchBarHide(trueItem));
  };

  const { nav, link, activeLink, navButton, searchContainer, serchLink } = s;

  return (
    <header>
      <Container>
        <nav className={nav}>
          <Logotype hideClick={hideClick} />

          <div>
            <NavLink exact to="/" className={link} activeClassName={activeLink}>
              <button
                type="button"
                className={navButton}
                onClick={() => hideClick(true)}
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
                  onClick={() => hideClick(false)}
                >
                  My library
                </button>
              </NavLink>
            )}
          </div>
        </nav>

        {hideTrue && (
          <div className={searchContainer}>
            <NavLink to="/movies" className={serchLink}>
              <button
                className={s.searchButton}
                type="button"
                onClick={() => hideClick(false)}
              >
                Search movies...
              </button>
            </NavLink>
          </div>
        )}

        <div className={s.homeImg}></div>
      </Container>
    </header>
  );
}

export default Navigation;
