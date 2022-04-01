import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWeather, IStateWeather } from '../../components/shared/interfaces';

const initialState: IStateWeather = {
  weather: {
    name: '',
    icon: '',
    temp: 0
  }
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getData: (state, { payload }: PayloadAction<IWeather>) => {
      state.weather = payload;
    },
  },
});

export const weather_reducer = weatherSlice.reducer;
export const { getData } = weatherSlice.actions;
