import axios from 'axios';

export const URL = {
  BASE: 'https://financialmodelingprep.com/api/v3/fx',
  KEY: '48efd57af4a797f7067c8dc5f3dda201',
};

axios.defaults.baseURL = URL.BASE;
axios.defaults.params = {
  apikey: URL.KEY,
};

export async function fetchCurrency() {
  const { data } = await axios(URL.BASE);
  return data;
}

export async function fetchCurrencyPriceByQuery(currencyPair) {
  const { data } = await axios(`${URL.BASE}/${currencyPair}`);
  return data;
}
