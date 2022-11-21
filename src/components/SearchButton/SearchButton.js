import React from 'react';
import styles from './SearchButton.module.scss';
import { ImSearch } from 'react-icons/im';

function SearchButton() {
  return (
    <button data-testid="btn-1" className={styles.Button} type="submit">
      <ImSearch style={{ width: 22, height: 22 }} />
    </button>
  );
}

export default SearchButton;
