import PropTypes from 'prop-types';
import s from '../HomePage/HomePage.module.css';
import defaultImages from '../../images/defaultImg.jpg';

function CastList(props) {
  const { actors } = props;
  const { gallery, galleryItemIMG, galleryItemImage, defaultImg, titleName } =
    s;

  return (
    <ul className={gallery}>
      {actors.map(actor => {
        const { id, profile_path, original_name, character } = actor;

        return (
          <li key={id} className={galleryItemIMG}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={original_name}
                className={galleryItemImage}
              />
            ) : (
              <img
                src={defaultImages}
                alt={original_name}
                className={defaultImg}
              />
            )}

            <h4 className={titleName}>{original_name}</h4>
            {character && <p className={titleName}>{character}</p>}
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
