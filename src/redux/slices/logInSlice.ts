import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStateLogIn } from '../../components/shared/interfaces';

const initialState: IStateLogIn = {
  isLogin: false
};

const logInSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {
    logIn: (state, { payload }: PayloadAction<boolean>) => {
      state.isLogin = payload;
    },
  },
});

export const logIn_reducer = logInSlice.reducer;
export const { logIn } = logInSlice.actions;
