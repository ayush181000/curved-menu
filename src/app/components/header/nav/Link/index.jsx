import Link from 'next/link';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { slide } from '../../anim';

const index = ({ data }) => {
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.link}
    >
      <Link href={data.title}>{data.title}</Link>
    </motion.div>
  );
};

export default index;
