import { FC } from 'react';

import logoIfNull from '../../../../assets/images/incognito.png';
import { ISingleResponse } from '../../../../types/types';
import styles from '../CardInfo.module.css';

type CardInfoProps = {
  closeSideBar: () => void;
  cardInfo: ISingleResponse | null;
};

// eslint-disable-next-line consistent-return
const CardInfo: FC<CardInfoProps> = ({ closeSideBar, cardInfo }) => {
  if (cardInfo) {
    return (
      <div className={styles.card}>
        <button
          onClick={closeSideBar}
          className={styles.closeButton}
          aria-hidden="true"
        />
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={cardInfo.image ?? logoIfNull}
            alt="card"
          />
        </div>
        <h2 className={styles.inner}>{cardInfo.name}</h2>
        <div>Gender: {cardInfo.gender ?? 'unknown'}</div>
        <div>Species: {cardInfo.species ?? 'unknown'}</div>
        <div>Blood status: {cardInfo.blood_status ?? 'unknown'}</div>
      </div>
    );
  }
};

export default CardInfo;
