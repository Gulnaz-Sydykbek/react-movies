import { Link } from 'react-router-dom';
import { BsFilm } from 'react-icons/bs';
import s from './Logotype.module.css';

function Logotype(props) {
  const { logo, logoButton, logoSvg, logoTytle } = s;

  return (
    <Link to="/" className={logo}>
      <button onClick={() => props.hideClick(true)} className={logoButton}>
        <BsFilm className={logoSvg} />
        <span className={logoTytle}>Filmoteka</span>
      </button>
    </Link>
  );
}

export default Logotype;
