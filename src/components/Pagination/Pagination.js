import { useEffect } from 'react';
import { CgPushRight, CgPushLeft } from 'react-icons/cg';
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [page]);

  const buttonPrevActive = page === 1;
  const butonNextActive = page === totalPage;

  const { pagination, iconsButton, galleryButton, dotsButton, activeButton } =
    s;

  return (
    <>
      {movies.length > 0 && (
        <div className={pagination}>
          {page !== 1 && (
            <button
              onClick={() => onClickPrevPage(1)}
              className={iconsButton}
              disabled={buttonPrevActive}
            >
              <CgPushLeft />
            </button>
          )}

          {page > 3 && (
            <>
              <button onClick={() => onClickPage(1)} className={galleryButton}>
                1
              </button>
              <button className={dotsButton}>...</button>
            </>
          )}

          {page > 2 && (
            <button
              className={galleryButton}
              onClick={() => onClickPrevPage(2)}
            >
              {page - 2}
            </button>
          )}

          {page > 1 && (
            <button
              className={galleryButton}
              onClick={() => onClickPrevPage(1)}
            >
              {page - 1}
            </button>
          )}

          <button className={activeButton}>{page}</button>

          {page < totalPage && (
            <button
              className={galleryButton}
              onClick={() => onClickNextPage(1)}
            >
              {1 + page}
            </button>
          )}

          {page < totalPage - 1 && (
            <button
              className={galleryButton}
              onClick={() => onClickNextPage(2)}
            >
              {2 + page}
            </button>
          )}

          {page < totalPage - 2 && (
            <>
              <button className={dotsButton}>...</button>

              <button
                className={galleryButton}
                onClick={() => onClickPage(totalPage)}
              >
                {totalPage}
              </button>
            </>
          )}

          {page !== totalPage && (
            <button
              onClick={() => onClickNextPage(1)}
              className={iconsButton}
              disabled={butonNextActive}
            >
              <CgPushRight />
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Pagination;
