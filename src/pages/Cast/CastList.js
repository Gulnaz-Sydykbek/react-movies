import PropTypes from 'prop-types';
import s from '../HomePage/HomePage.module.css';
import defaultImages from '../../images/defaultImg.jpg';

function CastList(props) {
  const { actors } = props;
  const { Gallery, GalleryItemIMG, GalleryItemImage, DefaultImg, TitleName } = s;

  return (
    <ul className={Gallery}>
      {actors.map(actor => {
        const { id, profile_path, original_name, character } = actor;

        return (
          <li key={id} className={GalleryItemIMG}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={original_name}
                className={GalleryItemImage}
              />
            ) : (
              <img
                src={defaultImages}
                alt={original_name}
                className={DefaultImg}
              />
            )}

            <h4 className={TitleName}>{original_name}</h4>
            {character && <p className={TitleName}>{character}</p>}
          </li>
        );
      })}
    </ul>
  );
}

CastList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.node,
      original_name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ),
};

export default CastList;
