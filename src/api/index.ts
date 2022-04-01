import axios from 'axios';
import { API_KEY, weatherUrl } from '../constants';

export const fetchWeather = (city: string) => axios.get(`${weatherUrl}${city}&APPID=${API_KEY}`);

