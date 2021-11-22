import { useSelector } from 'react-redux';
import s from './Container.module.css';

function Container({ children }) {
  const theme = useSelector(state => state.theme.toggle);

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
