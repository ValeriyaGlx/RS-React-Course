import React, { FC, useState } from 'react';

import { useAppSelector } from '../../../App/store/hooks';

import styles from './CountrySelect.module.css';

type AutocompleteCountryProps = {
  onCountryChanged: (country: string) => void;
};

const AutocompleteCountry: FC<AutocompleteCountryProps> = ({
  onCountryChanged,
}) => {
  const errorMessage = useAppSelector(
    (state) => state.uncontrolledFormWidgetReducer.country.validationError
  );
  const [inputValue, setInputValue] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFromDropdown, setSelectedFromDropdown] = useState(false);
  const countries = useAppSelector((store) => store.countriesList);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setDropdownVisible(value.length > 0);
    setSelectedFromDropdown(false);
  };

  const handleSelectCountry = (country: string) => {
    setInputValue(country);
    setDropdownVisible(false);
    setSelectedFromDropdown(true);
    onCountryChanged(country);
  };

  const handleBlur = () => {
    const matchedCountry = countries.find(
      (country) => country.toLowerCase() === inputValue.toLowerCase()
    );

    if (matchedCountry) {
      onCountryChanged(matchedCountry);
    } else if (!selectedFromDropdown) {
      onCountryChanged('');
    }
    setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Country"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
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
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default AutocompleteCountry;
