import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useLocation,
} from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import * as movieDetailsAPI from '../../service/movies-api';
import MovieDetailsPageList from './MovieDetailsPageList';
import Loader from '../../components/Loader/Loader';
import s from './MovieDetails.module.css';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast"*/));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews"*/),
);

function MovieDetailsPage(props) {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [from, setFrom] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    movieDetailsAPI
      .fetchMovieDetalsPage(movieId)
      .then(movie => {
        setMovie(movie);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
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

  const {
    main,
    MainClose,
    iconBackClose,
    CastRevContainer,
    LinkContainer,
    Link,
    ActiveLink,
    Close,
    iconClose,
  } = s;

  return (
    <div className={main}>
      {error && <p>Something went wrong. Try again</p>}
      {status === 'pending' && <Loader />}

      {status === 'resolved' && (
        <>
          <button type="button" onClick={onGoBack} className={MainClose}>
            <TiArrowBackOutline className={iconBackClose} />
          </button>

          {movie && <MovieDetailsPageList movie={movie} movieId={movieId} />}

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
                  to={{
                    pathname: `${url}`,
                    state: { from: from, search: search },
                  }}
                  className={Close}
                >
                  <MdOutlineCloseFullscreen className={iconClose} />
                </NavLink>

                <Cast />
              </Route>

              <Route path={`${path}/reviews`}>
                <NavLink
                  to={{
                    pathname: `${url}`,
                    state: { from: from, search: search },
                  }}
                  className={Close}
                >
                  <MdOutlineCloseFullscreen className={iconClose} />
                </NavLink>

                <Reviews />
              </Route>
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetailsPage;
