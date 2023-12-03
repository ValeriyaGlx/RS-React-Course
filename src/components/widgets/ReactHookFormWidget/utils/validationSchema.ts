import * as yup from 'yup';

import {
  ageValidationSchema,
  countryValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  passwordValidationSchema,
  requiredValidationSchema,
} from '../../UncontrollesFormWidget/utils/validationSchema';

import {
  acceptHookFormValidationSchema,
  fileHookFormValidationSchema,
} from './hookFormValidationSchema';

const validationSchema = yup.object({
  name: nameValidationSchema,
  email: emailValidationSchema,
  password: passwordValidationSchema.fields.password as yup.StringSchema,
  confirmPassword: passwordValidationSchema.fields
    .confirmPassword as yup.StringSchema,
  age: ageValidationSchema,
  gender: requiredValidationSchema,
  accept: acceptHookFormValidationSchema,
  country: countryValidationSchema,
  image: fileHookFormValidationSchema,
});

export default validationSchema;
