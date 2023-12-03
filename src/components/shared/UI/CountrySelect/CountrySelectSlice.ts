import { createSlice } from '@reduxjs/toolkit';

import COUNTRIES_LIST from '../../constants/countries';

const initialState = COUNTRIES_LIST;

const CountrySelectSlice = createSlice({
  name: 'CountrySelectSlice',
  initialState,
  reducers: {},
});

export default CountrySelectSlice.reducer;
