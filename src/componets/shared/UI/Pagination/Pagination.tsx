import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import arrowIcon from '../../../../assets/icons/arrow-icon.svg';
import { DEFAULT_PAGE } from '../../constants/constants';

import styles from './Pagination.module.css';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    if (!searchParams.has('page')) {
      setSearchParams({ page: String(DEFAULT_PAGE) });
    } else {
      setPage(Number(searchParams.get('page')));
    }
  }, [searchParams, setSearchParams]);

  const handleClick = (curPage: number) => {
    onPageChange(curPage);
    setSearchParams({ page: String(curPage) });
  };

  return (
    <div className={styles.pagination}>
      <button
        className={[styles.paginationButton, styles.rotate].join(' ')}
        onClick={() => handleClick(DEFAULT_PAGE)}
        disabled={page === DEFAULT_PAGE}
      >
        <img src={arrowIcon} alt="arrow" />
        <img src={arrowIcon} alt="arrow" />
      </button>

      <button
        className={[styles.paginationButton, styles.rotate].join(' ')}
        onClick={() => handleClick(page - 1)}
        disabled={page === 1}
      >
        <img src={arrowIcon} alt="arrow" />
      </button>

      <span className={styles.paginationPageInfo}>
        {page} из {totalPages}
      </span>

      <button
        className={styles.paginationButton}
        onClick={() => handleClick(page + 1)}
        disabled={page === totalPages}
      >
        <img src={arrowIcon} alt="arrow" />
      </button>

      <button
        className={styles.paginationButton}
        onClick={() => handleClick(totalPages)}
        disabled={page === totalPages}
      >
        <img src={arrowIcon} alt="arrow" />
        <img src={arrowIcon} alt="arrow" />
      </button>
    </div>
  );
};

export default Pagination;
