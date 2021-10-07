import { BsFilm } from 'react-icons/bs';
import s from './Logotype.module.css';

function Logotype(props) {
  return (
    <button
      type="button"
      className={s.logoButton}
      onClick={() => props.onRouteFalseClick(true)}
    >
      <BsFilm className={s.logoSvg} />
      <span className={s.logoTytle}>Filmoteka</span>
    </button>
  );
}

export default Logotype;
