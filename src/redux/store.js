import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import carReducer from './cars/carSlice';
import filterReducer from './filters/filtersSlice';
import favoritesReducer from './favorites/favoritesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    cars: carReducer,
    filter: filterReducer,
    favorites: persistReducer(persistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
