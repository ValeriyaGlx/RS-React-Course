import * as yup from 'yup';

const nameValidationSchema = yup
  .string()
  .required('Name is required')
  .matches(/^[A-Z][a-zA-Z\s]*$/, 'Name should start with an uppercase letter');

export default nameValidationSchema;
