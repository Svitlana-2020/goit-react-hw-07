import { configureStore } from '@reduxjs/toolkit';
import {ContactsReducer} from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
  },
});

