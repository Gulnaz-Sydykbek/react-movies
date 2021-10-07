import { useState, useEffect } from 'react';
import * as popularMoviesAPI from '../../service/movies-api';
import HomePageList from './HomePageList';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';

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
        console.log(error);
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
      <Container>
        <HomePageList movies={movies} location={props.location} />

        <Pagination
          movies={movies}
          page={page}
          totalPage={totalPage}
          onClickPrevPage={onClickPrevPage}
          onClickNextPage={onClickNextPage}
          onClickPage={onClickPage}
        />
      </Container>

      {movies.length > 0 && <Footer />}
    </>
  );
}

export default HomePage;
