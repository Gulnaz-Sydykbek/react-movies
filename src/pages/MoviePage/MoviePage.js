import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as moviesApi from 'service/movies-api';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviePageList from './MoviePageList';
import Container from 'components/Container/Container';
import Footer from 'components/Footer/Footer';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';

export default function MoviesView(props) {
  const history = useHistory();
  const location = useLocation();

  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    const newSearch = new URLSearchParams(location.search).get('movieName');
    setMovieName(newSearch);
  }, [location.search]);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    setStatus('pending');

    moviesApi
      .fetchMoviesByName(movieName, page)
      .then(movies => {
        setMovies(movies.results);
        setTotalPage(movies.total_pages);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieName, page]);

  const handleFormSubmit = name => {
    if (movieName === name) {
      return;
    }
    setMovieName(name);
    setPage(1);
    setMovies([]);
    setStatus('idle');
    history.push({ ...location, search: `movieName=${name}` });
  };

  const onClickNextPage = next => {
    setPage(page => page + next);
  };

  const onClickPrevPage = prev => {
    setPage(page => page - prev);
  };

  const onClickPage = (onTotalPage, onInitialPage) => {
    if (onTotalPage) {
      setPage(onTotalPage);
    }

    if (onInitialPage) {
      setPage(onInitialPage);
    }
  };

  return (
    <>
      <SearchBar onFormSubmit={handleFormSubmit} />

      {error && <p>Something went wrong. Try again</p>}
      {status === 'pending' && <Loader />}

      <Container>
        {status === 'resolved' && (
          <>
            <MoviePageList
              movies={movies}
              locationSearch={location.search}
              location={props.location}
            />

            <Pagination
              movies={movies}
              page={page}
              totalPage={totalPage}
              onClickPrevPage={onClickPrevPage}
              onClickNextPage={onClickNextPage}
              onClickPage={onClickPage}
            />
          </>
        )}
      </Container>

      {status === 'resolved' && <Footer />}
    </>
  );
}
