import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { moviesSelectors } from 'redux/movies';
import HomePageList from '../HomePage/HomePageList';
import Pagination from 'components/Pagination/Pagination';

function LibraryPage(props) {
  const oldMovies = useSelector(moviesSelectors.getMoviesItems);

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    if (newMovies.length > 0) {
      setStatus('resolved');
      setMovies(newMovies[0]);
    }
  }, []);

  const itemsPerPage = 20;

  const itemsPages = Math.ceil(oldMovies.length / itemsPerPage);

  const newMovies = Array.from({ length: itemsPages }, (_, index) => {
    const start = index * itemsPerPage;
    return oldMovies.slice(start, start + itemsPerPage);
  });

  const onClickNextPage = next => {
    setPage(page => page + next);
    setMovies(newMovies[page - 1 + next]);
  };

  const onClickPrevPage = prev => {
    setPage(page => page - prev);
    setMovies(newMovies[page - (prev + 1)]);
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
      {status === 'resolved' && (
        <>
          <HomePageList movies={movies} location={props.location} />

          <Pagination
            movies={movies}
            page={page}
            totalPage={newMovies.length}
            onClickPrevPage={onClickPrevPage}
            onClickNextPage={onClickNextPage}
            onClickPage={onClickPage}
          />
        </>
      )}
    </>
  );
}

export default LibraryPage;
