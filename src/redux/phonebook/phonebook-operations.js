import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookApi from 'services/phonebook-api';

export const fetchContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const postContact = createAsyncThunk(
  'phonebook/postContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const id = await phonebookApi.postContact({ name, number });
      return { id, name, number };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await phonebookApi.deleteContact(id);
      return { id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
