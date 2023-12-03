import * as yup from 'yup';

const emptyFieldValidationSchema: yup.StringSchema = yup
  .string()
  .required('This field is required');

export default emptyFieldValidationSchema;
