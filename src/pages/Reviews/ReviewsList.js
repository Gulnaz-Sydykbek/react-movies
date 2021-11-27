import PropTypes from 'prop-types';
import s from './Reviews.module.css';

function ReviewsList(props) {
  const { reviews } = props;

  const { reviewContainer, reviewItem, authorTitle, reviewText, title } = s;

  return (
    <>
      {reviews.length !== 0 ? (
        <ul className={reviewContainer}>
          {reviews.map(review => {
            const { id, content, author } = review;

            return (
              <li key={id} className={reviewItem}>
                <h4 className={authorTitle}>Author: {author}</h4>
                <p className={reviewText}>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h4 className={title}>We don't have any reviews for this movie</h4>
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
