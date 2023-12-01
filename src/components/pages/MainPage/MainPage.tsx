import FilledForm from '../../widgets/FilledForm/FilledForm';
import { useAppSelector } from '../../App/store/hooks';

const MainPage = () => {
  const uncontrolledForms = useAppSelector(
    (state) => state.MainPageSlice.uncontrolledForms
  );

  return (
    <>
      <h1>Main Page</h1>
      <section>
        <h3>Uncontrolled Forms:</h3>
        {uncontrolledForms.map((form, index) => (
          <FilledForm key={Math.random()} form={form} index={index} />
        ))}
      </section>
    </>
  );
};

export default MainPage;
