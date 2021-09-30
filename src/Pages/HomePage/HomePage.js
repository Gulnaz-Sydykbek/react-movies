import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import * as popularMoviesAPI from '../../service/movies-api';
import HomePageList from './HomePageList';
import Pagination from './Pagination';

function HomePage(props) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    popularMoviesAPI
      .fetchPopularMovies(page)
      .then(movies => {
        setMovies(movies.results);
        setTotalPage(movies.total_pages);
      })
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
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
    <div>
      <HomePageList movies={movies} location={props.location} />
      <Pagination
        movies={movies}
        page={page}
        totalPage={totalPage}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        onClickPage={onClickPage}
      />
    </div>
  );
}

export default HomePage;
