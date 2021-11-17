import { Link } from 'react-router-dom';
import { BsFilm } from 'react-icons/bs';
import s from './Logotype.module.css';

function Logotype(props) {
  return (
    <Link to="/" className={s.logo}>
      <button onClick={() => props.hideClick(true)} className={s.logoButton}>
        <BsFilm className={s.logoSvg} />
        <span className={s.logoTytle}>Filmoteka</span>
      </button>
    </Link>
  );
}

export default Logotype;
