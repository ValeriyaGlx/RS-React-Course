import { ChangeEvent, FC } from 'react';

import { GENDER_TYPE } from '../../constants/constants';

import styles from './GenderFieldset.module.css';

type GenderFieldsetProps = {
  onGenderChange: (value: string) => void;
};

const GenderFieldset: FC<GenderFieldsetProps> = ({ onGenderChange }) => {
  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    onGenderChange(event.target.defaultValue);
  };
  return (
    <div className={styles.container}>
      <fieldset>
        <legend>Gender</legend>
        {GENDER_TYPE.map((gender) => (
          <label key={gender} htmlFor={gender} className={styles.label}>
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
      <div className={styles.error}>error message</div>
    </div>
  );
};

export default GenderFieldset;
