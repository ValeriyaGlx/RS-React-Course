import { FC, MutableRefObject } from 'react';

import { IInputValidation } from '../../../../types/types';

import styles from './ValidationInput.module.css';

interface InputValidationProps extends IInputValidation {
  // errorMessage: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

const ValidationInput: FC<InputValidationProps> = ({
  type,
  placeholder,
  // showPassword,
  // errorMessage,
  inputName,
  min,
  inputRef,
}) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={[styles.container, type === 'number' ? styles.age : ''].join(
        ' '
      )}
    >
      <div>
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          name={inputName}
          defaultValue=""
          min={type === 'number' ? min : undefined}
          ref={inputRef}
        />
        {/* {type === 'password' && ( */}
        {/*  <button */}
        {/*    className={ */}
        {/*      isVisible ? 'show-password' : 'show-password hide-password' */}
        {/*    } */}
        {/*    onClick={(e) => { */}
        {/*      if (showPassword) { */}
        {/*        setIsVisible(!isVisible); */}
        {/*        showPassword(e); */}
        {/*      } */}
        {/*    }} */}
        {/*  > */}
        {/*    <img className={'password-visible'} src={logoVisible} alt="eye" /> */}
        {/*  </button> */}
        {/* )} */}
      </div>
      <div className={styles.error}>error message</div>
    </div>
  );
};

export default ValidationInput;
