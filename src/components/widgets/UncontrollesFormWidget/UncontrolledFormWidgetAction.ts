import * as yup from 'yup';
import { Action, ThunkAction } from '@reduxjs/toolkit';

import { store } from '../../App/store/store';
import { ImageInfoType } from '../../../types/types';

import {
  clearInputValidationError,
  setInputValidationError,
  setInputValue,
} from './UncontrolledFormWidgetSlice';
import {
  ageValidationSchema,
  countryValidationSchema,
  emailValidationSchema,
  fileValidationSchema,
  nameValidationSchema,
  passwordValidationSchema,
} from './utils/validationSchema';
import emptyFieldValidationSchema from './utils/validationSchema/requiredValidationSchema';

type RootState = ReturnType<typeof store.getState>;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const setInputValueWithValidation = (
  inputName: string,
  inputValue: string | boolean | ImageInfoType
): AppThunk => {
  return (dispatch) => {
    dispatch(setInputValue({ inputName, inputValue }));

    let validationSchema: yup.StringSchema | yup.NumberSchema | yup.MixedSchema;

    switch (inputName) {
      case 'name':
        validationSchema = nameValidationSchema;
        break;
      case 'email':
        validationSchema = emailValidationSchema;
        break;
      case 'password':
        validationSchema = passwordValidationSchema.fields
          .password as yup.StringSchema;
        break;
      case 'age':
        validationSchema = ageValidationSchema;
        break;
      case 'country':
        validationSchema = countryValidationSchema;
        break;
      case 'image':
        validationSchema = fileValidationSchema;
        break;
      default:
        validationSchema = emptyFieldValidationSchema;
    }
    if (inputName !== 'confirmPassword') {
      try {
        validationSchema.validateSync(inputValue);
        dispatch(clearInputValidationError({ inputName }));
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          dispatch(
            setInputValidationError({
              inputName,
              validationError: error.message,
            })
          );
        }
      }
    } else {
      const data = {
        password: store.getState().uncontrolledFormWidgetReducer.password.value,
        confirmPassword:
          store.getState().uncontrolledFormWidgetReducer.confirmPassword.value,
      };
      try {
        passwordValidationSchema.validateSync(data);
        dispatch(clearInputValidationError({ inputName }));
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          dispatch(
            setInputValidationError({
              inputName,
              validationError: error.message,
            })
          );
        }
      }
    }
  };
};

export default setInputValueWithValidation;
