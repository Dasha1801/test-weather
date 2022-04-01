import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cities } from '../../constants';
import { TStore } from '../../redux';
import { getDataWeather } from '../../redux/asyncActions';
import styles from './cityOptions.module.scss';

function CityOptions(): JSX.Element {
  const { name } = useSelector((state: TStore) => state.weather.weather)
  const dispatch = useDispatch();

  return (
    <select className={styles.select} onChange={(e) => getDataWeather(e.target.value)(dispatch)}>
      {cities.map(el => <option value={el.id} key={el.name} selected={el.name === name}>{el.name}</option>)}
    </select>
  )
}

export default CityOptions;
