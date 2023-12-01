import { ChangeEvent, FormEvent, useRef } from 'react';

import {
  INPUT_TYPES,
  NON_TEXT_INPUT_NAME,
} from '../../shared/constants/constants';
import InputValidation from '../../shared/UI/ValidationInput/ValidationInput';
import GenderFieldset from '../../shared/UI/GenderFieldset/GenderFieldset';
import AcceptInput from '../../shared/UI/AccetpInput/AcceptInput';
import ImageUpload from '../../shared/UI/ImageUpload/ImageUpload';
import AutocompleteCountry from '../../shared/UI/CountrySelect/CountrySelect';
import { useAppDispatch } from '../../App/store/hooks';

import styles from './UncontrolledFormWidget.module.css';
import setInputValueWithValidation from './UncontrolledFormWidgetAction';

const UncontrolledFormWidget = () => {
  const inputRefs = INPUT_TYPES.map(() =>
    useRef<HTMLInputElement | null>(null)
  );
  const genderFieldsetRef = useRef<string | null>(null);
  const acceptInputRef = useRef<boolean | null>(null);
  const imageUploadRef = useRef<string | null>(null);

  const dispatch = useAppDispatch();

  const onGenderChange = (value: string) => {
    genderFieldsetRef.current = value;
  };

  const handleAcceptChange = (event: ChangeEvent<HTMLInputElement>) => {
    acceptInputRef.current = event.target.checked;
  };

  const onFileChange = (base64: string | null) => {
    imageUploadRef.current = base64;
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();

    const nonTextInputRefs = [
      genderFieldsetRef.current,
      acceptInputRef.current,
      imageUploadRef.current,
    ];

    const textInputValues = inputRefs.map((ref, index) => ({
      inputName: INPUT_TYPES[index].inputName,
      inputValue: ref.current?.value || '',
    }));

    const nonTextInputValues = nonTextInputRefs.map((ref, index) => ({
      inputName: NON_TEXT_INPUT_NAME[index],
      inputValue: ref || '',
    }));

    textInputValues.forEach((value) => {
      dispatch(setInputValueWithValidation(value.inputName, value.inputValue));
    });
    nonTextInputValues.forEach((value) => {
      dispatch(setInputValueWithValidation(value.inputName, value.inputValue));
    });
  };

  return (
    <form className={styles.form}>
      {INPUT_TYPES.map(({ type, inputName, placeholder }, index) => (
        <InputValidation
          key={placeholder}
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
