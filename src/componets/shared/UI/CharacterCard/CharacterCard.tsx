import { FC, Fragment, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';
import { IResponse } from '../../../../types/types';
import stringMatching from '../../lib/stringMatching';
import imageIfNull from '../../../../assets/images/incognito.png';

import styles from './CharacterCard.module.css';

type CharacterCardProps = {
  character: IResponse;
  request: string;
};

const CharacterCard: FC<CharacterCardProps> = ({ character, request }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
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
        {!isImageLoaded && <Spinner />}
        <img
          className={styles['card-image']}
          src={image ?? imageIfNull}
          alt="character"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <div className={styles['card-info']}>
        <h4>{titleWords.map((word) => isMatchColor(word, request))}</h4>
      </div>
    </Link>
  );
};

export default CharacterCard;
