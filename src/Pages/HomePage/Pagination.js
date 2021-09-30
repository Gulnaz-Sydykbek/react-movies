import s from './Pagination.module.css';

function Pagination(props) {
  const {
    movies,
    page,
    totalPage,
    onClickPrevPage,
    onClickNextPage,
    onClickPage,
  } = props;

  const ref = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const buttonPrevActive = page === 1;
  const butonNextActive = page === totalPage;

  return (
    <div>
      {movies.length > 0 && (
        <div>
          <button
            onClick={() => onClickPrevPage(1)}
            className={s.galleryButton}
            disabled={buttonPrevActive}
          >
            prev
          </button>

          {page > 3 && (
            <>
              <button
                ref={ref}
                onClick={() => onClickPage(1)}
                className={s.galleryButton}
              >
                1
              </button>
              <button className={s.galleryButton}>...</button>
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

          <button ref={ref} className={s.galleryButton}>
            {page}
          </button>

          {page < totalPage && (
            <button
              ref={ref}
              className={s.galleryButton}
              onClick={() => onClickNextPage(1)}
            >
              {1 + page}
            </button>
          )}

          {page < totalPage - 1 && (
            <button
              ref={ref}
              className={s.galleryButton}
              onClick={() => onClickNextPage(2)}
            >
              {2 + page}
            </button>
          )}

          {page < totalPage - 2 && (
            <>
              <button className={s.galleryButton}>...</button>

              <button
                ref={ref}
                className={s.galleryButton}
                onClick={() => onClickPage(totalPage)}
              >
                {totalPage}
              </button>
            </>
          )}

          <button
            ref={ref}
            onClick={() => onClickNextPage(1)}
            className={s.galleryButton}
            disabled={butonNextActive}
          >
            next
          </button>
        </div>
      )}
    </div>
  );
}

export default Pagination;
