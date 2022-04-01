import { combineReducers } from '@reduxjs/toolkit';
import { logIn_reducer } from './slices/logInSlice';
import { weather_reducer } from './slices/weatherSlice';

const rootReducer = combineReducers({
  logIn: logIn_reducer,
  weather: weather_reducer
});

export default rootReducer;
