import { BsFilm } from 'react-icons/bs';
import s from './Logotype.module.css';

function Logotype() {
  return (
    <button type="button" className={s.logoButton}>
      <BsFilm className={s.logoSvg} />
      <span className={s.logoTytle}>Filmoteka</span>
    </button>
  );
}

export default Logotype;
