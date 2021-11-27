import { useEffect, useContext, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { __RouterContext } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { animated, useTransition } from 'react-spring';

import BodyContainer from './BodyContainer/BodyContainer';
import Container from './Container/Container';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import ScrollUp from './ScrollUp/ScrollUp';
import Loader from './Loader/Loader';
import AppBar from './Navigation/AppBar';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';

import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';
import { authOperations, authSelectors } from '../redux/auth';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "HomePage"*/),
);
const MoviePage = lazy(() =>
  import('../pages/MoviePage/MoviePage' /* webpackChunkName: "MoviePage"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage"*/
  ),
);
const LibraryPage = lazy(() =>
  import(
    '../pages/LibraryPage/LibraryPage' /* webpackChunkName: "LibraryPage"*/
  ),
);

function useRouter() {
  return useContext(__RouterContext);
}

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const { location } = useRouter();

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '100%',
    },
    enter: { opacity: 1 },
    leave: {
      opacity: 0,
    },
  });

  return (
    !isFetchingCurrentUser && (
      <BodyContainer>
        <ScrollUp />
        <ToggleSwitch />
        <AppBar />

        <Suspense fallback={<Loader />}>
          {transitions.map(({ item, props: transition, key }) => (
            <animated.div key={key} style={transition}>
              <Switch location={item}>
                <Route exact path="/one" component={HomePage} />
                <Route exact path="/two" component={LibraryPage} />
                <Route exact path="/three" component={MoviePage} />
              </Switch>
            </animated.div>
          ))}
          <Switch>
            <PublicRoute exact path="/">
              <Route exact path="/" component={HomePage} />
            </PublicRoute>

            <Route exact path="/movies" component={MoviePage} />

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/library" restricted>
              <LoginView />
            </PublicRoute>

            <Container>
              <Route path="/movies/:movieId" component={MovieDetailsPage} />

              <PrivateRoute path="/library" redirectTo="/login">
                <Route path="/library" component={LibraryPage} />
              </PrivateRoute>
            </Container>

            <Redirect to="/" />
          </Switch>
        </Suspense>

        <ToastContainer autoClose={3000} />
      </BodyContainer>
    )
  );
}

export default App;
