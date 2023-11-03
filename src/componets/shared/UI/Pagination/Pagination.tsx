import React, { FC } from 'react';

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
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        Первая страница
      </button>

      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Предыдущая страница
      </button>

      <span className="pagination-current-page">{currentPage}</span>

      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Следующая страница
      </button>

      <button
        className="pagination-button"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        Последняя страница
      </button>
    </div>
  );
};

export default Pagination;
