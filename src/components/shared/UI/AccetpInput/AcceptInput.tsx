import { ChangeEvent, FC } from 'react';

import styles from './AcceptInput.module.css';

type AcceptInputType = {
  handleAcceptChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const AcceptInput: FC<AcceptInputType> = ({ handleAcceptChange }) => {
  return (
    <div>
      <label htmlFor="accept" className={styles.label}>
        <input
          type="checkbox"
          name="accept"
          id="accept"
          onChange={handleAcceptChange}
        />
        I accept the Terms and Conditions
      </label>
      <div className={styles.error}>error message</div>
    </div>
  );
};

export default AcceptInput;
