import { filledForm, FormState } from '../../../../types/types';

const createFillForm = (form: FormState) => {
  const newForm: filledForm = Object.keys(form).reduce(
    (result: filledForm, key) => {
      result[key] = form[key].value;
      return result;
    },
    {} as filledForm
  );
  return newForm;
};

export default createFillForm;
