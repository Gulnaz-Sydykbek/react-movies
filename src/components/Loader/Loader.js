import LoaderSpiner from 'react-loader-spinner';
import s from './Loader.module.css';

function Loader() {
  const { loader } = s;

  return (
    <div className={loader}>
      <LoaderSpiner type="ThreeDots" color="#ff6b08" height={80} width={80} />
    </div>
  );
}

export default Loader;
