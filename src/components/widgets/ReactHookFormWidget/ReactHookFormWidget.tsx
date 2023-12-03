import { useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { INPUT_TYPES } from '../../shared/constants/constants';
import ValidationInput from '../../shared/UI/ValidationInput/ValidationInput';
import GenderFieldset from '../../shared/UI/GenderFieldset/GenderFieldset';
import AcceptInput from '../../shared/UI/AccetpInput/AcceptInput';
import { fillFormState, FormData } from '../../../types/types';
import CountryDataList from '../../shared/UI/CountryDataList/CountryDataList';
import { useAppDispatch } from '../../App/store/hooks';
import { setForm } from '../../pages/MainPage/MainPageSlice';

import validationSchema from './utils/validationSchema';
import styles from './ReactHookFormWidget.module.css';

const ReactHookFormWidget = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedFileName, setSelectedFileName] = useState('');
  const [uploadedImage, setUploadedImage] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFile = files && files.length > 0 ? files[0] : null;

    if (selectedFile) {
      setSelectedFileName(selectedFile.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setUploadedImage(base64);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setSelectedFileName('');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const onSubmit = (data: FormData | fillFormState) => {
    const fillForm = {
      name: data.name,
      age: data.age,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      gender: data.gender,
      country: data.country,
      accept: data.accept,
      image: uploadedImage,
    };

    dispatch(
      setForm({
        formName: 'filledForms',
        newForm: fillForm as fillFormState,
      })
    );
    reset();
    navigate('/');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {INPUT_TYPES.map(({ type, inputName, placeholder }) => (
        <ValidationInput
          key={placeholder}
          inputRef={null}
          errorMessage={errors[inputName as keyof FormData]?.message}
          register={register as UseFormRegister<FormData>}
          type={type}
          placeholder={placeholder}
          inputName={inputName}
          password={getValues('password')}
        />
      ))}
      <GenderFieldset
        onGenderChange={null}
        register={register as UseFormRegister<FormData>}
        errorMessage={errors.gender?.message}
      />
      <AcceptInput
        handleAcceptChange={null}
        errorMessage={errors.accept?.message}
        register={register as UseFormRegister<FormData>}
      />
      <div className={styles.fileInputContainer}>
        <input
          {...register('image')}
          className={styles.fileInput}
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          id="fileInput"
        />
        <label htmlFor="fileInput" className={styles.fileInputLabel}>
          {selectedFileName || 'Choose a file'}
        </label>
        <div className={styles.error}>{errors.image?.message}</div>
      </div>
      <div className={[styles.container, 'country'].join(' ')}>
        <input
          {...register('country')}
          placeholder="Enter Country"
          className={styles.input}
          type="text"
          id="country"
          list="countryList"
        />
        <div className={styles.error}>{errors.country?.message}</div>
        <CountryDataList />
      </div>
      <input
        className={styles.button}
        type="submit"
        value="submit"
        disabled={!isValid}
      />
    </form>
  );
};

export default ReactHookFormWidget;
