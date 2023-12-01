import { ChangeEvent, FC, useState } from 'react';

import { useAppSelector } from '../../../App/store/hooks';

import styles from './ImageUpload.module.css';

type ImageUploadProps = {
  onFileChange: (base64: string | null) => void;
};

const ImageUpload: FC<ImageUploadProps> = ({ onFileChange }) => {
  const [selectedFileName, setSelectedFileName] = useState('');

  const errorMessage = useAppSelector(
    (state) => state.uncontrolledFormWidgetReducer.image.validationError
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFile = files && files.length > 0 ? files[0] : null;

    if (selectedFile) {
      setSelectedFileName(selectedFile.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        onFileChange(base64);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setSelectedFileName('');
      onFileChange(null);
    }
  };

  return (
    <div className={styles.fileInputContainer}>
      <input
        className={styles.fileInput}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        id="fileInput"
      />
      <label htmlFor="fileInput" className={styles.fileInputLabel}>
        {selectedFileName || 'Choose a file'}
      </label>
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default ImageUpload;
