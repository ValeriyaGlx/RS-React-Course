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
  age: string | number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  accept: boolean;
  country: string;
  image: ImageInfoType | string;
};

export interface FormData {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  confirmPassword?: string | undefined;
  age?: number | undefined;
  gender?: string | undefined;
  country?: string | undefined;
  accept?: boolean | undefined;
  image?: FileList | undefined;
}

export type filledForm = {
  [key: string]: string | number | boolean | ImageInfoType;
};
