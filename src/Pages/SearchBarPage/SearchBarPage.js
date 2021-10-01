import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as moviesOperations from '../../redux/movies/movies-operations';
import SearchBar from '../../components/SearchBar/SearchBar';

function SearchBarPage(props) {
  const dispatch = useDispatch();

  const [movieName, setMovieName] = useState('');

  useEffect(() => {
    if (!movieName) {
      return;
    }

    dispatch(moviesOperations.fetchMovies(movieName));
  }, [dispatch, movieName]);

  const handleFormSubmit = name => {
    if (movieName === name) {
      return;
    }
    setMovieName(name);
  };

  return (
    <div>
      <SearchBar
        onFormSubmit={handleFormSubmit}
        onRouteFalseClick={props.onRouteFalseClick}
      />
    </div>
  );
}

export default SearchBarPage;
