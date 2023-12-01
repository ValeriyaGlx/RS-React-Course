import * as yup from 'yup';

const passwordValidationSchema: yup.StringSchema = yup
  .string()
  .required('Password is required')
  .matches(/^\S*$/, 'This field must not contain spaces')
  .matches(
    /[^A-Za-z0-9]/,
    'Password must contain at least one special character'
  )
  .min(8, 'Password must be at least 8 characters')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number');

export default passwordValidationSchema;
