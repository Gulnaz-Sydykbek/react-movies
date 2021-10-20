import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from './Loader/Loader';
import Container from './Container/Container';
import AppBar from './Navigation/AppBar';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';

import LibraryPage from '../pages/LibraryPage/LibraryPage';
import RegisterView from '../views/RegisterView';
import LoginView from '../views/LoginView';

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

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path="/">
            <Route exact path="/" component={HomePage} />
          </PublicRoute>

          <PublicRoute exact path="/movies" restricted>
            <Route exact path="/movies" component={MoviePage} />
          </PublicRoute>

          <Container>
            <PublicRoute exact path="/movies/:movieId" restricted>
              <Route path="/movies/:movieId" component={MovieDetailsPage} />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" redirectTo="/" restricted>
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/library" redirectTo="/login">
              <Route path="/library" component={LibraryPage} />
            </PrivateRoute>
          </Container>

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
