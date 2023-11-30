const ImageUpload = () => {
  return (
    <div>
      <input type="file" accept="image/png, image/jpeg" />
      {/* {uploadedImage && <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '100%' }} />} */}
    </div>
  );
};

export default ImageUpload;
