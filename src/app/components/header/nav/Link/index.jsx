import Link from 'next/link';
import styles from './style.module.scss';

const index = ({ data }) => {
  return (
    <div className={styles.link}>
      <Link href={data.title}>{data.title}</Link>
    </div>
  );
};

export default index;
