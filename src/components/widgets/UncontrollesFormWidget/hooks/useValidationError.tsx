import { useAppSelector } from '../../../App/store/hooks';

const useValidationError = (name: string) => {
  return useAppSelector(
    (state) => state.uncontrolledFormWidgetReducer[name].validationError
  );
};

export default useValidationError;
