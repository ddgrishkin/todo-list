import React from 'react';

import './styles.css';
import styles from './styles.css.json';

const Button = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
