import { FC, MutableRefObject, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IInputValidation, FormData } from '../../../../types/types';

import styles from './ValidationInput.module.css';
import PasswordType from './PasswordType/PasswordType';

interface InputValidationProps extends IInputValidation {
  inputRef: MutableRefObject<HTMLInputElement | null> | null;
  errorMessage: string | undefined | null;
  register: UseFormRegister<FormData> | null;
}

const ValidationInput: FC<InputValidationProps> = ({
  type,
  placeholder,
  inputName,
  min,
  inputRef,
  errorMessage,
  register,
}) => {
  const [passwordType, setPasswordType] = useState('password');

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
          {...(register ? { ...register(inputName as keyof FormData) } : '')}
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
