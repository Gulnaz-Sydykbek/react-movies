import { useSelector } from 'react-redux';
import { moviesSelectors } from 'redux/movies';
import s from './BodyContainer.module.css';

function BodyContainer({ children }) {
  const theme = useSelector(moviesSelectors.getThemeToggle);

  const { secondBodyContainer, bodyContainer } = s;

  return (
    <>
      {theme ? (
        <div className={secondBodyContainer}>{children}</div>
      ) : (
        <div className={bodyContainer}>{children}</div>
      )}
    </>
  );
}

export default BodyContainer;
