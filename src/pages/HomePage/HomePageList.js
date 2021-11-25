import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImage from 'images/defaultImage.jpg';
import s from './HomePage.module.css';

function HomePageList(props) {
  const { movies } = props;

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
                  pathname: `/movies/${id}`,
                  state: { from: props.location.pathname },
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

HomePageList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.node,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default HomePageList;
