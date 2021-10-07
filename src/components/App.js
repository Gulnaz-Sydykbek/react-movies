import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './Loader/Loader';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import LibraryPage from '../pages/LibraryPage/LibraryPage';

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
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviePage} />

          <Container>
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/library" component={LibraryPage} />
          </Container>

          <Redirect to="/" />
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
