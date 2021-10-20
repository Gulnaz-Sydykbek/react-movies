import { CgPushRight, CgPushLeft } from 'react-icons/cg';
import s from './Pagination.module.css';

function LibraryPagination(props) {
  const {
    movies,
    page,

    onClickPrevPage,
    onClickNextPage,
    onClickPage,
  } = props;

  const { pagination } = s;

  const ref = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const buttonPrevActive = page === 1;

  return (
    <>
      {movies.length > 0 && (
        <div className={pagination}>
          {page !== 1 && (
            <button
              onClick={() => onClickPrevPage(1)}
              className={s.iconsButton}
              disabled={buttonPrevActive}
            >
              <CgPushLeft />
            </button>
          )}

          {page > 3 && (
            <>
              <button
                ref={ref}
                onClick={() => onClickPage(1)}
                className={s.galleryButton}
              >
                1
              </button>
              <button className={s.dotsButton}>...</button>
            </>
          )}

          {page > 2 && (
            <button
              ref={ref}
              className={s.galleryButton}
              onClick={() => onClickPrevPage(2)}
            >
              {page - 2}
            </button>
          )}

          {page > 1 && (
            <button
              ref={ref}
              className={s.galleryButton}
              onClick={() => onClickPrevPage(1)}
            >
              {page - 1}
            </button>
          )}

          <button ref={ref} className={s.activeButton}>
            {page}
          </button>
        </div>
      )}
    </>
  );
}

export default LibraryPagination;
