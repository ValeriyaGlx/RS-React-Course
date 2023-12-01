import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormState = {
  [key: string]: {
    value: string | boolean;
    validationError: string;
  };
};

const initialState: FormState = {
  name: {
    value: '',
    validationError: '',
  },
  age: {
    value: '',
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
    value: '',
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
        inputValue: string | boolean;
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
