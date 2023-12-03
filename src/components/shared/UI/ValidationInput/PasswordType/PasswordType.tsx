import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';

import eye from '../../../../../assets/icons/eye-icon.svg';
import closeEye from '../../../../../assets/icons/eye-closed-icon.svg';

import styles from './PasswordType.module.css';

type PasswordTypeType = {
  setPasswordType: Dispatch<SetStateAction<string>>;
};

const PasswordType: FC<PasswordTypeType> = ({ setPasswordType }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (e: FormEvent) => {
    e.preventDefault();
    setIsVisible(!isVisible);
    setPasswordType((prevType) =>
      prevType === 'password' ? 'text' : 'password'
    );
  };
  return (
    <button className={styles.visibility} onClick={toggleVisibility}>
      <img className={styles.eye} src={isVisible ? eye : closeEye} alt="eye" />
    </button>
  );
};

export default PasswordType;
