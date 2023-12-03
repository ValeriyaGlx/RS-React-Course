import FilledForm from '../../widgets/FilledForm/FilledForm';
import { useAppSelector } from '../../App/store/hooks';

import styles from './MainPage.module.css';

const MainPage = () => {
  const { filledForms } = useAppSelector((state) => state.MainPageSlice);

  return (
    <>
      <h1>Main Page</h1>
      <div className={styles.container}>
        {filledForms.map((form, index) => (
          <FilledForm
            key={Math.random()}
            form={form}
            index={index}
            isNew={index === filledForms.length - 1}
          />
        ))}
      </div>
    </>
  );
};

export default MainPage;
