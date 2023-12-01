import * as yup from 'yup';

import COUNTRIES_LIST from '../../../../shared/constants/countries';

const countryValidationSchema: yup.StringSchema = yup
  .string()
  .required('Choose country from the list')
  .oneOf(COUNTRIES_LIST, 'Choose country from the list');

export default countryValidationSchema;
