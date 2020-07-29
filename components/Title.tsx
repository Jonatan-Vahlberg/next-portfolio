import * as React from 'react';
import styles from './Title.module.css';
const Title: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.underline} />
    </div>
  );
};

export default Title;
