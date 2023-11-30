import React, { useState } from 'react';

import styles from './CountrySelect.module.css';

const countries = ['Afghanistan', 'Albania', 'Algeria', 'Zimbabwe'];

const AutocompleteCountry = () => {
  const [inputValue, setInputValue] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setDropdownVisible(value.length > 0);
  };

  const handleSelectCountry = (country: string) => {
    setInputValue(country);
    setDropdownVisible(false);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Country"
        value={inputValue}
        onChange={handleInputChange}
      />

      {isDropdownVisible && (
        <ul className={styles.dropdown}>
          {countries
            .filter((country) =>
              country.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((country) => (
              <li
                aria-hidden="true"
                className={styles.dropdownList}
                key={country}
                onClick={() => handleSelectCountry(country)}
              >
                {country}
              </li>
            ))}
        </ul>
      )}
      <div className={styles.error}>error message</div>
    </div>
  );
};

export default AutocompleteCountry;
