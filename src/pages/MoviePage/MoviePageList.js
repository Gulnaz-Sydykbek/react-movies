import PropTypes from 'prop-types';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import defaultImage from '../../images/defaultImage.jpg';
import s from '../HomePage/HomePage.module.css';

function MoviePageList(props) {
  const { movies } = props;
  const { url } = useRouteMatch();
  const location = useLocation();
  const {
    moviesContainer,
    gallery,
    galleryItemIMG,
    galleryItemImage,
    defaultImg,
    titleName,
  } = s;

  return (
    <div className={moviesContainer}>
      <ul className={gallery}>
        {movies.map(movie => {
          const { id, poster_path, title } = movie;

          return (
            <li key={id} className={galleryItemIMG}>
              <Link
                to={{
                  pathname: `${url}/${id}`,
                  state: {
                    search:
                      location && props.locationSearch
                        ? props.locationSearch
                        : '',
                    from: props.location.pathname,
                  },
                }}
              >
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className={galleryItemImage}
                  />
                ) : (
                  <img src={defaultImage} alt={title} className={defaultImg} />
                )}

                <p className={titleName}>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

MoviePageList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.node,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MoviePageList;
