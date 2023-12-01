import { FC, MutableRefObject, useState } from 'react';

import { IInputValidation } from '../../../../types/types';
import { useAppSelector } from '../../../App/store/hooks';

import styles from './ValidationInput.module.css';
import PasswordType from './PasswordType/PasswordType';

interface InputValidationProps extends IInputValidation {
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

const ValidationInput: FC<InputValidationProps> = ({
  type,
  placeholder,
  inputName,
  min,
  inputRef,
}) => {
  const [passwordType, setPasswordType] = useState('password');
  const errorMessage = useAppSelector(
    (state) => state.uncontrolledFormWidgetReducer[inputName].validationError
  );

  return (
    <div
      className={[styles.container, type === 'number' ? styles.age : ''].join(
        ' '
      )}
    >
      <div>
        <input
          className={styles.input}
          type={type === 'password' ? passwordType : type}
          placeholder={placeholder}
          name={inputName}
          defaultValue=""
          min={type === 'number' ? min : undefined}
          ref={inputRef}
        />
        {type === 'password' && (
          <PasswordType setPasswordType={setPasswordType} />
        )}
      </div>
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default ValidationInput;
