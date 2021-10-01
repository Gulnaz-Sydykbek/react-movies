import { useSelector } from 'react-redux';
import defaultImages from '../../Images/defaultImg.jpg';
import s from '../HomePage/HomePage.module.css';

function SearchBarPageList() {
  const { gallery, galleryItemIMG, galleryItemImage, defaultImg, titleName } =
    s;

  const movies = useSelector(state => state.movies.entities.results);

  return (
    <ul className={gallery}>
      {movies.length > 0 &&
        movies.map(movie => {
          const { id, poster_path, title } = movie;

          return (
            <li key={id} className={galleryItemIMG}>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                  className={galleryItemImage}
                />
              ) : (
                <img src={defaultImages} alt={title} className={defaultImg} />
              )}

              <p className={titleName}>{title}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default SearchBarPageList;
