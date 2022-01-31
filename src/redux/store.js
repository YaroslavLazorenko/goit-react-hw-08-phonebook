import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './auth/auth-slice';
import contactsReducer from './phonebook/phonebook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const isDevelopment = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer: { auth: authReducer, contacts: contactsReducer },
  middleware,
  devTools: isDevelopment,
});
