import { useSelector } from 'react-redux';
import s from './BodyContainer.module.css';

function BodyContainer({ children }) {
  const theme = useSelector(state => state.theme.toggle);

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
