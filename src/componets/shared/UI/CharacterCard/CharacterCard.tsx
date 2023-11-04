import { FC, Fragment, useState } from 'react';

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

  const isMatchColor = (word: string, search: string) => {
    const result = stringMatching(word, search);
    const { parts, newPart } = result;
    return parts.map((part, partIndex) => (
      <Fragment key={Math.random()}>
        {partIndex > 0 ? <span className={styles.search}>{newPart}</span> : ' '}
        {part}
      </Fragment>
    ));
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, image, gender, species, blood_status } = character.attributes;
  const titleWords = name.split(' ');

  return (
    <div className={styles['card-container']}>
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
        <div>Gender: {gender ?? 'unknown'} </div>
        <div>Species: {species ?? 'unknown'}</div>
        <div>Blood Status: {blood_status ?? 'unknown'}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
