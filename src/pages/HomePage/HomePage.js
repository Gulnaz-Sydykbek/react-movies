import { useState, useEffect } from 'react';
import * as popularMoviesAPI from '../../service/movies-api';
import HomePageList from './HomePageList';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';

function HomePage(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    popularMoviesAPI
      .fetchPopularMovies(page)
      .then(movies => {
        setMovies(movies.results);
        setTotalPage(movies.total_pages);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [page]);

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
      {error && <p>Something went wrong. Try again</p>}

      <Container>
        {status === 'resolved' && (
          <>
            <HomePageList movies={movies} location={props.location} />

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

export default HomePage;
