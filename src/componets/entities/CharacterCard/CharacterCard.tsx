import { FC, Fragment, useState } from 'react';

import Spinner from '../../shared/UI/Spinner/Spinner';
import { IResponse } from '../../../types/types';
import stringMatching from '../../shared/lib/stringMatching';

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

  const titleWords = character.name.split(' ');

  return (
    <div className={styles['card-container']}>
      <div className={styles['image-container']}>
        {!isImageLoaded && <Spinner />}
        <img
          className={styles['card-image']}
          src={character.image}
          alt="character"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <div className={styles['card-info']}>
        <h4>{titleWords.map((word) => isMatchColor(word, request))}</h4>
        <div>Status: {character.status}</div>
        <div>Gender: {character.gender}</div>
        <div>Species: {character.species}</div>
        <div>Location: {character.location.name}</div>
      </div>
    </div>
  );
};

export default CharacterCard;
