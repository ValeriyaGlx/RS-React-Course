import { FC, MutableRefObject } from 'react';

import { IInputValidation } from '../../../../types/types';

import styles from './ValidationInput.module.css';

interface InputValidationProps extends IInputValidation {
  errorMessage: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

const InputValidation: FC<InputValidationProps> = ({
  type,
  placeholder,
  // showPassword,
  errorMessage,
  inputName,
  min,
  inputRef,
}) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className="input-area">
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
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default InputValidation;
