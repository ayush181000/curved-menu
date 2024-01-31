/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import Nav from './nav/index';

const index = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={styles.button}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div
        className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
      >
        <Nav />
      </div>
    </div>
  );
};

export default index;
