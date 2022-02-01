import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './auth/auth-slice';
import contactsReducer from './phonebook/phonebook-reducer';

const isDevelopment = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer: { auth: authReducer, contacts: contactsReducer },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
  devTools: isDevelopment,
});
