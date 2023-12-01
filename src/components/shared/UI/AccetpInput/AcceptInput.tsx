import { ChangeEvent, FC } from 'react';

import { useAppSelector } from '../../../App/store/hooks';

import styles from './AcceptInput.module.css';

type AcceptInputType = {
  handleAcceptChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const AcceptInput: FC<AcceptInputType> = ({ handleAcceptChange }) => {
  const errorMessage = useAppSelector(
    (state) => state.uncontrolledFormWidgetReducer.accept.validationError
  );
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
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default AcceptInput;
