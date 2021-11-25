import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import defaultImage from 'images/defaultImage.jpg';
import * as moviesAction from 'redux/movies/movies-action';
import { authSelectors } from 'redux/auth';
import VideoPage from '../VideoPage/VideoPage';
import Modal from 'components/Modal/Modal';
import s from './MovieDetails.module.css';

function MovieDetailsPageList(props) {
  const {
    movie: { poster_path, title, release_date, vote_average, overview, genres },
    movieId,
  } = props;

  const list = useSelector(state => state.movies.items);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const onAdd = () => {
    dispatch(moviesAction.libraryMovies(props.movie));
  };

  const onDelete = () => {
    dispatch(moviesAction.deleteMovies(props.movie.id));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const filterList = list.map(({ id }) => id).includes(props.movie.id);

  const {
    detailsContainer,
    image,
    defaultImg,
    detailsItems,
    items,
    genresContainer,
    genresItems,
    buttonItems,
    button,
  } = s;

  return (
    <div className={detailsContainer}>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className={image}
        />
      ) : (
        <img src={defaultImage} alt={title} className={defaultImg} />
      )}

      <ul className={detailsItems}>
        <li className={items}>
          <h2 className={items}>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User Score: {vote_average * 10}%</p>
        </li>

        <li className={items}>
          <h3 className={items}>Overview</h3>
          <p>{overview}</p>
        </li>

        <li className={items}>
          <h3 className={items}>Genres</h3>
          <ul className={genresContainer}>
            {genres.map(genre => {
              const { id, name } = genre;

              return (
                <li className={genresItems} key={id}>
                  {name}
                </li>
              );
            })}
          </ul>
        </li>

        {isLoggedIn && (
          <li className={buttonItems}>
            {filterList ? (
              <button
                className={button}
                onClick={() => onDelete()}
                type="button"
              >
                Delete
              </button>
            ) : (
              <button className={button} onClick={() => onAdd()} type="button">
                Add
              </button>
            )}
          </li>
        )}
        <li className={buttonItems}>
          <button
            className={button}
            type="button"
            onClick={() => toggleModal()}
          >
            Video
          </button>
          {showModal && (
            <Modal onToggleModal={toggleModal} showModal={showModal}>
              <VideoPage movieId={movieId} />
            </Modal>
          )}
        </li>
      </ul>
    </div>
  );
}

MovieDetailsPageList.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.node,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  }),
};

export default MovieDetailsPageList;
