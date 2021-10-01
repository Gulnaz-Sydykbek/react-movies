import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation(props) {
  const { link, activeLink, navButton } = s;

  const onTrueClick = () => {
    props.onRouteFalseClick(true);
    props.onClick(true);
  };

  return (
    <nav>
      <NavLink
        exact
        to="/"
        className={link}
        activeClassName={props.routeClick && activeLink}
      >
        <button type="button" className={navButton} onClick={onTrueClick}>
          Home
        </button>
      </NavLink>

      <NavLink to="/library" className={link} activeClassName={activeLink}>
        <button
          type="button"
          className={navButton}
          onClick={() => props.onClick(false)}
        >
          My library
        </button>
      </NavLink>
    </nav>
  );
}

export default Navigation;
