import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout, refreshUser } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      console.log('rejected register', state, action.payload);
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected](state, action) {
      console.log('rejected login', state, action.payload);
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.rejected](state, action) {
      console.log('rejected logout', action.payload);
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state, action) {
      console.log('rejected logout', action.payload);
    },
  },
});

export default authSlice.reducer;
