import { FC, useEffect, useState } from 'react';

import { fillFormState } from '../../../types/types';

import styles from './FilledForm.module.css';
import fromTheCapitalLetter from './utils/FromTheCapitalLetter';

type FilledFormType = {
  form: fillFormState;
  index: number;
};

const FilledForm: FC<FilledFormType> = ({ form, index }) => {
  const [fillForm, setFillForm] = useState(form);

  useEffect(() => setFillForm(form), []);

  const { image } = fillForm;
  const formArray = Object.entries(fillForm).map(([key, value]) => ({
    key,
    value,
  }));

  const notMappedValues = ['image', 'accept', 'confirmPassword'];

  return (
    <form className={styles.form}>
      <h3 className={styles.inner}>Form #{index + 1}</h3>
      <img className={styles.image} src={image.base64 ?? ''} alt="uploaded" />
      {formArray.map(
        (property) =>
          !notMappedValues.includes(property.key) && (
            <div key={Math.random()} className={styles.container}>
              <label htmlFor={property.key}>
                {fromTheCapitalLetter(property.key)}:
              </label>
              <input
                className={styles.input}
                type="text"
                value={property.value as string}
                readOnly
              />
            </div>
          )
      )}
      <label htmlFor="accept">
        <input type="checkbox" name="accept" id="accept" checked readOnly />I
        accept the Terms and Conditions
      </label>
    </form>
  );
};

export default FilledForm;