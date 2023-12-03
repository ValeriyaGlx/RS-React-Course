import FilledForm from '../../widgets/FilledForm/FilledForm';
import { useAppSelector } from '../../App/store/hooks';

import styles from './MainPage.module.css';

const MainPage = () => {
  const { uncontrolledForms, reactHookForms } = useAppSelector(
    (state) => state.MainPageSlice
  );

  return (
    <>
      <h1>Main Page</h1>
      <div className={styles.container}>
        <section>
          {uncontrolledForms.map((form, index) => (
            <FilledForm
              key={Math.random()}
              form={form}
              index={index}
              type="Uncontrolled"
            />
          ))}
        </section>
        <section>
          {reactHookForms.map((form, index) => (
            <FilledForm
              key={Math.random()}
              form={form}
              index={index}
              type="React Hook"
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default MainPage;
