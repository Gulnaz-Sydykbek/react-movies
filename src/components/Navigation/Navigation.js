import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { moviesAction, moviesSelectors } from 'redux/movies';
import Container from '../Container/Container';
import Logotype from '../Logotype/Logotype';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const searchBar = useSelector(moviesSelectors.getSearchBarHide);
  const dispatch = useDispatch();

  const hideClick = trueItem => {
    dispatch(moviesAction.searchBarHide(trueItem));
  };

  const {
    nav,
    link,
    activeLink,
    navButton,
    searchContainer,
    serchLink,
    searchButton,
    homeImg,
  } = s;

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

        {searchBar && (
          <div className={searchContainer}>
            <NavLink to="/movies" className={serchLink}>
              <button
                className={searchButton}
                type="button"
                onClick={() => hideClick(false)}
              >
                Search movies...
              </button>
            </NavLink>
          </div>
        )}

        <div className={homeImg}></div>
      </Container>
    </header>
  );
}

export default Navigation;
