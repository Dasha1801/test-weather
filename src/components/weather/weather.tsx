import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from '../../redux';
import { getIcon, getTemp } from '../../utils';
import styles from './weather.module.scss';


function Weather(): JSX.Element {
  const { weather } = useSelector((state: TStore) => state.weather);

  return (
    <div className={styles.weather}>
      <h6>{weather.name}</h6>
      <img src={getIcon(weather.icon)} className={styles.icon} alt='icon' />
      <span>{getTemp(weather.temp)}</span>
    </div>
  )
}

export default Weather;
