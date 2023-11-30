import { ChangeEvent, FC } from 'react';

import { GENDER_TYPE } from '../../constants/constants';

type GenderFieldsetProps = {
  onGenderChange: (value: string) => void;
};

const GenderFieldset: FC<GenderFieldsetProps> = ({ onGenderChange }) => {
  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    onGenderChange(event.target.defaultValue);
  };
  return (
    <fieldset>
      <legend>Gender</legend>
      {GENDER_TYPE.map((gender) => (
        <label key={gender} htmlFor={gender}>
          <input
            type="radio"
            id={gender}
            name="gender"
            defaultValue={gender}
            onChange={handleGenderChange}
          />
          {gender}
        </label>
      ))}
    </fieldset>
  );
};

export default GenderFieldset;
