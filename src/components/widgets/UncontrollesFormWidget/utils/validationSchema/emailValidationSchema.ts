import * as yup from 'yup';

const emailValidationSchema = yup
  .string()
  .required('Email is required')
  .matches(/^\S*$/, 'Email must be valid (example@mail.com)')
  .test('email-tld', 'Email must be valid (example@mail.com)', (value) => {
    if (!value) {
      return false;
    }
    const parts = value.split('@');
    if (parts.length !== 2) {
      return false;
    }

    const domain = parts[1].trim();
    const domainParts = domain.split('.');

    return (
      domainParts.length >= 2 && domainParts.every((part) => part.trim() !== '')
    );
  });

export default emailValidationSchema;
