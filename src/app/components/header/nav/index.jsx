import React from 'react';
import styles from './style.module.scss';
import Link from './Link/index';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';

const index = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Work', href: '/work' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit={'exit'}
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link key={index} data={{ ...item, index }} />;
          })}
        </div>
        <div className={styles.footer}>
          <a href=''>Instagram</a>
          <a href=''>Github</a>
          <a href=''>Twitter</a>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
