import { useState, useEffect } from 'react';
import * as videoMoviesAPI from '../../service/movies-api';

function VideoPage(props) {
  const { movieId } = props;

  const [moviesVideo, setMoviesVideo] = useState([]);

  useEffect(() => {
    videoMoviesAPI
      .fetchMoviesVideo(movieId)
      .then(movies => {
        setMoviesVideo(movies.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      {moviesVideo[0] && (
        <iframe
          width="790"
          height="444"
          src={`https://www.youtube.com/embed/${moviesVideo[0].key}`}
          title="YouTube video player"
          key={moviesVideo[0].key}
        ></iframe>
      )}
    </>
  );
}

export default VideoPage;
