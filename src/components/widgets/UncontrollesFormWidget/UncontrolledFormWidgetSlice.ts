import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ImageInfoType } from '../../../types/types';

type FormState = {
  [key: string]: {
    value: string | boolean | number | ImageInfoType;
    validationError: string;
  };
};

const initialState: FormState = {
  name: {
    value: '',
    validationError: '',
  },
  age: {
    value: NaN,
    validationError: '',
  },
  email: {
    value: '',
    validationError: '',
  },
  password: {
    value: '',
    validationError: '',
  },
  confirmPassword: {
    value: '',
    validationError: '',
  },
  gender: {
    value: '',
    validationError: '',
  },
  accept: {
    value: '',
    validationError: '',
  },
  image: {
    value: {
      imageInfo: {
        size: 0,
        name: '',
      },
      base64: '',
    },
    validationError: '',
  },
  country: {
    value: '',
    validationError: '',
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
      // TODO: was null
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
