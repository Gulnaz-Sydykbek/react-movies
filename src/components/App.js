import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ToggleSwitch from './ToggleSwitch/ToggleSwitch';
import Loader from './Loader/Loader';
import BodyContainer from './BodyContainer/BodyContainer';
import Container from './Container/Container';
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

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getisFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <BodyContainer>
        <ToggleSwitch />
        <AppBar />

        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/">
              <Route exact path="/" component={HomePage} />
            </PublicRoute>

            <Route exact path="/movies" component={MoviePage} />

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/" restricted>
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
