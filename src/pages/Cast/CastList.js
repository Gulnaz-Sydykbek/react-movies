import PropTypes from 'prop-types';
import defaultImage from 'images/defaultImage.jpg';
import s from '../HomePage/HomePage.module.css';

function CastList(props) {
  const { actors } = props;

  const {
    cast,
    gallery,
    galleryItemIMG,
    galleryItemImage,
    defaultImg,
    titleName,
    characterName,
    title,
  } = s;

  return (
    <div className={cast}>
      {actors.length !== 0 ? (
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
                    src={defaultImage}
                    alt={original_name}
                    className={defaultImg}
                  />
                )}

                <h4 className={titleName}>{original_name}</h4>
                {character && <p className={characterName}>{character}</p>}
              </li>
            );
          })}
        </ul>
      ) : (
        <h4 className={title}>We don't have any cast for this movie</h4>
      )}
    </div>
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
