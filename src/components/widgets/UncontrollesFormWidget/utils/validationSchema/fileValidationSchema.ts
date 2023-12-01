import * as yup from 'yup';

const fileValidationSchema = yup
  .mixed()
  .required('Image is required')
  .test(
    'Max file size',
    'Image must be less then 1 Mb',
    (value) => (value as FileList)[0].size < 1024 * 1024
  )
  .test(
    'Image extension',
    'Only images jpeg and png images are allowed',
    (value) => {
      const extension = (value as FileList)[0].name.slice(
        (value as FileList)[0].name.lastIndexOf('.')
      );
      return ['.jpeg', '.jpg', 'png'].includes(extension);
    }
  );

export default fileValidationSchema;
