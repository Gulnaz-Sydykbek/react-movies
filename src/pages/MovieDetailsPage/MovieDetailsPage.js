import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { TiArrowBackOutline } from 'react-icons/ti';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import Loader from '../../components/Loader/Loader';
import s from './MovieDetails.module.css';
import * as movieDetailsAPI from '../../service/movies-api';
import MovieDetailsPageList from './MovieDetailsPageList';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast"*/));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews"*/),
);

function MovieDetailsPage(props) {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const {
    main,
    MainClose,
    CastRevContainer,
    LinkContainer,
    Link,
    ActiveLink,
    Close,
  } = s;

  const [movie, setMovie] = useState(null);
  const [from, setFrom] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    movieDetailsAPI
      .fetchMovieDetalsPage(movieId)
      .then(setMovie)
      .catch(error => {
        toast.error('Something went wrong. Please, try again.');
      });
  }, [movieId]);

  useEffect(() => {
    setFrom(location.state && location.state.from ? location.state.from : '/');
    setSearch(
      location.state && location.state.search ? location.state.search : '',
    );
  }, [location.state]);

  const onGoBack = () =>
    props.history.push({
      pathname: from,
      search: search,
    });

  return (
    <div className={main}>
      <button type="button" onClick={onGoBack} className={MainClose}>
        <TiArrowBackOutline className={s.iconBackClose} />
      </button>

      {movie && <MovieDetailsPageList movie={movie} />}

      <div className={CastRevContainer}>
        <h3>Additional information</h3>

        <ul className={LinkContainer}>
          <li>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: from, search: search },
              }}
              className={Link}
              activeClassName={ActiveLink}
            >
              Cast
            </NavLink>
          </li>

          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: from, search: search },
              }}
              className={Link}
              activeClassName={ActiveLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Suspense fallback={<Loader />}>
          <Route path={`${path}/cast`}>
            <NavLink
              to={{ pathname: `${url}`, state: { from: from, search: search } }}
              className={Close}
            >
              <MdOutlineCloseFullscreen className={s.iconClose} />
            </NavLink>

            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <NavLink
              to={{ pathname: `${url}`, state: { from: from, search: search } }}
              className={Close}
            >
              <MdOutlineCloseFullscreen className={s.iconClose} />
            </NavLink>

            <Reviews />
          </Route>
        </Suspense>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
