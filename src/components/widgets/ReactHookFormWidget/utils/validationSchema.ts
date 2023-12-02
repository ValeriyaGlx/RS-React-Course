import * as yup from 'yup';

import {
  ageValidationSchema,
  // countryValidationSchema,
  emailValidationSchema,
  nameValidationSchema,
  passwordValidationSchema,
} from '../../UncontrollesFormWidget/utils/validationSchema';

const validationSchema = yup.object({
  name: nameValidationSchema,
  email: emailValidationSchema,
  password: passwordValidationSchema.fields.password as yup.StringSchema,
  confirmPassword: passwordValidationSchema.fields
    .confirmPassword as yup.StringSchema,
  age: ageValidationSchema,
  // country: countryValidationSchema,
  // image: fileValidationSchema,
});

// emptyFieldValidationSchema

export default validationSchema;
