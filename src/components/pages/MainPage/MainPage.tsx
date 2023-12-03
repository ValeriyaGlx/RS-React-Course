import FilledForm from '../../widgets/FilledForm/FilledForm';
import { useAppSelector } from '../../App/store/hooks';
import image from '../../../assets/images/fillform.png';

import styles from './MainPage.module.css';

const MainPage = () => {
  const { filledForms } = useAppSelector((state) => state.MainPageSlice);

  if (filledForms.length === 0) {
    return (
      <>
        <h1 className={styles.inner}>Hi! There are no filled forms yet.</h1>
        <img className={styles.image} src={image} alt="fillform" />
        <h2> Please, move to the Forms Pages and fill it up first!</h2>
      </>
    );
  }

  return (
    <>
      <h1>Filled Forms:</h1>
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
