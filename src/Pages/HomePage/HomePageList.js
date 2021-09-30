import { Link } from 'react-router-dom';
import defaultImages from '../../Images/defaultImg.jpg';
import s from './HomePage.module.css';

function HomePageList(props) {
  const { movies } = props;
  const { gallery, galleryItemIMG, galleryItemImage, titleName } = s;

  return (
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
                    className={galleryItemImage}
                    width="270"
                    height="410"
                  />
                )}
                <p className={titleName}>{title}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default HomePageList;
