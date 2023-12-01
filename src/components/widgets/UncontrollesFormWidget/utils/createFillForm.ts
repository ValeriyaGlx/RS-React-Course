import { fillFormState, FormState } from '../../../../types/types';

const createFillForm = (form: FormState) => {
  const newForm: fillFormState = Object.keys(form).reduce(
    (result: fillFormState, key) => {
      result[key] = form[key].value;
      return result;
    },
    {}
  );
  return newForm;
};

export default createFillForm;
