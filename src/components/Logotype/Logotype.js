import { Link } from 'react-router-dom';
import { BsFilm } from 'react-icons/bs';
import s from './Logotype.module.css';

function Logotype() {
  return (
    <Link to="/" className={s.logo}>
      <BsFilm className={s.logoSvg} />
      <span className={s.logoTytle}>Filmoteka</span>
    </Link>
  );
}

export default Logotype;
