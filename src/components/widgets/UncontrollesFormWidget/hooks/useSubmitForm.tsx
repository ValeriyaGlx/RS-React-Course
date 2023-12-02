import createFillForm from '../utils/createFillForm';
import { setForm } from '../../../pages/MainPage/MainPageSlice';
import { resetState } from '../UncontrolledFormWidgetSlice';
import { AppDispatch } from '../../../App/store/store';
import { FormState } from '../../../../types/types';

const useSubmitForm = (dispatch: AppDispatch, formState: FormState) => {
  const fillForm = createFillForm(formState);
  dispatch(setForm({ formName: 'uncontrolledForms', newForm: fillForm }));
  dispatch(resetState());
};

export default useSubmitForm;
