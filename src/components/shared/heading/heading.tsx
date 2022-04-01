import React from 'react';
import { IHeading } from '../interfaces'
import styles from './heading.module.scss';

function Heading({ text }: IHeading): JSX.Element {
  return <h3 className={styles.heading}>{text}</h3>
}

export default Heading;
