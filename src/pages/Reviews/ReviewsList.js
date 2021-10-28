import PropTypes from 'prop-types';
import './Reviews.css';

function ReviewsList(props) {
  const { reviews } = props;

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => {
            const { id, content, author } = review;

            return (
              <li key={id}>
                <h4 className="Author">Author: {author}</h4>
                <p className="Review">{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h4>We don't have any reviews for this movie</h4>
      )}
    </>
  );
}

ReviewsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

export default ReviewsList;
