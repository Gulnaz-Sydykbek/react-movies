import { useState, useEffect } from 'react';
import * as videoMoviesAPI from 'service/movies-api';
import Slider from 'components/Slider/Slider';
import Loader from 'components/Loader/Loader';

function VideoPage(props) {
  const { movieId } = props;

  const [moviesVideo, setMoviesVideo] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    videoMoviesAPI
      .fetchMoviesVideo(movieId)
      .then(movies => {
        setMoviesVideo(movies.results);
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
      {status === 'resolved' && <Slider moviesVideo={moviesVideo} />}
    </>
  );
}

export default VideoPage;
