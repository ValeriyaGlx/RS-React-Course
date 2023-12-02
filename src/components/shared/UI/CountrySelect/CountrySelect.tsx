import React, { FC, useState } from 'react';

import { useAppSelector } from '../../../App/store/hooks';
import CountryDataList from '../CountryDataList/CountryDataList';

import styles from './CountrySelect.module.css';

type AutocompleteCountryProps = {
  onCountryChanged: (country: string) => void;
  errorMessage: string | undefined | null;
};

const AutocompleteCountry: FC<AutocompleteCountryProps> = ({
  onCountryChanged,
  errorMessage,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedFromDropdown, setSelectedFromDropdown] = useState(false);
  const countries = useAppSelector((store) => store.countriesList);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setSelectedFromDropdown(false);
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
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Country"
        list="countryList"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <CountryDataList />
      <div className={styles.error}>{errorMessage}</div>
    </div>
  );
};

export default AutocompleteCountry;
