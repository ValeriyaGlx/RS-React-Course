import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormState, ImageInfoType } from '../../../types/types';

const initialState: FormState = {
  name: {
    value: '',
    validationError: null,
  },
  age: {
    value: NaN,
    validationError: null,
  },
  email: {
    value: '',
    validationError: null,
  },
  password: {
    value: '',
    validationError: null,
  },
  confirmPassword: {
    value: '',
    validationError: null,
  },
  gender: {
    value: '',
    validationError: null,
  },
  accept: {
    value: '',
    validationError: null,
  },
  image: {
    value: {
      imageInfo: {
        size: 0,
        name: '',
      },
      base64: '',
    },
    validationError: null,
  },
  country: {
    value: '',
    validationError: null,
  },
};

const UncontrolledFormWidgetSlice = createSlice({
  name: 'UncontrolledFormWidgetSlice',
  initialState,
  reducers: {
    setInputValue: (
      state,
      action: PayloadAction<{
        inputName: string;
        inputValue: string | boolean | ImageInfoType;
      }>
    ) => {
      const { inputName, inputValue } = action.payload;
      state[inputName].value = inputValue;
    },
    setInputValidationError: (
      state,
      action: PayloadAction<{
        inputName: string;
        validationError: string;
      }>
    ) => {
      const { inputName, validationError } = action.payload;
      state[inputName].validationError = validationError;
    },
    clearInputValidationError: (
      state,
      action: PayloadAction<{ inputName: string }>
    ) => {
      const { inputName } = action.payload;
      state[inputName].validationError = '';
    },
    resetState: () => initialState,
  },
});

export const {
  setInputValue,
  setInputValidationError,
  clearInputValidationError,
  resetState,
} = UncontrolledFormWidgetSlice.actions;

export default UncontrolledFormWidgetSlice.reducer;
