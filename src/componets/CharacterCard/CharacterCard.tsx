import { Component } from 'react';
import { IResponse } from '../../types/types';
import styles from './CharacterCard.module.css';

type CharacterCardProps = {
  character: IResponse;
};

class CharacterCard extends Component<CharacterCardProps> {
  render() {
    const { character } = this.props;
    return (
      <div className={styles['card-container']}>
        <img
          className={styles['card-image']}
          src={character.image}
          alt="character"
        />
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
