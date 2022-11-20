// import "./App.css";
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import LiveWall from './components/LiveWall';
import { fetchCurrency } from './components/API/API';

function App() {
  const [currencyData, setCurrencyData] = useState([]);
  const [currencyPair, setCurrencyPair] = useState([]);

  const handleFormSubmit = data => {
    setCurrencyData(data);
  };

  useEffect(() => {
    fetchCurrency().then(data => {
      setCurrencyPair(data);
    });
  }, []);
  return (
    <div>
      <SearchBar data={currencyPair} onSubmit={handleFormSubmit} />
      <LiveWall data={currencyData} />
    </div>
  );
}

export default App;
