import { useState } from 'react';
import { BsFilm } from 'react-icons/bs';
import Container from '../../components/Container/Container';

import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import s from './HeaderPage.module.css';

function HeaderPage() {
  const {
    headerContainer,
    main,
    logoSvg,
    logo,
    homeImg,
    libraryImg,
    buttonContainer,
    button,
  } = s;
  const [click, setClick] = useState(true);

  const onClick = isTrue => {
    setClick(isTrue);
  };

  return (
    <header className={headerContainer}>
      <Container>
        <div className={main}>
          <button type="button">
            <BsFilm className={logoSvg} />
            <span className={logo}>Filmoteka</span>
          </button>

          <Navigation onClick={onClick} />
        </div>

        {click && (
          <div className={homeImg}>
            <SearchBar />
          </div>
        )}

        {!click && (
          <div className={libraryImg}>
            <div className={buttonContainer}>
              <button type="button" className={button}>
                Watched
              </button>
              <button type="button" className={button}>
                Queue
              </button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default HeaderPage;
