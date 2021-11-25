import { Carousel } from 'react-bootstrap';
import s from './Slider.module.css';

function Slider(props) {
  const { moviesVideo } = props;

  const { slider, video } = s;

  return (
    <>
      {moviesVideo.length > 1 && (
        <Carousel fade className={slider} interval={null}>
          {moviesVideo.map(movie => {
            return (
              <Carousel.Item key={movie.key} className="d-block w-100">
                <iframe
                  width="790"
                  height="444"
                  src={`https://www.youtube.com/embed/${movie.key}`}
                  title="YouTube video player"
                  className={video}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}

      {moviesVideo.length === 1 && (
        <iframe
          width="790"
          height="444"
          src={`https://www.youtube.com/embed/${moviesVideo[0].key}`}
          title="YouTube video player"
          className={video}
          key={moviesVideo[0].key}
        />
      )}
    </>
  );
}

export default Slider;
