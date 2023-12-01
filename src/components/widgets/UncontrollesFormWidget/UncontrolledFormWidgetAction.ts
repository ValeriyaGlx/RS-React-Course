import * as yup from 'yup';
import { Action, ThunkAction } from '@reduxjs/toolkit';

import { store } from '../../App/store/store';

import {
  clearInputValidationError,
  setInputValidationError,
  setInputValue,
} from './UncontrolledFormWidgetSlice';
import {
  emailValidationSchema,
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

type InputNameType =
  | 'name'
  | 'age'
  | 'email'
  | 'password'
  | 'gender'
  | 'accept'
  | 'image'
  | 'country';

const setInputValueWithValidation = (
  inputName: InputNameType,
  inputValue: string
): AppThunk => {
  return (dispatch) => {
    dispatch(setInputValue({ inputName, inputValue }));

    let validationSchema: yup.StringSchema | yup.DateSchema;

    switch (inputName) {
      case 'email':
        validationSchema = emailValidationSchema;
        break;
      case 'password':
        validationSchema = passwordValidationSchema;
        break;
      default:
        validationSchema = emptyFieldValidationSchema;
    }

    try {
      validationSchema.validateSync(inputValue);
      dispatch(clearInputValidationError({ inputName }));
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        dispatch(
          setInputValidationError({ inputName, validationError: error.message })
        );
      }
    }
  };
};

export default setInputValueWithValidation;
