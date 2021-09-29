import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation(props) {
  const { link, activeLink, navButton } = s;

  return (
    <nav>
      <NavLink exact to="/" className={link} activeClassName={activeLink}>
        <button className={navButton} onClick={() => props.onClick(true)}>
          Home
        </button>
      </NavLink>

      <NavLink to="/library" className={link} activeClassName={activeLink}>
        <button className={navButton} onClick={() => props.onClick(false)}>
          My library
        </button>
      </NavLink>
    </nav>
  );
}

export default Navigation;
