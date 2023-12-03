import { ChangeEvent, FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { GENDER_TYPE } from '../../constants/constants';
import { FormData } from '../../../../types/types';

import styles from './GenderFieldset.module.css';

type GenderFieldsetProps = {
  errorMessage: string | undefined | null;
  onGenderChange: null | ((value: string) => void);
  register: UseFormRegister<FormData> | null;
};

const GenderFieldset: FC<GenderFieldsetProps> = ({
  onGenderChange,
  register,
  errorMessage,
}) => {
  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onGenderChange) {
      onGenderChange(event.target.defaultValue);
    }
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
              {...(register ? { ...register('gender' as keyof FormData) } : '')}
            />
            {gender}
          </label>
        ))}
      </fieldset>
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default GenderFieldset;
