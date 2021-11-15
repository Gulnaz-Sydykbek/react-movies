import { useSelector } from 'react-redux';
import s from './Container.module.css';

function Container({ children }) {
  const theme = useSelector(state => state.theme.toggle);

  return (
    <>
      {theme ? (
        <div className={s.secondContainer}>{children}</div>
      ) : (
        <div className={s.container}>{children}</div>
      )}
    </>
  );
}

export default Container;
