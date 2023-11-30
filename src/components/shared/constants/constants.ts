import { IInputValidation } from '../../../types/types';

export const INPUT_TYPES: IInputValidation[] = [
  {
    type: 'text',
    placeholder: 'Enter Name',
    inputName: 'name',
  },
  {
    type: 'number',
    placeholder: 'Enter Age',
    inputName: 'age',
    min: 1,
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
    inputName: 'password',
  },
];

export const GENDER_TYPE = ['Male', 'Female'];
