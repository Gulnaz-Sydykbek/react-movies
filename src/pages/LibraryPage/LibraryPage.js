import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import defaultImages from '../../images/defaultImg.jpg';
import s from '../HomePage/HomePage.module.css';

function LibraryPage(props) {
  const {
    moviesContainer,
    gallery,
    galleryItemIMG,
    galleryItemImage,
    defaultImg,
    titleName,
  } = s;

  const movies = useSelector(state => state.movies.items);

  console.log(movies);

  return (
    <div className={moviesContainer}>
      <ul className={gallery}>
        {movies.length > 0 &&
          movies.map(movie => {
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
                    <img
                      src={defaultImages}
                      alt={title}
                      className={defaultImg}
                    />
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

export default LibraryPage;
