import React from 'react';
import CityOptions from '../cityOptions/cityOptions';
import Heading from '../shared/heading/heading';
import Weather from '../weather/weather';
import styles from './userPage.module.scss';


function UserPage(): JSX.Element {
  return <main className={styles.main}>
    <Heading text='Weather' />
    <Weather />
    <CityOptions />
  </main>
}

export default UserPage;
