import { configureStore } from '@reduxjs/toolkit';
import {ContactsReducer} from './contactsSlice';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: filterReducer,
  },
});

