import { FC, useContext } from 'react';

import { CARDS_AMOUNT as buttons } from '../../constants/constants';
import { getCharacters } from '../../api';
import { DataContext } from '../../../App/DataProvider/DataProvider';

type NumbersOfCardsButtonsProps = {
  changeNumberOfCards: (number: number) => void;
};

const NumbersOfCardsButtons: FC<NumbersOfCardsButtonsProps> = ({
  changeNumberOfCards,
}) => {
  const context = useContext(DataContext);

  const handleClick = async (size: number) => {
    await getCharacters(context?.request as string, 1, size);
    changeNumberOfCards(size);
  };

  return (
    <>
      Cards amount
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => {
            handleClick(btn);
          }}
        >
          {btn}
        </button>
      ))}
    </>
  );
};

export default NumbersOfCardsButtons;
