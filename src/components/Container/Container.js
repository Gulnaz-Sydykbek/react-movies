import { useSelector } from 'react-redux';
import { themeSelectors } from 'redux/theme';
import s from './Container.module.css';

function Container({ children }) {
  const theme = useSelector(themeSelectors.getThemeToggle);

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
