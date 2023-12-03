import { ChangeEvent, FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormData } from '../../../../types/types';

import styles from './AcceptInput.module.css';

type AcceptInputType = {
  handleAcceptChange: null | ((event: ChangeEvent<HTMLInputElement>) => void);
  errorMessage: string | undefined | null;
  register: UseFormRegister<FormData> | null;
};

const AcceptInput: FC<AcceptInputType> = ({
  handleAcceptChange,
  errorMessage,
  register,
}) => {
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (handleAcceptChange) {
      handleAcceptChange(e);
    }
  };

  return (
    <div>
      <label htmlFor="accept" className={styles.label}>
        <input
          type="checkbox"
          name="accept"
          id="accept"
          onChange={onHandleChange}
          {...(register ? { ...register('accept' as keyof FormData) } : '')}
        />
        I accept the Terms and Conditions
      </label>
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default AcceptInput;
