import { useRouter } from 'next/router';

import {
  CARDS_AMOUNT,
  DEFAULT_CARDS,
  DEFAULT_PAGE,
} from '@/components/shared/constants/constants';

import styles from './NumbersOfCardsButtons.module.css';

const NumbersOfCardsButtons = () => {
  const router = useRouter();

  const activeButton = Number(router.query.size) || DEFAULT_CARDS;

  const changeUrl = (numberOfCards: string) => {
    const query = { ...router.query, page: DEFAULT_PAGE, size: numberOfCards };
    router.push({
      pathname: router.pathname,
      query,
    });
  };

  return (
    <div className={styles.container}>
      <div>Number Of Characters:</div>
      {CARDS_AMOUNT.map((btn) => (
        <button
          className={[
            styles.button,
            activeButton === btn ? styles.active : '',
          ].join(' ')}
          key={btn}
          onClick={() => {
            changeUrl(String(btn));
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default NumbersOfCardsButtons;
