import { Component, Fragment } from 'react';

import Spinner from '../Spinner/Spinner';
import { IResponse } from '../../types/types';

import styles from './CharacterCard.module.css';

type CharacterCardProps = {
  character: IResponse;
  request: string;
};

type CharacterCardState = {
  isImageLoaded: boolean;
};

class CharacterCard extends Component<CharacterCardProps, CharacterCardState> {
  constructor(props: CharacterCardProps) {
    super(props);

    this.state = {
      isImageLoaded: false,
    };
  }

  handleImageLoad = () => {
    this.setState({ isImageLoaded: true });
  };

  isMatchColor = (word: string, search: string) => {
    const regex = new RegExp(search, 'i');
    const parts = word.split(regex);

    let newPart = '';

    if (!parts[0]) {
      newPart = search.charAt(0).toUpperCase() + search.slice(1);
    } else {
      newPart = search;
    }

    return parts.map((part, partIndex) => (
      <Fragment key={Math.random()}>
        {partIndex > 0 ? <span className={styles.search}>{newPart}</span> : ' '}
        {part}
      </Fragment>
    ));
  };

  render() {
    const { isImageLoaded } = this.state;
    const { character, request } = this.props;
    const titleWords = character.name.split(' ');

    return (
      <div className={styles['card-container']}>
        <div className={styles['image-container']}>
          {!isImageLoaded && <Spinner />}
          <img
            className={styles['card-image']}
            src={character.image}
            alt="character"
            onLoad={this.handleImageLoad}
          />
        </div>
        <div className={styles['card-info']}>
          <h4>{titleWords.map((word) => this.isMatchColor(word, request))}</h4>
          <div>Status: {character.status}</div>
          <div>Gender: {character.gender}</div>
          <div>Species: {character.species}</div>
          <div>Location: {character.location.name}</div>
        </div>
      </div>
    );
  }
}

export default CharacterCard;
