import * as yup from 'yup';

const ageValidationSchema = yup
  .number()
  .transform((originalValue) => {
    const value = Number(originalValue);
    return Number.isNaN(value) ? null : value;
  })
  .nullable()
  .required('Age is required')
  .positive('Age should be a positive number');

export default ageValidationSchema;
