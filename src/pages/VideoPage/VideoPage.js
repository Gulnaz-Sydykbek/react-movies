import { useState, useEffect } from 'react';
import * as videoMoviesAPI from 'service/movies-api';
import Loader from 'components/Loader/Loader';
import s from './VideoPage.module.css';

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

  const { container, video } = s;

  return (
    <>
      {error && <p>Something went wrong. Try again</p>}
      {status === 'pending' && <Loader />}

      <div className={container}>
        {moviesVideo.length > 0 && (
          <iframe
            width="790"
            height="444"
            src={`https://www.youtube.com/embed/${moviesVideo[0].key}`}
            title="YouTube video player"
            key={moviesVideo[0].key}
            className={video}
          />
        )}

        {moviesVideo.length === 0 && (
          <iframe
            width="790"
            height="444"
            src={`https://www.youtube.com/embed/cpArXcZ0zrU`}
            title="YouTube video player"
            key="cpArXcZ0zrU"
            className={video}
          />
        )}
      </div>
    </>
  );
}

export default VideoPage;
