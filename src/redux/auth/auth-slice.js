import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      console.log('fulfilled', state, action);
    },
    [register.rejected](state, action) {
      console.log('rejected', state, action);
    },
  },
});

export default authSlice.reducer;
