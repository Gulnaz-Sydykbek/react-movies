import LoaderSpiner from 'react-loader-spinner';

function Loader() {
  return (
    <div>
      <LoaderSpiner type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
