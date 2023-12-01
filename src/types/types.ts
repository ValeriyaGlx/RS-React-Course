export interface IInputValidation {
  type: string;
  placeholder: string;
  inputName: string;
  min?: number;
}

export type ImageInfoType = {
  imageInfo: { size: number; name: string } | null;
  base64: string | null;
};
