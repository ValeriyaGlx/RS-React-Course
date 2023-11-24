import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { DEFAULT_PAGE } from '@/components/shared/constants/constants';

import arrowIcon from '../../../public/assets/icons/arrow-icon.png';

import styles from './Pagination.module.css';

type PaginationProps = {
  totalPages: number;
};

const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const router = useRouter();

  const changeUrl = (page: string) => {
    const query = { ...router.query, page };
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  const { page } = router.query;
  const numberOfPage = Number(page) ?? DEFAULT_PAGE;

  return (
    <div className={styles.pagination}>
      <button
        className={[styles.paginationButton, styles.rotate].join(' ')}
        onClick={() => changeUrl(String(DEFAULT_PAGE))}
        disabled={numberOfPage === DEFAULT_PAGE}
        data-testid="first-page"
      >
        <Image src={arrowIcon} alt="arrow" />
        <Image src={arrowIcon} alt="arrow" />
      </button>

      <button
        className={[styles.paginationButton, styles.rotate].join(' ')}
        onClick={() => changeUrl(String(numberOfPage - 1))}
        disabled={numberOfPage === DEFAULT_PAGE}
        data-testid="prev-page"
      >
        <Image src={arrowIcon} alt="arrow" />
      </button>

      <span className={styles.paginationPageInfo}>
        {page} out of {totalPages}
      </span>

      <button
        className={styles.paginationButton}
        onClick={() => changeUrl(String(numberOfPage + 1))}
        disabled={numberOfPage === totalPages}
        data-testid="next-page"
      >
        <Image src={arrowIcon} alt="arrow" />
      </button>

      <button
        className={styles.paginationButton}
        onClick={() => changeUrl(String(totalPages))}
        disabled={numberOfPage === totalPages}
        data-testid="last-page"
      >
        <Image src={arrowIcon} alt="arrow" />
        <Image src={arrowIcon} alt="arrow" />
      </button>
    </div>
  );
};

export default Pagination;
