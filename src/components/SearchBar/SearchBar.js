import React, { useState, useEffect, useCallback } from 'react';
import { fetchCurrencyPriceByQuery } from '../API/API';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';

export default function SearchBar({ data, onSubmit }) {
  const [query, setQuery] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [timeout, setTimeoutValue] = useState(0);

  const getLiveData = useCallback(() => {
    fetchCurrencyPriceByQuery(currentValue.replace('/', '')).then(newValue => {
      onSubmit(newValue);
    });
  }, [onSubmit, currentValue]);

  useEffect(() => {
    if (query && query === currentValue) {
      setTimeout(() => {
        getLiveData();
        setTimeoutValue(2000);
      }, timeout);
    }
  }, [query, getLiveData, data, currentValue, timeout]);

  const handleSubmit = e => {
    e.preventDefault();
    setCurrentValue(query);
    setTimeoutValue(0);
  };

  const options = data.map(({ ticker }) => {
    return { name: ticker, value: ticker };
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SelectSearch
          options={options}
          id="currency"
          name="currency"
          placeholder="Choose currency pair"
          search={true}
          onChange={setQuery}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
