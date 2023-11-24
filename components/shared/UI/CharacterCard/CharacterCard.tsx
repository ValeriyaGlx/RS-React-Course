import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import stringMatching from '@/components/shared/lib/stringMatching';
import { IResponse } from '@/types/types';

import imageIfNull from '../../../../public/assets/images/incognito.png';

import styles from './CharacterCard.module.css';

type CharacterCardProps = {
  character: IResponse;
};

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const router = useRouter();
  const { value } = router.query;

  const isMatchColor = (word: string, searchValue: string) => {
    const result = stringMatching(word, searchValue);
    const { parts, newPart } = result;
    return parts.map((part, partIndex) => (
      <Fragment key={Math.random()}>
        {partIndex > 0 ? <span className={styles.search}>{newPart}</span> : ' '}
        {part}
      </Fragment>
    ));
  };

  const { name, image, slug } = character.attributes;
  const titleWords = name.split(' ');

  return (
    <Link href={`/${slug}${router.asPath}`} className={styles.cardContainer}>
      <div className={styles['image-container']}>
        <Image
          width={248}
          height={250}
          className={styles['card-image']}
          src={image || imageIfNull}
          alt="character"
          loading="eager"
        />
      </div>
      <div className={styles['card-info']}>
        <h4>{titleWords.map((word) => isMatchColor(word, value as string))}</h4>
      </div>
    </Link>
  );
};

export default CharacterCard;
