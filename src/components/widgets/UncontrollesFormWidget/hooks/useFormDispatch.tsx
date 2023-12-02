import setInputValueWithValidation from '../UncontrolledFormWidgetAction';
import { ImageInfoType } from '../../../../types/types';
import { AppDispatch } from '../../../App/store/store';

const useFormDispatch = (
  dispatch: AppDispatch,
  array1: { inputName: string; inputValue: string }[],
  array2: { inputName: string; inputValue: string | true | ImageInfoType }[]
) => {
  array1.forEach((value) => {
    dispatch(setInputValueWithValidation(value.inputName, value.inputValue));
  });

  array2.forEach((value) => {
    dispatch(setInputValueWithValidation(value.inputName, value.inputValue));
  });
};

export default useFormDispatch;
