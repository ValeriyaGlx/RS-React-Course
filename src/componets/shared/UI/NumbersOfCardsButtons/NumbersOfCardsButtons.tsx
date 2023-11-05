import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CARDS_AMOUNT as buttons } from '../../constants/constants';

import styles from './NumbersOfCardsButtons.module.css';

type NumbersOfCardsButtonsProps = {
  changeNumberOfCards: (number: number) => void;
};

const NumbersOfCardsButtons: FC<NumbersOfCardsButtonsProps> = ({
  changeNumberOfCards,
}) => {
  const navigate = useNavigate();

  const handleClick = (size: number) => {
    changeNumberOfCards(size);
    navigate(`/`);
  };

  return (
    <div>
      Cards amount
      {buttons.map((btn) => (
        <button
          className={styles.button}
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
