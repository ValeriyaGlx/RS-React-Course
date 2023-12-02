import { useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { INPUT_TYPES } from '../../shared/constants/constants';
import ValidationInput from '../../shared/UI/ValidationInput/ValidationInput';

import styles from './ReactHookFormWidget.module.css';
import validationSchema from './utils/validationSchema';

interface FormData {
  name: string;
  email: string;
  password: string | undefined;
  confirmPassword: string | undefined;
  age: number;
}

const ReactHookFormWidget = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const onSubmit = () => {
    console.log('submit');

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {INPUT_TYPES.map(({ type, inputName, placeholder }) => (
        <ValidationInput
          key={Math.random()}
          inputRef={null}
          errorMessage={errors[inputName as keyof FormData]?.message}
          register={register as UseFormRegister<FormData>}
          type={type}
          placeholder={placeholder}
          inputName={inputName}
        />
      ))}
    </form>
  );
};

export default ReactHookFormWidget;
