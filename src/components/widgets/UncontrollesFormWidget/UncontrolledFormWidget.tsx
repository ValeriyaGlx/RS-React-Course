import { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  INPUT_TYPES,
  NON_TEXT_INPUT_NAME,
} from '../../shared/constants/constants';
import InputValidation from '../../shared/UI/ValidationInput/ValidationInput';
import GenderFieldset from '../../shared/UI/GenderFieldset/GenderFieldset';
import AcceptInput from '../../shared/UI/AccetpInput/AcceptInput';
import ImageUpload from '../../shared/UI/ImageUpload/ImageUpload';
import AutocompleteCountry from '../../shared/UI/CountrySelect/CountrySelect';
import { useAppDispatch, useAppSelector } from '../../App/store/hooks';
import { ImageInfoType } from '../../../types/types';
import { setForm } from '../../pages/MainPage/MainPageSlice';

import styles from './UncontrolledFormWidget.module.css';
import setInputValueWithValidation from './UncontrolledFormWidgetAction';
import createFillForm from './utils/createFillForm';
import { resetState } from './UncontrolledFormWidgetSlice';

const UncontrolledFormWidget = () => {
  const inputRefs = INPUT_TYPES.map(() =>
    useRef<HTMLInputElement | null>(null)
  );
  const genderFieldsetRef = useRef<string | null>(null);
  const acceptInputRef = useRef<boolean | null>(null);
  const imageUploadRef = useRef<ImageInfoType | null>({
    base64: null,
    imageInfo: null,
  });
  const countryInputRef = useRef<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const formState = useAppSelector(
    (state) => state.uncontrolledFormWidgetReducer
  );

  const onCountryChanged = (country: string) => {
    countryInputRef.current = country;
  };

  const onGenderChange = (value: string) => {
    genderFieldsetRef.current = value;
  };

  const handleAcceptChange = (event: ChangeEvent<HTMLInputElement>) => {
    acceptInputRef.current = event.target.checked;
  };

  const onFileChange = (
    base64: string | null,
    imageInfo: { size: number; name: string } | null
  ) => {
    imageUploadRef.current = { imageInfo, base64 };
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();

    const nonTextInputRefs = [
      genderFieldsetRef.current,
      acceptInputRef.current,
      imageUploadRef.current,
      countryInputRef.current,
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

  useEffect(() => {
    const validationErrors = Object.values(formState).reduce(
      (errors: Array<string | null>, field) => {
        return errors.concat(field.validationError);
      },
      []
    );
    const rightForm = validationErrors.every((el) => el === '');

    if (rightForm) {
      const fillForm = createFillForm(formState);
      dispatch(setForm({ formName: 'uncontrolledForms', newForm: fillForm }));
      navigate('/');
      dispatch(resetState());
    }
  }, [formState]);

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
      <AutocompleteCountry onCountryChanged={onCountryChanged} />
      <AcceptInput handleAcceptChange={handleAcceptChange} />
      <ImageUpload onFileChange={onFileChange} />
      {/* <input type="reset" value="reset" /> */}
      <input type="submit" value="submit" onClick={handleClick} />
    </form>
  );
};

export default UncontrolledFormWidget;
