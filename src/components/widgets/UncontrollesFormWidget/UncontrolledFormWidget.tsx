import { FormEvent, useRef } from 'react';

import { INPUT_TYPES } from '../../shared/constants/constants';
import InputValidation from '../../shared/UI/ValidationInput/ValidationInput';
import GenderFieldset from '../../shared/UI/GenderFieldset/GenderFieldset';
import AcceptInput from '../../shared/UI/AccetpInput/AcceptInput';
import ImageUpload from '../../shared/UI/ImageUpload/ImageUpload';

import styles from './UncontrolledFormWidget.module.css';

const UncontrolledFormWidget = () => {
  const inputRefs = INPUT_TYPES.map(() =>
    useRef<HTMLInputElement | null>(null)
  );
  const genderFieldsetRef = useRef<string | null>(null);

  // const acceptInputRef = useRef<HTMLInputElement | null>(null);
  // const imageUploadRef = useRef<HTMLInputElement | null>(null);

  const onGenderChange = (value: string) => {
    genderFieldsetRef.current = value;
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    const inputValues = inputRefs.map((ref) => ref.current?.value || '');
    const genderValue = genderFieldsetRef.current;
    console.log([...inputValues, genderValue]);
  };

  return (
    <form className={styles.form}>
      {INPUT_TYPES.map(({ type, inputName, placeholder }, index) => (
        <InputValidation
          key={placeholder}
          errorMessage=""
          type={type}
          placeholder={placeholder}
          inputName={inputName}
          inputRef={inputRefs[index]}
        />
      ))}
      <GenderFieldset onGenderChange={onGenderChange} />
      <AcceptInput />
      <ImageUpload />
      <input type="submit" value="submit" onSubmit={handleClick} />
    </form>
  );
};

export default UncontrolledFormWidget;
