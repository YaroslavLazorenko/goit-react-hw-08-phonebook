import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookApi from 'services/phonebook-api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const id = await phonebookApi.registerNewUser(credentials);
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
