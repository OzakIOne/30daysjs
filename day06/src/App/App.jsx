import React, { useState } from 'react';
import styles from './styles.module.css';

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const data = [];
fetch(endpoint)
  .then((e) => e.json())
  .then((e) => e.forEach((el) => data.push(`${el.city}, ${el.state}`)));

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const results = !searchTerm
    ? data
    : data.filter((person) => person.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  return (
    <div>
      <form className={styles.searchform}>
        <input
          type="text"
          className={styles.search}
          placeholder="City or State"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul className={styles.suggestions}>
          {results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};
