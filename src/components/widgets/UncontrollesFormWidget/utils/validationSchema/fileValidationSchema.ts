import * as yup from 'yup';

import { MAX_IMAGE_SIZE } from '../../../../shared/constants/constants';

type ImageInfoType = {
  imageInfo: { size: number; name: string };
  base64: string | undefined;
};

const fileValidationSchema = yup
  .mixed<ImageInfoType>()
  .test('Image data', 'Image is required', (value) => {
    return !!(value as ImageInfoType).imageInfo;
  })
  .test('Max file size', 'Image must be less than 500 KB', (value) => {
    const { size } = (value as ImageInfoType).imageInfo;
    return size <= MAX_IMAGE_SIZE;
  })
  .test(
    'Image extension',
    'Only images jpeg and png images are allowed',
    (value) => {
      const extension = (value as ImageInfoType).imageInfo.name.slice(
        (value as ImageInfoType).imageInfo.name.lastIndexOf('.')
      );
      return ['.jpeg', '.jpg', '.png'].includes(extension);
    }
  );

export default fileValidationSchema;
