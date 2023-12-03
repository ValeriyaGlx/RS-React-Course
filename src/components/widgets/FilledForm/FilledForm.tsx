import { FC, useEffect, useState } from 'react';

import { fillFormState, ImageInfoType } from '../../../types/types';

import styles from './FilledForm.module.css';
import fromTheCapitalLetter from './utils/FromTheCapitalLetter';

type FilledFormType = {
  form: fillFormState;
  index: number;
  isNew: boolean;
};

const FilledForm: FC<FilledFormType> = ({ form, index, isNew }) => {
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
      <img
        className={styles.image}
        src={(image as ImageInfoType).base64 ?? (image as string) ?? ''}
        alt="uploaded"
      />
      {formArray.map(
        (property) =>
          !notMappedValues.includes(property.key) && (
            <div key={property.key} className={styles.container}>
              <label htmlFor={property.key}>
                {fromTheCapitalLetter(property.key)}
                {property.key === 'password' && (
                  <span className={styles.confirmed}> confirmed</span>
                )}
                :
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
      <div className={styles.label}>
        <input type="checkbox" name="accept" id="accept" checked readOnly />I
        accept the Terms and Conditions
      </div>
      {isNew && <div className={styles.new}>New!</div>}
    </form>
  );
};

export default FilledForm;
