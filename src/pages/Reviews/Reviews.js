import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesRevies from '../../service/movies-api';
import ReviewsList from './ReviewsList';
import Loader from '../../components/Loader/Loader';

function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    moviesRevies
      .fetchMoviesReviews(movieId)
      .then(reviews => {
        setReviews(reviews.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error.message);
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <div>
      {error && <p>Something went wrong. Try again</p>}
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <ReviewsList reviews={reviews} />}
    </div>
  );
}

export default Reviews;
