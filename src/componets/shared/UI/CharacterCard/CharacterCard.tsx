import { FC, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IResponse } from '../../../../types/types';
import stringMatching from '../../lib/stringMatching';
import imageIfNull from '../../../../assets/images/incognito.png';

import styles from './CharacterCard.module.css';

type CharacterCardProps = {
  character: IResponse;
  request: string;
};

const CharacterCard: FC<CharacterCardProps> = ({ character, request }) => {
  const { search } = useLocation();

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
    <Link to={`/${slug}${search}`} className={styles.cardContainer}>
      <div className={styles['image-container']}>
        <img
          loading="lazy"
          className={styles['card-image']}
          src={image ?? imageIfNull}
          alt="character"
        />
      </div>
      <div className={styles['card-info']}>
        <h4>{titleWords.map((word) => isMatchColor(word, request))}</h4>
      </div>
    </Link>
  );
};

export default CharacterCard;
