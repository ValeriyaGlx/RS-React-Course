import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

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

  useEffect(() => {
    if (!searchParams.has('page')) {
      setSearchParams({ page: '1' });
    }
  }, [searchParams, setSearchParams]);

  const handleClick = (page: number) => {
    onPageChange(page);
    setSearchParams({ page: String(page) });
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={() => handleClick(1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </button>

      <button
        className={styles.paginationButton}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      <span className={styles.paginationPageInfo}>
        {currentPage} из {totalPages}
      </span>

      <button
        className={styles.paginationButton}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>

      <button
        className={styles.paginationButton}
        onClick={() => handleClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
