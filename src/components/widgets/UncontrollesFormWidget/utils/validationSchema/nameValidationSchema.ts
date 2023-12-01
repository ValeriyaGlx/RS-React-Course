import * as yup from 'yup';

const nameValidationSchema = yup
  .string()
  .matches(/^[A-Z][a-z]*$/, 'Name should start with an uppercase letter')
  .required('Name is required');

export default nameValidationSchema;
