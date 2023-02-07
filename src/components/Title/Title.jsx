import React from 'react';
import styles from './_Title.module.scss';

function Title({ title }) {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
}

export default Title;
