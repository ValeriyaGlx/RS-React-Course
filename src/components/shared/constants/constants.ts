import { IInputValidation } from '../../../types/types';

export const INPUT_TYPES: IInputValidation[] = [
  {
    type: 'text',
    placeholder: 'Enter Name',
    inputName: 'name',
  },
  {
    type: 'text',
    placeholder: 'Enter Email',
    inputName: 'email',
  },
  {
    type: 'password',
    placeholder: 'Enter Password',
    inputName: 'password',
  },
  {
    type: 'password',
    placeholder: 'Confirm Password',
    inputName: 'confirmPassword',
  },
  {
    type: 'number',
    placeholder: 'Enter Age',
    inputName: 'age',
    min: 1,
  },
];

export const GENDER_TYPE = ['Male', 'Female'];

export const NON_TEXT_INPUT_NAME = ['gender', 'accept', 'image', 'country'];

export const MAX_IMAGE_SIZE = 0.5 * 1024 * 1024;
