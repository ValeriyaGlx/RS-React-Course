import { ChangeEvent, FC, useState } from 'react';

import styles from './ImageUpload.module.css';

type ImageUploadProps = {
  onFileChange: (file: File | null) => void;
};

const ImageUpload: FC<ImageUploadProps> = ({ onFileChange }) => {
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFile = files && files.length > 0 ? files[0] : null;
    onFileChange(selectedFile);
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
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
      <div className={styles.error}>error message</div>
    </div>
  );
};

export default ImageUpload;
