import { Carousel } from 'react-bootstrap';
import defaultImage from '../../images/defaultImage.jpg';
import s from './Slider.module.css';

function Slider(props) {
  const { movies } = props;

  return (
    <Carousel className={s.slider}>
      {movies.map(movie => {
        const { id, poster_path, title } = movie;
        return (
          <Carousel.Item key={id}>
            <ul className={s.ex}>
              <li className={s.exa}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className="d-block w-100"
                  />
                ) : (
                  <img
                    src={defaultImage}
                    alt={title}
                    className="d-block w-100"
                  />
                )}
              </li>
              <li className={s.exa}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className="d-block w-100"
                  />
                ) : (
                  <img
                    src={defaultImage}
                    alt={title}
                    className="d-block w-100"
                  />
                )}
              </li>
              <li className={s.exa}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className="d-block w-100"
                  />
                ) : (
                  <img
                    src={defaultImage}
                    alt={title}
                    className="d-block w-100"
                  />
                )}
              </li>
              <li className={s.exa}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className="d-block w-100"
                  />
                ) : (
                  <img
                    src={defaultImage}
                    alt={title}
                    className="d-block w-100"
                  />
                )}
              </li>
              <li className={s.exa}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className="d-block w-100"
                  />
                ) : (
                  <img
                    src={defaultImage}
                    alt={title}
                    className="d-block w-100"
                  />
                )}
              </li>
            </ul>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
