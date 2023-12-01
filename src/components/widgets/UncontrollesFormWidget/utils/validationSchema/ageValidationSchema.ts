import * as yup from 'yup';

const ageValidationSchema = yup
  .number()
  .positive('Age should be a positive number')
  .required('Age is required');

export default ageValidationSchema;
