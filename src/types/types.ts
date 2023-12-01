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

export type FormState = {
  [key: string]: {
    value: string | boolean | number | ImageInfoType;
    validationError: string | null;
  };
};

export type fillFormState = {
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  country: string;
  image: ImageInfoType;
};
