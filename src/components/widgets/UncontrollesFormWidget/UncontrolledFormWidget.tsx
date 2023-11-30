import { ChangeEvent, FormEvent, useRef } from 'react';

import { INPUT_TYPES } from '../../shared/constants/constants';
import InputValidation from '../../shared/UI/ValidationInput/ValidationInput';
import GenderFieldset from '../../shared/UI/GenderFieldset/GenderFieldset';
import AcceptInput from '../../shared/UI/AccetpInput/AcceptInput';
import ImageUpload from '../../shared/UI/ImageUpload/ImageUpload';
import AutocompleteCountry from '../../shared/UI/CountrySelect/CountrySelect';

import styles from './UncontrolledFormWidget.module.css';

const UncontrolledFormWidget = () => {
  const inputRefs = INPUT_TYPES.map(() =>
    useRef<HTMLInputElement | null>(null)
  );
  const genderFieldsetRef = useRef<string | null>(null);
  const acceptInputRef = useRef<boolean | null>(null);
  const imageUploadRef = useRef<File | null>(null);

  const onGenderChange = (value: string) => {
    genderFieldsetRef.current = value;
  };

  const handleAcceptChange = (event: ChangeEvent<HTMLInputElement>) => {
    acceptInputRef.current = event.target.checked;
  };

  const onFileChange = (file: File | null) => {
    imageUploadRef.current = file;
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    const inputValues = inputRefs.map((ref) => ref.current?.value || '');
    const genderValue = genderFieldsetRef.current;
    const acceptValue = acceptInputRef.current;
    const imageValue = imageUploadRef.current;
    console.log([...inputValues, genderValue, acceptValue, imageValue]);
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
      <AcceptInput handleAcceptChange={handleAcceptChange} />
      <ImageUpload onFileChange={onFileChange} />
      <AutocompleteCountry />
      <input type="reset" value="reset" />
      <input type="submit" value="submit" onClick={handleClick} />
    </form>
  );
};

export default UncontrolledFormWidget;
