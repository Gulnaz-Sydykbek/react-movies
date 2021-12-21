import { useSelector } from 'react-redux';
import { moviesSelectors } from 'redux/movies';
import s from './Container.module.css';

function Container({ children }) {
  const theme = useSelector(moviesSelectors.getThemeToggle);

  const { secondContainer, container } = s;

  return (
    <>
      {theme ? (
        <div className={secondContainer}>{children}</div>
      ) : (
        <div className={container}>{children}</div>
      )}
    </>
  );
}

export default Container;
