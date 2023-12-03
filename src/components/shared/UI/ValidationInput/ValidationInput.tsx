import { FC, MutableRefObject, useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { IInputValidation, FormData } from '../../../../types/types';

import styles from './ValidationInput.module.css';
import PasswordType from './PasswordType/PasswordType';
import getPasswordStrength from './utils/getPasswordStreight';

interface InputValidationProps extends IInputValidation {
  inputRef: MutableRefObject<HTMLInputElement | null> | null;
  errorMessage: string | undefined | null;
  register: UseFormRegister<FormData> | null;
  password?: string;
}

const ValidationInput: FC<InputValidationProps> = ({
  type,
  placeholder,
  inputName,
  inputRef,
  errorMessage,
  register,
  password,
}) => {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordStrength, setPasswordStrength] = useState<string | undefined>(
    ''
  );

  useEffect(() => {
    const param = password || inputRef?.current?.value;
    const strength = getPasswordStrength(param);
    setPasswordStrength(strength);
  }, [errorMessage]);

  return (
    <div
      className={[styles.container, type === 'number' ? styles.age : ''].join(
        ' '
      )}
    >
      <div>
        <input
          className={
            inputName === 'password'
              ? [styles.input, styles[passwordStrength as string]].join(' ')
              : styles.input
          }
          type={type === 'password' ? passwordType : type}
          placeholder={placeholder}
          name={inputName}
          defaultValue=""
          ref={inputRef}
          {...(register ? { ...register(inputName as keyof FormData) } : '')}
        />
        {type === 'password' && (
          <PasswordType setPasswordType={setPasswordType} />
        )}
      </div>
      {inputName === 'password' && (
        <span
          className={[styles.strength, styles[passwordStrength as string]].join(
            ' '
          )}
        >
          {passwordStrength}
        </span>
      )}
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default ValidationInput;
