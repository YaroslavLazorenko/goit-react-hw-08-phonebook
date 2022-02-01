import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookApi from 'services/phonebook-api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await phonebookApi.registerNewUser(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const data = await phonebookApi.loginUser(credentials);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
