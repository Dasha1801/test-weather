import { fetchWeather } from '../api';
import { IWeather } from '../components/shared/interfaces';
import { getData } from './slices/weatherSlice';

export const getDataWeather = (city = 'Minsk,by') =>
  async function getWeather(dispatch: (arg0: { payload: IWeather; type: string }) => void) {
    const { data } = await fetchWeather(city);
    dispatch(getData({ name: data.name, icon: data.weather[0].icon, temp: data.main.temp }));
  };
