import { useSelector } from 'react-redux';
import { themeSelectors } from 'redux/theme';
import s from './BodyContainer.module.css';

function BodyContainer({ children }) {
  const theme = useSelector(themeSelectors.getThemeToggle);

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
