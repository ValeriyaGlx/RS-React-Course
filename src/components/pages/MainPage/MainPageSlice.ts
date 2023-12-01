import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fillFormState } from '../../../types/types';

type initialStateType = {
  [key: string]: fillFormState[];
};

const initialState: initialStateType = {
  uncontrolledForms: [],
  reactHookForms: [],
};

const MainPageSlice = createSlice({
  name: 'MainPageSlice',
  initialState,
  reducers: {
    setForm: (
      state,
      action: PayloadAction<{
        formName: string;
        newForm: fillFormState;
      }>
    ) => {
      const { formName, newForm } = action.payload;
      state[formName].push(newForm);
    },
  },
});

export const { setForm } = MainPageSlice.actions;

export default MainPageSlice.reducer;
