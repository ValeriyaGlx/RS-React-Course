import { Component } from 'react';
import { IResponse } from '../../types/types';
import styles from './CharacterCard.module.css';
import Spinner from '../Spinner/Spinner';

type CharacterCardProps = {
  character: IResponse;
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

  render() {
    const { isImageLoaded } = this.state;
    const { character } = this.props;
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
          <h4>{character.name}</h4>
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
