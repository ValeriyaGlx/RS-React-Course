import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CARDS_AMOUNT as buttons } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../../App/store/hooks';
import { setValue } from '../../../features/SearchSection/searchSectionSlice';

import styles from './NumbersOfCardsButtons.module.css';

type NumbersOfCardsButtonsProps = {
  changeNumberOfCards: (number: number) => void;
};

const NumbersOfCardsButtons: FC<NumbersOfCardsButtonsProps> = ({
  changeNumberOfCards,
}) => {
  const { size } = useAppSelector((state) => state.searchReducer);
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState(size);
  const dispatch = useAppDispatch();

  const handleClick = (numberOfCards: number) => {
    changeNumberOfCards(numberOfCards);
    setActiveButton(numberOfCards);
    navigate(`/`);
    dispatch(setValue({ key: 'size', value: numberOfCards }));
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
