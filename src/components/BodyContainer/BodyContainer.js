import { useSelector } from 'react-redux';
import s from './BodyContainer.module.css';

function BodyContainer({ children }) {
  const theme = useSelector(state => state.theme.toggle);

  return (
    <>
      {theme ? (
        <div className={s.secondBodyContainer}>{children}</div>
      ) : (
        <div className={s.bodyContainer}>{children}</div>
      )}
    </>
  );
}

export default BodyContainer;
