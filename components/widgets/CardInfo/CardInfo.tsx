import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ISingleResponse } from '@/types/types';

import logoIfNull from '../../../public/assets/images/incognito.png';

import styles from './CardInfo.module.css';

type CardInfoProps = {
  cardInfo: ISingleResponse | undefined;
};

const CardInfo: FC<CardInfoProps> = ({ cardInfo }) => {
  const router = useRouter();
  const { page, value, size } = router.query;
  if (cardInfo) {
    return (
      <div className={styles.card}>
        <Link
          href={`/?page=${page}&value=${value}&size=${size}`}
          className={styles.closeButton}
          aria-hidden="true"
        />
        <div className={styles.imageContainer}>
          <Image
            width={300}
            height={300}
            loading="eager"
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

  return null;
};

export default CardInfo;
