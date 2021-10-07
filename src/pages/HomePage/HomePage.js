import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as popularMoviesAPI from '../../service/movies-api';
import HomePageList from './HomePageList';

function HomePage(props) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    popularMoviesAPI
      .fetchPopularMovies()
      .then(movies => setMovies(movies.results))
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
      });
  }, []);

  return (
    <div>
      <HomePageList movies={movies} location={props.location} />
    </div>
  );
}

export default HomePage;
