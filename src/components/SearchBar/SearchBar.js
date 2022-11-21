import React, { useState, useEffect, useCallback } from 'react';
import SearchButton from '../SearchButton';
import SelectSearch from 'react-select-search';
import { fetchCurrencyPriceByQuery } from '../API/API';
import 'react-select-search/style.css';
import styles from './SearchBar.module.scss';

export default function SearchBar({ data, onSubmit }) {
  const [query, setQuery] = useState('');
  const [currentValue, setCurrentValue] = useState('');

  const getLiveData = useCallback(() => {
    fetchCurrencyPriceByQuery(currentValue.replace('/', '')).then(newValue => {
      onSubmit(newValue);
    });
  }, [onSubmit, currentValue]);

  useEffect(() => {
    if (query && query === currentValue) {
      setTimeout(() => {
        getLiveData();
      }, [1000]);
    }
  }, [query, getLiveData, data, currentValue]);

  const handleSubmit = e => {
    e.preventDefault();
    setCurrentValue(query);
    if (!query) {
      alert('Search field is empty');
    }
  };

  const options = data.map(({ ticker }) => {
    return { name: ticker, value: ticker };
  });

  return (
    <div className={styles.SearchBar__Wrapper}>
      <h1 data-testid="title-1" className={styles.SearchBar__Title}>
        Search a currency
      </h1>
      <div className={styles.SearchBar__Form__Wrapper}>
        <form className={styles.SearchBar__Form} onSubmit={handleSubmit}>
          <SelectSearch
            options={options}
            id="currency"
            name="currency"
            placeholder="Choose currency pair"
            search={true}
            onChange={setQuery}
            value={query}
          />
          <SearchButton />
        </form>
      </div>
    </div>
  );
}
