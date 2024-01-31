/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import Nav from './nav/index';
import { AnimatePresence } from 'framer-motion';

const index = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <div
        className={styles.button}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
        ></div>
      </div>
      <AnimatePresence mode='wait'>{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default index;
