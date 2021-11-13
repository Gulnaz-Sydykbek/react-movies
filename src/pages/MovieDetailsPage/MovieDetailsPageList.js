import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../images/defaultImage.jpg';
import { authSelectors } from '../../redux/auth';
import Modal from '../../components/Modal/Modal';
import VideoPage from '../VideoPage/VideoPage';
import * as moviesAction from '../../redux/movies/movies-action';
import s from './MovieDetails.module.css';

function MovieDetailsPageList(props) {
  const {
    movie: { poster_path, title, release_date, vote_average, overview, genres },
    movieId,
  } = props;
  const {
    DetailsContainer,
    Image,
    DetailsItems,
    GenresContainer,
    GenresItems,
    DefaultImg,
    Items,
    ButtonItems,
  } = s;

  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const list = useSelector(state => state.movies.items);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

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

  return (
    <div className={DetailsContainer}>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className={Image}
        />
      ) : (
        <img src={defaultImage} alt={title} className={DefaultImg} />
      )}

      <ul className={DetailsItems}>
        <li className={Items}>
          <h2 className={Items}>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User Score: {vote_average * 10}%</p>
        </li>

        <li className={Items}>
          <h3 className={Items}>Overview</h3>
          <p>{overview}</p>
        </li>

        <li className={Items}>
          <h3 className={Items}>Genres</h3>
          <ul className={GenresContainer}>
            {genres.map(genre => {
              const { id, name } = genre;

              return (
                <li className={GenresItems} key={id}>
                  {name}
                </li>
              );
            })}
          </ul>
        </li>

        {isLoggedIn && (
          <li className={ButtonItems}>
            {filterList ? (
              <button
                className={s.button}
                onClick={() => onDelete()}
                type="button"
              >
                Delete
              </button>
            ) : (
              <button
                className={s.button}
                onClick={() => onAdd()}
                type="button"
              >
                Add
              </button>
            )}
          </li>
        )}
        <li className={ButtonItems}>
          <button
            className={s.button}
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
