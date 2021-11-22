import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesCast from '../../service/movies-api';
import CastList from './CastList';
import Loader from '../../components/Loader/Loader';

function Cast() {
  const { movieId } = useParams();

  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    moviesCast
      .fetchMoviesCast(movieId)
      .then(actors => {
        setActors(actors.cast);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <>
      {error && <p>Something went wrong. Try again</p>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <CastList actors={actors} />}
    </>
  );
}

export default Cast;
