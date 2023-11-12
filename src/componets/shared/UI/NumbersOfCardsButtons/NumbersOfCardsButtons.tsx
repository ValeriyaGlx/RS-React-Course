import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CARDS_AMOUNT as buttons } from '../../constants/constants';
import { DataContext } from '../../../App/DataProvider/DataProvider';
import { DataContextType } from '../../../../types/types';

import styles from './NumbersOfCardsButtons.module.css';

type NumbersOfCardsButtonsProps = {
  changeNumberOfCards: (number: number) => void;
};

const NumbersOfCardsButtons: FC<NumbersOfCardsButtonsProps> = ({
  changeNumberOfCards,
}) => {
  const navigate = useNavigate();
  const context = useContext(DataContext);
  const { updateData, numberOfCards } = context as DataContextType;
  const [activeButton, setActiveButton] = useState(numberOfCards);

  const handleClick = (size: number) => {
    changeNumberOfCards(size);
    setActiveButton(size);
    navigate(`/`);
    updateData({ numberOfCards: size });
  };

  return (
    <div className={styles.container}>
      <div>Number Of Characters:</div>
      {buttons.map((btn) => (
        <button
          className={[
            styles.button,
            activeButton === btn ? styles.active : '',
          ].join(' ')}
          key={btn}
          onClick={() => {
            handleClick(btn);
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default NumbersOfCardsButtons;
