import * as yup from 'yup';

import { MAX_IMAGE_SIZE } from '../../../shared/constants/constants';

export const fileHookFormValidationSchema = yup
  .mixed<FileList>()
  .test(
    'File presence',
    'Image is required',
    (value) => !!(value as FileList)[0]
  )
  .test(
    'Max file size',
    'Image must be less than 500 KB',
    (value) => value && (value as FileList)[0]?.size < MAX_IMAGE_SIZE
  )
  .test(
    'Image extension',
    'Only images jpeg and png images are allowed',
    (value) => {
      if (value) {
        const extension = (value as FileList)[0]?.name.slice(
          (value as FileList)[0].name.lastIndexOf('.')
        );
        return ['.jpeg', '.jpg', '.png'].includes(extension);
      }
      return false;
    }
  );

export const acceptHookFormValidationSchema = yup
  .boolean()
  .oneOf([true], 'This field is required')
  .required('This field is required');
